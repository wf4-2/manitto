"use client";

import { useState } from "react";
import { signup } from "../app/(auth)/actions";

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string[]>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({}); // 기존 에러 초기화

    const formData = new FormData(e.currentTarget);

    const result = await signup(formData);
    if (result?.errors) {
      setErrors(result.errors); // 서버에서 반환된 에러 설정
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[600px] h-[800px] flex-shrink-0 rounded-[12px] border-[0.5px] border-[#878787] bg-white p-10 flex flex-col justify-between"
    >
      <div className="space-y-10">
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold">Sign up</h1>
          <p className="text-lg">
            계정이 있으신가요?{" "}
            <a href="/login" className="text-[#2D76CE] hover:underline">
              로그인
            </a>
          </p>
        </div>

        <div className="space-y-8">
          {/* Email Field */}
          <div className="space-y-1">
            <label htmlFor="email" className="text-lg font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="이메일을 입력해주세요."
              className="w-full h-14 px-4 py-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2D76CE]"
            />
            <p className="h-4 text-red-500 text-sm">
              {errors.email?.[0] || ""}
            </p>
          </div>

          {/* Name Field */}
          <div className="space-y-1">
            <label htmlFor="name" className="text-lg font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="이름을 입력해주세요."
              className="w-full h-14 px-4 py-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2D76CE]"
            />
            <p className="h-4 text-red-500 text-sm">
              {errors.name?.[0] || ""}
            </p>
          </div>

          {/* Password Field */}
          <div className="space-y-1">
            <label htmlFor="password" className="text-lg font-medium">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="비밀번호를 입력해주세요."
                className="w-full h-14 px-4 py-2 pr-12 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2D76CE]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                )}
              </button>
            </div>
            <p className="h-4 text-red-500 text-sm">
              {errors.password?.[0] || ""}
            </p>
          </div>

          {/* Confirm Password Field */}
          <div className="space-y-1">
            <label htmlFor="confirmPassword" className="text-lg font-medium">
              Confirm Password
            </label>
            <div className="relative">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="비밀번호를 재입력해주세요."
                className="w-full h-14 px-4 py-2 pr-12 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2D76CE]"
              />
            </div>
            <p className="h-4 text-red-500 text-sm">
              {errors.confirmPassword?.[0] || ""}
            </p>
          </div>
        </div>

        <button className="w-full h-14 bg-[#ff3366] hover:bg-pink-300/90 text-white text-lg font-medium rounded-md transition-colors">
          SIGN UP
        </button>
      </div>
    </form>
  );
}