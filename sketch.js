let enemyArray = [];
// let collArray = [];

let userxPos = 250;
let useryPos = 400;
// let x1 = random(100, 400);
// let y1 = random(100, 400);

let userLeft, userRight, userTop, userBottom;
let enemyD, enemyX, enemyY;

// let state = 0;

function setup() {
    createCanvas(500, 500);
    background(0);
    rectMode(CENTER);
    ellipseMode(CENTER);

    for (let i = 0; i < 5; i++) {
        let avoid = new Enemy(random(200, 400), random(200, 300), 255, 0, 0, random(2, 5), random(2, 5), random(25, 50));
        enemyArray.push(avoid);
    }

    // for (let i = 0; i<1; i++) {
    //     let cont = new Collectible(random(100, 400), random(100, 400));
    //     collArray.push(cont);
    // }
}

function draw() {
    background(0);

    fill(0, 255, 0);
    rect(userxPos, useryPos, 50, 50);
    //From line 1 to here is what I call the "Period of Prosperity (and Naiviety)" due to the false sense of hope and confidence that the code up to here induced

    if (keyIsDown(LEFT_ARROW)) {
        userxPos = (userxPos -= 3);
    }
    if (keyIsDown(RIGHT_ARROW)) {
        userxPos += 3;
    }
    if (keyIsDown(UP_ARROW)) {
        useryPos -= 3;
    }
    if (keyIsDown(DOWN_ARROW)) {
        useryPos += 3;
    }

   

    // The problem:
    userLeft = userxPos - 25;
    userRight = userxPos + 25;
    userTop = useryPos - 25;
    userBottom = useryPos + 25;
    // there isn't a solution | Correction: don't put variables after the loops for some reason? still the rest doesn't work so uh *screams of pain*

    if (userLeft < 0){
        userxPos = 474;
        useryPos;
    }

    if (userRight>500) {
        userxPos = 26;
        useryPos;
    }

    if (userTop < 0) {
        useryPos = 474;
        userxPos;
    }

    if (userBottom>500){
        userxPos;
        useryPos = 26;
    }

    let i = 0;
    while (i < enemyArray.length) {
        let enemyObject = enemyArray[i];
        fill(enemyObject.redVal, enemyObject.greenVal, enemyObject.blueVal);
        rect(enemyObject.oppxPos, enemyObject.oppyPos, enemyObject.oppDiamVal, enemyObject.oppDiamVal)

        enemyObject.oppxPos += enemyObject.oppSpeedx;
        enemyObject.oppyPos += enemyObject.oppSpeedy;

        if (enemyObject.oppxPos > 475) {
            enemyObject.oppSpeedx *= -1;
        }

        if (enemyObject.oppyPos > 475) {
            enemyObject.oppSpeedy *= -1;
        }

        if (enemyObject.oppxPos < 25) {
            enemyObject.oppSpeedx *= -1;
        }

        if (enemyObject.oppyPos < 25) {
            enemyObject.oppSpeedy *= -1;
        }

        enemyObject.oppLeft = enemyObject.oppxPos - enemyObject.oppDiamVal/2;
        enemyObject.oppRight = enemyObject.oppxPos + enemyObject.oppDiamVal/2;
        enemyObject.oppTop = enemyObject.oppyPos - enemyObject.oppDiamVal/2;
        enemyObject.oppBottom = enemyObject.oppyPos + enemyObject.oppDiamVal/2;

        console.log(enemyArray.length);

        i++;
        // if (i == enemyArray.length) {
        //     return enemyObject;
        // }

        // if (i < collArray.length + 1) {
        //     let x2 = collArray[i].xPos1 + 25;
        //     let x3 = x2 - 12.5;
        //     let y3 = collArray[i].yPos1 - 25;
        //     fill(0, 0, 255)
        //     triangle(collArray[i].xPos1, collArray[i].yPos1, x2, collArray[i].yPos1, x3, y3); 
        // }
    }

    console.log("australia");

    // // The problem:
    // userLeft = userxPos - 25;
    // userRight = userxPos + 25;
    // userTop = useryPos - 25;
    // userBottom = useryPos + 25;
    // // there isn't a solution :sadpikachu:

    // enemyX = enemyArray[0].oppxPos;
    // enemyY = enemyArray[0].oppyPos;
    // enemyD = (enemyArray[0].oppDiamVal * 0.5);


    // oppLeft = enemyX - enemyD;
    // oppRight = enemyX + enemyD;
    // oppTop = enemyY - enemyD;
    // oppBottom = enemyY + enemyD;

   
    for (let i = 0; i < enemyArray.length; i++){
    if (userLeft > enemyArray[i].oppRight || userRight < enemyArray[i].oppLeft || userTop > enemyArray[i].oppBottom || userBottom < enemyArray[i].oppTop) {
        console.log("Not colliding");
    } else {
        userxPos = 250;
        useryPos = 400;
    }
}

}

class Enemy {
    constructor(x, y, r, g, b, speedx, speedy, diam) {
        this.oppxPos = x;
        this.oppyPos = y;
        this.redVal = r;
        this.greenVal = g;
        this.blueVal = b;
        this.oppSpeedx = speedx;
        this.oppSpeedy = speedy;
        this.oppDiamVal = diam;
        this.oppLeft = x - diam/2;
        this.oppRight = x + diam/2;
        this.oppTop = y - diam/2;
        this.oppBottom = y + diam/2;
    }
}

// class Collectible {
//     constructor(x1, y1) {
//         this.xPos1 = x1;
//         this.yPos1 = y1;
//         // this.xPos2 = x2;
//         // this.yPos2 = y2;
//         // this.xPos3 = x3;
//         // this.yPos3 = y3;
//     }
// }