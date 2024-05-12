Webcam.attach('#webcamDiv')

Webcam.set({
    width: 350, height: 350, image_format: 'jpg', jpg_quality: 90
})

function captureImage() {
    Webcam.snap(function (dataURL) {
        document.getElementById("webcamSrc").innerHTML = "<img src='" + dataURL + "' id='screenshot'></img>"
    })
}

console.log(ml5.version)

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/qB9O-ZfPM/model.json",modelLoading)

function modelLoading(){
    console.log("Model Loaded successfully")
}

function identifyImage(){
img=document.getElementById("screenshot")
classifier.classify(img,gotResults)
}

function gotResults(error,results){
 if(error){
    console.log(error)

 } 
 else{
    console.log(results[0].label)
    console.log(results[0].confidence)
    document.getElementById("object").innerHTML=results[0].label
    document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(3)
 }  
}
