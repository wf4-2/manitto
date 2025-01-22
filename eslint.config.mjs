// eslint.config.mjs

import typescriptEslint from '@typescript-eslint/eslint-plugin'; // TypeScript 관련 ESLint 규칙 플러그인
import unusedImports from 'eslint-plugin-unused-imports'; // 사용하지 않는 import를 감지하고 제거하는 플러그인
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc'; // 기존 .eslintrc 스타일을 Flat Config로 변환하기 위한 도구
import eslintPluginPrettier from 'eslint-plugin-prettier'; // Prettier와 ESLint를 통합하는 플러그인

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// FlatCompat 설정
const compat = new FlatCompat({
  baseDirectory: __dirname, // 현재 디렉토리를 기준으로 설정 경로를 잡음
  parser: '@typescript-eslint/parser', // TypeScript 코드를 분석하기 위한 파서 설정
  parserOptions: {
    ecmaVersion: 2020, // ECMAScript 2020 버전 지원
    sourceType: 'module', // ES 모듈을 지원
    project: './tsconfig.json', // TypeScript 프로젝트 설정 파일 경로
  },
  files: ['./src**/*.{ts,tsx}'], // `app` 폴더 내 TypeScript 및 TSX 파일
  rules: {
    '@typescript-eslint/no-floating-promises': 'error', // 처리되지 않은 Promise를 금지
    '@typescript-eslint/no-misused-promises': 'error', // 잘못된 Promise 사용(예: 조건문에서 Promise 사용)을 방지
  },
});

// ESLint 설정
const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'), // Next.js, TypeScript, Prettier 관련 기본 규칙 확장
  {
    plugins: {
      '@typescript-eslint': typescriptEslint, // TypeScript 플러그인
      'unused-imports': unusedImports, // 불필요한 import를 감지
      prettier: eslintPluginPrettier, // Prettier와 ESLint 통합
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'warn', // 사용하지 않는 변수를 경고
        { argsIgnorePattern: '^_' }, // `_`로 시작하는 인자는 예외 처리
      ],
      '@typescript-eslint/no-explicit-any': 'warn', // `any` 타입 사용을 경고
      '@typescript-eslint/consistent-type-imports': 'warn', // 타입 import를 일관되게 작성하도록 강제
      '@typescript-eslint/explicit-function-return-type': 'warn', // 함수 반환 타입 명시를 강제
      '@typescript-eslint/prefer-ts-expect-error': 'warn', // @ts-expect-error 사용 권장

      'unused-imports/no-unused-imports': 'warn', // 사용하지 않는 import를 감지
      'unused-imports/no-unused-vars': [
        'warn', // 사용하지 않는 변수를 경고
        {
          vars: 'all', // 모든 변수를 검사
          varsIgnorePattern: '^_', // `_`로 시작하는 변수는 예외
          args: 'after-used', // 사용 후 남아있는 인자만 검사
          argsIgnorePattern: '^_', // `_`로 시작하는 인자는 예외
        },
      ],

      'no-console': 'warn', // `console.log` 사용을 경고
      'no-debugger': 'error', // `debugger` 사용을 금지
      curly: ['error', 'all'], // 조건문에서 중괄호 사용을 강제
      eqeqeq: ['warn', 'always'], // 엄격한 비교(===) 사용을 강제
      'no-implicit-coercion': 'warn', // 암묵적 형변환을 경고
      'prefer-const': 'warn', // 재할당이 없는 변수는 const로 선언하도록 권장

      'prettier/prettier': [
        'warn', // Prettier 규칙을 따르지 않을 경우 경고
        {
          singleQuote: true, // 작은 따옴표 사용
          semi: true, // 세미콜론 추가
          trailingComma: 'all', // 가능한 모든 곳에 쉼표 추가
        },
      ],
    },
    ignores: [
      'node_modules', // 의존성 폴더 제외
      '.next', // Next.js 빌드 결과 제외
      '.out', // Next.js export 결과 제외
      'public', // 정적 파일 폴더 제외
      '**/*.test.ts', // 테스트 파일 제외
      '**/*.spec.ts', // 테스트 파일 제외
      '.github',
      '.git',
      '.vscode',
    ],
  },
];

export default eslintConfig;
