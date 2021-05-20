Webcam.set({
    height:300,
    width:350,
    image_format:"png",
    png_quality: 90
})

Webcam.attach("#camera")

function capture() {
    Webcam.snap(
        function (img) {
           document.getElementById("snapshot").innerHTML=`<img src="${img}" id="picture">` 
        }
    )
}
console.log(ml5.version)
classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/h7aQDfo6-/.json",modelloaded)

function modelloaded() {
console.log("your model is loaded")
}

function speak() {
    var speechapi=window.speechSynthesis
    data1="the first prediction is "+ prediction1
    data2="the second prediction is "+ prediction2
    utter_this= new SpeechSynthesisUtterance(data1+data2)
    speechapi.speak(utter_this)
}