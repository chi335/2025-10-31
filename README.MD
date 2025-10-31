<div align="center">

# 💼 Git & GitHub 학습 포트폴리오

> “Commit your progress. Push your passion.”  
> _버전 관리부터 협업, 배포까지 — 개발자의 필수 여정을 담다._

---

![Git Logo](https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png)
![GitHub Logo](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)
![VSCode Logo](https://code.visualstudio.com/assets/images/code-stable.png)

[![Git Badge](https://img.shields.io/badge/Git-Expert-orange?logo=git&logoColor=white)]()
[![GitHub Badge](https://img.shields.io/badge/GitHub-Collaboration-black?logo=github)]()
[![VSCode Badge](https://img.shields.io/badge/VS%20Code-Workflow-blue?logo=visualstudiocode)]()
[![Copilot Badge](https://img.shields.io/badge/Copilot-AI%20Coding-green?logo=githubcopilot)]()

---

📘 **이 저장소는 Git & GitHub 학습 내용을 정리하고 실습한 기록입니다.**  
**버전 관리, 협업, 배포**에 대한 개념을 익히고 실제 프로젝트에 적용하는 것을 목표로 합니다.

</div>

---

## 🗂️ 목차 (Table of Contents)

1. [📍 Git 기본 개념 및 버전 관리](#-1️⃣-git-기본-개념-및-버전-관리)
2. [🤝 GitHub 협업 및 원격 저장소](#-2️⃣-github-활용-및-협업)
3. [🧑‍💻 개발 환경 실습 & 최신 기능](#-3️⃣-개발-환경-실습--최신-기능)
4. [📊 학습 요약](#-📊-학습-요약)
5. [💡 참고 & 팁](#-💡-참고--팁)
6. [🏁 마무리 한 줄](#-🏁-마무리-한-줄)

---

## 📍 1️⃣ Git 기본 개념 및 버전 관리

| 구분 | 주제 | 핵심 내용 |
|:----:|:-----|:----------|
| **01** | **깃 시작하기** | - 깃의 3대 역할: 📂 **버전 관리**, ☁️ **백업**, 👥 **협업**<br>- 깃 설치 및 환경 설정 (리눅스 명령, Vim 등) |
| **02** | **깃으로 버전 관리하기** | - 저장소 생성: `git init`<br>- 스테이징 & 커밋으로 버전 생성<br>- 되돌리기: `git revert`, `git reset` |
| **03** | **깃과 브랜치** | - **Branch** 개념 이해 및 관리<br>- 브랜치 생성/전환/병합(Merge, Rebase, Cherry-pick) |

---

## 🤝 2️⃣ GitHub 활용 및 협업

| 구분 | 주제 | 핵심 내용 |
|:----:|:-----|:----------|
| **04** | **깃허브 시작하기** | - 원격 저장소 개념 및 연결<br>- `git remote`, `push`, `pull`<br>- SSH 원격 접속 설정 |
| **05** | **깃허브로 협업하기** | - 원격 저장소 복제: `git clone`<br>- **Pull Request (PR)** 생성 및 병합 실습<br>- 협업 브랜치 전략 이해 |
| **06** | **깃허브에서 소통하기** | - 깃허브 **프로필 관리** 및 **README 작성**<br>- **Markdown 문법 학습**<br>- 오픈소스 기여 (번역, 문서화, 버그 제보 등) |

---

## 🧑‍💻 3️⃣ 개발 환경 실습 & 최신 기능

| 구분 | 주제 | 핵심 내용 |
|:----:|:-----|:----------|
| **07** | **VS Code로 깃/깃허브 관리하기** | - VS Code **소스 제어(GUI)** 활용<br>- 깃 저장소 생성, 커밋, 브랜치 관리<br>- 깃허브 연동 실습 |
| **08** | **이력서 사이트 & 블로그 만들기** | - **GitHub Pages**로 웹사이트 배포<br>- **Jekyll** 기반 개인 블로그 구축 |
| **NEW** | **깃허브 최신 기능** | - **Codespaces** / **GitHub Dev** 등 클라우드 개발 환경<br>- **GitHub Copilot**으로 AI 코드 추천 받기 |

---

## 📊 학습 요약

| 학습 구분 | 목표 | 활용 도구 | 학습 상태 |
|:-----------|:------|:-----------|:-----------:|
| 🧱 **기본기** | 버전 관리 및 브랜치 활용 | Git CLI | ✅ 완료 |
| 🤝 **협업** | 원격 저장소 및 PR 실습 | GitHub | ✅ 완료 |
| 🧰 **응용 실습** | VS Code, Pages, Copilot 활용 | VS Code, GitHub | 🚀 진행 중 |

---

## 💡 참고 & 팁

> 깃은 단순한 도구가 아니라 **협업 언어**입니다.  
> 아래 명령어들을 반복해서 익히면 실무에서도 자연스럽게 활용할 수 있습니다.

```bash
# 현재 작업 상태 확인
git status

# 변경 내역 확인
git diff

# 브랜치 생성 및 이동
git branch feature/login
git checkout feature/login

# 커밋 이력 확인
git log --oneline --graph --all

# 변경사항 원격으로 푸시
git push origin main
