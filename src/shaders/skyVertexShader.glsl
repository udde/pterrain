
varying vec3 vpos;
void main() {
    
    vpos = position;
    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
    vec4 worldPosition = modelMatrix * vec4( position, 1.0 );

    gl_Position = projectionMatrix * mvPosition;
}