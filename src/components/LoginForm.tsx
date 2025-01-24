'use client';

import { useState } from 'react';
import { login } from '../app/(auth)/actions';

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string[]>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({}); // 기존 에러 초기화

    const formData = new FormData(e.currentTarget);

    const result = await login(formData);
    if (result?.errors) {
      setErrors(result.errors); // 서버에서 반환된 에러 설정
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[505px] h-[700px] flex-shrink-0 rounded-[10px] border-[0.5px] border-[#878787] bg-white p-8 flex flex-col justify-between"
    >
      <div>
        <div className="space-y-2 mb-8">
          <h1 className="text-2xl font-semibold">Login</h1>
          <p className="text-base">
            계정이 없으신가요?{' '}
            <a href="/signup" className="text-[#2D76CE] hover:underline">
              가입하기
            </a>
          </p>
        </div>

        <div className="space-y-6 mb-16">
          <div className="space-y-2">
            <label htmlFor="email" className="text-base font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="이메일을 입력해주세요."
              className="w-full h-12 px-3 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2D76CE]"
            />
            <p className="h-4 text-red-500 text-sm">
              {errors.email?.[0] || ''}
            </p>
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-base font-medium">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="비밀번호를 입력해주세요."
                className="w-full h-12 px-3 py-2 pr-10 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2D76CE]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
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
                    className="w-5 h-5"
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
          </div>
        </div>

        <button className="w-full h-12 bg-[#ff3366] hover:bg-pink-300/90 text-white text-base font-medium rounded-md transition-colors">
          LOGIN
        </button>
      </div>
    </form>
  );
}
