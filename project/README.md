## 코로나 세계 현황판 만들기

최종 프로젝트 폴더입니다

## 자바스크립트 프로젝트에 타입스크립트 적용하기

0. JSDoc으로 타입 시스템 입히기
    TS 기본 환경 구성을 하기에 너무 파일들이 무거운 경우 사용하면 됨
    // @ts-check

1. 타입스크립트의 기본 환경 구성
    - [ ] NPM 초기화
    - [ ] 타입스크립트 라이브러리 설치
    - [ ] 타입스크립트 설정 파일 생성 및 기본값 추가
    - [ ] 자바스크립트의 파일을 타입스크립트 파일로 변환
    - [ ] `tsc` 명령어로 타입스크립트 컴파일하기

2. 명시적인 `any` 선언하기
    - `tsconfig.json` 파일에 `noImplicitAny` 값을 `true`로 추가
    - 가능한 구체적인 타입으로 타입 정의 => 타입 구체화 작업

3. 프로젝트 환경 구성
    - babel, eslint, prettier 등의 환경 설정

4. 외부 라이브러리 모듈화
5. `strict`  옵션 추가 후 타입 정의

## 참고 자료

- [존스 홉킨스 코로나 현황](https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6)
- [Postman API](https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest#27454960-ea1c-4b91-a0b6-0468bb4e6712)
- [Type Vue without Typescript](https://blog.usejournal.com/type-vue-without-typescript-b2b49210f0b)