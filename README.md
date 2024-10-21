# ABTI

<p align="center">
  <img src="https://github.com/user-attachments/assets/ebff20b0-53e2-4cc3-bbdc-00e1e99d40d7">
</p>

ABTI는 쉽게 A/B 테스트 환경을 구축하여 테스트를 진행하고, 최적화된 서비스를 제공하기 위한 검증된 테스트 결과를 제공하는 플랫폼입니다.

<br>

### 기술 스택

#### 클라이언트

<p align="left">
  <img alt="React" src="https://img.shields.io/badge/react-2B2E3A.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB">
  <img alt="React Router" src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white">
  <img alt="Vite" src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white">
  <img alt="Zustand" src="https://img.shields.io/badge/Zustand-212121.svg?style=for-the-badge&logo=windows-terminal&logoColor=white">
  <img alt="TailwindCSS" src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white">
  <img alt="Axios" src="https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white">
</p>

#### 서버

<p align="left">
  <img alt="Node" src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white">
  <img alt="Node" src="https://img.shields.io/badge/Express-2B2E3A?style=for-the-badge&logo=express&logoColor=white">
  <img alt="MongoDB Atlas" src="https://img.shields.io/badge/Mongo_DB-343434?style=for-the-badge&logo=mongodb&logoColor=4EA94B">
</p>

#### 배포

<p align="left">
  <img alt="Amazon AWS" src="https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white">
  <img alt="Amazon AWS" src="https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black">
</p>

<br>

## 📌 목차

<!-- toc -->

