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
    scene.fog = new THREE.FogExp2(0xaa0000, 1.2);
    debugger;
    camera = new THREE.PerspectiveCamera(30, SCREEN_RATIO, 1, 10000);
    camera.position.set(505, 280, 1400);
    camera.up = new THREE.Vector3(0.0, 1.0, 0.0);
    camera.lookAt({x: 0, y: 0, z: 0 }); 
    
    mirrorCamera = camera.clone(camera);
    // mirrorCamera.projectionMatrix.makeRotationX(Math.PI);
    mirrorTarget = new THREE.WebGLRenderTarget(SCREEN_WIDTH, SCREEN_HEIGHT,  { format: THREE.RGBFormat});
   
    light = new THREE.DirectionalLight(0xdfebff, 1.75);
    light.position.set(0.0, 100.0, 500.0);
    // scene.add(light);
    
    
    
    
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
    
    
    //TERRAIN
    var meterial = new THREE.ShaderMaterial( {
        uniforms: {
            uCameraPos: {type: "v3", value: camera.position},
            uLightPos: {type: "v3", value: light.position},
        },
        vertexShader: groundShaders.vs,
        fragmentShader: groundShaders.fs,
        // side: THREE.DoubleSide
    } );
    var terrain = terrainGeometry();//require('../js/terrainHeightDataGeneration.js')(THREE)
    
    terrainMesh = new THREE.Mesh(terrain, meterial);
    terrainMesh.position.y -= 50;
    scene.add(terrainMesh); 
    
    
    //PLANE 
    var geometry = new THREE.PlaneGeometry( 1600, 1600, 1 , 1 );
    var material = new THREE.MeshBasicMaterial( {color: 0xaaaaaa, side: THREE.DoubleSide} );
    plane = new THREE.Mesh( geometry, material );
    plane.rotation.x = -Math.PI/2;
    // plane.position.z = -1600.0;
    plane.position.y = -80;
    // scene.add( plane );
    
    
    groundMirror = new THREE.Mirror( renderer, camera, { clipBias: 0.003,
	textureWidth: SCREEN_WIDTH, textureHeight: SCREEN_HEIGHT, color: 0x777777 } );
	
    //feed THREE.Mirror with custom shaders to look more like water than a normal mirror!
    groundMirror.material.vertexShader = require("../shaders/mirrorVertexShader.glsl")();
    groundMirror.material.fragmentShader = require("../shaders/mirrorFragmentShader.glsl")();
    groundMirror.material.transparent = true;
    groundMirror.material.uniforms["uLight"] = {type: "v3", value: light.position} ;
    groundMirror.material.uniforms["uCamera"] = {type: "v3", value: camera.position} ; 
    
    var mirrorMesh = new THREE.Mesh( geometry, groundMirror.material );
	mirrorMesh.add( groundMirror );
	mirrorMesh.rotateX( - Math.PI / 2 );
    mirrorMesh.position.y = -113;
	scene.add( mirrorMesh );

    
    // renderer.autoClear = false;
    
    
    composer = new THREE.EffectComposer( renderer );
    var render = new THREE.RenderPass(scene, camera);
    var ts = new THREE.ShaderPass(THREE.CopyShader);
    var fxaa = new THREE.ShaderPass(THREE.FXAAShader);
    fxaa.uniforms.resolution.value.set(1 / (SCREEN_WIDTH), 1 / (SCREEN_HEIGHT));
    ts.renderToScreen = true;
    
    
    composer.addPass(render);
    composer.addPass(fxaa);
    composer.addPass(ts);
}   

function render(){
    
    console.log(camera.position);
    requestAnimationFrame( render );
    
    groundMirror.render();
    composer.render();
    // renderer.render(scene, camera);
    
    controls.update();
}










