varying vec3 vPos;
varying vec3 vNormal;
varying vec2 vuv;
uniform vec3 uCameraPos;
uniform sampler2D uMirror;

void main(){
    vec3 norm = vNormal;
    vec3 pos = vPos;
    
    vec3 c = vec3(0.3, 0.7, 0.9);
    
    vec4 mc = texture2D( uMirror, vuv);
    
    gl_FragColor = mc; //vec4(vuv, 0.0, 1.0);
}