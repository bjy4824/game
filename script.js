const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.backgroundColor = "rgb(100,100,100)";

var tableWidth = canvas.width * 0.7;
var tableHeight = tableWidth * 0.5;
var frameRate = 20;//계산당 프레임 1개의 비율
var fricton_table = 0.0001;//테이블 마찰계수
{
    //테이블 사이즈 중대 4구
    var table = {//당구대 내부
        color : "rgb(78, 158, 92)",
        x : canvas.width*0.08,
        y : canvas.height*0.1,
        width : tableWidth,
        height : tableHeight,
        draw(){
            ctx.strokeStyle = '#000000'; 
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height); 
            ctx.lineWidth = 2;
            ctx.strokeRect(this.x, this.y, this.width, this.height);
        }    
    }
    var tableOut = {//당구대 틀
        color : "rgb(85, 15, 0)",
        x : table.x - table.width*0.04,
        y : table.y - table.width*0.04,
        width : tableWidth + table.width*0.08,
        height : tableHeight + table.width*0.08,
        draw(){
            ctx.strokeStyle = '#000000'; 
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.lineWidth = 2;
            ctx.strokeRect(this.x, this.y, this.width, this.height);
        }    
    }
    var dot = {//당구대 틀
        color : "rgb(233, 233, 233)",
        x : table.x,
        y : table.y ,
        delta : (table.x - tableOut.x)*0.5,
        radius : (table.x + tableOut.x)*0.024,
        draw(){
            {//왼쪽
                ctx.beginPath();
                ctx.arc(this.x - this.delta, this.y, this.radius, 0, 2 * Math.PI);
                ctx.fillStyle = this.color;
                ctx.fill();
                ctx.lineWidth = 1;
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(this.x - this.delta, this.y+table.height*0.25, this.radius, 0, 2 * Math.PI);
                ctx.fillStyle = this.color;
                ctx.fill();
                ctx.lineWidth = 1;
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(this.x - this.delta, this.y+table.height*0.5, this.radius, 0, 2 * Math.PI);
                ctx.fillStyle = this.color;
                ctx.fill();
                ctx.lineWidth = 1;
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(this.x - this.delta, this.y+table.height*0.75, this.radius, 0, 2 * Math.PI);
                ctx.fillStyle = this.color;
                ctx.fill();
                ctx.lineWidth = 1;
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(this.x - this.delta, this.y+table.height*1, this.radius, 0, 2 * Math.PI);
                ctx.fillStyle = this.color;
                ctx.fill();
                ctx.lineWidth = 1;
                ctx.stroke();
            }{//오른쪽
                ctx.beginPath();
                ctx.arc(this.x + table.width + this.delta, this.y, this.radius, 0, 2 * Math.PI);
                ctx.fillStyle = this.color;
                ctx.fill();
                ctx.lineWidth = 1;
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(this.x + table.width + this.delta, this.y+table.height*0.25, this.radius, 0, 2 * Math.PI);
                ctx.fillStyle = this.color;
                ctx.fill();
                ctx.lineWidth = 1;
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(this.x + table.width + this.delta, this.y+table.height*0.5, this.radius, 0, 2 * Math.PI);
                ctx.fillStyle = this.color;
                ctx.fill();
                ctx.lineWidth = 1;
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(this.x + table.width + this.delta, this.y+table.height*0.75, this.radius, 0, 2 * Math.PI);
                ctx.fillStyle = this.color;
                ctx.fill();
                ctx.lineWidth = 1;
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(this.x + table.width + this.delta, this.y+table.height*1, this.radius, 0, 2 * Math.PI);
                ctx.fillStyle = this.color;
                ctx.fill();
                ctx.lineWidth = 1;
                ctx.stroke();
            }{//위쪽
                ctx.beginPath();
                ctx.arc(this.x , this.y - this.delta, this.radius, 0, 2 * Math.PI);
                ctx.fillStyle = this.color;
                ctx.fill();
                ctx.lineWidth = 1;
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(this.x + table.width*0.125, this.y - this.delta, this.radius, 0, 2 * Math.PI);
                ctx.fillStyle = this.color;
                ctx.fill();
                ctx.lineWidth = 1;
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(this.x + table.width*0.25, this.y - this.delta, this.radius, 0, 2 * Math.PI);
                ctx.fillStyle = this.color;
                ctx.fill();
                ctx.lineWidth = 1;
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(this.x + table.width*0.375, this.y - this.delta, this.radius, 0, 2 * Math.PI);
                ctx.fillStyle = this.color;
                ctx.fill();
                ctx.lineWidth = 1;
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(this.x + table.width*0.5, this.y - this.delta, this.radius, 0, 2 * Math.PI);
                ctx.fillStyle = this.color;
                ctx.fill();
                ctx.lineWidth = 1;
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(this.x + table.width*0.625, this.y - this.delta, this.radius, 0, 2 * Math.PI);
                ctx.fillStyle = this.color;
                ctx.fill();
                ctx.lineWidth = 1;
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(this.x + table.width*0.75, this.y - this.delta, this.radius, 0, 2 * Math.PI);
                ctx.fillStyle = this.color;
                ctx.fill();
                ctx.lineWidth = 1;
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(this.x + table.width*0.875, this.y - this.delta, this.radius, 0, 2 * Math.PI);
                ctx.fillStyle = this.color;
                ctx.fill();
                ctx.lineWidth = 1;
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(this.x + table.width*1, this.y - this.delta, this.radius, 0, 2 * Math.PI);
                ctx.fillStyle = this.color;
                ctx.fill();
                ctx.lineWidth = 1;
                ctx.stroke();
            }{//아래쪽
                ctx.beginPath();
                ctx.arc(this.x , this.y + table.height + this.delta, this.radius, 0, 2 * Math.PI);
                ctx.fillStyle = this.color;
                ctx.fill();
                ctx.lineWidth = 1;
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(this.x + table.width*0.125, this.y + table.height + this.delta, this.radius, 0, 2 * Math.PI);
                ctx.fillStyle = this.color;
                ctx.fill();
                ctx.lineWidth = 1;
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(this.x + table.width*0.25, this.y + table.height + this.delta, this.radius, 0, 2 * Math.PI);
                ctx.fillStyle = this.color;
                ctx.fill();
                ctx.lineWidth = 1;
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(this.x + table.width*0.375, this.y + table.height + this.delta, this.radius, 0, 2 * Math.PI);
                ctx.fillStyle = this.color;
                ctx.fill();
                ctx.lineWidth = 1;
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(this.x + table.width*0.5, this.y + table.height + this.delta, this.radius, 0, 2 * Math.PI);
                ctx.fillStyle = this.color;
                ctx.fill();
                ctx.lineWidth = 1;
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(this.x + table.width*0.625, this.y + table.height + this.delta, this.radius, 0, 2 * Math.PI);
                ctx.fillStyle = this.color;
                ctx.fill();
                ctx.lineWidth = 1;
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(this.x + table.width*0.75, this.y + table.height + this.delta, this.radius, 0, 2 * Math.PI);
                ctx.fillStyle = this.color;
                ctx.fill();
                ctx.lineWidth = 1;
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(this.x + table.width*0.875, this.y + table.height + this.delta, this.radius, 0, 2 * Math.PI);
                ctx.fillStyle = this.color;
                ctx.fill();
                ctx.lineWidth = 1;
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(this.x + table.width*1, this.y + table.height + this.delta, this.radius, 0, 2 * Math.PI);
                ctx.fillStyle = this.color;
                ctx.fill();
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        }    
    }   
    var cuePower = { //큐 파워 박스
        color : "rgb(233, 233, 233)",
        x : tableOut.x,
        y : table.y + tableOut.height,
        width : tableOut.width,
        height : canvas.height*0.05,
        draw(){
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height); 
            ctx.lineWidth = 2;
            ctx.strokeRect(this.x, this.y, this.width, this.height); 
           
            ctx.beginPath(); 
            ctx.strokeStyle = "#000000"; 
            ctx.lineWidth = 2;
            ctx.moveTo(this.x + this.width*0.25, this.y);
            ctx.lineTo(this.x + this.width*0.25, this.y + this.height);
            ctx.stroke();

            ctx.beginPath(); 
            ctx.moveTo(this.x + this.width*0.50, this.y);
            ctx.lineTo(this.x + this.width*0.50, this.y + this.height);
            ctx.stroke();

            ctx.beginPath(); 
            ctx.moveTo(this.x + this.width*0.75, this.y);
            ctx.lineTo(this.x + this.width*0.75, this.y + this.height);
            ctx.stroke();

            ctx.font = "20px Georgia";
            ctx.fillStyle = "#000000";
            ctx.textAlign = "center";
            ctx.fillText("0", this.x, this.y+this.height*1.4);
            ctx.fillText("25", this.x+this.width*0.25, this.y+this.height*1.4);
            ctx.fillText("50", this.x+this.width*0.50, this.y+this.height*1.4);
            ctx.fillText("75", this.x+this.width*0.75, this.y+this.height*1.4);
            ctx.fillText("100", this.x+this.width*1, this.y+this.height*1.4);
            

        }    
    }
    
    var rightButton = {//각도 오른쪽이동
        backColor : "rgb(218, 218, 218)",
        x : canvas.width * 0.91,
        y : tableOut.y + tableOut.height,
        width : canvas.width * 0.05,
        height : canvas.height * 0.07,
        draw(){
            //네모 박스
            ctx.beginPath();
            ctx.fillStyle = this.backColor;
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.strokeStyle = '#000000'; 
            ctx.lineWidth = 2;
            ctx.strokeRect(this.x, this.y, this.width, this.height);
            //삼각형
            ctx.fillStyle = '#000000';
            ctx.beginPath();
            ctx.moveTo(this.x + this.width*0.45, this.y + this.height*0.35);
            ctx.lineTo(this.x + this.width*0.45, this.y + this.height*0.65);
            ctx.lineTo(this.x + this.width*0.6, this.y + this.height*0.5);
            //ctx.lineTo(this.x + this.width*0.5, this.y + this.height*0.6);
            ctx.closePath();
            ctx.fill();
        }
    }
    
    //각도 왼쪽이동
    var leftButton = {
        backColor : "rgb(218, 218, 218)",
        x : canvas.width * 0.84,
        y : tableOut.y + tableOut.height,
        width : canvas.width * 0.05,
        height : canvas.height * 0.07,
        draw(){
            //네모 박스
            ctx.beginPath();
            ctx.fillStyle = this.backColor;
            ctx.fillRect(this.x, this.y, this.width, this.height); 
            ctx.strokeStyle = '#000000'; 
            ctx.lineWidth = 2;
            ctx.strokeRect(this.x, this.y, this.width, this.height);
            //삼각형
            ctx.fillStyle = '#000000';
            ctx.beginPath();
            ctx.moveTo(this.x + this.width*0.55, this.y + this.height*0.35);
            ctx.lineTo(this.x + this.width*0.55, this.y + this.height*0.65);
            ctx.lineTo(this.x + this.width*0.4, this.y + this.height*0.5);
            //ctx.lineTo(this.x + this.width*0.5, this.y + this.height*0.6);
            ctx.closePath();
            ctx.fill();
        }
    }
    //공 시네루 버튼
    var ballButton = {
        backColor : "rgb(218, 218, 218)",
        lineColor : "rgb(100, 100, 100)",
        x : canvas.width -(canvas.width - tableOut.x - tableOut.width)*0.5,
        y : table.y+table.height*0.5,
        radius : (canvas.width - tableOut.x - tableOut.width)*0.4,
        draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.backColor;
        ctx.fill();
        ctx.strokeStyle = '#000000'; 
        ctx.lineWidth = 2;
        ctx.stroke();
        
        ctx.beginPath();
        ctx.strokeStyle = this.lineColor; 
        ctx.lineWidth = 1;
        ctx.moveTo(this.x - this.radius*1.15, this.y);
        ctx.lineTo(this.x + this.radius*1.15, this.y);
        ctx.stroke();
    
        ctx.beginPath();
        ctx.strokeStyle = this.lineColor; 
        ctx.lineWidth = 1;
        ctx.moveTo(this.x, this.y - this.radius*1.15);
        ctx.lineTo(this.x, this.y + this.radius*1.15);
        ctx.stroke();
        }
    }
}
function systemDraw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    tableOut.draw();
    table.draw();
    dot.draw();
    cuePower.draw();
    leftButton.draw();
    rightButton.draw();
    ballButton.draw();
}
//공 반지름
var ballRadius = tableWidth / 2448 * 65.5 /2 
var ball = {
    yellow : {
        color : "rgb(229, 197, 51)",
        x : table.x + 0.25*table.width,//초기위치
        y : table.y + 0.5*table.height,
        radius : ballRadius,
        angle : 0,
        //공의 속도 x,y축
        velocityX : 1,
        velocityY : 1,
        //공의 회전 축을 기준으로 컬
        spinX : 0,
        spinY : 0,
        spinZ : 0,
        velocity(){
            return (Math.sqrt(this.velocityX**2 + this.velocityY**2));
        }
    },
    red_1 : {
        color : "rgb(200, 40, 40)",
        x : table.x + 0.75*table.width,//초기 위치
        y : table.y + 0.5*table.height+ballRadius,//
        radius : ballRadius,
        angle : 0,
        //공의 속도 x,y축
        velocityX : 0,
        velocityY : 0,
        //공의 회전 축을 기준으로 컬
        spinX : 0,
        spinY : 0,
        spinZ : 0,
        velocity(){
            return (Math.sqrt(this.velocityX**2 + this.velocityY**2));
        }
    }
}

