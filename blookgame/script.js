// 캔버스 및 컨텍스트 설정
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// 공 설정
let ballRadius = 10;
let x = canvas.width / 2; // 초기 X 위치
let y = canvas.height - 30; // 초기 Y 위치
let dx = 2; // X 방향 속도
let dy = -2; // Y 방향 속도 (위로 이동 시작)

// 패들 설정
const paddleHeight = 10;
const paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2; // 패들 초기 X 위치

// 사용자 입력 (키보드)
let rightPressed = false;
let leftPressed = false;

// 벽돌 설정
const brickRowCount = 5;
const brickColumnCount = 7;
const brickWidth = 55;
const brickHeight = 20;
const brickPadding = 5;
const brickOffsetTop = 30;
const brickOffsetLeft = 10;
let bricks = [];

// 벽돌 배열 초기화
for(let c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for(let r = 0; r < brickRowCount; r++) {
        // status: 1이면 살아있는 벽돌, 0이면 깨진 벽돌
        bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
}

// 점수 설정
let score = 0;

// --- 드로잉 함수 ---

// 공 그리기
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

// 패들 그리기
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

// 벽돌 그리기
function drawBricks() {
    for(let c = 0; c < brickColumnCount; c++) {
        for(let r = 0; r < brickRowCount; r++) {
            if(bricks[c][r].status === 1) { // 살아있는 벽돌만 그리기
                const brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
                const brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
                
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = "#FF5733"; // 벽돌 색상
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

// 점수판 그리기
function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("점수: " + score, 8, 20);
}

// --- 게임 로직 함수 ---

// 벽돌과 공의 충돌 감지
function collisionDetection() {
    for(let c = 0; c < brickColumnCount; c++) {
        for(let r = 0; r < brickRowCount; r++) {
            const brick = bricks[c][r];
            if(brick.status === 1) {
                // 공의 중심이 벽돌 영역 내에 있는지 확인
                if(x > brick.x && x < brick.x + brickWidth && y > brick.y && y < brick.y + brickHeight) {
                    dy = -dy; // 공의 방향을 반전
                    brick.status = 0; // 벽돌 깨기
                    score++;
                    
                    // 게임 승리 조건 확인
                    if(score === brickRowCount * brickColumnCount) {
                        alert("🎉 축하합니다! 모든 벽돌을 깼습니다! 🎉");
                        document.location.reload(); // 게임 재시작
                    }
                }
            }
        }
    }
}

// --- 이벤트 핸들러 ---

function keyDownHandler(e) {
    if(e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = true;
    } else if(e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = false;
    } else if(e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = false;
    }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

// --- 메인 드로잉 루프 (게임 엔진) ---

function draw() {
    // 매 프레임마다 캔버스를 지웁니다.
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    
    // 요소들을 다시 그립니다.
    drawBricks();
    drawBall();
    drawPaddle();
    drawScore();
    collisionDetection();

    // 1. 벽 충돌 감지
    // 좌우 벽
    if(x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    // 상단 벽
    if(y + dy < ballRadius) {
        dy = -dy;
    } 
    // 하단 벽 (게임 오버 또는 패들 충돌)
    else if(y + dy > canvas.height - ballRadius) {
        // 패들 충돌 감지
        if(x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy; // 튕기기
        } else {
            // 패들을 놓쳤을 경우 게임 오버
            alert("😢 GAME OVER! 점수: " + score);
            document.location.reload(); // 페이지 새로고침
        }
    }
    
    // 2. 패들 이동
    if(rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += 7;
    } else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }

    // 3. 공 위치 업데이트
    x += dx;
    y += dy;
    
    // 4. 다음 프레임을 요청합니다. (애니메이션 루프)
    requestAnimationFrame(draw);
}

// 게임 시작
draw();