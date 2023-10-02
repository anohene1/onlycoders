import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import { signupSchema } from "@/schema/signup";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  const body = await request.json();
  try {
    signupSchema.validateSync(body, { abortEarly: false });

    await dbConnect();

    const user = await User.findOne({ email: body.email });

    if (user) throw new Error("User with this email already exist");

    const hashPassword = bcrypt.hashSync(body.password, 10);

    const newUser = await User.create({
      email: body.email,
      password: hashPassword,
    });

    return NextResponse.json(
      { message: "Success", user: newUser },
      { status: 200 }
    );
  } catch (err: any) {
    let formErrors: string[] = [];
    if (err?.inner) {
      err.inner.forEach((error: any) => {
        formErrors = [...formErrors, error.message];
      });
      return NextResponse.json({ error: formErrors }, { status: 400 });
    } else {
      return NextResponse.json({ error: [err.message] }, { status: 500 });
    }
  }
}
