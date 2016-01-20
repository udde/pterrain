var SCREEN_WIDTH = window.innerWidth ;
var SCREEN_HEIGHT = window.innerHeight ;
var SCREEN_RATIO = SCREEN_WIDTH/SCREEN_HEIGHT ;
var HALF_WIDTH = SCREEN_WIDTH / 2 ;
var HALF_HEIGHT = SCREEN_HEIGHT / 2 ;

var camera, mirrorCamera, mirrorTarget, water, terrainMesh, plane,
scene, renderer, container, light, controls, composer, groundMirror;

// var THREE = require('three')
// var OrbitControls = require('three-orbit-controls')(THREE)

var groundShaders = {
    vs : require('../shaders/groundVertexshader.glsl')(),
    fs : require('../shaders/groundFragmentshader.glsl')()
};
var waterShaders = {
    vs : require('../shaders/waterVertexshader.glsl')(),
    fs : require('../shaders/waterFragmentshader.glsl')()
};

init();
render();

function init(){
    container = document.createElement('div');
    document.body.appendChild(container);
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(30, SCREEN_RATIO, 1, 10000);
    camera.position.x = 0;
    camera.position.y = 450;
    camera.position.z = 800;
    camera.up = new THREE.Vector3(0.0, 1.0, 0.0);
    camera.lookAt({x: 0, y: 0, z: 0 }); 
    
    mirrorCamera = camera.clone(camera);
    // mirrorCamera.projectionMatrix.makeRotationX(Math.PI);
    mirrorTarget = new THREE.WebGLRenderTarget(SCREEN_WIDTH, SCREEN_HEIGHT,  { format: THREE.RGBFormat});
   
    light = new THREE.DirectionalLight(0xdfebff, 1.75);
    light.position.set(0.0, 1000.0, 200.0);
    scene.add(light);
    
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
    renderer.setClearColor( 0x77bbcc );
    
    container.appendChild(renderer.domElement);
    controls = new THREE.OrbitControls( camera );
    
    //WATER
    var material = new THREE.ShaderMaterial( {
        uniforms: {
            uCameraPos: {type: "v3", value: camera.position},
            uMirror: {type: "t", value: mirrorTarget}
        },
        transparent: true,
        vertexShader: waterShaders.vs,
        fragmentShader: waterShaders.fs,
        // depthWrite: false
    } );
    var geometry = new THREE.PlaneGeometry(1600,1600,100,100);
    // var material = new THREE.MeshBasicMaterial({ wireframe: true, color: 0x44aaff });
    water = new THREE.Mesh(geometry, material);
    water.rotation.x = -Math.PI/2;
    // water.position.y = 300.0;
    // water.position.z = -1600.0;
    // scene.add(water); 
    
    //BOX
    var geometry = new THREE.BoxGeometry( 100, 100, 100 );
    var material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    //BOX
    var geometry = new THREE.BoxGeometry( 120, 120, 120 );
    var material = new THREE.MeshBasicMaterial( {color: 0xff00ff} );
    var cube = new THREE.Mesh( geometry, material );
    cube.position.x += 200; cube.position.y += 100; cube.position.z -= 100;
    scene.add( cube );
    
    //PLANE 
    var geometry = new THREE.PlaneGeometry( 600, 600, 1 , 1 );
    var material = new THREE.MeshBasicMaterial( {color: 0xaaaaaa, side: THREE.DoubleSide} );
    plane = new THREE.Mesh( geometry, material );
    plane.rotation.x = -Math.PI/2;
    // plane.position.z = -1600.0;
    plane.position.y = -80;
    // scene.add( plane );
    
    var x = 10;
    groundMirror = new THREE.Mirror( renderer, camera, { clipBias: 0.003,
	textureWidth: SCREEN_WIDTH, textureHeight: SCREEN_HEIGHT, color: 0x777777 } );
	groundMirror.material.transparent = true;
	var mirrorMesh = new THREE.Mesh( geometry, groundMirror.material );
	mirrorMesh.add( groundMirror );
	mirrorMesh.rotateX( - Math.PI / 2 );
    mirrorMesh.position.y = -80;
	scene.add( mirrorMesh );
// 
    
    // renderer.autoClear = false;
    
    
    composer = new THREE.EffectComposer( renderer );
    var pass1 = new THREE.RenderPass(scene, camera);
    var ts = new THREE.ShaderPass(THREE.CopyShader);
    ts.renderToScreen = true;
    composer.addPass(pass1);
    composer.addPass(ts);
    
    
    var effect = new THREE.ShaderPass(THREE.DotScreenShader);
    effect.uniforms['scale'].value = 4;
    // effect.renderToScreen = true;
    // composer.addPass(effect);
}   

function render(){
    requestAnimationFrame( render );
    
    groundMirror.render();
    composer.render();
    
    controls.update();
}










// //TERRAIN
//     var meterial = new THREE.ShaderMaterial( {
//         uniforms: {
//             uCameraPos: {type: "v3", value: camera.position}
//         },
//         vertexShader: groundShaders.vs,
//         fragmentShader: groundShaders.fs,
//         side: THREE.DoubleSide
//     } );
//     var terrain = require('../js/terrainHeightDataGeneration.js')()
//     terrainMesh = new THREE.Mesh(terrain, meterial);
//     scene.add(terrainMesh); 