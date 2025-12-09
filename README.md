# Scroll Event Examples

다양한 Scroll UI 컴포넌트와 인터랙션 예제를 모아둔 React 프로젝트입니다. Scroll Event와 관련된 UI 구현을 연습하고 학습하기 위해 만들어졌습니다.

## 🚀 기술 스택

- **Tailwind CSS** - 유틸리티 기반 CSS 프레임워크
- **React Router** - 클라이언트 사이드 라우팅

## 📁 프로젝트 구조

```
src/
├── components/          # 재사용 가능한 컴포넌트
│   ├── SliceSlider/    # Slice Slider 관련 컴포넌트
│   ├── MainHeader.tsx  # 메인 헤더
│   ├── MainLayout.tsx  # 메인 레이아웃
│   └── NavLink.tsx     # 네비게이션 링크
├── lib/                # 유틸리티 함수
├── pages/              # 페이지 컴포넌트
├── router/             # 라우터 설정
└── App.tsx            # 메인 앱 컴포넌트
```

## 🎯 페이지별 특징

### 1. 메인 페이지 (/)

**설명**: 프로젝트의 메인 페이지로, 각 Scroll 예제 페이지로 이동할 수 있는 네비게이션을 제공합니다.

### 2. Scroll Snap 페이지 (/scroll-snap)

**설명**: 풀 페이지 스크롤 스냅 레이아웃을 구현한 페이지입니다.

**주요 기능**:
- 마우스 휠을 이용한 페이지 전환 (위/아래 스크롤)
- 부드러운 스크롤 애니메이션 (1초 duration)
- 우측에 위치한 페이지 인디케이터 (현재 위치 시각화)
- 광클/광스크롤 방지 기능 (애니메이션 중 이벤트 차단)

**기술적 특징**:
- `useRef`를 활용한 상태 관리 (최신 state 값 접근)
- `preventDefault()`를 통한 기본 스크롤 동작 제어
- CSS `transform`을 이용한 효율적인 페이지 전환

### 3. Slice Slider 페이지 (/slice-slider)

**설명**: 슬라이스 형태의 슬라이더 컴포넌트를 구현한 페이지입니다.

**주요 기능**:
- 스크롤 이벤트를 이용한 슬라이드 전환
- 키보드 네비게이션 지원 (화살표 키)
- Next/Prev 버튼을 통한 수동 제어
- 순환 슬라이드 기능 (마지막에서 첫 페이지로)

**컴포넌트 구조**:
- **SliceSlider**: 메인 컨테이너 컴포넌트
- **Slide**: 개별 슬라이드 컴포넌트
- **SlideSection**: 슬라이드 내용 섹션
- **ContentText**: 애니메이션 텍스트 컴포넌트
- **SliceSliderButton**: 네비게이션 버튼

**기술적 특징**:
- 컴포넌트 합성을 통한 유연한 구조
- `useCallback`을 이용한 성능 최적화
- 이벤트 위임 패턴을 활용한 이벤트 관리

## 🛠️ 설치 및 실행

```bash

# 개발 서버 실행
pnpm dev

```