- [💡 기획 동기](#%F0%9F%92%A1-%EA%B8%B0%ED%9A%8D-%EB%8F%99%EA%B8%B0-1)
- [⌨️ 프로젝트 개발 과정](#%E2%8C%A8%EF%B8%8F-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EA%B0%9C%EB%B0%9C-%EA%B3%BC%EC%A0%95-1)
  - [스니펫 스크립트로 쉽게 테스트 환경을 구축하고 진행](#%EC%8A%A4%EB%8B%88%ED%8E%AB-%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%A1%9C-%EC%89%BD%EA%B2%8C-%ED%85%8C%EC%8A%A4%ED%8A%B8-%ED%99%98%EA%B2%BD%EC%9D%84-%EA%B5%AC%EC%B6%95%ED%95%98%EA%B3%A0-%EC%A7%84%ED%96%89)
    - [쉽게 테스트를 구축할 수 있는 방법을 고려한 이유](#%EC%89%BD%EA%B2%8C-%ED%85%8C%EC%8A%A4%ED%8A%B8%EB%A5%BC-%EA%B5%AC%EC%B6%95%ED%95%A0-%EC%88%98-%EC%9E%88%EB%8A%94-%EB%B0%A9%EB%B2%95%EC%9D%84-%EA%B3%A0%EB%A0%A4%ED%95%9C-%EC%9D%B4%EC%9C%A0)
    - [테스트 환경을 쉽게 구축할 수 있는 방법은 어떤 것이 있을까?](#%ED%85%8C%EC%8A%A4%ED%8A%B8-%ED%99%98%EA%B2%BD%EC%9D%84-%EC%89%BD%EA%B2%8C-%EA%B5%AC%EC%B6%95%ED%95%A0-%EC%88%98-%EC%9E%88%EB%8A%94-%EB%B0%A9%EB%B2%95%EC%9D%80-%EC%96%B4%EB%96%A4-%EA%B2%83%EC%9D%B4-%EC%9E%88%EC%9D%84%EA%B9%8C)
    - [스니펫 방식으로 제공하는 방법을 선택한 이유는 무엇일까?](#%EC%8A%A4%EB%8B%88%ED%8E%AB-%EB%B0%A9%EC%8B%9D%EC%9C%BC%EB%A1%9C-%EC%A0%9C%EA%B3%B5%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95%EC%9D%84-%EC%84%A0%ED%83%9D%ED%95%9C-%EC%9D%B4%EC%9C%A0%EB%8A%94-%EB%AC%B4%EC%97%87%EC%9D%BC%EA%B9%8C)
  - [A/B 테스트 결과를 검증한 정보 제공](#ab-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EA%B2%B0%EA%B3%BC%EB%A5%BC-%EA%B2%80%EC%A6%9D%ED%95%9C-%EC%A0%95%EB%B3%B4-%EC%A0%9C%EA%B3%B5)
    - [그렇다면 테스트 결과는 어떤 방법으로 검증 해야할까?](#%EA%B7%B8%EB%A0%87%EB%8B%A4%EB%A9%B4-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EA%B2%B0%EA%B3%BC%EB%8A%94-%EC%96%B4%EB%96%A4-%EB%B0%A9%EB%B2%95%EC%9C%BC%EB%A1%9C-%EA%B2%80%EC%A6%9D-%ED%95%B4%EC%95%BC%ED%95%A0%EA%B9%8C)
    - [사용자에게 명확한 근거와 검증 결과를 제공하기](#%EC%82%AC%EC%9A%A9%EC%9E%90%EC%97%90%EA%B2%8C-%EB%AA%85%ED%99%95%ED%95%9C-%EA%B7%BC%EA%B1%B0%EC%99%80-%EA%B2%80%EC%A6%9D-%EA%B2%B0%EA%B3%BC%EB%A5%BC-%EC%A0%9C%EA%B3%B5%ED%95%98%EA%B8%B0)
- [🔨 개선 사항](#%F0%9F%94%A8-%EA%B0%9C%EC%84%A0-%EC%82%AC%ED%95%AD-1)
  - [스니펫 구현한 방식에 대해 문제 인식](#%EC%8A%A4%EB%8B%88%ED%8E%AB-%EA%B5%AC%ED%98%84%ED%95%9C-%EB%B0%A9%EC%8B%9D%EC%97%90-%EB%8C%80%ED%95%B4-%EB%AC%B8%EC%A0%9C-%EC%9D%B8%EC%8B%9D)
  - [불필요한 분포 그래프 제거](#%EB%B6%88%ED%95%84%EC%9A%94%ED%95%9C-%EB%B6%84%ED%8F%AC-%EA%B7%B8%EB%9E%98%ED%94%84-%EC%A0%9C%EA%B1%B0)

<!-- tocstop -->

<!--
### [💡 기획 동기](#-기획-동기)

### [⌨️ 프로젝트 개발 과정](#️-프로젝트-개발-과정)

<!-- - [A/B 테스트 기능 구현](#ab-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84)

  - [웹 사이트 사용자의 그룹을 분배하기](#%EC%9B%B9-%EC%82%AC%EC%9D%B4%ED%8A%B8-%EC%82%AC%EC%9A%A9%EC%9E%90%EC%9D%98-%EA%B7%B8%EB%A3%B9%EC%9D%84-%EB%B6%84%EB%B0%B0%ED%95%98%EA%B8%B0)
  - [전환 발생 시 이벤트 추적하기](#%EC%A0%84%ED%99%98-%EB%B0%9C%EC%83%9D-%EC%8B%9C-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EC%B6%94%EC%A0%81%ED%95%98%EA%B8%B0) -->

<!-- - [스니펫 스크립트로 쉽게 테스트 환경을 구축](#%EC%8A%A4%EB%8B%88%ED%8E%AB-%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%A1%9C-%EC%89%BD%EA%B2%8C-%ED%85%8C%EC%8A%A4%ED%8A%B8-%ED%99%98%EA%B2%BD%EC%9D%84-%EA%B5%AC%EC%B6%95)

  - [쉽게 테스트를 구축할 수 있게 방법을 고려한 이유](#%EC%89%BD%EA%B2%8C-%ED%85%8C%EC%8A%A4%ED%8A%B8%EB%A5%BC-%EA%B5%AC%EC%B6%95%ED%95%A0-%EC%88%98-%EC%9E%88%EA%B2%8C-%EB%B0%A9%EB%B2%95%EC%9D%84-%EA%B3%A0%EB%A0%A4%ED%95%9C-%EC%9D%B4%EC%9C%A0)
  - [테스트 환경을 쉽게 구축할 수 있는 방법은 어떤 것이 있을까?](#%ED%85%8C%EC%8A%A4%ED%8A%B8-%ED%99%98%EA%B2%BD%EC%9D%84-%EC%89%BD%EA%B2%8C-%EA%B5%AC%EC%B6%95%ED%95%A0-%EC%88%98-%EC%9E%88%EB%8A%94-%EB%B0%A9%EB%B2%95%EC%9D%80-%EC%96%B4%EB%96%A4-%EA%B2%83%EC%9D%B4-%EC%9E%88%EC%9D%84%EA%B9%8C)
  - [스니펫 방식으로 제공하는 방법을 선택한 이유는 무엇일까?](#%EC%8A%A4%EB%8B%88%ED%8E%AB-%EB%B0%A9%EC%8B%9D%EC%9C%BC%EB%A1%9C-%EC%A0%9C%EA%B3%B5%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95%EC%9D%84-%EC%84%A0%ED%83%9D%ED%95%9C-%EC%9D%B4%EC%9C%A0%EB%8A%94-%EB%AC%B4%EC%97%87%EC%9D%BC%EA%B9%8C)

- [테스트 결과을 검증한 정보 제공](#%ED%85%8C%EC%8A%A4%ED%8A%B8-%EA%B2%B0%EA%B3%BC%EC%9D%84-%EA%B2%80%EC%A6%9D%ED%95%9C-%EC%A0%95%EB%B3%B4-%EC%A0%9C%EA%B3%B5)
  - [검증한 정보를 제공하는 것을 고려한 이유](#%EA%B2%80%EC%A6%9D%ED%95%9C-%EC%A0%95%EB%B3%B4%EB%A5%BC-%EC%A0%9C%EA%B3%B5%ED%95%98%EB%8A%94-%EA%B2%83%EC%9D%84-%EA%B3%A0%EB%A0%A4%ED%95%9C-%EC%9D%B4%EC%9C%A0)
  - [그렇다면 테스트 결과를 검증할 해야할까?](#%EA%B7%B8%EB%A0%87%EB%8B%A4%EB%A9%B4-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EA%B2%B0%EA%B3%BC%EB%A5%BC-%EA%B2%80%EC%A6%9D%ED%95%A0-%ED%95%B4%EC%95%BC%ED%95%A0%EA%B9%8C)
  - [어떻게 검증한 결과를 보여줘야할까?](#%EC%96%B4%EB%96%BB%EA%B2%8C-%EA%B2%80%EC%A6%9D%ED%95%9C-%EA%B2%B0%EA%B3%BC%EB%A5%BC-%EB%B3%B4%EC%97%AC%EC%A4%98%EC%95%BC%ED%95%A0%EA%B9%8C)

### [🔨 개선 사항](#-개선-사항-1)

- [스니펫 구현한 방식에 대해 문제를 인식](#%EC%8A%A4%EB%8B%88%ED%8E%AB-%EA%B5%AC%ED%98%84%ED%95%9C-%EB%B0%A9%EC%8B%9D%EC%97%90-%EB%8C%80%ED%95%B4-%EB%AC%B8%EC%A0%9C%EB%A5%BC-%EC%9D%B8%EC%8B%9D)

### [✍🏻 마무리](#-마무리-1) -->

<!-- - [회고](#%ED%9A%8C%EA%B3%A0) -->

<br>

## 💡 기획 동기

팀 프로젝트 진행 당시 팀 원들과 **'어떤 UI를 제공하는 것이 사용자 경험 측면에서 좋을 것인가.' 에 대한 고민**을 했었고 이러한 고민을 해결해보고자 아이디어를 구상하였습니다.

해당 고민을 해결할 수 있는 방법에는 **[A/B 테스트](https://ko.wikipedia.org/wiki/A/B_%ED%85%8C%EC%8A%A4%ED%8A%B8)** 라는 방법이 존재 하였습니다.

또한, Optimizely, HotJar, Google Analytics와 같은 사용자의 행동을 분석하고 다양한 분석 결과를 보여주기도 하며 A/B 테스트 기능을 제공하기도 하는 뛰어난 도구도 이미 존재하고 있습니다.

하지만 분석한 결과 또는 테스트 결과를 기반으로 어떤 UI가 더 나은 사용자 경험을 제공하는지 의사결정을 하기에는 확실한 결과인지 검증하는 정보가 추가적으로 필요하다고 생각했습니다.

ABTI는 쉽게 A/B 테스트를 진행하고 테스트 결과를 제공하는 것과 확실한 결과인지 검증하는 정보를 제공하여 어떤 UI가 더 나은 사용자 경험을 제공하는지 정하는 의사결정에 도움을 주고자 프로젝트를 기획하게 되었습니다.

<br>

## ⌨️ 프로젝트 개발 과정

이번 프로젝트에서 최종적인 목표는 웹 사이트 방문자에게 어떤 UI가 더 나은 사용자 경험을 제공하는지 선택하기 위한 고민에 신뢰도 있는 테스트 결과를 제공하여 사용자의 의사 결정에 도움을 주는 것 입니다.

그렇기 때문에 <u>A/B 테스트의 환경을 구축하고 진행</u>하는 것과 <u>테스트의 검증된 정보를 제공</u>하는 것이 중요했습니다.

<br>

<!-- 이는 서비스 마케팅과 깊은 관련이 있어 주로 마케팅 전문가나 UI/UX 디자이너와 같은 직군에서 참고하여 -->

### 스니펫 스크립트로 쉽게 테스트 환경을 구축하고 진행

> #### 쉽게 테스트를 구축할 수 있는 방법을 고려한 이유

> #### 테스트 환경을 쉽게 구축할 수 있는 방법은 어떤 것이 있을까?

> #### 스니펫 방식으로 제공하는 방법을 선택한 이유는 무엇일까?

<br>

### A/B 테스트 결과를 검증한 정보 제공

결과를 검증한다는 것은 결과가 올바르게 도출되었는지, 그리고 그 결과가 의도한 목적을 달성했는지를 확인하는 것을 의미합니다.

보통 A/B 테스트는 두 가지 버전을 비교하여 어느 것이 사용자의 특정 행동을 유도하는 데 더 효과적인지 성능 지표를 제공합니다.

A/B 테스트의 궁극적인 목적은 테스트 결과를 기반으로 사용자 경험을 개선하는 것에 있지만, 단순히 성능 지표만으로는 사용자 경험을 충분히 개선하기 위한 판단 기준에 부족하다고 생각했습니다.

따라서, A/B 테스트의 목적에 부합하려면 성능 지표뿐만 아니라 테스트 결과를 검증한 정보도 함께 제공하는 것이 중요하다고 판단했습니다.

#### 그렇다면 테스트 결과는 어떤 방법으로 검증 해야할까?

테스트의 결과를 검증하는 방식에는 통계적 접근법 인 **빈도주의적 방법론**을 적용하였습니다.

통계의 목적이 현재의 데이터를 기반으로 확률을 추정하여 미래의 데이터를 예측하는 것처럼, A/B 테스트 역시 결과를 기반으로 사용자 경험을 개선하여 잠재적인 고객들에게도 최적의 서비스를 제공하려고하는 것입니다.

또한 A/B 테스트의 결과인 성능 지표는 사용자가 특정 행동을 수행할 비율(확률)을 나타내기 때문에, 이를 검증하기 위해 통계적 접근법이 자주 사용됩니다.

> 이러한 검증 방법에는 빈도주의적 방법론과 베이지안 방법론이 대표적으로 활용됩니다.

<p align="center">

|             |                             빈도주의적 방법론                             |                                 베이지안 방법론                                  |
| :---------: | :-----------------------------------------------------------------------: | :------------------------------------------------------------------------------: |
|  검증 방법  |     두 버전의 성능 지표에 차이가 있다면 실제로 의미있는 차이인지 검증     |    성능 지표와 사전 정보를 고려하여 두 버전 중 어느 것이 효과적인지 확률 계산    |
| 적절한 상황 | 명확한 유의미성 판단이 필요하며 표준화된 절차로 빠르게 검증하고 싶은 경우 | 이전 데이터나 사전 정보가 중요하며, 결과의 불확실성을 확률로 표현하고 싶은 경우  |
|    장점     |   명확한 기준(P-Value)으로 결과를 검증하기 때문에 명확한 결과 도출 가능   | 결과를 직관적으로 해석 가능하며, 사전 지식을 반영하여 유연성 있는 결과 도출 가능 |
|    단점     |                  P-Value 해석이 직관적이지 않을 수 있음                   |     사전 확률 설정이 주관적일 수 있음,계산이 복잡하고 시간이 더 걸릴 수 있음     |

</p>

확실한 결과인지 검증하는 정보를 제공하기 위해선 일관적이며 명확한 기준으로 도출된 검증 결과와 가장 보편적이고 표준화된 방법을 사용하는 것이 적합하다고 판단하여 빈도주의적 방법론을 적용하였습니다.

#### 사용자에게 명확한 근거와 검증 결과를 제공하기

사용자에게 검증 결과를 명확하게 제공하기 위한 화면 구성을 고민하며 테스트 플랫폼 및 웹 사이트를 조사허던 중 [ABTestGuide](https://abtestguide.com/calc/)의 화면 구성을 참고하게 되었습니다.

해당 사이트는 테스트 검증 결과를 제공함과 동시에 결과를 분석하고 검증하는 과정에서 측정된 통계적 수치(표준 편차, 표준 값 등)를 함께 제공하기 때문에 검증 결과에 대한 명확한 근거를 제사한다고 생각했고,
이를 바탕으로 신뢰할 수 있는 검증 결과를 제공하는 화면 구성을 구현할 수 있었습니다.

<br>

<p align="center">
  <img alt="테스트 검증 결과 화면" src="https://github.com/user-attachments/assets/0067150f-2dfa-4548-ba48-e3675dd25f9c" />
<i>구현한 테스트 검증 결과 제공 화면</i>
</p>

<br>

## 🔨 개선 사항

### 스니펫 구현한 방식에 대해 문제 인식

> 리팩토링 후 추가할 내용

### 불필요한 분포 그래프 제거

> 리팩토링 후 추가할 내용

<!-- ```

- 어떤 부분이 문제라고 생각했는지

- 어떻게 개선할 것인지
  - 왜 그렇게 개선할 것 해야하는 것 인가

``` -->

<br>

## ✍🏻 마무리

<!-- ### 회고 -->

```

```
