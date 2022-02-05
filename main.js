var camera=document.getElementById("camera"); 
Webcam.attach(camera); 
Webcam.set({
     height:300,
     width:350, 
     image_format:'png', 
     png_quality:90
}); 
 
function take_snapshot(){ 
        Webcam.snap(function(data_uri){
            document.getElementById("result").innerHTML="<img id='captured_img' src='" +data_uri+"'>";  
            
            
        }); 
} 

console.log("ml5 version:"+ml5.version); 


var classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/r6aEV4AGV/model.json',modelLoaded);   
function modelLoaded() 
{ 
    console.log("model loaded"); 
} 


function check() 
{
    var img=document.getElementById("captured_img");  
    classifier.classify(img,gotResults);
} 

function gotResults(error,results) 
{ 
     if(error){ 
         console.log(error); 
     } 
     else  
     { 
         console.log(results);  
         document.getElementById("object_name").innerHTML=results[0].label; 
         document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(3);

     }
    } 
