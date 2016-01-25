var SCREEN_WIDTH = window.innerWidth ;
var SCREEN_HEIGHT = window.innerHeight ;
var SCREEN_RATIO = SCREEN_WIDTH/SCREEN_HEIGHT ;
var HALF_WIDTH = SCREEN_WIDTH / 2 ;
var HALF_HEIGHT = SCREEN_HEIGHT / 2 ;

var camera, scene, renderer, container, light, controls, composer, groundMirror;

init();
render();

function init(){
    container = document.createElement('div');
    document.body.appendChild(container);
    //SCENE / CAMERA
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(30, SCREEN_RATIO, 1, 10000);
    controls = new THREE.OrbitControls( camera );
    camera.up = new THREE.Vector3(0.0, 1.0, 0.0);
    camera.position.set(505, 280, 1400);
    camera.lookAt({x: 0, y: 0, z: 0 }); 
    
    //LIGHT
    light = new THREE.DirectionalLight(0xdfebff, 1.75);
    light.position.set(0.0, 100.0, 500.0);
    // scene.add(light);
    
    //RENDERER
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
    renderer.setClearColor( 0x77bbcc );
    container.appendChild(renderer.domElement);
    
    //SHADERS
    var groundShaders = {
        vs : require('../shaders/groundVertexshader.glsl')(),
        fs : require('../shaders/groundFragmentshader.glsl')()
    };
    var mirrorShaders = {
        vs : require('../shaders/mirrorVertexShader.glsl')(),
        fs : require('../shaders/mirrorFragmentShader.glsl')()
    };
     
    //TERRAIN
    var meterial = new THREE.ShaderMaterial( {
        uniforms: {
            uCameraPos: {type: "v3", value: camera.position},
            uLightPos: {type: "v3", value: light.position},
        },
        vertexShader: groundShaders.vs,
        fragmentShader: groundShaders.fs,
    } );
    var terrain = terrainGeometry(); //require('../js/terrainHeightDataGeneration.js')(THREE)
    var terrainMesh = new THREE.Mesh(terrain, meterial);
    terrainMesh.position.y -= 50;
    scene.add(terrainMesh); 
    
    //WATER / MIRROR
    var geometry = new THREE.PlaneGeometry( 3200, 3200, 1 , 1 );
    groundMirror = new THREE.Mirror( renderer, camera, { clipBias: 0.003,
	   textureWidth: SCREEN_WIDTH, textureHeight: SCREEN_HEIGHT, color: 0x777777 } );
    //feed THREE.Mirror with own shaders/uniforms. TODO: make it look more like water...
    groundMirror.material.vertexShader = mirrorShaders.vs;
    groundMirror.material.fragmentShader = mirrorShaders.fs;
    groundMirror.material.transparent = true;
    groundMirror.material.uniforms["uLight"] = {type: "v3", value: light.position} ;
    groundMirror.material.uniforms["uCamera"] = {type: "v3", value: camera.position} ; 
    
    var mirrorMesh = new THREE.Mesh( geometry, groundMirror.material );
	mirrorMesh.add( groundMirror );
	mirrorMesh.rotateX( - Math.PI / 2 );
    mirrorMesh.position.y = -93;
	scene.add( mirrorMesh );

    // MP-RENDERING COMPOSER
    composer = new THREE.EffectComposer( renderer );
    var renderPass = new THREE.RenderPass(scene, camera);
    var fxaaPass = new THREE.ShaderPass(THREE.FXAAShader);
    fxaaPass.uniforms.resolution.value.set(1 / (SCREEN_WIDTH), 1 / (SCREEN_HEIGHT));
    var toScreen = new THREE.ShaderPass(THREE.CopyShader);
    toScreen.renderToScreen = true;
    
    
    composer.addPass(renderPass);
    composer.addPass(fxaaPass);
    composer.addPass(toScreen);
}   

//RENDER-LOOP
function render(){
    requestAnimationFrame( render );
    
    updateStuff();
    groundMirror.render();
    composer.render();
    // renderer.render(scene, camera);
    
    controls.update();
}

function updateStuff(){
    
}







