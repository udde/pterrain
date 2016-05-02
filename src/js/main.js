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
    camera.position.set(1280, 210, -280);
    camera.lookAt({x: 0, y: 0, z: 0 });

    //LIGHT
    light = new THREE.DirectionalLight(0xdfebff, 1.75);
    light.position.set(0.0, 1100.0, 500.0);
    scene.add(light);

    //RENDERER
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
    renderer.setClearColor( 0xbbbbbb );
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
    var skyShaders = {
        vs : require('../shaders/skyVertexShader.glsl')(),
        fs : require('../shaders/skyFragmentShader.glsl')()
    };

    var skyGeo = new THREE.SphereGeometry(1600, 15, 15);
    // var texture = THREE.TextureLoader( "img/sky.jpg" );
    var skyMaterial = new THREE.ShaderMaterial({
        vertexShader: skyShaders.vs,
        fragmentShader: skyShaders.fs,
    });
    var sky = new THREE.Mesh(skyGeo, skyMaterial);
    sky.material.side = THREE.BackSide;
    sky.rotateX( - Math.PI / 2 );
    scene.add(sky);

    // clouds();

    //TERRAIN
    var terrainMaterial = new THREE.ShaderMaterial( {
        uniforms: {
            uCameraPos: {type: "v3", value: camera.position},
            uLightPos: {type: "v3", value: light.position},
        },
        vertexShader: groundShaders.vs,
        fragmentShader: groundShaders.fs,
    } );
    var terrainGeo = terrainGeometry(); //require('../js/terrainHeightDataGeneration.js')(THREE)
    var terrainMesh = new THREE.Mesh(terrainGeo, terrainMaterial);
    terrainMesh.position.y -= 50;
    scene.add(terrainMesh);

    //WATER / MIRROR
    var mirrorGeo = new THREE.PlaneGeometry( 3200, 3200, 200 , 200 );
    groundMirror = new THREE.Mirror( renderer, camera, { clipBias: 0.003,
	   textureWidth: SCREEN_WIDTH, textureHeight: SCREEN_HEIGHT, color: 0x777777 } );
    //feed THREE.Mirror with own shaders/uniforms. TODO: make it look more like water...
    groundMirror.material.vertexShader = mirrorShaders.vs;
    groundMirror.material.fragmentShader = mirrorShaders.fs;
    groundMirror.material.transparent = true;
    groundMirror.material.uniforms["uLight"] = {type: "v3", value: light.position} ;
    groundMirror.material.uniforms["uCamera"] = {type: "v3", value: camera.position} ;
    groundMirror.material.uniforms["uTime"] = {type: "f", value: 0.0} ;

    var mirrorMesh = new THREE.Mesh( mirrorGeo, groundMirror.material );
	mirrorMesh.add( groundMirror );
	mirrorMesh.rotateX( - Math.PI / 2 );
    mirrorMesh.position.y = -93; //magic numer to set the water level so it looks nice
    mirrorMesh.geometry.normalsNeedUpdate = true;
    mirrorMesh.geometry.computeFaceNormals();
    mirrorMesh.geometry.computeVertexNormals();
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

    // console.log(camera.position);
}

function updateStuff(){
    groundMirror.material.uniforms["uTime"].value += 0.01;
}