//클릭구역 판단
function isTable(x,y){//클릭한 구역이 테이블이면 true/아니면 false
    if((x > table.x && x < table.x+table.width)&&(y > table.y && y < table.y+table.height)){
        return true;
    }
    return false;
}
function isCuePower(x,y){//클릭한 구역이 큐파워이면 true/아니면 false
    if((x > cuePower.x && x < cuePower.x+cuePower.width)&&(y > cuePower.y && y < cuePower.y+cuePower.height)){
        return true;
    }
    return false;
}
function isLeft(x,y){//클릭한 구역이 레프트버튼이면 true/아니면 false
    if((x > leftButton.x && x < leftButton.x+leftButton.width)&&(y > leftButton.y && y < leftButton.y+leftButton.height)){
        return true;
    }
    return false;
}
function isRight(x,y){//클릭한 구역이 라이트버튼이면 true/아니면 false
    if((x > rightButton.x && x < rightButton.x+rightButton.width)&&(y > rightButton.y && y < rightButton.y+rightButton.height)){
        return true;
    }
    return false;
}
function isBall(x,y){//클릭한 구역이 시네루 버튼이면 true/아니면 false
    if(((x-ballButton.x)**2 +(y-ballButton.y)**2) < ballButton.radius**2){
        return true;
    }
    return false;
}
function reangle(x,y){//테이블 클릭시 공의 각도를 재지정
    if((x-ball.yellow.x) > 0){//공의 오른쪽 클릭
        ball.yellow.angle = Math.asin((y-ball.yellow.y)/Math.sqrt((x-ball.yellow.x)**2 + (y-ball.yellow.y)**2));
    }
    else{//공의 왼쪽 클릭
        ball.yellow.angle = Math.asin(-(y-ball.yellow.y)/Math.sqrt((x-ball.yellow.x)**2 + (y-ball.yellow.y)**2))+Math.PI;
    }
}
//상태 : ready=준비중(공 치는 준비)  play=게임 표현중(공 움직이는중)
var state = "ready"
//표현할 애니메이션 프레임(공들의 위치를 배열의 형태로 가짐)
var frame = []
function drawBalls([yellowX, yellowY, red_1X, red_1Y]){
    systemDraw();
    ctx.beginPath();
    ctx.arc(yellowX, yellowY, ballRadius, 0, 2 * Math.PI);
    ctx.fillStyle = ball.yellow.color;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(red_1X, red_1Y, ballRadius, 0, 2 * Math.PI);
    ctx.fillStyle = ball.red_1.color;
    ctx.fill();
}

