uniform mat4 textureMatrix;

varying vec4 mirrorCoord;
varying vec3 vnormal;
varying vec2 vuv;
void main() {
    
    vuv = uv;
    vnormal = normalize(normal);
    
    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
    vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
    mirrorCoord = textureMatrix * worldPosition;

    gl_Position = projectionMatrix * mvPosition;
}