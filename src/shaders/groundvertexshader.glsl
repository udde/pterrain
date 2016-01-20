
// attribute vec3 aPosition;
// attribute vec3 aNormal;
attribute float aTriangleHeight;

varying vec3 vPos;
varying vec3 vNormal;
varying float vTriangleHeight;

void main() {
    vPos = position;
    vNormal = normalize(normal);
    vTriangleHeight = aTriangleHeight;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
