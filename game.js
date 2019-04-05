alert("Welcome to the Blob game")

let initialBlob = {
    height: 20,
    speed: 3,
    position: {
        x: 50,
        y: 50,
    }
}
let secondBlob = {
    height: 20,
    speed: 2,
    position: {
        x: 350,
        y: 350,
    }
}

let blobs = [initialBlob, secondBlob]

function drawBlob () {
    console.log('About to create a new blob')
    let newRandomPosition = Math.floor(Math.random() * 550) + 1
    let newBlob = {
        height: 20,
        speed: 3,
        position: {
            x: newRandomPosition,
            y: newRandomPosition,
        }
    }
    blobs.push(newBlob) 
    console.log(blobs)
}

let createBlobButton = document.getElementById("create-blob")
console.log(createBlobButton)
createBlobButton.addEventListener('click', drawBlob)
console.log(blobs);


function setup() {
    createCanvas(600, 600)
    background(200)
}

function draw () {
 for (i= 0; i < blobs.length; i++) {
     fill (255,0,0);
     ellipse(blobs[i].position.x, blobs[i].position.y, blobs[i].height, blobs[i].height);
 }
}


    