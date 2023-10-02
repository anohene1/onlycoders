import * as yup from "yup";

export const signupSchema = yup
  .object({
    email: yup
      .string()
      .email("Email must be a valid email")
      .required("Email is required"),
    password: yup
      .string()
      .matches(
        /(?=^.{8,26}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        "Please provide a strong password"
      )
      .required("Password is required"),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password")], "Both Passwords must match")
      .required("Confirm password is required"),
  })
  .required();
