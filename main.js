function preload(){

}

function setup(){
    canvas=createCanvas(550,480)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()

    tint_color=""
}

function draw(){
    image(video,0,0,550,480)
   tint(tint_color)
}

function take_snapshot(){
    save('test.png')
}

function filter_tint(){
    tint_color=document.getElementById("color_name").value
}