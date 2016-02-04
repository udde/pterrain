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
    camera.position.set(1300, 280, 0);
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
     
    var skyGeo = new THREE.SphereGeometry(1600, 25, 25); 
    // var texture = THREE.TextureLoader( "img/sky.jpg" );
    var material = new THREE.MeshBasicMaterial({ 
        color: 0x33ccff, 
        shading: THREE.FlatShading
    });
    var sky = new THREE.Mesh(skyGeo, material);
    sky.material.side = THREE.BackSide;
    scene.add(sky);
    
    // clouds();
    
    
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
    var geometry = new THREE.PlaneGeometry( 3200, 3200, 200 , 200 );
    groundMirror = new THREE.Mirror( renderer, camera, { clipBias: 0.003,
	   textureWidth: SCREEN_WIDTH, textureHeight: SCREEN_HEIGHT, color: 0x777777 } );
    //feed THREE.Mirror with own shaders/uniforms. TODO: make it look more like water...
    groundMirror.material.vertexShader = mirrorShaders.vs;
    groundMirror.material.fragmentShader = mirrorShaders.fs;
    groundMirror.material.transparent = true;
    groundMirror.material.uniforms["uLight"] = {type: "v3", value: light.position} ;
    groundMirror.material.uniforms["uCamera"] = {type: "v3", value: camera.position} ;
    groundMirror.material.uniforms["uTime"] = {type: "f", value: 0.0} ;  
    
    var mirrorMesh = new THREE.Mesh( geometry, groundMirror.material );
	mirrorMesh.add( groundMirror );
	mirrorMesh.rotateX( - Math.PI / 2 );
    mirrorMesh.position.y = -93;
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
}

function updateStuff(){
    groundMirror.material.uniforms["uTime"].value += 0.01; 
}



function clouds(){
    var geo = new THREE.SphereGeometry(120, 6, 6);
    var material = new THREE.MeshBasicMaterial({
        color: 0xeeeeff,
        shading: THREE.FlatShading
    });
    var cloud = new THREE.Mesh(geo, material);
    cloud.position.y += 700;
    scene.add(cloud);
    var cloud = new THREE.Mesh(geo, material);
    cloud.position.y += 780;
    cloud.position.x += 190;
    scene.add(cloud);
    var geo = new THREE.SphereGeometry(120, 6, 6);
    var cloud = new THREE.Mesh(geo, material);
    cloud.position.y += 740;
    cloud.position.x -= 100;
    cloud.position.z -= 110;
    scene.add(cloud);
    
    var geo = new THREE.SphereGeometry(90, 6, 6);
    var cloud = new THREE.Mesh(geo, material);
    cloud.position.y += 740;
    cloud.position.x += 60;
    cloud.position.z -= 80;
    scene.add(cloud);
    var cloud = new THREE.Mesh(geo, material);
    cloud.position.y += 740;
    cloud.position.x += 10;
    cloud.position.z -= 110;
    scene.add(cloud);
    
    
    
    
    
    
    
    
    
    
    
    
    
    var geo = new THREE.SphereGeometry(120, 6, 6);
    var material = new THREE.MeshBasicMaterial({
        color: 0xeeeeff,
        shading: THREE.FlatShading
    });
    var cloud = new THREE.Mesh(geo, material);
    cloud.position.y += 790;
    cloud.position.x += 780;
    scene.add(cloud);
    var cloud = new THREE.Mesh(geo, material);
    cloud.position.y += 880;
    cloud.position.x += 910;
    scene.add(cloud);
    var geo = new THREE.SphereGeometry(120, 6, 6);
    var cloud = new THREE.Mesh(geo, material);
    cloud.position.y += 840;
    cloud.position.x += 890;
    cloud.position.z -= 180;
    scene.add(cloud);
    
    
}



