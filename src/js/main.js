/*
* Simple example, illustrating the desired lod triangle-normal-morph effect 
* (here simply moving vertices backwards with automated flatshading, mimicing the effect)
*/
var SCREEN_WIDTH = window.innerWidth ;
var SCREEN_HEIGHT = window.innerHeight ;
var SCREEN_RATIO = SCREEN_WIDTH/SCREEN_HEIGHT ;
var HALF_WIDTH = SCREEN_WIDTH / 2 ;
var HALF_HEIGHT = SCREEN_HEIGHT / 2 ;

var camera, scene, renderer, container, light, controls, composer, meshes, x;

init();
render();

function init(){
    container = document.createElement('div');
    document.body.appendChild(container);
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(30, SCREEN_RATIO, 1, 10000);
    camera.position.x = 300;
    camera.position.y = 0;
    camera.position.z = 400;
    camera.up = new THREE.Vector3(0.0, 1.0, 0.0);
    camera.lookAt({x: 0, y: 0, z: 0 }); 
    
    //LIGHT
    light = new THREE.DirectionalLight(0xdfebff, 1.75);
    light.position.set( 100, 100, 300);
    scene.add(light);
    //RENDERER
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
    renderer.setClearColor( 0x222222 );
    //Container and controlsl
    container.appendChild(renderer.domElement);
    controls = new THREE.OrbitControls( camera );
    
    
    meshes = []
    x = 0.0;
    
    var geom = new THREE.Geometry();
    var v1 = new THREE.Vector3(-30,0,0);
    var v2 = new THREE.Vector3(0,0,0);
    var v3 = new THREE.Vector3(0,30,0);
    geom.vertices.push( v1 ); geom.vertices.push( v2 ); geom.vertices.push( v3 );
    geom.faces.push( new THREE.Face3( 0, 1, 2 ) );
    geom.computeFaceNormals();
    meshes.push(new THREE.Mesh( geom, new THREE.MeshPhongMaterial({color: 0x119933, shading: THREE.FlatShading }) ));
    
    var geom = new THREE.Geometry();
    var v1 = new THREE.Vector3(0,30,0);
    var v2 = new THREE.Vector3(0,0,0);
    var v3 = new THREE.Vector3(30,0,0);
    geom.vertices.push( v1 ); geom.vertices.push( v2 ); geom.vertices.push( v3 );
    geom.faces.push( new THREE.Face3( 0, 1, 2 ) );
    geom.computeFaceNormals();
    meshes.push(new THREE.Mesh( geom, new THREE.MeshPhongMaterial({color: 0x119933, shading: THREE.FlatShading }) ));
    
    var geom = new THREE.Geometry();
    var v1 = new THREE.Vector3(0,-30,0);
    var v2 = new THREE.Vector3(0,0,0);
    var v3 = new THREE.Vector3(-30,0,0);
    geom.vertices.push( v1 ); geom.vertices.push( v2 ); geom.vertices.push( v3 );
    geom.faces.push( new THREE.Face3( 0, 1, 2 ) );
    geom.computeFaceNormals();
    meshes.push(new THREE.Mesh( geom, new THREE.MeshPhongMaterial({color: 0x119933, shading: THREE.FlatShading }) ));
    
    var geom = new THREE.Geometry();
    var v1 = new THREE.Vector3(30,0,0);
    var v2 = new THREE.Vector3(0,0,0);
    var v3 = new THREE.Vector3(0,-30,0);
    geom.vertices.push( v1 ); geom.vertices.push( v2 ); geom.vertices.push( v3 );
    geom.faces.push( new THREE.Face3( 0, 1, 2 ) );
    geom.computeFaceNormals();
    meshes.push(new THREE.Mesh( geom, new THREE.MeshPhongMaterial({color: 0x119933, shading: THREE.FlatShading }) ));
    
    for (var index = 0; index < meshes.length; index++) { scene.add(meshes[index]); }
    
    
    var meshes2 = [];
    
    var geom = new THREE.Geometry();
    var v1 = new THREE.Vector3(0,30,0);
    var v2 = new THREE.Vector3(-30,30,0);
    var v3 = new THREE.Vector3(-30,0,0);
    geom.vertices.push( v1 ); geom.vertices.push( v2 ); geom.vertices.push( v3 );
    geom.faces.push( new THREE.Face3( 0, 1, 2 ) );
    geom.computeFaceNormals();
    meshes2.push(new THREE.Mesh( geom, new THREE.MeshPhongMaterial({color: 0x119933, shading: THREE.FlatShading }) ));
    
    var geom = new THREE.Geometry();
    var v1 = new THREE.Vector3(-30,0,0);
    var v2 = new THREE.Vector3(-30,-30,0);
    var v3 = new THREE.Vector3(0,-30,0);
    geom.vertices.push( v1 ); geom.vertices.push( v2 ); geom.vertices.push( v3 );
    geom.faces.push( new THREE.Face3( 0, 1, 2 ) );
    geom.computeFaceNormals();
    meshes2.push(new THREE.Mesh( geom, new THREE.MeshPhongMaterial({color: 0x119933, shading: THREE.FlatShading }) ));
    
    var geom = new THREE.Geometry();
    var v1 = new THREE.Vector3(30,0,0);
    var v2 = new THREE.Vector3(0,-30,0);
    var v3 = new THREE.Vector3(30,-30,0);
    geom.vertices.push( v1 ); geom.vertices.push( v2 ); geom.vertices.push( v3 );
    geom.faces.push( new THREE.Face3( 0, 1, 2 ) );
    geom.computeFaceNormals();
    meshes2.push(new THREE.Mesh( geom, new THREE.MeshPhongMaterial({color: 0x119933, shading: THREE.FlatShading }) ));
    
    var geom = new THREE.Geometry();
    var v1 = new THREE.Vector3(0,30,0);
    var v2 = new THREE.Vector3(30,0,0);
    var v3 = new THREE.Vector3(30,30,0);
    geom.vertices.push( v1 ); geom.vertices.push( v2 ); geom.vertices.push( v3 );
    geom.faces.push( new THREE.Face3( 0, 1, 2 ) );
    geom.computeFaceNormals();
    meshes2.push(new THREE.Mesh( geom, new THREE.MeshPhongMaterial({color: 0x119933, shading: THREE.FlatShading }) ));
    
    for (var index = 0; index < meshes2.length; index++) { scene.add(meshes2[index]); } 
}   

function render(){
    requestAnimationFrame( render );

    updateStuff();
     
    renderer.render(scene, camera);
    
    controls.update();
}
function updateStuff(){
    var startDist = 400;
    var currentDist = camera.position.z;
    if(currentDist < startDist){
    var dif = (startDist - currentDist) * 0.02;
     for (var index = 0; index < meshes.length; index++){
            meshes[index].geometry.vertices[1].z = -dif;
            meshes[index].geometry.verticesNeedUpdate = true;
            meshes[index].geometry.computeFaceNormals();
            meshes[index].geometry.normalsNeedUpdate = true;
        }
    } 
}










