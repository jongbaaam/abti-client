# ABTI

<div align="center">

  <img src="https://github.com/user-attachments/assets/ebff20b0-53e2-4cc3-bbdc-00e1e99d40d7" />

<br>

**ABTI**는 웹 사이트에 A/B 테스트 환경을 구축하고 진행한 테스트의 검증된 결과를 제공하는 서비스입니다.

<div> - </div>

<br>

**'어떤 UI를 제공하는 것이 사용자 경험 측면에서 좋을 것인가.'** 에 대한 의사결정은 근거 기반으로 이루어져야 합니다.

이를 위해 [A/B 테스트](https://ko.wikipedia.org/wiki/A/B_%ED%85%8C%EC%8A%A4%ED%8A%B8)를 활용하여 근거를 제시하고
더 나은 사용자 경험을 위한 의사결정에 도움을 주고자 프로젝트를 기획하게 되었습니다.

</div>

<br>

### 기술 스택

#### 클라이언트

<div align="left">
  <img alt="React" src="https://img.shields.io/badge/react-2B2E3A.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB">
  <img alt="React Router" src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white">
  <img alt="Vite" src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white">
  <img alt="Zustand" src="https://img.shields.io/badge/Zustand-212121.svg?style=for-the-badge&logo=windows-terminal&logoColor=white">
  <img alt="TailwindCSS" src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white">
  <img alt="Axios" src="https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white">
</div>

#### 서버

<div align="left">
  <img alt="Node" src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white">
  <img alt="Node" src="https://img.shields.io/badge/Express-2B2E3A?style=for-the-badge&logo=express&logoColor=white">
  <img alt="MongoDB Atlas" src="https://img.shields.io/badge/Mongo_DB-343434?style=for-the-badge&logo=mongodb&logoColor=4EA94B">
</div>

#### 배포

<div align="left">
  <img alt="Amazon AWS" src="https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white">
  <img alt="Firebase" src="https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black">
</div>

<br>
<br>

# 📌 목차

<!-- toc -->

- [⌨️ 핵심 기능 구현](#%E2%8C%A8%EF%B8%8F-%ED%95%B5%EC%8B%AC-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84)
  * [1. 실시간 방문자 행동 데이터 수집](#1-%EC%8B%A4%EC%8B%9C%EA%B0%84-%EB%B0%A9%EB%AC%B8%EC%9E%90-%ED%96%89%EB%8F%99-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%88%98%EC%A7%91)
    + [1-1. HTTP 쿠키를 활용한 방문자 특정](#1-1-http-%EC%BF%A0%ED%82%A4%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%9C-%EB%B0%A9%EB%AC%B8%EC%9E%90-%ED%8A%B9%EC%A0%95)
    + [1-2. Histroy API를 활용한 테스트 진행 페이지 방문 지표 집계](#1-2-histroy-api%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%9C-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%A7%84%ED%96%89-%ED%8E%98%EC%9D%B4%EC%A7%80-%EB%B0%A9%EB%AC%B8-%EC%A7%80%ED%91%9C-%EC%A7%91%EA%B3%84)
    + [1-3. 이벤트 버블링을 활용한 방문자 전환 이벤트 추적](#1-3-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EB%B2%84%EB%B8%94%EB%A7%81%EC%9D%84-%ED%99%9C%EC%9A%A9%ED%95%9C-%EB%B0%A9%EB%AC%B8%EC%9E%90-%EC%A0%84%ED%99%98-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EC%B6%94%EC%A0%81)
  * [2. 방문자 행동 데이터 검증](#2-%EB%B0%A9%EB%AC%B8%EC%9E%90-%ED%96%89%EB%8F%99-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EA%B2%80%EC%A6%9D)
    + [2-1. 빈도주의적 단측 검정을 통한 데이터 검증 정보 제공](#2-1-%EB%B9%88%EB%8F%84%EC%A3%BC%EC%9D%98%EC%A0%81-%EB%8B%A8%EC%B8%A1-%EA%B2%80%EC%A0%95%EC%9D%84-%ED%86%B5%ED%95%9C-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EA%B2%80%EC%A6%9D-%EC%A0%95%EB%B3%B4-%EC%A0%9C%EA%B3%B5)
- [✍🏻 회고](#%E2%9C%8D%F0%9F%8F%BB-%ED%9A%8C%EA%B3%A0)

<!-- tocstop -->

<br>

## ⌨️ 핵심 기능 구현

### 1. 실시간 방문자 행동 데이터 수집

> A/B 테스트 결과를 도출하기 위해서는 방문자 행동 데이터를 수집하는 과정이 선행되어야합니다.

```
# 도식화 이미지 추가
1. 테스트 대상 웹 페이지 방문자를 특정한다.
2. 방문자가 테스트 대상 페이지를 방문 했을 때 방문 지표를 집계한다.
3. 전환 이벤트 발생 시 전환 지표를 집계한다.

```

<!-- 집계된 행동 데이터를 기반으로 전환율(유도된 행위를 한 방문자의 비율)과 같은  -->

<br>

#### 1-1. HTTP 쿠키를 활용한 방문자 특정

<!-- 테스트 대상 웹 페이지 방문자의 중복된 지표가 집계될 경우 특정 그룹의 지표가 정확하지 않은 수치를 나타내기 때문에 정확한 테스트 결과를 도출하기 위해서는 방문자를 특정하여 중복된 지표가 집계되지 않도록 하는 것이 중요합니다. -->

정확한 테스트 결과를 도출하려면 테스트 대상 웹 페이지 방문자를 특정하여 중복된 지표 집계를 방지하는 것이 중요합니다.

이를 위해 **HTTP 쿠키**를 활용하여 방문자를 특정하는 식별 정보를 사용하도록 하였습니다.

```
방문자 식별 정보 조회

테스트 대상 웹 페이지와 ABTI 서버 간 쿠키 응답 이미지 추가 예정(도메인 다른 부분 표현)

```

HTTP 쿠키는 웹 서버에서 생성하여 브라우저로 전송하는 `"name=value"`쌍의 작은 데이터로 설정된 기간 또는 브라우저 사용자 세션 동안 브라우저 내 저장됩니다.

또한 저장된 쿠키는 동일한 서버로 보내는 HTTP 요청에 해당 쿠키를 포함하여 전송합니다.

하지만 HTTP 쿠키는 기본적으로 개인 정보 보호 정책으로 인해 크로스 사이트(Cross-site) 요청에 쿠키 전송을 제한합니다.

현재 테스트 대상 웹 페이지의 출처(Origin)와 방문자 행동을 수집하는 서버의 출처(Origin)가 다른 상황이기 때문에
크로스 사이트(Cross-site) 요청에 해당됩니다.

이러한 문제를 해결하기 위해 `SameSite` 속성을 활용했습니다.

`SameSite` 속성은 크로스 사이트 요청에 쿠키 전송 여부를 제어하는 속성입니다.

해당 속성의 기본 값은 `"Lax"`로 동일한 사이트 요청에 쿠키가 전송되며, 특정 조건을 만족한 경우 크로스 사이트 요청에 쿠키가 전송되기도 하지만 현재의 경우 해당 되지 않았습니다.

이에 따라 `"None"`으로 설정하여 크로스 사이트 요청에서 쿠키를 전송을 허용하고, 동시에 `Secure` 속성을 추가해 HTTPS 프로토콜 요청에만 쿠키가 전송되도록 보안을 강화하였습니다.
이를 통해 크로스 사이트 요청으로 인해 발생할 수 있는 [CSRF](https://ko.wikipedia.org/wiki/%EC%82%AC%EC%9D%B4%ED%8A%B8_%EA%B0%84_%EC%9A%94%EC%B2%AD_%EC%9C%84%EC%A1%B0)을 방지하고자 했습니다.

추가적으로 `HttpOnly`을 설정하여 JavaScript로 쿠키에 접근할 수 없도록하여 방문자 식별 정보를 조작하는 경우를 방지했습니다.

```javascript
// 테스트 대상 웹 페이지 방문자 정보 조회 API 서버 내부 응답 쿠키 로직

res.cookie("방문자_식별_정보_NAME", 방문자_식별_정보_VALUE, {
  domain: 쿠키_전송_서버_도메인,
  secure: true,
  httpOnly: true,
  sameSite: "none",
  ...
});
```

이를 통해, 방문자 식별 정보를 브라우저 내 저장하고 방문자 행동 데이터 수집 HTTP 요청 시 해당 방문자를 식별하여 중복된 지표가 집계되는 것을 방지할 수 있었습니다.

<br>

#### 1-2. Histroy API를 활용한 테스트 진행 페이지 방문 지표 집계

SPA(Single Page Application) 환경에서 방문 데이터를 정확히 수집하기 위해, **History API**를 활용하여 테스트 대상 페이지의 방문 이벤트를 감지하도록 했습니다.

방문 지표는 정확한 집계를 위헤 방문자가 테스트 대상 페이지를 방문 했을 때 집계되어야 합니다.

MPA(Multi Page Application) 환경의 경우 테스트 대상 페이지 HTML에 스니펫 코드를 추가하여 페이지 로드 시 방문 지표를 수집할 수 있습니다.

<!-- 하지만 SPA은 하나의 HTML에 페이지 라우팅을 -->

#### 1-3. 이벤트 버블링을 활용한 방문자 전환 이벤트 추적

### 2. 방문자 행동 데이터 검증

#### 2-1. 빈도주의적 단측 검정을 통한 데이터 검증 정보 제공

<br>

## ✍🏻 회고

```

3줄 내외 정도의 분량으로 작성하기

- 프로젝트 개발 과정에서 느낀점
- 개인적인 느낀점

```
