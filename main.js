var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();


function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognitio.onresult = function(event){
    
console.log(event);

var Content = event.results[0][0].transcript;
document.getELementById("textbox").innerHTML = Content;
console.log(Content);
if(Content =="take my selfie")
{
    console.log("taking slefie --- ");
    speak();
}
}

function speak(){
    var synth = window.speechSynthesis;

    speak_dsta = "Talkin you Selfie in 5 second";
    var utterThis = new SpeechSynthesisUtterrance(speak_dat);

    synth.speak(utterthis);
    Webcam.attach(camera);

    setTimeout(function()
    {
        take_snapshot();
        save();
    }, 5000);
}
camera =document.getElementById("camera")
Webcam.set({
    width:360,
    height:250,
    image_format : 'jpeg' ,
    jpeg_quality:90
})

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}