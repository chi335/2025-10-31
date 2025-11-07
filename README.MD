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

### 🔹 깃(Git)의 기본과 버전 관리

| 항목 | 내용 |
|:--|:--|
| **정의** | 깃(Git)은 **버전 관리 시스템(Version Control System)**으로, 문서나 코드의 변경 내역을 기록하고 관리할 수 있게 해주는 개발 필수 도구입니다. |
| **핵심 역할** | 📂 **버전 관리** — 변경 이력 추적 및 복원 가능<br>☁️ **백업 기능** — 원격 저장소에 안전히 저장<br>👥 **협업 지원** — 여러 개발자가 동시에 작업 가능 |

---

### 🧱 버전 만들기 (Commit)

| 명령어 | 설명 |
|:--|:--|
| `git init` | 새로운 깃 저장소 생성 |
| `git add .` | 스테이징 영역에 파일 추가 |
| `git commit -m "메시지"` | 버전(커밋) 생성 |

💡 **개념 정리**
- **스테이징 영역(Staging Area)** : 커밋 전 변경사항을 임시로 저장  
- **커밋(Commit)** : 변경 사항을 하나의 버전으로 확정

---

### 🔁 작업 되돌리기

| 명령어 | 설명 |
|:--|:--|
| `git reset --hard <commit_id>` | 특정 커밋으로 되돌리며 이후 이력 삭제 |
| `git revert <commit_id>` | 이전 커밋을 되돌리는 새로운 커밋 생성 (안전한 복구 방식) |

---

### 🌿 브랜치(Branch)의 활용과 병합

| 항목 | 설명 |
|:--|:--|
| **정의** | 브랜치는 독립적으로 작업할 수 있는 **분기점**으로, 새로운 기능 개발이나 버그 수정 시 사용됩니다. |
| **관리 명령어** | `git branch feature/login` → 브랜치 생성<br>`git switch feature/login` → 브랜치 전환<br>`git merge feature/login` → 브랜치 병합 |

#### 🧩 병합 방법

| 명령어 | 설명 |
|:--|:--|
| `git merge` | 일반적인 병합 (히스토리 유지) |
| `git rebase` | 커밋 히스토리를 깔끔하게 재정렬 |
| `git cherry-pick` | 특정 커밋만 선택적으로 병합 |

---

## 🤝 2️⃣ GitHub 활용 및 협업

### ☁️ 원격 저장소(Remote Repository)

| 명령어 | 설명 |
|:--|:--|
| `git remote add origin <URL>` | 원격 저장소 연결 |
| `git push origin main` | 원격 저장소에 업로드 |
| `git pull origin main` | 최신 내용 가져오기 |

💡 **참고**  
- **SSH 연결** : 로그인 없이 안전하게 원격 접속  
- **Fork & Clone** : 다른 사람의 저장소를 복제하거나 내 저장소로 포크하여 수정 가능  

---

### 💬 협업의 핵심 - Pull Request (PR)

> 깃허브에서 협업의 중심이 되는 절차입니다.

| 단계 | 설명 |
|:--|:--|
| ① | 저장소 복제 (`git clone`) |
| ② | 새 브랜치 생성 및 수정 |
| ③ | 변경사항 푸시 (`git push`) |
| ④ | GitHub에서 **Pull Request 생성** |
| ⑤ | 코드 리뷰 후 병합(Merge) 진행 |

---

### 💬 깃허브 소통 및 오픈소스 기여

| 구분 | 설명 |
|:--|:--|
| **프로필 관리** | 자기소개 및 활동 내역 표시 (`README` 프로필 작성) |
| **문서화** | 프로젝트 개요, 설치법, 사용법을 Markdown으로 정리 |
| **오픈소스 기여** | 코드 추가, 번역, 버그 수정, 문서화 등으로 기여 가능 |

---

## 🧑‍💻 3️⃣ 개발 환경 실습 & 최신 기능

| 구분 | 주제 | 핵심 내용 |
|:--:|:--|:--|
| **07** | **VS Code로 깃/깃허브 관리하기** | - GUI 기반 버전 관리<br>- 브랜치, 커밋, 푸시 관리<br>- 깃허브 연동 |
| **08** | **이력서 사이트 & 블로그 만들기** | - **GitHub Pages**로 사이트 배포<br>- **Jekyll**로 블로그 제작 |
| **NEW** | **최신 기능 학습** | - **Codespaces / GitHub Dev** 클라우드 개발 환경<br>- **GitHub Copilot**으로 AI 코드 자동완성 |

---

### 💻 VS Code 활용

> **Visual Studio Code (VS Code)**의 소스 제어 기능으로 깃 명령어를 GUI 환경에서 쉽게 관리할 수 있습니다.

| 기능 | 설명 |
|:--|:--|
| 저장소 생성 | `Git: Initialize Repository` |
| 커밋 | 변경사항 선택 후 “Commit” 클릭 |
| 브랜치 관리 | 하단 상태 표시줄에서 브랜치 전환 |
| 깃허브 연동 | GitHub 로그인 후 바로 푸시/풀 가능 |

---

### 🌐 GitHub Pages로 사이트 배포

| 단계 | 설명 |
|:--|:--|
| ① | 저장소 생성 및 HTML/CSS 업로드 |
| ② | Settings → Pages 메뉴 이동 |
| ③ | Branch 설정 후 배포 |
| ④ | 개인 블로그 또는 포트폴리오 운영 가능 |

💡 **Jekyll**을 활용하면 Markdown 기반 블로그를 자동으로 생성할 수 있습니다.

---

### 🧠 GitHub 최신 기능

| 기능 | 설명 |
|:--|:--|
| **Codespaces / GitHub Dev** | 브라우저에서 바로 VS Code 환경 실행, 클라우드 기반 개발 가능 |
| **GitHub Copilot** | AI가 코드 추천 및 자동 완성 제공 — 주석 기반 코드 생성 지원 |

---

## 📊 학습 요약

| 학습 구분 | 목표 | 활용 도구 | 학습 상태 |
|:--|:--|:--|:--:|
| 🧱 **기본기** | 버전 관리 및 브랜치 활용 | Git CLI | ✅ 완료 |
| 🤝 **협업** | 원격 저장소 및 PR 실습 | GitHub | ✅ 완료 |
| 🧰 **응용 실습** | VS Code, Pages, Copilot 활용 | VS Code, GitHub | 🚀 진행 중 |

---

## 💡 참고 & 팁

> 깃은 단순한 도구가 아니라 **협업의 언어**입니다.  
> 자주 사용하는 명령어를 반복하며 자연스럽게 익혀보세요.

```bash
# 현재 작업 상태 확인
git status

# 변경 내역 확인
git diff

# 브랜치 생성 및 이동
git branch feature/login
git checkout feature/login

# 커밋 이력 확인 (그래프 형식)
git log --oneline --graph --all

# 변경사항 원격으로 푸시
git push origin main
