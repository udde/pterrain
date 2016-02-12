// Extension of THREE.MirrorShader
precision mediump float;

vec3 mod289(vec3 x) {return x - floor(x * (1.0 / 289.0)) * 289.0;}vec4 mod289(vec4 x) {return x - floor(x * (1.0 / 289.0)) * 289.0;}vec4 permute(vec4 x) {return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}vec2 mod289(vec2 x) {return x - floor(x * (1.0 / 289.0)) * 289.0;}vec3 permute(vec3 x) {return mod289(((x*34.0)+1.0)*x);}float snoise(vec3 v){const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);vec3 i  = floor(v + dot(v, C.yyy) );vec3 x0 =   v - i + dot(i, C.xxx) ;vec3 g = step(x0.yzx, x0.xyz);vec3 l = 1.0 - g;vec3 i1 = min( g.xyz, l.zxy );vec3 i2 = max( g.xyz, l.zxy );vec3 x1 = x0 - i1 + C.xxx;vec3 x2 = x0 - i2 + C.yyy; vec3 x3 = x0 - D.yyy; i = mod289(i);vec4 p = permute( permute( permute(i.z + vec4(0.0, i1.z, i2.z, 1.0 ))+ i.y + vec4(0.0, i1.y, i2.y, 1.0 ))+ i.x + vec4(0.0, i1.x, i2.x, 1.0 ));float n_ = 0.142857142857; vec3  ns = n_ * D.wyz - D.xzx;vec4 j = p - 49.0 * floor(p * ns.z * ns.z); vec4 x_ = floor(j * ns.z);vec4 y_ = floor(j - 7.0 * x_ ); vec4 x = x_ *ns.x + ns.yyyy;vec4 y = y_ *ns.x + ns.yyyy;vec4 h = 1.0 - abs(x) - abs(y);vec4 b0 = vec4( x.xy, y.xy );vec4 b1 = vec4( x.zw, y.zw );vec4 s0 = floor(b0)*2.0 + 1.0;vec4 s1 = floor(b1)*2.0 + 1.0;vec4 sh = -step(h, vec4(0.0));vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;vec3 p0 = vec3(a0.xy,h.x);vec3 p1 = vec3(a0.zw,h.y);vec3 p2 = vec3(a1.xy,h.z);vec3 p3 = vec3(a1.zw,h.w);vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));p0 *= norm.x;p1 *= norm.y;p2 *= norm.z;p3 *= norm.w;vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);m = m * m;return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),dot(p2,x2), dot(p3,x3) ) );} float snoise(vec2 v) {const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);vec2 i  = floor(v + dot(v, C.yy) );vec2 x0 = v -   i + dot(i, C.xx);vec2 i1;i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);vec4 x12 = x0.xyxy + C.xxzz;x12.xy -= i1;i = mod289(i);vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))+ i.x + vec3(0.0, i1.x, 1.0 ));vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);m = m*m ;m = m*m ;vec3 x = 2.0 * fract(p * C.www) - 1.0;vec3 h = abs(x) - 0.5;vec3 ox = floor(x + 0.5);vec3 a0 = x - ox;m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );vec3 g;g.x  = a0.x  * x0.x  + h.x  * x0.y;g.yz = a0.yz * x12.xz + h.yz * x12.yw;return 130.0 * dot(m, g);}


uniform vec3 mirrorColor;
uniform sampler2D mirrorSampler;

uniform vec3 uCamera;
uniform vec3 uLight;
uniform float uTime;

varying vec4 mirrorCoord;
varying vec3 vnormal;
varying vec2 vuv;

float blendOverlay(float base, float blend) {
    return( base < 0.5 ? ( 2.0 * base * blend ) : (1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );
}

void main() {

    float cordNoise1 = 1.2 * snoise(vec3(vuv * 35.0, uTime * 1.9));
    float cordNoise2 = 0.6 * snoise(vec3(vuv * 70.0, uTime * 3.6));

    vec4 cord = mirrorCoord;
    cord.x += (cordNoise1 + cordNoise2);
    cord.y += (-cordNoise1 + cordNoise2);
    
    //LP-filter
    float off = 1.0/0.33;
    float norm = 1.0/196.0;
    vec3 f = vec3(4.0, 6.0, 4.0);
    vec4 sum = vec4(0.0, 0.0, 0.0, 0.0);
    for(int i = -1; i < 2; i += 1){
        for(int j = -1; j < 2; j += 1){
            vec2 newCoord = cord.xy + vec2(i,j) * off;
            sum = sum + f[i + 2]*f[j + 2]*norm*texture2DProj(mirrorSampler, vec4(newCoord, cord.zw));
        };
    };
    vec4 color = texture2DProj(mirrorSampler, cord);
    color = sum;
    color.z += 0.1;
    // color = vec4(0.4, 0.7, 0.9, 0.9);
    
    vec3 mc = vec3(0.7, 0.7, 0.72);
    // color = vec4(blendOverlay(mc.r, color.r), blendOverlay(mc.g, color.g), blendOverlay(mc.b, color.b), 1.0);
    
    vec3 c = mix(color.xyz, vec3(0.1, 0.5, 0.8), 0.0);
    
    float noiseWave = 1.9 * snoise(vec3(vuv * 25.0, uTime * 0.3));
    float noiseAmp = 0.2 * snoise(vec3(vuv * 12.0, uTime * 1.3));
    
    float wt = 0.4 * uTime; //waveTime
    float wa = 0.3 ; //waveAmp
    float ww = 100.0 ; //waveWidth
    
    float a1 = 0.16 * snoise(vec3(100.0*vuv, 0.4 *uTime)) ;
    a1 = (a1 + 1.0) * 0.5;
    
    float a3 = sin((ww + noiseWave) * vuv.x + wt) * cos((ww +noiseWave)* vuv.y + wt) * (wa +noiseAmp);
    
    wt *=2.0; wa /=2.0; ww *= 2.0;
    float a2 = sin(ww * vuv.x + wt) * cos(ww * vuv.y + wt ) * wa ;
   
    a2 = (a2 + 1.0) * 0.5;
    a3 = (a3 + 1.0) * 0.5;
    
    wt *=2.0; wa /=2.0; ww *= 2.0;
    float a4 = sin(ww * vuv.x + wt) * cos(ww * vuv.y + wt) * wa ;
    a4 = (a4 + 1.0) * 0.5;
    
    
    float a =  a4 + a3  + a1;
    
    a /= 3.0;
    
    a = clamp(a,0.0,1.0);
   
    
    vec3 cb = mc;
    vec3 cm = color.xyz;
    
    
    // c = (a > 0.5) ? cm : cb;
    // c = cm;
    c = c * a;
    // c += cb;
    // c = mix(cb, cm, a);

    
    
    
    vec3 n = vec3(0.0, 1.0, 0.0);
    
    float ka = 0.4;
    vec3 li = normalize(uLight);
    float kd = 0.9 * clamp(dot(n, li), 0.0, 1.0);
    
    float ks = 1.7 * a * a * a * a * a;
    
    c = c * (ka + kd + ks);
    
    // c = cb * a;
    
    gl_FragColor.xyz = vec3(vuv, 1.0);
    gl_FragColor.xyz = c;
    gl_FragColor.a = 0.8;
    
    
 
}
