'use server';

import { z } from 'zod';
import { redirect } from 'next/navigation';

const signupSchema = z
  .object({
    email: z
      .string()
      .email({ message: '이메일 형식이 올바르지 않습니다.' })
      .trim(),
    name: z.string().min(1, { message: '이름은 필수입니다' }).trim(),
    password: z
      .string()
      .min(8, { message: '비밀번호는 최소 8자 입니다.' })
      .trim(),
    confirmPassword: z.string().trim(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['confirmPassword'],
  });

const users: { email: string; name: string; password: string }[] = [
  {
    email: 'test@test.com',
    name: 'Test User',
    password: '12345678',
  },
];

// 회원가입 함수
export async function signup(formData: FormData): Promise<{
  errors: Record<string, string[]>;
} | void> {
  // 1. 입력값 검증
  const parsedData = Object.fromEntries(formData) as Record<string, string>;
  const result = signupSchema.safeParse(parsedData);

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  // 2. 데이터 추출
  const { email, name, password } = result.data;

  // 3. 이메일 중복 확인 (테스트 저장소 사용)
  if (users.some((user) => user.email === email)) {
    return {
      errors: {
        email: ['This email is already registered'],
      },
    };
  }

  // 4. 사용자 데이터 저장
  users.push({ email, name, password });

  // 5. 성공 시 리다이렉트
  redirect('/login');
}

// 로그인 함수
export async function login(formData: FormData): Promise<{
  errors: Record<string, string[]>;
} | void> {
  // 1. 데이터 추출
  const parsedData = Object.fromEntries(formData) as Record<string, string>;
  const { email, password } = parsedData;

  // 3. 사용자 확인 (테스트 저장소 사용)
  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  if (!user) {
    return {
      errors: {
        email: ['Invalid email or password'],
      },
    };
  }

  // 4. 성공 시 리다이렉트
  redirect('/lobby');
}
