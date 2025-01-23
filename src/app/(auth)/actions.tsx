'use server';

import { z } from 'zod';
import { redirect } from 'next/navigation';

// 유효성 검증 스키마
const signupSchema = z
  .object({
    email: z.string().email({ message: 'Invalid email address' }).trim(),
    name: z.string().min(1, { message: 'Name is required' }).trim(),
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters' })
      .trim(),
    confirmPassword: z.string().trim(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

// 테스트용 사용자 저장소 (실제로는 데이터베이스 연동 필요)
interface User {
  email: string;
  name: string;
  password: string;
}
const users: User[] = [];

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
  console.log('User registered:', { email, name });

  // 5. 성공 시 대시보드로 리다이렉트
  redirect('/lobby');
}
