x=0;
y=0;

drawCircle="";
drawRect="";

var SpeechRecognition=window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("status").innerHTML="system is listening Please Speak";
    recognition.start();
}

recognition.onresult=function(event){


    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML="the speech has been recognized as :"+content;
    if (content=="circle"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="started drawing circle";
        drawCircle="set";
    }
    if (content=="rect"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="started drawing rectangle";
        drawRect="set";
    }
}

function setup()
{
    canvas=createCanvas(900,600);

}

function draw()
{
    if(drawCircle=="set"){
        radius=Math.floor(Math.random()*100);
        circle(x,y,radius);
        drawCircle="";
        

    }

    if(drawRect=="set"){
        
        rect(x,y,70,50);
        drawRect="";
        

    }
}