function drawBallPath(){
    var lineColor = "#000000";
    var a = 500;
    ball.yellow.angle = (ball.yellow.angle+Math.PI*2) % (Math.PI*2);
    //console.log(ball.yellow.angle);
    var endX = ball.yellow.x + Math.cos(ball.yellow.angle) * a;
    var endY = ball.yellow.y + Math.sin(ball.yellow.angle) * a;
    
    systemDraw();
    drawBalls([ball.yellow.x, ball.yellow.y, ball.red_1.x, ball.red_1.y]);
    ctx.beginPath();
    ctx.strokeStyle = lineColor; 
    ctx.lineWidth = 1;
    ctx.moveTo(ball.yellow.x, ball.yellow.y);
    ctx.lineTo(endX, endY);
    ctx.stroke();
}
drawBallPath();

function moveBalls(){//공들 움직이기
    //노란공 움직이기
    var t = 1;//접촉시에 짧은 시간 만큼
    ball.yellow.x += ball.yellow.velocityX;
    ball.yellow.y += ball.yellow.velocityY;
    if((ball.yellow.x > table.x + table.width - ballRadius) || (ball.yellow.x < table.x + ballRadius)){
        ball.yellow.velocityX *= -1;
    }
    if((ball.yellow.y > table.y + table.height - ballRadius) || (ball.yellow.y < table.y + ballRadius)){
        ball.yellow.velocityY *= -1;
    }
    //빨간공1 움직이기
    ball.red_1.x += ball.red_1.velocityX;
    ball.red_1.y += ball.red_1.velocityY;
    if((ball.red_1.x > table.x + table.width - ballRadius) || (ball.red_1.x < table.x + ballRadius)){
        ball.red_1.velocityX *= -1;
    }
    if((ball.red_1.y > table.y + table.height - ballRadius) || (ball.red_1.y < table.y + ballRadius)){
        ball.red_1.velocityY *= -1;
    }
    if(((ball.yellow.x-ball.red_1.x)**2 + (ball.yellow.y-ball.red_1.y)**2) <= ((ballRadius*2)**2)){//노란공 빨간공1 충돌시
        while((ball.yellow.x-ball.red_1.x)**2 + (ball.yellow.y-ball.red_1.y)**2 <= (ballRadius*2)**2){
            ball.red_1.x -= ball.red_1.velocityX*0.001;
            ball.red_1.y -= ball.red_1.velocityY*0.001;
            ball.yellow.x -= ball.yellow.velocityX*0.001;
            ball.yellow.y -= ball.yellow.velocityY*0.001;
            t -= 0.001;
        }
        console.log("connect balls")
        var sinA = (ball.yellow.y-ball.red_1.y) / (2*ballRadius);
        var cosA = (ball.yellow.x-ball.red_1.x) / (2*ballRadius);
        console.log(sinA);
        console.log(cosA);
        var v_v_1 = (ball.red_1.velocityX * cosA) + (ball.red_1.velocityY * sinA);
        var v_u_1 = -(ball.red_1.velocityX * sinA)+ (ball.red_1.velocityY * cosA);
        var v_v_2 = (ball.yellow.velocityX * cosA) + (ball.yellow.velocityY * sinA);
        var v_u_2 = -(ball.yellow.velocityX * sinA)+ (ball.yellow.velocityY * cosA);

        ball.red_1.velocityX = v_v_2*cosA - v_u_1*sinA;
        ball.red_1.velocityY = v_v_2*sinA + v_u_1*cosA;
        ball.yellow.velocityX = v_v_1*cosA - v_u_2*sinA;
        ball.yellow.velocityY = v_v_1*sinA + v_u_2*cosA;
    }
    //테이마의 마찰로인한 감속
    if(ball.yellow.velocity() != 0){
        ball.yellow.velocityX -= (ball.yellow.velocityX/ball.yellow.velocity())*fricton_table*t;
        ball.yellow.velocityY -= (ball.yellow.velocityY/ball.yellow.velocity())*fricton_table*t;
    }
    if(ball.red_1.velocity() != 0){
        ball.red_1.velocityX -= (ball.red_1.velocityX/ball.red_1.velocity())*fricton_table*t;
        ball.red_1.velocityY -= (ball.red_1.velocityY/ball.red_1.velocity())*fricton_table*t;
    }

    return([ball.yellow.x, ball.yellow.y, ball.red_1.x, ball.red_1.y]);//노란공, 빨간공 위치 리턴
}
function playGame(v){
    ball.yellow.velocityX = Math.cos(ball.yellow.angle) * v;
    ball.yellow.velocityY = Math.sin(ball.yellow.angle) * v;
    var i = 0;
    frame = [];
    while(ball.yellow.velocity()>0.001 || ball.red_1.velocity()>0.001){
        if(i%frameRate==0){
            frame.push(moveBalls());
        }else{
            moveBalls();
        }

        i++;
        if(i > 50000){
            console.log("over frame limit")
            break;
        }
    }
    console.log(frame.length);
    i = 0;
    let raf; // requestAnimationFrame을 담을 변수
    const performAnimation = () => {
        /* 스타일 조정 스크립트 */
        drawBalls(frame[i]);
        i++;
  
        // 특정한 조건일 경우 raf를 중지하고 콜백 종료
        if(i>=frame.length) {
            cancelAnimationFrame(raf);
            state = "ready";
            console.log("state turns to ready");
            drawBallPath();
            return;
        }
        raf = requestAnimationFrame(performAnimation) ;
        // 함수 내부에서 다시 requestAnimationFrame을 호출하여 반복
    }
    requestAnimationFrame(performAnimation);
}

function clickGame(event){
    var mouseX = event.clientX - ctx.canvas.offsetLeft;
    var mouseY = event.clientY - ctx.canvas.offsetTop;
  
    if(isTable(mouseX, mouseY)){//테이블 클릭하면 공의 방향 조정
        reangle(mouseX,mouseY);
        drawBallPath();
    }
    if(isLeft(mouseX, mouseY)){//왼쪽 버튼 누르면 미세하게 왼쪽으로 각도 조절
        ball.yellow.angle -= 0.003;
        drawBallPath();
    }
    if(isRight(mouseX, mouseY)){//오른쪽 버튼 누르면 미세하게 오른쪽으로 각도 조절
        ball.yellow.angle += 0.003;
        drawBallPath();
    }
    if(isCuePower(mouseX, mouseY)){//큐파워 박스를 누르면 공의 속도를 정하고 시작
        playGame(((cuePower.x + cuePower.width - mouseX)/cuePower.width));
        
    }
    if(isBall(mouseX, mouseY)){//볼의 시네루 정하기
        
    }
}

canvas.addEventListener("click", clickGame);