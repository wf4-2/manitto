# 마니또 & 랜덤 매칭 기반 캘린더/채팅 플랫폼 기획

### **1. 프로젝트 개요**

- **목적**:
    - 구글 캘린더 연동으로 사용자 일정 관리.
    - **마니또 서비스**를 통한 익명 소통.
    - *랜덤 매칭 기능(친해지길 바라)**로 새로운 스터디 멤버와의 연결.
- **대상**: 스터디 참여자 및 새로운 네트워크를 만들고 싶은 사람들.

---

### **2. 기술 스택 및 디렉토리 구조**

### **A. 기술 스택**

- **프론트엔드**:
    - Next.js 15 (React 19)
    - Tailwind CSS
    - TypeScript
- **상태 관리**: Zustand
- **백엔드**:
    - Next.js API Routes
    - RabbitMQ (메시지 브로커)
    - Google Calendar API
- **기타**:
    - 브라우저 알림(Notification API)
    - OAuth (Google, Kakao, Naver 로그인)

### **B. 디렉토리 구조**

```
manitto/
├── public/                         # 정적 파일 (이미지, 폰트, favicon 등)
├── app/                            # Next.js App Router (페이지 라우트)
│   ├── layout.tsx                  # 공통 레이아웃
│   ├── page.tsx                    # 메인 페이지
│   ├── api/                        # API 라우트
│   │   ├── auth/                   # 소셜 로그인 API
│   │   ├── manitto/                # 마니또 관련 API
│   │   └── calendar/               # 캘린더 관련 API
│   ├── manitto/                    # 마니또 채팅 페이지
│   ├── match/                      # 친해지길 바라 채팅 페이지
│   ├── calendar/                   # 구글 캘린더 연동 페이지
│   └── profile/                    # 내 프로필 페이지
├── components/                     # 공통 컴포넌트 (버튼, 헤더 등)
├── hooks/                          # 공통 훅 (useAuth, useFetch 등)
├── lib/                            # API 호출, 유틸리티
├── styles/                         # TailwindCSS 설정 및 글로벌 스타일
├── utils/                          # 공통 유틸리티 함수
├── types/                          # TypeScript 타입 정의
└── .env                            # 환경변수

```

---

### **3. 주요 기능 및 페이지 구성**

### **A. 소셜 로그인**

- Kakao, Google, Naver를 통한 OAuth 로그인.
- 로그인 성공 후 사용자 정보 저장 및 세션 관리.

### **B. 마니또 서비스 (`/manitto`)**

- **랜덤 매칭**:
    - 로그인 후 자동으로 사용자 매칭.
    - 매칭된 사용자와 **7일 동안 익명 채팅**.
- **채팅 UI**:
    - 실시간 메시지 전송, 읽음 확인.
- **프로필 공개**:
    - 마니또 종료 시, 상대방 프로필 공개 여부 선택 가능.

### **C. 친해지길 바라 서비스 (`/match`)**

- **1회성 랜덤 채팅**:
    - 간단한 프로필 기반 매칭.
    - 대화 종료 후 모든 기록 삭제 및 재매칭 가능.

### **D. 구글 캘린더 연동 (`/calendar`)**

- **일정 관리**:
    - 월간/주간/일간 뷰 제공.
    - 일정 추가, 수정, 삭제 가능.
- **OAuth 연동**:
    - Google Calendar API를 통한 일정 동기화.

### **E. 알림 기능**

- 브라우저 알림을 통한 주요 이벤트 전달:
    - 마니또 매칭 완료, 친해지길 바라 결과, 일정 알림 등.

### **F. 내 프로필 관리 (`/profile`)**

- 닉네임, 상태 메시지 수정.
- 연동된 소셜 계정 정보 확인.

---

### **4. 디자인 컨벤션**

### **A. 색상 팔레트**

| 용도 | 색상 코드 |
| --- | --- |
| Primary | `#4F46E5` |
| Secondary | `#F97316` |
| Background | `#F9FAFB` |
| Text Primary | `#374151` |
| Text Secondary | `#6B7280` |

### **B. 타이포그래피**

- **폰트**: Noto Sans (Google Fonts)
- **텍스트 스타일**:
    - 제목: `font-bold text-xl text-primary`
    - 본문: `text-base text-text-primary`

### **C. 버튼 스타일**

| 유형 | 클래스 |
| --- | --- |
| Primary | `bg-primary text-white hover:bg-secondary` |
| Outline | `border border-primary text-primary` |

---

### **5. 팀원 역할 분담**

1. **UI/UX**:
    - 공통 컴포넌트 개발(Button, Modal 등).
    - 반응형 레이아웃 설계.
2. **프론트엔드 로직**:
    - Zustand를 활용한 상태 관리.
    - 마니또 및 랜덤 매칭 로직 구현.
3. **백엔드**:
    - RabbitMQ와 API Routes를 활용한 메시지 큐 및 데이터 처리.