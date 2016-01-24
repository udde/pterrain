// Extension of THREE.MirrorShader
precision mediump float;

uniform vec3 mirrorColor;
uniform sampler2D mirrorSampler;

uniform vec3 uCamera;
uniform vec3 uLight;

varying vec4 mirrorCoord;
varying vec2 vuv;

float blendOverlay(float base, float blend) {
    return( base < 0.5 ? ( 2.0 * base * blend ) : (1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );
}

void main() {
    
    vec4 color = texture2DProj(mirrorSampler, mirrorCoord);
    color = vec4(blendOverlay(mirrorColor.r, color.r), blendOverlay(mirrorColor.g, color.g), blendOverlay(mirrorColor.b, color.b), 1.0);
    
    vec3 c = mix(color.xyz, vec3(0.1, 0.5, 0.7), 0.5);
    
    //todo:
    //lightning
    //waves
    
    
    gl_FragColor.xyz = c;
    gl_FragColor.a = 0.5;
 
}