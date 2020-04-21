
var scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera (75, window.innerWidth / window.innerHeight);
// document.getElementById("WebGL-output").appendChild(renderer.domElement);


var renderer = new THREE.WebGLRenderer();
renderer.setClearColor('white');
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


controls = new THREE.TrackballControls( camera, renderer.domElement );
controls.target.set( 0, 0, 0 )

// ^ Setup --------------

var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial({
    color: "rgb(160, 99, 156)"
});
var geometry2 = new THREE.ConeGeometry( 1, 6, 20 );
var material2 = new THREE.MeshBasicMaterial( {color: "rgb(187, 255, 255)"} );
var cone = new THREE.Mesh( geometry2, material2 );
scene.add( cone );


var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
    requestAnimationFrame( animate );
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    // cone.rotation.x += 0.01;
    // cone.rotation.y += 0.01;
    controls.update();
    renderer.render( scene, camera );
}
animate();
