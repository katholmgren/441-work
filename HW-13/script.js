var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setClearColor('white');
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// ^ Setup --------------



var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial({
    color: 0x00ff00
});

var geometry2 = new THREE.ConeGeometry( 1, 5, 20 );
var material2 = new THREE.MeshBasicMaterial( {color: 0xffff00} );
var cone = new THREE.Mesh( geometry2, material2 );
scene.add( cone );


var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
    requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cone.rotation.x += 0.01;
    cone.rotation.y += 0.01;
    renderer.render( scene, camera );
}
animate();
