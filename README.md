# 📌 Task App - 칸반 보드 방식의 태스크 관리 앱

## 📋 프로젝트 설명

이 프로젝트는 **칸반 보드 방식의 태스크 관리 애플리케이션**입니다. 할일을 3가지 상태(할일, 진행 중, 완료)로 분류하여 시각적으로 관리할 수 있습니다.

## ✨ 주요 기능

- **3개 컬럼 구조**: "할일" → "진행 중" → "완료"로 작업 진행 상황을 시각화
- **LocalStorage 저장**: 페이지 새로고침 후에도 데이터 유지
- **태그 기능**: 각 작업에 여러 태그 추가 가능
- **작업 삭제**: 확인 후 개별 작업 삭제 가능
- **아이콘 기반 UI**: 각 상태별 아이콘으로 직관적인 인터페이스 제공

## 🛠️ 사용 기술

| 기술       | 버전   | 설명                                           |
| ---------- | ------ | ---------------------------------------------- |
| **React**  | 19.2.7 | UI 라이브러리 (상태 관리: useState, useEffect) |
| **Vite**   | 8.1.0  | 빠른 번들러 및 개발 서버                       |
| **CSS**    | -      | 컴포넌트별 모듈식 스타일링                     |
| **ESLint** | 10.5.0 | 코드 품질 검사                                 |

## 📁 프로젝트 구조

```
src/
├── App.jsx              # 메인 컨테이너 (상태 관리, LocalStorage 연동)
├── App.css
├── components/
│   ├── TaskColumn.jsx   # 각 상태별 컬럼 렌더링
│   ├── TaskColumn.css
│   ├── TaskCard.jsx     # 개별 작업 카드 표시
│   ├── TaskCard.css
│   ├── TaskForm.jsx     # 새 작업 입력 폼
│   ├── TaskForm.css
│   ├── Tag.jsx          # 작업 태그 표시
│   └── Tag.css
└── assets/              # 이미지 자산 (아이콘 등)
```

## 🚀 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

### 빌드

```bash
npm build
```

### 린트 검사

```bash
npm run lint
```

### 프리뷰

```bash
npm preview
```

## 📝 컴포넌트 설명

### App.jsx

- 전체 상태 관리 담당
- LocalStorage에 작업 데이터 저장/로드
- 작업 삭제 기능 구현

### TaskColumn

- 상태별(할일/진행 중/완료) 컬럼 렌더링
- TaskCard 컴포넌트 리스트 표시

### TaskCard

- 개별 작업 카드 UI
- 작업 제목과 태그 표시
- 삭제 버튼 기능

### TaskForm

- 새로운 작업 추가 폼
- 작업 제목 및 태그 입력

### Tag

- 작업 태그 표시 컴포넌트

## 💾 데이터 구조

작업은 다음과 같은 구조로 저장됩니다:

```javascript
{
  title: "작업 제목",
  tags: ["태그1", "태그2"],
  status: "todo" | "doing" | "done"
}
```

## 📌 학습 목표

- React의 기본 개념 (useState, useEffect, props) 이해
- 컴포넌트 분해 및 구조화 학습
- LocalStorage API 활용법
- CSS 모듈 방식 스타일링

초심자 및 React 학습용으로 적합한 프로젝트입니다.
