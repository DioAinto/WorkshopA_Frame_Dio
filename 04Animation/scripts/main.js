

// // changing individual properties with code and using setInterval
 var rotationSpeed = -0.2;
 var rotationVar = 0.01;
 var myOtherBox = document.getElementById('myOtherBox');
function spin(){
 	myOtherBox.object3D.rotation.x += rotationSpeed;
 	myOtherBox.object3D.rotation.y += rotationSpeed;
 	myOtherBox.object3D.rotation.z += rotationVar;
 	console.log(myOtherBox.object3D.rotation.x);
 }

 setInterval(spin, 16); //equivalent to 60 fps