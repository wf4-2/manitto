## 🎉 초기 설정

### ➕ `pnpm add`

```bash
pnpm add @heroui/react @heroui/theme framer-motion lucide-react
```

- **@heroui/react**: HeroUI React 컴포넌트 라이브러리.
- **@heroui/theme**: HeroUI의 테마 시스템.
- **framer-motion**: 애니메이션 구현 라이브러리.
- **lucide-react**: SVG 기반 아이콘 라이브러리.

### 🧑‍💻 `pnpm add -D`

```bash
pnpm add -D @eslint/js @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-unused-imports eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-tailwindcss @rushstack/eslint-patch eslint-plugin-prettier eslint-plugin-unused-imports
```

- **@eslint/js**: ESLint용 JavaScript 코드 품질 검사.
- **@typescript-eslint/eslint-plugin**: TypeScript 전용 ESLint 규칙 제공.
- **@typescript-eslint/parser**: ESLint가 TypeScript 코드를 이해하도록 지원.
- **eslint-config-prettier**: Prettier와 충돌하는 ESLint 규칙 비활성화.
- **eslint-plugin-prettier**: ESLint에서 Prettier 문제를 표시.
- **eslint-plugin-react**: React 전용 ESLint 규칙 제공.
- **eslint-plugin-react-hooks**: React Hooks 사용 시 권장 규칙.
- **eslint-plugin-tailwindcss**: TailwindCSS 클래스 검사를 위한 규칙.
- **eslint-plugin-unused-imports**: 사용하지 않는 import와 변수를 감지하고 제거.
- **@rushstack/eslint-patch**: ESLint의 플러그인 동작을 안정화.
- **eslint-plugin-prettier**: ESLint에서 Prettier 규칙을 검사 및 경고.
- **eslint-plugin-unused-imports**: 사용하지 않는 import 및 변수를 감지하고 제거.

---

## 📝 변경된 부분과 이유

### 1. **Prettier 추가 (`compat.extends`에 `prettier` 추가)**

- 코드 스타일을 일관성 있게 유지하고, Prettier와 ESLint 규칙 간 충돌을 방지하기 위해 추가.

### 2. **플러그인 추가**

- `@typescript-eslint/eslint-plugin`: TypeScript 규칙을 통해 강력한 타입 검사와 코드 품질 향상을 위해 추가.
- `eslint-plugin-unused-imports`: 사용하지 않는 import 및 변수를 감지하고 제거하기 위해 추가.

### 3. **규칙 추가**

- `@typescript-eslint/no-unused-vars`: 선언했지만 사용하지 않는 변수를 경고. `_`로 시작하는 변수와 매개변수는 예외 처리.
  ```javascript
  '@typescript-eslint/no-unused-vars': [
    'warn',
    { argsIgnorePattern: '^_' },
  ],
  ```
- `@typescript-eslint/no-explicit-any`: `any` 타입 사용을 경고하여 강력한 타입 시스템을 유지.
  ```javascript
  '@typescript-eslint/no-explicit-any': 'warn',
  ```
- `@typescript-eslint/consistent-type-imports`: 타입 import를 일관되게 사용하도록 강제.
  ```javascript
  '@typescript-eslint/consistent-type-imports': 'warn',
  ```
- `@typescript-eslint/explicit-function-return-type`: 함수 반환 타입 명시를 강제하여 코드 명확성을 유지.
  ```javascript
  '@typescript-eslint/explicit-function-return-type': 'warn',
  ```
- `@typescript-eslint/prefer-ts-expect-error`: `@ts-ignore` 대신 `@ts-expect-error` 사용을 권장.
  ```javascript
  '@typescript-eslint/prefer-ts-expect-error': 'warn',
  ```
- `@typescript-eslint/no-floating-promises`: 처리되지 않은 Promise를 금지하여 안정성을 강화.
  ```javascript
  '@typescript-eslint/no-floating-promises': 'error',
  ```
- `@typescript-eslint/no-misused-promises`: 잘못된 Promise 사용(예: 조건문에서 Promise 사용)을 방지.
  ```javascript
  '@typescript-eslint/no-misused-promises': 'error',
  ```
- `unused-imports/no-unused-imports`: 사용하지 않는 import를 감지하고 자동으로 제거.
  ```javascript
  'unused-imports/no-unused-imports': 'warn',
  ```
- `unused-imports/no-unused-vars`: 사용되지 않는 변수 및 매개변수를 감지하고 경고. `_`로 시작하는 변수와 매개변수는 예외 처리.
  ```javascript
  'unused-imports/no-unused-vars': [
    'warn',
    {
      vars: 'all',
      varsIgnorePattern: '^_',
      args: 'after-used',
      argsIgnorePattern: '^_',
    },
  ],
  ```
- `no-console`: `console.log` 사용을 경고하여 디버깅 코드를 방지.
  ```javascript
  'no-console': 'warn',
  ```
- `no-debugger`: `debugger` 사용을 금지하여 의도치 않은 디버깅 코드 방지.
  ```javascript
  'no-debugger': 'error',
  ```
- `curly`: 조건문에서 중괄호 사용을 강제하여 가독성과 안정성 강화.
  ```javascript
  curly: ['error', 'all'],
  ```
- `eqeqeq`: 엄격한 비교(`===`) 사용을 강제하여 예기치 않은 형 변환 방지.
  ```javascript
  eqeqeq: ['warn', 'always'],
  ```
- `no-implicit-coercion`: 암묵적 형 변환을 방지하여 명확성을 유지.
  ```javascript
  'no-implicit-coercion': 'warn',
  ```
- `prefer-const`: 재할당이 없는 변수는 `const`로 선언하도록 권장.
  ```javascript
  'prefer-const': 'warn',
  ```
- `prettier/prettier`: Prettier 규칙을 따르지 않을 경우 경고. (작은 따옴표, 세미콜론, 쉼표 등 스타일 설정 포함)
  ```javascript
  'prettier/prettier': [
    'warn',
    {
      singleQuote: true,
      semi: true,
      trailingComma: 'all',
    },
  ],
  ```

### 4. **폴더 제외 (`ignores` 추가)**

- `node_modules`, `.next`, `.out`, `public` 등 빌드 산출물과 의존성 폴더는 Lint 검사에서 제외하여 성능 최적화.

### 5. **패키지 추가 이유**

- Prettier와 ESLint 통합으로 코드 스타일과 코드 품질 관리를 한 번에 수행.
- TypeScript와 ESLint 규칙을 결합하여 더 강력한 타입 검사와 정적 분석 지원.
- 사용하지 않는 코드 제거로 프로젝트 유지보수를 용이하게 하고 불필요한 파일을 최소화.
