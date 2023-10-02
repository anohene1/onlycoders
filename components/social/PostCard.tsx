import React from "react";
import Avatar from "../shared/Avatar";

interface IPostCard {
  user: {
    name: string;
    image: string;
    level: string;
    isPro?: boolean;
  };
  children: React.ReactNode;
  commentCount: number;
  shareCount: number;
}

const PostCard: React.FC<IPostCard> = ({
  user,
  children,
  commentCount,
  shareCount,
}) => {
  return (
    <div className="bg-white border mb-8 border-[#F1F5F9] py-5 px-4 rounded-md">
      <div className="flex gap-4 items-center">
        <Avatar image={user.image} level={user.level} />
        <div className="flex gap-2 items-center">
          <p className="text-[#475569] font-semibold">{user.name}</p>
          {user.isPro && (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.5 3.85786 3.85786 0.5 8 0.5C12.1421 0.5 15.5 3.85786 15.5 8ZM11.0227 5.72725C11.2424 5.94692 11.2424 6.30308 11.0227 6.52272L7.27272 10.2727C7.05305 10.4924 6.69695 10.4924 6.47725 10.2727L4.97725 8.77272C4.75758 8.55305 4.75758 8.19695 4.97725 7.97727C5.19692 7.7576 5.55308 7.7576 5.77275 7.97727L6.875 9.07947L8.5511 7.40337L10.2273 5.72725C10.4469 5.50758 10.803 5.50758 11.0227 5.72725Z"
                fill="#2563EB"
              />
            </svg>
          )}
          {user.isPro && (
            <span className="font-medium text-[8px] py-1.5 bg-[#4338CA] px-2 rounded-full text-white">
              Pro Member
            </span>
          )}
        </div>
      </div>
      <div className="my-4">{children}</div>
      <div className="flex justify-between border-t mt-10 text-[12px] border-[#F1F5F9] pt-3">
        <div className="">
          <p>
            <span className="text-[16px] mr-1">😄</span> 1
          </p>
        </div>

        <div className="flex gap-3  text-[#334155]">
          <p>{commentCount} Comments</p>
          <p>{shareCount} Shares</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
