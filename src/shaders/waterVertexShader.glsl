varying vec3 vPos;
varying vec3 vNormal;
varying vec2 vuv;
void main() {
    
    vPos = position;
    vuv = uv;
    vNormal = normalize(normal);
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
