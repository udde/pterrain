// threejs.org/license
'use strict';var THREE={REVISION:"74dev"};"function"===typeof define&&define.amd?define("three",THREE):"undefined"!==typeof exports&&"undefined"!==typeof module&&(module.exports=THREE);void 0===Number.EPSILON&&(Number.EPSILON=Math.pow(2,-52));void 0===Math.sign&&(Math.sign=function(a){return 0>a?-1:0<a?1:+a});void 0===Function.prototype.name&&void 0!==Object.defineProperty&&Object.defineProperty(Function.prototype,"name",{get:function(){return this.toString().match(/^\s*function\s*(\S*)\s*\(/)[1]}});
void 0===Object.assign&&Object.defineProperty(Object,"assign",{writable:!0,configurable:!0,value:function(a){if(void 0===a||null===a)throw new TypeError("Cannot convert first argument to object");for(var b=Object(a),c=1,d=arguments.length;c!==d;++c){var e=arguments[c];if(void 0!==e&&null!==e)for(var e=Object(e),f=Object.keys(e),g=0,h=f.length;g!==h;++g){var k=f[g],l=Object.getOwnPropertyDescriptor(e,k);void 0!==l&&l.enumerable&&(b[k]=e[k])}}return b}});THREE.MOUSE={LEFT:0,MIDDLE:1,RIGHT:2};
THREE.CullFaceNone=0;THREE.CullFaceBack=1;THREE.CullFaceFront=2;THREE.CullFaceFrontBack=3;THREE.FrontFaceDirectionCW=0;THREE.FrontFaceDirectionCCW=1;THREE.BasicShadowMap=0;THREE.PCFShadowMap=1;THREE.PCFSoftShadowMap=2;THREE.FrontSide=0;THREE.BackSide=1;THREE.DoubleSide=2;THREE.FlatShading=1;THREE.SmoothShading=2;THREE.NoColors=0;THREE.FaceColors=1;THREE.VertexColors=2;THREE.NoBlending=0;THREE.NormalBlending=1;THREE.AdditiveBlending=2;THREE.SubtractiveBlending=3;THREE.MultiplyBlending=4;
THREE.CustomBlending=5;THREE.AddEquation=100;THREE.SubtractEquation=101;THREE.ReverseSubtractEquation=102;THREE.MinEquation=103;THREE.MaxEquation=104;THREE.ZeroFactor=200;THREE.OneFactor=201;THREE.SrcColorFactor=202;THREE.OneMinusSrcColorFactor=203;THREE.SrcAlphaFactor=204;THREE.OneMinusSrcAlphaFactor=205;THREE.DstAlphaFactor=206;THREE.OneMinusDstAlphaFactor=207;THREE.DstColorFactor=208;THREE.OneMinusDstColorFactor=209;THREE.SrcAlphaSaturateFactor=210;THREE.NeverDepth=0;THREE.AlwaysDepth=1;
THREE.LessDepth=2;THREE.LessEqualDepth=3;THREE.EqualDepth=4;THREE.GreaterEqualDepth=5;THREE.GreaterDepth=6;THREE.NotEqualDepth=7;THREE.MultiplyOperation=0;THREE.MixOperation=1;THREE.AddOperation=2;THREE.UVMapping=300;THREE.CubeReflectionMapping=301;THREE.CubeRefractionMapping=302;THREE.EquirectangularReflectionMapping=303;THREE.EquirectangularRefractionMapping=304;THREE.SphericalReflectionMapping=305;THREE.RepeatWrapping=1E3;THREE.ClampToEdgeWrapping=1001;THREE.MirroredRepeatWrapping=1002;
THREE.NearestFilter=1003;THREE.NearestMipMapNearestFilter=1004;THREE.NearestMipMapLinearFilter=1005;THREE.LinearFilter=1006;THREE.LinearMipMapNearestFilter=1007;THREE.LinearMipMapLinearFilter=1008;THREE.UnsignedByteType=1009;THREE.ByteType=1010;THREE.ShortType=1011;THREE.UnsignedShortType=1012;THREE.IntType=1013;THREE.UnsignedIntType=1014;THREE.FloatType=1015;THREE.HalfFloatType=1025;THREE.UnsignedShort4444Type=1016;THREE.UnsignedShort5551Type=1017;THREE.UnsignedShort565Type=1018;
THREE.AlphaFormat=1019;THREE.RGBFormat=1020;THREE.RGBAFormat=1021;THREE.LuminanceFormat=1022;THREE.LuminanceAlphaFormat=1023;THREE.RGBEFormat=THREE.RGBAFormat;THREE.RGB_S3TC_DXT1_Format=2001;THREE.RGBA_S3TC_DXT1_Format=2002;THREE.RGBA_S3TC_DXT3_Format=2003;THREE.RGBA_S3TC_DXT5_Format=2004;THREE.RGB_PVRTC_4BPPV1_Format=2100;THREE.RGB_PVRTC_2BPPV1_Format=2101;THREE.RGBA_PVRTC_4BPPV1_Format=2102;THREE.RGBA_PVRTC_2BPPV1_Format=2103;THREE.RGB_ETC1_Format=2151;THREE.LoopOnce=2200;THREE.LoopRepeat=2201;
THREE.LoopPingPong=2202;THREE.InterpolateDiscrete=2300;THREE.InterpolateLinear=2301;THREE.InterpolateSmooth=2302;THREE.ZeroCurvatureEnding=2400;THREE.ZeroSlopeEnding=2401;THREE.WrapAroundEnding=2402;THREE.TrianglesDrawMode=0;THREE.TriangleStripDrawMode=1;THREE.TriangleFanDrawMode=2;THREE.Color=function(a){return 3===arguments.length?this.fromArray(arguments):this.set(a)};
THREE.Color.prototype={constructor:THREE.Color,r:1,g:1,b:1,set:function(a){a instanceof THREE.Color?this.copy(a):"number"===typeof a?this.setHex(a):"string"===typeof a&&this.setStyle(a);return this},setScalar:function(a){this.b=this.g=this.r=a},setHex:function(a){a=Math.floor(a);this.r=(a>>16&255)/255;this.g=(a>>8&255)/255;this.b=(a&255)/255;return this},setRGB:function(a,b,c){this.r=a;this.g=b;this.b=c;return this},setHSL:function(){function a(a,c,d){0>d&&(d+=1);1<d&&(d-=1);return d<1/6?a+6*(c-a)*
d:.5>d?c:d<2/3?a+6*(c-a)*(2/3-d):a}return function(b,c,d){b=THREE.Math.euclideanModulo(b,1);c=THREE.Math.clamp(c,0,1);d=THREE.Math.clamp(d,0,1);0===c?this.r=this.g=this.b=d:(c=.5>=d?d*(1+c):d+c-d*c,d=2*d-c,this.r=a(d,c,b+1/3),this.g=a(d,c,b),this.b=a(d,c,b-1/3));return this}}(),setStyle:function(a){function b(b){void 0!==b&&1>parseFloat(b)&&console.warn("THREE.Color: Alpha component of "+a+" will be ignored.")}var c;if(c=/^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(a)){var d=c[2];switch(c[1]){case "rgb":case "rgba":if(c=
/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d))return this.r=Math.min(255,parseInt(c[1],10))/255,this.g=Math.min(255,parseInt(c[2],10))/255,this.b=Math.min(255,parseInt(c[3],10))/255,b(c[5]),this;if(c=/^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d))return this.r=Math.min(100,parseInt(c[1],10))/100,this.g=Math.min(100,parseInt(c[2],10))/100,this.b=Math.min(100,parseInt(c[3],10))/100,b(c[5]),this;break;case "hsl":case "hsla":if(c=/^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d)){var d=
parseFloat(c[1])/360,e=parseInt(c[2],10)/100,f=parseInt(c[3],10)/100;b(c[5]);return this.setHSL(d,e,f)}}}else if(c=/^\#([A-Fa-f0-9]+)$/.exec(a)){c=c[1];d=c.length;if(3===d)return this.r=parseInt(c.charAt(0)+c.charAt(0),16)/255,this.g=parseInt(c.charAt(1)+c.charAt(1),16)/255,this.b=parseInt(c.charAt(2)+c.charAt(2),16)/255,this;if(6===d)return this.r=parseInt(c.charAt(0)+c.charAt(1),16)/255,this.g=parseInt(c.charAt(2)+c.charAt(3),16)/255,this.b=parseInt(c.charAt(4)+c.charAt(5),16)/255,this}a&&0<a.length&&
(c=THREE.ColorKeywords[a],void 0!==c?this.setHex(c):console.warn("THREE.Color: Unknown color "+a));return this},clone:function(){return new this.constructor(this.r,this.g,this.b)},copy:function(a){this.r=a.r;this.g=a.g;this.b=a.b;return this},copyGammaToLinear:function(a,b){void 0===b&&(b=2);this.r=Math.pow(a.r,b);this.g=Math.pow(a.g,b);this.b=Math.pow(a.b,b);return this},copyLinearToGamma:function(a,b){void 0===b&&(b=2);var c=0<b?1/b:1;this.r=Math.pow(a.r,c);this.g=Math.pow(a.g,c);this.b=Math.pow(a.b,
c);return this},convertGammaToLinear:function(){var a=this.r,b=this.g,c=this.b;this.r=a*a;this.g=b*b;this.b=c*c;return this},convertLinearToGamma:function(){this.r=Math.sqrt(this.r);this.g=Math.sqrt(this.g);this.b=Math.sqrt(this.b);return this},getHex:function(){return 255*this.r<<16^255*this.g<<8^255*this.b<<0},getHexString:function(){return("000000"+this.getHex().toString(16)).slice(-6)},getHSL:function(a){a=a||{h:0,s:0,l:0};var b=this.r,c=this.g,d=this.b,e=Math.max(b,c,d),f=Math.min(b,c,d),g,h=
(f+e)/2;if(f===e)f=g=0;else{var k=e-f,f=.5>=h?k/(e+f):k/(2-e-f);switch(e){case b:g=(c-d)/k+(c<d?6:0);break;case c:g=(d-b)/k+2;break;case d:g=(b-c)/k+4}g/=6}a.h=g;a.s=f;a.l=h;return a},getStyle:function(){return"rgb("+(255*this.r|0)+","+(255*this.g|0)+","+(255*this.b|0)+")"},offsetHSL:function(a,b,c){var d=this.getHSL();d.h+=a;d.s+=b;d.l+=c;this.setHSL(d.h,d.s,d.l);return this},add:function(a){this.r+=a.r;this.g+=a.g;this.b+=a.b;return this},addColors:function(a,b){this.r=a.r+b.r;this.g=a.g+b.g;this.b=
a.b+b.b;return this},addScalar:function(a){this.r+=a;this.g+=a;this.b+=a;return this},multiply:function(a){this.r*=a.r;this.g*=a.g;this.b*=a.b;return this},multiplyScalar:function(a){this.r*=a;this.g*=a;this.b*=a;return this},lerp:function(a,b){this.r+=(a.r-this.r)*b;this.g+=(a.g-this.g)*b;this.b+=(a.b-this.b)*b;return this},equals:function(a){return a.r===this.r&&a.g===this.g&&a.b===this.b},fromArray:function(a,b){void 0===b&&(b=0);this.r=a[b];this.g=a[b+1];this.b=a[b+2];return this},toArray:function(a,
b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.r;a[b+1]=this.g;a[b+2]=this.b;return a}};
THREE.ColorKeywords={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,
darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,
grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,
lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,
palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,
tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};THREE.Quaternion=function(a,b,c,d){this._x=a||0;this._y=b||0;this._z=c||0;this._w=void 0!==d?d:1};
THREE.Quaternion.prototype={constructor:THREE.Quaternion,get x(){return this._x},set x(a){this._x=a;this.onChangeCallback()},get y(){return this._y},set y(a){this._y=a;this.onChangeCallback()},get z(){return this._z},set z(a){this._z=a;this.onChangeCallback()},get w(){return this._w},set w(a){this._w=a;this.onChangeCallback()},set:function(a,b,c,d){this._x=a;this._y=b;this._z=c;this._w=d;this.onChangeCallback();return this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._w)},
copy:function(a){this._x=a.x;this._y=a.y;this._z=a.z;this._w=a.w;this.onChangeCallback();return this},setFromEuler:function(a,b){if(!1===a instanceof THREE.Euler)throw Error("THREE.Quaternion: .setFromEuler() now expects a Euler rotation rather than a Vector3 and order.");var c=Math.cos(a._x/2),d=Math.cos(a._y/2),e=Math.cos(a._z/2),f=Math.sin(a._x/2),g=Math.sin(a._y/2),h=Math.sin(a._z/2),k=a.order;"XYZ"===k?(this._x=f*d*e+c*g*h,this._y=c*g*e-f*d*h,this._z=c*d*h+f*g*e,this._w=c*d*e-f*g*h):"YXZ"===
k?(this._x=f*d*e+c*g*h,this._y=c*g*e-f*d*h,this._z=c*d*h-f*g*e,this._w=c*d*e+f*g*h):"ZXY"===k?(this._x=f*d*e-c*g*h,this._y=c*g*e+f*d*h,this._z=c*d*h+f*g*e,this._w=c*d*e-f*g*h):"ZYX"===k?(this._x=f*d*e-c*g*h,this._y=c*g*e+f*d*h,this._z=c*d*h-f*g*e,this._w=c*d*e+f*g*h):"YZX"===k?(this._x=f*d*e+c*g*h,this._y=c*g*e+f*d*h,this._z=c*d*h-f*g*e,this._w=c*d*e-f*g*h):"XZY"===k&&(this._x=f*d*e-c*g*h,this._y=c*g*e-f*d*h,this._z=c*d*h+f*g*e,this._w=c*d*e+f*g*h);if(!1!==b)this.onChangeCallback();return this},setFromAxisAngle:function(a,
b){var c=b/2,d=Math.sin(c);this._x=a.x*d;this._y=a.y*d;this._z=a.z*d;this._w=Math.cos(c);this.onChangeCallback();return this},setFromRotationMatrix:function(a){var b=a.elements,c=b[0];a=b[4];var d=b[8],e=b[1],f=b[5],g=b[9],h=b[2],k=b[6],b=b[10],l=c+f+b;0<l?(c=.5/Math.sqrt(l+1),this._w=.25/c,this._x=(k-g)*c,this._y=(d-h)*c,this._z=(e-a)*c):c>f&&c>b?(c=2*Math.sqrt(1+c-f-b),this._w=(k-g)/c,this._x=.25*c,this._y=(a+e)/c,this._z=(d+h)/c):f>b?(c=2*Math.sqrt(1+f-c-b),this._w=(d-h)/c,this._x=(a+e)/c,this._y=
.25*c,this._z=(g+k)/c):(c=2*Math.sqrt(1+b-c-f),this._w=(e-a)/c,this._x=(d+h)/c,this._y=(g+k)/c,this._z=.25*c);this.onChangeCallback();return this},setFromUnitVectors:function(){var a,b;return function(c,d){void 0===a&&(a=new THREE.Vector3);b=c.dot(d)+1;1E-6>b?(b=0,Math.abs(c.x)>Math.abs(c.z)?a.set(-c.y,c.x,0):a.set(0,-c.z,c.y)):a.crossVectors(c,d);this._x=a.x;this._y=a.y;this._z=a.z;this._w=b;this.normalize();return this}}(),inverse:function(){this.conjugate().normalize();return this},conjugate:function(){this._x*=
-1;this._y*=-1;this._z*=-1;this.onChangeCallback();return this},dot:function(a){return this._x*a._x+this._y*a._y+this._z*a._z+this._w*a._w},lengthSq:function(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w},length:function(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)},normalize:function(){var a=this.length();0===a?(this._z=this._y=this._x=0,this._w=1):(a=1/a,this._x*=a,this._y*=a,this._z*=a,this._w*=a);this.onChangeCallback();return this},
multiply:function(a,b){return void 0!==b?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(a,b)):this.multiplyQuaternions(this,a)},multiplyQuaternions:function(a,b){var c=a._x,d=a._y,e=a._z,f=a._w,g=b._x,h=b._y,k=b._z,l=b._w;this._x=c*l+f*g+d*k-e*h;this._y=d*l+f*h+e*g-c*k;this._z=e*l+f*k+c*h-d*g;this._w=f*l-c*g-d*h-e*k;this.onChangeCallback();return this},slerp:function(a,b){if(0===b)return this;if(1===
b)return this.copy(a);var c=this._x,d=this._y,e=this._z,f=this._w,g=f*a._w+c*a._x+d*a._y+e*a._z;0>g?(this._w=-a._w,this._x=-a._x,this._y=-a._y,this._z=-a._z,g=-g):this.copy(a);if(1<=g)return this._w=f,this._x=c,this._y=d,this._z=e,this;var h=Math.sqrt(1-g*g);if(.001>Math.abs(h))return this._w=.5*(f+this._w),this._x=.5*(c+this._x),this._y=.5*(d+this._y),this._z=.5*(e+this._z),this;var k=Math.atan2(h,g),g=Math.sin((1-b)*k)/h,h=Math.sin(b*k)/h;this._w=f*g+this._w*h;this._x=c*g+this._x*h;this._y=d*g+
this._y*h;this._z=e*g+this._z*h;this.onChangeCallback();return this},equals:function(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._w===this._w},fromArray:function(a,b){void 0===b&&(b=0);this._x=a[b];this._y=a[b+1];this._z=a[b+2];this._w=a[b+3];this.onChangeCallback();return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this._x;a[b+1]=this._y;a[b+2]=this._z;a[b+3]=this._w;return a},onChange:function(a){this.onChangeCallback=a;return this},onChangeCallback:function(){}};
Object.assign(THREE.Quaternion,{slerp:function(a,b,c,d){return c.copy(a).slerp(b,d)},slerpFlat:function(a,b,c,d,e,f,g){var h=c[d+0],k=c[d+1],l=c[d+2];c=c[d+3];d=e[f+0];var m=e[f+1],p=e[f+2];e=e[f+3];if(c!==e||h!==d||k!==m||l!==p){f=1-g;var n=h*d+k*m+l*p+c*e,q=0<=n?1:-1,s=1-n*n;s>Number.EPSILON&&(s=Math.sqrt(s),n=Math.atan2(s,n*q),f=Math.sin(f*n)/s,g=Math.sin(g*n)/s);q*=g;h=h*f+d*q;k=k*f+m*q;l=l*f+p*q;c=c*f+e*q;f===1-g&&(g=1/Math.sqrt(h*h+k*k+l*l+c*c),h*=g,k*=g,l*=g,c*=g)}a[b]=h;a[b+1]=k;a[b+2]=l;
a[b+3]=c}});THREE.Vector2=function(a,b){this.x=a||0;this.y=b||0};
THREE.Vector2.prototype={constructor:THREE.Vector2,get width(){return this.x},set width(a){this.x=a},get height(){return this.y},set height(a){this.y=a},set:function(a,b){this.x=a;this.y=b;return this},setScalar:function(a){this.y=this.x=a;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;default:throw Error("index is out of range: "+a);}},getComponent:function(a){switch(a){case 0:return this.x;
case 1:return this.y;default:throw Error("index is out of range: "+a);}},clone:function(){return new this.constructor(this.x,this.y)},copy:function(a){this.x=a.x;this.y=a.y;return this},add:function(a,b){if(void 0!==b)return console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;return this},addScalar:function(a){this.x+=a;this.y+=a;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;return this},
addScaledVector:function(a,b){this.x+=a.x*b;this.y+=a.y*b;return this},sub:function(a,b){if(void 0!==b)return console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=a.y;return this},subScalar:function(a){this.x-=a;this.y-=a;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;return this},multiply:function(a){this.x*=a.x;this.y*=a.y;return this},multiplyScalar:function(a){isFinite(a)?(this.x*=a,
this.y*=a):this.y=this.x=0;return this},divide:function(a){this.x/=a.x;this.y/=a.y;return this},divideScalar:function(a){return this.multiplyScalar(1/a)},min:function(a){this.x=Math.min(this.x,a.x);this.y=Math.min(this.y,a.y);return this},max:function(a){this.x=Math.max(this.x,a.x);this.y=Math.max(this.y,a.y);return this},clamp:function(a,b){this.x=Math.max(a.x,Math.min(b.x,this.x));this.y=Math.max(a.y,Math.min(b.y,this.y));return this},clampScalar:function(){var a,b;return function(c,d){void 0===
a&&(a=new THREE.Vector2,b=new THREE.Vector2);a.set(c,c);b.set(d,d);return this.clamp(a,b)}}(),clampLength:function(a,b){var c=this.length();this.multiplyScalar(Math.max(a,Math.min(b,c))/c);return this},floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this},round:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this},roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):
Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);return this},negate:function(){this.x=-this.x;this.y=-this.y;return this},dot:function(a){return this.x*a.x+this.y*a.y},lengthSq:function(){return this.x*this.x+this.y*this.y},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)},normalize:function(){return this.divideScalar(this.length())},angle:function(){var a=Math.atan2(this.y,this.x);0>a&&(a+=
2*Math.PI);return a},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){var b=this.x-a.x;a=this.y-a.y;return b*b+a*a},setLength:function(a){return this.multiplyScalar(a/this.length())},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;return this},lerpVectors:function(a,b,c){this.subVectors(b,a).multiplyScalar(c).add(a);return this},equals:function(a){return a.x===this.x&&a.y===this.y},fromArray:function(a,b){void 0===b&&(b=0);this.x=a[b];
this.y=a[b+1];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;return a},fromAttribute:function(a,b,c){void 0===c&&(c=0);b=b*a.itemSize+c;this.x=a.array[b];this.y=a.array[b+1];return this},rotateAround:function(a,b){var c=Math.cos(b),d=Math.sin(b),e=this.x-a.x,f=this.y-a.y;this.x=e*c-f*d+a.x;this.y=e*d+f*c+a.y;return this}};THREE.Vector3=function(a,b,c){this.x=a||0;this.y=b||0;this.z=c||0};
THREE.Vector3.prototype={constructor:THREE.Vector3,set:function(a,b,c){this.x=a;this.y=b;this.z=c;return this},setScalar:function(a){this.z=this.y=this.x=a;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setZ:function(a){this.z=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;default:throw Error("index is out of range: "+a);}},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;
case 2:return this.z;default:throw Error("index is out of range: "+a);}},clone:function(){return new this.constructor(this.x,this.y,this.z)},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;return this},add:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;this.z+=a.z;return this},addScalar:function(a){this.x+=a;this.y+=a;this.z+=a;return this},addVectors:function(a,
b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;return this},addScaledVector:function(a,b){this.x+=a.x*b;this.y+=a.y*b;this.z+=a.z*b;return this},sub:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=a.y;this.z-=a.z;return this},subScalar:function(a){this.x-=a;this.y-=a;this.z-=a;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;return this},
multiply:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(a,b);this.x*=a.x;this.y*=a.y;this.z*=a.z;return this},multiplyScalar:function(a){isFinite(a)?(this.x*=a,this.y*=a,this.z*=a):this.z=this.y=this.x=0;return this},multiplyVectors:function(a,b){this.x=a.x*b.x;this.y=a.y*b.y;this.z=a.z*b.z;return this},applyEuler:function(){var a;return function(b){!1===b instanceof THREE.Euler&&
console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order.");void 0===a&&(a=new THREE.Quaternion);this.applyQuaternion(a.setFromEuler(b));return this}}(),applyAxisAngle:function(){var a;return function(b,c){void 0===a&&(a=new THREE.Quaternion);this.applyQuaternion(a.setFromAxisAngle(b,c));return this}}(),applyMatrix3:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[3]*c+a[6]*d;this.y=a[1]*b+a[4]*c+a[7]*d;this.z=a[2]*b+a[5]*c+a[8]*
d;return this},applyMatrix4:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d+a[12];this.y=a[1]*b+a[5]*c+a[9]*d+a[13];this.z=a[2]*b+a[6]*c+a[10]*d+a[14];return this},applyProjection:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;var e=1/(a[3]*b+a[7]*c+a[11]*d+a[15]);this.x=(a[0]*b+a[4]*c+a[8]*d+a[12])*e;this.y=(a[1]*b+a[5]*c+a[9]*d+a[13])*e;this.z=(a[2]*b+a[6]*c+a[10]*d+a[14])*e;return this},applyQuaternion:function(a){var b=this.x,c=this.y,d=this.z,e=a.x,
f=a.y,g=a.z;a=a.w;var h=a*b+f*d-g*c,k=a*c+g*b-e*d,l=a*d+e*c-f*b,b=-e*b-f*c-g*d;this.x=h*a+b*-e+k*-g-l*-f;this.y=k*a+b*-f+l*-e-h*-g;this.z=l*a+b*-g+h*-f-k*-e;return this},project:function(){var a;return function(b){void 0===a&&(a=new THREE.Matrix4);a.multiplyMatrices(b.projectionMatrix,a.getInverse(b.matrixWorld));return this.applyProjection(a)}}(),unproject:function(){var a;return function(b){void 0===a&&(a=new THREE.Matrix4);a.multiplyMatrices(b.matrixWorld,a.getInverse(b.projectionMatrix));return this.applyProjection(a)}}(),
transformDirection:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d;this.y=a[1]*b+a[5]*c+a[9]*d;this.z=a[2]*b+a[6]*c+a[10]*d;this.normalize();return this},divide:function(a){this.x/=a.x;this.y/=a.y;this.z/=a.z;return this},divideScalar:function(a){return this.multiplyScalar(1/a)},min:function(a){this.x=Math.min(this.x,a.x);this.y=Math.min(this.y,a.y);this.z=Math.min(this.z,a.z);return this},max:function(a){this.x=Math.max(this.x,a.x);this.y=Math.max(this.y,a.y);
this.z=Math.max(this.z,a.z);return this},clamp:function(a,b){this.x=Math.max(a.x,Math.min(b.x,this.x));this.y=Math.max(a.y,Math.min(b.y,this.y));this.z=Math.max(a.z,Math.min(b.z,this.z));return this},clampScalar:function(){var a,b;return function(c,d){void 0===a&&(a=new THREE.Vector3,b=new THREE.Vector3);a.set(c,c,c);b.set(d,d,d);return this.clamp(a,b)}}(),clampLength:function(a,b){var c=this.length();this.multiplyScalar(Math.max(a,Math.min(b,c))/c);return this},floor:function(){this.x=Math.floor(this.x);
this.y=Math.floor(this.y);this.z=Math.floor(this.z);return this},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);this.z=Math.ceil(this.z);return this},round:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);this.z=Math.round(this.z);return this},roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);this.z=0>this.z?Math.ceil(this.z):Math.floor(this.z);return this},negate:function(){this.x=-this.x;
this.y=-this.y;this.z=-this.z;return this},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)},normalize:function(){return this.divideScalar(this.length())},setLength:function(a){return this.multiplyScalar(a/this.length())},lerp:function(a,b){this.x+=(a.x-this.x)*
b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;return this},lerpVectors:function(a,b,c){this.subVectors(b,a).multiplyScalar(c).add(a);return this},cross:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(a,b);var c=this.x,d=this.y,e=this.z;this.x=d*a.z-e*a.y;this.y=e*a.x-c*a.z;this.z=c*a.y-d*a.x;return this},crossVectors:function(a,b){var c=a.x,d=a.y,e=a.z,f=b.x,g=b.y,h=b.z;this.x=d*h-e*g;
this.y=e*f-c*h;this.z=c*g-d*f;return this},projectOnVector:function(){var a,b;return function(c){void 0===a&&(a=new THREE.Vector3);a.copy(c).normalize();b=this.dot(a);return this.copy(a).multiplyScalar(b)}}(),projectOnPlane:function(){var a;return function(b){void 0===a&&(a=new THREE.Vector3);a.copy(this).projectOnVector(b);return this.sub(a)}}(),reflect:function(){var a;return function(b){void 0===a&&(a=new THREE.Vector3);return this.sub(a.copy(b).multiplyScalar(2*this.dot(b)))}}(),angleTo:function(a){a=
this.dot(a)/Math.sqrt(this.lengthSq()*a.lengthSq());return Math.acos(THREE.Math.clamp(a,-1,1))},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){var b=this.x-a.x,c=this.y-a.y;a=this.z-a.z;return b*b+c*c+a*a},setFromMatrixPosition:function(a){this.x=a.elements[12];this.y=a.elements[13];this.z=a.elements[14];return this},setFromMatrixScale:function(a){var b=this.set(a.elements[0],a.elements[1],a.elements[2]).length(),c=this.set(a.elements[4],a.elements[5],
a.elements[6]).length();a=this.set(a.elements[8],a.elements[9],a.elements[10]).length();this.x=b;this.y=c;this.z=a;return this},setFromMatrixColumn:function(a,b){var c=4*a,d=b.elements;this.x=d[c];this.y=d[c+1];this.z=d[c+2];return this},equals:function(a){return a.x===this.x&&a.y===this.y&&a.z===this.z},fromArray:function(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+1];this.z=a[b+2];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;a[b+2]=this.z;return a},
fromAttribute:function(a,b,c){void 0===c&&(c=0);b=b*a.itemSize+c;this.x=a.array[b];this.y=a.array[b+1];this.z=a.array[b+2];return this}};THREE.Vector4=function(a,b,c,d){this.x=a||0;this.y=b||0;this.z=c||0;this.w=void 0!==d?d:1};
THREE.Vector4.prototype={constructor:THREE.Vector4,set:function(a,b,c,d){this.x=a;this.y=b;this.z=c;this.w=d;return this},setScalar:function(a){this.w=this.z=this.y=this.x=a;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setZ:function(a){this.z=a;return this},setW:function(a){this.w=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;case 3:this.w=b;break;default:throw Error("index is out of range: "+
a);}},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+a);}},clone:function(){return new this.constructor(this.x,this.y,this.z,this.w)},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;this.w=void 0!==a.w?a.w:1;return this},add:function(a,b){if(void 0!==b)return console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);
this.x+=a.x;this.y+=a.y;this.z+=a.z;this.w+=a.w;return this},addScalar:function(a){this.x+=a;this.y+=a;this.z+=a;this.w+=a;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;this.w=a.w+b.w;return this},addScaledVector:function(a,b){this.x+=a.x*b;this.y+=a.y*b;this.z+=a.z*b;this.w+=a.w*b;return this},sub:function(a,b){if(void 0!==b)return console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=
a.x;this.y-=a.y;this.z-=a.z;this.w-=a.w;return this},subScalar:function(a){this.x-=a;this.y-=a;this.z-=a;this.w-=a;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;this.w=a.w-b.w;return this},multiplyScalar:function(a){isFinite(a)?(this.x*=a,this.y*=a,this.z*=a,this.w*=a):this.w=this.z=this.y=this.x=0;return this},applyMatrix4:function(a){var b=this.x,c=this.y,d=this.z,e=this.w;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d+a[12]*e;this.y=a[1]*b+a[5]*c+a[9]*d+a[13]*e;this.z=
a[2]*b+a[6]*c+a[10]*d+a[14]*e;this.w=a[3]*b+a[7]*c+a[11]*d+a[15]*e;return this},divideScalar:function(a){return this.multiplyScalar(1/a)},setAxisAngleFromQuaternion:function(a){this.w=2*Math.acos(a.w);var b=Math.sqrt(1-a.w*a.w);1E-4>b?(this.x=1,this.z=this.y=0):(this.x=a.x/b,this.y=a.y/b,this.z=a.z/b);return this},setAxisAngleFromRotationMatrix:function(a){var b,c,d;a=a.elements;var e=a[0];d=a[4];var f=a[8],g=a[1],h=a[5],k=a[9];c=a[2];b=a[6];var l=a[10];if(.01>Math.abs(d-g)&&.01>Math.abs(f-c)&&.01>
Math.abs(k-b)){if(.1>Math.abs(d+g)&&.1>Math.abs(f+c)&&.1>Math.abs(k+b)&&.1>Math.abs(e+h+l-3))return this.set(1,0,0,0),this;a=Math.PI;e=(e+1)/2;h=(h+1)/2;l=(l+1)/2;d=(d+g)/4;f=(f+c)/4;k=(k+b)/4;e>h&&e>l?.01>e?(b=0,d=c=.707106781):(b=Math.sqrt(e),c=d/b,d=f/b):h>l?.01>h?(b=.707106781,c=0,d=.707106781):(c=Math.sqrt(h),b=d/c,d=k/c):.01>l?(c=b=.707106781,d=0):(d=Math.sqrt(l),b=f/d,c=k/d);this.set(b,c,d,a);return this}a=Math.sqrt((b-k)*(b-k)+(f-c)*(f-c)+(g-d)*(g-d));.001>Math.abs(a)&&(a=1);this.x=(b-k)/
a;this.y=(f-c)/a;this.z=(g-d)/a;this.w=Math.acos((e+h+l-1)/2);return this},min:function(a){this.x=Math.min(this.x,a.x);this.y=Math.min(this.y,a.y);this.z=Math.min(this.z,a.z);this.w=Math.min(this.w,a.w);return this},max:function(a){this.x=Math.max(this.x,a.x);this.y=Math.max(this.y,a.y);this.z=Math.max(this.z,a.z);this.w=Math.max(this.w,a.w);return this},clamp:function(a,b){this.x=Math.max(a.x,Math.min(b.x,this.x));this.y=Math.max(a.y,Math.min(b.y,this.y));this.z=Math.max(a.z,Math.min(b.z,this.z));
this.w=Math.max(a.w,Math.min(b.w,this.w));return this},clampScalar:function(){var a,b;return function(c,d){void 0===a&&(a=new THREE.Vector4,b=new THREE.Vector4);a.set(c,c,c,c);b.set(d,d,d,d);return this.clamp(a,b)}}(),floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);this.z=Math.floor(this.z);this.w=Math.floor(this.w);return this},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);this.z=Math.ceil(this.z);this.w=Math.ceil(this.w);return this},round:function(){this.x=
Math.round(this.x);this.y=Math.round(this.y);this.z=Math.round(this.z);this.w=Math.round(this.w);return this},roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);this.z=0>this.z?Math.ceil(this.z):Math.floor(this.z);this.w=0>this.w?Math.ceil(this.w):Math.floor(this.w);return this},negate:function(){this.x=-this.x;this.y=-this.y;this.z=-this.z;this.w=-this.w;return this},dot:function(a){return this.x*a.x+this.y*a.y+this.z*
a.z+this.w*a.w},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)},normalize:function(){return this.divideScalar(this.length())},setLength:function(a){return this.multiplyScalar(a/this.length())},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-
this.z)*b;this.w+=(a.w-this.w)*b;return this},lerpVectors:function(a,b,c){this.subVectors(b,a).multiplyScalar(c).add(a);return this},equals:function(a){return a.x===this.x&&a.y===this.y&&a.z===this.z&&a.w===this.w},fromArray:function(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+1];this.z=a[b+2];this.w=a[b+3];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;a[b+2]=this.z;a[b+3]=this.w;return a},fromAttribute:function(a,b,c){void 0===c&&(c=0);b=b*a.itemSize+
c;this.x=a.array[b];this.y=a.array[b+1];this.z=a.array[b+2];this.w=a.array[b+3];return this}};THREE.Euler=function(a,b,c,d){this._x=a||0;this._y=b||0;this._z=c||0;this._order=d||THREE.Euler.DefaultOrder};THREE.Euler.RotationOrders="XYZ YZX ZXY XZY YXZ ZYX".split(" ");THREE.Euler.DefaultOrder="XYZ";
THREE.Euler.prototype={constructor:THREE.Euler,get x(){return this._x},set x(a){this._x=a;this.onChangeCallback()},get y(){return this._y},set y(a){this._y=a;this.onChangeCallback()},get z(){return this._z},set z(a){this._z=a;this.onChangeCallback()},get order(){return this._order},set order(a){this._order=a;this.onChangeCallback()},set:function(a,b,c,d){this._x=a;this._y=b;this._z=c;this._order=d||this._order;this.onChangeCallback();return this},clone:function(){return new this.constructor(this._x,
this._y,this._z,this._order)},copy:function(a){this._x=a._x;this._y=a._y;this._z=a._z;this._order=a._order;this.onChangeCallback();return this},setFromRotationMatrix:function(a,b,c){var d=THREE.Math.clamp,e=a.elements;a=e[0];var f=e[4],g=e[8],h=e[1],k=e[5],l=e[9],m=e[2],p=e[6],e=e[10];b=b||this._order;"XYZ"===b?(this._y=Math.asin(d(g,-1,1)),.99999>Math.abs(g)?(this._x=Math.atan2(-l,e),this._z=Math.atan2(-f,a)):(this._x=Math.atan2(p,k),this._z=0)):"YXZ"===b?(this._x=Math.asin(-d(l,-1,1)),.99999>Math.abs(l)?
(this._y=Math.atan2(g,e),this._z=Math.atan2(h,k)):(this._y=Math.atan2(-m,a),this._z=0)):"ZXY"===b?(this._x=Math.asin(d(p,-1,1)),.99999>Math.abs(p)?(this._y=Math.atan2(-m,e),this._z=Math.atan2(-f,k)):(this._y=0,this._z=Math.atan2(h,a))):"ZYX"===b?(this._y=Math.asin(-d(m,-1,1)),.99999>Math.abs(m)?(this._x=Math.atan2(p,e),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-f,k))):"YZX"===b?(this._z=Math.asin(d(h,-1,1)),.99999>Math.abs(h)?(this._x=Math.atan2(-l,k),this._y=Math.atan2(-m,a)):(this._x=
0,this._y=Math.atan2(g,e))):"XZY"===b?(this._z=Math.asin(-d(f,-1,1)),.99999>Math.abs(f)?(this._x=Math.atan2(p,k),this._y=Math.atan2(g,a)):(this._x=Math.atan2(-l,e),this._y=0)):console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: "+b);this._order=b;if(!1!==c)this.onChangeCallback();return this},setFromQuaternion:function(){var a;return function(b,c,d){void 0===a&&(a=new THREE.Matrix4);a.makeRotationFromQuaternion(b);this.setFromRotationMatrix(a,c,d);return this}}(),setFromVector3:function(a,
b){return this.set(a.x,a.y,a.z,b||this._order)},reorder:function(){var a=new THREE.Quaternion;return function(b){a.setFromEuler(this);this.setFromQuaternion(a,b)}}(),equals:function(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._order===this._order},fromArray:function(a){this._x=a[0];this._y=a[1];this._z=a[2];void 0!==a[3]&&(this._order=a[3]);this.onChangeCallback();return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this._x;a[b+1]=this._y;a[b+2]=this._z;a[b+
3]=this._order;return a},toVector3:function(a){return a?a.set(this._x,this._y,this._z):new THREE.Vector3(this._x,this._y,this._z)},onChange:function(a){this.onChangeCallback=a;return this},onChangeCallback:function(){}};THREE.Line3=function(a,b){this.start=void 0!==a?a:new THREE.Vector3;this.end=void 0!==b?b:new THREE.Vector3};
THREE.Line3.prototype={constructor:THREE.Line3,set:function(a,b){this.start.copy(a);this.end.copy(b);return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.start.copy(a.start);this.end.copy(a.end);return this},center:function(a){return(a||new THREE.Vector3).addVectors(this.start,this.end).multiplyScalar(.5)},delta:function(a){return(a||new THREE.Vector3).subVectors(this.end,this.start)},distanceSq:function(){return this.start.distanceToSquared(this.end)},distance:function(){return this.start.distanceTo(this.end)},
at:function(a,b){var c=b||new THREE.Vector3;return this.delta(c).multiplyScalar(a).add(this.start)},closestPointToPointParameter:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c,d){a.subVectors(c,this.start);b.subVectors(this.end,this.start);var e=b.dot(b),e=b.dot(a)/e;d&&(e=THREE.Math.clamp(e,0,1));return e}}(),closestPointToPoint:function(a,b,c){a=this.closestPointToPointParameter(a,b);c=c||new THREE.Vector3;return this.delta(c).multiplyScalar(a).add(this.start)},applyMatrix4:function(a){this.start.applyMatrix4(a);
this.end.applyMatrix4(a);return this},equals:function(a){return a.start.equals(this.start)&&a.end.equals(this.end)}};THREE.Box2=function(a,b){this.min=void 0!==a?a:new THREE.Vector2(Infinity,Infinity);this.max=void 0!==b?b:new THREE.Vector2(-Infinity,-Infinity)};
THREE.Box2.prototype={constructor:THREE.Box2,set:function(a,b){this.min.copy(a);this.max.copy(b);return this},setFromPoints:function(a){this.makeEmpty();for(var b=0,c=a.length;b<c;b++)this.expandByPoint(a[b]);return this},setFromCenterAndSize:function(){var a=new THREE.Vector2;return function(b,c){var d=a.copy(c).multiplyScalar(.5);this.min.copy(b).sub(d);this.max.copy(b).add(d);return this}}(),clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.min.copy(a.min);this.max.copy(a.max);
return this},makeEmpty:function(){this.min.x=this.min.y=Infinity;this.max.x=this.max.y=-Infinity;return this},isEmpty:function(){return this.max.x<this.min.x||this.max.y<this.min.y},center:function(a){return(a||new THREE.Vector2).addVectors(this.min,this.max).multiplyScalar(.5)},size:function(a){return(a||new THREE.Vector2).subVectors(this.max,this.min)},expandByPoint:function(a){this.min.min(a);this.max.max(a);return this},expandByVector:function(a){this.min.sub(a);this.max.add(a);return this},expandByScalar:function(a){this.min.addScalar(-a);
this.max.addScalar(a);return this},containsPoint:function(a){return a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y?!1:!0},containsBox:function(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y?!0:!1},getParameter:function(a,b){return(b||new THREE.Vector2).set((a.x-this.min.x)/(this.max.x-this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y))},intersectsBox:function(a){return a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>
this.max.y?!1:!0},clampPoint:function(a,b){return(b||new THREE.Vector2).copy(a).clamp(this.min,this.max)},distanceToPoint:function(){var a=new THREE.Vector2;return function(b){return a.copy(b).clamp(this.min,this.max).sub(b).length()}}(),intersect:function(a){this.min.max(a.min);this.max.min(a.max);return this},union:function(a){this.min.min(a.min);this.max.max(a.max);return this},translate:function(a){this.min.add(a);this.max.add(a);return this},equals:function(a){return a.min.equals(this.min)&&
a.max.equals(this.max)}};THREE.Box3=function(a,b){this.min=void 0!==a?a:new THREE.Vector3(Infinity,Infinity,Infinity);this.max=void 0!==b?b:new THREE.Vector3(-Infinity,-Infinity,-Infinity)};
THREE.Box3.prototype={constructor:THREE.Box3,set:function(a,b){this.min.copy(a);this.max.copy(b);return this},setFromArray:function(a){this.makeEmpty();for(var b=Infinity,c=Infinity,d=Infinity,e=-Infinity,f=-Infinity,g=-Infinity,h=0,k=a.length;h<k;h+=3)var l=a[h],m=a[h+1],p=a[h+2],b=Math.min(b,l),c=Math.min(c,m),d=Math.min(d,p),e=Math.max(e,l),f=Math.max(f,m),g=Math.max(g,p);this.min.set(b,c,d);this.max.set(e,f,g)},setFromPoints:function(a){this.makeEmpty();for(var b=0,c=a.length;b<c;b++)this.expandByPoint(a[b]);
return this},setFromCenterAndSize:function(){var a=new THREE.Vector3;return function(b,c){var d=a.copy(c).multiplyScalar(.5);this.min.copy(b).sub(d);this.max.copy(b).add(d);return this}}(),setFromObject:function(){var a;return function(b){void 0===a&&(a=new THREE.Box3);var c=this;this.makeEmpty();b.updateMatrixWorld(!0);b.traverse(function(b){var e=b.geometry;void 0!==e&&(null===e.boundingBox&&e.computeBoundingBox(),a.copy(e.boundingBox),a.applyMatrix4(b.matrixWorld),c.union(a))});return this}}(),
clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.min.copy(a.min);this.max.copy(a.max);return this},makeEmpty:function(){this.min.x=this.min.y=this.min.z=Infinity;this.max.x=this.max.y=this.max.z=-Infinity;return this},isEmpty:function(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z},center:function(a){return(a||new THREE.Vector3).addVectors(this.min,this.max).multiplyScalar(.5)},size:function(a){return(a||new THREE.Vector3).subVectors(this.max,
this.min)},expandByPoint:function(a){this.min.min(a);this.max.max(a);return this},expandByVector:function(a){this.min.sub(a);this.max.add(a);return this},expandByScalar:function(a){this.min.addScalar(-a);this.max.addScalar(a);return this},containsPoint:function(a){return a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y||a.z<this.min.z||a.z>this.max.z?!1:!0},containsBox:function(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y&&this.min.z<=
a.min.z&&a.max.z<=this.max.z?!0:!1},getParameter:function(a,b){return(b||new THREE.Vector3).set((a.x-this.min.x)/(this.max.x-this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y),(a.z-this.min.z)/(this.max.z-this.min.z))},intersectsBox:function(a){return a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>this.max.y||a.max.z<this.min.z||a.min.z>this.max.z?!1:!0},intersectsSphere:function(){var a;return function(b){void 0===a&&(a=new THREE.Vector3);this.clampPoint(b.center,a);return a.distanceToSquared(b.center)<=
b.radius*b.radius}}(),intersectsPlane:function(a){var b,c;0<a.normal.x?(b=a.normal.x*this.min.x,c=a.normal.x*this.max.x):(b=a.normal.x*this.max.x,c=a.normal.x*this.min.x);0<a.normal.y?(b+=a.normal.y*this.min.y,c+=a.normal.y*this.max.y):(b+=a.normal.y*this.max.y,c+=a.normal.y*this.min.y);0<a.normal.z?(b+=a.normal.z*this.min.z,c+=a.normal.z*this.max.z):(b+=a.normal.z*this.max.z,c+=a.normal.z*this.min.z);return b<=a.constant&&c>=a.constant},clampPoint:function(a,b){return(b||new THREE.Vector3).copy(a).clamp(this.min,
this.max)},distanceToPoint:function(){var a=new THREE.Vector3;return function(b){return a.copy(b).clamp(this.min,this.max).sub(b).length()}}(),getBoundingSphere:function(){var a=new THREE.Vector3;return function(b){b=b||new THREE.Sphere;b.center=this.center();b.radius=.5*this.size(a).length();return b}}(),intersect:function(a){this.min.max(a.min);this.max.min(a.max);return this},union:function(a){this.min.min(a.min);this.max.max(a.max);return this},applyMatrix4:function(){var a=[new THREE.Vector3,
new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3];return function(b){a[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(b);a[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(b);a[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(b);a[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(b);a[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(b);a[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(b);a[6].set(this.max.x,
this.max.y,this.min.z).applyMatrix4(b);a[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(b);this.makeEmpty();this.setFromPoints(a);return this}}(),translate:function(a){this.min.add(a);this.max.add(a);return this},equals:function(a){return a.min.equals(this.min)&&a.max.equals(this.max)}};THREE.Matrix3=function(){this.elements=new Float32Array([1,0,0,0,1,0,0,0,1]);0<arguments.length&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")};
THREE.Matrix3.prototype={constructor:THREE.Matrix3,set:function(a,b,c,d,e,f,g,h,k){var l=this.elements;l[0]=a;l[3]=b;l[6]=c;l[1]=d;l[4]=e;l[7]=f;l[2]=g;l[5]=h;l[8]=k;return this},identity:function(){this.set(1,0,0,0,1,0,0,0,1);return this},clone:function(){return(new this.constructor).fromArray(this.elements)},copy:function(a){a=a.elements;this.set(a[0],a[3],a[6],a[1],a[4],a[7],a[2],a[5],a[8]);return this},applyToVector3Array:function(){var a;return function(b,c,d){void 0===a&&(a=new THREE.Vector3);
void 0===c&&(c=0);void 0===d&&(d=b.length);for(var e=0;e<d;e+=3,c+=3)a.fromArray(b,c),a.applyMatrix3(this),a.toArray(b,c);return b}}(),applyToBuffer:function(){var a;return function(b,c,d){void 0===a&&(a=new THREE.Vector3);void 0===c&&(c=0);void 0===d&&(d=b.length/b.itemSize);for(var e=0;e<d;e++,c++)a.x=b.getX(c),a.y=b.getY(c),a.z=b.getZ(c),a.applyMatrix3(this),b.setXYZ(a.x,a.y,a.z);return b}}(),multiplyScalar:function(a){var b=this.elements;b[0]*=a;b[3]*=a;b[6]*=a;b[1]*=a;b[4]*=a;b[7]*=a;b[2]*=a;
b[5]*=a;b[8]*=a;return this},determinant:function(){var a=this.elements,b=a[0],c=a[1],d=a[2],e=a[3],f=a[4],g=a[5],h=a[6],k=a[7],a=a[8];return b*f*a-b*g*k-c*e*a+c*g*h+d*e*k-d*f*h},getInverse:function(a,b){var c=a.elements,d=this.elements;d[0]=c[10]*c[5]-c[6]*c[9];d[1]=-c[10]*c[1]+c[2]*c[9];d[2]=c[6]*c[1]-c[2]*c[5];d[3]=-c[10]*c[4]+c[6]*c[8];d[4]=c[10]*c[0]-c[2]*c[8];d[5]=-c[6]*c[0]+c[2]*c[4];d[6]=c[9]*c[4]-c[5]*c[8];d[7]=-c[9]*c[0]+c[1]*c[8];d[8]=c[5]*c[0]-c[1]*c[4];c=c[0]*d[0]+c[1]*d[3]+c[2]*d[6];
if(0===c){if(b)throw Error("THREE.Matrix3.getInverse(): can't invert matrix, determinant is 0");console.warn("THREE.Matrix3.getInverse(): can't invert matrix, determinant is 0");this.identity();return this}this.multiplyScalar(1/c);return this},transpose:function(){var a,b=this.elements;a=b[1];b[1]=b[3];b[3]=a;a=b[2];b[2]=b[6];b[6]=a;a=b[5];b[5]=b[7];b[7]=a;return this},flattenToArrayOffset:function(a,b){var c=this.elements;a[b]=c[0];a[b+1]=c[1];a[b+2]=c[2];a[b+3]=c[3];a[b+4]=c[4];a[b+5]=c[5];a[b+
6]=c[6];a[b+7]=c[7];a[b+8]=c[8];return a},getNormalMatrix:function(a){this.getInverse(a).transpose();return this},transposeIntoArray:function(a){var b=this.elements;a[0]=b[0];a[1]=b[3];a[2]=b[6];a[3]=b[1];a[4]=b[4];a[5]=b[7];a[6]=b[2];a[7]=b[5];a[8]=b[8];return this},fromArray:function(a){this.elements.set(a);return this},toArray:function(){var a=this.elements;return[a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8]]}};
THREE.Matrix4=function(){this.elements=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);0<arguments.length&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")};
THREE.Matrix4.prototype={constructor:THREE.Matrix4,set:function(a,b,c,d,e,f,g,h,k,l,m,p,n,q,s,u){var t=this.elements;t[0]=a;t[4]=b;t[8]=c;t[12]=d;t[1]=e;t[5]=f;t[9]=g;t[13]=h;t[2]=k;t[6]=l;t[10]=m;t[14]=p;t[3]=n;t[7]=q;t[11]=s;t[15]=u;return this},identity:function(){this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);return this},clone:function(){return(new THREE.Matrix4).fromArray(this.elements)},copy:function(a){this.elements.set(a.elements);return this},copyPosition:function(a){var b=this.elements;a=a.elements;
b[12]=a[12];b[13]=a[13];b[14]=a[14];return this},extractBasis:function(a,b,c){var d=this.elements;a.set(d[0],d[1],d[2]);b.set(d[4],d[5],d[6]);c.set(d[8],d[9],d[10]);return this},makeBasis:function(a,b,c){this.set(a.x,b.x,c.x,0,a.y,b.y,c.y,0,a.z,b.z,c.z,0,0,0,0,1);return this},extractRotation:function(){var a;return function(b){void 0===a&&(a=new THREE.Vector3);var c=this.elements;b=b.elements;var d=1/a.set(b[0],b[1],b[2]).length(),e=1/a.set(b[4],b[5],b[6]).length(),f=1/a.set(b[8],b[9],b[10]).length();
c[0]=b[0]*d;c[1]=b[1]*d;c[2]=b[2]*d;c[4]=b[4]*e;c[5]=b[5]*e;c[6]=b[6]*e;c[8]=b[8]*f;c[9]=b[9]*f;c[10]=b[10]*f;return this}}(),makeRotationFromEuler:function(a){!1===a instanceof THREE.Euler&&console.error("THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");var b=this.elements,c=a.x,d=a.y,e=a.z,f=Math.cos(c),c=Math.sin(c),g=Math.cos(d),d=Math.sin(d),h=Math.cos(e),e=Math.sin(e);if("XYZ"===a.order){a=f*h;var k=f*e,l=c*h,m=c*e;b[0]=g*h;b[4]=-g*e;b[8]=
d;b[1]=k+l*d;b[5]=a-m*d;b[9]=-c*g;b[2]=m-a*d;b[6]=l+k*d;b[10]=f*g}else"YXZ"===a.order?(a=g*h,k=g*e,l=d*h,m=d*e,b[0]=a+m*c,b[4]=l*c-k,b[8]=f*d,b[1]=f*e,b[5]=f*h,b[9]=-c,b[2]=k*c-l,b[6]=m+a*c,b[10]=f*g):"ZXY"===a.order?(a=g*h,k=g*e,l=d*h,m=d*e,b[0]=a-m*c,b[4]=-f*e,b[8]=l+k*c,b[1]=k+l*c,b[5]=f*h,b[9]=m-a*c,b[2]=-f*d,b[6]=c,b[10]=f*g):"ZYX"===a.order?(a=f*h,k=f*e,l=c*h,m=c*e,b[0]=g*h,b[4]=l*d-k,b[8]=a*d+m,b[1]=g*e,b[5]=m*d+a,b[9]=k*d-l,b[2]=-d,b[6]=c*g,b[10]=f*g):"YZX"===a.order?(a=f*g,k=f*d,l=c*g,m=
c*d,b[0]=g*h,b[4]=m-a*e,b[8]=l*e+k,b[1]=e,b[5]=f*h,b[9]=-c*h,b[2]=-d*h,b[6]=k*e+l,b[10]=a-m*e):"XZY"===a.order&&(a=f*g,k=f*d,l=c*g,m=c*d,b[0]=g*h,b[4]=-e,b[8]=d*h,b[1]=a*e+m,b[5]=f*h,b[9]=k*e-l,b[2]=l*e-k,b[6]=c*h,b[10]=m*e+a);b[3]=0;b[7]=0;b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return this},makeRotationFromQuaternion:function(a){var b=this.elements,c=a.x,d=a.y,e=a.z,f=a.w,g=c+c,h=d+d,k=e+e;a=c*g;var l=c*h,c=c*k,m=d*h,d=d*k,e=e*k,g=f*g,h=f*h,f=f*k;b[0]=1-(m+e);b[4]=l-f;b[8]=c+h;b[1]=l+f;b[5]=1-(a+
e);b[9]=d-g;b[2]=c-h;b[6]=d+g;b[10]=1-(a+m);b[3]=0;b[7]=0;b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return this},lookAt:function(){var a,b,c;return function(d,e,f){void 0===a&&(a=new THREE.Vector3);void 0===b&&(b=new THREE.Vector3);void 0===c&&(c=new THREE.Vector3);var g=this.elements;c.subVectors(d,e).normalize();0===c.lengthSq()&&(c.z=1);a.crossVectors(f,c).normalize();0===a.lengthSq()&&(c.x+=1E-4,a.crossVectors(f,c).normalize());b.crossVectors(c,a);g[0]=a.x;g[4]=b.x;g[8]=c.x;g[1]=a.y;g[5]=b.y;g[9]=
c.y;g[2]=a.z;g[6]=b.z;g[10]=c.z;return this}}(),multiply:function(a,b){return void 0!==b?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(a,b)):this.multiplyMatrices(this,a)},multiplyMatrices:function(a,b){var c=a.elements,d=b.elements,e=this.elements,f=c[0],g=c[4],h=c[8],k=c[12],l=c[1],m=c[5],p=c[9],n=c[13],q=c[2],s=c[6],u=c[10],t=c[14],w=c[3],v=c[7],C=c[11],c=c[15],x=d[0],B=d[4],z=d[8],A=d[12],y=d[1],J=d[5],E=
d[9],F=d[13],I=d[2],Q=d[6],N=d[10],L=d[14],G=d[3],M=d[7],R=d[11],d=d[15];e[0]=f*x+g*y+h*I+k*G;e[4]=f*B+g*J+h*Q+k*M;e[8]=f*z+g*E+h*N+k*R;e[12]=f*A+g*F+h*L+k*d;e[1]=l*x+m*y+p*I+n*G;e[5]=l*B+m*J+p*Q+n*M;e[9]=l*z+m*E+p*N+n*R;e[13]=l*A+m*F+p*L+n*d;e[2]=q*x+s*y+u*I+t*G;e[6]=q*B+s*J+u*Q+t*M;e[10]=q*z+s*E+u*N+t*R;e[14]=q*A+s*F+u*L+t*d;e[3]=w*x+v*y+C*I+c*G;e[7]=w*B+v*J+C*Q+c*M;e[11]=w*z+v*E+C*N+c*R;e[15]=w*A+v*F+C*L+c*d;return this},multiplyToArray:function(a,b,c){var d=this.elements;this.multiplyMatrices(a,
b);c[0]=d[0];c[1]=d[1];c[2]=d[2];c[3]=d[3];c[4]=d[4];c[5]=d[5];c[6]=d[6];c[7]=d[7];c[8]=d[8];c[9]=d[9];c[10]=d[10];c[11]=d[11];c[12]=d[12];c[13]=d[13];c[14]=d[14];c[15]=d[15];return this},multiplyScalar:function(a){var b=this.elements;b[0]*=a;b[4]*=a;b[8]*=a;b[12]*=a;b[1]*=a;b[5]*=a;b[9]*=a;b[13]*=a;b[2]*=a;b[6]*=a;b[10]*=a;b[14]*=a;b[3]*=a;b[7]*=a;b[11]*=a;b[15]*=a;return this},applyToVector3Array:function(){var a;return function(b,c,d){void 0===a&&(a=new THREE.Vector3);void 0===c&&(c=0);void 0===
d&&(d=b.length);for(var e=0;e<d;e+=3,c+=3)a.fromArray(b,c),a.applyMatrix4(this),a.toArray(b,c);return b}}(),applyToBuffer:function(){var a;return function(b,c,d){void 0===a&&(a=new THREE.Vector3);void 0===c&&(c=0);void 0===d&&(d=b.length/b.itemSize);for(var e=0;e<d;e++,c++)a.x=b.getX(c),a.y=b.getY(c),a.z=b.getZ(c),a.applyMatrix4(this),b.setXYZ(a.x,a.y,a.z);return b}}(),determinant:function(){var a=this.elements,b=a[0],c=a[4],d=a[8],e=a[12],f=a[1],g=a[5],h=a[9],k=a[13],l=a[2],m=a[6],p=a[10],n=a[14];
return a[3]*(+e*h*m-d*k*m-e*g*p+c*k*p+d*g*n-c*h*n)+a[7]*(+b*h*n-b*k*p+e*f*p-d*f*n+d*k*l-e*h*l)+a[11]*(+b*k*m-b*g*n-e*f*m+c*f*n+e*g*l-c*k*l)+a[15]*(-d*g*l-b*h*m+b*g*p+d*f*m-c*f*p+c*h*l)},transpose:function(){var a=this.elements,b;b=a[1];a[1]=a[4];a[4]=b;b=a[2];a[2]=a[8];a[8]=b;b=a[6];a[6]=a[9];a[9]=b;b=a[3];a[3]=a[12];a[12]=b;b=a[7];a[7]=a[13];a[13]=b;b=a[11];a[11]=a[14];a[14]=b;return this},flattenToArrayOffset:function(a,b){var c=this.elements;a[b]=c[0];a[b+1]=c[1];a[b+2]=c[2];a[b+3]=c[3];a[b+4]=
c[4];a[b+5]=c[5];a[b+6]=c[6];a[b+7]=c[7];a[b+8]=c[8];a[b+9]=c[9];a[b+10]=c[10];a[b+11]=c[11];a[b+12]=c[12];a[b+13]=c[13];a[b+14]=c[14];a[b+15]=c[15];return a},getPosition:function(){var a;return function(){void 0===a&&(a=new THREE.Vector3);console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.");var b=this.elements;return a.set(b[12],b[13],b[14])}}(),setPosition:function(a){var b=this.elements;b[12]=a.x;b[13]=a.y;b[14]=a.z;return this},getInverse:function(a,
b){var c=this.elements,d=a.elements,e=d[0],f=d[4],g=d[8],h=d[12],k=d[1],l=d[5],m=d[9],p=d[13],n=d[2],q=d[6],s=d[10],u=d[14],t=d[3],w=d[7],v=d[11],d=d[15];c[0]=m*u*w-p*s*w+p*q*v-l*u*v-m*q*d+l*s*d;c[4]=h*s*w-g*u*w-h*q*v+f*u*v+g*q*d-f*s*d;c[8]=g*p*w-h*m*w+h*l*v-f*p*v-g*l*d+f*m*d;c[12]=h*m*q-g*p*q-h*l*s+f*p*s+g*l*u-f*m*u;c[1]=p*s*t-m*u*t-p*n*v+k*u*v+m*n*d-k*s*d;c[5]=g*u*t-h*s*t+h*n*v-e*u*v-g*n*d+e*s*d;c[9]=h*m*t-g*p*t-h*k*v+e*p*v+g*k*d-e*m*d;c[13]=g*p*n-h*m*n+h*k*s-e*p*s-g*k*u+e*m*u;c[2]=l*u*t-p*q*t+
p*n*w-k*u*w-l*n*d+k*q*d;c[6]=h*q*t-f*u*t-h*n*w+e*u*w+f*n*d-e*q*d;c[10]=f*p*t-h*l*t+h*k*w-e*p*w-f*k*d+e*l*d;c[14]=h*l*n-f*p*n-h*k*q+e*p*q+f*k*u-e*l*u;c[3]=m*q*t-l*s*t-m*n*w+k*s*w+l*n*v-k*q*v;c[7]=f*s*t-g*q*t+g*n*w-e*s*w-f*n*v+e*q*v;c[11]=g*l*t-f*m*t-g*k*w+e*m*w+f*k*v-e*l*v;c[15]=f*m*n-g*l*n+g*k*q-e*m*q-f*k*s+e*l*s;c=e*c[0]+k*c[4]+n*c[8]+t*c[12];if(0===c){if(b)throw Error("THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0");console.warn("THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0");
this.identity();return this}this.multiplyScalar(1/c);return this},scale:function(a){var b=this.elements,c=a.x,d=a.y;a=a.z;b[0]*=c;b[4]*=d;b[8]*=a;b[1]*=c;b[5]*=d;b[9]*=a;b[2]*=c;b[6]*=d;b[10]*=a;b[3]*=c;b[7]*=d;b[11]*=a;return this},getMaxScaleOnAxis:function(){var a=this.elements;return Math.sqrt(Math.max(a[0]*a[0]+a[1]*a[1]+a[2]*a[2],a[4]*a[4]+a[5]*a[5]+a[6]*a[6],a[8]*a[8]+a[9]*a[9]+a[10]*a[10]))},makeTranslation:function(a,b,c){this.set(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1);return this},makeRotationX:function(a){var b=
Math.cos(a);a=Math.sin(a);this.set(1,0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1);return this},makeRotationY:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1);return this},makeRotationZ:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1);return this},makeRotationAxis:function(a,b){var c=Math.cos(b),d=Math.sin(b),e=1-c,f=a.x,g=a.y,h=a.z,k=e*f,l=e*g;this.set(k*f+c,k*g-d*h,k*h+d*g,0,k*g+d*h,l*g+c,l*h-d*f,0,k*h-d*g,l*h+d*f,e*h*h+c,0,0,0,0,1);
return this},makeScale:function(a,b,c){this.set(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1);return this},compose:function(a,b,c){this.makeRotationFromQuaternion(b);this.scale(c);this.setPosition(a);return this},decompose:function(){var a,b;return function(c,d,e){void 0===a&&(a=new THREE.Vector3);void 0===b&&(b=new THREE.Matrix4);var f=this.elements,g=a.set(f[0],f[1],f[2]).length(),h=a.set(f[4],f[5],f[6]).length(),k=a.set(f[8],f[9],f[10]).length();0>this.determinant()&&(g=-g);c.x=f[12];c.y=f[13];c.z=f[14];b.elements.set(this.elements);
c=1/g;var f=1/h,l=1/k;b.elements[0]*=c;b.elements[1]*=c;b.elements[2]*=c;b.elements[4]*=f;b.elements[5]*=f;b.elements[6]*=f;b.elements[8]*=l;b.elements[9]*=l;b.elements[10]*=l;d.setFromRotationMatrix(b);e.x=g;e.y=h;e.z=k;return this}}(),makeFrustum:function(a,b,c,d,e,f){var g=this.elements;g[0]=2*e/(b-a);g[4]=0;g[8]=(b+a)/(b-a);g[12]=0;g[1]=0;g[5]=2*e/(d-c);g[9]=(d+c)/(d-c);g[13]=0;g[2]=0;g[6]=0;g[10]=-(f+e)/(f-e);g[14]=-2*f*e/(f-e);g[3]=0;g[7]=0;g[11]=-1;g[15]=0;return this},makePerspective:function(a,
b,c,d){a=c*Math.tan(THREE.Math.degToRad(.5*a));var e=-a;return this.makeFrustum(e*b,a*b,e,a,c,d)},makeOrthographic:function(a,b,c,d,e,f){var g=this.elements,h=b-a,k=c-d,l=f-e;g[0]=2/h;g[4]=0;g[8]=0;g[12]=-((b+a)/h);g[1]=0;g[5]=2/k;g[9]=0;g[13]=-((c+d)/k);g[2]=0;g[6]=0;g[10]=-2/l;g[14]=-((f+e)/l);g[3]=0;g[7]=0;g[11]=0;g[15]=1;return this},equals:function(a){var b=this.elements;a=a.elements;for(var c=0;16>c;c++)if(b[c]!==a[c])return!1;return!0},fromArray:function(a){this.elements.set(a);return this},
toArray:function(){var a=this.elements;return[a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12],a[13],a[14],a[15]]}};THREE.Ray=function(a,b){this.origin=void 0!==a?a:new THREE.Vector3;this.direction=void 0!==b?b:new THREE.Vector3};
THREE.Ray.prototype={constructor:THREE.Ray,set:function(a,b){this.origin.copy(a);this.direction.copy(b);return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.origin.copy(a.origin);this.direction.copy(a.direction);return this},at:function(a,b){return(b||new THREE.Vector3).copy(this.direction).multiplyScalar(a).add(this.origin)},recast:function(){var a=new THREE.Vector3;return function(b){this.origin.copy(this.at(b,a));return this}}(),closestPointToPoint:function(a,
b){var c=b||new THREE.Vector3;c.subVectors(a,this.origin);var d=c.dot(this.direction);return 0>d?c.copy(this.origin):c.copy(this.direction).multiplyScalar(d).add(this.origin)},distanceToPoint:function(a){return Math.sqrt(this.distanceSqToPoint(a))},distanceSqToPoint:function(){var a=new THREE.Vector3;return function(b){var c=a.subVectors(b,this.origin).dot(this.direction);if(0>c)return this.origin.distanceToSquared(b);a.copy(this.direction).multiplyScalar(c).add(this.origin);return a.distanceToSquared(b)}}(),
distanceSqToSegment:function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3;return function(d,e,f,g){a.copy(d).add(e).multiplyScalar(.5);b.copy(e).sub(d).normalize();c.copy(this.origin).sub(a);var h=.5*d.distanceTo(e),k=-this.direction.dot(b),l=c.dot(this.direction),m=-c.dot(b),p=c.lengthSq(),n=Math.abs(1-k*k),q;0<n?(d=k*m-l,e=k*l-m,q=h*n,0<=d?e>=-q?e<=q?(h=1/n,d*=h,e*=h,k=d*(d+k*e+2*l)+e*(k*d+e+2*m)+p):(e=h,d=Math.max(0,-(k*e+l)),k=-d*d+e*(e+2*m)+p):(e=-h,d=Math.max(0,-(k*e+l)),
k=-d*d+e*(e+2*m)+p):e<=-q?(d=Math.max(0,-(-k*h+l)),e=0<d?-h:Math.min(Math.max(-h,-m),h),k=-d*d+e*(e+2*m)+p):e<=q?(d=0,e=Math.min(Math.max(-h,-m),h),k=e*(e+2*m)+p):(d=Math.max(0,-(k*h+l)),e=0<d?h:Math.min(Math.max(-h,-m),h),k=-d*d+e*(e+2*m)+p)):(e=0<k?-h:h,d=Math.max(0,-(k*e+l)),k=-d*d+e*(e+2*m)+p);f&&f.copy(this.direction).multiplyScalar(d).add(this.origin);g&&g.copy(b).multiplyScalar(e).add(a);return k}}(),intersectSphere:function(){var a=new THREE.Vector3;return function(b,c){a.subVectors(b.center,
this.origin);var d=a.dot(this.direction),e=a.dot(a)-d*d,f=b.radius*b.radius;if(e>f)return null;f=Math.sqrt(f-e);e=d-f;d+=f;return 0>e&&0>d?null:0>e?this.at(d,c):this.at(e,c)}}(),intersectsSphere:function(a){return this.distanceToPoint(a.center)<=a.radius},distanceToPlane:function(a){var b=a.normal.dot(this.direction);if(0===b)return 0===a.distanceToPoint(this.origin)?0:null;a=-(this.origin.dot(a.normal)+a.constant)/b;return 0<=a?a:null},intersectPlane:function(a,b){var c=this.distanceToPlane(a);return null===
c?null:this.at(c,b)},intersectsPlane:function(a){var b=a.distanceToPoint(this.origin);return 0===b||0>a.normal.dot(this.direction)*b?!0:!1},intersectBox:function(a,b){var c,d,e,f,g;d=1/this.direction.x;f=1/this.direction.y;g=1/this.direction.z;var h=this.origin;0<=d?(c=(a.min.x-h.x)*d,d*=a.max.x-h.x):(c=(a.max.x-h.x)*d,d*=a.min.x-h.x);0<=f?(e=(a.min.y-h.y)*f,f*=a.max.y-h.y):(e=(a.max.y-h.y)*f,f*=a.min.y-h.y);if(c>f||e>d)return null;if(e>c||c!==c)c=e;if(f<d||d!==d)d=f;0<=g?(e=(a.min.z-h.z)*g,g*=a.max.z-
h.z):(e=(a.max.z-h.z)*g,g*=a.min.z-h.z);if(c>g||e>d)return null;if(e>c||c!==c)c=e;if(g<d||d!==d)d=g;return 0>d?null:this.at(0<=c?c:d,b)},intersectsBox:function(){var a=new THREE.Vector3;return function(b){return null!==this.intersectBox(b,a)}}(),intersectTriangle:function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3,d=new THREE.Vector3;return function(e,f,g,h,k){b.subVectors(f,e);c.subVectors(g,e);d.crossVectors(b,c);f=this.direction.dot(d);if(0<f){if(h)return null;h=1}else if(0>
f)h=-1,f=-f;else return null;a.subVectors(this.origin,e);e=h*this.direction.dot(c.crossVectors(a,c));if(0>e)return null;g=h*this.direction.dot(b.cross(a));if(0>g||e+g>f)return null;e=-h*a.dot(d);return 0>e?null:this.at(e/f,k)}}(),applyMatrix4:function(a){this.direction.add(this.origin).applyMatrix4(a);this.origin.applyMatrix4(a);this.direction.sub(this.origin);this.direction.normalize();return this},equals:function(a){return a.origin.equals(this.origin)&&a.direction.equals(this.direction)}};
THREE.Sphere=function(a,b){this.center=void 0!==a?a:new THREE.Vector3;this.radius=void 0!==b?b:0};
THREE.Sphere.prototype={constructor:THREE.Sphere,set:function(a,b){this.center.copy(a);this.radius=b;return this},setFromPoints:function(){var a=new THREE.Box3;return function(b,c){var d=this.center;void 0!==c?d.copy(c):a.setFromPoints(b).center(d);for(var e=0,f=0,g=b.length;f<g;f++)e=Math.max(e,d.distanceToSquared(b[f]));this.radius=Math.sqrt(e);return this}}(),clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.center.copy(a.center);this.radius=a.radius;return this},
empty:function(){return 0>=this.radius},containsPoint:function(a){return a.distanceToSquared(this.center)<=this.radius*this.radius},distanceToPoint:function(a){return a.distanceTo(this.center)-this.radius},intersectsSphere:function(a){var b=this.radius+a.radius;return a.center.distanceToSquared(this.center)<=b*b},intersectsBox:function(a){return a.intersectsSphere(this)},intersectsPlane:function(a){return Math.abs(this.center.dot(a.normal)-a.constant)<=this.radius},clampPoint:function(a,b){var c=
this.center.distanceToSquared(a),d=b||new THREE.Vector3;d.copy(a);c>this.radius*this.radius&&(d.sub(this.center).normalize(),d.multiplyScalar(this.radius).add(this.center));return d},getBoundingBox:function(a){a=a||new THREE.Box3;a.set(this.center,this.center);a.expandByScalar(this.radius);return a},applyMatrix4:function(a){this.center.applyMatrix4(a);this.radius*=a.getMaxScaleOnAxis();return this},translate:function(a){this.center.add(a);return this},equals:function(a){return a.center.equals(this.center)&&
a.radius===this.radius}};THREE.Frustum=function(a,b,c,d,e,f){this.planes=[void 0!==a?a:new THREE.Plane,void 0!==b?b:new THREE.Plane,void 0!==c?c:new THREE.Plane,void 0!==d?d:new THREE.Plane,void 0!==e?e:new THREE.Plane,void 0!==f?f:new THREE.Plane]};
THREE.Frustum.prototype={constructor:THREE.Frustum,set:function(a,b,c,d,e,f){var g=this.planes;g[0].copy(a);g[1].copy(b);g[2].copy(c);g[3].copy(d);g[4].copy(e);g[5].copy(f);return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){for(var b=this.planes,c=0;6>c;c++)b[c].copy(a.planes[c]);return this},setFromMatrix:function(a){var b=this.planes,c=a.elements;a=c[0];var d=c[1],e=c[2],f=c[3],g=c[4],h=c[5],k=c[6],l=c[7],m=c[8],p=c[9],n=c[10],q=c[11],s=c[12],u=c[13],t=c[14],
c=c[15];b[0].setComponents(f-a,l-g,q-m,c-s).normalize();b[1].setComponents(f+a,l+g,q+m,c+s).normalize();b[2].setComponents(f+d,l+h,q+p,c+u).normalize();b[3].setComponents(f-d,l-h,q-p,c-u).normalize();b[4].setComponents(f-e,l-k,q-n,c-t).normalize();b[5].setComponents(f+e,l+k,q+n,c+t).normalize();return this},intersectsObject:function(){var a=new THREE.Sphere;return function(b){var c=b.geometry;null===c.boundingSphere&&c.computeBoundingSphere();a.copy(c.boundingSphere);a.applyMatrix4(b.matrixWorld);
return this.intersectsSphere(a)}}(),intersectsSphere:function(a){var b=this.planes,c=a.center;a=-a.radius;for(var d=0;6>d;d++)if(b[d].distanceToPoint(c)<a)return!1;return!0},intersectsBox:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c){for(var d=this.planes,e=0;6>e;e++){var f=d[e];a.x=0<f.normal.x?c.min.x:c.max.x;b.x=0<f.normal.x?c.max.x:c.min.x;a.y=0<f.normal.y?c.min.y:c.max.y;b.y=0<f.normal.y?c.max.y:c.min.y;a.z=0<f.normal.z?c.min.z:c.max.z;b.z=0<f.normal.z?c.max.z:c.min.z;
var g=f.distanceToPoint(a),f=f.distanceToPoint(b);if(0>g&&0>f)return!1}return!0}}(),containsPoint:function(a){for(var b=this.planes,c=0;6>c;c++)if(0>b[c].distanceToPoint(a))return!1;return!0}};THREE.Plane=function(a,b){this.normal=void 0!==a?a:new THREE.Vector3(1,0,0);this.constant=void 0!==b?b:0};
THREE.Plane.prototype={constructor:THREE.Plane,set:function(a,b){this.normal.copy(a);this.constant=b;return this},setComponents:function(a,b,c,d){this.normal.set(a,b,c);this.constant=d;return this},setFromNormalAndCoplanarPoint:function(a,b){this.normal.copy(a);this.constant=-b.dot(this.normal);return this},setFromCoplanarPoints:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c,d,e){d=a.subVectors(e,d).cross(b.subVectors(c,d)).normalize();this.setFromNormalAndCoplanarPoint(d,
c);return this}}(),clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.normal.copy(a.normal);this.constant=a.constant;return this},normalize:function(){var a=1/this.normal.length();this.normal.multiplyScalar(a);this.constant*=a;return this},negate:function(){this.constant*=-1;this.normal.negate();return this},distanceToPoint:function(a){return this.normal.dot(a)+this.constant},distanceToSphere:function(a){return this.distanceToPoint(a.center)-a.radius},projectPoint:function(a,
b){return this.orthoPoint(a,b).sub(a).negate()},orthoPoint:function(a,b){var c=this.distanceToPoint(a);return(b||new THREE.Vector3).copy(this.normal).multiplyScalar(c)},intersectLine:function(){var a=new THREE.Vector3;return function(b,c){var d=c||new THREE.Vector3,e=b.delta(a),f=this.normal.dot(e);if(0===f){if(0===this.distanceToPoint(b.start))return d.copy(b.start)}else return f=-(b.start.dot(this.normal)+this.constant)/f,0>f||1<f?void 0:d.copy(e).multiplyScalar(f).add(b.start)}}(),intersectsLine:function(a){var b=
this.distanceToPoint(a.start);a=this.distanceToPoint(a.end);return 0>b&&0<a||0>a&&0<b},intersectsBox:function(a){return a.intersectsPlane(this)},intersectsSphere:function(a){return a.intersectsPlane(this)},coplanarPoint:function(a){return(a||new THREE.Vector3).copy(this.normal).multiplyScalar(-this.constant)},applyMatrix4:function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Matrix3;return function(d,e){var f=e||c.getNormalMatrix(d),f=a.copy(this.normal).applyMatrix3(f),g=this.coplanarPoint(b);
g.applyMatrix4(d);this.setFromNormalAndCoplanarPoint(f,g);return this}}(),translate:function(a){this.constant-=a.dot(this.normal);return this},equals:function(a){return a.normal.equals(this.normal)&&a.constant===this.constant}};
THREE.Math={generateUUID:function(){var a="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),b=Array(36),c=0,d;return function(){for(var e=0;36>e;e++)8===e||13===e||18===e||23===e?b[e]="-":14===e?b[e]="4":(2>=c&&(c=33554432+16777216*Math.random()|0),d=c&15,c>>=4,b[e]=a[19===e?d&3|8:d]);return b.join("")}}(),clamp:function(a,b,c){return Math.max(b,Math.min(c,a))},euclideanModulo:function(a,b){return(a%b+b)%b},mapLinear:function(a,b,c,d,e){return d+(a-b)*(e-d)/(c-b)},smoothstep:function(a,
b,c){if(a<=b)return 0;if(a>=c)return 1;a=(a-b)/(c-b);return a*a*(3-2*a)},smootherstep:function(a,b,c){if(a<=b)return 0;if(a>=c)return 1;a=(a-b)/(c-b);return a*a*a*(a*(6*a-15)+10)},random16:function(){console.warn("THREE.Math.random16() has been deprecated. Use Math.random() instead.");return Math.random()},randInt:function(a,b){return a+Math.floor(Math.random()*(b-a+1))},randFloat:function(a,b){return a+Math.random()*(b-a)},randFloatSpread:function(a){return a*(.5-Math.random())},degToRad:function(){var a=
Math.PI/180;return function(b){return b*a}}(),radToDeg:function(){var a=180/Math.PI;return function(b){return b*a}}(),isPowerOfTwo:function(a){return 0===(a&a-1)&&0!==a},nearestPowerOfTwo:function(a){return Math.pow(2,Math.round(Math.log(a)/Math.LN2))},nextPowerOfTwo:function(a){a--;a|=a>>1;a|=a>>2;a|=a>>4;a|=a>>8;a|=a>>16;a++;return a}};
THREE.Spline=function(a){function b(a,b,c,d,e,f,g){a=.5*(c-a);d=.5*(d-b);return(2*(b-c)+a+d)*g+(-3*(b-c)-2*a-d)*f+a*e+b}this.points=a;var c=[],d={x:0,y:0,z:0},e,f,g,h,k,l,m,p,n;this.initFromArray=function(a){this.points=[];for(var b=0;b<a.length;b++)this.points[b]={x:a[b][0],y:a[b][1],z:a[b][2]}};this.getPoint=function(a){e=(this.points.length-1)*a;f=Math.floor(e);g=e-f;c[0]=0===f?f:f-1;c[1]=f;c[2]=f>this.points.length-2?this.points.length-1:f+1;c[3]=f>this.points.length-3?this.points.length-1:f+
2;l=this.points[c[0]];m=this.points[c[1]];p=this.points[c[2]];n=this.points[c[3]];h=g*g;k=g*h;d.x=b(l.x,m.x,p.x,n.x,g,h,k);d.y=b(l.y,m.y,p.y,n.y,g,h,k);d.z=b(l.z,m.z,p.z,n.z,g,h,k);return d};this.getControlPointsArray=function(){var a,b,c=this.points.length,d=[];for(a=0;a<c;a++)b=this.points[a],d[a]=[b.x,b.y,b.z];return d};this.getLength=function(a){var b,c,d,e=b=b=0,f=new THREE.Vector3,g=new THREE.Vector3,h=[],k=0;h[0]=0;a||(a=100);c=this.points.length*a;f.copy(this.points[0]);for(a=1;a<c;a++)b=
a/c,d=this.getPoint(b),g.copy(d),k+=g.distanceTo(f),f.copy(d),b*=this.points.length-1,b=Math.floor(b),b!==e&&(h[b]=k,e=b);h[h.length]=k;return{chunks:h,total:k}};this.reparametrizeByArcLength=function(a){var b,c,d,e,f,g,h=[],k=new THREE.Vector3,l=this.getLength();h.push(k.copy(this.points[0]).clone());for(b=1;b<this.points.length;b++){c=l.chunks[b]-l.chunks[b-1];g=Math.ceil(a*c/l.total);e=(b-1)/(this.points.length-1);f=b/(this.points.length-1);for(c=1;c<g-1;c++)d=e+1/g*c*(f-e),d=this.getPoint(d),
h.push(k.copy(d).clone());h.push(k.copy(this.points[b]).clone())}this.points=h}};THREE.Triangle=function(a,b,c){this.a=void 0!==a?a:new THREE.Vector3;this.b=void 0!==b?b:new THREE.Vector3;this.c=void 0!==c?c:new THREE.Vector3};THREE.Triangle.normal=function(){var a=new THREE.Vector3;return function(b,c,d,e){e=e||new THREE.Vector3;e.subVectors(d,c);a.subVectors(b,c);e.cross(a);b=e.lengthSq();return 0<b?e.multiplyScalar(1/Math.sqrt(b)):e.set(0,0,0)}}();
THREE.Triangle.barycoordFromPoint=function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3;return function(d,e,f,g,h){a.subVectors(g,e);b.subVectors(f,e);c.subVectors(d,e);d=a.dot(a);e=a.dot(b);f=a.dot(c);var k=b.dot(b);g=b.dot(c);var l=d*k-e*e;h=h||new THREE.Vector3;if(0===l)return h.set(-2,-1,-1);l=1/l;k=(k*f-e*g)*l;d=(d*g-e*f)*l;return h.set(1-k-d,d,k)}}();
THREE.Triangle.containsPoint=function(){var a=new THREE.Vector3;return function(b,c,d,e){b=THREE.Triangle.barycoordFromPoint(b,c,d,e,a);return 0<=b.x&&0<=b.y&&1>=b.x+b.y}}();
THREE.Triangle.prototype={constructor:THREE.Triangle,set:function(a,b,c){this.a.copy(a);this.b.copy(b);this.c.copy(c);return this},setFromPointsAndIndices:function(a,b,c,d){this.a.copy(a[b]);this.b.copy(a[c]);this.c.copy(a[d]);return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.a.copy(a.a);this.b.copy(a.b);this.c.copy(a.c);return this},area:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(){a.subVectors(this.c,this.b);b.subVectors(this.a,
this.b);return.5*a.cross(b).length()}}(),midpoint:function(a){return(a||new THREE.Vector3).addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)},normal:function(a){return THREE.Triangle.normal(this.a,this.b,this.c,a)},plane:function(a){return(a||new THREE.Plane).setFromCoplanarPoints(this.a,this.b,this.c)},barycoordFromPoint:function(a,b){return THREE.Triangle.barycoordFromPoint(a,this.a,this.b,this.c,b)},containsPoint:function(a){return THREE.Triangle.containsPoint(a,this.a,this.b,this.c)},
equals:function(a){return a.a.equals(this.a)&&a.b.equals(this.b)&&a.c.equals(this.c)}};THREE.Interpolant=function(a,b,c,d){this.parameterPositions=a;this._cachedIndex=0;this.resultBuffer=void 0!==d?d:new b.constructor(c);this.sampleValues=b;this.valueSize=c};
THREE.Interpolant.prototype={constructor:THREE.Interpolant,evaluate:function(a){var b=this.parameterPositions,c=this._cachedIndex,d=b[c],e=b[c-1];a:{b:{c:{d:if(!(a<d)){for(var f=c+2;;){if(void 0===d){if(a<e)break d;this._cachedIndex=c=b.length;return this.afterEnd_(c-1,a,e)}if(c===f)break;e=d;d=b[++c];if(a<d)break b}d=b.length;break c}if(a>=e)break a;else{f=b[1];a<f&&(c=2,e=f);for(f=c-2;;){if(void 0===e)return this._cachedIndex=0,this.beforeStart_(0,a,d);if(c===f)break;d=e;e=b[--c-1];if(a>=e)break b}d=
c;c=0}}for(;c<d;)e=c+d>>>1,a<b[e]?d=e:c=e+1;d=b[c];e=b[c-1];if(void 0===e)return this._cachedIndex=0,this.beforeStart_(0,a,d);if(void 0===d)return this._cachedIndex=c=b.length,this.afterEnd_(c-1,e,a)}this._cachedIndex=c;this.intervalChanged_(c,e,d)}return this.interpolate_(c,e,a,d)},settings:null,DefaultSettings_:{},getSettings_:function(){return this.settings||this.DefaultSettings_},copySampleValue_:function(a){var b=this.resultBuffer,c=this.sampleValues,d=this.valueSize;a*=d;for(var e=0;e!==d;++e)b[e]=
c[a+e];return b},interpolate_:function(a,b,c,d){throw Error("call to abstract method");},intervalChanged_:function(a,b,c){}};Object.assign(THREE.Interpolant.prototype,{beforeStart_:THREE.Interpolant.prototype.copySampleValue_,afterEnd_:THREE.Interpolant.prototype.copySampleValue_});THREE.CubicInterpolant=function(a,b,c,d){THREE.Interpolant.call(this,a,b,c,d);this._offsetNext=this._weightNext=this._offsetPrev=this._weightPrev=-0};
THREE.CubicInterpolant.prototype=Object.assign(Object.create(THREE.Interpolant.prototype),{constructor:THREE.CubicInterpolant,DefaultSettings_:{endingStart:THREE.ZeroCurvatureEnding,endingEnd:THREE.ZeroCurvatureEnding},intervalChanged_:function(a,b,c){var d=this.parameterPositions,e=a-2,f=a+1,g=d[e],h=d[f];if(void 0===g)switch(this.getSettings_().endingStart){case THREE.ZeroSlopeEnding:e=a;g=2*b-c;break;case THREE.WrapAroundEnding:e=d.length-2;g=b+d[e]-d[e+1];break;default:e=a,g=c}if(void 0===h)switch(this.getSettings_().endingEnd){case THREE.ZeroSlopeEnding:f=
a;h=2*c-b;break;case THREE.WrapAroundEnding:f=1;h=c+d[1]-d[0];break;default:f=a-1,h=b}a=.5*(c-b);d=this.valueSize;this._weightPrev=a/(b-g);this._weightNext=a/(h-c);this._offsetPrev=e*d;this._offsetNext=f*d},interpolate_:function(a,b,c,d){var e=this.resultBuffer,f=this.sampleValues,g=this.valueSize;a*=g;var h=a-g,k=this._offsetPrev,l=this._offsetNext,m=this._weightPrev,p=this._weightNext,n=(c-b)/(d-b);c=n*n;d=c*n;b=-m*d+2*m*c-m*n;m=(1+m)*d+(-1.5-2*m)*c+(-.5+m)*n+1;n=(-1-p)*d+(1.5+p)*c+.5*n;p=p*d-p*
c;for(c=0;c!==g;++c)e[c]=b*f[k+c]+m*f[h+c]+n*f[a+c]+p*f[l+c];return e}});THREE.DiscreteInterpolant=function(a,b,c,d){THREE.Interpolant.call(this,a,b,c,d)};THREE.DiscreteInterpolant.prototype=Object.assign(Object.create(THREE.Interpolant.prototype),{constructor:THREE.DiscreteInterpolant,interpolate_:function(a,b,c,d){return this.copySampleValue_(a-1)}});THREE.LinearInterpolant=function(a,b,c,d){THREE.Interpolant.call(this,a,b,c,d)};
THREE.LinearInterpolant.prototype=Object.assign(Object.create(THREE.Interpolant.prototype),{constructor:THREE.LinearInterpolant,interpolate_:function(a,b,c,d){var e=this.resultBuffer,f=this.sampleValues,g=this.valueSize;a*=g;var h=a-g;b=(c-b)/(d-b);c=1-b;for(d=0;d!==g;++d)e[d]=f[h+d]*c+f[a+d]*b;return e}});THREE.QuaternionLinearInterpolant=function(a,b,c,d){THREE.Interpolant.call(this,a,b,c,d)};
THREE.QuaternionLinearInterpolant.prototype=Object.assign(Object.create(THREE.Interpolant.prototype),{constructor:THREE.QuaternionLinearInterpolant,interpolate_:function(a,b,c,d){var e=this.resultBuffer,f=this.sampleValues,g=this.valueSize;a*=g;b=(c-b)/(d-b);for(c=a+g;a!==c;a+=4)THREE.Quaternion.slerpFlat(e,0,f,a-g,f,a,b);return e}});THREE.Clock=function(a){this.autoStart=void 0!==a?a:!0;this.elapsedTime=this.oldTime=this.startTime=0;this.running=!1};
THREE.Clock.prototype={constructor:THREE.Clock,start:function(){this.oldTime=this.startTime=performance.now();this.running=!0},stop:function(){this.getElapsedTime();this.running=!1},getElapsedTime:function(){this.getDelta();return this.elapsedTime},getDelta:function(){var a=0;this.autoStart&&!this.running&&this.start();if(this.running){var b=performance.now(),a=.001*(b-this.oldTime);this.oldTime=b;this.elapsedTime+=a}return a}};THREE.EventDispatcher=function(){};
THREE.EventDispatcher.prototype={constructor:THREE.EventDispatcher,apply:function(a){a.addEventListener=THREE.EventDispatcher.prototype.addEventListener;a.hasEventListener=THREE.EventDispatcher.prototype.hasEventListener;a.removeEventListener=THREE.EventDispatcher.prototype.removeEventListener;a.dispatchEvent=THREE.EventDispatcher.prototype.dispatchEvent},addEventListener:function(a,b){void 0===this._listeners&&(this._listeners={});var c=this._listeners;void 0===c[a]&&(c[a]=[]);-1===c[a].indexOf(b)&&
c[a].push(b)},hasEventListener:function(a,b){if(void 0===this._listeners)return!1;var c=this._listeners;return void 0!==c[a]&&-1!==c[a].indexOf(b)?!0:!1},removeEventListener:function(a,b){if(void 0!==this._listeners){var c=this._listeners[a];if(void 0!==c){var d=c.indexOf(b);-1!==d&&c.splice(d,1)}}},dispatchEvent:function(a){if(void 0!==this._listeners){var b=this._listeners[a.type];if(void 0!==b){a.target=this;for(var c=[],d=b.length,e=0;e<d;e++)c[e]=b[e];for(e=0;e<d;e++)c[e].call(this,a)}}}};
THREE.Layers=function(){this.mask=1};THREE.Layers.prototype={constructor:THREE.Layers,set:function(a){this.mask=1<<a},enable:function(a){this.mask|=1<<a},toggle:function(a){this.mask^=1<<a},disable:function(a){this.mask&=~(1<<a)},test:function(a){return 0!==(this.mask&a.mask)}};
(function(a){function b(a,b){return a.distance-b.distance}function c(a,b,f,g){if(!1!==a.visible&&(a.raycast(b,f),!0===g)){a=a.children;g=0;for(var h=a.length;g<h;g++)c(a[g],b,f,!0)}}a.Raycaster=function(b,c,f,g){this.ray=new a.Ray(b,c);this.near=f||0;this.far=g||Infinity;this.params={Mesh:{},Line:{},LOD:{},Points:{threshold:1},Sprite:{}};Object.defineProperties(this.params,{PointCloud:{get:function(){console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points.");return this.Points}}})};
a.Raycaster.prototype={constructor:a.Raycaster,linePrecision:1,set:function(a,b){this.ray.set(a,b)},setFromCamera:function(b,c){c instanceof a.PerspectiveCamera?(this.ray.origin.setFromMatrixPosition(c.matrixWorld),this.ray.direction.set(b.x,b.y,.5).unproject(c).sub(this.ray.origin).normalize()):c instanceof a.OrthographicCamera?(this.ray.origin.set(b.x,b.y,-1).unproject(c),this.ray.direction.set(0,0,-1).transformDirection(c.matrixWorld)):console.error("THREE.Raycaster: Unsupported camera type.")},
intersectObject:function(a,e){var f=[];c(a,this,f,e);f.sort(b);return f},intersectObjects:function(a,e){var f=[];if(!1===Array.isArray(a))return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),f;for(var g=0,h=a.length;g<h;g++)c(a[g],this,f,e);f.sort(b);return f}}})(THREE);
THREE.Object3D=function(){Object.defineProperty(this,"id",{value:THREE.Object3DIdCount++});this.uuid=THREE.Math.generateUUID();this.name="";this.type="Object3D";this.parent=null;this.children=[];this.up=THREE.Object3D.DefaultUp.clone();var a=new THREE.Vector3,b=new THREE.Euler,c=new THREE.Quaternion,d=new THREE.Vector3(1,1,1);b.onChange(function(){c.setFromEuler(b,!1)});c.onChange(function(){b.setFromQuaternion(c,void 0,!1)});Object.defineProperties(this,{position:{enumerable:!0,value:a},rotation:{enumerable:!0,
value:b},quaternion:{enumerable:!0,value:c},scale:{enumerable:!0,value:d},modelViewMatrix:{value:new THREE.Matrix4},normalMatrix:{value:new THREE.Matrix3}});this.rotationAutoUpdate=!0;this.matrix=new THREE.Matrix4;this.matrixWorld=new THREE.Matrix4;this.matrixAutoUpdate=THREE.Object3D.DefaultMatrixAutoUpdate;this.matrixWorldNeedsUpdate=!1;this.layers=new THREE.Layers;this.visible=!0;this.receiveShadow=this.castShadow=!1;this.frustumCulled=!0;this.renderOrder=0;this.userData={}};
THREE.Object3D.DefaultUp=new THREE.Vector3(0,1,0);THREE.Object3D.DefaultMatrixAutoUpdate=!0;
THREE.Object3D.prototype={constructor:THREE.Object3D,applyMatrix:function(a){this.matrix.multiplyMatrices(a,this.matrix);this.matrix.decompose(this.position,this.quaternion,this.scale)},setRotationFromAxisAngle:function(a,b){this.quaternion.setFromAxisAngle(a,b)},setRotationFromEuler:function(a){this.quaternion.setFromEuler(a,!0)},setRotationFromMatrix:function(a){this.quaternion.setFromRotationMatrix(a)},setRotationFromQuaternion:function(a){this.quaternion.copy(a)},rotateOnAxis:function(){var a=
new THREE.Quaternion;return function(b,c){a.setFromAxisAngle(b,c);this.quaternion.multiply(a);return this}}(),rotateX:function(){var a=new THREE.Vector3(1,0,0);return function(b){return this.rotateOnAxis(a,b)}}(),rotateY:function(){var a=new THREE.Vector3(0,1,0);return function(b){return this.rotateOnAxis(a,b)}}(),rotateZ:function(){var a=new THREE.Vector3(0,0,1);return function(b){return this.rotateOnAxis(a,b)}}(),translateOnAxis:function(){var a=new THREE.Vector3;return function(b,c){a.copy(b).applyQuaternion(this.quaternion);
this.position.add(a.multiplyScalar(c));return this}}(),translateX:function(){var a=new THREE.Vector3(1,0,0);return function(b){return this.translateOnAxis(a,b)}}(),translateY:function(){var a=new THREE.Vector3(0,1,0);return function(b){return this.translateOnAxis(a,b)}}(),translateZ:function(){var a=new THREE.Vector3(0,0,1);return function(b){return this.translateOnAxis(a,b)}}(),localToWorld:function(a){return a.applyMatrix4(this.matrixWorld)},worldToLocal:function(){var a=new THREE.Matrix4;return function(b){return b.applyMatrix4(a.getInverse(this.matrixWorld))}}(),
lookAt:function(){var a=new THREE.Matrix4;return function(b){a.lookAt(b,this.position,this.up);this.quaternion.setFromRotationMatrix(a)}}(),add:function(a){if(1<arguments.length){for(var b=0;b<arguments.length;b++)this.add(arguments[b]);return this}if(a===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",a),this;a instanceof THREE.Object3D?(null!==a.parent&&a.parent.remove(a),a.parent=this,a.dispatchEvent({type:"added"}),this.children.push(a)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",
a);return this},remove:function(a){if(1<arguments.length)for(var b=0;b<arguments.length;b++)this.remove(arguments[b]);b=this.children.indexOf(a);-1!==b&&(a.parent=null,a.dispatchEvent({type:"removed"}),this.children.splice(b,1))},getObjectById:function(a){return this.getObjectByProperty("id",a)},getObjectByName:function(a){return this.getObjectByProperty("name",a)},getObjectByProperty:function(a,b){if(this[a]===b)return this;for(var c=0,d=this.children.length;c<d;c++){var e=this.children[c].getObjectByProperty(a,
b);if(void 0!==e)return e}},getWorldPosition:function(a){a=a||new THREE.Vector3;this.updateMatrixWorld(!0);return a.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c){c=c||new THREE.Quaternion;this.updateMatrixWorld(!0);this.matrixWorld.decompose(a,c,b);return c}}(),getWorldRotation:function(){var a=new THREE.Quaternion;return function(b){b=b||new THREE.Euler;this.getWorldQuaternion(a);return b.setFromQuaternion(a,
this.rotation.order,!1)}}(),getWorldScale:function(){var a=new THREE.Vector3,b=new THREE.Quaternion;return function(c){c=c||new THREE.Vector3;this.updateMatrixWorld(!0);this.matrixWorld.decompose(a,b,c);return c}}(),getWorldDirection:function(){var a=new THREE.Quaternion;return function(b){b=b||new THREE.Vector3;this.getWorldQuaternion(a);return b.set(0,0,1).applyQuaternion(a)}}(),raycast:function(){},traverse:function(a){a(this);for(var b=this.children,c=0,d=b.length;c<d;c++)b[c].traverse(a)},traverseVisible:function(a){if(!1!==
this.visible){a(this);for(var b=this.children,c=0,d=b.length;c<d;c++)b[c].traverseVisible(a)}},traverseAncestors:function(a){var b=this.parent;null!==b&&(a(b),b.traverseAncestors(a))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale);this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(a){!0===this.matrixAutoUpdate&&this.updateMatrix();if(!0===this.matrixWorldNeedsUpdate||!0===a)null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,
this.matrix),this.matrixWorldNeedsUpdate=!1,a=!0;for(var b=0,c=this.children.length;b<c;b++)this.children[b].updateMatrixWorld(a)},toJSON:function(a){function b(a){var b=[],c;for(c in a){var d=a[c];delete d.metadata;b.push(d)}return b}var c=void 0===a,d={};c&&(a={geometries:{},materials:{},textures:{},images:{}},d.metadata={version:4.4,type:"Object",generator:"Object3D.toJSON"});var e={};e.uuid=this.uuid;e.type=this.type;""!==this.name&&(e.name=this.name);"{}"!==JSON.stringify(this.userData)&&(e.userData=
this.userData);!0===this.castShadow&&(e.castShadow=!0);!0===this.receiveShadow&&(e.receiveShadow=!0);!1===this.visible&&(e.visible=!1);e.matrix=this.matrix.toArray();void 0!==this.geometry&&(void 0===a.geometries[this.geometry.uuid]&&(a.geometries[this.geometry.uuid]=this.geometry.toJSON(a)),e.geometry=this.geometry.uuid);void 0!==this.material&&(void 0===a.materials[this.material.uuid]&&(a.materials[this.material.uuid]=this.material.toJSON(a)),e.material=this.material.uuid);if(0<this.children.length){e.children=
[];for(var f=0;f<this.children.length;f++)e.children.push(this.children[f].toJSON(a).object)}if(c){var c=b(a.geometries),f=b(a.materials),g=b(a.textures);a=b(a.images);0<c.length&&(d.geometries=c);0<f.length&&(d.materials=f);0<g.length&&(d.textures=g);0<a.length&&(d.images=a)}d.object=e;return d},clone:function(a){return(new this.constructor).copy(this,a)},copy:function(a,b){void 0===b&&(b=!0);this.name=a.name;this.up.copy(a.up);this.position.copy(a.position);this.quaternion.copy(a.quaternion);this.scale.copy(a.scale);
this.rotationAutoUpdate=a.rotationAutoUpdate;this.matrix.copy(a.matrix);this.matrixWorld.copy(a.matrixWorld);this.matrixAutoUpdate=a.matrixAutoUpdate;this.matrixWorldNeedsUpdate=a.matrixWorldNeedsUpdate;this.visible=a.visible;this.castShadow=a.castShadow;this.receiveShadow=a.receiveShadow;this.frustumCulled=a.frustumCulled;this.renderOrder=a.renderOrder;this.userData=JSON.parse(JSON.stringify(a.userData));if(!0===b)for(var c=0;c<a.children.length;c++)this.add(a.children[c].clone());return this}};
THREE.EventDispatcher.prototype.apply(THREE.Object3D.prototype);THREE.Object3DIdCount=0;THREE.Face3=function(a,b,c,d,e,f){this.a=a;this.b=b;this.c=c;this.normal=d instanceof THREE.Vector3?d:new THREE.Vector3;this.vertexNormals=Array.isArray(d)?d:[];this.color=e instanceof THREE.Color?e:new THREE.Color;this.vertexColors=Array.isArray(e)?e:[];this.materialIndex=void 0!==f?f:0};
THREE.Face3.prototype={constructor:THREE.Face3,clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.a=a.a;this.b=a.b;this.c=a.c;this.normal.copy(a.normal);this.color.copy(a.color);this.materialIndex=a.materialIndex;for(var b=0,c=a.vertexNormals.length;b<c;b++)this.vertexNormals[b]=a.vertexNormals[b].clone();b=0;for(c=a.vertexColors.length;b<c;b++)this.vertexColors[b]=a.vertexColors[b].clone();return this}};
THREE.Face4=function(a,b,c,d,e,f,g){console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead.");return new THREE.Face3(a,b,c,e,f,g)};THREE.BufferAttribute=function(a,b){this.uuid=THREE.Math.generateUUID();this.array=a;this.itemSize=b;this.dynamic=!1;this.updateRange={offset:0,count:-1};this.version=0};
THREE.BufferAttribute.prototype={constructor:THREE.BufferAttribute,get count(){return this.array.length/this.itemSize},set needsUpdate(a){!0===a&&this.version++},setDynamic:function(a){this.dynamic=a;return this},copy:function(a){this.array=new a.array.constructor(a.array);this.itemSize=a.itemSize;this.dynamic=a.dynamic;return this},copyAt:function(a,b,c){a*=this.itemSize;c*=b.itemSize;for(var d=0,e=this.itemSize;d<e;d++)this.array[a+d]=b.array[c+d];return this},copyArray:function(a){this.array.set(a);
return this},copyColorsArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",d),f=new THREE.Color);b[c++]=f.r;b[c++]=f.g;b[c++]=f.b}return this},copyIndicesArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];b[c++]=f.a;b[c++]=f.b;b[c++]=f.c}return this},copyVector2sArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",
d),f=new THREE.Vector2);b[c++]=f.x;b[c++]=f.y}return this},copyVector3sArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",d),f=new THREE.Vector3);b[c++]=f.x;b[c++]=f.y;b[c++]=f.z}return this},copyVector4sArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",d),f=new THREE.Vector4);
b[c++]=f.x;b[c++]=f.y;b[c++]=f.z;b[c++]=f.w}return this},set:function(a,b){void 0===b&&(b=0);this.array.set(a,b);return this},getX:function(a){return this.array[a*this.itemSize]},setX:function(a,b){this.array[a*this.itemSize]=b;return this},getY:function(a){return this.array[a*this.itemSize+1]},setY:function(a,b){this.array[a*this.itemSize+1]=b;return this},getZ:function(a){return this.array[a*this.itemSize+2]},setZ:function(a,b){this.array[a*this.itemSize+2]=b;return this},getW:function(a){return this.array[a*
this.itemSize+3]},setW:function(a,b){this.array[a*this.itemSize+3]=b;return this},setXY:function(a,b,c){a*=this.itemSize;this.array[a+0]=b;this.array[a+1]=c;return this},setXYZ:function(a,b,c,d){a*=this.itemSize;this.array[a+0]=b;this.array[a+1]=c;this.array[a+2]=d;return this},setXYZW:function(a,b,c,d,e){a*=this.itemSize;this.array[a+0]=b;this.array[a+1]=c;this.array[a+2]=d;this.array[a+3]=e;return this},clone:function(){return(new this.constructor).copy(this)}};
THREE.Int8Attribute=function(a,b){return new THREE.BufferAttribute(new Int8Array(a),b)};THREE.Uint8Attribute=function(a,b){return new THREE.BufferAttribute(new Uint8Array(a),b)};THREE.Uint8ClampedAttribute=function(a,b){return new THREE.BufferAttribute(new Uint8ClampedArray(a),b)};THREE.Int16Attribute=function(a,b){return new THREE.BufferAttribute(new Int16Array(a),b)};THREE.Uint16Attribute=function(a,b){return new THREE.BufferAttribute(new Uint16Array(a),b)};
THREE.Int32Attribute=function(a,b){return new THREE.BufferAttribute(new Int32Array(a),b)};THREE.Uint32Attribute=function(a,b){return new THREE.BufferAttribute(new Uint32Array(a),b)};THREE.Float32Attribute=function(a,b){return new THREE.BufferAttribute(new Float32Array(a),b)};THREE.Float64Attribute=function(a,b){return new THREE.BufferAttribute(new Float64Array(a),b)};
THREE.DynamicBufferAttribute=function(a,b){console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead.");return(new THREE.BufferAttribute(a,b)).setDynamic(!0)};THREE.InstancedBufferAttribute=function(a,b,c){THREE.BufferAttribute.call(this,a,b);this.meshPerAttribute=c||1};THREE.InstancedBufferAttribute.prototype=Object.create(THREE.BufferAttribute.prototype);THREE.InstancedBufferAttribute.prototype.constructor=THREE.InstancedBufferAttribute;
THREE.InstancedBufferAttribute.prototype.copy=function(a){THREE.BufferAttribute.prototype.copy.call(this,a);this.meshPerAttribute=a.meshPerAttribute;return this};THREE.InterleavedBuffer=function(a,b){this.uuid=THREE.Math.generateUUID();this.array=a;this.stride=b;this.dynamic=!1;this.updateRange={offset:0,count:-1};this.version=0};
THREE.InterleavedBuffer.prototype={constructor:THREE.InterleavedBuffer,get length(){return this.array.length},get count(){return this.array.length/this.stride},set needsUpdate(a){!0===a&&this.version++},setDynamic:function(a){this.dynamic=a;return this},copy:function(a){this.array=new a.array.constructor(a.array);this.stride=a.stride;this.dynamic=a.dynamic;return this},copyAt:function(a,b,c){a*=this.stride;c*=b.stride;for(var d=0,e=this.stride;d<e;d++)this.array[a+d]=b.array[c+d];return this},set:function(a,
b){void 0===b&&(b=0);this.array.set(a,b);return this},clone:function(){return(new this.constructor).copy(this)}};THREE.InstancedInterleavedBuffer=function(a,b,c){THREE.InterleavedBuffer.call(this,a,b);this.meshPerAttribute=c||1};THREE.InstancedInterleavedBuffer.prototype=Object.create(THREE.InterleavedBuffer.prototype);THREE.InstancedInterleavedBuffer.prototype.constructor=THREE.InstancedInterleavedBuffer;
THREE.InstancedInterleavedBuffer.prototype.copy=function(a){THREE.InterleavedBuffer.prototype.copy.call(this,a);this.meshPerAttribute=a.meshPerAttribute;return this};THREE.InterleavedBufferAttribute=function(a,b,c){this.uuid=THREE.Math.generateUUID();this.data=a;this.itemSize=b;this.offset=c};
THREE.InterleavedBufferAttribute.prototype={constructor:THREE.InterleavedBufferAttribute,get length(){console.warn("THREE.BufferAttribute: .length has been deprecated. Please use .count.");return this.array.length},get count(){return this.data.count},setX:function(a,b){this.data.array[a*this.data.stride+this.offset]=b;return this},setY:function(a,b){this.data.array[a*this.data.stride+this.offset+1]=b;return this},setZ:function(a,b){this.data.array[a*this.data.stride+this.offset+2]=b;return this},
setW:function(a,b){this.data.array[a*this.data.stride+this.offset+3]=b;return this},getX:function(a){return this.data.array[a*this.data.stride+this.offset]},getY:function(a){return this.data.array[a*this.data.stride+this.offset+1]},getZ:function(a){return this.data.array[a*this.data.stride+this.offset+2]},getW:function(a){return this.data.array[a*this.data.stride+this.offset+3]},setXY:function(a,b,c){a=a*this.data.stride+this.offset;this.data.array[a+0]=b;this.data.array[a+1]=c;return this},setXYZ:function(a,
b,c,d){a=a*this.data.stride+this.offset;this.data.array[a+0]=b;this.data.array[a+1]=c;this.data.array[a+2]=d;return this},setXYZW:function(a,b,c,d,e){a=a*this.data.stride+this.offset;this.data.array[a+0]=b;this.data.array[a+1]=c;this.data.array[a+2]=d;this.data.array[a+3]=e;return this}};
THREE.Geometry=function(){Object.defineProperty(this,"id",{value:THREE.GeometryIdCount++});this.uuid=THREE.Math.generateUUID();this.name="";this.type="Geometry";this.vertices=[];this.colors=[];this.faces=[];this.faceVertexUvs=[[]];this.morphTargets=[];this.morphNormals=[];this.skinWeights=[];this.skinIndices=[];this.lineDistances=[];this.boundingSphere=this.boundingBox=null;this.groupsNeedUpdate=this.lineDistancesNeedUpdate=this.colorsNeedUpdate=this.normalsNeedUpdate=this.uvsNeedUpdate=this.elementsNeedUpdate=
this.verticesNeedUpdate=!1};
THREE.Geometry.prototype={constructor:THREE.Geometry,applyMatrix:function(a){for(var b=(new THREE.Matrix3).getNormalMatrix(a),c=0,d=this.vertices.length;c<d;c++)this.vertices[c].applyMatrix4(a);c=0;for(d=this.faces.length;c<d;c++){a=this.faces[c];a.normal.applyMatrix3(b).normalize();for(var e=0,f=a.vertexNormals.length;e<f;e++)a.vertexNormals[e].applyMatrix3(b).normalize()}null!==this.boundingBox&&this.computeBoundingBox();null!==this.boundingSphere&&this.computeBoundingSphere();this.normalsNeedUpdate=
this.verticesNeedUpdate=!0},rotateX:function(){var a;return function(b){void 0===a&&(a=new THREE.Matrix4);a.makeRotationX(b);this.applyMatrix(a);return this}}(),rotateY:function(){var a;return function(b){void 0===a&&(a=new THREE.Matrix4);a.makeRotationY(b);this.applyMatrix(a);return this}}(),rotateZ:function(){var a;return function(b){void 0===a&&(a=new THREE.Matrix4);a.makeRotationZ(b);this.applyMatrix(a);return this}}(),translate:function(){var a;return function(b,c,d){void 0===a&&(a=new THREE.Matrix4);
a.makeTranslation(b,c,d);this.applyMatrix(a);return this}}(),scale:function(){var a;return function(b,c,d){void 0===a&&(a=new THREE.Matrix4);a.makeScale(b,c,d);this.applyMatrix(a);return this}}(),lookAt:function(){var a;return function(b){void 0===a&&(a=new THREE.Object3D);a.lookAt(b);a.updateMatrix();this.applyMatrix(a.matrix)}}(),fromBufferGeometry:function(a){function b(a,b,d){var e=void 0!==g?[m[a].clone(),m[b].clone(),m[d].clone()]:[],f=void 0!==h?[c.colors[a].clone(),c.colors[b].clone(),c.colors[d].clone()]:
[],e=new THREE.Face3(a,b,d,e,f);c.faces.push(e);void 0!==k&&c.faceVertexUvs[0].push([p[a].clone(),p[b].clone(),p[d].clone()]);void 0!==l&&c.faceVertexUvs[1].push([n[a].clone(),n[b].clone(),n[d].clone()])}var c=this,d=null!==a.index?a.index.array:void 0,e=a.attributes,f=e.position.array,g=void 0!==e.normal?e.normal.array:void 0,h=void 0!==e.color?e.color.array:void 0,k=void 0!==e.uv?e.uv.array:void 0,l=void 0!==e.uv2?e.uv2.array:void 0;void 0!==l&&(this.faceVertexUvs[1]=[]);for(var m=[],p=[],n=[],
q=e=0;e<f.length;e+=3,q+=2)c.vertices.push(new THREE.Vector3(f[e],f[e+1],f[e+2])),void 0!==g&&m.push(new THREE.Vector3(g[e],g[e+1],g[e+2])),void 0!==h&&c.colors.push(new THREE.Color(h[e],h[e+1],h[e+2])),void 0!==k&&p.push(new THREE.Vector2(k[q],k[q+1])),void 0!==l&&n.push(new THREE.Vector2(l[q],l[q+1]));if(void 0!==d)if(f=a.groups,0<f.length)for(e=0;e<f.length;e++)for(var q=f[e],s=q.start,u=q.count,q=s,s=s+u;q<s;q+=3)b(d[q],d[q+1],d[q+2]);else for(e=0;e<d.length;e+=3)b(d[e],d[e+1],d[e+2]);else for(e=
0;e<f.length/3;e+=3)b(e,e+1,e+2);this.computeFaceNormals();null!==a.boundingBox&&(this.boundingBox=a.boundingBox.clone());null!==a.boundingSphere&&(this.boundingSphere=a.boundingSphere.clone());return this},center:function(){this.computeBoundingBox();var a=this.boundingBox.center().negate();this.translate(a.x,a.y,a.z);return a},normalize:function(){this.computeBoundingSphere();var a=this.boundingSphere.center,b=this.boundingSphere.radius,b=0===b?1:1/b,c=new THREE.Matrix4;c.set(b,0,0,-b*a.x,0,b,0,
-b*a.y,0,0,b,-b*a.z,0,0,0,1);this.applyMatrix(c);return this},computeFaceNormals:function(){for(var a=new THREE.Vector3,b=new THREE.Vector3,c=0,d=this.faces.length;c<d;c++){var e=this.faces[c],f=this.vertices[e.a],g=this.vertices[e.b];a.subVectors(this.vertices[e.c],g);b.subVectors(f,g);a.cross(b);a.normalize();e.normal.copy(a)}},computeVertexNormals:function(a){void 0===a&&(a=!0);var b,c,d;d=Array(this.vertices.length);b=0;for(c=this.vertices.length;b<c;b++)d[b]=new THREE.Vector3;if(a){var e,f,g,
h=new THREE.Vector3,k=new THREE.Vector3;a=0;for(b=this.faces.length;a<b;a++)c=this.faces[a],e=this.vertices[c.a],f=this.vertices[c.b],g=this.vertices[c.c],h.subVectors(g,f),k.subVectors(e,f),h.cross(k),d[c.a].add(h),d[c.b].add(h),d[c.c].add(h)}else for(a=0,b=this.faces.length;a<b;a++)c=this.faces[a],d[c.a].add(c.normal),d[c.b].add(c.normal),d[c.c].add(c.normal);b=0;for(c=this.vertices.length;b<c;b++)d[b].normalize();a=0;for(b=this.faces.length;a<b;a++)c=this.faces[a],e=c.vertexNormals,3===e.length?
(e[0].copy(d[c.a]),e[1].copy(d[c.b]),e[2].copy(d[c.c])):(e[0]=d[c.a].clone(),e[1]=d[c.b].clone(),e[2]=d[c.c].clone());0<this.faces.length&&(this.normalsNeedUpdate=!0)},computeMorphNormals:function(){var a,b,c,d,e;c=0;for(d=this.faces.length;c<d;c++)for(e=this.faces[c],e.__originalFaceNormal?e.__originalFaceNormal.copy(e.normal):e.__originalFaceNormal=e.normal.clone(),e.__originalVertexNormals||(e.__originalVertexNormals=[]),a=0,b=e.vertexNormals.length;a<b;a++)e.__originalVertexNormals[a]?e.__originalVertexNormals[a].copy(e.vertexNormals[a]):
e.__originalVertexNormals[a]=e.vertexNormals[a].clone();var f=new THREE.Geometry;f.faces=this.faces;a=0;for(b=this.morphTargets.length;a<b;a++){if(!this.morphNormals[a]){this.morphNormals[a]={};this.morphNormals[a].faceNormals=[];this.morphNormals[a].vertexNormals=[];e=this.morphNormals[a].faceNormals;var g=this.morphNormals[a].vertexNormals,h,k;c=0;for(d=this.faces.length;c<d;c++)h=new THREE.Vector3,k={a:new THREE.Vector3,b:new THREE.Vector3,c:new THREE.Vector3},e.push(h),g.push(k)}g=this.morphNormals[a];
f.vertices=this.morphTargets[a].vertices;f.computeFaceNormals();f.computeVertexNormals();c=0;for(d=this.faces.length;c<d;c++)e=this.faces[c],h=g.faceNormals[c],k=g.vertexNormals[c],h.copy(e.normal),k.a.copy(e.vertexNormals[0]),k.b.copy(e.vertexNormals[1]),k.c.copy(e.vertexNormals[2])}c=0;for(d=this.faces.length;c<d;c++)e=this.faces[c],e.normal=e.__originalFaceNormal,e.vertexNormals=e.__originalVertexNormals},computeTangents:function(){console.warn("THREE.Geometry: .computeTangents() has been removed.")},
computeLineDistances:function(){for(var a=0,b=this.vertices,c=0,d=b.length;c<d;c++)0<c&&(a+=b[c].distanceTo(b[c-1])),this.lineDistances[c]=a},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new THREE.Box3);this.boundingBox.setFromPoints(this.vertices)},computeBoundingSphere:function(){null===this.boundingSphere&&(this.boundingSphere=new THREE.Sphere);this.boundingSphere.setFromPoints(this.vertices)},merge:function(a,b,c){if(!1===a instanceof THREE.Geometry)console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",
a);else{var d,e=this.vertices.length,f=this.vertices,g=a.vertices,h=this.faces,k=a.faces,l=this.faceVertexUvs[0];a=a.faceVertexUvs[0];void 0===c&&(c=0);void 0!==b&&(d=(new THREE.Matrix3).getNormalMatrix(b));for(var m=0,p=g.length;m<p;m++){var n=g[m].clone();void 0!==b&&n.applyMatrix4(b);f.push(n)}m=0;for(p=k.length;m<p;m++){var g=k[m],q,s=g.vertexNormals,u=g.vertexColors,n=new THREE.Face3(g.a+e,g.b+e,g.c+e);n.normal.copy(g.normal);void 0!==d&&n.normal.applyMatrix3(d).normalize();b=0;for(f=s.length;b<
f;b++)q=s[b].clone(),void 0!==d&&q.applyMatrix3(d).normalize(),n.vertexNormals.push(q);n.color.copy(g.color);b=0;for(f=u.length;b<f;b++)q=u[b],n.vertexColors.push(q.clone());n.materialIndex=g.materialIndex+c;h.push(n)}m=0;for(p=a.length;m<p;m++)if(c=a[m],d=[],void 0!==c){b=0;for(f=c.length;b<f;b++)d.push(c[b].clone());l.push(d)}}},mergeMesh:function(a){!1===a instanceof THREE.Mesh?console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.",a):(a.matrixAutoUpdate&&a.updateMatrix(),
this.merge(a.geometry,a.matrix))},mergeVertices:function(){var a={},b=[],c=[],d,e=Math.pow(10,4),f,g;f=0;for(g=this.vertices.length;f<g;f++)d=this.vertices[f],d=Math.round(d.x*e)+"_"+Math.round(d.y*e)+"_"+Math.round(d.z*e),void 0===a[d]?(a[d]=f,b.push(this.vertices[f]),c[f]=b.length-1):c[f]=c[a[d]];a=[];f=0;for(g=this.faces.length;f<g;f++)for(e=this.faces[f],e.a=c[e.a],e.b=c[e.b],e.c=c[e.c],e=[e.a,e.b,e.c],d=0;3>d;d++)if(e[d]===e[(d+1)%3]){a.push(f);break}for(f=a.length-1;0<=f;f--)for(e=a[f],this.faces.splice(e,
1),c=0,g=this.faceVertexUvs.length;c<g;c++)this.faceVertexUvs[c].splice(e,1);f=this.vertices.length-b.length;this.vertices=b;return f},sortFacesByMaterialIndex:function(){for(var a=this.faces,b=a.length,c=0;c<b;c++)a[c]._id=c;a.sort(function(a,b){return a.materialIndex-b.materialIndex});var d=this.faceVertexUvs[0],e=this.faceVertexUvs[1],f,g;d&&d.length===b&&(f=[]);e&&e.length===b&&(g=[]);for(c=0;c<b;c++){var h=a[c]._id;f&&f.push(d[h]);g&&g.push(e[h])}f&&(this.faceVertexUvs[0]=f);g&&(this.faceVertexUvs[1]=
g)},toJSON:function(){function a(a,b,c){return c?a|1<<b:a&~(1<<b)}function b(a){var b=a.x.toString()+a.y.toString()+a.z.toString();if(void 0!==l[b])return l[b];l[b]=k.length/3;k.push(a.x,a.y,a.z);return l[b]}function c(a){var b=a.r.toString()+a.g.toString()+a.b.toString();if(void 0!==p[b])return p[b];p[b]=m.length;m.push(a.getHex());return p[b]}function d(a){var b=a.x.toString()+a.y.toString();if(void 0!==q[b])return q[b];q[b]=n.length/2;n.push(a.x,a.y);return q[b]}var e={metadata:{version:4.4,type:"Geometry",
generator:"Geometry.toJSON"}};e.uuid=this.uuid;e.type=this.type;""!==this.name&&(e.name=this.name);if(void 0!==this.parameters){var f=this.parameters,g;for(g in f)void 0!==f[g]&&(e[g]=f[g]);return e}f=[];for(g=0;g<this.vertices.length;g++){var h=this.vertices[g];f.push(h.x,h.y,h.z)}var h=[],k=[],l={},m=[],p={},n=[],q={};for(g=0;g<this.faces.length;g++){var s=this.faces[g],u=void 0!==this.faceVertexUvs[0][g],t=0<s.normal.length(),w=0<s.vertexNormals.length,v=1!==s.color.r||1!==s.color.g||1!==s.color.b,
C=0<s.vertexColors.length,x=0,x=a(x,0,0),x=a(x,1,!0),x=a(x,2,!1),x=a(x,3,u),x=a(x,4,t),x=a(x,5,w),x=a(x,6,v),x=a(x,7,C);h.push(x);h.push(s.a,s.b,s.c);h.push(s.materialIndex);u&&(u=this.faceVertexUvs[0][g],h.push(d(u[0]),d(u[1]),d(u[2])));t&&h.push(b(s.normal));w&&(t=s.vertexNormals,h.push(b(t[0]),b(t[1]),b(t[2])));v&&h.push(c(s.color));C&&(s=s.vertexColors,h.push(c(s[0]),c(s[1]),c(s[2])))}e.data={};e.data.vertices=f;e.data.normals=k;0<m.length&&(e.data.colors=m);0<n.length&&(e.data.uvs=[n]);e.data.faces=
h;return e},clone:function(){return(new THREE.Geometry).copy(this)},copy:function(a){this.vertices=[];this.faces=[];this.faceVertexUvs=[[]];for(var b=a.vertices,c=0,d=b.length;c<d;c++)this.vertices.push(b[c].clone());b=a.faces;c=0;for(d=b.length;c<d;c++)this.faces.push(b[c].clone());c=0;for(d=a.faceVertexUvs.length;c<d;c++){b=a.faceVertexUvs[c];void 0===this.faceVertexUvs[c]&&(this.faceVertexUvs[c]=[]);for(var e=0,f=b.length;e<f;e++){for(var g=b[e],h=[],k=0,l=g.length;k<l;k++)h.push(g[k].clone());
this.faceVertexUvs[c].push(h)}}return this},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.Geometry.prototype);THREE.GeometryIdCount=0;
THREE.DirectGeometry=function(){Object.defineProperty(this,"id",{value:THREE.GeometryIdCount++});this.uuid=THREE.Math.generateUUID();this.name="";this.type="DirectGeometry";this.indices=[];this.vertices=[];this.normals=[];this.colors=[];this.uvs=[];this.uvs2=[];this.groups=[];this.morphTargets={};this.skinWeights=[];this.skinIndices=[];this.boundingSphere=this.boundingBox=null;this.groupsNeedUpdate=this.uvsNeedUpdate=this.colorsNeedUpdate=this.normalsNeedUpdate=this.verticesNeedUpdate=!1};
THREE.DirectGeometry.prototype={constructor:THREE.DirectGeometry,computeBoundingBox:THREE.Geometry.prototype.computeBoundingBox,computeBoundingSphere:THREE.Geometry.prototype.computeBoundingSphere,computeFaceNormals:function(){console.warn("THREE.DirectGeometry: computeFaceNormals() is not a method of this type of geometry.")},computeVertexNormals:function(){console.warn("THREE.DirectGeometry: computeVertexNormals() is not a method of this type of geometry.")},computeGroups:function(a){var b,c=[],
d;a=a.faces;for(var e=0;e<a.length;e++){var f=a[e];f.materialIndex!==d&&(d=f.materialIndex,void 0!==b&&(b.count=3*e-b.start,c.push(b)),b={start:3*e,materialIndex:d})}void 0!==b&&(b.count=3*e-b.start,c.push(b));this.groups=c},fromGeometry:function(a){var b=a.faces,c=a.vertices,d=a.faceVertexUvs,e=d[0]&&0<d[0].length,f=d[1]&&0<d[1].length,g=a.morphTargets,h=g.length,k;if(0<h){k=[];for(var l=0;l<h;l++)k[l]=[];this.morphTargets.position=k}var m=a.morphNormals,p=m.length,n;if(0<p){n=[];for(l=0;l<p;l++)n[l]=
[];this.morphTargets.normal=n}for(var q=a.skinIndices,s=a.skinWeights,u=q.length===c.length,t=s.length===c.length,l=0;l<b.length;l++){var w=b[l];this.vertices.push(c[w.a],c[w.b],c[w.c]);var v=w.vertexNormals;3===v.length?this.normals.push(v[0],v[1],v[2]):(v=w.normal,this.normals.push(v,v,v));v=w.vertexColors;3===v.length?this.colors.push(v[0],v[1],v[2]):(v=w.color,this.colors.push(v,v,v));!0===e&&(v=d[0][l],void 0!==v?this.uvs.push(v[0],v[1],v[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ",
l),this.uvs.push(new THREE.Vector2,new THREE.Vector2,new THREE.Vector2)));!0===f&&(v=d[1][l],void 0!==v?this.uvs2.push(v[0],v[1],v[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ",l),this.uvs2.push(new THREE.Vector2,new THREE.Vector2,new THREE.Vector2)));for(v=0;v<h;v++){var C=g[v].vertices;k[v].push(C[w.a],C[w.b],C[w.c])}for(v=0;v<p;v++)C=m[v].vertexNormals[l],n[v].push(C.a,C.b,C.c);u&&this.skinIndices.push(q[w.a],q[w.b],q[w.c]);t&&this.skinWeights.push(s[w.a],s[w.b],
s[w.c])}this.computeGroups(a);this.verticesNeedUpdate=a.verticesNeedUpdate;this.normalsNeedUpdate=a.normalsNeedUpdate;this.colorsNeedUpdate=a.colorsNeedUpdate;this.uvsNeedUpdate=a.uvsNeedUpdate;this.groupsNeedUpdate=a.groupsNeedUpdate;return this},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.DirectGeometry.prototype);
THREE.BufferGeometry=function(){Object.defineProperty(this,"id",{value:THREE.GeometryIdCount++});this.uuid=THREE.Math.generateUUID();this.name="";this.type="BufferGeometry";this.index=null;this.attributes={};this.morphAttributes={};this.groups=[];this.boundingSphere=this.boundingBox=null;this.drawRange={start:0,count:Infinity}};
THREE.BufferGeometry.prototype={constructor:THREE.BufferGeometry,getIndex:function(){return this.index},setIndex:function(a){this.index=a},addAttribute:function(a,b,c){!1===b instanceof THREE.BufferAttribute&&!1===b instanceof THREE.InterleavedBufferAttribute?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.addAttribute(a,new THREE.BufferAttribute(b,c))):"index"===a?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),
this.setIndex(b)):this.attributes[a]=b},getAttribute:function(a){return this.attributes[a]},removeAttribute:function(a){delete this.attributes[a]},addGroup:function(a,b,c){this.groups.push({start:a,count:b,materialIndex:void 0!==c?c:0})},clearGroups:function(){this.groups=[]},setDrawRange:function(a,b){this.drawRange.start=a;this.drawRange.count=b},applyMatrix:function(a){var b=this.attributes.position;void 0!==b&&(a.applyToVector3Array(b.array),b.needsUpdate=!0);b=this.attributes.normal;void 0!==
b&&((new THREE.Matrix3).getNormalMatrix(a).applyToVector3Array(b.array),b.needsUpdate=!0);null!==this.boundingBox&&this.computeBoundingBox();null!==this.boundingSphere&&this.computeBoundingSphere()},rotateX:function(){var a;return function(b){void 0===a&&(a=new THREE.Matrix4);a.makeRotationX(b);this.applyMatrix(a);return this}}(),rotateY:function(){var a;return function(b){void 0===a&&(a=new THREE.Matrix4);a.makeRotationY(b);this.applyMatrix(a);return this}}(),rotateZ:function(){var a;return function(b){void 0===
a&&(a=new THREE.Matrix4);a.makeRotationZ(b);this.applyMatrix(a);return this}}(),translate:function(){var a;return function(b,c,d){void 0===a&&(a=new THREE.Matrix4);a.makeTranslation(b,c,d);this.applyMatrix(a);return this}}(),scale:function(){var a;return function(b,c,d){void 0===a&&(a=new THREE.Matrix4);a.makeScale(b,c,d);this.applyMatrix(a);return this}}(),lookAt:function(){var a;return function(b){void 0===a&&(a=new THREE.Object3D);a.lookAt(b);a.updateMatrix();this.applyMatrix(a.matrix)}}(),center:function(){this.computeBoundingBox();
var a=this.boundingBox.center().negate();this.translate(a.x,a.y,a.z);return a},setFromObject:function(a){var b=a.geometry;if(a instanceof THREE.Points||a instanceof THREE.Line){a=new THREE.Float32Attribute(3*b.vertices.length,3);var c=new THREE.Float32Attribute(3*b.colors.length,3);this.addAttribute("position",a.copyVector3sArray(b.vertices));this.addAttribute("color",c.copyColorsArray(b.colors));b.lineDistances&&b.lineDistances.length===b.vertices.length&&(a=new THREE.Float32Attribute(b.lineDistances.length,
1),this.addAttribute("lineDistance",a.copyArray(b.lineDistances)));null!==b.boundingSphere&&(this.boundingSphere=b.boundingSphere.clone());null!==b.boundingBox&&(this.boundingBox=b.boundingBox.clone())}else a instanceof THREE.Mesh&&b instanceof THREE.Geometry&&this.fromGeometry(b);return this},updateFromObject:function(a){var b=a.geometry;if(a instanceof THREE.Mesh){var c=b.__directGeometry;if(void 0===c)return this.fromGeometry(b);c.verticesNeedUpdate=b.verticesNeedUpdate;c.normalsNeedUpdate=b.normalsNeedUpdate;
c.colorsNeedUpdate=b.colorsNeedUpdate;c.uvsNeedUpdate=b.uvsNeedUpdate;c.groupsNeedUpdate=b.groupsNeedUpdate;b.verticesNeedUpdate=!1;b.normalsNeedUpdate=!1;b.colorsNeedUpdate=!1;b.uvsNeedUpdate=!1;b.groupsNeedUpdate=!1;b=c}!0===b.verticesNeedUpdate&&(c=this.attributes.position,void 0!==c&&(c.copyVector3sArray(b.vertices),c.needsUpdate=!0),b.verticesNeedUpdate=!1);!0===b.normalsNeedUpdate&&(c=this.attributes.normal,void 0!==c&&(c.copyVector3sArray(b.normals),c.needsUpdate=!0),b.normalsNeedUpdate=!1);
!0===b.colorsNeedUpdate&&(c=this.attributes.color,void 0!==c&&(c.copyColorsArray(b.colors),c.needsUpdate=!0),b.colorsNeedUpdate=!1);b.uvsNeedUpdate&&(c=this.attributes.uv,void 0!==c&&(c.copyVector2sArray(b.uvs),c.needsUpdate=!0),b.uvsNeedUpdate=!1);b.lineDistancesNeedUpdate&&(c=this.attributes.lineDistance,void 0!==c&&(c.copyArray(b.lineDistances),c.needsUpdate=!0),b.lineDistancesNeedUpdate=!1);b.groupsNeedUpdate&&(b.computeGroups(a.geometry),this.groups=b.groups,b.groupsNeedUpdate=!1);return this},
fromGeometry:function(a){a.__directGeometry=(new THREE.DirectGeometry).fromGeometry(a);return this.fromDirectGeometry(a.__directGeometry)},fromDirectGeometry:function(a){var b=new Float32Array(3*a.vertices.length);this.addAttribute("position",(new THREE.BufferAttribute(b,3)).copyVector3sArray(a.vertices));0<a.normals.length&&(b=new Float32Array(3*a.normals.length),this.addAttribute("normal",(new THREE.BufferAttribute(b,3)).copyVector3sArray(a.normals)));0<a.colors.length&&(b=new Float32Array(3*a.colors.length),
this.addAttribute("color",(new THREE.BufferAttribute(b,3)).copyColorsArray(a.colors)));0<a.uvs.length&&(b=new Float32Array(2*a.uvs.length),this.addAttribute("uv",(new THREE.BufferAttribute(b,2)).copyVector2sArray(a.uvs)));0<a.uvs2.length&&(b=new Float32Array(2*a.uvs2.length),this.addAttribute("uv2",(new THREE.BufferAttribute(b,2)).copyVector2sArray(a.uvs2)));0<a.indices.length&&(b=new (65535<a.vertices.length?Uint32Array:Uint16Array)(3*a.indices.length),this.setIndex((new THREE.BufferAttribute(b,
1)).copyIndicesArray(a.indices)));this.groups=a.groups;for(var c in a.morphTargets){for(var b=[],d=a.morphTargets[c],e=0,f=d.length;e<f;e++){var g=d[e],h=new THREE.Float32Attribute(3*g.length,3);b.push(h.copyVector3sArray(g))}this.morphAttributes[c]=b}0<a.skinIndices.length&&(c=new THREE.Float32Attribute(4*a.skinIndices.length,4),this.addAttribute("skinIndex",c.copyVector4sArray(a.skinIndices)));0<a.skinWeights.length&&(c=new THREE.Float32Attribute(4*a.skinWeights.length,4),this.addAttribute("skinWeight",
c.copyVector4sArray(a.skinWeights)));null!==a.boundingSphere&&(this.boundingSphere=a.boundingSphere.clone());null!==a.boundingBox&&(this.boundingBox=a.boundingBox.clone());return this},computeBoundingBox:function(){new THREE.Vector3;return function(){null===this.boundingBox&&(this.boundingBox=new THREE.Box3);var a=this.attributes.position.array;a&&this.boundingBox.setFromArray(a);if(void 0===a||0===a.length)this.boundingBox.min.set(0,0,0),this.boundingBox.max.set(0,0,0);(isNaN(this.boundingBox.min.x)||
isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}}(),computeBoundingSphere:function(){var a=new THREE.Box3,b=new THREE.Vector3;return function(){null===this.boundingSphere&&(this.boundingSphere=new THREE.Sphere);var c=this.attributes.position.array;if(c){var d=this.boundingSphere.center;a.setFromArray(c);a.center(d);for(var e=0,f=0,g=
c.length;f<g;f+=3)b.fromArray(c,f),e=Math.max(e,d.distanceToSquared(b));this.boundingSphere.radius=Math.sqrt(e);isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}}(),computeFaceNormals:function(){},computeVertexNormals:function(){var a=this.index,b=this.attributes,c=this.groups;if(b.position){var d=b.position.array;if(void 0===b.normal)this.addAttribute("normal",new THREE.BufferAttribute(new Float32Array(d.length),
3));else for(var e=b.normal.array,f=0,g=e.length;f<g;f++)e[f]=0;var e=b.normal.array,h,k,l,m=new THREE.Vector3,p=new THREE.Vector3,n=new THREE.Vector3,q=new THREE.Vector3,s=new THREE.Vector3;if(a){a=a.array;0===c.length&&this.addGroup(0,a.length);for(var u=0,t=c.length;u<t;++u)for(f=c[u],g=f.start,h=f.count,f=g,g+=h;f<g;f+=3)h=3*a[f+0],k=3*a[f+1],l=3*a[f+2],m.fromArray(d,h),p.fromArray(d,k),n.fromArray(d,l),q.subVectors(n,p),s.subVectors(m,p),q.cross(s),e[h]+=q.x,e[h+1]+=q.y,e[h+2]+=q.z,e[k]+=q.x,
e[k+1]+=q.y,e[k+2]+=q.z,e[l]+=q.x,e[l+1]+=q.y,e[l+2]+=q.z}else for(f=0,g=d.length;f<g;f+=9)m.fromArray(d,f),p.fromArray(d,f+3),n.fromArray(d,f+6),q.subVectors(n,p),s.subVectors(m,p),q.cross(s),e[f]=q.x,e[f+1]=q.y,e[f+2]=q.z,e[f+3]=q.x,e[f+4]=q.y,e[f+5]=q.z,e[f+6]=q.x,e[f+7]=q.y,e[f+8]=q.z;this.normalizeNormals();b.normal.needsUpdate=!0}},merge:function(a,b){if(!1===a instanceof THREE.BufferGeometry)console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",a);
else{void 0===b&&(b=0);var c=this.attributes,d;for(d in c)if(void 0!==a.attributes[d])for(var e=c[d].array,f=a.attributes[d],g=f.array,h=0,f=f.itemSize*b;h<g.length;h++,f++)e[f]=g[h];return this}},normalizeNormals:function(){for(var a=this.attributes.normal.array,b,c,d,e=0,f=a.length;e<f;e+=3)b=a[e],c=a[e+1],d=a[e+2],b=1/Math.sqrt(b*b+c*c+d*d),a[e]*=b,a[e+1]*=b,a[e+2]*=b},toJSON:function(){var a={metadata:{version:4.4,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};a.uuid=this.uuid;a.type=
this.type;""!==this.name&&(a.name=this.name);if(void 0!==this.parameters){var b=this.parameters,c;for(c in b)void 0!==b[c]&&(a[c]=b[c]);return a}a.data={attributes:{}};var d=this.index;null!==d&&(b=Array.prototype.slice.call(d.array),a.data.index={type:d.array.constructor.name,array:b});d=this.attributes;for(c in d){var e=d[c],b=Array.prototype.slice.call(e.array);a.data.attributes[c]={itemSize:e.itemSize,type:e.array.constructor.name,array:b}}c=this.groups;0<c.length&&(a.data.groups=JSON.parse(JSON.stringify(c)));
c=this.boundingSphere;null!==c&&(a.data.boundingSphere={center:c.center.toArray(),radius:c.radius});return a},clone:function(){return(new THREE.BufferGeometry).copy(this)},copy:function(a){var b=a.index;null!==b&&this.setIndex(b.clone());var b=a.attributes,c;for(c in b)this.addAttribute(c,b[c].clone());a=a.groups;c=0;for(b=a.length;c<b;c++){var d=a[c];this.addGroup(d.start,d.count)}return this},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.BufferGeometry.prototype);
THREE.BufferGeometry.MaxIndex=65535;THREE.InstancedBufferGeometry=function(){THREE.BufferGeometry.call(this);this.type="InstancedBufferGeometry";this.maxInstancedCount=void 0};THREE.InstancedBufferGeometry.prototype=Object.create(THREE.BufferGeometry.prototype);THREE.InstancedBufferGeometry.prototype.constructor=THREE.InstancedBufferGeometry;THREE.InstancedBufferGeometry.prototype.addGroup=function(a,b,c){this.groups.push({start:a,count:b,instances:c})};
THREE.InstancedBufferGeometry.prototype.copy=function(a){var b=a.index;null!==b&&this.setIndex(b.clone());var b=a.attributes,c;for(c in b)this.addAttribute(c,b[c].clone());a=a.groups;c=0;for(b=a.length;c<b;c++){var d=a[c];this.addGroup(d.start,d.count,d.instances)}return this};THREE.EventDispatcher.prototype.apply(THREE.InstancedBufferGeometry.prototype);THREE.Uniform=function(a,b){this.type=a;this.value=b;this.dynamic=!1};
THREE.Uniform.prototype={constructor:THREE.Uniform,onUpdate:function(a){this.dynamic=!0;this.onUpdateCallback=a;return this}};THREE.AnimationClip=function(a,b,c){this.name=a||THREE.Math.generateUUID();this.tracks=c;this.duration=void 0!==b?b:-1;0>this.duration&&this.resetDuration();this.trim();this.optimize()};
THREE.AnimationClip.prototype={constructor:THREE.AnimationClip,resetDuration:function(){for(var a=0,b=0,c=this.tracks.length;b!==c;++b)var d=this.tracks[b],a=Math.max(a,d.times[d.times.length-1]);this.duration=a},trim:function(){for(var a=0;a<this.tracks.length;a++)this.tracks[a].trim(0,this.duration);return this},optimize:function(){for(var a=0;a<this.tracks.length;a++)this.tracks[a].optimize();return this}};
Object.assign(THREE.AnimationClip,{parse:function(a){for(var b=[],c=a.tracks,d=1/(a.fps||1),e=0,f=c.length;e!==f;++e)b.push(THREE.KeyframeTrack.parse(c[e]).scale(d));return new THREE.AnimationClip(a.name,a.duration,b)},toJSON:function(a){var b=[],c=a.tracks;a={name:a.name,duration:a.duration,tracks:b};for(var d=0,e=c.length;d!==e;++d)b.push(THREE.KeyframeTrack.toJSON(c[d]));return a},CreateFromMorphTargetSequence:function(a,b,c){for(var d=b.length,e=[],f=0;f<d;f++){var g=[],h=[];g.push((f+d-1)%d,
f,(f+1)%d);h.push(0,1,0);var k=THREE.AnimationUtils.getKeyframeOrder(g),g=THREE.AnimationUtils.sortedArray(g,1,k),h=THREE.AnimationUtils.sortedArray(h,1,k);0===g[0]&&(g.push(d),h.push(h[0]));e.push((new THREE.NumberKeyframeTrack(".morphTargetInfluences["+b[f].name+"]",g,h)).scale(1/c))}return new THREE.AnimationClip(a,-1,e)},findByName:function(a,b){for(var c=0;c<a.length;c++)if(a[c].name===b)return a[c];return null},CreateClipsFromMorphTargetSequences:function(a,b){for(var c={},d=/^([\w-]*?)([\d]+)$/,
e=0,f=a.length;e<f;e++){var g=a[e],h=g.name.match(d);if(h&&1<h.length){var k=h[1];(h=c[k])||(c[k]=h=[]);h.push(g)}}d=[];for(k in c)d.push(THREE.AnimationClip.CreateFromMorphTargetSequence(k,c[k],b));return d},parseAnimation:function(a,b,c){if(!a)return console.error("  no animation in JSONLoader data"),null;c=function(a,b,c,d,e){if(0!==c.length){var f=[],g=[];THREE.AnimationUtils.flattenJSON(c,f,g,d);0!==f.length&&e.push(new a(b,f,g))}};var d=[],e=a.name||"default",f=a.length||-1,g=a.fps||30;a=a.hierarchy||
[];for(var h=0;h<a.length;h++){var k=a[h].keys;if(k&&0!=k.length)if(k[0].morphTargets){for(var f={},l=0;l<k.length;l++)if(k[l].morphTargets)for(var m=0;m<k[l].morphTargets.length;m++)f[k[l].morphTargets[m]]=-1;for(var p in f){for(var n=[],q=[],m=0;m!==k[l].morphTargets.length;++m){var s=k[l];n.push(s.time);q.push(s.morphTarget===p?1:0)}d.push(new THREE.NumberKeyframeTrack(".morphTargetInfluence["+p+"]",n,q))}f=f.length*(g||1)}else l=".bones["+b[h].name+"]",c(THREE.VectorKeyframeTrack,l+".position",
k,"pos",d),c(THREE.QuaternionKeyframeTrack,l+".quaternion",k,"rot",d),c(THREE.VectorKeyframeTrack,l+".scale",k,"scl",d)}return 0===d.length?null:new THREE.AnimationClip(e,f,d)}});THREE.AnimationMixer=function(a){this._root=a;this._initMemoryManager();this.time=this._accuIndex=0;this.timeScale=1};
THREE.AnimationMixer.prototype={constructor:THREE.AnimationMixer,clipAction:function(a,b){var c=(b||this._root).uuid,d="string"===typeof a?a:a.name,e=a!==d?a:null,f=this._actionsByClip[d],g;if(void 0!==f){g=f.actionByRoot[c];if(void 0!==g)return g;g=f.knownActions[0];e=g._clip;if(a!==d&&a!==e)throw Error("Different clips with the same name detected!");}if(null===e)return null;f=new THREE.AnimationMixer._Action(this,e,b);this._bindAction(f,g);this._addInactiveAction(f,d,c);return f},existingAction:function(a,
b){var c=(b||this._root).uuid,d=this._actionsByClip["string"===typeof a?a:a.name];return void 0!==d?d.actionByRoot[c]||null:null},stopAllAction:function(){for(var a=this._actions,b=this._nActiveActions,c=this._bindings,d=this._nActiveBindings,e=this._nActiveBindings=this._nActiveActions=0;e!==b;++e)a[e].reset();for(e=0;e!==d;++e)c[e].useCount=0;return this},update:function(a){a*=this.timeScale;for(var b=this._actions,c=this._nActiveActions,d=this.time+=a,e=Math.sign(a),f=this._accuIndex^=1,g=0;g!==
c;++g){var h=b[g];h.enabled&&h._update(d,a,e,f)}a=this._bindings;b=this._nActiveBindings;for(g=0;g!==b;++g)a[g].apply(f);return this},getRoot:function(){return this._root},uncacheClip:function(a){var b=this._actions;a=a.name;var c=this._actionsByClip,d=c[a];if(void 0!==d){for(var d=d.knownActions,e=0,f=d.length;e!==f;++e){var g=d[e];this._deactivateAction(g);var h=g._cacheIndex,k=b[b.length-1];g._cacheIndex=null;g._byClipCacheIndex=null;k._cacheIndex=h;b[h]=k;b.pop();this._removeInactiveBindingsForAction(g)}delete c[a]}},
uncacheRoot:function(a){a=a.uuid;var b=this._actionsByClip,c;for(c in b){var d=b[c].actionByRoot[a];void 0!==d&&(this._deactivateAction(d),this._removeInactiveAction(d))}c=this._bindingsByRootAndName[a];if(void 0!==c)for(var e in c)a=c[e],a.restoreOriginalState(),this._removeInactiveBinding(a)},uncacheAction:function(a,b){var c=this.existingAction(a,b);null!==c&&(this._deactivateAction(c),this._removeInactiveAction(c))}};THREE.EventDispatcher.prototype.apply(THREE.AnimationMixer.prototype);
THREE.AnimationMixer._Action=function(a,b,c){this._mixer=a;this._clip=b;this._localRoot=c||null;a=b.tracks;b=a.length;c=Array(b);for(var d={endingStart:THREE.ZeroCurvatureEnding,endingEnd:THREE.ZeroCurvatureEnding},e=0;e!==b;++e){var f=a[e].createInterpolant(null);c[e]=f;f.settings=d}this._interpolantSettings=d;this._interpolants=c;this._propertyBindings=Array(b);this._weightInterpolant=this._timeScaleInterpolant=this._byClipCacheIndex=this._cacheIndex=null;this.loop=THREE.LoopRepeat;this._loopCount=
-1;this._startTime=null;this.time=0;this._effectiveWeight=this.weight=this._effectiveTimeScale=this.timeScale=1;this.repetitions=Infinity;this.paused=!1;this.enabled=!0;this.clampWhenFinished=!1;this.zeroSlopeAtEnd=this.zeroSlopeAtStart=!0};
THREE.AnimationMixer._Action.prototype={constructor:THREE.AnimationMixer._Action,play:function(){this._mixer._activateAction(this);return this},stop:function(){this._mixer._deactivateAction(this);return this.reset()},reset:function(){this.paused=!1;this.enabled=!0;this.time=0;this._loopCount=-1;this._startTime=null;return this.stopFading().stopWarping()},isRunning:function(){return this.enabled&&!this.paused&&0!==this.timeScale&&null===this._startTime&&this._mixer._isActiveAction(this)},isScheduled:function(){return this._mixer._isActiveAction(this)},
startAt:function(a){this._startTime=a;return this},setLoop:function(a,b){this.loop=a;this.repetitions=b;return this},setEffectiveWeight:function(a){this.weight=a;this._effectiveWeight=this.enabled?a:0;return this.stopFading()},getEffectiveWeight:function(){return this._effectiveWeight},fadeIn:function(a){return this._scheduleFading(a,0,1)},fadeOut:function(a){return this._scheduleFading(a,1,0)},crossFadeFrom:function(a,b,c){a.fadeOut(b);this.fadeIn(b);if(c){c=this._clip.duration;var d=a._clip.duration,
e=c/d;a.warp(1,d/c,b);this.warp(e,1,b)}return this},crossFadeTo:function(a,b,c){return a.crossFadeFrom(this,b,c)},stopFading:function(){var a=this._weightInterpolant;null!==a&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(a));return this},setEffectiveTimeScale:function(a){this.timeScale=a;this._effectiveTimeScale=this.paused?0:a;return this.stopWarping()},getEffectiveTimeScale:function(){return this._effectiveTimeScale},setDuration:function(a){this.timeScale=this._clip.duration/
a;return this.stopWarping()},syncWith:function(a){this.time=a.time;this.timeScale=a.timeScale;return this.stopWarping()},halt:function(a){return this.warp(this._currentTimeScale,0,a)},warp:function(a,b,c){var d=this._mixer,e=d.time,f=this._timeScaleInterpolant,g=this.timeScale;null===f&&(this._timeScaleInterpolant=f=d._lendControlInterpolant());d=f.parameterPositions;f=f.sampleValues;d[0]=e;d[1]=e+c;f[0]=a/g;f[1]=b/g;return this},stopWarping:function(){var a=this._timeScaleInterpolant;null!==a&&(this._timeScaleInterpolant=
null,this._mixer._takeBackControlInterpolant(a));return this},getMixer:function(){return this._mixer},getClip:function(){return this._clip},getRoot:function(){return this._localRoot||this._mixer._root},_update:function(a,b,c,d){var e=this._startTime;if(null!==e){b=(a-e)*c;if(0>b||0===c)return;this._startTime=null;b*=c}b*=this._updateTimeScale(a);c=this._updateTime(b);a=this._updateWeight(a);if(0<a){b=this._interpolants;for(var e=this._propertyBindings,f=0,g=b.length;f!==g;++f)b[f].evaluate(c),e[f].accumulate(d,
a)}},_updateWeight:function(a){var b=0;if(this.enabled){var b=this.weight,c=this._weightInterpolant;if(null!==c){var d=c.evaluate(a)[0],b=b*d;a>c.parameterPositions[1]&&(this.stopFading(),0===d&&(this.enabled=!1))}}return this._effectiveWeight=b},_updateTimeScale:function(a){var b=0;if(!this.paused){var b=this.timeScale,c=this._timeScaleInterpolant;if(null!==c){var d=c.evaluate(a)[0],b=b*d;a>c.parameterPositions[1]&&(this.stopWarping(),0===b?this.pause=!0:this.timeScale=b)}}return this._effectiveTimeScale=
b},_updateTime:function(a){var b=this.time+a;if(0===a)return b;var c=this._clip.duration,d=this.loop,e=this._loopCount,f=!1;switch(d){case THREE.LoopOnce:-1===e&&(this.loopCount=0,this._setEndings(!0,!0,!1));if(b>=c)b=c;else if(0>b)b=0;else break;this.clampWhenFinished?this.pause=!0:this.enabled=!1;this._mixer.dispatchEvent({type:"finished",action:this,direction:0>a?-1:1});break;case THREE.LoopPingPong:f=!0;case THREE.LoopRepeat:-1===e&&(0<a?(e=0,this._setEndings(!0,0===this.repetitions,f)):this._setEndings(0===
this.repetitions,!0,f));if(b>=c||0>b){var g=Math.floor(b/c),b=b-c*g,e=e+Math.abs(g),h=this.repetitions-e;if(0>h){this.clampWhenFinished?this.paused=!0:this.enabled=!1;b=0<a?c:0;this._mixer.dispatchEvent({type:"finished",action:this,direction:0<a?1:-1});break}else 0===h?(a=0>a,this._setEndings(a,!a,f)):this._setEndings(!1,!1,f);this._loopCount=e;this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:g})}if(d===THREE.LoopPingPong&&1===(e&1))return this.time=b,c-b}return this.time=b},_setEndings:function(a,
b,c){var d=this._interpolantSettings;c?(d.endingStart=THREE.ZeroSlopeEnding,d.endingEnd=THREE.ZeroSlopeEnding):(d.endingStart=a?this.zeroSlopeAtStart?THREE.ZeroSlopeEnding:THREE.ZeroCurvatureEnding:THREE.WrapAroundEnding,d.endingEnd=b?this.zeroSlopeAtEnd?THREE.ZeroSlopeEnding:THREE.ZeroCurvatureEnding:THREE.WrapAroundEnding)},_scheduleFading:function(a,b,c){var d=this._mixer,e=d.time,f=this._weightInterpolant;null===f&&(this._weightInterpolant=f=d._lendControlInterpolant());d=f.parameterPositions;
f=f.sampleValues;d[0]=e;f[0]=b;d[1]=e+a;f[1]=c;return this}};
Object.assign(THREE.AnimationMixer.prototype,{_bindAction:function(a,b){var c=a._localRoot||this._root,d=a._clip.tracks,e=d.length,f=a._propertyBindings,g=a._interpolants,h=c.uuid,k=this._bindingsByRootAndName,l=k[h];void 0===l&&(l={},k[h]=l);for(k=0;k!==e;++k){var m=d[k],p=m.name,n=l[p];if(void 0===n){n=f[k];if(void 0!==n){null===n._cacheIndex&&(++n.referenceCount,this._addInactiveBinding(n,h,p));continue}n=new THREE.PropertyMixer(THREE.PropertyBinding.create(c,p,b&&b._propertyBindings[k].binding.parsedPath),
m.ValueTypeName,m.getValueSize());++n.referenceCount;this._addInactiveBinding(n,h,p)}f[k]=n;g[k].resultBuffer=n.buffer}},_activateAction:function(a){if(!this._isActiveAction(a)){if(null===a._cacheIndex){var b=(a._localRoot||this._root).uuid,c=a._clip.name,d=this._actionsByClip[c];this._bindAction(a,d&&d.knownActions[0]);this._addInactiveAction(a,c,b)}b=a._propertyBindings;c=0;for(d=b.length;c!==d;++c){var e=b[c];0===e.useCount++&&(this._lendBinding(e),e.saveOriginalState())}this._lendAction(a)}},
_deactivateAction:function(a){if(this._isActiveAction(a)){for(var b=a._propertyBindings,c=0,d=b.length;c!==d;++c){var e=b[c];0===--e.useCount&&(e.restoreOriginalState(),this._takeBackBinding(e))}this._takeBackAction(a)}},_initMemoryManager:function(){this._actions=[];this._nActiveActions=0;this._actionsByClip={};this._bindings=[];this._nActiveBindings=0;this._bindingsByRootAndName={};this._controlInterpolants=[];this._nActiveControlInterpolants=0;var a=this;this.stats={actions:{get total(){return a._actions.length},
get inUse(){return a._nActiveActions}},bindings:{get total(){return a._bindings.length},get inUse(){return a._nActiveBindings}},controlInterpolants:{get total(){return a._controlInterpolants.length},get inUse(){return a._nActiveControlInterpolants}}}},_isActiveAction:function(a){a=a._cacheIndex;return null!==a&&a<this._nActiveActions},_addInactiveAction:function(a,b,c){var d=this._actions,e=this._actionsByClip,f=e[b];void 0===f?(f={knownActions:[a],actionByRoot:{}},a._byClipCacheIndex=0,e[b]=f):(b=
f.knownActions,a._byClipCacheIndex=b.length,b.push(a));a._cacheIndex=d.length;d.push(a);f.actionByRoot[c]=a},_removeInactiveAction:function(a){var b=this._actions,c=b[b.length-1],d=a._cacheIndex;c._cacheIndex=d;b[d]=c;b.pop();a._cacheIndex=null;var c=a._clip.name,d=this._actionsByClip,e=d[c],f=e.knownActions,g=f[f.length-1],h=a._byClipCacheIndex;g._byClipCacheIndex=h;f[h]=g;f.pop();a._byClipCacheIndex=null;delete e.actionByRoot[(b._localRoot||this._root).uuid];0===f.length&&delete d[c];this._removeInactiveBindingsForAction(a)},
_removeInactiveBindingsForAction:function(a){a=a._propertyBindings;for(var b=0,c=a.length;b!==c;++b){var d=a[b];0===--d.referenceCount&&this._removeInactiveBinding(d)}},_lendAction:function(a){var b=this._actions,c=a._cacheIndex,d=this._nActiveActions++,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e},_takeBackAction:function(a){var b=this._actions,c=a._cacheIndex,d=--this._nActiveActions,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e},_addInactiveBinding:function(a,b,c){var d=this._bindingsByRootAndName,
e=d[b],f=this._bindings;void 0===e&&(e={},d[b]=e);e[c]=a;a._cacheIndex=f.length;f.push(a)},_removeInactiveBinding:function(a){var b=this._bindings,c=a.binding,d=c.rootNode.uuid,c=c.path,e=this._bindingsByRootAndName,f=e[d],g=b[b.length-1];a=a._cacheIndex;g._cacheIndex=a;b[a]=g;b.pop();delete f[c];a:{for(var h in f)break a;delete e[d]}},_lendBinding:function(a){var b=this._bindings,c=a._cacheIndex,d=this._nActiveBindings++,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e},_takeBackBinding:function(a){var b=
this._bindings,c=a._cacheIndex,d=--this._nActiveBindings,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e},_lendControlInterpolant:function(){var a=this._controlInterpolants,b=this._nActiveControlInterpolants++,c=a[b];void 0===c&&(c=new THREE.LinearInterpolant(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),c.__cacheIndex=b,a[b]=c);return c},_takeBackControlInterpolant:function(a){var b=this._controlInterpolants,c=a.__cacheIndex,d=--this._nActiveControlInterpolants,
e=b[d];a.__cacheIndex=d;b[d]=a;e.__cacheIndex=c;b[c]=e},_controlInterpolantsResultBuffer:new Float32Array(1)});
THREE.AnimationObjectGroup=function(a){this.uuid=THREE.Math.generateUUID();this._objects=Array.prototype.slice.call(arguments);this.nCachedObjects_=0;var b={};this._indicesByUUID=b;for(var c=0,d=arguments.length;c!==d;++c)b[arguments[c].uuid]=c;this._paths=[];this._parsedPaths=[];this._bindings=[];this._bindingsIndicesByPath={};var e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}};
THREE.AnimationObjectGroup.prototype={constructor:THREE.AnimationObjectGroup,add:function(a){for(var b=this._objects,c=b.length,d=this.nCachedObjects_,e=this._indicesByUUID,f=this._paths,g=this._parsedPaths,h=this._bindings,k=h.length,l=0,m=arguments.length;l!==m;++l){var p=arguments[l],n=p.uuid,q=e[n];if(void 0===q){q=c++;e[n]=q;b.push(p);for(var n=0,s=k;n!==s;++n)h[n].push(new THREE.PropertyBinding(p,f[n],g[n]))}else if(q<d){var u=b[q],t=--d,s=b[t];e[s.uuid]=q;b[q]=s;e[n]=t;b[t]=p;n=0;for(s=k;n!==
s;++n){var w=h[n],v=w[q];w[q]=w[t];void 0===v&&(v=new THREE.PropertyBinding(p,f[n],g[n]));w[t]=v}}else b[q]!==u&&console.error("Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes...")}this.nCachedObjects_=d},remove:function(a){for(var b=this._objects,c=this.nCachedObjects_,d=this._indicesByUUID,e=this._bindings,f=e.length,g=0,h=arguments.length;g!==h;++g){var k=arguments[g],l=k.uuid,m=d[l];if(void 0!==m&&m>=c){var p=c++,n=b[p];d[n.uuid]=
m;b[m]=n;d[l]=p;b[p]=k;k=0;for(l=f;k!==l;++k){var n=e[k],q=n[m];n[m]=n[p];n[p]=q}}}this.nCachedObjects_=c},uncache:function(a){for(var b=this._objects,c=b.length,d=this.nCachedObjects_,e=this._indicesByUUID,f=this._bindings,g=f.length,h=0,k=arguments.length;h!==k;++h){var l=arguments[h].uuid,m=e[l];if(void 0!==m)if(delete e[l],m<d){var l=--d,p=b[l],n=--c,q=b[n];e[p.uuid]=m;b[m]=p;e[q.uuid]=l;b[l]=q;b.pop();p=0;for(q=g;p!==q;++p){var s=f[p],u=s[n];s[m]=s[l];s[l]=u;s.pop()}}else for(n=--c,q=b[n],e[q.uuid]=
m,b[m]=q,b.pop(),p=0,q=g;p!==q;++p)s=f[p],s[m]=s[n],s.pop()}this.nCachedObjects_=d},subscribe_:function(a,b){var c=this._bindingsIndicesByPath,d=c[a],e=this._bindings;if(void 0!==d)return e[d];var f=this._paths,g=this._parsedPaths,h=this._objects,k=this.nCachedObjects_,l=Array(h.length),d=e.length;c[a]=d;f.push(a);g.push(b);e.push(l);c=k;for(d=h.length;c!==d;++c)l[c]=new THREE.PropertyBinding(h[c],a,b);return l},unsubscribe_:function(a){var b=this._bindingsIndicesByPath,c=b[a];if(void 0!==c){var d=
this._paths,e=this._parsedPaths,f=this._bindings,g=f.length-1,h=f[g];b[a[g]]=c;f[c]=h;f.pop();e[c]=e[g];e.pop();d[c]=d[g];d.pop()}}};
THREE.AnimationUtils={arraySlice:function(a,b,c){return THREE.AnimationUtils.isTypedArray(a)?new a.constructor(a.subarray(b,c)):a.slice(b,c)},convertArray:function(a,b,c){return!a||!c&&a.constructor===b?a:"number"===typeof b.BYTES_PER_ELEMENT?new b(a):Array.prototype.slice.call(a)},isTypedArray:function(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)},getKeyframeOrder:function(a){for(var b=a.length,c=Array(b),d=0;d!==b;++d)c[d]=d;c.sort(function(b,c){return a[b]-a[c]});return c},sortedArray:function(a,
b,c){for(var d=a.length,e=new a.constructor(d),f=0,g=0;g!==d;++f)for(var h=c[f]*b,k=0;k!==b;++k)e[g++]=a[h+k];return e},flattenJSON:function(a,b,c,d){for(var e=1,f=a[0];void 0!==f&&void 0===f[d];)f=a[e++];if(void 0!==f){var g=f[d];if(void 0!==g)if(Array.isArray(g)){do g=f[d],void 0!==g&&(b.push(f.time),c.push.apply(c,g)),f=a[e++];while(void 0!==f)}else if(void 0!==g.toArray){do g=f[d],void 0!==g&&(b.push(f.time),g.toArray(c,c.length)),f=a[e++];while(void 0!==f)}else{do g=f[d],void 0!==g&&(b.push(f.time),
c.push(g)),f=a[e++];while(void 0!==f)}}}};THREE.KeyframeTrack=function(a,b,c,d){if(void 0===a)throw Error("track name is undefined");if(void 0===b||0===b.length)throw Error("no keyframes in track named "+a);this.name=a;this.times=THREE.AnimationUtils.convertArray(b,this.TimeBufferType);this.values=THREE.AnimationUtils.convertArray(c,this.ValueBufferType);this.setInterpolation(d||this.DefaultInterpolation);this.validate();this.optimize()};
THREE.KeyframeTrack.prototype={constructor:THREE.KeyframeTrack,TimeBufferType:Float32Array,ValueBufferType:Float32Array,DefaultInterpolation:THREE.InterpolateLinear,InterpolantFactoryMethodDiscrete:function(a){return new THREE.DiscreteInterpolant(this.times,this.values,this.getValueSize(),a)},InterpolantFactoryMethodLinear:function(a){return new THREE.LinearInterpolant(this.times,this.values,this.getValueSize(),a)},InterpolantFactoryMethodSmooth:function(a){return new THREE.CubicInterpolant(this.times,
this.values,this.getValueSize(),a)},setInterpolation:function(a){var b=void 0;switch(a){case THREE.InterpolateDiscrete:b=this.InterpolantFactoryMethodDiscrete;break;case THREE.InterpolateLinear:b=this.InterpolantFactoryMethodLinear;break;case THREE.InterpolateSmooth:b=this.InterpolantFactoryMethodSmooth}if(void 0===b){b="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(void 0===this.createInterpolant)if(a!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);
else throw Error(b);console.warn(b)}else this.createInterpolant=b},getInterpolation:function(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return THREE.InterpolateDiscrete;case this.InterpolantFactoryMethodLinear:return THREE.InterpolateLinear;case this.InterpolantFactoryMethodSmooth:return THREE.InterpolateSmooth}},getValueSize:function(){return this.values.length/this.times.length},shift:function(a){if(0!==a)for(var b=this.times,c=0,d=b.length;c!==d;++c)b[c]+=a;return this},
scale:function(a){if(1!==a)for(var b=this.times,c=0,d=b.length;c!==d;++c)b[c]*=a;return this},trim:function(a,b){for(var c=this.times,d=c.length,e=0,f=d-1;e!==d&&c[e]<a;)++e;for(;-1!==f&&c[f]>b;)--f;++f;if(0!==e||f!==d)e>=f&&(f=Math.max(f,1),e=f-1),d=this.getValueSize(),this.times=THREE.AnimationUtils.arraySlice(c,e,f),this.values=THREE.AnimationUtils.arraySlice(this.values,e*d,f*d);return this},validate:function(){var a=!0,b=this.getValueSize();0!==b-Math.floor(b)&&(console.error("invalid value size in track",
this),a=!1);var c=this.times,b=this.values,d=c.length;0===d&&(console.error("track is empty",this),a=!1);for(var e=null,f=0;f!==d;f++){var g=c[f];if("number"===typeof g&&isNaN(g)){console.error("time is not a valid number",this,f,g);a=!1;break}if(null!==e&&e>g){console.error("out of order keys",this,f,g,e);a=!1;break}e=g}if(void 0!==b&&THREE.AnimationUtils.isTypedArray(b))for(f=0,c=b.length;f!==c;++f)if(d=b[f],isNaN(d)){console.error("value is not a valid number",this,f,d);a=!1;break}return a},optimize:function(){for(var a=
this.times,b=this.values,c=this.getValueSize(),d=1,e=1,f=a.length-1;e<=f;++e){var g=!1,h=a[e];if(h!==a[e+1]&&(1!==e||h!==h[0]))for(var k=e*c,l=k-c,m=k+c,h=0;h!==c;++h){var p=b[k+h];if(p!==b[l+h]||p!==b[m+h]){g=!0;break}}if(g){if(e!==d)for(a[d]=a[e],g=e*c,k=d*c,h=0;h!==c;++h)b[k+h]=b[g+h];++d}}d!==a.length&&(this.times=THREE.AnimationUtils.arraySlice(a,0,d),this.values=THREE.AnimationUtils.arraySlice(b,0,d*c));return this}};
Object.assign(THREE.KeyframeTrack,{parse:function(a){if(void 0===a.type)throw Error("track type undefined, can not parse");var b=THREE.KeyframeTrack._getTrackTypeForValueTypeName(a.type);if(void 0===a.times){console.warn("legacy JSON format detected, converting");var c=[],d=[];THREE.AnimationUtils.flattenJSON(a.keys,c,d,"value");a.times=c;a.values=d}return void 0!==b.parse?b.parse(a):new b(a.name,a.times,a.values,a.interpolation)},toJSON:function(a){var b=a.constructor;if(void 0!==b.toJSON)b=b.toJSON(a);
else{var b={name:a.name,times:THREE.AnimationUtils.convertArray(a.times,Array),values:THREE.AnimationUtils.convertArray(a.values,Array)},c=a.getInterpolation();c!==a.DefaultInterpolation&&(b.interpolation=c)}b.type=a.ValueTypeName;return b},_getTrackTypeForValueTypeName:function(a){switch(a.toLowerCase()){case "scalar":case "double":case "float":case "number":case "integer":return THREE.NumberKeyframeTrack;case "vector":case "vector2":case "vector3":case "vector4":return THREE.VectorKeyframeTrack;
case "color":return THREE.ColorKeyframeTrack;case "quaternion":return THREE.QuaternionKeyframeTrack;case "bool":case "boolean":return THREE.BooleanKeyframeTrack;case "string":return THREE.StringKeyframeTrack}throw Error("Unsupported typeName: "+a);}});THREE.PropertyBinding=function(a,b,c){this.path=b;this.parsedPath=c||THREE.PropertyBinding.parseTrackName(b);this.node=THREE.PropertyBinding.findNode(a,this.parsedPath.nodeName)||a;this.rootNode=a};
THREE.PropertyBinding.prototype={constructor:THREE.PropertyBinding,getValue:function(a,b){this.bind();this.getValue(a,b)},setValue:function(a,b){this.bind();this.setValue(a,b)},bind:function(){var a=this.node,b=this.parsedPath,c=b.objectName,d=b.propertyName,e=b.propertyIndex;a||(this.node=a=THREE.PropertyBinding.findNode(this.rootNode,b.nodeName)||this.rootNode);this.getValue=this._getValue_unavailable;this.setValue=this._setValue_unavailable;if(a){if(c){var f=b.objectIndex;switch(c){case "materials":if(!a.material){console.error("  can not bind to material as node does not have a material",
this);return}if(!a.material.materials){console.error("  can not bind to material.materials as node.material does not have a materials array",this);return}a=a.material.materials;break;case "bones":if(!a.skeleton){console.error("  can not bind to bones as node does not have a skeleton",this);return}a=a.skeleton.bones;for(c=0;c<a.length;c++)if(a[c].name===f){f=c;break}break;default:if(void 0===a[c]){console.error("  can not bind to objectName of node, undefined",this);return}a=a[c]}if(void 0!==f){if(void 0===
a[f]){console.error("  trying to bind to objectIndex of objectName, but is undefined:",this,a);return}a=a[f]}}if(f=a[d]){b=this.Versioning.None;void 0!==a.needsUpdate?(b=this.Versioning.NeedsUpdate,this.targetObject=a):void 0!==a.matrixWorldNeedsUpdate&&(b=this.Versioning.MatrixWorldNeedsUpdate,this.targetObject=a);c=this.BindingType.Direct;if(void 0!==e){if("morphTargetInfluences"===d){if(!a.geometry){console.error("  can not bind to morphTargetInfluences becasuse node does not have a geometry",
this);return}if(!a.geometry.morphTargets){console.error("  can not bind to morphTargetInfluences becasuse node does not have a geometry.morphTargets",this);return}for(c=0;c<this.node.geometry.morphTargets.length;c++)if(a.geometry.morphTargets[c].name===e){e=c;break}}c=this.BindingType.ArrayElement;this.resolvedProperty=f;this.propertyIndex=e}else void 0!==f.fromArray&&void 0!==f.toArray?(c=this.BindingType.HasFromToArray,this.resolvedProperty=f):void 0!==f.length?(c=this.BindingType.EntireArray,this.resolvedProperty=
f):this.propertyName=d;this.getValue=this.GetterByBindingType[c];this.setValue=this.SetterByBindingTypeAndVersioning[c][b]}else console.error("  trying to update property for track: "+b.nodeName+"."+d+" but it wasn't found.",a)}else console.error("  trying to update node for track: "+this.path+" but it wasn't found.")},unbind:function(){this.node=null;this.getValue=this._getValue_unbound;this.setValue=this._setValue_unbound}};
Object.assign(THREE.PropertyBinding.prototype,{_getValue_unavailable:function(){},_setValue_unavailable:function(){},_getValue_unbound:THREE.PropertyBinding.prototype.getValue,_setValue_unbound:THREE.PropertyBinding.prototype.setValue,BindingType:{Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Versioning:{None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},GetterByBindingType:[function(a,b){a[b]=this.node[this.propertyName]},function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d)a[b++]=
c[d]},function(a,b){a[b]=this.resolvedProperty[this.propertyIndex]},function(a,b){this.resolvedProperty.toArray(a,b)}],SetterByBindingTypeAndVersioning:[[function(a,b){this.node[this.propertyName]=a[b]},function(a,b){this.node[this.propertyName]=a[b];this.targetObject.needsUpdate=!0},function(a,b){this.node[this.propertyName]=a[b];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d)c[d]=a[b++]},function(a,b){for(var c=this.resolvedProperty,
d=0,e=c.length;d!==e;++d)c[d]=a[b++];this.targetObject.needsUpdate=!0},function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d)c[d]=a[b++];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(a,b){this.resolvedProperty[this.propertyIndex]=a[b]},function(a,b){this.resolvedProperty[this.propertyIndex]=a[b];this.targetObject.needsUpdate=!0},function(a,b){this.resolvedProperty[this.propertyIndex]=a[b];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(a,b){this.resolvedProperty.fromArray(a,
b)},function(a,b){this.resolvedProperty.fromArray(a,b);this.targetObject.needsUpdate=!0},function(a,b){this.resolvedProperty.fromArray(a,b);this.targetObject.matrixWorldNeedsUpdate=!0}]]});THREE.PropertyBinding.Composite=function(a,b,c){c=c||THREE.PropertyBinding.parseTrackName(b);this._targetGroup=a;this._bindings=a.subscribe_(b,c)};
THREE.PropertyBinding.Composite.prototype={constructor:THREE.PropertyBinding.Composite,getValue:function(a,b){this.bind();var c=this._bindings[this._targetGroup.nCachedObjects_];void 0!==c&&c.getValue(a,b)},setValue:function(a,b){for(var c=this._bindings,d=this._targetGroup.nCachedObjects_,e=c.length;d!==e;++d)c[d].setValue(a,b)},bind:function(){for(var a=this._bindings,b=this._targetGroup.nCachedObjects_,c=a.length;b!==c;++b)a[b].bind()},unbind:function(){for(var a=this._bindings,b=this._targetGroup.nCachedObjects_,
c=a.length;b!==c;++b)a[b].unbind()}};THREE.PropertyBinding.create=function(a,b,c){return a instanceof THREE.AnimationObjectGroup?new THREE.PropertyBinding.Composite(a,b,c):new THREE.PropertyBinding(a,b,c)};
THREE.PropertyBinding.parseTrackName=function(a){var b=/^(([\w]+\/)*)([\w-\d]+)?(\.([\w]+)(\[([\w\d\[\]\_. ]+)\])?)?(\.([\w.]+)(\[([\w\d\[\]\_. ]+)\])?)$/,c=b.exec(a);if(!c)throw Error("cannot parse trackName at all: "+a);c.index===b.lastIndex&&b.lastIndex++;b={nodeName:c[3],objectName:c[5],objectIndex:c[7],propertyName:c[9],propertyIndex:c[11]};if(null===b.propertyName||0===b.propertyName.length)throw Error("can not parse propertyName from trackName: "+a);return b};
THREE.PropertyBinding.findNode=function(a,b){if(!b||""===b||"root"===b||"."===b||-1===b||b===a.name||b===a.uuid)return a;if(a.skeleton){var c=function(a){for(var c=0;c<a.bones.length;c++){var d=a.bones[c];if(d.name===b)return d}return null}(a.skeleton);if(c)return c}if(a.children){var d=function(a){for(var c=0;c<a.length;c++){var g=a[c];if(g.name===b||g.uuid===b||(g=d(g.children)))return g}return null};if(c=d(a.children))return c}return null};
THREE.PropertyMixer=function(a,b,c){this.binding=a;this.valueSize=c;a=Float64Array;switch(b){case "quaternion":b=this._slerp;break;case "string":case "bool":a=Array;b=this._select;break;default:b=this._lerp}this.buffer=new a(4*c);this._mixBufferRegion=b;this.referenceCount=this.useCount=this.cumulativeWeight=0};
THREE.PropertyMixer.prototype={constructor:THREE.PropertyMixer,accumulate:function(a,b){var c=this.buffer,d=this.valueSize,e=a*d+d,f=this.cumulativeWeight;if(0===f){for(f=0;f!==d;++f)c[e+f]=c[f];f=b}else f+=b,this._mixBufferRegion(c,e,0,b/f,d);this.cumulativeWeight=f},apply:function(a){var b=this.valueSize,c=this.buffer;a=a*b+b;var d=this.cumulativeWeight,e=this.binding;this.cumulativeWeight=0;1>d&&this._mixBufferRegion(c,a,3*b,1-d,b);for(var d=b,f=b+b;d!==f;++d)if(c[d]!==c[d+b]){e.setValue(c,a);
break}},saveOriginalState:function(){var a=this.buffer,b=this.valueSize,c=3*b;this.binding.getValue(a,c);for(var d=b;d!==c;++d)a[d]=a[c+d%b];this.cumulativeWeight=0},restoreOriginalState:function(){this.binding.setValue(this.buffer,3*this.valueSize)},_select:function(a,b,c,d,e){if(.5<=d)for(d=0;d!==e;++d)a[b+d]=a[c+d]},_slerp:function(a,b,c,d,e){THREE.Quaternion.slerpFlat(a,b,a,b,a,c,d)},_lerp:function(a,b,c,d,e){for(var f=1-d,g=0;g!==e;++g){var h=b+g;a[h]=a[h]*f+a[c+g]*d}}};
THREE.BooleanKeyframeTrack=function(a,b,c){THREE.KeyframeTrack.call(this,a,b,c)};THREE.BooleanKeyframeTrack.prototype=Object.assign(Object.create(THREE.KeyframeTrack.prototype),{constructor:THREE.BooleanKeyframeTrack,ValueTypeName:"bool",ValueBufferType:Array,DefaultInterpolation:THREE.IntepolateDiscrete,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});THREE.NumberKeyframeTrack=function(a,b,c,d){THREE.KeyframeTrack.call(this,a,b,c,d)};
THREE.NumberKeyframeTrack.prototype=Object.assign(Object.create(THREE.KeyframeTrack.prototype),{constructor:THREE.NumberKeyframeTrack,ValueTypeName:"number"});THREE.QuaternionKeyframeTrack=function(a,b,c,d){THREE.KeyframeTrack.call(this,a,b,c,d)};
THREE.QuaternionKeyframeTrack.prototype=Object.assign(Object.create(THREE.KeyframeTrack.prototype),{constructor:THREE.QuaternionKeyframeTrack,ValueTypeName:"quaternion",DefaultInterpolation:THREE.InterpolateLinear,InterpolantFactoryMethodLinear:function(a){return new THREE.QuaternionLinearInterpolant(this.times,this.values,this.getValueSize(),a)},InterpolantFactoryMethodSmooth:void 0});THREE.StringKeyframeTrack=function(a,b,c,d){THREE.KeyframeTrack.call(this,a,b,c,d)};
THREE.StringKeyframeTrack.prototype=Object.assign(Object.create(THREE.KeyframeTrack.prototype),{constructor:THREE.StringKeyframeTrack,ValueTypeName:"string",ValueBufferType:Array,DefaultInterpolation:THREE.IntepolateDiscrete,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});THREE.VectorKeyframeTrack=function(a,b,c,d){THREE.KeyframeTrack.call(this,a,b,c,d)};
THREE.VectorKeyframeTrack.prototype=Object.assign(Object.create(THREE.KeyframeTrack.prototype),{constructor:THREE.VectorKeyframeTrack,ValueTypeName:"vector"});
THREE.Audio=function(a){THREE.Object3D.call(this);this.type="Audio";this.context=a.context;this.source=this.context.createBufferSource();this.source.onended=this.onEnded.bind(this);this.gain=this.context.createGain();this.gain.connect(a.getInput());this.autoplay=!1;this.startTime=0;this.playbackRate=1;this.isPlaying=!1;this.hasPlaybackControl=!0;this.sourceType="empty";this.filter=null};THREE.Audio.prototype=Object.create(THREE.Object3D.prototype);THREE.Audio.prototype.constructor=THREE.Audio;
THREE.Audio.prototype.getOutput=function(){return this.gain};THREE.Audio.prototype.load=function(a){var b=new THREE.AudioBuffer(this.context);b.load(a);this.setBuffer(b);return this};THREE.Audio.prototype.setNodeSource=function(a){this.hasPlaybackControl=!1;this.sourceType="audioNode";this.source=a;this.connect();return this};THREE.Audio.prototype.setBuffer=function(a){var b=this;a.onReady(function(a){b.source.buffer=a;b.sourceType="buffer";b.autoplay&&b.play()});return this};
THREE.Audio.prototype.play=function(){if(!0===this.isPlaying)console.warn("THREE.Audio: Audio is already playing.");else if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else{var a=this.context.createBufferSource();a.buffer=this.source.buffer;a.loop=this.source.loop;a.onended=this.source.onended;a.start(0,this.startTime);a.playbackRate.value=this.playbackRate;this.isPlaying=!0;this.source=a;this.connect()}};
THREE.Audio.prototype.pause=function(){!1===this.hasPlaybackControl?console.warn("THREE.Audio: this Audio has no playback control."):(this.source.stop(),this.startTime=this.context.currentTime)};THREE.Audio.prototype.stop=function(){!1===this.hasPlaybackControl?console.warn("THREE.Audio: this Audio has no playback control."):(this.source.stop(),this.startTime=0)};THREE.Audio.prototype.connect=function(){null!==this.filter?(this.source.connect(this.filter),this.filter.connect(this.getOutput())):this.source.connect(this.getOutput())};
THREE.Audio.prototype.disconnect=function(){null!==this.filter?(this.source.disconnect(this.filter),this.filter.disconnect(this.getOutput())):this.source.disconnect(this.getOutput())};THREE.Audio.prototype.getFilter=function(){return this.filter};THREE.Audio.prototype.setFilter=function(a){void 0===a&&(a=null);!0===this.isPlaying?(this.disconnect(),this.filter=a,this.connect()):this.filter=a};
THREE.Audio.prototype.setPlaybackRate=function(a){!1===this.hasPlaybackControl?console.warn("THREE.Audio: this Audio has no playback control."):(this.playbackRate=a,!0===this.isPlaying&&(this.source.playbackRate.value=this.playbackRate))};THREE.Audio.prototype.getPlaybackRate=function(){return this.playbackRate};THREE.Audio.prototype.onEnded=function(){this.isPlaying=!1};
THREE.Audio.prototype.setLoop=function(a){!1===this.hasPlaybackControl?console.warn("THREE.Audio: this Audio has no playback control."):this.source.loop=a};THREE.Audio.prototype.getLoop=function(){return!1===this.hasPlaybackControl?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.source.loop};THREE.Audio.prototype.setVolume=function(a){this.gain.gain.value=a};THREE.Audio.prototype.getVolume=function(){return this.gain.gain.value};
THREE.AudioAnalyser=function(a,b){this.analyser=a.context.createAnalyser();this.analyser.fftSize=void 0!==b?b:2048;this.data=new Uint8Array(this.analyser.frequencyBinCount);a.getOutput().connect(this.analyser)};THREE.AudioAnalyser.prototype={constructor:THREE.AudioAnalyser,getData:function(){this.analyser.getByteFrequencyData(this.data);return this.data}};THREE.AudioBuffer=function(a){this.context=a;this.ready=!1;this.readyCallbacks=[]};
THREE.AudioBuffer.prototype.load=function(a){var b=this,c=new XMLHttpRequest;c.open("GET",a,!0);c.responseType="arraybuffer";c.onload=function(a){b.context.decodeAudioData(this.response,function(a){b.buffer=a;b.ready=!0;for(a=0;a<b.readyCallbacks.length;a++)b.readyCallbacks[a](b.buffer);b.readyCallbacks=[]})};c.send();return this};THREE.AudioBuffer.prototype.onReady=function(a){this.ready?a(this.buffer):this.readyCallbacks.push(a)};
THREE.PositionalAudio=function(a){THREE.Audio.call(this,a);this.panner=this.context.createPanner();this.panner.connect(this.gain)};THREE.PositionalAudio.prototype=Object.create(THREE.Audio.prototype);THREE.PositionalAudio.prototype.constructor=THREE.PositionalAudio;THREE.PositionalAudio.prototype.getOutput=function(){return this.panner};THREE.PositionalAudio.prototype.setRefDistance=function(a){this.panner.refDistance=a};THREE.PositionalAudio.prototype.getRefDistance=function(){return this.panner.refDistance};
THREE.PositionalAudio.prototype.setRolloffFactor=function(a){this.panner.rolloffFactor=a};THREE.PositionalAudio.prototype.getRolloffFactor=function(){return this.panner.rolloffFactor};THREE.PositionalAudio.prototype.setDistanceModel=function(a){this.panner.distanceModel=a};THREE.PositionalAudio.prototype.getDistanceModel=function(){return this.panner.distanceModel};THREE.PositionalAudio.prototype.setMaxDistance=function(a){this.panner.maxDistance=a};
THREE.PositionalAudio.prototype.getMaxDistance=function(){return this.panner.maxDistance};THREE.PositionalAudio.prototype.updateMatrixWorld=function(){var a=new THREE.Vector3;return function(b){THREE.Object3D.prototype.updateMatrixWorld.call(this,b);a.setFromMatrixPosition(this.matrixWorld);this.panner.setPosition(a.x,a.y,a.z)}}();
THREE.AudioListener=function(){THREE.Object3D.call(this);this.type="AudioListener";this.context=new (window.AudioContext||window.webkitAudioContext);this.gain=this.context.createGain();this.gain.connect(this.context.destination);this.filter=null};THREE.AudioListener.prototype=Object.create(THREE.Object3D.prototype);THREE.AudioListener.prototype.constructor=THREE.AudioListener;THREE.AudioListener.prototype.getInput=function(){return this.gain};
THREE.AudioListener.prototype.removeFilter=function(){null!==this.filter&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null)};THREE.AudioListener.prototype.setFilter=function(a){null!==this.filter?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination);this.filter=a;this.gain.connect(this.filter);this.filter.connect(this.context.destination)};
THREE.AudioListener.prototype.getFilter=function(){return this.filter};THREE.AudioListener.prototype.setMasterVolume=function(a){this.gain.gain.value=a};THREE.AudioListener.prototype.getMasterVolume=function(){return this.gain.gain.value};
THREE.AudioListener.prototype.updateMatrixWorld=function(){var a=new THREE.Vector3,b=new THREE.Quaternion,c=new THREE.Vector3,d=new THREE.Vector3;return function(e){THREE.Object3D.prototype.updateMatrixWorld.call(this,e);e=this.context.listener;var f=this.up;this.matrixWorld.decompose(a,b,c);d.set(0,0,-1).applyQuaternion(b);e.setPosition(a.x,a.y,a.z);e.setOrientation(d.x,d.y,d.z,f.x,f.y,f.z)}}();
THREE.Camera=function(){THREE.Object3D.call(this);this.type="Camera";this.matrixWorldInverse=new THREE.Matrix4;this.projectionMatrix=new THREE.Matrix4};THREE.Camera.prototype=Object.create(THREE.Object3D.prototype);THREE.Camera.prototype.constructor=THREE.Camera;THREE.Camera.prototype.getWorldDirection=function(){var a=new THREE.Quaternion;return function(b){b=b||new THREE.Vector3;this.getWorldQuaternion(a);return b.set(0,0,-1).applyQuaternion(a)}}();
THREE.Camera.prototype.lookAt=function(){var a=new THREE.Matrix4;return function(b){a.lookAt(this.position,b,this.up);this.quaternion.setFromRotationMatrix(a)}}();THREE.Camera.prototype.clone=function(){return(new this.constructor).copy(this)};THREE.Camera.prototype.copy=function(a){THREE.Object3D.prototype.copy.call(this,a);this.matrixWorldInverse.copy(a.matrixWorldInverse);this.projectionMatrix.copy(a.projectionMatrix);return this};
THREE.CubeCamera=function(a,b,c){THREE.Object3D.call(this);this.type="CubeCamera";var d=new THREE.PerspectiveCamera(90,1,a,b);d.up.set(0,-1,0);d.lookAt(new THREE.Vector3(1,0,0));this.add(d);var e=new THREE.PerspectiveCamera(90,1,a,b);e.up.set(0,-1,0);e.lookAt(new THREE.Vector3(-1,0,0));this.add(e);var f=new THREE.PerspectiveCamera(90,1,a,b);f.up.set(0,0,1);f.lookAt(new THREE.Vector3(0,1,0));this.add(f);var g=new THREE.PerspectiveCamera(90,1,a,b);g.up.set(0,0,-1);g.lookAt(new THREE.Vector3(0,-1,0));
this.add(g);var h=new THREE.PerspectiveCamera(90,1,a,b);h.up.set(0,-1,0);h.lookAt(new THREE.Vector3(0,0,1));this.add(h);var k=new THREE.PerspectiveCamera(90,1,a,b);k.up.set(0,-1,0);k.lookAt(new THREE.Vector3(0,0,-1));this.add(k);this.renderTarget=new THREE.WebGLRenderTargetCube(c,c,{format:THREE.RGBFormat,magFilter:THREE.LinearFilter,minFilter:THREE.LinearFilter});this.updateCubeMap=function(a,b){null===this.parent&&this.updateMatrixWorld();var c=this.renderTarget,n=c.texture.generateMipmaps;c.texture.generateMipmaps=
!1;c.activeCubeFace=0;a.render(b,d,c);c.activeCubeFace=1;a.render(b,e,c);c.activeCubeFace=2;a.render(b,f,c);c.activeCubeFace=3;a.render(b,g,c);c.activeCubeFace=4;a.render(b,h,c);c.texture.generateMipmaps=n;c.activeCubeFace=5;a.render(b,k,c);a.setRenderTarget(null)}};THREE.CubeCamera.prototype=Object.create(THREE.Object3D.prototype);THREE.CubeCamera.prototype.constructor=THREE.CubeCamera;
THREE.OrthographicCamera=function(a,b,c,d,e,f){THREE.Camera.call(this);this.type="OrthographicCamera";this.zoom=1;this.left=a;this.right=b;this.top=c;this.bottom=d;this.near=void 0!==e?e:.1;this.far=void 0!==f?f:2E3;this.updateProjectionMatrix()};THREE.OrthographicCamera.prototype=Object.create(THREE.Camera.prototype);THREE.OrthographicCamera.prototype.constructor=THREE.OrthographicCamera;
THREE.OrthographicCamera.prototype.updateProjectionMatrix=function(){var a=(this.right-this.left)/(2*this.zoom),b=(this.top-this.bottom)/(2*this.zoom),c=(this.right+this.left)/2,d=(this.top+this.bottom)/2;this.projectionMatrix.makeOrthographic(c-a,c+a,d+b,d-b,this.near,this.far)};THREE.OrthographicCamera.prototype.copy=function(a){THREE.Camera.prototype.copy.call(this,a);this.left=a.left;this.right=a.right;this.top=a.top;this.bottom=a.bottom;this.near=a.near;this.far=a.far;this.zoom=a.zoom;return this};
THREE.OrthographicCamera.prototype.toJSON=function(a){a=THREE.Object3D.prototype.toJSON.call(this,a);a.object.zoom=this.zoom;a.object.left=this.left;a.object.right=this.right;a.object.top=this.top;a.object.bottom=this.bottom;a.object.near=this.near;a.object.far=this.far;return a};
THREE.PerspectiveCamera=function(a,b,c,d){THREE.Camera.call(this);this.type="PerspectiveCamera";this.focalLength=100;this.zoom=1;this.fov=void 0!==a?a:50;this.aspect=void 0!==b?b:1;this.near=void 0!==c?c:.1;this.far=void 0!==d?d:2E3;this.updateProjectionMatrix()};THREE.PerspectiveCamera.prototype=Object.create(THREE.Camera.prototype);THREE.PerspectiveCamera.prototype.constructor=THREE.PerspectiveCamera;
THREE.PerspectiveCamera.prototype.setLens=function(a,b){void 0===b&&(b=24);this.fov=2*THREE.Math.radToDeg(Math.atan(b/(2*a)));this.updateProjectionMatrix()};THREE.PerspectiveCamera.prototype.setViewOffset=function(a,b,c,d,e,f){this.fullWidth=a;this.fullHeight=b;this.x=c;this.y=d;this.width=e;this.height=f;this.updateProjectionMatrix()};
THREE.PerspectiveCamera.prototype.updateProjectionMatrix=function(){var a=THREE.Math.radToDeg(2*Math.atan(Math.tan(.5*THREE.Math.degToRad(this.fov))/this.zoom));if(this.fullWidth){var b=this.fullWidth/this.fullHeight,a=Math.tan(THREE.Math.degToRad(.5*a))*this.near,c=-a,d=b*c,b=Math.abs(b*a-d),c=Math.abs(a-c);this.projectionMatrix.makeFrustum(d+this.x*b/this.fullWidth,d+(this.x+this.width)*b/this.fullWidth,a-(this.y+this.height)*c/this.fullHeight,a-this.y*c/this.fullHeight,this.near,this.far)}else this.projectionMatrix.makePerspective(a,
this.aspect,this.near,this.far)};THREE.PerspectiveCamera.prototype.copy=function(a){THREE.Camera.prototype.copy.call(this,a);this.focalLength=a.focalLength;this.zoom=a.zoom;this.fov=a.fov;this.aspect=a.aspect;this.near=a.near;this.far=a.far;return this};
THREE.PerspectiveCamera.prototype.toJSON=function(a){a=THREE.Object3D.prototype.toJSON.call(this,a);a.object.focalLength=this.focalLength;a.object.zoom=this.zoom;a.object.fov=this.fov;a.object.aspect=this.aspect;a.object.near=this.near;a.object.far=this.far;return a};
THREE.StereoCamera=function(){this.type="StereoCamera";this.aspect=1;this.cameraL=new THREE.PerspectiveCamera;this.cameraL.layers.enable(1);this.cameraL.matrixAutoUpdate=!1;this.cameraR=new THREE.PerspectiveCamera;this.cameraR.layers.enable(2);this.cameraR.matrixAutoUpdate=!1};
THREE.StereoCamera.prototype={constructor:THREE.StereoCamera,update:function(){var a,b,c,d,e,f=new THREE.Matrix4,g=new THREE.Matrix4;return function(h){if(a!==h.focalLength||b!==h.fov||c!==h.aspect*this.aspect||d!==h.near||e!==h.far){a=h.focalLength;b=h.fov;c=h.aspect*this.aspect;d=h.near;e=h.far;var k=h.projectionMatrix.clone(),l=a/30*.5,m=l*d/a,p=d*Math.tan(THREE.Math.degToRad(.5*b)),n;g.elements[12]=-l;f.elements[12]=l;l=-p*c+m;n=p*c+m;k.elements[0]=2*d/(n-l);k.elements[8]=(n+l)/(n-l);this.cameraL.projectionMatrix.copy(k);
l=-p*c-m;n=p*c-m;k.elements[0]=2*d/(n-l);k.elements[8]=(n+l)/(n-l);this.cameraR.projectionMatrix.copy(k)}this.cameraL.matrixWorld.copy(h.matrixWorld).multiply(g);this.cameraR.matrixWorld.copy(h.matrixWorld).multiply(f)}}()};THREE.Light=function(a,b){THREE.Object3D.call(this);this.type="Light";this.color=new THREE.Color(a);this.intensity=void 0!==b?b:1;this.receiveShadow=void 0};THREE.Light.prototype=Object.create(THREE.Object3D.prototype);THREE.Light.prototype.constructor=THREE.Light;
THREE.Light.prototype.copy=function(a){THREE.Object3D.prototype.copy.call(this,a);this.color.copy(a.color);this.intensity=a.intensity;return this};
THREE.Light.prototype.toJSON=function(a){a=THREE.Object3D.prototype.toJSON.call(this,a);a.object.color=this.color.getHex();a.object.intensity=this.intensity;void 0!==this.groundColor&&(a.object.groundColor=this.groundColor.getHex());void 0!==this.distance&&(a.object.distance=this.distance);void 0!==this.angle&&(a.object.angle=this.angle);void 0!==this.decay&&(a.object.decay=this.decay);void 0!==this.exponent&&(a.object.exponent=this.exponent);return a};
THREE.LightShadow=function(a){this.camera=a;this.bias=0;this.darkness=1;this.mapSize=new THREE.Vector2(512,512);this.matrix=this.map=null};THREE.LightShadow.prototype={constructor:THREE.LightShadow,copy:function(a){this.camera=a.camera.clone();this.bias=a.bias;this.darkness=a.darkness;this.mapSize.copy(a.mapSize);return this},clone:function(){return(new this.constructor).copy(this)}};THREE.AmbientLight=function(a,b){THREE.Light.call(this,a,b);this.type="AmbientLight";this.castShadow=void 0};
THREE.AmbientLight.prototype=Object.create(THREE.Light.prototype);THREE.AmbientLight.prototype.constructor=THREE.AmbientLight;THREE.DirectionalLight=function(a,b){THREE.Light.call(this,a,b);this.type="DirectionalLight";this.position.set(0,1,0);this.updateMatrix();this.target=new THREE.Object3D;this.shadow=new THREE.LightShadow(new THREE.OrthographicCamera(-5,5,5,-5,.5,500))};THREE.DirectionalLight.prototype=Object.create(THREE.Light.prototype);THREE.DirectionalLight.prototype.constructor=THREE.DirectionalLight;
THREE.DirectionalLight.prototype.copy=function(a){THREE.Light.prototype.copy.call(this,a);this.target=a.target.clone();this.shadow=a.shadow.clone();return this};THREE.HemisphereLight=function(a,b,c){THREE.Light.call(this,a,c);this.type="HemisphereLight";this.castShadow=void 0;this.position.set(0,1,0);this.updateMatrix();this.groundColor=new THREE.Color(b)};THREE.HemisphereLight.prototype=Object.create(THREE.Light.prototype);THREE.HemisphereLight.prototype.constructor=THREE.HemisphereLight;
THREE.HemisphereLight.prototype.copy=function(a){THREE.Light.prototype.copy.call(this,a);this.groundColor.copy(a.groundColor);return this};THREE.PointLight=function(a,b,c,d){THREE.Light.call(this,a,b);this.type="PointLight";this.distance=void 0!==c?c:0;this.decay=void 0!==d?d:1;this.shadow=new THREE.LightShadow(new THREE.PerspectiveCamera(90,1,.5,500))};THREE.PointLight.prototype=Object.create(THREE.Light.prototype);THREE.PointLight.prototype.constructor=THREE.PointLight;
THREE.PointLight.prototype.copy=function(a){THREE.Light.prototype.copy.call(this,a);this.distance=a.distance;this.decay=a.decay;this.shadow=a.shadow.clone();return this};
THREE.SpotLight=function(a,b,c,d,e,f){THREE.Light.call(this,a,b);this.type="SpotLight";this.position.set(0,1,0);this.updateMatrix();this.target=new THREE.Object3D;this.distance=void 0!==c?c:0;this.angle=void 0!==d?d:Math.PI/3;this.exponent=void 0!==e?e:10;this.decay=void 0!==f?f:1;this.shadow=new THREE.LightShadow(new THREE.PerspectiveCamera(50,1,.5,500))};THREE.SpotLight.prototype=Object.create(THREE.Light.prototype);THREE.SpotLight.prototype.constructor=THREE.SpotLight;
THREE.SpotLight.prototype.copy=function(a){THREE.Light.prototype.copy.call(this,a);this.distance=a.distance;this.angle=a.angle;this.exponent=a.exponent;this.decay=a.decay;this.target=a.target.clone();this.shadow=a.shadow.clone();return this};THREE.Cache={enabled:!1,files:{},add:function(a,b){!1!==this.enabled&&(this.files[a]=b)},get:function(a){if(!1!==this.enabled)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};
THREE.Loader=function(){this.onLoadStart=function(){};this.onLoadProgress=function(){};this.onLoadComplete=function(){}};
THREE.Loader.prototype={constructor:THREE.Loader,crossOrigin:void 0,extractUrlBase:function(a){a=a.split("/");if(1===a.length)return"./";a.pop();return a.join("/")+"/"},initMaterials:function(a,b,c){for(var d=[],e=0;e<a.length;++e)d[e]=this.createMaterial(a[e],b,c);return d},createMaterial:function(){var a,b,c;return function(d,e,f){function g(a,c,d,g,k){a=e+a;var l=THREE.Loader.Handlers.get(a);null!==l?a=l.load(a):(b.setCrossOrigin(f),a=b.load(a));void 0!==c&&(a.repeat.fromArray(c),1!==c[0]&&(a.wrapS=
THREE.RepeatWrapping),1!==c[1]&&(a.wrapT=THREE.RepeatWrapping));void 0!==d&&a.offset.fromArray(d);void 0!==g&&("repeat"===g[0]&&(a.wrapS=THREE.RepeatWrapping),"mirror"===g[0]&&(a.wrapS=THREE.MirroredRepeatWrapping),"repeat"===g[1]&&(a.wrapT=THREE.RepeatWrapping),"mirror"===g[1]&&(a.wrapT=THREE.MirroredRepeatWrapping));void 0!==k&&(a.anisotropy=k);c=THREE.Math.generateUUID();h[c]=a;return c}void 0===a&&(a=new THREE.Color);void 0===b&&(b=new THREE.TextureLoader);void 0===c&&(c=new THREE.MaterialLoader);
var h={},k={uuid:THREE.Math.generateUUID(),type:"MeshLambertMaterial"},l;for(l in d){var m=d[l];switch(l){case "DbgColor":case "DbgIndex":case "opticalDensity":case "illumination":break;case "DbgName":k.name=m;break;case "blending":k.blending=THREE[m];break;case "colorAmbient":console.warn("THREE.Loader.createMaterial: colorAmbient is no longer supported");break;case "colorDiffuse":k.color=a.fromArray(m).getHex();break;case "colorSpecular":k.specular=a.fromArray(m).getHex();break;case "colorEmissive":k.emissive=
a.fromArray(m).getHex();break;case "specularCoef":k.shininess=m;break;case "shading":"basic"===m.toLowerCase()&&(k.type="MeshBasicMaterial");"phong"===m.toLowerCase()&&(k.type="MeshPhongMaterial");break;case "mapDiffuse":k.map=g(m,d.mapDiffuseRepeat,d.mapDiffuseOffset,d.mapDiffuseWrap,d.mapDiffuseAnisotropy);break;case "mapDiffuseRepeat":case "mapDiffuseOffset":case "mapDiffuseWrap":case "mapDiffuseAnisotropy":break;case "mapLight":k.lightMap=g(m,d.mapLightRepeat,d.mapLightOffset,d.mapLightWrap,d.mapLightAnisotropy);
break;case "mapLightRepeat":case "mapLightOffset":case "mapLightWrap":case "mapLightAnisotropy":break;case "mapAO":k.aoMap=g(m,d.mapAORepeat,d.mapAOOffset,d.mapAOWrap,d.mapAOAnisotropy);break;case "mapAORepeat":case "mapAOOffset":case "mapAOWrap":case "mapAOAnisotropy":break;case "mapBump":k.bumpMap=g(m,d.mapBumpRepeat,d.mapBumpOffset,d.mapBumpWrap,d.mapBumpAnisotropy);break;case "mapBumpScale":k.bumpScale=m;break;case "mapBumpRepeat":case "mapBumpOffset":case "mapBumpWrap":case "mapBumpAnisotropy":break;
case "mapNormal":k.normalMap=g(m,d.mapNormalRepeat,d.mapNormalOffset,d.mapNormalWrap,d.mapNormalAnisotropy);break;case "mapNormalFactor":k.normalScale=[m,m];break;case "mapNormalRepeat":case "mapNormalOffset":case "mapNormalWrap":case "mapNormalAnisotropy":break;case "mapSpecular":k.specularMap=g(m,d.mapSpecularRepeat,d.mapSpecularOffset,d.mapSpecularWrap,d.mapSpecularAnisotropy);break;case "mapSpecularRepeat":case "mapSpecularOffset":case "mapSpecularWrap":case "mapSpecularAnisotropy":break;case "mapAlpha":k.alphaMap=
g(m,d.mapAlphaRepeat,d.mapAlphaOffset,d.mapAlphaWrap,d.mapAlphaAnisotropy);break;case "mapAlphaRepeat":case "mapAlphaOffset":case "mapAlphaWrap":case "mapAlphaAnisotropy":break;case "flipSided":k.side=THREE.BackSide;break;case "doubleSided":k.side=THREE.DoubleSide;break;case "transparency":console.warn("THREE.Loader.createMaterial: transparency has been renamed to opacity");k.opacity=m;break;case "depthTest":case "depthWrite":case "colorWrite":case "opacity":case "reflectivity":case "transparent":case "visible":case "wireframe":k[l]=
m;break;case "vertexColors":!0===m&&(k.vertexColors=THREE.VertexColors);"face"===m&&(k.vertexColors=THREE.FaceColors);break;default:console.error("THREE.Loader.createMaterial: Unsupported",l,m)}}"MeshBasicMaterial"===k.type&&delete k.emissive;"MeshPhongMaterial"!==k.type&&delete k.specular;1>k.opacity&&(k.transparent=!0);c.setTextures(h);return c.parse(k)}}()};
THREE.Loader.Handlers={handlers:[],add:function(a,b){this.handlers.push(a,b)},get:function(a){for(var b=this.handlers,c=0,d=b.length;c<d;c+=2){var e=b[c+1];if(b[c].test(a))return e}return null}};THREE.XHRLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.XHRLoader.prototype={constructor:THREE.XHRLoader,load:function(a,b,c,d){void 0!==this.path&&(a=this.path+a);var e=this,f=THREE.Cache.get(a);if(void 0!==f)return b&&setTimeout(function(){b(f)},0),f;var g=new XMLHttpRequest;g.overrideMimeType("text/plain");g.open("GET",a,!0);g.addEventListener("load",function(c){var f=c.target.response;THREE.Cache.add(a,f);200===this.status?(b&&b(f),e.manager.itemEnd(a)):0===this.status?(console.warn("THREE.XHRLoader: HTTP Status 0 received."),b&&b(f),e.manager.itemEnd(a)):
(d&&d(c),e.manager.itemError(a))},!1);void 0!==c&&g.addEventListener("progress",function(a){c(a)},!1);g.addEventListener("error",function(b){d&&d(b);e.manager.itemError(a)},!1);void 0!==this.responseType&&(g.responseType=this.responseType);void 0!==this.withCredentials&&(g.withCredentials=this.withCredentials);g.send(null);e.manager.itemStart(a);return g},setPath:function(a){this.path=a},setResponseType:function(a){this.responseType=a},setWithCredentials:function(a){this.withCredentials=a}};
THREE.FontLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};THREE.FontLoader.prototype={constructor:THREE.FontLoader,load:function(a,b,c,d){(new THREE.XHRLoader(this.manager)).load(a,function(a){b(new THREE.Font(JSON.parse(a.substring(65,a.length-2))))},c,d)}};THREE.ImageLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.ImageLoader.prototype={constructor:THREE.ImageLoader,load:function(a,b,c,d){void 0!==this.path&&(a=this.path+a);var e=this,f=THREE.Cache.get(a);if(void 0!==f)return e.manager.itemStart(a),b?setTimeout(function(){b(f);e.manager.itemEnd(a)},0):e.manager.itemEnd(a),f;var g=document.createElement("img");g.addEventListener("load",function(c){THREE.Cache.add(a,this);b&&b(this);e.manager.itemEnd(a)},!1);void 0!==c&&g.addEventListener("progress",function(a){c(a)},!1);g.addEventListener("error",function(b){d&&
d(b);e.manager.itemError(a)},!1);void 0!==this.crossOrigin&&(g.crossOrigin=this.crossOrigin);e.manager.itemStart(a);g.src=a;return g},setCrossOrigin:function(a){this.crossOrigin=a},setPath:function(a){this.path=a}};THREE.JSONLoader=function(a){"boolean"===typeof a&&(console.warn("THREE.JSONLoader: showStatus parameter has been removed from constructor."),a=void 0);this.manager=void 0!==a?a:THREE.DefaultLoadingManager;this.withCredentials=!1};
THREE.JSONLoader.prototype={constructor:THREE.JSONLoader,get statusDomElement(){void 0===this._statusDomElement&&(this._statusDomElement=document.createElement("div"));console.warn("THREE.JSONLoader: .statusDomElement has been removed.");return this._statusDomElement},load:function(a,b,c,d){var e=this,f=this.texturePath&&"string"===typeof this.texturePath?this.texturePath:THREE.Loader.prototype.extractUrlBase(a),g=new THREE.XHRLoader(this.manager);g.setWithCredentials(this.withCredentials);g.load(a,
function(c){c=JSON.parse(c);var d=c.metadata;if(void 0!==d&&(d=d.type,void 0!==d)){if("object"===d.toLowerCase()){console.error("THREE.JSONLoader: "+a+" should be loaded with THREE.ObjectLoader instead.");return}if("scene"===d.toLowerCase()){console.error("THREE.JSONLoader: "+a+" should be loaded with THREE.SceneLoader instead.");return}}c=e.parse(c,f);b(c.geometry,c.materials)},c,d)},setTexturePath:function(a){this.texturePath=a},parse:function(a,b){var c=new THREE.Geometry,d=void 0!==a.scale?1/
a.scale:1;(function(b){var d,g,h,k,l,m,p,n,q,s,u,t,w,v=a.faces;m=a.vertices;var C=a.normals,x=a.colors,B=0;if(void 0!==a.uvs){for(d=0;d<a.uvs.length;d++)a.uvs[d].length&&B++;for(d=0;d<B;d++)c.faceVertexUvs[d]=[]}k=0;for(l=m.length;k<l;)d=new THREE.Vector3,d.x=m[k++]*b,d.y=m[k++]*b,d.z=m[k++]*b,c.vertices.push(d);k=0;for(l=v.length;k<l;)if(b=v[k++],q=b&1,h=b&2,d=b&8,p=b&16,s=b&32,m=b&64,b&=128,q){q=new THREE.Face3;q.a=v[k];q.b=v[k+1];q.c=v[k+3];u=new THREE.Face3;u.a=v[k+1];u.b=v[k+2];u.c=v[k+3];k+=
4;h&&(h=v[k++],q.materialIndex=h,u.materialIndex=h);h=c.faces.length;if(d)for(d=0;d<B;d++)for(t=a.uvs[d],c.faceVertexUvs[d][h]=[],c.faceVertexUvs[d][h+1]=[],g=0;4>g;g++)n=v[k++],w=t[2*n],n=t[2*n+1],w=new THREE.Vector2(w,n),2!==g&&c.faceVertexUvs[d][h].push(w),0!==g&&c.faceVertexUvs[d][h+1].push(w);p&&(p=3*v[k++],q.normal.set(C[p++],C[p++],C[p]),u.normal.copy(q.normal));if(s)for(d=0;4>d;d++)p=3*v[k++],s=new THREE.Vector3(C[p++],C[p++],C[p]),2!==d&&q.vertexNormals.push(s),0!==d&&u.vertexNormals.push(s);
m&&(m=v[k++],m=x[m],q.color.setHex(m),u.color.setHex(m));if(b)for(d=0;4>d;d++)m=v[k++],m=x[m],2!==d&&q.vertexColors.push(new THREE.Color(m)),0!==d&&u.vertexColors.push(new THREE.Color(m));c.faces.push(q);c.faces.push(u)}else{q=new THREE.Face3;q.a=v[k++];q.b=v[k++];q.c=v[k++];h&&(h=v[k++],q.materialIndex=h);h=c.faces.length;if(d)for(d=0;d<B;d++)for(t=a.uvs[d],c.faceVertexUvs[d][h]=[],g=0;3>g;g++)n=v[k++],w=t[2*n],n=t[2*n+1],w=new THREE.Vector2(w,n),c.faceVertexUvs[d][h].push(w);p&&(p=3*v[k++],q.normal.set(C[p++],
C[p++],C[p]));if(s)for(d=0;3>d;d++)p=3*v[k++],s=new THREE.Vector3(C[p++],C[p++],C[p]),q.vertexNormals.push(s);m&&(m=v[k++],q.color.setHex(x[m]));if(b)for(d=0;3>d;d++)m=v[k++],q.vertexColors.push(new THREE.Color(x[m]));c.faces.push(q)}})(d);(function(){var b=void 0!==a.influencesPerVertex?a.influencesPerVertex:2;if(a.skinWeights)for(var d=0,g=a.skinWeights.length;d<g;d+=b)c.skinWeights.push(new THREE.Vector4(a.skinWeights[d],1<b?a.skinWeights[d+1]:0,2<b?a.skinWeights[d+2]:0,3<b?a.skinWeights[d+3]:
0));if(a.skinIndices)for(d=0,g=a.skinIndices.length;d<g;d+=b)c.skinIndices.push(new THREE.Vector4(a.skinIndices[d],1<b?a.skinIndices[d+1]:0,2<b?a.skinIndices[d+2]:0,3<b?a.skinIndices[d+3]:0));c.bones=a.bones;c.bones&&0<c.bones.length&&(c.skinWeights.length!==c.skinIndices.length||c.skinIndices.length!==c.vertices.length)&&console.warn("When skinning, number of vertices ("+c.vertices.length+"), skinIndices ("+c.skinIndices.length+"), and skinWeights ("+c.skinWeights.length+") should match.")})();(function(b){if(void 0!==
a.morphTargets)for(var d=0,g=a.morphTargets.length;d<g;d++){c.morphTargets[d]={};c.morphTargets[d].name=a.morphTargets[d].name;c.morphTargets[d].vertices=[];for(var h=c.morphTargets[d].vertices,k=a.morphTargets[d].vertices,l=0,m=k.length;l<m;l+=3){var p=new THREE.Vector3;p.x=k[l]*b;p.y=k[l+1]*b;p.z=k[l+2]*b;h.push(p)}}if(void 0!==a.morphColors&&0<a.morphColors.length)for(console.warn('THREE.JSONLoader: "morphColors" no longer supported. Using them as face colors.'),b=c.faces,h=a.morphColors[0].colors,
d=0,g=b.length;d<g;d++)b[d].color.fromArray(h,3*d)})(d);(function(){var b=[],d=[];void 0!==a.animation&&d.push(a.animation);void 0!==a.animations&&(a.animations.length?d=d.concat(a.animations):d.push(a.animations));for(var g=0;g<d.length;g++){var h=THREE.AnimationClip.parseAnimation(d[g],c.bones);h&&b.push(h)}c.morphTargets&&(d=THREE.AnimationClip.CreateClipsFromMorphTargetSequences(c.morphTargets,10),b=b.concat(d));0<b.length&&(c.animations=b)})();c.computeFaceNormals();c.computeBoundingSphere();
if(void 0===a.materials||0===a.materials.length)return{geometry:c};d=THREE.Loader.prototype.initMaterials(a.materials,b,this.crossOrigin);return{geometry:c,materials:d}}};
THREE.LoadingManager=function(a,b,c){var d=this,e=!1,f=0,g=0;this.onStart=void 0;this.onLoad=a;this.onProgress=b;this.onError=c;this.itemStart=function(a){g++;if(!1===e&&void 0!==d.onStart)d.onStart(a,f,g);e=!0};this.itemEnd=function(a){f++;if(void 0!==d.onProgress)d.onProgress(a,f,g);if(f===g&&(e=!1,void 0!==d.onLoad))d.onLoad()};this.itemError=function(a){if(void 0!==d.onError)d.onError(a)}};THREE.DefaultLoadingManager=new THREE.LoadingManager;
THREE.BufferGeometryLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.BufferGeometryLoader.prototype={constructor:THREE.BufferGeometryLoader,load:function(a,b,c,d){var e=this;(new THREE.XHRLoader(e.manager)).load(a,function(a){b(e.parse(JSON.parse(a)))},c,d)},parse:function(a){var b=new THREE.BufferGeometry,c=a.data.index,d={Int8Array:Int8Array,Uint8Array:Uint8Array,Uint8ClampedArray:Uint8ClampedArray,Int16Array:Int16Array,Uint16Array:Uint16Array,Int32Array:Int32Array,Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array};void 0!==c&&(c=
new d[c.type](c.array),b.setIndex(new THREE.BufferAttribute(c,1)));var e=a.data.attributes,f;for(f in e){var g=e[f],c=new d[g.type](g.array);b.addAttribute(f,new THREE.BufferAttribute(c,g.itemSize))}d=a.data.groups||a.data.drawcalls||a.data.offsets;if(void 0!==d)for(f=0,c=d.length;f!==c;++f)e=d[f],b.addGroup(e.start,e.count,e.materialIndex);a=a.data.boundingSphere;void 0!==a&&(d=new THREE.Vector3,void 0!==a.center&&d.fromArray(a.center),b.boundingSphere=new THREE.Sphere(d,a.radius));return b}};
THREE.MaterialLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager;this.textures={}};
THREE.MaterialLoader.prototype={constructor:THREE.MaterialLoader,load:function(a,b,c,d){var e=this;(new THREE.XHRLoader(e.manager)).load(a,function(a){b(e.parse(JSON.parse(a)))},c,d)},setTextures:function(a){this.textures=a},getTexture:function(a){var b=this.textures;void 0===b[a]&&console.warn("THREE.MaterialLoader: Undefined texture",a);return b[a]},parse:function(a){var b=new THREE[a.type];void 0!==a.uuid&&(b.uuid=a.uuid);void 0!==a.name&&(b.name=a.name);void 0!==a.color&&b.color.setHex(a.color);
void 0!==a.roughness&&(b.roughness=a.roughness);void 0!==a.metalness&&(b.metalness=a.metalness);void 0!==a.emissive&&b.emissive.setHex(a.emissive);void 0!==a.specular&&b.specular.setHex(a.specular);void 0!==a.shininess&&(b.shininess=a.shininess);void 0!==a.uniforms&&(b.uniforms=a.uniforms);void 0!==a.vertexShader&&(b.vertexShader=a.vertexShader);void 0!==a.fragmentShader&&(b.fragmentShader=a.fragmentShader);void 0!==a.vertexColors&&(b.vertexColors=a.vertexColors);void 0!==a.shading&&(b.shading=a.shading);
void 0!==a.blending&&(b.blending=a.blending);void 0!==a.side&&(b.side=a.side);void 0!==a.opacity&&(b.opacity=a.opacity);void 0!==a.transparent&&(b.transparent=a.transparent);void 0!==a.alphaTest&&(b.alphaTest=a.alphaTest);void 0!==a.depthTest&&(b.depthTest=a.depthTest);void 0!==a.depthWrite&&(b.depthWrite=a.depthWrite);void 0!==a.colorWrite&&(b.colorWrite=a.colorWrite);void 0!==a.wireframe&&(b.wireframe=a.wireframe);void 0!==a.wireframeLinewidth&&(b.wireframeLinewidth=a.wireframeLinewidth);void 0!==
a.size&&(b.size=a.size);void 0!==a.sizeAttenuation&&(b.sizeAttenuation=a.sizeAttenuation);void 0!==a.map&&(b.map=this.getTexture(a.map));void 0!==a.alphaMap&&(b.alphaMap=this.getTexture(a.alphaMap),b.transparent=!0);void 0!==a.bumpMap&&(b.bumpMap=this.getTexture(a.bumpMap));void 0!==a.bumpScale&&(b.bumpScale=a.bumpScale);void 0!==a.normalMap&&(b.normalMap=this.getTexture(a.normalMap));if(void 0!==a.normalScale){var c=a.normalScale;!1===Array.isArray(c)&&(c=[c,c]);b.normalScale=(new THREE.Vector2).fromArray(c)}void 0!==
a.displacementMap&&(b.displacementMap=this.getTexture(a.displacementMap));void 0!==a.displacementScale&&(b.displacementScale=a.displacementScale);void 0!==a.displacementBias&&(b.displacementBias=a.displacementBias);void 0!==a.roughnessMap&&(b.roughnessMap=this.getTexture(a.roughnessMap));void 0!==a.metalnessMap&&(b.metalnessMap=this.getTexture(a.metalnessMap));void 0!==a.emissiveMap&&(b.emissiveMap=this.getTexture(a.emissiveMap));void 0!==a.emissiveIntensity&&(b.emissiveIntensity=a.emissiveIntensity);
void 0!==a.specularMap&&(b.specularMap=this.getTexture(a.specularMap));void 0!==a.envMap&&(b.envMap=this.getTexture(a.envMap),b.combine=THREE.MultiplyOperation);a.reflectivity&&(b.reflectivity=a.reflectivity);void 0!==a.lightMap&&(b.lightMap=this.getTexture(a.lightMap));void 0!==a.lightMapIntensity&&(b.lightMapIntensity=a.lightMapIntensity);void 0!==a.aoMap&&(b.aoMap=this.getTexture(a.aoMap));void 0!==a.aoMapIntensity&&(b.aoMapIntensity=a.aoMapIntensity);if(void 0!==a.materials)for(var c=0,d=a.materials.length;c<
d;c++)b.materials.push(this.parse(a.materials[c]));return b}};THREE.ObjectLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager;this.texturePath=""};
THREE.ObjectLoader.prototype={constructor:THREE.ObjectLoader,load:function(a,b,c,d){""===this.texturePath&&(this.texturePath=a.substring(0,a.lastIndexOf("/")+1));var e=this;(new THREE.XHRLoader(e.manager)).load(a,function(a){e.parse(JSON.parse(a),b)},c,d)},setTexturePath:function(a){this.texturePath=a},setCrossOrigin:function(a){this.crossOrigin=a},parse:function(a,b){var c=this.parseGeometries(a.geometries),d=this.parseImages(a.images,function(){void 0!==b&&b(e)}),d=this.parseTextures(a.textures,
d),d=this.parseMaterials(a.materials,d),e=this.parseObject(a.object,c,d);a.animations&&(e.animations=this.parseAnimations(a.animations));void 0!==a.images&&0!==a.images.length||void 0===b||b(e);return e},parseGeometries:function(a){var b={};if(void 0!==a)for(var c=new THREE.JSONLoader,d=new THREE.BufferGeometryLoader,e=0,f=a.length;e<f;e++){var g,h=a[e];switch(h.type){case "PlaneGeometry":case "PlaneBufferGeometry":g=new THREE[h.type](h.width,h.height,h.widthSegments,h.heightSegments);break;case "BoxGeometry":case "CubeGeometry":g=
new THREE.BoxGeometry(h.width,h.height,h.depth,h.widthSegments,h.heightSegments,h.depthSegments);break;case "CircleBufferGeometry":g=new THREE.CircleBufferGeometry(h.radius,h.segments,h.thetaStart,h.thetaLength);break;case "CircleGeometry":g=new THREE.CircleGeometry(h.radius,h.segments,h.thetaStart,h.thetaLength);break;case "CylinderGeometry":g=new THREE.CylinderGeometry(h.radiusTop,h.radiusBottom,h.height,h.radialSegments,h.heightSegments,h.openEnded,h.thetaStart,h.thetaLength);break;case "SphereGeometry":g=
new THREE.SphereGeometry(h.radius,h.widthSegments,h.heightSegments,h.phiStart,h.phiLength,h.thetaStart,h.thetaLength);break;case "SphereBufferGeometry":g=new THREE.SphereBufferGeometry(h.radius,h.widthSegments,h.heightSegments,h.phiStart,h.phiLength,h.thetaStart,h.thetaLength);break;case "DodecahedronGeometry":g=new THREE.DodecahedronGeometry(h.radius,h.detail);break;case "IcosahedronGeometry":g=new THREE.IcosahedronGeometry(h.radius,h.detail);break;case "OctahedronGeometry":g=new THREE.OctahedronGeometry(h.radius,
h.detail);break;case "TetrahedronGeometry":g=new THREE.TetrahedronGeometry(h.radius,h.detail);break;case "RingGeometry":g=new THREE.RingGeometry(h.innerRadius,h.outerRadius,h.thetaSegments,h.phiSegments,h.thetaStart,h.thetaLength);break;case "TorusGeometry":g=new THREE.TorusGeometry(h.radius,h.tube,h.radialSegments,h.tubularSegments,h.arc);break;case "TorusKnotGeometry":g=new THREE.TorusKnotGeometry(h.radius,h.tube,h.radialSegments,h.tubularSegments,h.p,h.q,h.heightScale);break;case "LatheGeometry":g=
new THREE.LatheGeometry(h.points,h.segments,h.phiStart,h.phiLength);break;case "BufferGeometry":g=d.parse(h);break;case "Geometry":g=c.parse(h.data,this.texturePath).geometry;break;default:console.warn('THREE.ObjectLoader: Unsupported geometry type "'+h.type+'"');continue}g.uuid=h.uuid;void 0!==h.name&&(g.name=h.name);b[h.uuid]=g}return b},parseMaterials:function(a,b){var c={};if(void 0!==a){var d=new THREE.MaterialLoader;d.setTextures(b);for(var e=0,f=a.length;e<f;e++){var g=d.parse(a[e]);c[g.uuid]=
g}}return c},parseAnimations:function(a){for(var b=[],c=0;c<a.length;c++){var d=THREE.AnimationClip.parse(a[c]);b.push(d)}return b},parseImages:function(a,b){function c(a){d.manager.itemStart(a);return g.load(a,function(){d.manager.itemEnd(a)})}var d=this,e={};if(void 0!==a&&0<a.length){var f=new THREE.LoadingManager(b),g=new THREE.ImageLoader(f);g.setCrossOrigin(this.crossOrigin);for(var f=0,h=a.length;f<h;f++){var k=a[f],l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(k.url)?k.url:d.texturePath+k.url;e[k.uuid]=
c(l)}}return e},parseTextures:function(a,b){function c(a){if("number"===typeof a)return a;console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",a);return THREE[a]}var d={};if(void 0!==a)for(var e=0,f=a.length;e<f;e++){var g=a[e];void 0===g.image&&console.warn('THREE.ObjectLoader: No "image" specified for',g.uuid);void 0===b[g.image]&&console.warn("THREE.ObjectLoader: Undefined image",g.image);var h=new THREE.Texture(b[g.image]);h.needsUpdate=!0;h.uuid=g.uuid;void 0!==
g.name&&(h.name=g.name);void 0!==g.mapping&&(h.mapping=c(g.mapping));void 0!==g.offset&&(h.offset=new THREE.Vector2(g.offset[0],g.offset[1]));void 0!==g.repeat&&(h.repeat=new THREE.Vector2(g.repeat[0],g.repeat[1]));void 0!==g.minFilter&&(h.minFilter=c(g.minFilter));void 0!==g.magFilter&&(h.magFilter=c(g.magFilter));void 0!==g.anisotropy&&(h.anisotropy=g.anisotropy);Array.isArray(g.wrap)&&(h.wrapS=c(g.wrap[0]),h.wrapT=c(g.wrap[1]));d[g.uuid]=h}return d},parseObject:function(){var a=new THREE.Matrix4;
return function(b,c,d){function e(a){void 0===c[a]&&console.warn("THREE.ObjectLoader: Undefined geometry",a);return c[a]}function f(a){if(void 0!==a)return void 0===d[a]&&console.warn("THREE.ObjectLoader: Undefined material",a),d[a]}var g;switch(b.type){case "Scene":g=new THREE.Scene;break;case "PerspectiveCamera":g=new THREE.PerspectiveCamera(b.fov,b.aspect,b.near,b.far);break;case "OrthographicCamera":g=new THREE.OrthographicCamera(b.left,b.right,b.top,b.bottom,b.near,b.far);break;case "AmbientLight":g=
new THREE.AmbientLight(b.color,b.intensity);break;case "DirectionalLight":g=new THREE.DirectionalLight(b.color,b.intensity);break;case "PointLight":g=new THREE.PointLight(b.color,b.intensity,b.distance,b.decay);break;case "SpotLight":g=new THREE.SpotLight(b.color,b.intensity,b.distance,b.angle,b.exponent,b.decay);break;case "HemisphereLight":g=new THREE.HemisphereLight(b.color,b.groundColor,b.intensity);break;case "Mesh":g=e(b.geometry);var h=f(b.material);g=g.bones&&0<g.bones.length?new THREE.SkinnedMesh(g,
h):new THREE.Mesh(g,h);break;case "LOD":g=new THREE.LOD;break;case "Line":g=new THREE.Line(e(b.geometry),f(b.material),b.mode);break;case "PointCloud":case "Points":g=new THREE.Points(e(b.geometry),f(b.material));break;case "Sprite":g=new THREE.Sprite(f(b.material));break;case "Group":g=new THREE.Group;break;default:g=new THREE.Object3D}g.uuid=b.uuid;void 0!==b.name&&(g.name=b.name);void 0!==b.matrix?(a.fromArray(b.matrix),a.decompose(g.position,g.quaternion,g.scale)):(void 0!==b.position&&g.position.fromArray(b.position),
void 0!==b.rotation&&g.rotation.fromArray(b.rotation),void 0!==b.scale&&g.scale.fromArray(b.scale));void 0!==b.castShadow&&(g.castShadow=b.castShadow);void 0!==b.receiveShadow&&(g.receiveShadow=b.receiveShadow);void 0!==b.visible&&(g.visible=b.visible);void 0!==b.userData&&(g.userData=b.userData);if(void 0!==b.children)for(var k in b.children)g.add(this.parseObject(b.children[k],c,d));if("LOD"===b.type)for(b=b.levels,h=0;h<b.length;h++){var l=b[h];k=g.getObjectByProperty("uuid",l.object);void 0!==
k&&g.addLevel(k,l.distance)}return g}}()};THREE.TextureLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};THREE.TextureLoader.prototype={constructor:THREE.TextureLoader,load:function(a,b,c,d){var e=new THREE.Texture,f=new THREE.ImageLoader(this.manager);f.setCrossOrigin(this.crossOrigin);f.setPath(this.path);f.load(a,function(a){e.image=a;e.needsUpdate=!0;void 0!==b&&b(e)},c,d);return e},setCrossOrigin:function(a){this.crossOrigin=a},setPath:function(a){this.path=a}};
THREE.CubeTextureLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.CubeTextureLoader.prototype={constructor:THREE.CubeTextureLoader,load:function(a,b,c,d){function e(c){g.load(a[c],function(a){f.images[c]=a;h++;6===h&&(f.needsUpdate=!0,b&&b(f))},void 0,d)}var f=new THREE.CubeTexture([]),g=new THREE.ImageLoader;g.setCrossOrigin(this.crossOrigin);g.setPath(this.path);var h=0;for(c=0;c<a.length;++c)e(c);return f},setCrossOrigin:function(a){this.crossOrigin=a},setPath:function(a){this.path=a}};
THREE.DataTextureLoader=THREE.BinaryTextureLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager;this._parser=null};
THREE.BinaryTextureLoader.prototype={constructor:THREE.BinaryTextureLoader,load:function(a,b,c,d){var e=this,f=new THREE.DataTexture,g=new THREE.XHRLoader(this.manager);g.setResponseType("arraybuffer");g.load(a,function(a){if(a=e._parser(a))void 0!==a.image?f.image=a.image:void 0!==a.data&&(f.image.width=a.width,f.image.height=a.height,f.image.data=a.data),f.wrapS=void 0!==a.wrapS?a.wrapS:THREE.ClampToEdgeWrapping,f.wrapT=void 0!==a.wrapT?a.wrapT:THREE.ClampToEdgeWrapping,f.magFilter=void 0!==a.magFilter?
a.magFilter:THREE.LinearFilter,f.minFilter=void 0!==a.minFilter?a.minFilter:THREE.LinearMipMapLinearFilter,f.anisotropy=void 0!==a.anisotropy?a.anisotropy:1,void 0!==a.format&&(f.format=a.format),void 0!==a.type&&(f.type=a.type),void 0!==a.mipmaps&&(f.mipmaps=a.mipmaps),1===a.mipmapCount&&(f.minFilter=THREE.LinearFilter),f.needsUpdate=!0,b&&b(f,a)},c,d);return f}};THREE.CompressedTextureLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager;this._parser=null};
THREE.CompressedTextureLoader.prototype={constructor:THREE.CompressedTextureLoader,load:function(a,b,c,d){function e(e){k.load(a[e],function(a){a=f._parser(a,!0);g[e]={width:a.width,height:a.height,format:a.format,mipmaps:a.mipmaps};l+=1;6===l&&(1===a.mipmapCount&&(h.minFilter=THREE.LinearFilter),h.format=a.format,h.needsUpdate=!0,b&&b(h))},c,d)}var f=this,g=[],h=new THREE.CompressedTexture;h.image=g;var k=new THREE.XHRLoader(this.manager);k.setPath(this.path);k.setResponseType("arraybuffer");if(Array.isArray(a))for(var l=
0,m=0,p=a.length;m<p;++m)e(m);else k.load(a,function(a){a=f._parser(a,!0);if(a.isCubemap)for(var c=a.mipmaps.length/a.mipmapCount,d=0;d<c;d++){g[d]={mipmaps:[]};for(var e=0;e<a.mipmapCount;e++)g[d].mipmaps.push(a.mipmaps[d*a.mipmapCount+e]),g[d].format=a.format,g[d].width=a.width,g[d].height=a.height}else h.image.width=a.width,h.image.height=a.height,h.mipmaps=a.mipmaps;1===a.mipmapCount&&(h.minFilter=THREE.LinearFilter);h.format=a.format;h.needsUpdate=!0;b&&b(h)},c,d);return h},setPath:function(a){this.path=
a}};
THREE.Material=function(){Object.defineProperty(this,"id",{value:THREE.MaterialIdCount++});this.uuid=THREE.Math.generateUUID();this.name="";this.type="Material";this.side=THREE.FrontSide;this.opacity=1;this.transparent=!1;this.blending=THREE.NormalBlending;this.blendSrc=THREE.SrcAlphaFactor;this.blendDst=THREE.OneMinusSrcAlphaFactor;this.blendEquation=THREE.AddEquation;this.blendEquationAlpha=this.blendDstAlpha=this.blendSrcAlpha=null;this.depthFunc=THREE.LessEqualDepth;this.colorWrite=this.depthWrite=this.depthTest=
!0;this.precision=null;this.polygonOffset=!1;this.overdraw=this.alphaTest=this.polygonOffsetUnits=this.polygonOffsetFactor=0;this._needsUpdate=this.visible=!0};
THREE.Material.prototype={constructor:THREE.Material,get needsUpdate(){return this._needsUpdate},set needsUpdate(a){!0===a&&this.update();this._needsUpdate=a},setValues:function(a){if(void 0!==a)for(var b in a){var c=a[b];if(void 0===c)console.warn("THREE.Material: '"+b+"' parameter is undefined.");else{var d=this[b];void 0===d?console.warn("THREE."+this.type+": '"+b+"' is not a property of this material."):d instanceof THREE.Color?d.set(c):d instanceof THREE.Vector3&&c instanceof THREE.Vector3?d.copy(c):
this[b]="overdraw"===b?Number(c):c}}},toJSON:function(a){function b(a){var b=[],c;for(c in a){var d=a[c];delete d.metadata;b.push(d)}return b}var c=void 0===a;c&&(a={textures:{},images:{}});var d={metadata:{version:4.4,type:"Material",generator:"Material.toJSON"}};d.uuid=this.uuid;d.type=this.type;""!==this.name&&(d.name=this.name);this.color instanceof THREE.Color&&(d.color=this.color.getHex());.5!==this.roughness&&(d.roughness=this.roughness);0<this.metalness&&(d.metalness=this.metalness);this.emissive instanceof
THREE.Color&&(d.emissive=this.emissive.getHex());this.specular instanceof THREE.Color&&(d.specular=this.specular.getHex());void 0!==this.shininess&&(d.shininess=this.shininess);this.map instanceof THREE.Texture&&(d.map=this.map.toJSON(a).uuid);this.alphaMap instanceof THREE.Texture&&(d.alphaMap=this.alphaMap.toJSON(a).uuid);this.lightMap instanceof THREE.Texture&&(d.lightMap=this.lightMap.toJSON(a).uuid);this.bumpMap instanceof THREE.Texture&&(d.bumpMap=this.bumpMap.toJSON(a).uuid,d.bumpScale=this.bumpScale);
this.normalMap instanceof THREE.Texture&&(d.normalMap=this.normalMap.toJSON(a).uuid,d.normalScale=this.normalScale.toArray());this.displacementMap instanceof THREE.Texture&&(d.displacementMap=this.displacementMap.toJSON(a).uuid,d.displacementScale=this.displacementScale,d.displacementBias=this.displacementBias);this.roughnessMap instanceof THREE.Texture&&(d.roughnessMap=this.roughnessMap.toJSON(a).uuid);this.metalnessMap instanceof THREE.Texture&&(d.metalnessMap=this.metalnessMap.toJSON(a).uuid);
this.emissiveMap instanceof THREE.Texture&&(d.emissiveMap=this.emissiveMap.toJSON(a).uuid);this.specularMap instanceof THREE.Texture&&(d.specularMap=this.specularMap.toJSON(a).uuid);this.envMap instanceof THREE.Texture&&(d.envMap=this.envMap.toJSON(a).uuid,d.reflectivity=this.reflectivity);void 0!==this.size&&(d.size=this.size);void 0!==this.sizeAttenuation&&(d.sizeAttenuation=this.sizeAttenuation);void 0!==this.vertexColors&&this.vertexColors!==THREE.NoColors&&(d.vertexColors=this.vertexColors);
void 0!==this.shading&&this.shading!==THREE.SmoothShading&&(d.shading=this.shading);void 0!==this.blending&&this.blending!==THREE.NormalBlending&&(d.blending=this.blending);void 0!==this.side&&this.side!==THREE.FrontSide&&(d.side=this.side);1>this.opacity&&(d.opacity=this.opacity);!0===this.transparent&&(d.transparent=this.transparent);0<this.alphaTest&&(d.alphaTest=this.alphaTest);!0===this.wireframe&&(d.wireframe=this.wireframe);1<this.wireframeLinewidth&&(d.wireframeLinewidth=this.wireframeLinewidth);
c&&(c=b(a.textures),a=b(a.images),0<c.length&&(d.textures=c),0<a.length&&(d.images=a));return d},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.name=a.name;this.side=a.side;this.opacity=a.opacity;this.transparent=a.transparent;this.blending=a.blending;this.blendSrc=a.blendSrc;this.blendDst=a.blendDst;this.blendEquation=a.blendEquation;this.blendSrcAlpha=a.blendSrcAlpha;this.blendDstAlpha=a.blendDstAlpha;this.blendEquationAlpha=a.blendEquationAlpha;this.depthFunc=a.depthFunc;
this.depthTest=a.depthTest;this.depthWrite=a.depthWrite;this.colorWrite=a.colorWrite;this.precision=a.precision;this.polygonOffset=a.polygonOffset;this.polygonOffsetFactor=a.polygonOffsetFactor;this.polygonOffsetUnits=a.polygonOffsetUnits;this.alphaTest=a.alphaTest;this.overdraw=a.overdraw;this.visible=a.visible;return this},update:function(){this.dispatchEvent({type:"update"})},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.Material.prototype);
THREE.MaterialIdCount=0;THREE.LineBasicMaterial=function(a){THREE.Material.call(this);this.type="LineBasicMaterial";this.color=new THREE.Color(16777215);this.linewidth=1;this.linejoin=this.linecap="round";this.vertexColors=THREE.NoColors;this.fog=!0;this.setValues(a)};THREE.LineBasicMaterial.prototype=Object.create(THREE.Material.prototype);THREE.LineBasicMaterial.prototype.constructor=THREE.LineBasicMaterial;
THREE.LineBasicMaterial.prototype.copy=function(a){THREE.Material.prototype.copy.call(this,a);this.color.copy(a.color);this.linewidth=a.linewidth;this.linecap=a.linecap;this.linejoin=a.linejoin;this.vertexColors=a.vertexColors;this.fog=a.fog;return this};THREE.LineDashedMaterial=function(a){THREE.Material.call(this);this.type="LineDashedMaterial";this.color=new THREE.Color(16777215);this.scale=this.linewidth=1;this.dashSize=3;this.gapSize=1;this.vertexColors=THREE.NoColors;this.fog=!0;this.setValues(a)};
THREE.LineDashedMaterial.prototype=Object.create(THREE.Material.prototype);THREE.LineDashedMaterial.prototype.constructor=THREE.LineDashedMaterial;THREE.LineDashedMaterial.prototype.copy=function(a){THREE.Material.prototype.copy.call(this,a);this.color.copy(a.color);this.linewidth=a.linewidth;this.scale=a.scale;this.dashSize=a.dashSize;this.gapSize=a.gapSize;this.vertexColors=a.vertexColors;this.fog=a.fog;return this};
THREE.MeshBasicMaterial=function(a){THREE.Material.call(this);this.type="MeshBasicMaterial";this.color=new THREE.Color(16777215);this.aoMap=this.map=null;this.aoMapIntensity=1;this.envMap=this.alphaMap=this.specularMap=null;this.combine=THREE.MultiplyOperation;this.reflectivity=1;this.refractionRatio=.98;this.fog=!0;this.shading=THREE.SmoothShading;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.vertexColors=THREE.NoColors;this.morphTargets=this.skinning=
!1;this.setValues(a)};THREE.MeshBasicMaterial.prototype=Object.create(THREE.Material.prototype);THREE.MeshBasicMaterial.prototype.constructor=THREE.MeshBasicMaterial;
THREE.MeshBasicMaterial.prototype.copy=function(a){THREE.Material.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.specularMap=a.specularMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.combine=a.combine;this.reflectivity=a.reflectivity;this.refractionRatio=a.refractionRatio;this.fog=a.fog;this.shading=a.shading;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;
this.wireframeLinejoin=a.wireframeLinejoin;this.vertexColors=a.vertexColors;this.skinning=a.skinning;this.morphTargets=a.morphTargets;return this};
THREE.MeshLambertMaterial=function(a){THREE.Material.call(this);this.type="MeshLambertMaterial";this.color=new THREE.Color(16777215);this.lightMap=this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.emissive=new THREE.Color(0);this.emissiveIntensity=1;this.envMap=this.alphaMap=this.specularMap=this.emissiveMap=null;this.combine=THREE.MultiplyOperation;this.reflectivity=1;this.refractionRatio=.98;this.fog=!0;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=
this.wireframeLinecap="round";this.vertexColors=THREE.NoColors;this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)};THREE.MeshLambertMaterial.prototype=Object.create(THREE.Material.prototype);THREE.MeshLambertMaterial.prototype.constructor=THREE.MeshLambertMaterial;
THREE.MeshLambertMaterial.prototype.copy=function(a){THREE.Material.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.emissive.copy(a.emissive);this.emissiveMap=a.emissiveMap;this.emissiveIntensity=a.emissiveIntensity;this.specularMap=a.specularMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.combine=a.combine;this.reflectivity=a.reflectivity;this.refractionRatio=
a.refractionRatio;this.fog=a.fog;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.vertexColors=a.vertexColors;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this};
THREE.MeshPhongMaterial=function(a){THREE.Material.call(this);this.type="MeshPhongMaterial";this.color=new THREE.Color(16777215);this.specular=new THREE.Color(1118481);this.shininess=30;this.lightMap=this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.emissive=new THREE.Color(0);this.emissiveIntensity=1;this.bumpMap=this.emissiveMap=null;this.bumpScale=1;this.normalMap=null;this.normalScale=new THREE.Vector2(1,1);this.displacementMap=null;this.displacementScale=1;this.displacementBias=
0;this.envMap=this.alphaMap=this.specularMap=null;this.combine=THREE.MultiplyOperation;this.reflectivity=1;this.refractionRatio=.98;this.fog=!0;this.shading=THREE.SmoothShading;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.vertexColors=THREE.NoColors;this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)};THREE.MeshPhongMaterial.prototype=Object.create(THREE.Material.prototype);THREE.MeshPhongMaterial.prototype.constructor=THREE.MeshPhongMaterial;
THREE.MeshPhongMaterial.prototype.copy=function(a){THREE.Material.prototype.copy.call(this,a);this.color.copy(a.color);this.specular.copy(a.specular);this.shininess=a.shininess;this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.emissive.copy(a.emissive);this.emissiveMap=a.emissiveMap;this.emissiveIntensity=a.emissiveIntensity;this.bumpMap=a.bumpMap;this.bumpScale=a.bumpScale;this.normalMap=a.normalMap;this.normalScale.copy(a.normalScale);
this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.specularMap=a.specularMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.combine=a.combine;this.reflectivity=a.reflectivity;this.refractionRatio=a.refractionRatio;this.fog=a.fog;this.shading=a.shading;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.vertexColors=
a.vertexColors;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this};
THREE.MeshStandardMaterial=function(a){THREE.Material.call(this);this.type="MeshStandardMaterial";this.color=new THREE.Color(16777215);this.metalness=this.roughness=.5;this.lightMap=this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.emissive=new THREE.Color(0);this.emissiveIntensity=1;this.bumpMap=this.emissiveMap=null;this.bumpScale=1;this.normalMap=null;this.normalScale=new THREE.Vector2(1,1);this.displacementMap=null;this.displacementScale=1;this.displacementBias=
0;this.envMap=this.alphaMap=this.metalnessMap=this.roughnessMap=null;this.envMapIntensity=1;this.refractionRatio=.98;this.fog=!0;this.shading=THREE.SmoothShading;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.vertexColors=THREE.NoColors;this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)};THREE.MeshStandardMaterial.prototype=Object.create(THREE.Material.prototype);THREE.MeshStandardMaterial.prototype.constructor=THREE.MeshStandardMaterial;
THREE.MeshStandardMaterial.prototype.copy=function(a){THREE.Material.prototype.copy.call(this,a);this.color.copy(a.color);this.roughness=a.roughness;this.metalness=a.metalness;this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.emissive.copy(a.emissive);this.emissiveMap=a.emissiveMap;this.emissiveIntensity=a.emissiveIntensity;this.bumpMap=a.bumpMap;this.bumpScale=a.bumpScale;this.normalMap=a.normalMap;this.normalScale.copy(a.normalScale);
this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.roughnessMap=a.roughnessMap;this.metalnessMap=a.metalnessMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.envMapIntensity=a.envMapIntensity;this.refractionRatio=a.refractionRatio;this.fog=a.fog;this.shading=a.shading;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;
this.vertexColors=a.vertexColors;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this};THREE.MeshDepthMaterial=function(a){THREE.Material.call(this);this.type="MeshDepthMaterial";this.wireframe=this.morphTargets=!1;this.wireframeLinewidth=1;this.setValues(a)};THREE.MeshDepthMaterial.prototype=Object.create(THREE.Material.prototype);THREE.MeshDepthMaterial.prototype.constructor=THREE.MeshDepthMaterial;
THREE.MeshDepthMaterial.prototype.copy=function(a){THREE.Material.prototype.copy.call(this,a);this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;return this};THREE.MeshNormalMaterial=function(a){THREE.Material.call(this,a);this.type="MeshNormalMaterial";this.wireframe=!1;this.wireframeLinewidth=1;this.morphTargets=!1;this.setValues(a)};THREE.MeshNormalMaterial.prototype=Object.create(THREE.Material.prototype);THREE.MeshNormalMaterial.prototype.constructor=THREE.MeshNormalMaterial;
THREE.MeshNormalMaterial.prototype.copy=function(a){THREE.Material.prototype.copy.call(this,a);this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;return this};THREE.MultiMaterial=function(a){this.uuid=THREE.Math.generateUUID();this.type="MultiMaterial";this.materials=a instanceof Array?a:[];this.visible=!0};
THREE.MultiMaterial.prototype={constructor:THREE.MultiMaterial,toJSON:function(a){for(var b={metadata:{version:4.2,type:"material",generator:"MaterialExporter"},uuid:this.uuid,type:this.type,materials:[]},c=this.materials,d=0,e=c.length;d<e;d++){var f=c[d].toJSON(a);delete f.metadata;b.materials.push(f)}b.visible=this.visible;return b},clone:function(){for(var a=new this.constructor,b=0;b<this.materials.length;b++)a.materials.push(this.materials[b].clone());a.visible=this.visible;return a}};
THREE.PointsMaterial=function(a){THREE.Material.call(this);this.type="PointsMaterial";this.color=new THREE.Color(16777215);this.map=null;this.size=1;this.sizeAttenuation=!0;this.vertexColors=THREE.NoColors;this.fog=!0;this.setValues(a)};THREE.PointsMaterial.prototype=Object.create(THREE.Material.prototype);THREE.PointsMaterial.prototype.constructor=THREE.PointsMaterial;
THREE.PointsMaterial.prototype.copy=function(a){THREE.Material.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.size=a.size;this.sizeAttenuation=a.sizeAttenuation;this.vertexColors=a.vertexColors;this.fog=a.fog;return this};
THREE.ShaderMaterial=function(a){THREE.Material.call(this);this.type="ShaderMaterial";this.defines={};this.uniforms={};this.vertexShader="void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}";this.fragmentShader="void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";this.shading=THREE.SmoothShading;this.linewidth=1;this.wireframe=!1;this.wireframeLinewidth=1;this.lights=this.fog=!1;this.vertexColors=THREE.NoColors;this.morphNormals=this.morphTargets=
this.skinning=!1;this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1};this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]};this.index0AttributeName=void 0;void 0!==a&&(void 0!==a.attributes&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(a))};THREE.ShaderMaterial.prototype=Object.create(THREE.Material.prototype);THREE.ShaderMaterial.prototype.constructor=THREE.ShaderMaterial;
THREE.ShaderMaterial.prototype.copy=function(a){THREE.Material.prototype.copy.call(this,a);this.fragmentShader=a.fragmentShader;this.vertexShader=a.vertexShader;this.uniforms=THREE.UniformsUtils.clone(a.uniforms);this.defines=a.defines;this.shading=a.shading;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.fog=a.fog;this.lights=a.lights;this.vertexColors=a.vertexColors;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;this.extensions=
a.extensions;return this};THREE.ShaderMaterial.prototype.toJSON=function(a){a=THREE.Material.prototype.toJSON.call(this,a);a.uniforms=this.uniforms;a.vertexShader=this.vertexShader;a.fragmentShader=this.fragmentShader;return a};THREE.RawShaderMaterial=function(a){THREE.ShaderMaterial.call(this,a);this.type="RawShaderMaterial"};THREE.RawShaderMaterial.prototype=Object.create(THREE.ShaderMaterial.prototype);THREE.RawShaderMaterial.prototype.constructor=THREE.RawShaderMaterial;
THREE.SpriteMaterial=function(a){THREE.Material.call(this);this.type="SpriteMaterial";this.color=new THREE.Color(16777215);this.map=null;this.rotation=0;this.fog=!1;this.setValues(a)};THREE.SpriteMaterial.prototype=Object.create(THREE.Material.prototype);THREE.SpriteMaterial.prototype.constructor=THREE.SpriteMaterial;THREE.SpriteMaterial.prototype.copy=function(a){THREE.Material.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.rotation=a.rotation;this.fog=a.fog;return this};
THREE.Texture=function(a,b,c,d,e,f,g,h,k){Object.defineProperty(this,"id",{value:THREE.TextureIdCount++});this.uuid=THREE.Math.generateUUID();this.sourceFile=this.name="";this.image=void 0!==a?a:THREE.Texture.DEFAULT_IMAGE;this.mipmaps=[];this.mapping=void 0!==b?b:THREE.Texture.DEFAULT_MAPPING;this.wrapS=void 0!==c?c:THREE.ClampToEdgeWrapping;this.wrapT=void 0!==d?d:THREE.ClampToEdgeWrapping;this.magFilter=void 0!==e?e:THREE.LinearFilter;this.minFilter=void 0!==f?f:THREE.LinearMipMapLinearFilter;
this.anisotropy=void 0!==k?k:1;this.format=void 0!==g?g:THREE.RGBAFormat;this.type=void 0!==h?h:THREE.UnsignedByteType;this.offset=new THREE.Vector2(0,0);this.repeat=new THREE.Vector2(1,1);this.generateMipmaps=!0;this.premultiplyAlpha=!1;this.flipY=!0;this.unpackAlignment=4;this.version=0;this.onUpdate=null};THREE.Texture.DEFAULT_IMAGE=void 0;THREE.Texture.DEFAULT_MAPPING=THREE.UVMapping;
THREE.Texture.prototype={constructor:THREE.Texture,set needsUpdate(a){!0===a&&this.version++},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.image=a.image;this.mipmaps=a.mipmaps.slice(0);this.mapping=a.mapping;this.wrapS=a.wrapS;this.wrapT=a.wrapT;this.magFilter=a.magFilter;this.minFilter=a.minFilter;this.anisotropy=a.anisotropy;this.format=a.format;this.type=a.type;this.offset.copy(a.offset);this.repeat.copy(a.repeat);this.generateMipmaps=a.generateMipmaps;this.premultiplyAlpha=
a.premultiplyAlpha;this.flipY=a.flipY;this.unpackAlignment=a.unpackAlignment;return this},toJSON:function(a){if(void 0!==a.textures[this.uuid])return a.textures[this.uuid];var b={metadata:{version:4.4,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],wrap:[this.wrapS,this.wrapT],minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy};if(void 0!==this.image){var c=
this.image;void 0===c.uuid&&(c.uuid=THREE.Math.generateUUID());if(void 0===a.images[c.uuid]){var d=a.images,e=c.uuid,f=c.uuid,g;void 0!==c.toDataURL?g=c:(g=document.createElement("canvas"),g.width=c.width,g.height=c.height,g.getContext("2d").drawImage(c,0,0,c.width,c.height));g=2048<g.width||2048<g.height?g.toDataURL("image/jpeg",.6):g.toDataURL("image/png");d[e]={uuid:f,url:g}}b.image=c.uuid}return a.textures[this.uuid]=b},dispose:function(){this.dispatchEvent({type:"dispose"})},transformUv:function(a){if(this.mapping===
THREE.UVMapping){a.multiply(this.repeat);a.add(this.offset);if(0>a.x||1<a.x)switch(this.wrapS){case THREE.RepeatWrapping:a.x-=Math.floor(a.x);break;case THREE.ClampToEdgeWrapping:a.x=0>a.x?0:1;break;case THREE.MirroredRepeatWrapping:1===Math.abs(Math.floor(a.x)%2)?a.x=Math.ceil(a.x)-a.x:a.x-=Math.floor(a.x)}if(0>a.y||1<a.y)switch(this.wrapT){case THREE.RepeatWrapping:a.y-=Math.floor(a.y);break;case THREE.ClampToEdgeWrapping:a.y=0>a.y?0:1;break;case THREE.MirroredRepeatWrapping:1===Math.abs(Math.floor(a.y)%
2)?a.y=Math.ceil(a.y)-a.y:a.y-=Math.floor(a.y)}this.flipY&&(a.y=1-a.y)}}};THREE.EventDispatcher.prototype.apply(THREE.Texture.prototype);THREE.TextureIdCount=0;THREE.CanvasTexture=function(a,b,c,d,e,f,g,h,k){THREE.Texture.call(this,a,b,c,d,e,f,g,h,k);this.needsUpdate=!0};THREE.CanvasTexture.prototype=Object.create(THREE.Texture.prototype);THREE.CanvasTexture.prototype.constructor=THREE.CanvasTexture;
THREE.CubeTexture=function(a,b,c,d,e,f,g,h,k){b=void 0!==b?b:THREE.CubeReflectionMapping;THREE.Texture.call(this,a,b,c,d,e,f,g,h,k);this.images=a;this.flipY=!1};THREE.CubeTexture.prototype=Object.create(THREE.Texture.prototype);THREE.CubeTexture.prototype.constructor=THREE.CubeTexture;THREE.CubeTexture.prototype.copy=function(a){THREE.Texture.prototype.copy.call(this,a);this.images=a.images;return this};
THREE.CompressedTexture=function(a,b,c,d,e,f,g,h,k,l,m){THREE.Texture.call(this,null,f,g,h,k,l,d,e,m);this.image={width:b,height:c};this.mipmaps=a;this.generateMipmaps=this.flipY=!1};THREE.CompressedTexture.prototype=Object.create(THREE.Texture.prototype);THREE.CompressedTexture.prototype.constructor=THREE.CompressedTexture;
THREE.DataTexture=function(a,b,c,d,e,f,g,h,k,l,m){THREE.Texture.call(this,null,f,g,h,k,l,d,e,m);this.image={data:a,width:b,height:c};this.magFilter=void 0!==k?k:THREE.NearestFilter;this.minFilter=void 0!==l?l:THREE.NearestFilter;this.generateMipmaps=this.flipY=!1};THREE.DataTexture.prototype=Object.create(THREE.Texture.prototype);THREE.DataTexture.prototype.constructor=THREE.DataTexture;
THREE.VideoTexture=function(a,b,c,d,e,f,g,h,k){function l(){requestAnimationFrame(l);a.readyState===a.HAVE_ENOUGH_DATA&&(m.needsUpdate=!0)}THREE.Texture.call(this,a,b,c,d,e,f,g,h,k);this.generateMipmaps=!1;var m=this;l()};THREE.VideoTexture.prototype=Object.create(THREE.Texture.prototype);THREE.VideoTexture.prototype.constructor=THREE.VideoTexture;THREE.Group=function(){THREE.Object3D.call(this);this.type="Group"};THREE.Group.prototype=Object.create(THREE.Object3D.prototype);
THREE.Group.prototype.constructor=THREE.Group;THREE.Points=function(a,b){THREE.Object3D.call(this);this.type="Points";this.geometry=void 0!==a?a:new THREE.Geometry;this.material=void 0!==b?b:new THREE.PointsMaterial({color:16777215*Math.random()})};THREE.Points.prototype=Object.create(THREE.Object3D.prototype);THREE.Points.prototype.constructor=THREE.Points;
THREE.Points.prototype.raycast=function(){var a=new THREE.Matrix4,b=new THREE.Ray,c=new THREE.Sphere;return function(d,e){function f(a,c){var f=b.distanceSqToPoint(a);if(f<m){var h=b.closestPointToPoint(a);h.applyMatrix4(k);var l=d.ray.origin.distanceTo(h);l<d.near||l>d.far||e.push({distance:l,distanceToRay:Math.sqrt(f),point:h.clone(),index:c,face:null,object:g})}}var g=this,h=this.geometry,k=this.matrixWorld,l=d.params.Points.threshold;null===h.boundingSphere&&h.computeBoundingSphere();c.copy(h.boundingSphere);
c.applyMatrix4(k);if(!1!==d.ray.intersectsSphere(c)){a.getInverse(k);b.copy(d.ray).applyMatrix4(a);var l=l/((this.scale.x+this.scale.y+this.scale.z)/3),m=l*l,l=new THREE.Vector3;if(h instanceof THREE.BufferGeometry){var p=h.index,h=h.attributes.position.array;if(null!==p)for(var n=p.array,p=0,q=n.length;p<q;p++){var s=n[p];l.fromArray(h,3*s);f(l,s)}else for(p=0,n=h.length/3;p<n;p++)l.fromArray(h,3*p),f(l,p)}else for(l=h.vertices,p=0,n=l.length;p<n;p++)f(l[p],p)}}}();
THREE.Points.prototype.clone=function(){return(new this.constructor(this.geometry,this.material)).copy(this)};THREE.Line=function(a,b,c){if(1===c)return console.warn("THREE.Line: parameter THREE.LinePieces no longer supported. Created THREE.LineSegments instead."),new THREE.LineSegments(a,b);THREE.Object3D.call(this);this.type="Line";this.geometry=void 0!==a?a:new THREE.Geometry;this.material=void 0!==b?b:new THREE.LineBasicMaterial({color:16777215*Math.random()})};THREE.Line.prototype=Object.create(THREE.Object3D.prototype);
THREE.Line.prototype.constructor=THREE.Line;
THREE.Line.prototype.raycast=function(){var a=new THREE.Matrix4,b=new THREE.Ray,c=new THREE.Sphere;return function(d,e){var f=d.linePrecision,f=f*f,g=this.geometry,h=this.matrixWorld;null===g.boundingSphere&&g.computeBoundingSphere();c.copy(g.boundingSphere);c.applyMatrix4(h);if(!1!==d.ray.intersectsSphere(c)){a.getInverse(h);b.copy(d.ray).applyMatrix4(a);var k=new THREE.Vector3,l=new THREE.Vector3,h=new THREE.Vector3,m=new THREE.Vector3,p=this instanceof THREE.LineSegments?2:1;if(g instanceof THREE.BufferGeometry){var n=
g.index,q=g.attributes.position.array;if(null!==n)for(var n=n.array,g=0,s=n.length-1;g<s;g+=p){var u=n[g+1];k.fromArray(q,3*n[g]);l.fromArray(q,3*u);u=b.distanceSqToSegment(k,l,m,h);u>f||(m.applyMatrix4(this.matrixWorld),u=d.ray.origin.distanceTo(m),u<d.near||u>d.far||e.push({distance:u,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this}))}else for(g=0,s=q.length/3-1;g<s;g+=p)k.fromArray(q,3*g),l.fromArray(q,3*g+3),u=b.distanceSqToSegment(k,l,m,h),u>f||(m.applyMatrix4(this.matrixWorld),
u=d.ray.origin.distanceTo(m),u<d.near||u>d.far||e.push({distance:u,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this}))}else if(g instanceof THREE.Geometry)for(k=g.vertices,l=k.length,g=0;g<l-1;g+=p)u=b.distanceSqToSegment(k[g],k[g+1],m,h),u>f||(m.applyMatrix4(this.matrixWorld),u=d.ray.origin.distanceTo(m),u<d.near||u>d.far||e.push({distance:u,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this}))}}}();
THREE.Line.prototype.clone=function(){return(new this.constructor(this.geometry,this.material)).copy(this)};THREE.LineStrip=0;THREE.LinePieces=1;THREE.LineSegments=function(a,b){THREE.Line.call(this,a,b);this.type="LineSegments"};THREE.LineSegments.prototype=Object.create(THREE.Line.prototype);THREE.LineSegments.prototype.constructor=THREE.LineSegments;
THREE.Mesh=function(a,b){THREE.Object3D.call(this);this.type="Mesh";this.geometry=void 0!==a?a:new THREE.Geometry;this.material=void 0!==b?b:new THREE.MeshBasicMaterial({color:16777215*Math.random()});this.drawMode=THREE.TrianglesDrawMode;this.updateMorphTargets()};THREE.Mesh.prototype=Object.create(THREE.Object3D.prototype);THREE.Mesh.prototype.constructor=THREE.Mesh;THREE.Mesh.prototype.setDrawMode=function(a){this.drawMode=a};
THREE.Mesh.prototype.updateMorphTargets=function(){if(void 0!==this.geometry.morphTargets&&0<this.geometry.morphTargets.length){this.morphTargetBase=-1;this.morphTargetInfluences=[];this.morphTargetDictionary={};for(var a=0,b=this.geometry.morphTargets.length;a<b;a++)this.morphTargetInfluences.push(0),this.morphTargetDictionary[this.geometry.morphTargets[a].name]=a}};
THREE.Mesh.prototype.getMorphTargetIndexByName=function(a){if(void 0!==this.morphTargetDictionary[a])return this.morphTargetDictionary[a];console.warn("THREE.Mesh.getMorphTargetIndexByName: morph target "+a+" does not exist. Returning 0.");return 0};
THREE.Mesh.prototype.raycast=function(){function a(a,b,c,d,e,f,g){THREE.Triangle.barycoordFromPoint(a,b,c,d,u);e.multiplyScalar(u.x);f.multiplyScalar(u.y);g.multiplyScalar(u.z);e.add(f).add(g);return e.clone()}function b(a,b,c,d,e,f,g){var h=a.material;if(null===(h.side===THREE.BackSide?c.intersectTriangle(f,e,d,!0,g):c.intersectTriangle(d,e,f,h.side!==THREE.DoubleSide,g)))return null;w.copy(g);w.applyMatrix4(a.matrixWorld);c=b.ray.origin.distanceTo(w);return c<b.near||c>b.far?null:{distance:c,point:w.clone(),
object:a}}function c(c,d,e,f,l,m,p,w){g.fromArray(f,3*m);h.fromArray(f,3*p);k.fromArray(f,3*w);if(c=b(c,d,e,g,h,k,t))l&&(n.fromArray(l,2*m),q.fromArray(l,2*p),s.fromArray(l,2*w),c.uv=a(t,g,h,k,n,q,s)),c.face=new THREE.Face3(m,p,w,THREE.Triangle.normal(g,h,k)),c.faceIndex=m;return c}var d=new THREE.Matrix4,e=new THREE.Ray,f=new THREE.Sphere,g=new THREE.Vector3,h=new THREE.Vector3,k=new THREE.Vector3,l=new THREE.Vector3,m=new THREE.Vector3,p=new THREE.Vector3,n=new THREE.Vector2,q=new THREE.Vector2,
s=new THREE.Vector2,u=new THREE.Vector3,t=new THREE.Vector3,w=new THREE.Vector3;return function(w,u){var x=this.geometry,B=this.material,z=this.matrixWorld;if(void 0!==B&&(null===x.boundingSphere&&x.computeBoundingSphere(),f.copy(x.boundingSphere),f.applyMatrix4(z),!1!==w.ray.intersectsSphere(f)&&(d.getInverse(z),e.copy(w.ray).applyMatrix4(d),null===x.boundingBox||!1!==e.intersectsBox(x.boundingBox)))){var A,y;if(x instanceof THREE.BufferGeometry){var J,E,B=x.index,z=x.attributes,x=z.position.array;
void 0!==z.uv&&(A=z.uv.array);if(null!==B)for(var z=B.array,F=0,I=z.length;F<I;F+=3){if(B=z[F],J=z[F+1],E=z[F+2],y=c(this,w,e,x,A,B,J,E))y.faceIndex=Math.floor(F/3),u.push(y)}else for(F=0,I=x.length;F<I;F+=9)if(B=F/3,J=B+1,E=B+2,y=c(this,w,e,x,A,B,J,E))y.index=B,u.push(y)}else if(x instanceof THREE.Geometry){var Q,N,z=B instanceof THREE.MeshFaceMaterial,F=!0===z?B.materials:null,I=x.vertices;J=x.faces;E=x.faceVertexUvs[0];0<E.length&&(A=E);for(var L=0,G=J.length;L<G;L++){var M=J[L];y=!0===z?F[M.materialIndex]:
B;if(void 0!==y){E=I[M.a];Q=I[M.b];N=I[M.c];if(!0===y.morphTargets){y=x.morphTargets;var R=this.morphTargetInfluences;g.set(0,0,0);h.set(0,0,0);k.set(0,0,0);for(var P=0,O=y.length;P<O;P++){var K=R[P];if(0!==K){var D=y[P].vertices;g.addScaledVector(l.subVectors(D[M.a],E),K);h.addScaledVector(m.subVectors(D[M.b],Q),K);k.addScaledVector(p.subVectors(D[M.c],N),K)}}g.add(E);h.add(Q);k.add(N);E=g;Q=h;N=k}if(y=b(this,w,e,E,Q,N,t))A&&(R=A[L],n.copy(R[0]),q.copy(R[1]),s.copy(R[2]),y.uv=a(t,E,Q,N,n,q,s)),y.face=
M,y.faceIndex=L,u.push(y)}}}}}}();THREE.Mesh.prototype.clone=function(){return(new this.constructor(this.geometry,this.material)).copy(this)};THREE.Bone=function(a){THREE.Object3D.call(this);this.type="Bone";this.skin=a};THREE.Bone.prototype=Object.create(THREE.Object3D.prototype);THREE.Bone.prototype.constructor=THREE.Bone;THREE.Bone.prototype.copy=function(a){THREE.Object3D.prototype.copy.call(this,a);this.skin=a.skin;return this};
THREE.Skeleton=function(a,b,c){this.useVertexTexture=void 0!==c?c:!0;this.identityMatrix=new THREE.Matrix4;a=a||[];this.bones=a.slice(0);this.useVertexTexture?(a=Math.sqrt(4*this.bones.length),a=THREE.Math.nextPowerOfTwo(Math.ceil(a)),this.boneTextureHeight=this.boneTextureWidth=a=Math.max(a,4),this.boneMatrices=new Float32Array(this.boneTextureWidth*this.boneTextureHeight*4),this.boneTexture=new THREE.DataTexture(this.boneMatrices,this.boneTextureWidth,this.boneTextureHeight,THREE.RGBAFormat,THREE.FloatType)):
this.boneMatrices=new Float32Array(16*this.bones.length);if(void 0===b)this.calculateInverses();else if(this.bones.length===b.length)this.boneInverses=b.slice(0);else for(console.warn("THREE.Skeleton bonInverses is the wrong length."),this.boneInverses=[],b=0,a=this.bones.length;b<a;b++)this.boneInverses.push(new THREE.Matrix4)};
THREE.Skeleton.prototype.calculateInverses=function(){this.boneInverses=[];for(var a=0,b=this.bones.length;a<b;a++){var c=new THREE.Matrix4;this.bones[a]&&c.getInverse(this.bones[a].matrixWorld);this.boneInverses.push(c)}};
THREE.Skeleton.prototype.pose=function(){for(var a,b=0,c=this.bones.length;b<c;b++)(a=this.bones[b])&&a.matrixWorld.getInverse(this.boneInverses[b]);b=0;for(c=this.bones.length;b<c;b++)if(a=this.bones[b])a.parent?(a.matrix.getInverse(a.parent.matrixWorld),a.matrix.multiply(a.matrixWorld)):a.matrix.copy(a.matrixWorld),a.matrix.decompose(a.position,a.quaternion,a.scale)};
THREE.Skeleton.prototype.update=function(){var a=new THREE.Matrix4;return function(){for(var b=0,c=this.bones.length;b<c;b++)a.multiplyMatrices(this.bones[b]?this.bones[b].matrixWorld:this.identityMatrix,this.boneInverses[b]),a.flattenToArrayOffset(this.boneMatrices,16*b);this.useVertexTexture&&(this.boneTexture.needsUpdate=!0)}}();THREE.Skeleton.prototype.clone=function(){return new THREE.Skeleton(this.bones,this.boneInverses,this.useVertexTexture)};
THREE.SkinnedMesh=function(a,b,c){THREE.Mesh.call(this,a,b);this.type="SkinnedMesh";this.bindMode="attached";this.bindMatrix=new THREE.Matrix4;this.bindMatrixInverse=new THREE.Matrix4;a=[];if(this.geometry&&void 0!==this.geometry.bones){for(var d,e=0,f=this.geometry.bones.length;e<f;++e)d=this.geometry.bones[e],b=new THREE.Bone(this),a.push(b),b.name=d.name,b.position.fromArray(d.pos),b.quaternion.fromArray(d.rotq),void 0!==d.scl&&b.scale.fromArray(d.scl);e=0;for(f=this.geometry.bones.length;e<f;++e)d=
this.geometry.bones[e],-1!==d.parent&&null!==d.parent?a[d.parent].add(a[e]):this.add(a[e])}this.normalizeSkinWeights();this.updateMatrixWorld(!0);this.bind(new THREE.Skeleton(a,void 0,c),this.matrixWorld)};THREE.SkinnedMesh.prototype=Object.create(THREE.Mesh.prototype);THREE.SkinnedMesh.prototype.constructor=THREE.SkinnedMesh;
THREE.SkinnedMesh.prototype.bind=function(a,b){this.skeleton=a;void 0===b&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),b=this.matrixWorld);this.bindMatrix.copy(b);this.bindMatrixInverse.getInverse(b)};THREE.SkinnedMesh.prototype.pose=function(){this.skeleton.pose()};
THREE.SkinnedMesh.prototype.normalizeSkinWeights=function(){if(this.geometry instanceof THREE.Geometry)for(var a=0;a<this.geometry.skinWeights.length;a++){var b=this.geometry.skinWeights[a],c=1/b.lengthManhattan();Infinity!==c?b.multiplyScalar(c):b.set(1,0,0,0)}else if(this.geometry instanceof THREE.BufferGeometry)for(var b=new THREE.Vector4,d=this.geometry.attributes.skinWeight,a=0;a<d.count;a++)b.x=d.getX(a),b.y=d.getY(a),b.z=d.getZ(a),b.w=d.getW(a),c=1/b.lengthManhattan(),Infinity!==c?b.multiplyScalar(c):
b.set(1,0,0,0),d.setXYZW(a,b.x,b.y,b.z,b.w)};THREE.SkinnedMesh.prototype.updateMatrixWorld=function(a){THREE.Mesh.prototype.updateMatrixWorld.call(this,!0);"attached"===this.bindMode?this.bindMatrixInverse.getInverse(this.matrixWorld):"detached"===this.bindMode?this.bindMatrixInverse.getInverse(this.bindMatrix):console.warn("THREE.SkinnedMesh unrecognized bindMode: "+this.bindMode)};THREE.SkinnedMesh.prototype.clone=function(){return(new this.constructor(this.geometry,this.material,this.useVertexTexture)).copy(this)};
THREE.LOD=function(){THREE.Object3D.call(this);this.type="LOD";Object.defineProperties(this,{levels:{enumerable:!0,value:[]},objects:{get:function(){console.warn("THREE.LOD: .objects has been renamed to .levels.");return this.levels}}})};THREE.LOD.prototype=Object.create(THREE.Object3D.prototype);THREE.LOD.prototype.constructor=THREE.LOD;
THREE.LOD.prototype.addLevel=function(a,b){void 0===b&&(b=0);b=Math.abs(b);for(var c=this.levels,d=0;d<c.length&&!(b<c[d].distance);d++);c.splice(d,0,{distance:b,object:a});this.add(a)};THREE.LOD.prototype.getObjectForDistance=function(a){for(var b=this.levels,c=1,d=b.length;c<d&&!(a<b[c].distance);c++);return b[c-1].object};
THREE.LOD.prototype.raycast=function(){var a=new THREE.Vector3;return function(b,c){a.setFromMatrixPosition(this.matrixWorld);var d=b.ray.origin.distanceTo(a);this.getObjectForDistance(d).raycast(b,c)}}();
THREE.LOD.prototype.update=function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c){var d=this.levels;if(1<d.length){a.setFromMatrixPosition(c.matrixWorld);b.setFromMatrixPosition(this.matrixWorld);c=a.distanceTo(b);d[0].object.visible=!0;for(var e=1,f=d.length;e<f;e++)if(c>=d[e].distance)d[e-1].object.visible=!1,d[e].object.visible=!0;else break;for(;e<f;e++)d[e].object.visible=!1}}}();
THREE.LOD.prototype.copy=function(a){THREE.Object3D.prototype.copy.call(this,a,!1);a=a.levels;for(var b=0,c=a.length;b<c;b++){var d=a[b];this.addLevel(d.object.clone(),d.distance)}return this};THREE.LOD.prototype.toJSON=function(a){a=THREE.Object3D.prototype.toJSON.call(this,a);a.object.levels=[];for(var b=this.levels,c=0,d=b.length;c<d;c++){var e=b[c];a.object.levels.push({object:e.object.uuid,distance:e.distance})}return a};
THREE.Sprite=function(){var a=new Uint16Array([0,1,2,0,2,3]),b=new Float32Array([-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0]),c=new Float32Array([0,0,1,0,1,1,0,1]),d=new THREE.BufferGeometry;d.setIndex(new THREE.BufferAttribute(a,1));d.addAttribute("position",new THREE.BufferAttribute(b,3));d.addAttribute("uv",new THREE.BufferAttribute(c,2));return function(a){THREE.Object3D.call(this);this.type="Sprite";this.geometry=d;this.material=void 0!==a?a:new THREE.SpriteMaterial}}();THREE.Sprite.prototype=Object.create(THREE.Object3D.prototype);
THREE.Sprite.prototype.constructor=THREE.Sprite;THREE.Sprite.prototype.raycast=function(){var a=new THREE.Vector3;return function(b,c){a.setFromMatrixPosition(this.matrixWorld);var d=b.ray.distanceSqToPoint(a);d>this.scale.x*this.scale.y||c.push({distance:Math.sqrt(d),point:this.position,face:null,object:this})}}();THREE.Sprite.prototype.clone=function(){return(new this.constructor(this.material)).copy(this)};THREE.Particle=THREE.Sprite;
THREE.LensFlare=function(a,b,c,d,e){THREE.Object3D.call(this);this.lensFlares=[];this.positionScreen=new THREE.Vector3;this.customUpdateCallback=void 0;void 0!==a&&this.add(a,b,c,d,e)};THREE.LensFlare.prototype=Object.create(THREE.Object3D.prototype);THREE.LensFlare.prototype.constructor=THREE.LensFlare;
THREE.LensFlare.prototype.add=function(a,b,c,d,e,f){void 0===b&&(b=-1);void 0===c&&(c=0);void 0===f&&(f=1);void 0===e&&(e=new THREE.Color(16777215));void 0===d&&(d=THREE.NormalBlending);c=Math.min(c,Math.max(0,c));this.lensFlares.push({texture:a,size:b,distance:c,x:0,y:0,z:0,scale:1,rotation:0,opacity:f,color:e,blending:d})};
THREE.LensFlare.prototype.updateLensFlares=function(){var a,b=this.lensFlares.length,c,d=2*-this.positionScreen.x,e=2*-this.positionScreen.y;for(a=0;a<b;a++)c=this.lensFlares[a],c.x=this.positionScreen.x+d*c.distance,c.y=this.positionScreen.y+e*c.distance,c.wantedRotation=c.x*Math.PI*.25,c.rotation+=.25*(c.wantedRotation-c.rotation)};
THREE.LensFlare.prototype.copy=function(a){THREE.Object3D.prototype.copy.call(this,a);this.positionScreen.copy(a.positionScreen);this.customUpdateCallback=a.customUpdateCallback;for(var b=0,c=a.lensFlares.length;b<c;b++)this.lensFlares.push(a.lensFlares[b]);return this};THREE.Scene=function(){THREE.Object3D.call(this);this.type="Scene";this.overrideMaterial=this.fog=null;this.autoUpdate=!0};THREE.Scene.prototype=Object.create(THREE.Object3D.prototype);THREE.Scene.prototype.constructor=THREE.Scene;
THREE.Scene.prototype.copy=function(a){THREE.Object3D.prototype.copy.call(this,a);null!==a.fog&&(this.fog=a.fog.clone());null!==a.overrideMaterial&&(this.overrideMaterial=a.overrideMaterial.clone());this.autoUpdate=a.autoUpdate;this.matrixAutoUpdate=a.matrixAutoUpdate;return this};THREE.Fog=function(a,b,c){this.name="";this.color=new THREE.Color(a);this.near=void 0!==b?b:1;this.far=void 0!==c?c:1E3};THREE.Fog.prototype.clone=function(){return new THREE.Fog(this.color.getHex(),this.near,this.far)};
THREE.FogExp2=function(a,b){this.name="";this.color=new THREE.Color(a);this.density=void 0!==b?b:2.5E-4};THREE.FogExp2.prototype.clone=function(){return new THREE.FogExp2(this.color.getHex(),this.density)};THREE.ShaderChunk={};THREE.ShaderChunk.alphamap_fragment="#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif\n";THREE.ShaderChunk.alphamap_pars_fragment="#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif\n";THREE.ShaderChunk.alphatest_fragment="#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif\n";
THREE.ShaderChunk.ambient_pars="uniform vec3 ambientLightColor;\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\treturn PI * ambientLightColor;\n}\n";THREE.ShaderChunk.aomap_fragment="#ifdef USE_AOMAP\n\treflectedLight.indirectDiffuse *= ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n#endif\n";THREE.ShaderChunk.aomap_pars_fragment="#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif";THREE.ShaderChunk.begin_vertex="\nvec3 transformed = vec3( position );\n";
THREE.ShaderChunk.beginnormal_vertex="\nvec3 objectNormal = vec3( normal );\n";THREE.ShaderChunk.bsdfs="float calcLightAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\tif ( decayExponent > 0.0 ) {\n\t  return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t}\n\treturn 1.0;\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = alpha * alpha;\n\tfloat gl = dotNL + pow( a2 + ( 1.0 - a2 ) * dotNL * dotNL, 0.5 );\n\tfloat gv = dotNV + pow( a2 + ( 1.0 - a2 ) * dotNV * dotNV, 0.5 );\n\treturn 1.0 / ( gl * gv );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = alpha * alpha;\n\tfloat denom = dotNH * dotNH * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / ( denom * denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = roughness * roughness;\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_Smith( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n\treturn specularColor * AB.x + AB.y;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / square( ggxRoughness + 0.0001 ) - 2.0 );\n}";
THREE.ShaderChunk.bumpmap_pars_fragment="#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = dFdx( surf_pos );\n\t\tvec3 vSigmaY = dFdy( surf_pos );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif\n";
THREE.ShaderChunk.color_fragment="#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif";THREE.ShaderChunk.color_pars_fragment="#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif\n";THREE.ShaderChunk.color_pars_vertex="#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif";THREE.ShaderChunk.color_vertex="#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif";THREE.ShaderChunk.common="#define PI 3.14159\n#define PI2 6.28318\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\nfloat square( const in float x ) { return x*x; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nvec3 inputToLinear( in vec3 a ) {\n\t#ifdef GAMMA_INPUT\n\t\treturn pow( a, vec3( float( GAMMA_FACTOR ) ) );\n\t#else\n\t\treturn a;\n\t#endif\n}\nvec3 linearToOutput( in vec3 a ) {\n\t#ifdef GAMMA_OUTPUT\n\t\treturn pow( a, vec3( 1.0 / float( GAMMA_FACTOR ) ) );\n\t#else\n\t\treturn a;\n\t#endif\n}\n";
THREE.ShaderChunk.defaultnormal_vertex="#ifdef FLIP_SIDED\n\tobjectNormal = -objectNormal;\n#endif\nvec3 transformedNormal = normalMatrix * objectNormal;\n";THREE.ShaderChunk.displacementmap_vertex="#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normal * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif\n";THREE.ShaderChunk.displacementmap_pars_vertex="#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif\n";
THREE.ShaderChunk.emissivemap_fragment="#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = inputToLinear( emissiveColor.rgb );\n\ttotalEmissiveLight *= emissiveColor.rgb;\n#endif\n";THREE.ShaderChunk.emissivemap_pars_fragment="#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif\n";THREE.ShaderChunk.envmap_fragment="#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tfloat flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#else\n\t\tfloat flipNormal = 1.0;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\tsampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n\t\tsampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\tvec3 reflectView = flipNormal * normalize((viewMatrix * vec4( reflectVec, 0.0 )).xyz + vec3(0.0,0.0,1.0));\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#endif\n\tenvColor.xyz = inputToLinear( envColor.xyz );\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif\n";
THREE.ShaderChunk.envmap_pars_fragment="#if defined( USE_ENVMAP ) || defined( STANDARD )\n\tuniform float reflectivity;\n\tuniform float envMapIntenstiy;\n#endif\n#ifdef USE_ENVMAP\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( STANDARD )\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif\n";
THREE.ShaderChunk.envmap_pars_vertex="#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP ) && ! defined( PHONG ) && ! defined( STANDARD )\n\tvarying vec3 vReflect;\n\tuniform float refractionRatio;\n#endif\n";THREE.ShaderChunk.envmap_vertex="#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP ) && ! defined( PHONG ) && ! defined( STANDARD )\n\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t#ifdef ENVMAP_MODE_REFLECTION\n\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t#else\n\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t#endif\n#endif\n";
THREE.ShaderChunk.fog_fragment="#ifdef USE_FOG\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;\n\t#else\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\t#endif\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * depth * depth * LOG2 ) );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, depth );\n\t#endif\n\t\n\toutgoingLight = mix( outgoingLight, fogColor, fogFactor );\n#endif";
THREE.ShaderChunk.fog_pars_fragment="#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif";THREE.ShaderChunk.lightmap_fragment="#ifdef USE_LIGHTMAP\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif\n";THREE.ShaderChunk.lightmap_pars_fragment="#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif";
THREE.ShaderChunk.lights_lambert_vertex="vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tIncidentLight directLight = getPointDirectLight( pointLights[ i ], geometry );\n\t\tfloat dotNL = dot( geometry.normal, directLight.direction );\n\t\tvec3 directLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tIncidentLight directLight = getSpotDirectLight( spotLights[ i ], geometry );\n\t\tfloat dotNL = dot( geometry.normal, directLight.direction );\n\t\tvec3 directLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tIncidentLight directLight = getDirectionalDirectLight( directionalLights[ i ], geometry );\n\t\tfloat dotNL = dot( geometry.normal, directLight.direction );\n\t\tvec3 directLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n\t{\n\t\t#if NUM_HEMI_LIGHTS > 0\n\t\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\t\tvLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t\t\t#ifdef DOUBLE_SIDED\n\t\t\t\t\tvLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t\t\t#endif\n\t\t\t}\n\t\t#endif\n\t}\n";
THREE.ShaderChunk.lights_pars="#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t  vec3 direction;\n\t  vec3 color;\n\t  int shadow;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tIncidentLight getDirectionalDirectLight( const in DirectionalLight directionalLight, const in GeometricContext geometry ) {\n\t\tIncidentLight directLight;\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\treturn directLight;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t  vec3 position;\n\t  vec3 color;\n\t  float distance;\n\t  float decay;\n\t  int shadow;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tIncidentLight getPointDirectLight( const in PointLight pointLight, const in GeometricContext geometry ) {\n\t\tIncidentLight directLight;\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= calcLightAttenuation( length( lVector ), pointLight.distance, pointLight.decay );\n\t\treturn directLight;\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t  vec3 position;\n\t  vec3 direction;\n\t  vec3 color;\n\t  float distance;\n\t  float decay;\n\t  float angleCos;\n\t  float exponent;\n\t  int shadow;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tIncidentLight getSpotDirectLight( const in SpotLight spotLight, const in GeometricContext geometry ) {\n\t\tIncidentLight directLight;\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat spotEffect = dot( directLight.direction, spotLight.direction );\n\t\tif ( spotEffect > spotLight.angleCos ) {\n\t\t\tfloat spotEffect = dot( spotLight.direction, directLight.direction );\n\t\t\tspotEffect = saturate( pow( saturate( spotEffect ), spotLight.exponent ) );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= ( spotEffect * calcLightAttenuation( length( lVector ), spotLight.distance, spotLight.decay ) );\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t}\n\t\treturn directLight;\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t  vec3 direction;\n\t  vec3 skyColor;\n\t  vec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\treturn PI * mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t}\n#endif\n#if defined( USE_ENVMAP ) && defined( STANDARD )\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tfloat flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#else\n\t\t\tfloat flipNormal = 1.0;\n\t\t#endif\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = flipNormal * vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t#else\n\t\t\tvec3 envMapColor = vec3( 0.0 );\n\t\t#endif\n\t\tenvMapColor.rgb = inputToLinear( envMapColor.rgb );\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar - 0.79248 - 0.5 * log2( square( blinnShininessExponent ) + 1.0 );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n\t\t#endif\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tfloat flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#else\n\t\t\tfloat flipNormal = 1.0;\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n\t\t\tsampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = flipNormal * normalize((viewMatrix * vec4( reflectVec, 0.0 )).xyz + vec3(0.0,0.0,1.0));\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t#endif\n\t\tenvMapColor.rgb = inputToLinear( envMapColor.rgb );\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif\n";
THREE.ShaderChunk.lights_phong_fragment="BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n";THREE.ShaderChunk.lights_phong_pars_fragment="#ifdef USE_ENVMAP\n\tvarying vec3 vWorldPosition;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * PI * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)\n";
THREE.ShaderChunk.lights_phong_pars_vertex="#ifdef USE_ENVMAP\n\tvarying vec3 vWorldPosition;\n#endif\n";THREE.ShaderChunk.lights_phong_vertex="#ifdef USE_ENVMAP\n\tvWorldPosition = worldPosition.xyz;\n#endif\n";THREE.ShaderChunk.lights_standard_fragment="StandardMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\nmaterial.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n";
THREE.ShaderChunk.lights_standard_pars_fragment="struct StandardMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n};\nvoid RE_Direct_Standard( const in IncidentLight directLight, const in GeometricContext geometry, const in StandardMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * PI * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n}\nvoid RE_IndirectDiffuse_Standard( const in vec3 irradiance, const in GeometricContext geometry, const in StandardMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Standard( const in vec3 radiance, const in GeometricContext geometry, const in StandardMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectSpecular += radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Standard\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Standard\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Standard\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\n";
THREE.ShaderChunk.lights_template="\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tPointLight pointLight = pointLights[ i ];\n\t\tIncidentLight directLight = getPointDirectLight( pointLight, geometry );\n\t\t#ifdef USE_SHADOWMAP\n\t\tif ( pointLight.shadow > - 1 ) {\n\t\t\tfor ( int j = 0; j < NUM_SHADOWS; j ++ ) {\n\t\t\t\tif ( j == pointLight.shadow ) {\n\t\t\t\t\tdirectLight.color *= shadows[ j ];\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tSpotLight spotLight = spotLights[ i ];\n\t\tIncidentLight directLight = getSpotDirectLight( spotLight, geometry );\n\t\t#ifdef USE_SHADOWMAP\n\t\tif ( spotLight.shadow > - 1 ) {\n\t\t\tfor ( int j = 0; j < NUM_SHADOWS; j ++ ) {\n\t\t\t\tif ( j == spotLight.shadow ) {\n\t\t\t\t\tdirectLight.color *= shadows[ j ];\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tDirectionalLight directionalLight = directionalLights[ i ];\n\t\tIncidentLight directLight = getDirectionalDirectLight( directionalLight, geometry );\n\t\t#ifdef USE_SHADOWMAP\n\t\tif ( directionalLight.shadow > - 1 ) {\n\t\t\tfor ( int j = 0; j < NUM_SHADOWS; j ++ ) {\n\t\t\t\tif ( j == directionalLight.shadow ) {\n\t\t\t\t\tdirectLight.color *= shadows[ j ];\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\t{\n\t\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t\t#ifdef USE_LIGHTMAP\n\t\t\tirradiance += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t\t#endif\n\t\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t\t}\n\t\t#endif\n\t\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\t{\n\t\tvec3 radiance = getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), 8 );\n\t\tRE_IndirectSpecular( radiance, geometry, material, reflectedLight );\n\t}\n#endif\n";
THREE.ShaderChunk.linear_to_gamma_fragment="\n\toutgoingLight = linearToOutput( outgoingLight );\n";THREE.ShaderChunk.logdepthbuf_fragment="#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n\tgl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n#endif";THREE.ShaderChunk.logdepthbuf_pars_fragment="#ifdef USE_LOGDEPTHBUF\n\tuniform float logDepthBufFC;\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n#endif\n";THREE.ShaderChunk.logdepthbuf_pars_vertex="#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n\tuniform float logDepthBufFC;\n#endif";
THREE.ShaderChunk.logdepthbuf_vertex="#ifdef USE_LOGDEPTHBUF\n\tgl_Position.z = log2(max( EPSILON, gl_Position.w + 1.0 )) * logDepthBufFC;\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t#else\n\t\tgl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n\t#endif\n#endif\n";THREE.ShaderChunk.map_fragment="#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor.xyz = inputToLinear( texelColor.xyz );\n\tdiffuseColor *= texelColor;\n#endif\n";
THREE.ShaderChunk.map_pars_fragment="#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif";THREE.ShaderChunk.map_particle_fragment="#ifdef USE_MAP\n\tdiffuseColor *= texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) * offsetRepeat.zw + offsetRepeat.xy );\n#endif\n";THREE.ShaderChunk.map_particle_pars_fragment="#ifdef USE_MAP\n\tuniform vec4 offsetRepeat;\n\tuniform sampler2D map;\n#endif\n";THREE.ShaderChunk.metalnessmap_fragment="float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.r;\n#endif\n";
THREE.ShaderChunk.metalnessmap_pars_fragment="#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif";THREE.ShaderChunk.morphnormal_vertex="#ifdef USE_MORPHNORMALS\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif\n";
THREE.ShaderChunk.morphtarget_pars_vertex="#ifdef USE_MORPHTARGETS\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif";THREE.ShaderChunk.morphtarget_vertex="#ifdef USE_MORPHTARGETS\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\t#endif\n#endif\n";
THREE.ShaderChunk.normal_fragment="#ifdef FLAT_SHADED\n\tvec3 fdx = dFdx( vViewPosition );\n\tvec3 fdy = dFdy( vViewPosition );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( -1.0 + 2.0 * float( gl_FrontFacing ) );\n\t#endif\n#endif\n#ifdef USE_NORMALMAP\n\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n";
THREE.ShaderChunk.normalmap_pars_fragment="#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 S = normalize( q0 * st1.t - q1 * st0.t );\n\t\tvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n\t\tvec3 N = normalize( surf_norm );\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = normalScale * mapN.xy;\n\t\tmat3 tsn = mat3( S, T, N );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif\n";
THREE.ShaderChunk.project_vertex="#ifdef USE_SKINNING\n\tvec4 mvPosition = modelViewMatrix * skinned;\n#else\n\tvec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\n#endif\ngl_Position = projectionMatrix * mvPosition;\n";THREE.ShaderChunk.roughnessmap_fragment="float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.r;\n#endif\n";THREE.ShaderChunk.roughnessmap_pars_fragment="#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif";
THREE.ShaderChunk.shadowmap_fragment="vec3 shadowMask = vec3( 1.0 );\n#ifdef USE_SHADOWMAP\n\tfloat shadows[ NUM_SHADOWS ];\n\tfor ( int i = 0; i < NUM_SHADOWS; i ++ ) {\n\t\tfloat texelSizeY =  1.0 / shadowMapSize[ i ].y;\n\t\tfloat shadow = 0.0;\n#ifdef POINT_LIGHT_SHADOWS\n\t\tbool isPointLight = shadowDarkness[ i ] < 0.0;\n\t\tif ( isPointLight ) {\n\t\t\tfloat realShadowDarkness = abs( shadowDarkness[ i ] );\n\t\t\tvec3 lightToPosition = vShadowCoord[ i ].xyz;\n\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t\tfloat dp = length( lightToPosition );\n\t\t\tadjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D, texelSizeY ) ), shadowBias[ i ], shadow );\n\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tconst float Dr = 1.25;\n\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tconst float Dr = 2.25;\n\t#endif\n\t\t\tfloat os = Dr *  2.0 * texelSizeY;\n\t\t\tconst vec3 Gsd = vec3( - 1, 0, 1 );\n\t\t\tadjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.zzz * os, texelSizeY ) ), shadowBias[ i ], shadow );\n\t\t\tadjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.zxz * os, texelSizeY ) ), shadowBias[ i ], shadow );\n\t\t\tadjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.xxz * os, texelSizeY ) ), shadowBias[ i ], shadow );\n\t\t\tadjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.xzz * os, texelSizeY ) ), shadowBias[ i ], shadow );\n\t\t\tadjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.zzx * os, texelSizeY ) ), shadowBias[ i ], shadow );\n\t\t\tadjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.zxx * os, texelSizeY ) ), shadowBias[ i ], shadow );\n\t\t\tadjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.xxx * os, texelSizeY ) ), shadowBias[ i ], shadow );\n\t\t\tadjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.xzx * os, texelSizeY ) ), shadowBias[ i ], shadow );\n\t\t\tadjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.zzy * os, texelSizeY ) ), shadowBias[ i ], shadow );\n\t\t\tadjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.zxy * os, texelSizeY ) ), shadowBias[ i ], shadow );\n\t\t\tadjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.xxy * os, texelSizeY ) ), shadowBias[ i ], shadow );\n\t\t\tadjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.xzy * os, texelSizeY ) ), shadowBias[ i ], shadow );\n\t\t\tadjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.zyz * os, texelSizeY ) ), shadowBias[ i ], shadow );\n\t\t\tadjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.xyz * os, texelSizeY ) ), shadowBias[ i ], shadow );\n\t\t\tadjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.zyx * os, texelSizeY ) ), shadowBias[ i ], shadow );\n\t\t\tadjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.xyx * os, texelSizeY ) ), shadowBias[ i ], shadow );\n\t\t\tadjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.yzz * os, texelSizeY ) ), shadowBias[ i ], shadow );\n\t\t\tadjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.yxz * os, texelSizeY ) ), shadowBias[ i ], shadow );\n\t\t\tadjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.yxx * os, texelSizeY ) ), shadowBias[ i ], shadow );\n\t\t\tadjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.yzx * os, texelSizeY ) ), shadowBias[ i ], shadow );\n\t\t\tshadow *= realShadowDarkness * ( 1.0 / 21.0 );\n\t#else\n\t\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t\tfloat dp = length( lightToPosition );\n\t\t\tadjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D, texelSizeY ) ), shadowBias[ i ], shadow );\n\t\t\tshadow *= realShadowDarkness;\n\t#endif\n\t\t} else {\n#endif\n\t\t\tfloat texelSizeX =  1.0 / shadowMapSize[ i ].x;\n\t\t\tvec3 shadowCoord = vShadowCoord[ i ].xyz / vShadowCoord[ i ].w;\n\t\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\t\tbool inFrustum = all( inFrustumVec );\n\t\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\t\tbool frustumTest = all( frustumTestVec );\n\t\t\tif ( frustumTest ) {\n\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\t\tshadowCoord.z += shadowBias[ i ];\n\t\t\t\tconst float ShadowDelta = 1.0 / 9.0;\n\t\t\t\tfloat xPixelOffset = texelSizeX;\n\t\t\t\tfloat yPixelOffset = texelSizeY;\n\t\t\t\tfloat dx0 = - 1.25 * xPixelOffset;\n\t\t\t\tfloat dy0 = - 1.25 * yPixelOffset;\n\t\t\t\tfloat dx1 = 1.25 * xPixelOffset;\n\t\t\t\tfloat dy1 = 1.25 * yPixelOffset;\n\t\t\t\tfloat fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += ShadowDelta;\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += ShadowDelta;\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += ShadowDelta;\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += ShadowDelta;\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += ShadowDelta;\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += ShadowDelta;\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += ShadowDelta;\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += ShadowDelta;\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += ShadowDelta;\n\t\t\t\tshadow *= shadowDarkness[ i ];\n\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\t\tshadowCoord.z += shadowBias[ i ];\n\t\t\t\tfloat xPixelOffset = texelSizeX;\n\t\t\t\tfloat yPixelOffset = texelSizeY;\n\t\t\t\tfloat dx0 = - 1.0 * xPixelOffset;\n\t\t\t\tfloat dy0 = - 1.0 * yPixelOffset;\n\t\t\t\tfloat dx1 = 1.0 * xPixelOffset;\n\t\t\t\tfloat dy1 = 1.0 * yPixelOffset;\n\t\t\t\tmat3 shadowKernel;\n\t\t\t\tmat3 depthKernel;\n\t\t\t\tdepthKernel[ 0 ][ 0 ] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\n\t\t\t\tdepthKernel[ 0 ][ 1 ] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\n\t\t\t\tdepthKernel[ 0 ][ 2 ] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\n\t\t\t\tdepthKernel[ 1 ][ 0 ] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\n\t\t\t\tdepthKernel[ 1 ][ 1 ] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\n\t\t\t\tdepthKernel[ 1 ][ 2 ] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\n\t\t\t\tdepthKernel[ 2 ][ 0 ] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\n\t\t\t\tdepthKernel[ 2 ][ 1 ] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\n\t\t\t\tdepthKernel[ 2 ][ 2 ] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\n\t\t\t\tvec3 shadowZ = vec3( shadowCoord.z );\n\t\t\t\tshadowKernel[ 0 ] = vec3( lessThan( depthKernel[ 0 ], shadowZ ) );\n\t\t\t\tshadowKernel[ 0 ] *= vec3( 0.25 );\n\t\t\t\tshadowKernel[ 1 ] = vec3( lessThan( depthKernel[ 1 ], shadowZ ) );\n\t\t\t\tshadowKernel[ 1 ] *= vec3( 0.25 );\n\t\t\t\tshadowKernel[ 2 ] = vec3( lessThan( depthKernel[ 2 ], shadowZ ) );\n\t\t\t\tshadowKernel[ 2 ] *= vec3( 0.25 );\n\t\t\t\tvec2 fractionalCoord = 1.0 - fract( shadowCoord.xy * shadowMapSize[ i ].xy );\n\t\t\t\tshadowKernel[ 0 ] = mix( shadowKernel[ 1 ], shadowKernel[ 0 ], fractionalCoord.x );\n\t\t\t\tshadowKernel[ 1 ] = mix( shadowKernel[ 2 ], shadowKernel[ 1 ], fractionalCoord.x );\n\t\t\t\tvec4 shadowValues;\n\t\t\t\tshadowValues.x = mix( shadowKernel[ 0 ][ 1 ], shadowKernel[ 0 ][ 0 ], fractionalCoord.y );\n\t\t\t\tshadowValues.y = mix( shadowKernel[ 0 ][ 2 ], shadowKernel[ 0 ][ 1 ], fractionalCoord.y );\n\t\t\t\tshadowValues.z = mix( shadowKernel[ 1 ][ 1 ], shadowKernel[ 1 ][ 0 ], fractionalCoord.y );\n\t\t\t\tshadowValues.w = mix( shadowKernel[ 1 ][ 2 ], shadowKernel[ 1 ][ 1 ], fractionalCoord.y );\n\t\t\t\tshadow = dot( shadowValues, vec4( 1.0 ) ) * shadowDarkness[ i ];\n\t#else\n\t\t\t\tshadowCoord.z += shadowBias[ i ];\n\t\t\t\tvec4 rgbaDepth = texture2D( shadowMap[ i ], shadowCoord.xy );\n\t\t\t\tfloat fDepth = unpackDepth( rgbaDepth );\n\t\t\t\tif ( fDepth < shadowCoord.z )\n\t\t\t\t\tshadow = shadowDarkness[ i ];\n\t#endif\n\t\t\t}\n#ifdef SHADOWMAP_DEBUG\n\t\t\tif ( inFrustum ) {\n\t\t\t\tif ( i == 0 ) {\n\t\t\t\t\toutgoingLight *= vec3( 1.0, 0.5, 0.0 );\n\t\t\t\t} else if ( i == 1 ) {\n\t\t\t\t\toutgoingLight *= vec3( 0.0, 1.0, 0.8 );\n\t\t\t\t} else {\n\t\t\t\t\toutgoingLight *= vec3( 0.0, 0.5, 1.0 );\n\t\t\t\t}\n\t\t\t}\n#endif\n#ifdef POINT_LIGHT_SHADOWS\n\t\t}\n#endif\n\t\tshadowMask = shadowMask * vec3( 1.0 - shadow );\n\t\tshadows[ i ] = 1.0 - shadow;\n\t}\n#endif\n";
THREE.ShaderChunk.shadowmap_pars_fragment="#ifdef USE_SHADOWMAP\n\tuniform sampler2D shadowMap[ NUM_SHADOWS ];\n\tuniform vec2 shadowMapSize[ NUM_SHADOWS ];\n\tuniform float shadowDarkness[ NUM_SHADOWS ];\n\tuniform float shadowBias[ NUM_SHADOWS ];\n\tvarying vec4 vShadowCoord[ NUM_SHADOWS ];\n\tfloat unpackDepth( const in vec4 rgba_depth ) {\n\t\tconst vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\n\t\tfloat depth = dot( rgba_depth, bit_shift );\n\t\treturn depth;\n\t}\n\t#ifdef POINT_LIGHT_SHADOWS\n\t\tvoid adjustShadowValue1K( const float testDepth, const vec4 textureData, const float bias, inout float shadowValue ) {\n\t\t\tconst vec4 bitSh = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\n\t\t\tif ( testDepth >= dot( textureData, bitSh ) * 1000.0 + bias )\n\t\t\t\tshadowValue += 1.0;\n\t\t}\n\t\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\t\tvec3 absV = abs( v );\n\t\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\t\tabsV *= scaleToCube;\n\t\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\t\tvec2 planar = v.xy;\n\t\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\t\tfloat almostOne = 1.0 - almostATexel;\n\t\t\tif ( absV.z >= almostOne ) {\n\t\t\t\tif ( v.z > 0.0 )\n\t\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t\t} else if ( absV.x >= almostOne ) {\n\t\t\t\tfloat signX = sign( v.x );\n\t\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t\t} else if ( absV.y >= almostOne ) {\n\t\t\t\tfloat signY = sign( v.y );\n\t\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t\t}\n\t\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t\t}\n\t#endif\n#endif\n";
THREE.ShaderChunk.shadowmap_pars_vertex="#ifdef USE_SHADOWMAP\n\tuniform mat4 shadowMatrix[ NUM_SHADOWS ];\n\tvarying vec4 vShadowCoord[ NUM_SHADOWS ];\n#endif\n";THREE.ShaderChunk.shadowmap_vertex="#ifdef USE_SHADOWMAP\n\tfor ( int i = 0; i < NUM_SHADOWS; i ++ ) {\n\t\t\tvShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;\n\t}\n#endif";THREE.ShaderChunk.skinbase_vertex="#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif";
THREE.ShaderChunk.skinning_pars_vertex="#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureWidth;\n\t\tuniform int boneTextureHeight;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureWidth ) );\n\t\t\tfloat y = floor( j / float( boneTextureWidth ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureWidth );\n\t\t\tfloat dy = 1.0 / float( boneTextureHeight );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneGlobalMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneGlobalMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif\n";
THREE.ShaderChunk.skinning_vertex="#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\tskinned  = bindMatrixInverse * skinned;\n#endif\n";THREE.ShaderChunk.skinnormal_vertex="#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n#endif\n";
THREE.ShaderChunk.specularmap_fragment="float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif";THREE.ShaderChunk.specularmap_pars_fragment="#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif";THREE.ShaderChunk.uv2_pars_fragment="#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif";THREE.ShaderChunk.uv2_pars_vertex="#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n#endif";
THREE.ShaderChunk.uv2_vertex="#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = uv2;\n#endif";THREE.ShaderChunk.uv_pars_fragment="#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n#endif";THREE.ShaderChunk.uv_pars_vertex="#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n\tuniform vec4 offsetRepeat;\n#endif\n";
THREE.ShaderChunk.uv_vertex="#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n#endif";THREE.ShaderChunk.worldpos_vertex="#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( STANDARD ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n\t#ifdef USE_SKINNING\n\t\tvec4 worldPosition = modelMatrix * skinned;\n\t#else\n\t\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n\t#endif\n#endif\n";
THREE.UniformsUtils={merge:function(a){for(var b={},c=0;c<a.length;c++){var d=this.clone(a[c]),e;for(e in d)b[e]=d[e]}return b},clone:function(a){var b={},c;for(c in a){b[c]={};for(var d in a[c]){var e=a[c][d];e instanceof THREE.Color||e instanceof THREE.Vector2||e instanceof THREE.Vector3||e instanceof THREE.Vector4||e instanceof THREE.Matrix3||e instanceof THREE.Matrix4||e instanceof THREE.Texture?b[c][d]=e.clone():Array.isArray(e)?b[c][d]=e.slice():b[c][d]=e}}return b}};
THREE.UniformsLib={common:{diffuse:{type:"c",value:new THREE.Color(15658734)},opacity:{type:"f",value:1},map:{type:"t",value:null},offsetRepeat:{type:"v4",value:new THREE.Vector4(0,0,1,1)},specularMap:{type:"t",value:null},alphaMap:{type:"t",value:null},envMap:{type:"t",value:null},flipEnvMap:{type:"f",value:-1},reflectivity:{type:"f",value:1},refractionRatio:{type:"f",value:.98}},aomap:{aoMap:{type:"t",value:null},aoMapIntensity:{type:"f",value:1}},lightmap:{lightMap:{type:"t",value:null},lightMapIntensity:{type:"f",
value:1}},emissivemap:{emissiveMap:{type:"t",value:null}},bumpmap:{bumpMap:{type:"t",value:null},bumpScale:{type:"f",value:1}},normalmap:{normalMap:{type:"t",value:null},normalScale:{type:"v2",value:new THREE.Vector2(1,1)}},displacementmap:{displacementMap:{type:"t",value:null},displacementScale:{type:"f",value:1},displacementBias:{type:"f",value:0}},roughnessmap:{roughnessMap:{type:"t",value:null}},metalnessmap:{metalnessMap:{type:"t",value:null}},fog:{fogDensity:{type:"f",value:2.5E-4},fogNear:{type:"f",
value:1},fogFar:{type:"f",value:2E3},fogColor:{type:"c",value:new THREE.Color(16777215)}},ambient:{ambientLightColor:{type:"fv",value:[]}},lights:{directionalLights:{type:"sa",value:[],properties:{direction:{type:"v3"},color:{type:"c"},shadow:{type:"i"}}},hemisphereLights:{type:"sa",value:[],properties:{direction:{type:"v3"},skyColor:{type:"c"},groundColor:{type:"c"}}},pointLights:{type:"sa",value:[],properties:{color:{type:"c"},position:{type:"v3"},decay:{type:"f"},distance:{type:"f"},shadow:{type:"i"}}},
spotLights:{type:"sa",value:[],properties:{color:{type:"c"},position:{type:"v3"},direction:{type:"v3"},distance:{type:"f"},angleCos:{type:"f"},exponent:{type:"f"},decay:{type:"f"},shadow:{type:"i"}}}},points:{diffuse:{type:"c",value:new THREE.Color(15658734)},opacity:{type:"f",value:1},size:{type:"f",value:1},scale:{type:"f",value:1},map:{type:"t",value:null},offsetRepeat:{type:"v4",value:new THREE.Vector4(0,0,1,1)}},shadowmap:{shadowMap:{type:"tv",value:[]},shadowMapSize:{type:"v2v",value:[]},shadowBias:{type:"fv1",
value:[]},shadowDarkness:{type:"fv1",value:[]},shadowMatrix:{type:"m4v",value:[]}}};
THREE.ShaderLib={basic:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.aomap,THREE.UniformsLib.fog,THREE.UniformsLib.shadowmap]),vertexShader:[THREE.ShaderChunk.common,THREE.ShaderChunk.uv_pars_vertex,THREE.ShaderChunk.uv2_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,
"void main() {",THREE.ShaderChunk.uv_vertex,THREE.ShaderChunk.uv2_vertex,THREE.ShaderChunk.color_vertex,THREE.ShaderChunk.skinbase_vertex,"\t#ifdef USE_ENVMAP",THREE.ShaderChunk.beginnormal_vertex,THREE.ShaderChunk.morphnormal_vertex,THREE.ShaderChunk.skinnormal_vertex,THREE.ShaderChunk.defaultnormal_vertex,"\t#endif",THREE.ShaderChunk.begin_vertex,THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.project_vertex,THREE.ShaderChunk.logdepthbuf_vertex,THREE.ShaderChunk.worldpos_vertex,
THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif",THREE.ShaderChunk.common,THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.uv_pars_fragment,THREE.ShaderChunk.uv2_pars_fragment,THREE.ShaderChunk.map_pars_fragment,THREE.ShaderChunk.alphamap_pars_fragment,THREE.ShaderChunk.aomap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,
THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.specularmap_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );",THREE.ShaderChunk.logdepthbuf_fragment,THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.alphamap_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.specularmap_fragment,"\tReflectedLight reflectedLight;\n\treflectedLight.directDiffuse = vec3( 0.0 );\n\treflectedLight.directSpecular = vec3( 0.0 );\n\treflectedLight.indirectDiffuse = diffuseColor.rgb;\n\treflectedLight.indirectSpecular = vec3( 0.0 );",
THREE.ShaderChunk.aomap_fragment,THREE.ShaderChunk.shadowmap_fragment,"reflectedLight.indirectDiffuse *= shadowMask;\nvec3 outgoingLight = reflectedLight.indirectDiffuse;",THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,THREE.ShaderChunk.fog_fragment,"\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n}"].join("\n")},lambert:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.aomap,THREE.UniformsLib.lightmap,THREE.UniformsLib.emissivemap,
THREE.UniformsLib.fog,THREE.UniformsLib.ambient,THREE.UniformsLib.lights,THREE.UniformsLib.shadowmap,{emissive:{type:"c",value:new THREE.Color(0)}}]),vertexShader:["#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif",THREE.ShaderChunk.common,THREE.ShaderChunk.uv_pars_vertex,THREE.ShaderChunk.uv2_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.bsdfs,THREE.ShaderChunk.lights_pars,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,
THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.uv_vertex,THREE.ShaderChunk.uv2_vertex,THREE.ShaderChunk.color_vertex,THREE.ShaderChunk.beginnormal_vertex,THREE.ShaderChunk.morphnormal_vertex,THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.skinnormal_vertex,THREE.ShaderChunk.defaultnormal_vertex,THREE.ShaderChunk.begin_vertex,THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,
THREE.ShaderChunk.project_vertex,THREE.ShaderChunk.logdepthbuf_vertex,THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.lights_lambert_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif",THREE.ShaderChunk.common,THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.uv_pars_fragment,THREE.ShaderChunk.uv2_pars_fragment,
THREE.ShaderChunk.map_pars_fragment,THREE.ShaderChunk.alphamap_pars_fragment,THREE.ShaderChunk.aomap_pars_fragment,THREE.ShaderChunk.lightmap_pars_fragment,THREE.ShaderChunk.emissivemap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.bsdfs,THREE.ShaderChunk.ambient_pars,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.specularmap_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveLight = emissive;",
THREE.ShaderChunk.logdepthbuf_fragment,THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.alphamap_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.specularmap_fragment,THREE.ShaderChunk.emissivemap_fragment,THREE.ShaderChunk.shadowmap_fragment,"\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );",THREE.ShaderChunk.lightmap_fragment,"\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= ( BRDF_Diffuse_Lambert( diffuseColor.rgb ) * shadowMask );",
THREE.ShaderChunk.aomap_fragment,"\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveLight;",THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,THREE.ShaderChunk.fog_fragment,"\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n}"].join("\n")},phong:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.aomap,THREE.UniformsLib.lightmap,THREE.UniformsLib.emissivemap,THREE.UniformsLib.bumpmap,THREE.UniformsLib.normalmap,
THREE.UniformsLib.displacementmap,THREE.UniformsLib.fog,THREE.UniformsLib.ambient,THREE.UniformsLib.lights,THREE.UniformsLib.shadowmap,{emissive:{type:"c",value:new THREE.Color(0)},specular:{type:"c",value:new THREE.Color(1118481)},shininess:{type:"f",value:30}}]),vertexShader:["#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif",THREE.ShaderChunk.common,THREE.ShaderChunk.uv_pars_vertex,THREE.ShaderChunk.uv2_pars_vertex,THREE.ShaderChunk.displacementmap_pars_vertex,
THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.lights_phong_pars_vertex,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.uv_vertex,THREE.ShaderChunk.uv2_vertex,THREE.ShaderChunk.color_vertex,THREE.ShaderChunk.beginnormal_vertex,THREE.ShaderChunk.morphnormal_vertex,THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.skinnormal_vertex,
THREE.ShaderChunk.defaultnormal_vertex,"#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif",THREE.ShaderChunk.begin_vertex,THREE.ShaderChunk.displacementmap_vertex,THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.project_vertex,THREE.ShaderChunk.logdepthbuf_vertex,"\tvViewPosition = - mvPosition.xyz;",THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.lights_phong_vertex,THREE.ShaderChunk.shadowmap_vertex,
"}"].join("\n"),fragmentShader:["#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;",THREE.ShaderChunk.common,THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.uv_pars_fragment,THREE.ShaderChunk.uv2_pars_fragment,THREE.ShaderChunk.map_pars_fragment,THREE.ShaderChunk.alphamap_pars_fragment,THREE.ShaderChunk.aomap_pars_fragment,THREE.ShaderChunk.lightmap_pars_fragment,THREE.ShaderChunk.emissivemap_pars_fragment,
THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.bsdfs,THREE.ShaderChunk.ambient_pars,THREE.ShaderChunk.lights_pars,THREE.ShaderChunk.lights_phong_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.bumpmap_pars_fragment,THREE.ShaderChunk.normalmap_pars_fragment,THREE.ShaderChunk.specularmap_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveLight = emissive;",
THREE.ShaderChunk.logdepthbuf_fragment,THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.alphamap_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.specularmap_fragment,THREE.ShaderChunk.normal_fragment,THREE.ShaderChunk.emissivemap_fragment,THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.lights_phong_fragment,THREE.ShaderChunk.lights_template,THREE.ShaderChunk.aomap_fragment,"vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveLight;",
THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,THREE.ShaderChunk.fog_fragment,"\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n}"].join("\n")},standard:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.aomap,THREE.UniformsLib.lightmap,THREE.UniformsLib.emissivemap,THREE.UniformsLib.bumpmap,THREE.UniformsLib.normalmap,THREE.UniformsLib.displacementmap,THREE.UniformsLib.roughnessmap,THREE.UniformsLib.metalnessmap,THREE.UniformsLib.fog,
THREE.UniformsLib.ambient,THREE.UniformsLib.lights,THREE.UniformsLib.shadowmap,{emissive:{type:"c",value:new THREE.Color(0)},roughness:{type:"f",value:.5},metalness:{type:"f",value:0},envMapIntensity:{type:"f",value:1}}]),vertexShader:["#define STANDARD\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif",THREE.ShaderChunk.common,THREE.ShaderChunk.uv_pars_vertex,THREE.ShaderChunk.uv2_pars_vertex,THREE.ShaderChunk.displacementmap_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,
THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,THREE.ShaderChunk.specularmap_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.uv_vertex,THREE.ShaderChunk.uv2_vertex,THREE.ShaderChunk.color_vertex,THREE.ShaderChunk.beginnormal_vertex,THREE.ShaderChunk.morphnormal_vertex,THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.skinnormal_vertex,THREE.ShaderChunk.defaultnormal_vertex,
"#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif",THREE.ShaderChunk.begin_vertex,THREE.ShaderChunk.displacementmap_vertex,THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.project_vertex,THREE.ShaderChunk.logdepthbuf_vertex,"\tvViewPosition = - mvPosition.xyz;",THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["#define STANDARD\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\nuniform float envMapIntensity;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif",
THREE.ShaderChunk.common,THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.uv_pars_fragment,THREE.ShaderChunk.uv2_pars_fragment,THREE.ShaderChunk.map_pars_fragment,THREE.ShaderChunk.alphamap_pars_fragment,THREE.ShaderChunk.aomap_pars_fragment,THREE.ShaderChunk.lightmap_pars_fragment,THREE.ShaderChunk.emissivemap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.bsdfs,THREE.ShaderChunk.ambient_pars,THREE.ShaderChunk.lights_pars,THREE.ShaderChunk.lights_standard_pars_fragment,
THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.bumpmap_pars_fragment,THREE.ShaderChunk.normalmap_pars_fragment,THREE.ShaderChunk.roughnessmap_pars_fragment,THREE.ShaderChunk.metalnessmap_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveLight = emissive;",THREE.ShaderChunk.logdepthbuf_fragment,
THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.alphamap_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.specularmap_fragment,THREE.ShaderChunk.roughnessmap_fragment,THREE.ShaderChunk.metalnessmap_fragment,THREE.ShaderChunk.normal_fragment,THREE.ShaderChunk.emissivemap_fragment,THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.lights_standard_fragment,THREE.ShaderChunk.lights_template,THREE.ShaderChunk.aomap_fragment,"vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveLight;",
THREE.ShaderChunk.linear_to_gamma_fragment,THREE.ShaderChunk.fog_fragment,"\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n}"].join("\n")},points:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.points,THREE.UniformsLib.fog,THREE.UniformsLib.shadowmap]),vertexShader:["uniform float size;\nuniform float scale;",THREE.ShaderChunk.common,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.color_vertex,
THREE.ShaderChunk.begin_vertex,THREE.ShaderChunk.project_vertex,"\t#ifdef USE_SIZEATTENUATION\n\t\tgl_PointSize = size * ( scale / - mvPosition.z );\n\t#else\n\t\tgl_PointSize = size;\n\t#endif",THREE.ShaderChunk.logdepthbuf_vertex,THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform vec3 diffuse;\nuniform float opacity;",THREE.ShaderChunk.common,THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_particle_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,
THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );",THREE.ShaderChunk.logdepthbuf_fragment,THREE.ShaderChunk.map_particle_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.shadowmap_fragment,"\toutgoingLight = diffuseColor.rgb * shadowMask;",THREE.ShaderChunk.fog_fragment,"\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n}"].join("\n")},
dashed:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.fog,{scale:{type:"f",value:1},dashSize:{type:"f",value:1},totalSize:{type:"f",value:2}}]),vertexShader:["uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;",THREE.ShaderChunk.common,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.color_vertex,"\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;",
THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:["uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;",THREE.ShaderChunk.common,THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );",
THREE.ShaderChunk.logdepthbuf_fragment,THREE.ShaderChunk.color_fragment,"\toutgoingLight = diffuseColor.rgb;",THREE.ShaderChunk.fog_fragment,"\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n}"].join("\n")},depth:{uniforms:{mNear:{type:"f",value:1},mFar:{type:"f",value:2E3},opacity:{type:"f",value:1}},vertexShader:[THREE.ShaderChunk.common,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.begin_vertex,THREE.ShaderChunk.morphtarget_vertex,
THREE.ShaderChunk.project_vertex,THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:["uniform float mNear;\nuniform float mFar;\nuniform float opacity;",THREE.ShaderChunk.common,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {",THREE.ShaderChunk.logdepthbuf_fragment,"\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;\n\t#else\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\t#endif\n\tfloat color = 1.0 - smoothstep( mNear, mFar, depth );\n\tgl_FragColor = vec4( vec3( color ), opacity );\n}"].join("\n")},
normal:{uniforms:{opacity:{type:"f",value:1}},vertexShader:["varying vec3 vNormal;",THREE.ShaderChunk.common,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {\n\tvNormal = normalize( normalMatrix * normal );",THREE.ShaderChunk.begin_vertex,THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.project_vertex,THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:["uniform float opacity;\nvarying vec3 vNormal;",THREE.ShaderChunk.common,
THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n\tgl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );",THREE.ShaderChunk.logdepthbuf_fragment,"}"].join("\n")},cube:{uniforms:{tCube:{type:"t",value:null},tFlip:{type:"f",value:-1}},vertexShader:["varying vec3 vWorldPosition;",THREE.ShaderChunk.common,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:["uniform samplerCube tCube;\nuniform float tFlip;\nvarying vec3 vWorldPosition;",THREE.ShaderChunk.common,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );",THREE.ShaderChunk.logdepthbuf_fragment,"}"].join("\n")},equirect:{uniforms:{tEquirect:{type:"t",value:null},tFlip:{type:"f",value:-1}},vertexShader:["varying vec3 vWorldPosition;",
THREE.ShaderChunk.common,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:["uniform sampler2D tEquirect;\nuniform float tFlip;\nvarying vec3 vWorldPosition;",THREE.ShaderChunk.common,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\nvec3 direction = normalize( vWorldPosition );\nvec2 sampleUV;\nsampleUV.y = saturate( tFlip * direction.y * -0.5 + 0.5 );\nsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\ngl_FragColor = texture2D( tEquirect, sampleUV );",
THREE.ShaderChunk.logdepthbuf_fragment,"}"].join("\n")},depthRGBA:{uniforms:{},vertexShader:[THREE.ShaderChunk.common,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.begin_vertex,THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.project_vertex,THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:[THREE.ShaderChunk.common,
THREE.ShaderChunk.logdepthbuf_pars_fragment,"vec4 pack_depth( const in float depth ) {\n\tconst vec4 bit_shift = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );\n\tconst vec4 bit_mask = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );\n\tvec4 res = mod( depth * bit_shift * vec4( 255 ), vec4( 256 ) ) / vec4( 255 );\n\tres -= res.xxyz * bit_mask;\n\treturn res;\n}\nvoid main() {",THREE.ShaderChunk.logdepthbuf_fragment,"\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tgl_FragData[ 0 ] = pack_depth( gl_FragDepthEXT );\n\t#else\n\t\tgl_FragData[ 0 ] = pack_depth( gl_FragCoord.z );\n\t#endif\n}"].join("\n")},
distanceRGBA:{uniforms:{lightPos:{type:"v3",value:new THREE.Vector3(0,0,0)}},vertexShader:["varying vec4 vWorldPosition;",THREE.ShaderChunk.common,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,"void main() {",THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.begin_vertex,THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.project_vertex,THREE.ShaderChunk.worldpos_vertex,"vWorldPosition = worldPosition;\n}"].join("\n"),fragmentShader:["uniform vec3 lightPos;\nvarying vec4 vWorldPosition;",
THREE.ShaderChunk.common,"vec4 pack1K ( float depth ) {\n   depth /= 1000.0;\n   const vec4 bitSh = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );\n\tconst vec4 bitMsk = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );\n\tvec4 res = fract( depth * bitSh );\n\tres -= res.xxyz * bitMsk;\n\treturn res; \n}\nfloat unpack1K ( vec4 color ) {\n\tconst vec4 bitSh = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\n\treturn dot( color, bitSh ) * 1000.0;\n}\nvoid main () {\n\tgl_FragColor = pack1K( length( vWorldPosition.xyz - lightPos.xyz ) );\n}"].join("\n")}};
THREE.WebGLRenderer=function(a){function b(a,b,c,d){!0===R&&(a*=d,b*=d,c*=d);H.clearColor(a,b,c,d)}function c(){H.init();H.scissor(ma.copy(ta).multiplyScalar(D));H.viewport(ga.copy(ha).multiplyScalar(D));b(O.r,O.g,O.b,K)}function d(){ia=ua=null;ja="";na=-1;H.reset()}function e(a){a.preventDefault();d();c();S.clear()}function f(a){a=a.target;a.removeEventListener("dispose",f);a:{var b=S.get(a);if(a.image&&b.__image__webglTextureCube)r.deleteTexture(b.__image__webglTextureCube);else{if(void 0===b.__webglInit)break a;
r.deleteTexture(b.__webglTexture)}S.delete(a)}ea.textures--}function g(a){a=a.target;a.removeEventListener("dispose",g);var b=S.get(a),c=S.get(a.texture);if(a&&void 0!==c.__webglTexture){r.deleteTexture(c.__webglTexture);if(a instanceof THREE.WebGLRenderTargetCube)for(c=0;6>c;c++)r.deleteFramebuffer(b.__webglFramebuffer[c]),r.deleteRenderbuffer(b.__webglDepthbuffer[c]);else r.deleteFramebuffer(b.__webglFramebuffer),r.deleteRenderbuffer(b.__webglDepthbuffer);S.delete(a.texture);S.delete(a)}ea.textures--}
function h(a){a=a.target;a.removeEventListener("dispose",h);k(a);S.delete(a)}function k(a){var b=S.get(a).program;a.program=void 0;void 0!==b&&ka.releaseProgram(b)}function l(a,b){return Math.abs(b[0])-Math.abs(a[0])}function m(a,b){return a.object.renderOrder!==b.object.renderOrder?a.object.renderOrder-b.object.renderOrder:a.material.id!==b.material.id?a.material.id-b.material.id:a.z!==b.z?a.z-b.z:a.id-b.id}function p(a,b){return a.object.renderOrder!==b.object.renderOrder?a.object.renderOrder-b.object.renderOrder:
a.z!==b.z?b.z-a.z:a.id-b.id}function n(a,b,c,d,e){var f;c.transparent?(d=ba,f=++ca):(d=W,f=++X);f=d[f];void 0!==f?(f.id=a.id,f.object=a,f.geometry=b,f.material=c,f.z=V.z,f.group=e):(f={id:a.id,object:a,geometry:b,material:c,z:V.z,group:e},d.push(f))}function q(a,b){if(!1!==a.visible){if(a.layers.test(b.layers))if(a instanceof THREE.Light)Y.push(a);else if(a instanceof THREE.Sprite)!1!==a.frustumCulled&&!0!==va.intersectsObject(a)||fa.push(a);else if(a instanceof THREE.LensFlare)$.push(a);else if(a instanceof
THREE.ImmediateRenderObject)!0===Z.sortObjects&&(V.setFromMatrixPosition(a.matrixWorld),V.applyProjection(oa)),n(a,null,a.material,V.z,null);else if(a instanceof THREE.Mesh||a instanceof THREE.Line||a instanceof THREE.Points)if(a instanceof THREE.SkinnedMesh&&a.skeleton.update(),!1===a.frustumCulled||!0===va.intersectsObject(a)){var c=a.material;if(!0===c.visible){!0===Z.sortObjects&&(V.setFromMatrixPosition(a.matrixWorld),V.applyProjection(oa));var d=la.update(a);if(c instanceof THREE.MultiMaterial)for(var e=
d.groups,f=c.materials,c=0,g=e.length;c<g;c++){var h=e[c],k=f[h.materialIndex];!0===k.visible&&n(a,d,k,V.z,h)}else n(a,d,c,V.z,null)}}d=a.children;c=0;for(g=d.length;c<g;c++)q(d[c],b)}}function s(a,b,c,d){for(var e=0,f=a.length;e<f;e++){var g=a[e],h=g.object,k=g.geometry,l=void 0===d?g.material:d,g=g.group;h.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,h.matrixWorld);h.normalMatrix.getNormalMatrix(h.modelViewMatrix);if(h instanceof THREE.ImmediateRenderObject){u(l);var n=t(b,c,l,h);ja="";
h.render(function(a){Z.renderBufferImmediate(a,n,l)})}else Z.renderBufferDirect(b,c,k,l,h,g)}}function u(a){a.side!==THREE.DoubleSide?H.enable(r.CULL_FACE):H.disable(r.CULL_FACE);H.setFlipSided(a.side===THREE.BackSide);!0===a.transparent?H.setBlending(a.blending,a.blendEquation,a.blendSrc,a.blendDst,a.blendEquationAlpha,a.blendSrcAlpha,a.blendDstAlpha):H.setBlending(THREE.NoBlending);H.setDepthFunc(a.depthFunc);H.setDepthTest(a.depthTest);H.setDepthWrite(a.depthWrite);H.setColorWrite(a.colorWrite);
H.setPolygonOffset(a.polygonOffset,a.polygonOffsetFactor,a.polygonOffsetUnits)}function t(a,b,c,d){pa=0;var e=S.get(c);void 0===e.program&&(c.needsUpdate=!0);void 0!==e.lightsHash&&e.lightsHash!==T.hash&&(c.needsUpdate=!0);if(c.needsUpdate){a:{var f=S.get(c),g=ka.getParameters(c,T,b,d),l=ka.getProgramCode(c,g),n=f.program,m=!0;if(void 0===n)c.addEventListener("dispose",h);else if(n.code!==l)k(c);else if(void 0!==g.shaderID)break a;else m=!1;m&&(g.shaderID?(n=THREE.ShaderLib[g.shaderID],f.__webglShader=
{name:c.type,uniforms:THREE.UniformsUtils.clone(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader}):f.__webglShader={name:c.type,uniforms:c.uniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader},c.__webglShader=f.__webglShader,n=ka.acquireProgram(c,g,l),f.program=n,c.program=n);g=n.getAttributes();if(c.morphTargets)for(l=c.numSupportedMorphTargets=0;l<Z.maxMorphTargets;l++)0<=g["morphTarget"+l]&&c.numSupportedMorphTargets++;if(c.morphNormals)for(l=c.numSupportedMorphNormals=
0;l<Z.maxMorphNormals;l++)0<=g["morphNormal"+l]&&c.numSupportedMorphNormals++;f.uniformsList=[];var g=f.__webglShader.uniforms,l=f.program.getUniforms(),p;for(p in g)(n=l[p])&&f.uniformsList.push([f.__webglShader.uniforms[p],n]);if(c instanceof THREE.MeshPhongMaterial||c instanceof THREE.MeshLambertMaterial||c instanceof THREE.MeshStandardMaterial||c.lights)f.lightsHash=T.hash,g.ambientLightColor.value=T.ambient,g.directionalLights.value=T.directional,g.pointLights.value=T.point,g.spotLights.value=
T.spot,g.hemisphereLights.value=T.hemi;f.hasDynamicUniforms=!1;p=0;for(g=f.uniformsList.length;p<g;p++)if(!0===f.uniformsList[p][0].dynamic){f.hasDynamicUniforms=!0;break}}c.needsUpdate=!1}n=l=m=!1;f=e.program;p=f.getUniforms();g=e.__webglShader.uniforms;f.id!==ua&&(r.useProgram(f.program),ua=f.id,n=l=m=!0);c.id!==na&&(na=c.id,l=!0);if(m||a!==ia)r.uniformMatrix4fv(p.projectionMatrix,!1,a.projectionMatrix.elements),aa.logarithmicDepthBuffer&&r.uniform1f(p.logDepthBufFC,2/(Math.log(a.far+1)/Math.LN2)),
a!==ia&&(ia=a,n=l=!0),(c instanceof THREE.ShaderMaterial||c instanceof THREE.MeshPhongMaterial||c instanceof THREE.MeshStandardMaterial||c.envMap)&&void 0!==p.cameraPosition&&(V.setFromMatrixPosition(a.matrixWorld),r.uniform3f(p.cameraPosition,V.x,V.y,V.z)),(c instanceof THREE.MeshPhongMaterial||c instanceof THREE.MeshLambertMaterial||c instanceof THREE.MeshBasicMaterial||c instanceof THREE.MeshStandardMaterial||c instanceof THREE.ShaderMaterial||c.skinning)&&void 0!==p.viewMatrix&&r.uniformMatrix4fv(p.viewMatrix,
!1,a.matrixWorldInverse.elements);c.skinning&&(d.bindMatrix&&void 0!==p.bindMatrix&&r.uniformMatrix4fv(p.bindMatrix,!1,d.bindMatrix.elements),d.bindMatrixInverse&&void 0!==p.bindMatrixInverse&&r.uniformMatrix4fv(p.bindMatrixInverse,!1,d.bindMatrixInverse.elements),aa.floatVertexTextures&&d.skeleton&&d.skeleton.useVertexTexture?(void 0!==p.boneTexture&&(m=w(),r.uniform1i(p.boneTexture,m),Z.setTexture(d.skeleton.boneTexture,m)),void 0!==p.boneTextureWidth&&r.uniform1i(p.boneTextureWidth,d.skeleton.boneTextureWidth),
void 0!==p.boneTextureHeight&&r.uniform1i(p.boneTextureHeight,d.skeleton.boneTextureHeight)):d.skeleton&&d.skeleton.boneMatrices&&void 0!==p.boneGlobalMatrices&&r.uniformMatrix4fv(p.boneGlobalMatrices,!1,d.skeleton.boneMatrices));if(l){if(c instanceof THREE.MeshPhongMaterial||c instanceof THREE.MeshLambertMaterial||c instanceof THREE.MeshStandardMaterial||c.lights)l=n,g.ambientLightColor.needsUpdate=l,g.directionalLights.needsUpdate=l,g.pointLights.needsUpdate=l,g.spotLights.needsUpdate=l,g.hemisphereLights.needsUpdate=
l;b&&c.fog&&(g.fogColor.value=b.color,b instanceof THREE.Fog?(g.fogNear.value=b.near,g.fogFar.value=b.far):b instanceof THREE.FogExp2&&(g.fogDensity.value=b.density));if(c instanceof THREE.MeshBasicMaterial||c instanceof THREE.MeshLambertMaterial||c instanceof THREE.MeshPhongMaterial||c instanceof THREE.MeshStandardMaterial){g.opacity.value=c.opacity;g.diffuse.value=c.color;c.emissive&&g.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity);g.map.value=c.map;g.specularMap.value=c.specularMap;
g.alphaMap.value=c.alphaMap;c.aoMap&&(g.aoMap.value=c.aoMap,g.aoMapIntensity.value=c.aoMapIntensity);var q;c.map?q=c.map:c.specularMap?q=c.specularMap:c.displacementMap?q=c.displacementMap:c.normalMap?q=c.normalMap:c.bumpMap?q=c.bumpMap:c.roughnessMap?q=c.roughnessMap:c.metalnessMap?q=c.metalnessMap:c.alphaMap?q=c.alphaMap:c.emissiveMap&&(q=c.emissiveMap);void 0!==q&&(q instanceof THREE.WebGLRenderTarget&&(q=q.texture),b=q.offset,q=q.repeat,g.offsetRepeat.value.set(b.x,b.y,q.x,q.y));g.envMap.value=
c.envMap;g.flipEnvMap.value=c.envMap instanceof THREE.WebGLRenderTargetCube?1:-1;g.reflectivity.value=c.reflectivity;g.refractionRatio.value=c.refractionRatio}c instanceof THREE.LineBasicMaterial?(g.diffuse.value=c.color,g.opacity.value=c.opacity):c instanceof THREE.LineDashedMaterial?(g.diffuse.value=c.color,g.opacity.value=c.opacity,g.dashSize.value=c.dashSize,g.totalSize.value=c.dashSize+c.gapSize,g.scale.value=c.scale):c instanceof THREE.PointsMaterial?(g.diffuse.value=c.color,g.opacity.value=
c.opacity,g.size.value=c.size*D,g.scale.value=I.clientHeight/2,g.map.value=c.map,null!==c.map&&(q=c.map.offset,b=c.map.repeat,g.offsetRepeat.value.set(q.x,q.y,b.x,b.y))):c instanceof THREE.MeshLambertMaterial?(c.lightMap&&(g.lightMap.value=c.lightMap,g.lightMapIntensity.value=c.lightMapIntensity),c.emissiveMap&&(g.emissiveMap.value=c.emissiveMap)):c instanceof THREE.MeshPhongMaterial?(g.specular.value=c.specular,g.shininess.value=Math.max(c.shininess,1E-4),c.lightMap&&(g.lightMap.value=c.lightMap,
g.lightMapIntensity.value=c.lightMapIntensity),c.emissiveMap&&(g.emissiveMap.value=c.emissiveMap),c.bumpMap&&(g.bumpMap.value=c.bumpMap,g.bumpScale.value=c.bumpScale),c.normalMap&&(g.normalMap.value=c.normalMap,g.normalScale.value.copy(c.normalScale)),c.displacementMap&&(g.displacementMap.value=c.displacementMap,g.displacementScale.value=c.displacementScale,g.displacementBias.value=c.displacementBias)):c instanceof THREE.MeshStandardMaterial?(g.roughness.value=c.roughness,g.metalness.value=c.metalness,
c.roughnessMap&&(g.roughnessMap.value=c.roughnessMap),c.metalnessMap&&(g.metalnessMap.value=c.metalnessMap),c.lightMap&&(g.lightMap.value=c.lightMap,g.lightMapIntensity.value=c.lightMapIntensity),c.emissiveMap&&(g.emissiveMap.value=c.emissiveMap),c.bumpMap&&(g.bumpMap.value=c.bumpMap,g.bumpScale.value=c.bumpScale),c.normalMap&&(g.normalMap.value=c.normalMap,g.normalScale.value.copy(c.normalScale)),c.displacementMap&&(g.displacementMap.value=c.displacementMap,g.displacementScale.value=c.displacementScale,
g.displacementBias.value=c.displacementBias),c.envMap&&(g.envMapIntensity.value=c.envMapIntensity)):c instanceof THREE.MeshDepthMaterial?(g.mNear.value=a.near,g.mFar.value=a.far,g.opacity.value=c.opacity):c instanceof THREE.MeshNormalMaterial&&(g.opacity.value=c.opacity);if(wa.enabled&&d.receiveShadow&&!c._shadowPass&&g.shadowMatrix)for(c=T.shadows,q=0,b=c.length;q<b;q++)l=c[q],n=l.shadow,l instanceof THREE.PointLight?(V.setFromMatrixPosition(l.matrixWorld).negate(),n.matrix.identity().setPosition(V),
g.shadowDarkness.value[q]=-n.darkness):g.shadowDarkness.value[q]=n.darkness,g.shadowBias.value[q]=n.bias,g.shadowMap.value[q]=n.map,g.shadowMapSize.value[q]=n.mapSize,g.shadowMatrix.value[q]=n.matrix;v(e.uniformsList)}r.uniformMatrix4fv(p.modelViewMatrix,!1,d.modelViewMatrix.elements);p.normalMatrix&&r.uniformMatrix3fv(p.normalMatrix,!1,d.normalMatrix.elements);void 0!==p.modelMatrix&&r.uniformMatrix4fv(p.modelMatrix,!1,d.matrixWorld.elements);if(!0===e.hasDynamicUniforms){e=e.uniformsList;c=[];q=
0;for(b=e.length;q<b;q++)p=e[q][0],g=p.onUpdateCallback,void 0!==g&&(g.bind(p)(d,a),c.push(e[q]));v(c)}return f}function w(){var a=pa;a>=aa.maxTextures&&console.warn("WebGLRenderer: trying to use "+a+" texture units while this GPU supports only "+aa.maxTextures);pa+=1;return a}function v(a){for(var b,c,d=0,e=a.length;d<e;d++){var g=a[d][0];if(!1!==g.needsUpdate){var f=g.type;b=g.value;var h=a[d][1];switch(f){case "1i":r.uniform1i(h,b);break;case "1f":r.uniform1f(h,b);break;case "2f":r.uniform2f(h,
b[0],b[1]);break;case "3f":r.uniform3f(h,b[0],b[1],b[2]);break;case "4f":r.uniform4f(h,b[0],b[1],b[2],b[3]);break;case "1iv":r.uniform1iv(h,b);break;case "3iv":r.uniform3iv(h,b);break;case "1fv":r.uniform1fv(h,b);break;case "2fv":r.uniform2fv(h,b);break;case "3fv":r.uniform3fv(h,b);break;case "4fv":r.uniform4fv(h,b);break;case "Matrix2fv":r.uniformMatrix2fv(h,!1,b);break;case "Matrix3fv":r.uniformMatrix3fv(h,!1,b);break;case "Matrix4fv":r.uniformMatrix4fv(h,!1,b);break;case "i":r.uniform1i(h,b);break;
case "f":r.uniform1f(h,b);break;case "v2":r.uniform2f(h,b.x,b.y);break;case "v3":r.uniform3f(h,b.x,b.y,b.z);break;case "v4":r.uniform4f(h,b.x,b.y,b.z,b.w);break;case "c":r.uniform3f(h,b.r,b.g,b.b);break;case "sa":for(f=0;f<b.length;f++)for(var k in g.properties){var l=h[f][k];c=b[f][k];switch(g.properties[k].type){case "i":r.uniform1i(l,c);break;case "f":r.uniform1f(l,c);break;case "v2":r.uniform2f(l,c.x,c.y);break;case "v3":r.uniform3f(l,c.x,c.y,c.z);break;case "v4":r.uniform4f(l,c.x,c.y,c.z,c.w);
break;case "c":r.uniform3f(l,c.r,c.g,c.b)}}break;case "iv1":r.uniform1iv(h,b);break;case "iv":r.uniform3iv(h,b);break;case "fv1":r.uniform1fv(h,b);break;case "fv":r.uniform3fv(h,b);break;case "v2v":void 0===g._array&&(g._array=new Float32Array(2*b.length));c=f=0;for(l=b.length;f<l;f++,c+=2)g._array[c+0]=b[f].x,g._array[c+1]=b[f].y;r.uniform2fv(h,g._array);break;case "v3v":void 0===g._array&&(g._array=new Float32Array(3*b.length));c=f=0;for(l=b.length;f<l;f++,c+=3)g._array[c+0]=b[f].x,g._array[c+1]=
b[f].y,g._array[c+2]=b[f].z;r.uniform3fv(h,g._array);break;case "v4v":void 0===g._array&&(g._array=new Float32Array(4*b.length));c=f=0;for(l=b.length;f<l;f++,c+=4)g._array[c+0]=b[f].x,g._array[c+1]=b[f].y,g._array[c+2]=b[f].z,g._array[c+3]=b[f].w;r.uniform4fv(h,g._array);break;case "m2":r.uniformMatrix2fv(h,!1,b.elements);break;case "m3":r.uniformMatrix3fv(h,!1,b.elements);break;case "m3v":void 0===g._array&&(g._array=new Float32Array(9*b.length));f=0;for(l=b.length;f<l;f++)b[f].flattenToArrayOffset(g._array,
9*f);r.uniformMatrix3fv(h,!1,g._array);break;case "m4":r.uniformMatrix4fv(h,!1,b.elements);break;case "m4v":void 0===g._array&&(g._array=new Float32Array(16*b.length));f=0;for(l=b.length;f<l;f++)b[f].flattenToArrayOffset(g._array,16*f);r.uniformMatrix4fv(h,!1,g._array);break;case "t":c=w();r.uniform1i(h,c);if(!b)continue;b instanceof THREE.CubeTexture||Array.isArray(b.image)&&6===b.image.length?z(b,c):b instanceof THREE.WebGLRenderTargetCube?A(b.texture,c):b instanceof THREE.WebGLRenderTarget?Z.setTexture(b.texture,
c):Z.setTexture(b,c);break;case "tv":void 0===g._array&&(g._array=[]);f=0;for(l=g.value.length;f<l;f++)g._array[f]=w();r.uniform1iv(h,g._array);f=0;for(l=g.value.length;f<l;f++)b=g.value[f],c=g._array[f],b&&(b instanceof THREE.CubeTexture||b.image instanceof Array&&6===b.image.length?z(b,c):b instanceof THREE.WebGLRenderTarget?Z.setTexture(b.texture,c):b instanceof THREE.WebGLRenderTargetCube?A(b.texture,c):Z.setTexture(b,c));break;default:console.warn("THREE.WebGLRenderer: Unknown uniform type: "+
f)}}}}function C(a,b,c){c?(r.texParameteri(a,r.TEXTURE_WRAP_S,F(b.wrapS)),r.texParameteri(a,r.TEXTURE_WRAP_T,F(b.wrapT)),r.texParameteri(a,r.TEXTURE_MAG_FILTER,F(b.magFilter)),r.texParameteri(a,r.TEXTURE_MIN_FILTER,F(b.minFilter))):(r.texParameteri(a,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(a,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),b.wrapS===THREE.ClampToEdgeWrapping&&b.wrapT===THREE.ClampToEdgeWrapping||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.",
b),r.texParameteri(a,r.TEXTURE_MAG_FILTER,E(b.magFilter)),r.texParameteri(a,r.TEXTURE_MIN_FILTER,E(b.minFilter)),b.minFilter!==THREE.NearestFilter&&b.minFilter!==THREE.LinearFilter&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.",b));!(c=U.get("EXT_texture_filter_anisotropic"))||b.type===THREE.FloatType&&null===U.get("OES_texture_float_linear")||b.type===THREE.HalfFloatType&&null===U.get("OES_texture_half_float_linear")||
!(1<b.anisotropy||S.get(b).__currentAnisotropy)||(r.texParameterf(a,c.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,Z.getMaxAnisotropy())),S.get(b).__currentAnisotropy=b.anisotropy)}function x(a,b){if(a.width>b||a.height>b){var c=b/Math.max(a.width,a.height),d=document.createElement("canvas");d.width=Math.floor(a.width*c);d.height=Math.floor(a.height*c);d.getContext("2d").drawImage(a,0,0,a.width,a.height,0,0,d.width,d.height);console.warn("THREE.WebGLRenderer: image is too big ("+a.width+"x"+a.height+
"). Resized to "+d.width+"x"+d.height,a);return d}return a}function B(a){return THREE.Math.isPowerOfTwo(a.width)&&THREE.Math.isPowerOfTwo(a.height)}function z(a,b){var c=S.get(a);if(6===a.image.length)if(0<a.version&&c.__version!==a.version){c.__image__webglTextureCube||(a.addEventListener("dispose",f),c.__image__webglTextureCube=r.createTexture(),ea.textures++);H.activeTexture(r.TEXTURE0+b);H.bindTexture(r.TEXTURE_CUBE_MAP,c.__image__webglTextureCube);r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,a.flipY);
for(var d=a instanceof THREE.CompressedTexture,e=a.image[0]instanceof THREE.DataTexture,g=[],h=0;6>h;h++)g[h]=!Z.autoScaleCubemaps||d||e?e?a.image[h].image:a.image[h]:x(a.image[h],aa.maxCubemapSize);var k=B(g[0]),l=F(a.format),n=F(a.type);C(r.TEXTURE_CUBE_MAP,a,k);for(h=0;6>h;h++)if(d)for(var m,p=g[h].mipmaps,q=0,s=p.length;q<s;q++)m=p[q],a.format!==THREE.RGBAFormat&&a.format!==THREE.RGBFormat?-1<H.getCompressedTextureFormats().indexOf(l)?H.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+h,q,l,
m.width,m.height,0,m.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setCubeTexture()"):H.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+h,q,l,m.width,m.height,0,l,n,m.data);else e?H.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+h,0,l,g[h].width,g[h].height,0,l,n,g[h].data):H.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+h,0,l,l,n,g[h]);a.generateMipmaps&&k&&r.generateMipmap(r.TEXTURE_CUBE_MAP);c.__version=a.version;if(a.onUpdate)a.onUpdate(a)}else H.activeTexture(r.TEXTURE0+
b),H.bindTexture(r.TEXTURE_CUBE_MAP,c.__image__webglTextureCube)}function A(a,b){H.activeTexture(r.TEXTURE0+b);H.bindTexture(r.TEXTURE_CUBE_MAP,S.get(a).__webglTexture)}function y(a,b,c,d){var e=F(b.texture.format),g=F(b.texture.type);H.texImage2D(d,0,e,b.width,b.height,0,e,g,null);r.bindFramebuffer(r.FRAMEBUFFER,a);r.framebufferTexture2D(r.FRAMEBUFFER,c,d,S.get(b.texture).__webglTexture,0);r.bindFramebuffer(r.FRAMEBUFFER,null)}function J(a,b){r.bindRenderbuffer(r.RENDERBUFFER,a);b.depthBuffer&&!b.stencilBuffer?
(r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_COMPONENT16,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,a)):b.depthBuffer&&b.stencilBuffer?(r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,a)):r.renderbufferStorage(r.RENDERBUFFER,r.RGBA4,b.width,b.height);r.bindRenderbuffer(r.RENDERBUFFER,null)}function E(a){return a===THREE.NearestFilter||a===THREE.NearestMipMapNearestFilter||
a===THREE.NearestMipMapLinearFilter?r.NEAREST:r.LINEAR}function F(a){var b;if(a===THREE.RepeatWrapping)return r.REPEAT;if(a===THREE.ClampToEdgeWrapping)return r.CLAMP_TO_EDGE;if(a===THREE.MirroredRepeatWrapping)return r.MIRRORED_REPEAT;if(a===THREE.NearestFilter)return r.NEAREST;if(a===THREE.NearestMipMapNearestFilter)return r.NEAREST_MIPMAP_NEAREST;if(a===THREE.NearestMipMapLinearFilter)return r.NEAREST_MIPMAP_LINEAR;if(a===THREE.LinearFilter)return r.LINEAR;if(a===THREE.LinearMipMapNearestFilter)return r.LINEAR_MIPMAP_NEAREST;
if(a===THREE.LinearMipMapLinearFilter)return r.LINEAR_MIPMAP_LINEAR;if(a===THREE.UnsignedByteType)return r.UNSIGNED_BYTE;if(a===THREE.UnsignedShort4444Type)return r.UNSIGNED_SHORT_4_4_4_4;if(a===THREE.UnsignedShort5551Type)return r.UNSIGNED_SHORT_5_5_5_1;if(a===THREE.UnsignedShort565Type)return r.UNSIGNED_SHORT_5_6_5;if(a===THREE.ByteType)return r.BYTE;if(a===THREE.ShortType)return r.SHORT;if(a===THREE.UnsignedShortType)return r.UNSIGNED_SHORT;if(a===THREE.IntType)return r.INT;if(a===THREE.UnsignedIntType)return r.UNSIGNED_INT;
if(a===THREE.FloatType)return r.FLOAT;b=U.get("OES_texture_half_float");if(null!==b&&a===THREE.HalfFloatType)return b.HALF_FLOAT_OES;if(a===THREE.AlphaFormat)return r.ALPHA;if(a===THREE.RGBFormat)return r.RGB;if(a===THREE.RGBAFormat)return r.RGBA;if(a===THREE.LuminanceFormat)return r.LUMINANCE;if(a===THREE.LuminanceAlphaFormat)return r.LUMINANCE_ALPHA;if(a===THREE.AddEquation)return r.FUNC_ADD;if(a===THREE.SubtractEquation)return r.FUNC_SUBTRACT;if(a===THREE.ReverseSubtractEquation)return r.FUNC_REVERSE_SUBTRACT;
if(a===THREE.ZeroFactor)return r.ZERO;if(a===THREE.OneFactor)return r.ONE;if(a===THREE.SrcColorFactor)return r.SRC_COLOR;if(a===THREE.OneMinusSrcColorFactor)return r.ONE_MINUS_SRC_COLOR;if(a===THREE.SrcAlphaFactor)return r.SRC_ALPHA;if(a===THREE.OneMinusSrcAlphaFactor)return r.ONE_MINUS_SRC_ALPHA;if(a===THREE.DstAlphaFactor)return r.DST_ALPHA;if(a===THREE.OneMinusDstAlphaFactor)return r.ONE_MINUS_DST_ALPHA;if(a===THREE.DstColorFactor)return r.DST_COLOR;if(a===THREE.OneMinusDstColorFactor)return r.ONE_MINUS_DST_COLOR;
if(a===THREE.SrcAlphaSaturateFactor)return r.SRC_ALPHA_SATURATE;b=U.get("WEBGL_compressed_texture_s3tc");if(null!==b){if(a===THREE.RGB_S3TC_DXT1_Format)return b.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===THREE.RGBA_S3TC_DXT1_Format)return b.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===THREE.RGBA_S3TC_DXT3_Format)return b.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===THREE.RGBA_S3TC_DXT5_Format)return b.COMPRESSED_RGBA_S3TC_DXT5_EXT}b=U.get("WEBGL_compressed_texture_pvrtc");if(null!==b){if(a===THREE.RGB_PVRTC_4BPPV1_Format)return b.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
if(a===THREE.RGB_PVRTC_2BPPV1_Format)return b.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===THREE.RGBA_PVRTC_4BPPV1_Format)return b.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===THREE.RGBA_PVRTC_2BPPV1_Format)return b.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}b=U.get("WEBGL_compressed_texture_etc1");if(null!==b&&a===THREE.RGB_ETC1_Format)return b.COMPRESSED_RGB_ETC1_WEBGL;b=U.get("EXT_blend_minmax");if(null!==b){if(a===THREE.MinEquation)return b.MIN_EXT;if(a===THREE.MaxEquation)return b.MAX_EXT}return 0}console.log("THREE.WebGLRenderer",
THREE.REVISION);a=a||{};var I=void 0!==a.canvas?a.canvas:document.createElement("canvas"),Q=void 0!==a.context?a.context:null,N=void 0!==a.alpha?a.alpha:!1,L=void 0!==a.depth?a.depth:!0,G=void 0!==a.stencil?a.stencil:!0,M=void 0!==a.antialias?a.antialias:!1,R=void 0!==a.premultipliedAlpha?a.premultipliedAlpha:!0,P=void 0!==a.preserveDrawingBuffer?a.preserveDrawingBuffer:!1,O=new THREE.Color(0),K=0,D=1,Y=[],W=[],X=-1,ba=[],ca=-1,qa=new Float32Array(8),fa=[],$=[];this.domElement=I;this.context=null;
this.sortObjects=this.autoClearStencil=this.autoClearDepth=this.autoClearColor=this.autoClear=!0;this.gammaFactor=2;this.gammaOutput=this.gammaInput=!1;this.maxMorphTargets=8;this.maxMorphNormals=4;this.autoScaleCubemaps=!0;var Z=this,ua=null,xa=null,ra=null,na=-1,ja="",ia=null,ma=new THREE.Vector4,ya=null,ga=new THREE.Vector4,pa=0,ta=new THREE.Vector4(0,0,I.width,I.height),za=!1,ha=new THREE.Vector4(0,0,I.width,I.height),va=new THREE.Frustum,oa=new THREE.Matrix4,V=new THREE.Vector3,T={hash:"",ambient:[0,
0,0],directional:[],point:[],spot:[],hemi:[],shadows:[],shadowsPointLight:0},ea={geometries:0,textures:0},da={calls:0,vertices:0,faces:0,points:0};this.info={render:da,memory:ea,programs:null};var r;try{N={alpha:N,depth:L,stencil:G,antialias:M,premultipliedAlpha:R,preserveDrawingBuffer:P};r=Q||I.getContext("webgl",N)||I.getContext("experimental-webgl",N);if(null===r){if(null!==I.getContext("webgl"))throw"Error creating WebGL context with your selected attributes.";throw"Error creating WebGL context.";
}I.addEventListener("webglcontextlost",e,!1)}catch(Aa){console.error("THREE.WebGLRenderer: "+Aa)}var U=new THREE.WebGLExtensions(r);U.get("OES_texture_float");U.get("OES_texture_float_linear");U.get("OES_texture_half_float");U.get("OES_texture_half_float_linear");U.get("OES_standard_derivatives");U.get("ANGLE_instanced_arrays");U.get("OES_element_index_uint")&&(THREE.BufferGeometry.MaxIndex=4294967296);var aa=new THREE.WebGLCapabilities(r,U,a),H=new THREE.WebGLState(r,U,F),S=new THREE.WebGLProperties,
la=new THREE.WebGLObjects(r,S,this.info),ka=new THREE.WebGLPrograms(this,aa),sa=new THREE.WebGLLights;this.info.programs=ka.programs;var Ba=new THREE.WebGLBufferRenderer(r,U,da),Ca=new THREE.WebGLIndexedBufferRenderer(r,U,da);c();this.context=r;this.capabilities=aa;this.extensions=U;this.properties=S;this.state=H;var wa=new THREE.WebGLShadowMap(this,T,la);this.shadowMap=wa;var Da=new THREE.SpritePlugin(this,fa),Ea=new THREE.LensFlarePlugin(this,$);this.getContext=function(){return r};this.getContextAttributes=
function(){return r.getContextAttributes()};this.forceContextLoss=function(){U.get("WEBGL_lose_context").loseContext()};this.getMaxAnisotropy=function(){var a;return function(){if(void 0!==a)return a;var b=U.get("EXT_texture_filter_anisotropic");return a=null!==b?r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT):0}}();this.getPrecision=function(){return aa.precision};this.getPixelRatio=function(){return D};this.setPixelRatio=function(a){void 0!==a&&(D=a,this.setSize(ha.z,ha.w,!1))};this.getSize=function(){return{width:I.width/
D,height:I.height/D}};this.setSize=function(a,b,c){I.width=a*D;I.height=b*D;!1!==c&&(I.style.width=a+"px",I.style.height=b+"px");this.setViewport(0,0,a,b)};this.setViewport=function(a,b,c,d){H.viewport(ha.set(a,b,c,d))};this.setScissor=function(a,b,c,d){H.scissor(ta.set(a,b,c,d))};this.setScissorTest=function(a){H.setScissorTest(za=a)};this.getClearColor=function(){return O};this.setClearColor=function(a,c){O.set(a);K=void 0!==c?c:1;b(O.r,O.g,O.b,K)};this.getClearAlpha=function(){return K};this.setClearAlpha=
function(a){K=a;b(O.r,O.g,O.b,K)};this.clear=function(a,b,c){var d=0;if(void 0===a||a)d|=r.COLOR_BUFFER_BIT;if(void 0===b||b)d|=r.DEPTH_BUFFER_BIT;if(void 0===c||c)d|=r.STENCIL_BUFFER_BIT;r.clear(d)};this.clearColor=function(){this.clear(!0,!1,!1)};this.clearDepth=function(){this.clear(!1,!0,!1)};this.clearStencil=function(){this.clear(!1,!1,!0)};this.clearTarget=function(a,b,c,d){this.setRenderTarget(a);this.clear(b,c,d)};this.resetGLState=d;this.dispose=function(){I.removeEventListener("webglcontextlost",
e,!1)};this.renderBufferImmediate=function(a,b,c){H.initAttributes();var d=S.get(a);a.hasPositions&&!d.position&&(d.position=r.createBuffer());a.hasNormals&&!d.normal&&(d.normal=r.createBuffer());a.hasUvs&&!d.uv&&(d.uv=r.createBuffer());a.hasColors&&!d.color&&(d.color=r.createBuffer());b=b.getAttributes();a.hasPositions&&(r.bindBuffer(r.ARRAY_BUFFER,d.position),r.bufferData(r.ARRAY_BUFFER,a.positionArray,r.DYNAMIC_DRAW),H.enableAttribute(b.position),r.vertexAttribPointer(b.position,3,r.FLOAT,!1,0,
0));if(a.hasNormals){r.bindBuffer(r.ARRAY_BUFFER,d.normal);if("MeshPhongMaterial"!==c.type&&"MeshStandardMaterial"!==c.type&&c.shading===THREE.FlatShading)for(var e=0,g=3*a.count;e<g;e+=9){var f=a.normalArray,h=(f[e+0]+f[e+3]+f[e+6])/3,k=(f[e+1]+f[e+4]+f[e+7])/3,l=(f[e+2]+f[e+5]+f[e+8])/3;f[e+0]=h;f[e+1]=k;f[e+2]=l;f[e+3]=h;f[e+4]=k;f[e+5]=l;f[e+6]=h;f[e+7]=k;f[e+8]=l}r.bufferData(r.ARRAY_BUFFER,a.normalArray,r.DYNAMIC_DRAW);H.enableAttribute(b.normal);r.vertexAttribPointer(b.normal,3,r.FLOAT,!1,
0,0)}a.hasUvs&&c.map&&(r.bindBuffer(r.ARRAY_BUFFER,d.uv),r.bufferData(r.ARRAY_BUFFER,a.uvArray,r.DYNAMIC_DRAW),H.enableAttribute(b.uv),r.vertexAttribPointer(b.uv,2,r.FLOAT,!1,0,0));a.hasColors&&c.vertexColors!==THREE.NoColors&&(r.bindBuffer(r.ARRAY_BUFFER,d.color),r.bufferData(r.ARRAY_BUFFER,a.colorArray,r.DYNAMIC_DRAW),H.enableAttribute(b.color),r.vertexAttribPointer(b.color,3,r.FLOAT,!1,0,0));H.disableUnusedAttributes();r.drawArrays(r.TRIANGLES,0,a.count);a.count=0};this.renderBufferDirect=function(a,
b,c,d,e,f){u(d);var g=t(a,b,d,e),h=!1;a=c.id+"_"+g.id+"_"+d.wireframe;a!==ja&&(ja=a,h=!0);b=e.morphTargetInfluences;if(void 0!==b){a=[];for(var k=0,h=b.length;k<h;k++){var n=b[k];a.push([n,k])}a.sort(l);8<a.length&&(a.length=8);for(var m=c.morphAttributes,k=0,h=a.length;k<h;k++)n=a[k],qa[k]=n[0],0!==n[0]?(b=n[1],!0===d.morphTargets&&m.position&&c.addAttribute("morphTarget"+k,m.position[b]),!0===d.morphNormals&&m.normal&&c.addAttribute("morphNormal"+k,m.normal[b])):(!0===d.morphTargets&&c.removeAttribute("morphTarget"+
k),!0===d.morphNormals&&c.removeAttribute("morphNormal"+k));a=g.getUniforms();null!==a.morphTargetInfluences&&r.uniform1fv(a.morphTargetInfluences,qa);h=!0}b=c.index;k=c.attributes.position;!0===d.wireframe&&(b=la.getWireframeAttribute(c));null!==b?(a=Ca,a.setIndex(b)):a=Ba;if(h){a:{var h=void 0,p;if(c instanceof THREE.InstancedBufferGeometry&&(p=U.get("ANGLE_instanced_arrays"),null===p)){console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
break a}void 0===h&&(h=0);H.initAttributes();var n=c.attributes,g=g.getAttributes(),m=d.defaultAttributeValues,q;for(q in g){var s=g[q];if(0<=s){var w=n[q];if(void 0!==w){var v=w.itemSize,x=la.getAttributeBuffer(w);if(w instanceof THREE.InterleavedBufferAttribute){var C=w.data,z=C.stride,w=w.offset;C instanceof THREE.InstancedInterleavedBuffer?(H.enableAttributeAndDivisor(s,C.meshPerAttribute,p),void 0===c.maxInstancedCount&&(c.maxInstancedCount=C.meshPerAttribute*C.count)):H.enableAttribute(s);r.bindBuffer(r.ARRAY_BUFFER,
x);r.vertexAttribPointer(s,v,r.FLOAT,!1,z*C.array.BYTES_PER_ELEMENT,(h*z+w)*C.array.BYTES_PER_ELEMENT)}else w instanceof THREE.InstancedBufferAttribute?(H.enableAttributeAndDivisor(s,w.meshPerAttribute,p),void 0===c.maxInstancedCount&&(c.maxInstancedCount=w.meshPerAttribute*w.count)):H.enableAttribute(s),r.bindBuffer(r.ARRAY_BUFFER,x),r.vertexAttribPointer(s,v,r.FLOAT,!1,0,h*v*4)}else if(void 0!==m&&(v=m[q],void 0!==v))switch(v.length){case 2:r.vertexAttrib2fv(s,v);break;case 3:r.vertexAttrib3fv(s,
v);break;case 4:r.vertexAttrib4fv(s,v);break;default:r.vertexAttrib1fv(s,v)}}}H.disableUnusedAttributes()}null!==b&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,la.getAttributeBuffer(b))}p=Infinity;null!==b?p=b.count:void 0!==k&&(p=k.count);q=c.drawRange.start;b=c.drawRange.count;k=null!==f?f.start:0;h=null!==f?f.count:Infinity;f=Math.max(0,q,k);p=Math.min(0+p,q+b,k+h)-1;p=Math.max(0,p-f+1);if(e instanceof THREE.Mesh)if(!0===d.wireframe)H.setLineWidth(d.wireframeLinewidth*(null===xa?D:1)),a.setMode(r.LINES);
else switch(e.drawMode){case THREE.TrianglesDrawMode:a.setMode(r.TRIANGLES);break;case THREE.TriangleStripDrawMode:a.setMode(r.TRIANGLE_STRIP);break;case THREE.TriangleFanDrawMode:a.setMode(r.TRIANGLE_FAN)}else e instanceof THREE.Line?(d=d.linewidth,void 0===d&&(d=1),H.setLineWidth(d*(null===xa?D:1)),e instanceof THREE.LineSegments?a.setMode(r.LINES):a.setMode(r.LINE_STRIP)):e instanceof THREE.Points&&a.setMode(r.POINTS);c instanceof THREE.InstancedBufferGeometry&&0<c.maxInstancedCount?a.renderInstances(c,
f,p):a.render(f,p)};this.render=function(a,b,c,d){if(!1===b instanceof THREE.Camera)console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");else{var e=a.fog;ja="";na=-1;ia=null;!0===a.autoUpdate&&a.updateMatrixWorld();null===b.parent&&b.updateMatrixWorld();b.matrixWorldInverse.getInverse(b.matrixWorld);oa.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse);va.setFromMatrix(oa);Y.length=0;ca=X=-1;fa.length=0;$.length=0;q(a,b);W.length=X+1;ba.length=ca+1;!0===Z.sortObjects&&
(W.sort(m),ba.sort(p));var f=Y,g,h,k,l=0,n=0,w=0,t,v,u,x=b.matrixWorldInverse,D=0,C=0,z=0,A=0,E=0;g=T.shadowsPointLight=0;for(h=f.length;g<h;g++)if(k=f[g],t=k.color,v=k.intensity,u=k.distance,k instanceof THREE.AmbientLight)l+=t.r*v,n+=t.g*v,w+=t.b*v;else if(k instanceof THREE.DirectionalLight){var y=sa.get(k);y.direction.setFromMatrixPosition(k.matrixWorld);V.setFromMatrixPosition(k.target.matrixWorld);y.direction.sub(V);y.direction.transformDirection(x);y.color.copy(k.color).multiplyScalar(k.intensity);
k.castShadow?(y.shadow=E,T.shadows[E++]=k):y.shadow=-1;T.directional[D++]=y}else k instanceof THREE.PointLight?(y=sa.get(k),y.position.setFromMatrixPosition(k.matrixWorld),y.position.applyMatrix4(x),y.color.copy(k.color).multiplyScalar(k.intensity),y.distance=k.distance,y.decay=0===k.distance?0:k.decay,k.castShadow?(y.shadow=E,T.shadows[E++]=k,T.shadowsPointLight++):y.shadow=-1,T.point[C++]=y):k instanceof THREE.SpotLight?(y=sa.get(k),y.position.setFromMatrixPosition(k.matrixWorld),y.position.applyMatrix4(x),
y.color.copy(t).multiplyScalar(v),y.distance=u,y.direction.setFromMatrixPosition(k.matrixWorld),V.setFromMatrixPosition(k.target.matrixWorld),y.direction.sub(V),y.direction.transformDirection(x),y.angleCos=Math.cos(k.angle),y.exponent=k.exponent,y.decay=0===k.distance?0:k.decay,k.castShadow?(y.shadow=E,T.shadows[E++]=k):y.shadow=-1,T.spot[z++]=y):k instanceof THREE.HemisphereLight&&(y=sa.get(k),y.direction.setFromMatrixPosition(k.matrixWorld),y.direction.transformDirection(x),y.direction.normalize(),
y.skyColor.copy(k.color).multiplyScalar(v),y.groundColor.copy(k.groundColor).multiplyScalar(v),T.hemi[A++]=y);T.ambient[0]=l;T.ambient[1]=n;T.ambient[2]=w;T.directional.length=D;T.point.length=C;T.spot.length=z;T.hemi.length=A;T.shadows.length=E;T.hash=D+","+C+","+z+","+A+","+E;wa.render(a,b);da.calls=0;da.vertices=0;da.faces=0;da.points=0;void 0===c&&(c=null);this.setRenderTarget(c);(this.autoClear||d)&&this.clear(this.autoClearColor,this.autoClearDepth,this.autoClearStencil);a.overrideMaterial?
(d=a.overrideMaterial,s(W,b,e,d),s(ba,b,e,d)):(H.setBlending(THREE.NoBlending),s(W,b,e),s(ba,b,e));Da.render(a,b);Ea.render(a,b,ga);c&&(a=c.texture,a.generateMipmaps&&B(c)&&a.minFilter!==THREE.NearestFilter&&a.minFilter!==THREE.LinearFilter&&(a=c instanceof THREE.WebGLRenderTargetCube?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,c=S.get(c.texture).__webglTexture,H.bindTexture(a,c),r.generateMipmap(a),H.bindTexture(a,null)));H.setDepthTest(!0);H.setDepthWrite(!0);H.setColorWrite(!0)}};this.setFaceCulling=function(a,
b){a===THREE.CullFaceNone?H.disable(r.CULL_FACE):(b===THREE.FrontFaceDirectionCW?r.frontFace(r.CW):r.frontFace(r.CCW),a===THREE.CullFaceBack?r.cullFace(r.BACK):a===THREE.CullFaceFront?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK),H.enable(r.CULL_FACE))};this.setTexture=function(a,b){var c=S.get(a);if(0<a.version&&c.__version!==a.version){var d=a.image;if(void 0===d)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined",a);else if(!1===d.complete)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete",
a);else{void 0===c.__webglInit&&(c.__webglInit=!0,a.addEventListener("dispose",f),c.__webglTexture=r.createTexture(),ea.textures++);H.activeTexture(r.TEXTURE0+b);H.bindTexture(r.TEXTURE_2D,c.__webglTexture);r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,a.flipY);r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha);r.pixelStorei(r.UNPACK_ALIGNMENT,a.unpackAlignment);var e=x(a.image,aa.maxTextureSize);if((a.wrapS!==THREE.ClampToEdgeWrapping||a.wrapT!==THREE.ClampToEdgeWrapping||a.minFilter!==THREE.NearestFilter&&
a.minFilter!==THREE.LinearFilter)&&!1===B(e))if(d=e,d instanceof HTMLImageElement||d instanceof HTMLCanvasElement){var g=document.createElement("canvas");g.width=THREE.Math.nearestPowerOfTwo(d.width);g.height=THREE.Math.nearestPowerOfTwo(d.height);g.getContext("2d").drawImage(d,0,0,g.width,g.height);console.warn("THREE.WebGLRenderer: image is not power of two ("+d.width+"x"+d.height+"). Resized to "+g.width+"x"+g.height,d);e=g}else e=d;var d=B(e),g=F(a.format),h=F(a.type);C(r.TEXTURE_2D,a,d);var k=
a.mipmaps;if(a instanceof THREE.DataTexture)if(0<k.length&&d){for(var l=0,n=k.length;l<n;l++)e=k[l],H.texImage2D(r.TEXTURE_2D,l,g,e.width,e.height,0,g,h,e.data);a.generateMipmaps=!1}else H.texImage2D(r.TEXTURE_2D,0,g,e.width,e.height,0,g,h,e.data);else if(a instanceof THREE.CompressedTexture)for(l=0,n=k.length;l<n;l++)e=k[l],a.format!==THREE.RGBAFormat&&a.format!==THREE.RGBFormat?-1<H.getCompressedTextureFormats().indexOf(g)?H.compressedTexImage2D(r.TEXTURE_2D,l,g,e.width,e.height,0,e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):
H.texImage2D(r.TEXTURE_2D,l,g,e.width,e.height,0,g,h,e.data);else if(0<k.length&&d){l=0;for(n=k.length;l<n;l++)e=k[l],H.texImage2D(r.TEXTURE_2D,l,g,g,h,e);a.generateMipmaps=!1}else H.texImage2D(r.TEXTURE_2D,0,g,g,h,e);a.generateMipmaps&&d&&r.generateMipmap(r.TEXTURE_2D);c.__version=a.version;if(a.onUpdate)a.onUpdate(a)}}else H.activeTexture(r.TEXTURE0+b),H.bindTexture(r.TEXTURE_2D,c.__webglTexture)};this.setRenderTarget=function(a){if((xa=a)&&void 0===S.get(a).__webglFramebuffer){var b=S.get(a),c=
S.get(a.texture);a.addEventListener("dispose",g);c.__webglTexture=r.createTexture();ea.textures++;var d=a instanceof THREE.WebGLRenderTargetCube,e=THREE.Math.isPowerOfTwo(a.width)&&THREE.Math.isPowerOfTwo(a.height);if(d){b.__webglFramebuffer=[];for(var f=0;6>f;f++)b.__webglFramebuffer[f]=r.createFramebuffer()}else b.__webglFramebuffer=r.createFramebuffer();if(d){H.bindTexture(r.TEXTURE_CUBE_MAP,c.__webglTexture);C(r.TEXTURE_CUBE_MAP,a.texture,e);for(f=0;6>f;f++)y(b.__webglFramebuffer[f],a,r.COLOR_ATTACHMENT0,
r.TEXTURE_CUBE_MAP_POSITIVE_X+f);a.texture.generateMipmaps&&e&&r.generateMipmap(r.TEXTURE_CUBE_MAP);H.bindTexture(r.TEXTURE_CUBE_MAP,null)}else H.bindTexture(r.TEXTURE_2D,c.__webglTexture),C(r.TEXTURE_2D,a.texture,e),y(b.__webglFramebuffer,a,r.COLOR_ATTACHMENT0,r.TEXTURE_2D),a.texture.generateMipmaps&&e&&r.generateMipmap(r.TEXTURE_2D),H.bindTexture(r.TEXTURE_2D,null);if(a.depthBuffer){b=S.get(a);if(a instanceof THREE.WebGLRenderTargetCube)for(b.__webglDepthbuffer=[],c=0;6>c;c++)r.bindFramebuffer(r.FRAMEBUFFER,
b.__webglFramebuffer[c]),b.__webglDepthbuffer[c]=r.createRenderbuffer(),J(b.__webglDepthbuffer[c],a);else r.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=r.createRenderbuffer(),J(b.__webglDepthbuffer,a);r.bindFramebuffer(r.FRAMEBUFFER,null)}}b=a instanceof THREE.WebGLRenderTargetCube;a?(c=S.get(a),c=b?c.__webglFramebuffer[a.activeCubeFace]:c.__webglFramebuffer,ma.copy(a.scissor),ya=a.scissorTest,ga.copy(a.viewport)):(c=null,ma.copy(ta).multiplyScalar(D),ya=za,ga.copy(ha).multiplyScalar(D));
ra!==c&&(r.bindFramebuffer(r.FRAMEBUFFER,c),ra=c);H.scissor(ma);H.setScissorTest(ya);H.viewport(ga);b&&(b=S.get(a.texture),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+a.activeCubeFace,b.__webglTexture,0))};this.readRenderTargetPixels=function(a,b,c,d,e,g){if(!1===a instanceof THREE.WebGLRenderTarget)console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");else{var f=S.get(a).__webglFramebuffer;if(f){var h=
!1;f!==ra&&(r.bindFramebuffer(r.FRAMEBUFFER,f),h=!0);try{var k=a.texture;k.format!==THREE.RGBAFormat&&F(k.format)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT)?console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."):k.type===THREE.UnsignedByteType||F(k.type)===r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)||k.type===THREE.FloatType&&U.get("WEBGL_color_buffer_float")||k.type===THREE.HalfFloatType&&U.get("EXT_color_buffer_half_float")?
r.checkFramebufferStatus(r.FRAMEBUFFER)===r.FRAMEBUFFER_COMPLETE?r.readPixels(b,c,d,e,F(k.format),F(k.type),g):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete."):console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.")}finally{h&&r.bindFramebuffer(r.FRAMEBUFFER,ra)}}}}};
THREE.WebGLRenderTarget=function(a,b,c){this.uuid=THREE.Math.generateUUID();this.width=a;this.height=b;this.scissor=new THREE.Vector4(0,0,a,b);this.scissorTest=!1;this.viewport=new THREE.Vector4(0,0,a,b);c=c||{};void 0===c.minFilter&&(c.minFilter=THREE.LinearFilter);this.texture=new THREE.Texture(void 0,void 0,c.wrapS,c.wrapT,c.magFilter,c.minFilter,c.format,c.type,c.anisotropy);this.depthBuffer=void 0!==c.depthBuffer?c.depthBuffer:!0;this.stencilBuffer=void 0!==c.stencilBuffer?c.stencilBuffer:!0};
THREE.WebGLRenderTarget.prototype={constructor:THREE.WebGLRenderTarget,setSize:function(a,b){if(this.width!==a||this.height!==b)this.width=a,this.height=b,this.dispose();this.viewport.set(0,0,a,b);this.scissor.set(0,0,a,b)},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.width=a.width;this.height=a.height;this.viewport.copy(a.viewport);this.texture=a.texture.clone();this.depthBuffer=a.depthBuffer;this.stencilBuffer=a.stencilBuffer;this.shareDepthFrom=a.shareDepthFrom;
return this},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.WebGLRenderTarget.prototype);THREE.WebGLRenderTargetCube=function(a,b,c){THREE.WebGLRenderTarget.call(this,a,b,c);this.activeCubeFace=0};THREE.WebGLRenderTargetCube.prototype=Object.create(THREE.WebGLRenderTarget.prototype);THREE.WebGLRenderTargetCube.prototype.constructor=THREE.WebGLRenderTargetCube;
THREE.WebGLBufferRenderer=function(a,b,c){var d;this.setMode=function(a){d=a};this.render=function(b,f){a.drawArrays(d,b,f);c.calls++;c.vertices+=f;d===a.TRIANGLES&&(c.faces+=f/3)};this.renderInstances=function(e){var f=b.get("ANGLE_instanced_arrays");if(null===f)console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");else{var g=e.attributes.position,h=0,h=g instanceof THREE.InterleavedBufferAttribute?g.data.count:
g.count;f.drawArraysInstancedANGLE(d,0,h,e.maxInstancedCount);c.calls++;c.vertices+=h*e.maxInstancedCount;d===a.TRIANGLES&&(c.faces+=e.maxInstancedCount*h/3)}}};
THREE.WebGLIndexedBufferRenderer=function(a,b,c){var d,e,f;this.setMode=function(a){d=a};this.setIndex=function(c){c.array instanceof Uint32Array&&b.get("OES_element_index_uint")?(e=a.UNSIGNED_INT,f=4):(e=a.UNSIGNED_SHORT,f=2)};this.render=function(b,h){a.drawElements(d,h,e,b*f);c.calls++;c.vertices+=h;d===a.TRIANGLES&&(c.faces+=h/3)};this.renderInstances=function(g,h,k){var l=b.get("ANGLE_instanced_arrays");null===l?console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."):
(l.drawElementsInstancedANGLE(d,k,e,h*f,g.maxInstancedCount),c.calls++,c.vertices+=k*g.maxInstancedCount,d===a.TRIANGLES&&(c.faces+=g.maxInstancedCount*k/3))}};
THREE.WebGLExtensions=function(a){var b={};this.get=function(c){if(void 0!==b[c])return b[c];var d;switch(c){case "EXT_texture_filter_anisotropic":d=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case "WEBGL_compressed_texture_s3tc":d=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
break;case "WEBGL_compressed_texture_pvrtc":d=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;case "WEBGL_compressed_texture_etc1":d=a.getExtension("WEBGL_compressed_texture_etc1");break;default:d=a.getExtension(c)}null===d&&console.warn("THREE.WebGLRenderer: "+c+" extension not supported.");return b[c]=d}};
THREE.WebGLCapabilities=function(a,b,c){function d(b){if("highp"===b){if(0<a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision&&0<a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision)return"highp";b="mediump"}return"mediump"===b&&0<a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision&&0<a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision?"mediump":"lowp"}this.getMaxPrecision=d;this.precision=void 0!==c.precision?c.precision:"highp";
this.logarithmicDepthBuffer=void 0!==c.logarithmicDepthBuffer?c.logarithmicDepthBuffer:!1;this.maxTextures=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS);this.maxVertexTextures=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS);this.maxTextureSize=a.getParameter(a.MAX_TEXTURE_SIZE);this.maxCubemapSize=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE);this.maxAttributes=a.getParameter(a.MAX_VERTEX_ATTRIBS);this.maxVertexUniforms=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS);this.maxVaryings=a.getParameter(a.MAX_VARYING_VECTORS);
this.maxFragmentUniforms=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS);this.vertexTextures=0<this.maxVertexTextures;this.floatFragmentTextures=!!b.get("OES_texture_float");this.floatVertexTextures=this.vertexTextures&&this.floatFragmentTextures;c=d(this.precision);c!==this.precision&&(console.warn("THREE.WebGLRenderer:",this.precision,"not supported, using",c,"instead."),this.precision=c);this.logarithmicDepthBuffer&&(this.logarithmicDepthBuffer=!!b.get("EXT_frag_depth"))};
THREE.WebGLGeometries=function(a,b,c){function d(a){var h=a.target;a=f[h.id];null!==a.index&&e(a.index);var k=a.attributes,l;for(l in k)e(k[l]);h.removeEventListener("dispose",d);delete f[h.id];l=b.get(h);l.wireframe&&e(l.wireframe);b.delete(h);h=b.get(a);h.wireframe&&e(h.wireframe);b.delete(a);c.memory.geometries--}function e(c){var d;d=c instanceof THREE.InterleavedBufferAttribute?b.get(c.data).__webglBuffer:b.get(c).__webglBuffer;void 0!==d&&(a.deleteBuffer(d),c instanceof THREE.InterleavedBufferAttribute?
b.delete(c.data):b.delete(c))}var f={};this.get=function(a){var b=a.geometry;if(void 0!==f[b.id])return f[b.id];b.addEventListener("dispose",d);var e;b instanceof THREE.BufferGeometry?e=b:b instanceof THREE.Geometry&&(void 0===b._bufferGeometry&&(b._bufferGeometry=(new THREE.BufferGeometry).setFromObject(a)),e=b._bufferGeometry);f[b.id]=e;c.memory.geometries++;return e}};
THREE.WebGLLights=function(){var a={};this.get=function(b){if(void 0!==a[b.id])return a[b.id];var c;switch(b.type){case "HemisphereLight":c={direction:new THREE.Vector3,skyColor:new THREE.Color,groundColor:new THREE.Color};break;case "DirectionalLight":c={direction:new THREE.Vector3,color:new THREE.Color,shadow:-1};break;case "PointLight":c={position:new THREE.Vector3,color:new THREE.Color,distance:0,decay:0,shadow:-1};break;case "SpotLight":c={position:new THREE.Vector3,direction:new THREE.Vector3,
color:new THREE.Color,distance:0,angleCos:0,exponent:0,decay:0,shadow:-1}}return a[b.id]=c}};
THREE.WebGLObjects=function(a,b,c){function d(c,d){var e=c instanceof THREE.InterleavedBufferAttribute?c.data:c,f=b.get(e);void 0===f.__webglBuffer?(f.__webglBuffer=a.createBuffer(),a.bindBuffer(d,f.__webglBuffer),a.bufferData(d,e.array,e.dynamic?a.DYNAMIC_DRAW:a.STATIC_DRAW),f.version=e.version):f.version!==e.version&&(a.bindBuffer(d,f.__webglBuffer),!1===e.dynamic||-1===e.updateRange.count?a.bufferSubData(d,0,e.array):0===e.updateRange.count?console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually."):
(a.bufferSubData(d,e.updateRange.offset*e.array.BYTES_PER_ELEMENT,e.array.subarray(e.updateRange.offset,e.updateRange.offset+e.updateRange.count)),e.updateRange.count=0),f.version=e.version)}function e(a,b,c){if(b>c){var d=b;b=c;c=d}d=a[b];return void 0===d?(a[b]=[c],!0):-1===d.indexOf(c)?(d.push(c),!0):!1}var f=new THREE.WebGLGeometries(a,b,c);this.getAttributeBuffer=function(a){return a instanceof THREE.InterleavedBufferAttribute?b.get(a.data).__webglBuffer:b.get(a).__webglBuffer};this.getWireframeAttribute=
function(c){var f=b.get(c);if(void 0!==f.wireframe)return f.wireframe;var k=[],l=c.index,m=c.attributes;c=m.position;if(null!==l)for(var m={},l=l.array,p=0,n=l.length;p<n;p+=3){var q=l[p+0],s=l[p+1],u=l[p+2];e(m,q,s)&&k.push(q,s);e(m,s,u)&&k.push(s,u);e(m,u,q)&&k.push(u,q)}else for(l=m.position.array,p=0,n=l.length/3-1;p<n;p+=3)q=p+0,s=p+1,u=p+2,k.push(q,s,s,u,u,q);k=new THREE.BufferAttribute(new (65535<c.count?Uint32Array:Uint16Array)(k),1);d(k,a.ELEMENT_ARRAY_BUFFER);return f.wireframe=k};this.update=
function(b){var c=f.get(b);b.geometry instanceof THREE.Geometry&&c.updateFromObject(b);b=c.index;var e=c.attributes;null!==b&&d(b,a.ELEMENT_ARRAY_BUFFER);for(var l in e)d(e[l],a.ARRAY_BUFFER);b=c.morphAttributes;for(l in b)for(var e=b[l],m=0,p=e.length;m<p;m++)d(e[m],a.ARRAY_BUFFER);return c}};
THREE.WebGLProgram=function(){function a(a,b,d){a=a||{};return[a.derivatives||b.bumpMap||b.normalMap||b.flatShading?"#extension GL_OES_standard_derivatives : enable":"",(a.fragDepth||b.logarithmicDepthBuffer)&&d.get("EXT_frag_depth")?"#extension GL_EXT_frag_depth : enable":"",a.drawBuffers&&d.get("WEBGL_draw_buffers")?"#extension GL_EXT_draw_buffers : require":"",(a.shaderTextureLOD||b.envMap)&&d.get("EXT_shader_texture_lod")?"#extension GL_EXT_shader_texture_lod : enable":""].filter(c).join("\n")}
function b(a){var b=[],c;for(c in a){var d=a[c];!1!==d&&b.push("#define "+c+" "+d)}return b.join("\n")}function c(a){return""!==a}var d=0,e=/^([\w\d_]+)\.([\w\d_]+)$/,f=/^([\w\d_]+)\[(\d+)\]\.([\w\d_]+)$/,g=/^([\w\d_]+)\[0\]$/;return function(h,k,l,m){var p=h.context,n=l.extensions,q=l.defines,s=l.__webglShader.vertexShader,u=l.__webglShader.fragmentShader,t="SHADOWMAP_TYPE_BASIC";m.shadowMapType===THREE.PCFShadowMap?t="SHADOWMAP_TYPE_PCF":m.shadowMapType===THREE.PCFSoftShadowMap&&(t="SHADOWMAP_TYPE_PCF_SOFT");
var w="ENVMAP_TYPE_CUBE",v="ENVMAP_MODE_REFLECTION",C="ENVMAP_BLENDING_MULTIPLY";if(m.envMap){switch(l.envMap.mapping){case THREE.CubeReflectionMapping:case THREE.CubeRefractionMapping:w="ENVMAP_TYPE_CUBE";break;case THREE.EquirectangularReflectionMapping:case THREE.EquirectangularRefractionMapping:w="ENVMAP_TYPE_EQUIREC";break;case THREE.SphericalReflectionMapping:w="ENVMAP_TYPE_SPHERE"}switch(l.envMap.mapping){case THREE.CubeRefractionMapping:case THREE.EquirectangularRefractionMapping:v="ENVMAP_MODE_REFRACTION"}switch(l.combine){case THREE.MultiplyOperation:C=
"ENVMAP_BLENDING_MULTIPLY";break;case THREE.MixOperation:C="ENVMAP_BLENDING_MIX";break;case THREE.AddOperation:C="ENVMAP_BLENDING_ADD"}}var x=0<h.gammaFactor?h.gammaFactor:1,n=a(n,m,h.extensions),B=b(q),z=p.createProgram();l instanceof THREE.RawShaderMaterial?h=q="":(q=["precision "+m.precision+" float;","precision "+m.precision+" int;","#define SHADER_NAME "+l.__webglShader.name,B,m.supportsVertexTextures?"#define VERTEX_TEXTURES":"",h.gammaInput?"#define GAMMA_INPUT":"",h.gammaOutput?"#define GAMMA_OUTPUT":
"","#define GAMMA_FACTOR "+x,"#define NUM_DIR_LIGHTS "+m.numDirLights,"#define NUM_POINT_LIGHTS "+m.numPointLights,"#define NUM_SPOT_LIGHTS "+m.numSpotLights,"#define NUM_HEMI_LIGHTS "+m.numHemiLights,"#define NUM_SHADOWS "+m.numShadows,"#define MAX_BONES "+m.maxBones,m.map?"#define USE_MAP":"",m.envMap?"#define USE_ENVMAP":"",m.envMap?"#define "+v:"",m.lightMap?"#define USE_LIGHTMAP":"",m.aoMap?"#define USE_AOMAP":"",m.emissiveMap?"#define USE_EMISSIVEMAP":"",m.bumpMap?"#define USE_BUMPMAP":"",m.normalMap?
"#define USE_NORMALMAP":"",m.displacementMap&&m.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",m.specularMap?"#define USE_SPECULARMAP":"",m.roughnessMap?"#define USE_ROUGHNESSMAP":"",m.metalnessMap?"#define USE_METALNESSMAP":"",m.alphaMap?"#define USE_ALPHAMAP":"",m.vertexColors?"#define USE_COLOR":"",m.flatShading?"#define FLAT_SHADED":"",m.skinning?"#define USE_SKINNING":"",m.useVertexTexture?"#define BONE_TEXTURE":"",m.morphTargets?"#define USE_MORPHTARGETS":"",m.morphNormals&&!1===m.flatShading?
"#define USE_MORPHNORMALS":"",m.doubleSided?"#define DOUBLE_SIDED":"",m.flipSided?"#define FLIP_SIDED":"",m.shadowMapEnabled?"#define USE_SHADOWMAP":"",m.shadowMapEnabled?"#define "+t:"",m.shadowMapDebug?"#define SHADOWMAP_DEBUG":"",0<m.pointLightShadows?"#define POINT_LIGHT_SHADOWS":"",m.sizeAttenuation?"#define USE_SIZEATTENUATION":"",m.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",m.logarithmicDepthBuffer&&h.extensions.get("EXT_frag_depth")?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;",
"uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_COLOR","\tattribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","\tattribute vec3 morphTarget0;","\tattribute vec3 morphTarget1;","\tattribute vec3 morphTarget2;","\tattribute vec3 morphTarget3;","\t#ifdef USE_MORPHNORMALS","\t\tattribute vec3 morphNormal0;","\t\tattribute vec3 morphNormal1;",
"\t\tattribute vec3 morphNormal2;","\t\tattribute vec3 morphNormal3;","\t#else","\t\tattribute vec3 morphTarget4;","\t\tattribute vec3 morphTarget5;","\t\tattribute vec3 morphTarget6;","\t\tattribute vec3 morphTarget7;","\t#endif","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif","\n"].filter(c).join("\n"),h=[n,"precision "+m.precision+" float;","precision "+m.precision+" int;","#define SHADER_NAME "+l.__webglShader.name,B,"#define NUM_DIR_LIGHTS "+
m.numDirLights,"#define NUM_POINT_LIGHTS "+m.numPointLights,"#define NUM_SPOT_LIGHTS "+m.numSpotLights,"#define NUM_HEMI_LIGHTS "+m.numHemiLights,"#define NUM_SHADOWS "+m.numShadows,m.alphaTest?"#define ALPHATEST "+m.alphaTest:"",h.gammaInput?"#define GAMMA_INPUT":"",h.gammaOutput?"#define GAMMA_OUTPUT":"","#define GAMMA_FACTOR "+x,m.useFog&&m.fog?"#define USE_FOG":"",m.useFog&&m.fogExp?"#define FOG_EXP2":"",m.map?"#define USE_MAP":"",m.envMap?"#define USE_ENVMAP":"",m.envMap?"#define "+w:"",m.envMap?
"#define "+v:"",m.envMap?"#define "+C:"",m.lightMap?"#define USE_LIGHTMAP":"",m.aoMap?"#define USE_AOMAP":"",m.emissiveMap?"#define USE_EMISSIVEMAP":"",m.bumpMap?"#define USE_BUMPMAP":"",m.normalMap?"#define USE_NORMALMAP":"",m.specularMap?"#define USE_SPECULARMAP":"",m.roughnessMap?"#define USE_ROUGHNESSMAP":"",m.metalnessMap?"#define USE_METALNESSMAP":"",m.alphaMap?"#define USE_ALPHAMAP":"",m.vertexColors?"#define USE_COLOR":"",m.flatShading?"#define FLAT_SHADED":"",m.doubleSided?"#define DOUBLE_SIDED":
"",m.flipSided?"#define FLIP_SIDED":"",m.shadowMapEnabled?"#define USE_SHADOWMAP":"",m.shadowMapEnabled?"#define "+t:"",m.shadowMapDebug?"#define SHADOWMAP_DEBUG":"",0<m.pointLightShadows?"#define POINT_LIGHT_SHADOWS":"",m.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",m.logarithmicDepthBuffer&&h.extensions.get("EXT_frag_depth")?"#define USE_LOGDEPTHBUF_EXT":"",m.envMap&&h.extensions.get("EXT_shader_texture_lod")?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;",
"\n"].filter(c).join("\n"));u=h+u;s=THREE.WebGLShader(p,p.VERTEX_SHADER,q+s);u=THREE.WebGLShader(p,p.FRAGMENT_SHADER,u);p.attachShader(z,s);p.attachShader(z,u);void 0!==l.index0AttributeName?p.bindAttribLocation(z,0,l.index0AttributeName):!0===m.morphTargets&&p.bindAttribLocation(z,0,"position");p.linkProgram(z);m=p.getProgramInfoLog(z);t=p.getShaderInfoLog(s);w=p.getShaderInfoLog(u);C=v=!0;if(!1===p.getProgramParameter(z,p.LINK_STATUS))v=!1,console.error("THREE.WebGLProgram: shader error: ",p.getError(),
"gl.VALIDATE_STATUS",p.getProgramParameter(z,p.VALIDATE_STATUS),"gl.getProgramInfoLog",m,t,w);else if(""!==m)console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",m);else if(""===t||""===w)C=!1;C&&(this.diagnostics={runnable:v,material:l,programLog:m,vertexShader:{log:t,prefix:q},fragmentShader:{log:w,prefix:h}});p.deleteShader(s);p.deleteShader(u);var A;this.getUniforms=function(){if(void 0===A){for(var a={},b=p.getProgramParameter(z,p.ACTIVE_UNIFORMS),c=0;c<b;c++){var d=p.getActiveUniform(z,
c).name,h=p.getUniformLocation(z,d),k=e.exec(d);if(k){var d=k[1],k=k[2],l=a[d];l||(l=a[d]={});l[k]=h}else if(k=f.exec(d)){var l=k[1],d=k[2],k=k[3],n=a[l];n||(n=a[l]=[]);(l=n[d])||(l=n[d]={});l[k]=h}else(k=g.exec(d))?(l=k[1],a[l]=h):a[d]=h}A=a}return A};var y;this.getAttributes=function(){if(void 0===y){for(var a={},b=p.getProgramParameter(z,p.ACTIVE_ATTRIBUTES),c=0;c<b;c++){var d=p.getActiveAttrib(z,c).name;a[d]=p.getAttribLocation(z,d)}y=a}return y};this.destroy=function(){p.deleteProgram(z);this.program=
void 0};Object.defineProperties(this,{uniforms:{get:function(){console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms().");return this.getUniforms()}},attributes:{get:function(){console.warn("THREE.WebGLProgram: .attributes is now .getAttributes().");return this.getAttributes()}}});this.id=d++;this.code=k;this.usedTimes=1;this.program=z;this.vertexShader=s;this.fragmentShader=u;return this}}();
THREE.WebGLPrograms=function(a,b){var c=[],d={MeshDepthMaterial:"depth",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshStandardMaterial:"standard",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points"},e="precision supportsVertexTextures map envMap envMapMode lightMap aoMap emissiveMap bumpMap normalMap displacementMap specularMap roughnessMap metalnessMap alphaMap combine vertexColors fog useFog fogExp flatShading sizeAttenuation logarithmicDepthBuffer skinning maxBones useVertexTexture morphTargets morphNormals maxMorphTargets maxMorphNormals numDirLights numPointLights numSpotLights numHemiLights numShadows shadowMapEnabled pointLightShadows shadowMapType shadowMapDebug alphaTest doubleSided flipSided".split(" ");
this.getParameters=function(c,e,h,k){var l=d[c.type],m;b.floatVertexTextures&&k&&k.skeleton&&k.skeleton.useVertexTexture?m=1024:(m=Math.floor((b.maxVertexUniforms-20)/4),void 0!==k&&k instanceof THREE.SkinnedMesh&&(m=Math.min(k.skeleton.bones.length,m),m<k.skeleton.bones.length&&console.warn("WebGLRenderer: too many bones - "+k.skeleton.bones.length+", this GPU supports just "+m+" (try OpenGL instead of ANGLE)")));var p=a.getPrecision();null!==c.precision&&(p=b.getMaxPrecision(c.precision),p!==c.precision&&
console.warn("THREE.WebGLProgram.getParameters:",c.precision,"not supported, using",p,"instead."));return{shaderID:l,precision:p,supportsVertexTextures:b.vertexTextures,map:!!c.map,envMap:!!c.envMap,envMapMode:c.envMap&&c.envMap.mapping,lightMap:!!c.lightMap,aoMap:!!c.aoMap,emissiveMap:!!c.emissiveMap,bumpMap:!!c.bumpMap,normalMap:!!c.normalMap,displacementMap:!!c.displacementMap,roughnessMap:!!c.roughnessMap,metalnessMap:!!c.metalnessMap,specularMap:!!c.specularMap,alphaMap:!!c.alphaMap,combine:c.combine,
vertexColors:c.vertexColors,fog:h,useFog:c.fog,fogExp:h instanceof THREE.FogExp2,flatShading:c.shading===THREE.FlatShading,sizeAttenuation:c.sizeAttenuation,logarithmicDepthBuffer:b.logarithmicDepthBuffer,skinning:c.skinning,maxBones:m,useVertexTexture:b.floatVertexTextures&&k&&k.skeleton&&k.skeleton.useVertexTexture,morphTargets:c.morphTargets,morphNormals:c.morphNormals,maxMorphTargets:a.maxMorphTargets,maxMorphNormals:a.maxMorphNormals,numDirLights:e.directional.length,numPointLights:e.point.length,
numSpotLights:e.spot.length,numHemiLights:e.hemi.length,numShadows:e.shadows.length,pointLightShadows:e.shadowsPointLight,shadowMapEnabled:a.shadowMap.enabled&&k.receiveShadow&&0<e.shadows.length,shadowMapType:a.shadowMap.type,shadowMapDebug:a.shadowMap.debug,alphaTest:c.alphaTest,doubleSided:c.side===THREE.DoubleSide,flipSided:c.side===THREE.BackSide}};this.getProgramCode=function(a,b){var c=[];b.shaderID?c.push(b.shaderID):(c.push(a.fragmentShader),c.push(a.vertexShader));if(void 0!==a.defines)for(var d in a.defines)c.push(d),
c.push(a.defines[d]);for(d=0;d<e.length;d++){var l=e[d];c.push(l);c.push(b[l])}return c.join()};this.acquireProgram=function(b,d,e){for(var k,l=0,m=c.length;l<m;l++){var p=c[l];if(p.code===e){k=p;++k.usedTimes;break}}void 0===k&&(k=new THREE.WebGLProgram(a,e,b,d),c.push(k));return k};this.releaseProgram=function(a){if(0===--a.usedTimes){var b=c.indexOf(a);c[b]=c[c.length-1];c.pop();a.destroy()}};this.programs=c};
THREE.WebGLProperties=function(){var a={};this.get=function(b){b=b.uuid;var c=a[b];void 0===c&&(c={},a[b]=c);return c};this.delete=function(b){delete a[b.uuid]};this.clear=function(){a={}}};
THREE.WebGLShader=function(){function a(a){a=a.split("\n");for(var c=0;c<a.length;c++)a[c]=c+1+": "+a[c];return a.join("\n")}return function(b,c,d){var e=b.createShader(c);b.shaderSource(e,d);b.compileShader(e);!1===b.getShaderParameter(e,b.COMPILE_STATUS)&&console.error("THREE.WebGLShader: Shader couldn't compile.");""!==b.getShaderInfoLog(e)&&console.warn("THREE.WebGLShader: gl.getShaderInfoLog()",c===b.VERTEX_SHADER?"vertex":"fragment",b.getShaderInfoLog(e),a(d));return e}}();
THREE.WebGLShadowMap=function(a,b,c){function d(a,b,c,d){var e=a.geometry,f=null,f=n,g=a.customDepthMaterial;c&&(f=q,g=a.customDistanceMaterial);g?f=g:(a=a instanceof THREE.SkinnedMesh&&b.skinning,g=0,void 0!==e.morphTargets&&0<e.morphTargets.length&&b.morphTargets&&(g|=1),a&&(g|=2),f=f[g]);f.visible=b.visible;f.wireframe=b.wireframe;f.wireframeLinewidth=b.wireframeLinewidth;c&&void 0!==f.uniforms.lightPos&&f.uniforms.lightPos.value.copy(d);return f}function e(a,b,c){if(!1!==a.visible){a.layers.test(b.layers)&&
(a instanceof THREE.Mesh||a instanceof THREE.Line||a instanceof THREE.Points)&&a.castShadow&&(!1===a.frustumCulled||!0===h.intersectsObject(a))&&!0===a.material.visible&&(a.modelViewMatrix.multiplyMatrices(c.matrixWorldInverse,a.matrixWorld),p.push(a));a=a.children;for(var d=0,f=a.length;d<f;d++)e(a[d],b,c)}}for(var f=a.context,g=a.state,h=new THREE.Frustum,k=new THREE.Matrix4,l=new THREE.Vector3,m=new THREE.Vector3,p=[],n=Array(4),q=Array(4),s=[new THREE.Vector3(1,0,0),new THREE.Vector3(-1,0,0),
new THREE.Vector3(0,0,1),new THREE.Vector3(0,0,-1),new THREE.Vector3(0,1,0),new THREE.Vector3(0,-1,0)],u=[new THREE.Vector3(0,1,0),new THREE.Vector3(0,1,0),new THREE.Vector3(0,1,0),new THREE.Vector3(0,1,0),new THREE.Vector3(0,0,1),new THREE.Vector3(0,0,-1)],t=[new THREE.Vector4,new THREE.Vector4,new THREE.Vector4,new THREE.Vector4,new THREE.Vector4,new THREE.Vector4],w=THREE.ShaderLib.depthRGBA,v=THREE.UniformsUtils.clone(w.uniforms),C=THREE.ShaderLib.distanceRGBA,x=THREE.UniformsUtils.clone(C.uniforms),
B=0;4!==B;++B){var z=0!==(B&1),A=0!==(B&2),y=new THREE.ShaderMaterial({uniforms:v,vertexShader:w.vertexShader,fragmentShader:w.fragmentShader,morphTargets:z,skinning:A});y._shadowPass=!0;n[B]=y;z=new THREE.ShaderMaterial({uniforms:x,vertexShader:C.vertexShader,fragmentShader:C.fragmentShader,morphTargets:z,skinning:A});z._shadowPass=!0;q[B]=z}var J=this;this.enabled=!1;this.autoUpdate=!0;this.needsUpdate=!1;this.type=THREE.PCFShadowMap;this.cullFace=THREE.CullFaceFront;this.render=function(n,q){var w,
v;if(!1!==J.enabled&&(!1!==J.autoUpdate||!1!==J.needsUpdate)){g.clearColor(1,1,1,1);g.disable(f.BLEND);g.enable(f.CULL_FACE);f.frontFace(f.CCW);f.cullFace(J.cullFace===THREE.CullFaceFront?f.FRONT:f.BACK);g.setDepthTest(!0);g.setScissorTest(!1);for(var x=b.shadows,C=0,z=x.length;C<z;C++){var y=x[C],A=y.shadow,B=A.camera,O=A.mapSize;if(y instanceof THREE.PointLight){w=6;v=!0;var K=O.x/4,D=O.y/2;t[0].set(2*K,D,K,D);t[1].set(0,D,K,D);t[2].set(3*K,D,K,D);t[3].set(K,D,K,D);t[4].set(3*K,0,K,D);t[5].set(K,
0,K,D)}else w=1,v=!1;null===A.map&&(K=THREE.LinearFilter,J.type===THREE.PCFSoftShadowMap&&(K=THREE.NearestFilter),A.map=new THREE.WebGLRenderTarget(O.x,O.y,{minFilter:K,magFilter:K,format:THREE.RGBAFormat}),A.matrix=new THREE.Matrix4,y instanceof THREE.SpotLight&&(B.aspect=O.x/O.y),B.updateProjectionMatrix());O=A.map;A=A.matrix;m.setFromMatrixPosition(y.matrixWorld);B.position.copy(m);a.setRenderTarget(O);a.clear();for(O=0;O<w;O++)for(v?(l.copy(B.position),l.add(s[O]),B.up.copy(u[O]),B.lookAt(l),
g.viewport(t[O])):(l.setFromMatrixPosition(y.target.matrixWorld),B.lookAt(l)),B.updateMatrixWorld(),B.matrixWorldInverse.getInverse(B.matrixWorld),A.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),A.multiply(B.projectionMatrix),A.multiply(B.matrixWorldInverse),k.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),h.setFromMatrix(k),p.length=0,e(n,q,B),K=0,D=p.length;K<D;K++){var Y=p[K],W=c.update(Y),X=Y.material;if(X instanceof THREE.MeshFaceMaterial)for(var ba=W.groups,X=X.materials,ca=0,qa=ba.length;ca<
qa;ca++){var fa=ba[ca],$=X[fa.materialIndex];!0===$.visible&&($=d(Y,$,v,m),a.renderBufferDirect(B,null,W,$,Y,fa))}else $=d(Y,X,v,m),a.renderBufferDirect(B,null,W,$,Y,null)}a.resetGLState()}w=a.getClearColor();v=a.getClearAlpha();a.setClearColor(w,v);g.enable(f.BLEND);J.cullFace===THREE.CullFaceFront&&f.cullFace(f.BACK);a.resetGLState();J.needsUpdate=!1}}};
THREE.WebGLState=function(a,b,c){var d=this,e=new THREE.Vector4,f=new Uint8Array(16),g=new Uint8Array(16),h=new Uint8Array(16),k={},l=null,m=null,p=null,n=null,q=null,s=null,u=null,t=null,w=null,v=null,C=null,x=null,B=null,z=null,A=null,y=null,J=null,E=null,F=null,I=null,Q=null,N=null,L=null,G=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),M=void 0,R={},P=new THREE.Vector4,O=new THREE.Vector4,K=new THREE.Vector4;this.init=function(){this.clearColor(0,0,0,1);a.clearDepth(1);a.clearStencil(0);this.enable(a.DEPTH_TEST);
a.depthFunc(a.LEQUAL);a.frontFace(a.CCW);a.cullFace(a.BACK);this.enable(a.CULL_FACE);this.enable(a.BLEND);a.blendEquation(a.FUNC_ADD);a.blendFunc(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA)};this.initAttributes=function(){for(var a=0,b=f.length;a<b;a++)f[a]=0};this.enableAttribute=function(c){f[c]=1;0===g[c]&&(a.enableVertexAttribArray(c),g[c]=1);0!==h[c]&&(b.get("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(c,0),h[c]=0)};this.enableAttributeAndDivisor=function(b,c,d){f[b]=1;0===g[b]&&(a.enableVertexAttribArray(b),
g[b]=1);h[b]!==c&&(d.vertexAttribDivisorANGLE(b,c),h[b]=c)};this.disableUnusedAttributes=function(){for(var b=0,c=g.length;b<c;b++)g[b]!==f[b]&&(a.disableVertexAttribArray(b),g[b]=0)};this.enable=function(b){!0!==k[b]&&(a.enable(b),k[b]=!0)};this.disable=function(b){!1!==k[b]&&(a.disable(b),k[b]=!1)};this.getCompressedTextureFormats=function(){if(null===l&&(l=[],b.get("WEBGL_compressed_texture_pvrtc")||b.get("WEBGL_compressed_texture_s3tc")||b.get("WEBGL_compressed_texture_etc1")))for(var c=a.getParameter(a.COMPRESSED_TEXTURE_FORMATS),
d=0;d<c.length;d++)l.push(c[d]);return l};this.setBlending=function(b,d,e,f,g,h,k){b===THREE.NoBlending?this.disable(a.BLEND):this.enable(a.BLEND);b!==m&&(b===THREE.AdditiveBlending?(a.blendEquation(a.FUNC_ADD),a.blendFunc(a.SRC_ALPHA,a.ONE)):b===THREE.SubtractiveBlending?(a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ZERO,a.ONE_MINUS_SRC_COLOR)):b===THREE.MultiplyBlending?(a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ZERO,a.SRC_COLOR)):(a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD),a.blendFuncSeparate(a.SRC_ALPHA,
a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA)),m=b);if(b===THREE.CustomBlending){g=g||d;h=h||e;k=k||f;if(d!==p||g!==s)a.blendEquationSeparate(c(d),c(g)),p=d,s=g;if(e!==n||f!==q||h!==u||k!==t)a.blendFuncSeparate(c(e),c(f),c(h),c(k)),n=e,q=f,u=h,t=k}else t=u=s=q=n=p=null};this.setDepthFunc=function(b){if(w!==b){if(b)switch(b){case THREE.NeverDepth:a.depthFunc(a.NEVER);break;case THREE.AlwaysDepth:a.depthFunc(a.ALWAYS);break;case THREE.LessDepth:a.depthFunc(a.LESS);break;case THREE.LessEqualDepth:a.depthFunc(a.LEQUAL);
break;case THREE.EqualDepth:a.depthFunc(a.EQUAL);break;case THREE.GreaterEqualDepth:a.depthFunc(a.GEQUAL);break;case THREE.GreaterDepth:a.depthFunc(a.GREATER);break;case THREE.NotEqualDepth:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}else a.depthFunc(a.LEQUAL);w=b}};this.setDepthTest=function(b){b?this.enable(a.DEPTH_TEST):this.disable(a.DEPTH_TEST)};this.setDepthWrite=function(b){v!==b&&(a.depthMask(b),v=b)};this.setColorWrite=function(b){C!==b&&(a.colorMask(b,b,b,b),C=b)};this.setStencilFunc=
function(b,c,d){if(B!==b||z!==c||A!==d)a.stencilFunc(b,c,d),B=b,z=c,A=d};this.setStencilOp=function(b,c,d){if(y!==b||J!==c||E!==d)a.stencilOp(b,c,d),y=b,J=c,E=d};this.setStencilTest=function(b){b?this.enable(a.STENCIL_TEST):this.disable(a.STENCIL_TEST)};this.setStencilWrite=function(b){x!==b&&(a.stencilMask(b),x=b)};this.setFlipSided=function(b){F!==b&&(b?a.frontFace(a.CW):a.frontFace(a.CCW),F=b)};this.setLineWidth=function(b){b!==I&&(a.lineWidth(b),I=b)};this.setPolygonOffset=function(b,c,d){b?this.enable(a.POLYGON_OFFSET_FILL):
this.disable(a.POLYGON_OFFSET_FILL);!b||Q===c&&N===d||(a.polygonOffset(c,d),Q=c,N=d)};this.getScissorTest=function(){return L};this.setScissorTest=function(b){(L=b)?this.enable(a.SCISSOR_TEST):this.disable(a.SCISSOR_TEST)};this.activeTexture=function(b){void 0===b&&(b=a.TEXTURE0+G-1);M!==b&&(a.activeTexture(b),M=b)};this.bindTexture=function(b,c){void 0===M&&d.activeTexture();var e=R[M];void 0===e&&(e={type:void 0,texture:void 0},R[M]=e);if(e.type!==b||e.texture!==c)a.bindTexture(b,c),e.type=b,e.texture=
c};this.compressedTexImage2D=function(){try{a.compressedTexImage2D.apply(a,arguments)}catch(b){console.error(b)}};this.texImage2D=function(){try{a.texImage2D.apply(a,arguments)}catch(b){console.error(b)}};this.clearColor=function(b,c,d,f){e.set(b,c,d,f);!1===P.equals(e)&&(a.clearColor(b,c,d,f),P.copy(e))};this.scissor=function(b){!1===O.equals(b)&&(a.scissor(b.x,b.y,b.z,b.w),O.copy(b))};this.viewport=function(b){!1===K.equals(b)&&(a.viewport(b.x,b.y,b.z,b.w),K.copy(b))};this.reset=function(){for(var b=
0;b<g.length;b++)1===g[b]&&(a.disableVertexAttribArray(b),g[b]=0);k={};F=C=v=m=l=null}};
THREE.LensFlarePlugin=function(a,b){var c,d,e,f,g,h,k,l,m,p,n=a.context,q=a.state,s,u,t,w,v,C;this.render=function(x,B,z){if(0!==b.length){x=new THREE.Vector3;var A=z.w/z.z,y=.5*z.z,J=.5*z.w,E=16/z.w,F=new THREE.Vector2(E*A,E),I=new THREE.Vector3(1,1,0),Q=new THREE.Vector2(1,1);if(void 0===t){var E=new Float32Array([-1,-1,0,0,1,-1,1,0,1,1,1,1,-1,1,0,1]),N=new Uint16Array([0,1,2,0,2,3]);s=n.createBuffer();u=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,s);n.bufferData(n.ARRAY_BUFFER,E,n.STATIC_DRAW);
n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,u);n.bufferData(n.ELEMENT_ARRAY_BUFFER,N,n.STATIC_DRAW);v=n.createTexture();C=n.createTexture();q.bindTexture(n.TEXTURE_2D,v);n.texImage2D(n.TEXTURE_2D,0,n.RGB,16,16,0,n.RGB,n.UNSIGNED_BYTE,null);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST);q.bindTexture(n.TEXTURE_2D,
C);n.texImage2D(n.TEXTURE_2D,0,n.RGBA,16,16,0,n.RGBA,n.UNSIGNED_BYTE,null);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST);var E=(w=0<n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS))?{vertexShader:"uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nuniform sampler2D occlusionMap;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif ( renderType == 2 ) {\nvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );\nvVisibility =        visibility.r / 9.0;\nvVisibility *= 1.0 - visibility.g / 9.0;\nvVisibility *=       visibility.b / 9.0;\nvVisibility *= 1.0 - visibility.a / 9.0;\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
fragmentShader:"uniform lowp int renderType;\nuniform sampler2D map;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nif ( renderType == 0 ) {\ngl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );\n} else if ( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * vVisibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"}:{vertexShader:"uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif ( renderType == 2 ) {\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
fragmentShader:"precision mediump float;\nuniform lowp int renderType;\nuniform sampler2D map;\nuniform sampler2D occlusionMap;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvoid main() {\nif ( renderType == 0 ) {\ngl_FragColor = vec4( texture2D( map, vUV ).rgb, 0.0 );\n} else if ( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nfloat visibility = texture2D( occlusionMap, vec2( 0.5, 0.1 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) ).a;\nvisibility = ( 1.0 - visibility / 4.0 );\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * visibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"},
N=n.createProgram(),L=n.createShader(n.FRAGMENT_SHADER),G=n.createShader(n.VERTEX_SHADER),M="precision "+a.getPrecision()+" float;\n";n.shaderSource(L,M+E.fragmentShader);n.shaderSource(G,M+E.vertexShader);n.compileShader(L);n.compileShader(G);n.attachShader(N,L);n.attachShader(N,G);n.linkProgram(N);t=N;m=n.getAttribLocation(t,"position");p=n.getAttribLocation(t,"uv");c=n.getUniformLocation(t,"renderType");d=n.getUniformLocation(t,"map");e=n.getUniformLocation(t,"occlusionMap");f=n.getUniformLocation(t,
"opacity");g=n.getUniformLocation(t,"color");h=n.getUniformLocation(t,"scale");k=n.getUniformLocation(t,"rotation");l=n.getUniformLocation(t,"screenPosition")}n.useProgram(t);q.initAttributes();q.enableAttribute(m);q.enableAttribute(p);q.disableUnusedAttributes();n.uniform1i(e,0);n.uniform1i(d,1);n.bindBuffer(n.ARRAY_BUFFER,s);n.vertexAttribPointer(m,2,n.FLOAT,!1,16,0);n.vertexAttribPointer(p,2,n.FLOAT,!1,16,8);n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,u);q.disable(n.CULL_FACE);q.setDepthWrite(!1);N=0;
for(L=b.length;N<L;N++)if(E=16/z.w,F.set(E*A,E),G=b[N],x.set(G.matrixWorld.elements[12],G.matrixWorld.elements[13],G.matrixWorld.elements[14]),x.applyMatrix4(B.matrixWorldInverse),x.applyProjection(B.projectionMatrix),I.copy(x),Q.x=I.x*y+y,Q.y=I.y*J+J,w||0<Q.x&&Q.x<z.z&&0<Q.y&&Q.y<z.w){q.activeTexture(n.TEXTURE0);q.bindTexture(n.TEXTURE_2D,null);q.activeTexture(n.TEXTURE1);q.bindTexture(n.TEXTURE_2D,v);n.copyTexImage2D(n.TEXTURE_2D,0,n.RGB,z.x+Q.x-8,z.y+Q.y-8,16,16,0);n.uniform1i(c,0);n.uniform2f(h,
F.x,F.y);n.uniform3f(l,I.x,I.y,I.z);q.disable(n.BLEND);q.enable(n.DEPTH_TEST);n.drawElements(n.TRIANGLES,6,n.UNSIGNED_SHORT,0);q.activeTexture(n.TEXTURE0);q.bindTexture(n.TEXTURE_2D,C);n.copyTexImage2D(n.TEXTURE_2D,0,n.RGBA,z.x+Q.x-8,z.y+Q.y-8,16,16,0);n.uniform1i(c,1);q.disable(n.DEPTH_TEST);q.activeTexture(n.TEXTURE1);q.bindTexture(n.TEXTURE_2D,v);n.drawElements(n.TRIANGLES,6,n.UNSIGNED_SHORT,0);G.positionScreen.copy(I);G.customUpdateCallback?G.customUpdateCallback(G):G.updateLensFlares();n.uniform1i(c,
2);q.enable(n.BLEND);for(var M=0,R=G.lensFlares.length;M<R;M++){var P=G.lensFlares[M];.001<P.opacity&&.001<P.scale&&(I.x=P.x,I.y=P.y,I.z=P.z,E=P.size*P.scale/z.w,F.x=E*A,F.y=E,n.uniform3f(l,I.x,I.y,I.z),n.uniform2f(h,F.x,F.y),n.uniform1f(k,P.rotation),n.uniform1f(f,P.opacity),n.uniform3f(g,P.color.r,P.color.g,P.color.b),q.setBlending(P.blending,P.blendEquation,P.blendSrc,P.blendDst),a.setTexture(P.texture,1),n.drawElements(n.TRIANGLES,6,n.UNSIGNED_SHORT,0))}}q.enable(n.CULL_FACE);q.enable(n.DEPTH_TEST);
q.setDepthWrite(!0);a.resetGLState()}}};
THREE.SpritePlugin=function(a,b){var c,d,e,f,g,h,k,l,m,p,n,q,s,u,t,w,v;function C(a,b){return a.z!==b.z?b.z-a.z:b.id-a.id}var x=a.context,B=a.state,z,A,y,J,E=new THREE.Vector3,F=new THREE.Quaternion,I=new THREE.Vector3;this.render=function(Q,N){if(0!==b.length){if(void 0===y){var L=new Float32Array([-.5,-.5,0,0,.5,-.5,1,0,.5,.5,1,1,-.5,.5,0,1]),G=new Uint16Array([0,1,2,0,2,3]);z=x.createBuffer();A=x.createBuffer();x.bindBuffer(x.ARRAY_BUFFER,z);x.bufferData(x.ARRAY_BUFFER,L,x.STATIC_DRAW);x.bindBuffer(x.ELEMENT_ARRAY_BUFFER,
A);x.bufferData(x.ELEMENT_ARRAY_BUFFER,G,x.STATIC_DRAW);var L=x.createProgram(),G=x.createShader(x.VERTEX_SHADER),M=x.createShader(x.FRAGMENT_SHADER);x.shaderSource(G,["precision "+a.getPrecision()+" float;","uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float rotation;\nuniform vec2 scale;\nuniform vec2 uvOffset;\nuniform vec2 uvScale;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uvOffset + uv * uvScale;\nvec2 alignedPosition = position * scale;\nvec2 rotatedPosition;\nrotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\nrotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\nvec4 finalPosition;\nfinalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\nfinalPosition.xy += rotatedPosition;\nfinalPosition = projectionMatrix * finalPosition;\ngl_Position = finalPosition;\n}"].join("\n"));
x.shaderSource(M,["precision "+a.getPrecision()+" float;","uniform vec3 color;\nuniform sampler2D map;\nuniform float opacity;\nuniform int fogType;\nuniform vec3 fogColor;\nuniform float fogDensity;\nuniform float fogNear;\nuniform float fogFar;\nuniform float alphaTest;\nvarying vec2 vUV;\nvoid main() {\nvec4 texture = texture2D( map, vUV );\nif ( texture.a < alphaTest ) discard;\ngl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\nif ( fogType > 0 ) {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat fogFactor = 0.0;\nif ( fogType == 1 ) {\nfogFactor = smoothstep( fogNear, fogFar, depth );\n} else {\nconst float LOG2 = 1.442695;\nfogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n}\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}\n}"].join("\n"));
x.compileShader(G);x.compileShader(M);x.attachShader(L,G);x.attachShader(L,M);x.linkProgram(L);y=L;w=x.getAttribLocation(y,"position");v=x.getAttribLocation(y,"uv");c=x.getUniformLocation(y,"uvOffset");d=x.getUniformLocation(y,"uvScale");e=x.getUniformLocation(y,"rotation");f=x.getUniformLocation(y,"scale");g=x.getUniformLocation(y,"color");h=x.getUniformLocation(y,"map");k=x.getUniformLocation(y,"opacity");l=x.getUniformLocation(y,"modelViewMatrix");m=x.getUniformLocation(y,"projectionMatrix");p=
x.getUniformLocation(y,"fogType");n=x.getUniformLocation(y,"fogDensity");q=x.getUniformLocation(y,"fogNear");s=x.getUniformLocation(y,"fogFar");u=x.getUniformLocation(y,"fogColor");t=x.getUniformLocation(y,"alphaTest");L=document.createElement("canvas");L.width=8;L.height=8;G=L.getContext("2d");G.fillStyle="white";G.fillRect(0,0,8,8);J=new THREE.Texture(L);J.needsUpdate=!0}x.useProgram(y);B.initAttributes();B.enableAttribute(w);B.enableAttribute(v);B.disableUnusedAttributes();B.disable(x.CULL_FACE);
B.enable(x.BLEND);x.bindBuffer(x.ARRAY_BUFFER,z);x.vertexAttribPointer(w,2,x.FLOAT,!1,16,0);x.vertexAttribPointer(v,2,x.FLOAT,!1,16,8);x.bindBuffer(x.ELEMENT_ARRAY_BUFFER,A);x.uniformMatrix4fv(m,!1,N.projectionMatrix.elements);B.activeTexture(x.TEXTURE0);x.uniform1i(h,0);G=L=0;(M=Q.fog)?(x.uniform3f(u,M.color.r,M.color.g,M.color.b),M instanceof THREE.Fog?(x.uniform1f(q,M.near),x.uniform1f(s,M.far),x.uniform1i(p,1),G=L=1):M instanceof THREE.FogExp2&&(x.uniform1f(n,M.density),x.uniform1i(p,2),G=L=2)):
(x.uniform1i(p,0),G=L=0);for(var M=0,R=b.length;M<R;M++){var P=b[M];P.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,P.matrixWorld);P.z=-P.modelViewMatrix.elements[14]}b.sort(C);for(var O=[],M=0,R=b.length;M<R;M++){var P=b[M],K=P.material;x.uniform1f(t,K.alphaTest);x.uniformMatrix4fv(l,!1,P.modelViewMatrix.elements);P.matrixWorld.decompose(E,F,I);O[0]=I.x;O[1]=I.y;P=0;Q.fog&&K.fog&&(P=G);L!==P&&(x.uniform1i(p,P),L=P);null!==K.map?(x.uniform2f(c,K.map.offset.x,K.map.offset.y),x.uniform2f(d,
K.map.repeat.x,K.map.repeat.y)):(x.uniform2f(c,0,0),x.uniform2f(d,1,1));x.uniform1f(k,K.opacity);x.uniform3f(g,K.color.r,K.color.g,K.color.b);x.uniform1f(e,K.rotation);x.uniform2fv(f,O);B.setBlending(K.blending,K.blendEquation,K.blendSrc,K.blendDst);B.setDepthTest(K.depthTest);B.setDepthWrite(K.depthWrite);K.map&&K.map.image&&K.map.image.width?a.setTexture(K.map,0):a.setTexture(J,0);x.drawElements(x.TRIANGLES,6,x.UNSIGNED_SHORT,0)}B.enable(x.CULL_FACE);a.resetGLState()}}};
Object.defineProperties(THREE.Box2.prototype,{empty:{value:function(){console.warn("THREE.Box2: .empty() has been renamed to .isEmpty().");return this.isEmpty()}},isIntersectionBox:{value:function(a){console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox().");return this.intersectsBox(a)}}});
Object.defineProperties(THREE.Box3.prototype,{empty:{value:function(){console.warn("THREE.Box3: .empty() has been renamed to .isEmpty().");return this.isEmpty()}},isIntersectionBox:{value:function(a){console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox().");return this.intersectsBox(a)}},isIntersectionSphere:{value:function(a){console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere().");return this.intersectsSphere(a)}}});
Object.defineProperties(THREE.Matrix3.prototype,{multiplyVector3:{value:function(a){console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.");return a.applyMatrix3(this)}},multiplyVector3Array:{value:function(a){console.warn("THREE.Matrix3: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead.");return this.applyToVector3Array(a)}}});
Object.defineProperties(THREE.Matrix4.prototype,{extractPosition:{value:function(a){console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition().");return this.copyPosition(a)}},setRotationFromQuaternion:{value:function(a){console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion().");return this.makeRotationFromQuaternion(a)}},multiplyVector3:{value:function(a){console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead.");
return a.applyProjection(this)}},multiplyVector4:{value:function(a){console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this)}},multiplyVector3Array:{value:function(a){console.warn("THREE.Matrix4: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead.");return this.applyToVector3Array(a)}},rotateAxis:{value:function(a){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.");
a.transformDirection(this)}},crossVector:{value:function(a){console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this)}},translate:{value:function(a){console.error("THREE.Matrix4: .translate() has been removed.")}},rotateX:{value:function(a){console.error("THREE.Matrix4: .rotateX() has been removed.")}},rotateY:{value:function(a){console.error("THREE.Matrix4: .rotateY() has been removed.")}},rotateZ:{value:function(a){console.error("THREE.Matrix4: .rotateZ() has been removed.")}},
rotateByAxis:{value:function(a,b){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")}}});Object.defineProperties(THREE.Plane.prototype,{isIntersectionLine:{value:function(a){console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine().");return this.intersectsLine(a)}}});
Object.defineProperties(THREE.Quaternion.prototype,{multiplyVector3:{value:function(a){console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.");return a.applyQuaternion(this)}}});
Object.defineProperties(THREE.Ray.prototype,{isIntersectionBox:{value:function(a){console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox().");return this.intersectsBox(a)}},isIntersectionPlane:{value:function(a){console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane().");return this.intersectsPlane(a)}},isIntersectionSphere:{value:function(a){console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere().");return this.intersectsSphere(a)}}});
Object.defineProperties(THREE.Vector3.prototype,{setEulerFromRotationMatrix:{value:function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")}},setEulerFromQuaternion:{value:function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")}},getPositionFromMatrix:{value:function(a){console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition().");
return this.setFromMatrixPosition(a)}},getScaleFromMatrix:{value:function(a){console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale().");return this.setFromMatrixScale(a)}},getColumnFromMatrix:{value:function(a,b){console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn().");return this.setFromMatrixColumn(a,b)}}});
Object.defineProperties(THREE.Object3D.prototype,{eulerOrder:{get:function(){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order.");return this.rotation.order},set:function(a){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order.");this.rotation.order=a}},getChildByName:{value:function(a){console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName().");return this.getObjectByName(a)}},renderDepth:{set:function(a){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")}},
translate:{value:function(a,b){console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead.");return this.translateOnAxis(b,a)}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(a){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});
Object.defineProperties(THREE,{PointCloud:{value:function(a,b){console.warn("THREE.PointCloud has been renamed to THREE.Points.");return new THREE.Points(a,b)}},ParticleSystem:{value:function(a,b){console.warn("THREE.ParticleSystem has been renamed to THREE.Points.");return new THREE.Points(a,b)}}});
Object.defineProperties(THREE.Light.prototype,{onlyShadow:{set:function(a){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(a){this.shadow.camera.fov=a}},shadowCameraLeft:{set:function(a){this.shadow.camera.left=a}},shadowCameraRight:{set:function(a){this.shadow.camera.right=a}},shadowCameraTop:{set:function(a){this.shadow.camera.top=a}},shadowCameraBottom:{set:function(a){this.shadow.camera.bottom=a}},shadowCameraNear:{set:function(a){this.shadow.camera.near=
a}},shadowCameraFar:{set:function(a){this.shadow.camera.far=a}},shadowCameraVisible:{set:function(a){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(a){this.shadow.bias=a}},shadowDarkness:{set:function(a){this.shadow.darkness=a}},shadowMapWidth:{set:function(a){this.shadow.mapSize.width=a}},shadowMapHeight:{set:function(a){this.shadow.mapSize.height=a}}});
Object.defineProperties(THREE.BufferAttribute.prototype,{length:{get:function(){console.warn("THREE.BufferAttribute: .length has been deprecated. Please use .count.");return this.array.length}}});
Object.defineProperties(THREE.BufferGeometry.prototype,{drawcalls:{get:function(){console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups.");return this.groups}},offsets:{get:function(){console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups.");return this.groups}},addIndex:{value:function(a){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex().");this.setIndex(a)}},addDrawCall:{value:function(a,b,c){void 0!==c&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset.");
console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup().");this.addGroup(a,b)}},clearDrawCalls:{value:function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups().");this.clearGroups()}},computeTangents:{value:function(){console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")}},computeOffsets:{value:function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")}}});
Object.defineProperties(THREE.Material.prototype,{wrapAround:{get:function(){console.warn("THREE."+this.type+": .wrapAround has been removed.")},set:function(a){console.warn("THREE."+this.type+": .wrapAround has been removed.")}},wrapRGB:{get:function(){console.warn("THREE."+this.type+": .wrapRGB has been removed.");return new THREE.Color}}});
Object.defineProperties(THREE,{PointCloudMaterial:{value:function(a){console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial.");return new THREE.PointsMaterial(a)}},ParticleBasicMaterial:{value:function(a){console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial.");return new THREE.PointsMaterial(a)}},ParticleSystemMaterial:{value:function(a){console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial.");return new THREE.PointsMaterial(a)}}});
Object.defineProperties(THREE.MeshPhongMaterial.prototype,{metal:{get:function(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead.");return!1},set:function(a){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")}}});
Object.defineProperties(THREE.ShaderMaterial.prototype,{derivatives:{get:function(){console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives.");return this.extensions.derivatives},set:function(a){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives.");this.extensions.derivatives=a}}});
Object.defineProperties(THREE.WebGLRenderer.prototype,{supportsFloatTextures:{value:function(){console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' ).");return this.extensions.get("OES_texture_float")}},supportsHalfFloatTextures:{value:function(){console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' ).");return this.extensions.get("OES_texture_half_float")}},supportsStandardDerivatives:{value:function(){console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' ).");
return this.extensions.get("OES_standard_derivatives")}},supportsCompressedTextureS3TC:{value:function(){console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' ).");return this.extensions.get("WEBGL_compressed_texture_s3tc")}},supportsCompressedTexturePVRTC:{value:function(){console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' ).");return this.extensions.get("WEBGL_compressed_texture_pvrtc")}},
supportsBlendMinMax:{value:function(){console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' ).");return this.extensions.get("EXT_blend_minmax")}},supportsVertexTextures:{value:function(){return this.capabilities.vertexTextures}},supportsInstancedArrays:{value:function(){console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' ).");return this.extensions.get("ANGLE_instanced_arrays")}},enableScissorTest:{value:function(a){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest().");
this.setScissorTest(a)}},initMaterial:{value:function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")}},addPrePlugin:{value:function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")}},addPostPlugin:{value:function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")}},updateShadowMap:{value:function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")}},shadowMapEnabled:{get:function(){return this.shadowMap.enabled},
set:function(a){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled.");this.shadowMap.enabled=a}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(a){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type.");this.shadowMap.type=a}},shadowMapCullFace:{get:function(){return this.shadowMap.cullFace},set:function(a){console.warn("THREE.WebGLRenderer: .shadowMapCullFace is now .shadowMap.cullFace.");this.shadowMap.cullFace=a}},shadowMapDebug:{get:function(){return this.shadowMap.debug},
set:function(a){console.warn("THREE.WebGLRenderer: .shadowMapDebug is now .shadowMap.debug.");this.shadowMap.debug=a}}});
Object.defineProperties(THREE.WebGLRenderTarget.prototype,{wrapS:{get:function(){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.");return this.texture.wrapS},set:function(a){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.");this.texture.wrapS=a}},wrapT:{get:function(){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.");return this.texture.wrapT},set:function(a){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.");this.texture.wrapT=
a}},magFilter:{get:function(){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.");return this.texture.magFilter},set:function(a){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.");this.texture.magFilter=a}},minFilter:{get:function(){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.");return this.texture.minFilter},set:function(a){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.");this.texture.minFilter=
a}},anisotropy:{get:function(){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.");return this.texture.anisotropy},set:function(a){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.");this.texture.anisotropy=a}},offset:{get:function(){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset.");return this.texture.offset},set:function(a){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset.");this.texture.offset=
a}},repeat:{get:function(){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat.");return this.texture.repeat},set:function(a){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat.");this.texture.repeat=a}},format:{get:function(){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format.");return this.texture.format},set:function(a){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format.");this.texture.format=a}},type:{get:function(){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type.");
return this.texture.type},set:function(a){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type.");this.texture.type=a}},generateMipmaps:{get:function(){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.");return this.texture.generateMipmaps},set:function(a){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.");this.texture.generateMipmaps=a}}});
THREE.GeometryUtils={merge:function(a,b,c){console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");var d;b instanceof THREE.Mesh&&(b.matrixAutoUpdate&&b.updateMatrix(),d=b.matrix,b=b.geometry);a.merge(b,d,c)},center:function(a){console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead.");return a.center()}};
THREE.ImageUtils={crossOrigin:void 0,loadTexture:function(a,b,c,d){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");var e=new THREE.TextureLoader;e.setCrossOrigin(this.crossOrigin);a=e.load(a,c,void 0,d);b&&(a.mapping=b);return a},loadTextureCube:function(a,b,c,d){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");var e=new THREE.CubeTextureLoader;e.setCrossOrigin(this.crossOrigin);a=e.load(a,
c,void 0,d);b&&(a.mapping=b);return a},loadCompressedTexture:function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")},loadCompressedTextureCube:function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")}};
THREE.Projector=function(){console.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js.");this.projectVector=function(a,b){console.warn("THREE.Projector: .projectVector() is now vector.project().");a.project(b)};this.unprojectVector=function(a,b){console.warn("THREE.Projector: .unprojectVector() is now vector.unproject().");a.unproject(b)};this.pickingRay=function(a,b){console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")}};
THREE.CanvasRenderer=function(){console.error("THREE.CanvasRenderer has been moved to /examples/js/renderers/CanvasRenderer.js");this.domElement=document.createElement("canvas");this.clear=function(){};this.render=function(){};this.setClearColor=function(){};this.setSize=function(){}};THREE.MeshFaceMaterial=THREE.MultiMaterial;
THREE.CurveUtils={tangentQuadraticBezier:function(a,b,c,d){return 2*(1-a)*(c-b)+2*a*(d-c)},tangentCubicBezier:function(a,b,c,d,e){return-3*b*(1-a)*(1-a)+3*c*(1-a)*(1-a)-6*a*c*(1-a)+6*a*d*(1-a)-3*a*a*d+3*a*a*e},tangentSpline:function(a,b,c,d,e){return 6*a*a-6*a+(3*a*a-4*a+1)+(-6*a*a+6*a)+(3*a*a-2*a)},interpolate:function(a,b,c,d,e){a=.5*(c-a);d=.5*(d-b);var f=e*e;return(2*b-2*c+a+d)*e*f+(-3*b+3*c-2*a-d)*f+a*e+b}};
THREE.SceneUtils={createMultiMaterialObject:function(a,b){for(var c=new THREE.Group,d=0,e=b.length;d<e;d++)c.add(new THREE.Mesh(a,b[d]));return c},detach:function(a,b,c){a.applyMatrix(b.matrixWorld);b.remove(a);c.add(a)},attach:function(a,b,c){var d=new THREE.Matrix4;d.getInverse(c.matrixWorld);a.applyMatrix(d);b.remove(a);c.add(a)}};
THREE.ShapeUtils={area:function(a){for(var b=a.length,c=0,d=b-1,e=0;e<b;d=e++)c+=a[d].x*a[e].y-a[e].x*a[d].y;return.5*c},triangulate:function(){return function(a,b){var c=a.length;if(3>c)return null;var d=[],e=[],f=[],g,h,k;if(0<THREE.ShapeUtils.area(a))for(h=0;h<c;h++)e[h]=h;else for(h=0;h<c;h++)e[h]=c-1-h;var l=2*c;for(h=c-1;2<c;){if(0>=l--){console.warn("THREE.ShapeUtils: Unable to triangulate polygon! in triangulate()");break}g=h;c<=g&&(g=0);h=g+1;c<=h&&(h=0);k=h+1;c<=k&&(k=0);var m;a:{var p=
m=void 0,n=void 0,q=void 0,s=void 0,u=void 0,t=void 0,w=void 0,v=void 0,p=a[e[g]].x,n=a[e[g]].y,q=a[e[h]].x,s=a[e[h]].y,u=a[e[k]].x,t=a[e[k]].y;if(Number.EPSILON>(q-p)*(t-n)-(s-n)*(u-p))m=!1;else{var C=void 0,x=void 0,B=void 0,z=void 0,A=void 0,y=void 0,J=void 0,E=void 0,F=void 0,I=void 0,F=E=J=v=w=void 0,C=u-q,x=t-s,B=p-u,z=n-t,A=q-p,y=s-n;for(m=0;m<c;m++)if(w=a[e[m]].x,v=a[e[m]].y,!(w===p&&v===n||w===q&&v===s||w===u&&v===t)&&(J=w-p,E=v-n,F=w-q,I=v-s,w-=u,v-=t,F=C*I-x*F,J=A*E-y*J,E=B*v-z*w,F>=-Number.EPSILON&&
E>=-Number.EPSILON&&J>=-Number.EPSILON)){m=!1;break a}m=!0}}if(m){d.push([a[e[g]],a[e[h]],a[e[k]]]);f.push([e[g],e[h],e[k]]);g=h;for(k=h+1;k<c;g++,k++)e[g]=e[k];c--;l=2*c}}return b?f:d}}(),triangulateShape:function(a,b){function c(a,b,c){return a.x!==b.x?a.x<b.x?a.x<=c.x&&c.x<=b.x:b.x<=c.x&&c.x<=a.x:a.y<b.y?a.y<=c.y&&c.y<=b.y:b.y<=c.y&&c.y<=a.y}function d(a,b,d,e,f){var g=b.x-a.x,h=b.y-a.y,k=e.x-d.x,l=e.y-d.y,m=a.x-d.x,p=a.y-d.y,A=h*k-g*l,y=h*m-g*p;if(Math.abs(A)>Number.EPSILON){if(0<A){if(0>y||y>
A)return[];k=l*m-k*p;if(0>k||k>A)return[]}else{if(0<y||y<A)return[];k=l*m-k*p;if(0<k||k<A)return[]}if(0===k)return!f||0!==y&&y!==A?[a]:[];if(k===A)return!f||0!==y&&y!==A?[b]:[];if(0===y)return[d];if(y===A)return[e];f=k/A;return[{x:a.x+f*g,y:a.y+f*h}]}if(0!==y||l*m!==k*p)return[];h=0===g&&0===h;k=0===k&&0===l;if(h&&k)return a.x!==d.x||a.y!==d.y?[]:[a];if(h)return c(d,e,a)?[a]:[];if(k)return c(a,b,d)?[d]:[];0!==g?(a.x<b.x?(g=a,k=a.x,h=b,a=b.x):(g=b,k=b.x,h=a,a=a.x),d.x<e.x?(b=d,A=d.x,l=e,d=e.x):(b=
e,A=e.x,l=d,d=d.x)):(a.y<b.y?(g=a,k=a.y,h=b,a=b.y):(g=b,k=b.y,h=a,a=a.y),d.y<e.y?(b=d,A=d.y,l=e,d=e.y):(b=e,A=e.y,l=d,d=d.y));return k<=A?a<A?[]:a===A?f?[]:[b]:a<=d?[b,h]:[b,l]:k>d?[]:k===d?f?[]:[g]:a<=d?[g,h]:[g,l]}function e(a,b,c,d){var e=b.x-a.x,f=b.y-a.y;b=c.x-a.x;c=c.y-a.y;var g=d.x-a.x;d=d.y-a.y;a=e*c-f*b;e=e*d-f*g;return Math.abs(a)>Number.EPSILON?(b=g*c-d*b,0<a?0<=e&&0<=b:0<=e||0<=b):0<e}var f,g,h,k,l,m={};h=a.concat();f=0;for(g=b.length;f<g;f++)Array.prototype.push.apply(h,b[f]);f=0;for(g=
h.length;f<g;f++)l=h[f].x+":"+h[f].y,void 0!==m[l]&&console.warn("THREE.Shape: Duplicate point",l),m[l]=f;f=function(a,b){function c(a,b){var d=h.length-1,f=a-1;0>f&&(f=d);var g=a+1;g>d&&(g=0);d=e(h[a],h[f],h[g],k[b]);if(!d)return!1;d=k.length-1;f=b-1;0>f&&(f=d);g=b+1;g>d&&(g=0);return(d=e(k[b],k[f],k[g],h[a]))?!0:!1}function f(a,b){var c,e;for(c=0;c<h.length;c++)if(e=c+1,e%=h.length,e=d(a,b,h[c],h[e],!0),0<e.length)return!0;return!1}function g(a,c){var e,f,h,k;for(e=0;e<l.length;e++)for(f=b[l[e]],
h=0;h<f.length;h++)if(k=h+1,k%=f.length,k=d(a,c,f[h],f[k],!0),0<k.length)return!0;return!1}var h=a.concat(),k,l=[],m,p,z,A,y,J=[],E,F,I,Q=0;for(m=b.length;Q<m;Q++)l.push(Q);E=0;for(var N=2*l.length;0<l.length;){N--;if(0>N){console.log("Infinite Loop! Holes left:"+l.length+", Probably Hole outside Shape!");break}for(p=E;p<h.length;p++){z=h[p];m=-1;for(Q=0;Q<l.length;Q++)if(A=l[Q],y=z.x+":"+z.y+":"+A,void 0===J[y]){k=b[A];for(F=0;F<k.length;F++)if(A=k[F],c(p,F)&&!f(z,A)&&!g(z,A)){m=F;l.splice(Q,1);
E=h.slice(0,p+1);A=h.slice(p);F=k.slice(m);I=k.slice(0,m+1);h=E.concat(F).concat(I).concat(A);E=p;break}if(0<=m)break;J[y]=!0}if(0<=m)break}}return h}(a,b);var p=THREE.ShapeUtils.triangulate(f,!1);f=0;for(g=p.length;f<g;f++)for(k=p[f],h=0;3>h;h++)l=k[h].x+":"+k[h].y,l=m[l],void 0!==l&&(k[h]=l);return p.concat()},isClockWise:function(a){return 0>THREE.ShapeUtils.area(a)},b2:function(){return function(a,b,c,d){var e=1-a;return e*e*b+2*(1-a)*a*c+a*a*d}}(),b3:function(){return function(a,b,c,d,e){var f=
1-a,g=1-a;return f*f*f*b+3*g*g*a*c+3*(1-a)*a*a*d+a*a*a*e}}()};THREE.Curve=function(){};
THREE.Curve.prototype={constructor:THREE.Curve,getPoint:function(a){console.warn("THREE.Curve: Warning, getPoint() not implemented!");return null},getPointAt:function(a){a=this.getUtoTmapping(a);return this.getPoint(a)},getPoints:function(a){a||(a=5);var b,c=[];for(b=0;b<=a;b++)c.push(this.getPoint(b/a));return c},getSpacedPoints:function(a){a||(a=5);var b,c=[];for(b=0;b<=a;b++)c.push(this.getPointAt(b/a));return c},getLength:function(){var a=this.getLengths();return a[a.length-1]},getLengths:function(a){a||
(a=this.__arcLengthDivisions?this.__arcLengthDivisions:200);if(this.cacheArcLengths&&this.cacheArcLengths.length===a+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;var b=[],c,d=this.getPoint(0),e,f=0;b.push(0);for(e=1;e<=a;e++)c=this.getPoint(e/a),f+=c.distanceTo(d),b.push(f),d=c;return this.cacheArcLengths=b},updateArcLengths:function(){this.needsUpdate=!0;this.getLengths()},getUtoTmapping:function(a,b){var c=this.getLengths(),d=0,e=c.length,f;f=b?b:a*c[e-1];for(var g=0,h=e-
1,k;g<=h;)if(d=Math.floor(g+(h-g)/2),k=c[d]-f,0>k)g=d+1;else if(0<k)h=d-1;else{h=d;break}d=h;if(c[d]===f)return d/(e-1);g=c[d];return c=(d+(f-g)/(c[d+1]-g))/(e-1)},getTangent:function(a){var b=a-1E-4;a+=1E-4;0>b&&(b=0);1<a&&(a=1);b=this.getPoint(b);return this.getPoint(a).clone().sub(b).normalize()},getTangentAt:function(a){a=this.getUtoTmapping(a);return this.getTangent(a)}};
THREE.Curve.create=function(a,b){a.prototype=Object.create(THREE.Curve.prototype);a.prototype.constructor=a;a.prototype.getPoint=b;return a};THREE.CurvePath=function(){this.curves=[];this.autoClose=!1};THREE.CurvePath.prototype=Object.create(THREE.Curve.prototype);THREE.CurvePath.prototype.constructor=THREE.CurvePath;THREE.CurvePath.prototype.add=function(a){this.curves.push(a)};
THREE.CurvePath.prototype.closePath=function(){var a=this.curves[0].getPoint(0),b=this.curves[this.curves.length-1].getPoint(1);a.equals(b)||this.curves.push(new THREE.LineCurve(b,a))};THREE.CurvePath.prototype.getPoint=function(a){for(var b=a*this.getLength(),c=this.getCurveLengths(),d=0;d<c.length;){if(c[d]>=b)return a=this.curves[d],b=1-(c[d]-b)/a.getLength(),a.getPointAt(b);d++}return null};THREE.CurvePath.prototype.getLength=function(){var a=this.getCurveLengths();return a[a.length-1]};
THREE.CurvePath.prototype.getCurveLengths=function(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;for(var a=[],b=0,c=0,d=this.curves.length;c<d;c++)b+=this.curves[c].getLength(),a.push(b);return this.cacheLengths=a};THREE.CurvePath.prototype.createPointsGeometry=function(a){a=this.getPoints(a);return this.createGeometry(a)};THREE.CurvePath.prototype.createSpacedPointsGeometry=function(a){a=this.getSpacedPoints(a);return this.createGeometry(a)};
THREE.CurvePath.prototype.createGeometry=function(a){for(var b=new THREE.Geometry,c=0,d=a.length;c<d;c++){var e=a[c];b.vertices.push(new THREE.Vector3(e.x,e.y,e.z||0))}return b};THREE.Font=function(a){this.data=a};
THREE.Font.prototype={constructor:THREE.Font,generateShapes:function(a,b,c){void 0===b&&(b=100);void 0===c&&(c=4);var d=this.data;a=String(a).split("");var e=b/d.resolution,f=0;b=[];for(var g=0;g<a.length;g++){var h;h=e;var k=f,l=d.glyphs[a[g]]||d.glyphs["?"];if(l){var m=new THREE.Path,p=[],n=THREE.ShapeUtils.b2,q=THREE.ShapeUtils.b3,s=void 0,u=void 0,t=u=s=void 0,w=void 0,v=void 0,C=void 0,x=void 0,B=void 0,w=void 0;if(l.o)for(var z=l._cachedOutline||(l._cachedOutline=l.o.split(" ")),A=0,y=z.length;A<
y;)switch(z[A++]){case "m":s=z[A++]*h+k;u=z[A++]*h;m.moveTo(s,u);break;case "l":s=z[A++]*h+k;u=z[A++]*h;m.lineTo(s,u);break;case "q":s=z[A++]*h+k;u=z[A++]*h;v=z[A++]*h+k;C=z[A++]*h;m.quadraticCurveTo(v,C,s,u);if(w=p[p.length-1])for(var t=w.x,w=w.y,J=1;J<=c;J++){var E=J/c;n(E,t,v,s);n(E,w,C,u)}break;case "b":if(s=z[A++]*h+k,u=z[A++]*h,v=z[A++]*h+k,C=z[A++]*h,x=z[A++]*h+k,B=z[A++]*h,m.bezierCurveTo(v,C,x,B,s,u),w=p[p.length-1])for(t=w.x,w=w.y,J=1;J<=c;J++)E=J/c,q(E,t,v,x,s),q(E,w,C,B,u)}h={offset:l.ha*
h,path:m}}else h=void 0;f+=h.offset;b.push(h.path)}c=[];d=0;for(a=b.length;d<a;d++)Array.prototype.push.apply(c,b[d].toShapes());return c}};THREE.Path=function(a){THREE.CurvePath.call(this);this.actions=[];a&&this.fromPoints(a)};THREE.Path.prototype=Object.create(THREE.CurvePath.prototype);THREE.Path.prototype.constructor=THREE.Path;THREE.Path.prototype.fromPoints=function(a){this.moveTo(a[0].x,a[0].y);for(var b=1,c=a.length;b<c;b++)this.lineTo(a[b].x,a[b].y)};
THREE.Path.prototype.moveTo=function(a,b){this.actions.push({action:"moveTo",args:[a,b]})};THREE.Path.prototype.lineTo=function(a,b){var c=this.actions[this.actions.length-1].args,c=new THREE.LineCurve(new THREE.Vector2(c[c.length-2],c[c.length-1]),new THREE.Vector2(a,b));this.curves.push(c);this.actions.push({action:"lineTo",args:[a,b]})};
THREE.Path.prototype.quadraticCurveTo=function(a,b,c,d){var e=this.actions[this.actions.length-1].args,e=new THREE.QuadraticBezierCurve(new THREE.Vector2(e[e.length-2],e[e.length-1]),new THREE.Vector2(a,b),new THREE.Vector2(c,d));this.curves.push(e);this.actions.push({action:"quadraticCurveTo",args:[a,b,c,d]})};
THREE.Path.prototype.bezierCurveTo=function(a,b,c,d,e,f){var g=this.actions[this.actions.length-1].args,g=new THREE.CubicBezierCurve(new THREE.Vector2(g[g.length-2],g[g.length-1]),new THREE.Vector2(a,b),new THREE.Vector2(c,d),new THREE.Vector2(e,f));this.curves.push(g);this.actions.push({action:"bezierCurveTo",args:[a,b,c,d,e,f]})};
THREE.Path.prototype.splineThru=function(a){var b=Array.prototype.slice.call(arguments),c=this.actions[this.actions.length-1].args,c=[new THREE.Vector2(c[c.length-2],c[c.length-1])];Array.prototype.push.apply(c,a);c=new THREE.SplineCurve(c);this.curves.push(c);this.actions.push({action:"splineThru",args:b})};THREE.Path.prototype.arc=function(a,b,c,d,e,f){var g=this.actions[this.actions.length-1].args;this.absarc(a+g[g.length-2],b+g[g.length-1],c,d,e,f)};
THREE.Path.prototype.absarc=function(a,b,c,d,e,f){this.absellipse(a,b,c,c,d,e,f)};THREE.Path.prototype.ellipse=function(a,b,c,d,e,f,g,h){var k=this.actions[this.actions.length-1].args;this.absellipse(a+k[k.length-2],b+k[k.length-1],c,d,e,f,g,h)};THREE.Path.prototype.absellipse=function(a,b,c,d,e,f,g,h){var k=[a,b,c,d,e,f,g,h||0];a=new THREE.EllipseCurve(a,b,c,d,e,f,g,h);this.curves.push(a);a=a.getPoint(1);k.push(a.x);k.push(a.y);this.actions.push({action:"ellipse",args:k})};
THREE.Path.prototype.getSpacedPoints=function(a){a||(a=40);for(var b=[],c=0;c<a;c++)b.push(this.getPoint(c/a));this.autoClose&&b.push(b[0]);return b};
THREE.Path.prototype.getPoints=function(a){a=a||12;for(var b=THREE.ShapeUtils.b2,c=THREE.ShapeUtils.b3,d=[],e,f,g,h,k,l,m,p,n,q,s=0,u=this.actions.length;s<u;s++){n=this.actions[s];var t=n.args;switch(n.action){case "moveTo":d.push(new THREE.Vector2(t[0],t[1]));break;case "lineTo":d.push(new THREE.Vector2(t[0],t[1]));break;case "quadraticCurveTo":e=t[2];f=t[3];k=t[0];l=t[1];0<d.length?(n=d[d.length-1],m=n.x,p=n.y):(n=this.actions[s-1].args,m=n[n.length-2],p=n[n.length-1]);for(t=1;t<=a;t++)q=t/a,n=
b(q,m,k,e),q=b(q,p,l,f),d.push(new THREE.Vector2(n,q));break;case "bezierCurveTo":e=t[4];f=t[5];k=t[0];l=t[1];g=t[2];h=t[3];0<d.length?(n=d[d.length-1],m=n.x,p=n.y):(n=this.actions[s-1].args,m=n[n.length-2],p=n[n.length-1]);for(t=1;t<=a;t++)q=t/a,n=c(q,m,k,g,e),q=c(q,p,l,h,f),d.push(new THREE.Vector2(n,q));break;case "splineThru":n=this.actions[s-1].args;q=[new THREE.Vector2(n[n.length-2],n[n.length-1])];n=a*t[0].length;q=q.concat(t[0]);q=new THREE.SplineCurve(q);for(t=1;t<=n;t++)d.push(q.getPointAt(t/
n));break;case "arc":e=t[0];f=t[1];l=t[2];g=t[3];n=t[4];k=!!t[5];m=n-g;p=2*a;for(t=1;t<=p;t++)q=t/p,k||(q=1-q),q=g+q*m,n=e+l*Math.cos(q),q=f+l*Math.sin(q),d.push(new THREE.Vector2(n,q));break;case "ellipse":e=t[0];f=t[1];l=t[2];h=t[3];g=t[4];n=t[5];k=!!t[6];var w=t[7];m=n-g;p=2*a;var v,C;0!==w&&(v=Math.cos(w),C=Math.sin(w));for(t=1;t<=p;t++){q=t/p;k||(q=1-q);q=g+q*m;n=e+l*Math.cos(q);q=f+h*Math.sin(q);if(0!==w){var x=n;n=(x-e)*v-(q-f)*C+e;q=(x-e)*C+(q-f)*v+f}d.push(new THREE.Vector2(n,q))}}}a=d[d.length-
1];Math.abs(a.x-d[0].x)<Number.EPSILON&&Math.abs(a.y-d[0].y)<Number.EPSILON&&d.splice(d.length-1,1);this.autoClose&&d.push(d[0]);return d};
THREE.Path.prototype.toShapes=function(a,b){function c(a){for(var b=[],c=0,d=a.length;c<d;c++){var e=a[c],f=new THREE.Shape;f.actions=e.actions;f.curves=e.curves;b.push(f)}return b}function d(a,b){for(var c=b.length,d=!1,e=c-1,f=0;f<c;e=f++){var g=b[e],h=b[f],k=h.x-g.x,l=h.y-g.y;if(Math.abs(l)>Number.EPSILON){if(0>l&&(g=b[f],k=-k,h=b[e],l=-l),!(a.y<g.y||a.y>h.y))if(a.y===g.y){if(a.x===g.x)return!0}else{e=l*(a.x-g.x)-k*(a.y-g.y);if(0===e)return!0;0>e||(d=!d)}}else if(a.y===g.y&&(h.x<=a.x&&a.x<=g.x||
g.x<=a.x&&a.x<=h.x))return!0}return d}var e=THREE.ShapeUtils.isClockWise,f=function(a){for(var b=[],c=new THREE.Path,d=0,e=a.length;d<e;d++){var f=a[d],g=f.args,f=f.action;"moveTo"===f&&0!==c.actions.length&&(b.push(c),c=new THREE.Path);c[f].apply(c,g)}0!==c.actions.length&&b.push(c);return b}(this.actions);if(0===f.length)return[];if(!0===b)return c(f);var g,h,k,l=[];if(1===f.length)return h=f[0],k=new THREE.Shape,k.actions=h.actions,k.curves=h.curves,l.push(k),l;var m=!e(f[0].getPoints()),m=a?!m:
m;k=[];var p=[],n=[],q=0,s;p[q]=void 0;n[q]=[];for(var u=0,t=f.length;u<t;u++)h=f[u],s=h.getPoints(),g=e(s),(g=a?!g:g)?(!m&&p[q]&&q++,p[q]={s:new THREE.Shape,p:s},p[q].s.actions=h.actions,p[q].s.curves=h.curves,m&&q++,n[q]=[]):n[q].push({h:h,p:s[0]});if(!p[0])return c(f);if(1<p.length){u=!1;h=[];e=0;for(f=p.length;e<f;e++)k[e]=[];e=0;for(f=p.length;e<f;e++)for(g=n[e],m=0;m<g.length;m++){q=g[m];s=!0;for(t=0;t<p.length;t++)d(q.p,p[t].p)&&(e!==t&&h.push({froms:e,tos:t,hole:m}),s?(s=!1,k[t].push(q)):
u=!0);s&&k[e].push(q)}0<h.length&&(u||(n=k))}u=0;for(e=p.length;u<e;u++)for(k=p[u].s,l.push(k),h=n[u],f=0,g=h.length;f<g;f++)k.holes.push(h[f].h);return l};THREE.Shape=function(){THREE.Path.apply(this,arguments);this.holes=[]};THREE.Shape.prototype=Object.create(THREE.Path.prototype);THREE.Shape.prototype.constructor=THREE.Shape;THREE.Shape.prototype.extrude=function(a){return new THREE.ExtrudeGeometry(this,a)};THREE.Shape.prototype.makeGeometry=function(a){return new THREE.ShapeGeometry(this,a)};
THREE.Shape.prototype.getPointsHoles=function(a){for(var b=[],c=0,d=this.holes.length;c<d;c++)b[c]=this.holes[c].getPoints(a);return b};THREE.Shape.prototype.extractAllPoints=function(a){return{shape:this.getPoints(a),holes:this.getPointsHoles(a)}};THREE.Shape.prototype.extractPoints=function(a){return this.extractAllPoints(a)};THREE.LineCurve=function(a,b){this.v1=a;this.v2=b};THREE.LineCurve.prototype=Object.create(THREE.Curve.prototype);THREE.LineCurve.prototype.constructor=THREE.LineCurve;
THREE.LineCurve.prototype.getPoint=function(a){var b=this.v2.clone().sub(this.v1);b.multiplyScalar(a).add(this.v1);return b};THREE.LineCurve.prototype.getPointAt=function(a){return this.getPoint(a)};THREE.LineCurve.prototype.getTangent=function(a){return this.v2.clone().sub(this.v1).normalize()};THREE.QuadraticBezierCurve=function(a,b,c){this.v0=a;this.v1=b;this.v2=c};THREE.QuadraticBezierCurve.prototype=Object.create(THREE.Curve.prototype);THREE.QuadraticBezierCurve.prototype.constructor=THREE.QuadraticBezierCurve;
THREE.QuadraticBezierCurve.prototype.getPoint=function(a){var b=THREE.ShapeUtils.b2;return new THREE.Vector2(b(a,this.v0.x,this.v1.x,this.v2.x),b(a,this.v0.y,this.v1.y,this.v2.y))};THREE.QuadraticBezierCurve.prototype.getTangent=function(a){var b=THREE.CurveUtils.tangentQuadraticBezier;return(new THREE.Vector2(b(a,this.v0.x,this.v1.x,this.v2.x),b(a,this.v0.y,this.v1.y,this.v2.y))).normalize()};THREE.CubicBezierCurve=function(a,b,c,d){this.v0=a;this.v1=b;this.v2=c;this.v3=d};
THREE.CubicBezierCurve.prototype=Object.create(THREE.Curve.prototype);THREE.CubicBezierCurve.prototype.constructor=THREE.CubicBezierCurve;THREE.CubicBezierCurve.prototype.getPoint=function(a){var b=THREE.ShapeUtils.b3;return new THREE.Vector2(b(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x),b(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y))};
THREE.CubicBezierCurve.prototype.getTangent=function(a){var b=THREE.CurveUtils.tangentCubicBezier;return(new THREE.Vector2(b(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x),b(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y))).normalize()};THREE.SplineCurve=function(a){this.points=void 0==a?[]:a};THREE.SplineCurve.prototype=Object.create(THREE.Curve.prototype);THREE.SplineCurve.prototype.constructor=THREE.SplineCurve;
THREE.SplineCurve.prototype.getPoint=function(a){var b=this.points;a*=b.length-1;var c=Math.floor(a);a-=c;var d=b[0===c?c:c-1],e=b[c],f=b[c>b.length-2?b.length-1:c+1],b=b[c>b.length-3?b.length-1:c+2],c=THREE.CurveUtils.interpolate;return new THREE.Vector2(c(d.x,e.x,f.x,b.x,a),c(d.y,e.y,f.y,b.y,a))};THREE.EllipseCurve=function(a,b,c,d,e,f,g,h){this.aX=a;this.aY=b;this.xRadius=c;this.yRadius=d;this.aStartAngle=e;this.aEndAngle=f;this.aClockwise=g;this.aRotation=h||0};THREE.EllipseCurve.prototype=Object.create(THREE.Curve.prototype);
THREE.EllipseCurve.prototype.constructor=THREE.EllipseCurve;
THREE.EllipseCurve.prototype.getPoint=function(a){var b=this.aEndAngle-this.aStartAngle;0>b&&(b+=2*Math.PI);b>2*Math.PI&&(b-=2*Math.PI);b=!0===this.aClockwise?this.aEndAngle+(1-a)*(2*Math.PI-b):this.aStartAngle+a*b;a=this.aX+this.xRadius*Math.cos(b);var c=this.aY+this.yRadius*Math.sin(b);if(0!==this.aRotation){var b=Math.cos(this.aRotation),d=Math.sin(this.aRotation),e=a;a=(e-this.aX)*b-(c-this.aY)*d+this.aX;c=(e-this.aX)*d+(c-this.aY)*b+this.aY}return new THREE.Vector2(a,c)};
THREE.ArcCurve=function(a,b,c,d,e,f){THREE.EllipseCurve.call(this,a,b,c,c,d,e,f)};THREE.ArcCurve.prototype=Object.create(THREE.EllipseCurve.prototype);THREE.ArcCurve.prototype.constructor=THREE.ArcCurve;THREE.LineCurve3=THREE.Curve.create(function(a,b){this.v1=a;this.v2=b},function(a){var b=new THREE.Vector3;b.subVectors(this.v2,this.v1);b.multiplyScalar(a);b.add(this.v1);return b});
THREE.QuadraticBezierCurve3=THREE.Curve.create(function(a,b,c){this.v0=a;this.v1=b;this.v2=c},function(a){var b=THREE.ShapeUtils.b2;return new THREE.Vector3(b(a,this.v0.x,this.v1.x,this.v2.x),b(a,this.v0.y,this.v1.y,this.v2.y),b(a,this.v0.z,this.v1.z,this.v2.z))});
THREE.CubicBezierCurve3=THREE.Curve.create(function(a,b,c,d){this.v0=a;this.v1=b;this.v2=c;this.v3=d},function(a){var b=THREE.ShapeUtils.b3;return new THREE.Vector3(b(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x),b(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y),b(a,this.v0.z,this.v1.z,this.v2.z,this.v3.z))});
THREE.SplineCurve3=THREE.Curve.create(function(a){console.warn("THREE.SplineCurve3 will be deprecated. Please use THREE.CatmullRomCurve3");this.points=void 0==a?[]:a},function(a){var b=this.points;a*=b.length-1;var c=Math.floor(a);a-=c;var d=b[0==c?c:c-1],e=b[c],f=b[c>b.length-2?b.length-1:c+1],b=b[c>b.length-3?b.length-1:c+2],c=THREE.CurveUtils.interpolate;return new THREE.Vector3(c(d.x,e.x,f.x,b.x,a),c(d.y,e.y,f.y,b.y,a),c(d.z,e.z,f.z,b.z,a))});
THREE.CatmullRomCurve3=function(){function a(){}var b=new THREE.Vector3,c=new a,d=new a,e=new a;a.prototype.init=function(a,b,c,d){this.c0=a;this.c1=c;this.c2=-3*a+3*b-2*c-d;this.c3=2*a-2*b+c+d};a.prototype.initNonuniformCatmullRom=function(a,b,c,d,e,m,p){a=((b-a)/e-(c-a)/(e+m)+(c-b)/m)*m;d=((c-b)/m-(d-b)/(m+p)+(d-c)/p)*m;this.init(b,c,a,d)};a.prototype.initCatmullRom=function(a,b,c,d,e){this.init(b,c,e*(c-a),e*(d-b))};a.prototype.calc=function(a){var b=a*a;return this.c0+this.c1*a+this.c2*b+this.c3*
b*a};return THREE.Curve.create(function(a){this.points=a||[];this.closed=!1},function(a){var g=this.points,h,k;k=g.length;2>k&&console.log("duh, you need at least 2 points");a*=k-(this.closed?0:1);h=Math.floor(a);a-=h;this.closed?h+=0<h?0:(Math.floor(Math.abs(h)/g.length)+1)*g.length:0===a&&h===k-1&&(h=k-2,a=1);var l,m,p;this.closed||0<h?l=g[(h-1)%k]:(b.subVectors(g[0],g[1]).add(g[0]),l=b);m=g[h%k];p=g[(h+1)%k];this.closed||h+2<k?g=g[(h+2)%k]:(b.subVectors(g[k-1],g[k-2]).add(g[k-1]),g=b);if(void 0===
this.type||"centripetal"===this.type||"chordal"===this.type){var n="chordal"===this.type?.5:.25;k=Math.pow(l.distanceToSquared(m),n);h=Math.pow(m.distanceToSquared(p),n);n=Math.pow(p.distanceToSquared(g),n);1E-4>h&&(h=1);1E-4>k&&(k=h);1E-4>n&&(n=h);c.initNonuniformCatmullRom(l.x,m.x,p.x,g.x,k,h,n);d.initNonuniformCatmullRom(l.y,m.y,p.y,g.y,k,h,n);e.initNonuniformCatmullRom(l.z,m.z,p.z,g.z,k,h,n)}else"catmullrom"===this.type&&(k=void 0!==this.tension?this.tension:.5,c.initCatmullRom(l.x,m.x,p.x,g.x,
k),d.initCatmullRom(l.y,m.y,p.y,g.y,k),e.initCatmullRom(l.z,m.z,p.z,g.z,k));return new THREE.Vector3(c.calc(a),d.calc(a),e.calc(a))})}();THREE.ClosedSplineCurve3=function(a){console.warn("THREE.ClosedSplineCurve3 has been deprecated. Please use THREE.CatmullRomCurve3.");THREE.CatmullRomCurve3.call(this,a);this.type="catmullrom";this.closed=!0};THREE.ClosedSplineCurve3.prototype=Object.create(THREE.CatmullRomCurve3.prototype);
THREE.BoxGeometry=function(a,b,c,d,e,f){function g(a,b,c,d,e,f,g,u){var t,w=h.widthSegments,v=h.heightSegments,C=e/2,x=f/2,B=h.vertices.length;if("x"===a&&"y"===b||"y"===a&&"x"===b)t="z";else if("x"===a&&"z"===b||"z"===a&&"x"===b)t="y",v=h.depthSegments;else if("z"===a&&"y"===b||"y"===a&&"z"===b)t="x",w=h.depthSegments;var z=w+1,A=v+1,y=e/w,J=f/v,E=new THREE.Vector3;E[t]=0<g?1:-1;for(e=0;e<A;e++)for(f=0;f<z;f++){var F=new THREE.Vector3;F[a]=(f*y-C)*c;F[b]=(e*J-x)*d;F[t]=g;h.vertices.push(F)}for(e=
0;e<v;e++)for(f=0;f<w;f++)x=f+z*e,a=f+z*(e+1),b=f+1+z*(e+1),c=f+1+z*e,d=new THREE.Vector2(f/w,1-e/v),g=new THREE.Vector2(f/w,1-(e+1)/v),t=new THREE.Vector2((f+1)/w,1-(e+1)/v),C=new THREE.Vector2((f+1)/w,1-e/v),x=new THREE.Face3(x+B,a+B,c+B),x.normal.copy(E),x.vertexNormals.push(E.clone(),E.clone(),E.clone()),x.materialIndex=u,h.faces.push(x),h.faceVertexUvs[0].push([d,g,C]),x=new THREE.Face3(a+B,b+B,c+B),x.normal.copy(E),x.vertexNormals.push(E.clone(),E.clone(),E.clone()),x.materialIndex=u,h.faces.push(x),
h.faceVertexUvs[0].push([g.clone(),t,C.clone()])}THREE.Geometry.call(this);this.type="BoxGeometry";this.parameters={width:a,height:b,depth:c,widthSegments:d,heightSegments:e,depthSegments:f};this.widthSegments=d||1;this.heightSegments=e||1;this.depthSegments=f||1;var h=this;d=a/2;e=b/2;f=c/2;g("z","y",-1,-1,c,b,d,0);g("z","y",1,-1,c,b,-d,1);g("x","z",1,1,a,c,e,2);g("x","z",1,-1,a,c,-e,3);g("x","y",1,-1,a,b,f,4);g("x","y",-1,-1,a,b,-f,5);this.mergeVertices()};THREE.BoxGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.BoxGeometry.prototype.constructor=THREE.BoxGeometry;THREE.CubeGeometry=THREE.BoxGeometry;THREE.CircleGeometry=function(a,b,c,d){THREE.Geometry.call(this);this.type="CircleGeometry";this.parameters={radius:a,segments:b,thetaStart:c,thetaLength:d};this.fromBufferGeometry(new THREE.CircleBufferGeometry(a,b,c,d))};THREE.CircleGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.CircleGeometry.prototype.constructor=THREE.CircleGeometry;
THREE.CircleBufferGeometry=function(a,b,c,d){THREE.BufferGeometry.call(this);this.type="CircleBufferGeometry";this.parameters={radius:a,segments:b,thetaStart:c,thetaLength:d};a=a||50;b=void 0!==b?Math.max(3,b):8;c=void 0!==c?c:0;d=void 0!==d?d:2*Math.PI;var e=b+2,f=new Float32Array(3*e),g=new Float32Array(3*e),e=new Float32Array(2*e);g[2]=1;e[0]=.5;e[1]=.5;for(var h=0,k=3,l=2;h<=b;h++,k+=3,l+=2){var m=c+h/b*d;f[k]=a*Math.cos(m);f[k+1]=a*Math.sin(m);g[k+2]=1;e[l]=(f[k]/a+1)/2;e[l+1]=(f[k+1]/a+1)/2}c=
[];for(k=1;k<=b;k++)c.push(k,k+1,0);this.setIndex(new THREE.BufferAttribute(new Uint16Array(c),1));this.addAttribute("position",new THREE.BufferAttribute(f,3));this.addAttribute("normal",new THREE.BufferAttribute(g,3));this.addAttribute("uv",new THREE.BufferAttribute(e,2));this.boundingSphere=new THREE.Sphere(new THREE.Vector3,a)};THREE.CircleBufferGeometry.prototype=Object.create(THREE.BufferGeometry.prototype);THREE.CircleBufferGeometry.prototype.constructor=THREE.CircleBufferGeometry;
THREE.CylinderGeometry=function(a,b,c,d,e,f,g,h){THREE.Geometry.call(this);this.type="CylinderGeometry";this.parameters={radiusTop:a,radiusBottom:b,height:c,radialSegments:d,heightSegments:e,openEnded:f,thetaStart:g,thetaLength:h};a=void 0!==a?a:20;b=void 0!==b?b:20;c=void 0!==c?c:100;d=d||8;e=e||1;f=void 0!==f?f:!1;g=void 0!==g?g:0;h=void 0!==h?h:2*Math.PI;var k=c/2,l,m,p=[],n=[];for(m=0;m<=e;m++){var q=[],s=[],u=m/e,t=u*(b-a)+a;for(l=0;l<=d;l++){var w=l/d,v=new THREE.Vector3;v.x=t*Math.sin(w*h+
g);v.y=-u*c+k;v.z=t*Math.cos(w*h+g);this.vertices.push(v);q.push(this.vertices.length-1);s.push(new THREE.Vector2(w,1-u))}p.push(q);n.push(s)}c=(b-a)/c;for(l=0;l<d;l++)for(0!==a?(g=this.vertices[p[0][l]].clone(),h=this.vertices[p[0][l+1]].clone()):(g=this.vertices[p[1][l]].clone(),h=this.vertices[p[1][l+1]].clone()),g.setY(Math.sqrt(g.x*g.x+g.z*g.z)*c).normalize(),h.setY(Math.sqrt(h.x*h.x+h.z*h.z)*c).normalize(),m=0;m<e;m++){var q=p[m][l],s=p[m+1][l],u=p[m+1][l+1],t=p[m][l+1],w=g.clone(),v=g.clone(),
C=h.clone(),x=h.clone(),B=n[m][l].clone(),z=n[m+1][l].clone(),A=n[m+1][l+1].clone(),y=n[m][l+1].clone();this.faces.push(new THREE.Face3(q,s,t,[w,v,x]));this.faceVertexUvs[0].push([B,z,y]);this.faces.push(new THREE.Face3(s,u,t,[v.clone(),C,x.clone()]));this.faceVertexUvs[0].push([z.clone(),A,y.clone()])}if(!1===f&&0<a)for(this.vertices.push(new THREE.Vector3(0,k,0)),l=0;l<d;l++)q=p[0][l],s=p[0][l+1],u=this.vertices.length-1,w=new THREE.Vector3(0,1,0),v=new THREE.Vector3(0,1,0),C=new THREE.Vector3(0,
1,0),B=n[0][l].clone(),z=n[0][l+1].clone(),A=new THREE.Vector2(z.x,0),this.faces.push(new THREE.Face3(q,s,u,[w,v,C],void 0,1)),this.faceVertexUvs[0].push([B,z,A]);if(!1===f&&0<b)for(this.vertices.push(new THREE.Vector3(0,-k,0)),l=0;l<d;l++)q=p[e][l+1],s=p[e][l],u=this.vertices.length-1,w=new THREE.Vector3(0,-1,0),v=new THREE.Vector3(0,-1,0),C=new THREE.Vector3(0,-1,0),B=n[e][l+1].clone(),z=n[e][l].clone(),A=new THREE.Vector2(z.x,1),this.faces.push(new THREE.Face3(q,s,u,[w,v,C],void 0,2)),this.faceVertexUvs[0].push([B,
z,A]);this.computeFaceNormals()};THREE.CylinderGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.CylinderGeometry.prototype.constructor=THREE.CylinderGeometry;
THREE.EdgesGeometry=function(a,b){function c(a,b){return a-b}THREE.BufferGeometry.call(this);var d=Math.cos(THREE.Math.degToRad(void 0!==b?b:1)),e=[0,0],f={},g=["a","b","c"],h;a instanceof THREE.BufferGeometry?(h=new THREE.Geometry,h.fromBufferGeometry(a)):h=a.clone();h.mergeVertices();h.computeFaceNormals();var k=h.vertices;h=h.faces;for(var l=0,m=h.length;l<m;l++)for(var p=h[l],n=0;3>n;n++){e[0]=p[g[n]];e[1]=p[g[(n+1)%3]];e.sort(c);var q=e.toString();void 0===f[q]?f[q]={vert1:e[0],vert2:e[1],face1:l,
face2:void 0}:f[q].face2=l}e=[];for(q in f)if(g=f[q],void 0===g.face2||h[g.face1].normal.dot(h[g.face2].normal)<=d)l=k[g.vert1],e.push(l.x),e.push(l.y),e.push(l.z),l=k[g.vert2],e.push(l.x),e.push(l.y),e.push(l.z);this.addAttribute("position",new THREE.BufferAttribute(new Float32Array(e),3))};THREE.EdgesGeometry.prototype=Object.create(THREE.BufferGeometry.prototype);THREE.EdgesGeometry.prototype.constructor=THREE.EdgesGeometry;
THREE.ExtrudeGeometry=function(a,b){"undefined"!==typeof a&&(THREE.Geometry.call(this),this.type="ExtrudeGeometry",a=Array.isArray(a)?a:[a],this.addShapeList(a,b),this.computeFaceNormals())};THREE.ExtrudeGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.ExtrudeGeometry.prototype.constructor=THREE.ExtrudeGeometry;THREE.ExtrudeGeometry.prototype.addShapeList=function(a,b){for(var c=a.length,d=0;d<c;d++)this.addShape(a[d],b)};
THREE.ExtrudeGeometry.prototype.addShape=function(a,b){function c(a,b,c){b||console.error("THREE.ExtrudeGeometry: vec does not exist");return b.clone().multiplyScalar(c).add(a)}function d(a,b,c){var d=1,d=a.x-b.x,e=a.y-b.y,f=c.x-a.x,g=c.y-a.y,h=d*d+e*e;if(Math.abs(d*g-e*f)>Number.EPSILON){var k=Math.sqrt(h),l=Math.sqrt(f*f+g*g),h=b.x-e/k;b=b.y+d/k;f=((c.x-g/l-h)*g-(c.y+f/l-b)*f)/(d*g-e*f);c=h+d*f-a.x;a=b+e*f-a.y;d=c*c+a*a;if(2>=d)return new THREE.Vector2(c,a);d=Math.sqrt(d/2)}else a=!1,d>Number.EPSILON?
f>Number.EPSILON&&(a=!0):d<-Number.EPSILON?f<-Number.EPSILON&&(a=!0):Math.sign(e)===Math.sign(g)&&(a=!0),a?(c=-e,a=d,d=Math.sqrt(h)):(c=d,a=e,d=Math.sqrt(h/2));return new THREE.Vector2(c/d,a/d)}function e(a,b){var c,d;for(D=a.length;0<=--D;){c=D;d=D-1;0>d&&(d=a.length-1);for(var e=0,f=q+2*m,e=0;e<f;e++){var g=P*e,h=P*(e+1),k=b+c+g,g=b+d+g,l=b+d+h,h=b+c+h,k=k+E,g=g+E,l=l+E,h=h+E;J.faces.push(new THREE.Face3(k,g,h,null,null,1));J.faces.push(new THREE.Face3(g,l,h,null,null,1));k=w.generateSideWallUV(J,
k,g,l,h);J.faceVertexUvs[0].push([k[0],k[1],k[3]]);J.faceVertexUvs[0].push([k[1],k[2],k[3]])}}}function f(a,b,c){J.vertices.push(new THREE.Vector3(a,b,c))}function g(a,b,c){a+=E;b+=E;c+=E;J.faces.push(new THREE.Face3(a,b,c,null,null,0));a=w.generateTopUV(J,a,b,c);J.faceVertexUvs[0].push(a)}var h=void 0!==b.amount?b.amount:100,k=void 0!==b.bevelThickness?b.bevelThickness:6,l=void 0!==b.bevelSize?b.bevelSize:k-2,m=void 0!==b.bevelSegments?b.bevelSegments:3,p=void 0!==b.bevelEnabled?b.bevelEnabled:!0,
n=void 0!==b.curveSegments?b.curveSegments:12,q=void 0!==b.steps?b.steps:1,s=b.extrudePath,u,t=!1,w=void 0!==b.UVGenerator?b.UVGenerator:THREE.ExtrudeGeometry.WorldUVGenerator,v,C,x,B;s&&(u=s.getSpacedPoints(q),t=!0,p=!1,v=void 0!==b.frames?b.frames:new THREE.TubeGeometry.FrenetFrames(s,q,!1),C=new THREE.Vector3,x=new THREE.Vector3,B=new THREE.Vector3);p||(l=k=m=0);var z,A,y,J=this,E=this.vertices.length,s=a.extractPoints(n),n=s.shape,F=s.holes;if(s=!THREE.ShapeUtils.isClockWise(n)){n=n.reverse();
A=0;for(y=F.length;A<y;A++)z=F[A],THREE.ShapeUtils.isClockWise(z)&&(F[A]=z.reverse());s=!1}var I=THREE.ShapeUtils.triangulateShape(n,F),Q=n;A=0;for(y=F.length;A<y;A++)z=F[A],n=n.concat(z);var N,L,G,M,R,P=n.length,O,K=I.length,s=[],D=0;G=Q.length;N=G-1;for(L=D+1;D<G;D++,N++,L++)N===G&&(N=0),L===G&&(L=0),s[D]=d(Q[D],Q[N],Q[L]);var Y=[],W,X=s.concat();A=0;for(y=F.length;A<y;A++){z=F[A];W=[];D=0;G=z.length;N=G-1;for(L=D+1;D<G;D++,N++,L++)N===G&&(N=0),L===G&&(L=0),W[D]=d(z[D],z[N],z[L]);Y.push(W);X=X.concat(W)}for(N=
0;N<m;N++){G=N/m;M=k*(1-G);L=l*Math.sin(G*Math.PI/2);D=0;for(G=Q.length;D<G;D++)R=c(Q[D],s[D],L),f(R.x,R.y,-M);A=0;for(y=F.length;A<y;A++)for(z=F[A],W=Y[A],D=0,G=z.length;D<G;D++)R=c(z[D],W[D],L),f(R.x,R.y,-M)}L=l;for(D=0;D<P;D++)R=p?c(n[D],X[D],L):n[D],t?(x.copy(v.normals[0]).multiplyScalar(R.x),C.copy(v.binormals[0]).multiplyScalar(R.y),B.copy(u[0]).add(x).add(C),f(B.x,B.y,B.z)):f(R.x,R.y,0);for(G=1;G<=q;G++)for(D=0;D<P;D++)R=p?c(n[D],X[D],L):n[D],t?(x.copy(v.normals[G]).multiplyScalar(R.x),C.copy(v.binormals[G]).multiplyScalar(R.y),
B.copy(u[G]).add(x).add(C),f(B.x,B.y,B.z)):f(R.x,R.y,h/q*G);for(N=m-1;0<=N;N--){G=N/m;M=k*(1-G);L=l*Math.sin(G*Math.PI/2);D=0;for(G=Q.length;D<G;D++)R=c(Q[D],s[D],L),f(R.x,R.y,h+M);A=0;for(y=F.length;A<y;A++)for(z=F[A],W=Y[A],D=0,G=z.length;D<G;D++)R=c(z[D],W[D],L),t?f(R.x,R.y+u[q-1].y,u[q-1].x+M):f(R.x,R.y,h+M)}(function(){if(p){var a;a=0*P;for(D=0;D<K;D++)O=I[D],g(O[2]+a,O[1]+a,O[0]+a);a=q+2*m;a*=P;for(D=0;D<K;D++)O=I[D],g(O[0]+a,O[1]+a,O[2]+a)}else{for(D=0;D<K;D++)O=I[D],g(O[2],O[1],O[0]);for(D=
0;D<K;D++)O=I[D],g(O[0]+P*q,O[1]+P*q,O[2]+P*q)}})();(function(){var a=0;e(Q,a);a+=Q.length;A=0;for(y=F.length;A<y;A++)z=F[A],e(z,a),a+=z.length})()};
THREE.ExtrudeGeometry.WorldUVGenerator={generateTopUV:function(a,b,c,d){a=a.vertices;b=a[b];c=a[c];d=a[d];return[new THREE.Vector2(b.x,b.y),new THREE.Vector2(c.x,c.y),new THREE.Vector2(d.x,d.y)]},generateSideWallUV:function(a,b,c,d,e){a=a.vertices;b=a[b];c=a[c];d=a[d];e=a[e];return.01>Math.abs(b.y-c.y)?[new THREE.Vector2(b.x,1-b.z),new THREE.Vector2(c.x,1-c.z),new THREE.Vector2(d.x,1-d.z),new THREE.Vector2(e.x,1-e.z)]:[new THREE.Vector2(b.y,1-b.z),new THREE.Vector2(c.y,1-c.z),new THREE.Vector2(d.y,
1-d.z),new THREE.Vector2(e.y,1-e.z)]}};THREE.ShapeGeometry=function(a,b){THREE.Geometry.call(this);this.type="ShapeGeometry";!1===Array.isArray(a)&&(a=[a]);this.addShapeList(a,b);this.computeFaceNormals()};THREE.ShapeGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.ShapeGeometry.prototype.constructor=THREE.ShapeGeometry;THREE.ShapeGeometry.prototype.addShapeList=function(a,b){for(var c=0,d=a.length;c<d;c++)this.addShape(a[c],b);return this};
THREE.ShapeGeometry.prototype.addShape=function(a,b){void 0===b&&(b={});var c=b.material,d=void 0===b.UVGenerator?THREE.ExtrudeGeometry.WorldUVGenerator:b.UVGenerator,e,f,g,h=this.vertices.length;e=a.extractPoints(void 0!==b.curveSegments?b.curveSegments:12);var k=e.shape,l=e.holes;if(!THREE.ShapeUtils.isClockWise(k))for(k=k.reverse(),e=0,f=l.length;e<f;e++)g=l[e],THREE.ShapeUtils.isClockWise(g)&&(l[e]=g.reverse());var m=THREE.ShapeUtils.triangulateShape(k,l);e=0;for(f=l.length;e<f;e++)g=l[e],k=k.concat(g);
l=k.length;f=m.length;for(e=0;e<l;e++)g=k[e],this.vertices.push(new THREE.Vector3(g.x,g.y,0));for(e=0;e<f;e++)l=m[e],k=l[0]+h,g=l[1]+h,l=l[2]+h,this.faces.push(new THREE.Face3(k,g,l,null,null,c)),this.faceVertexUvs[0].push(d.generateTopUV(this,k,g,l))};
THREE.LatheGeometry=function(a,b,c,d){THREE.Geometry.call(this);this.type="LatheGeometry";this.parameters={points:a,segments:b,phiStart:c,phiLength:d};b=b||12;c=c||0;d=d||2*Math.PI;for(var e=1/(a.length-1),f=1/b,g=0,h=b;g<=h;g++)for(var k=c+g*f*d,l=Math.sin(k),m=Math.cos(k),k=0,p=a.length;k<p;k++){var n=a[k],q=new THREE.Vector3;q.x=n.x*l;q.y=n.y;q.z=n.x*m;this.vertices.push(q)}c=a.length;g=0;for(h=b;g<h;g++)for(k=0,p=a.length-1;k<p;k++){b=k+c*g;d=b+c;var l=b+1+c,m=b+1,n=g*f,q=k*e,s=n+f,u=q+e;this.faces.push(new THREE.Face3(b,
d,m));this.faceVertexUvs[0].push([new THREE.Vector2(n,q),new THREE.Vector2(s,q),new THREE.Vector2(n,u)]);this.faces.push(new THREE.Face3(d,l,m));this.faceVertexUvs[0].push([new THREE.Vector2(s,q),new THREE.Vector2(s,u),new THREE.Vector2(n,u)])}this.mergeVertices();this.computeFaceNormals();this.computeVertexNormals()};THREE.LatheGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.LatheGeometry.prototype.constructor=THREE.LatheGeometry;
THREE.PlaneGeometry=function(a,b,c,d){THREE.Geometry.call(this);this.type="PlaneGeometry";this.parameters={width:a,height:b,widthSegments:c,heightSegments:d};this.fromBufferGeometry(new THREE.PlaneBufferGeometry(a,b,c,d))};THREE.PlaneGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.PlaneGeometry.prototype.constructor=THREE.PlaneGeometry;
THREE.PlaneBufferGeometry=function(a,b,c,d){THREE.BufferGeometry.call(this);this.type="PlaneBufferGeometry";this.parameters={width:a,height:b,widthSegments:c,heightSegments:d};var e=a/2,f=b/2;c=Math.floor(c)||1;d=Math.floor(d)||1;var g=c+1,h=d+1,k=a/c,l=b/d;b=new Float32Array(g*h*3);a=new Float32Array(g*h*3);for(var m=new Float32Array(g*h*2),p=0,n=0,q=0;q<h;q++)for(var s=q*l-f,u=0;u<g;u++)b[p]=u*k-e,b[p+1]=-s,a[p+2]=1,m[n]=u/c,m[n+1]=1-q/d,p+=3,n+=2;p=0;e=new (65535<b.length/3?Uint32Array:Uint16Array)(c*
d*6);for(q=0;q<d;q++)for(u=0;u<c;u++)f=u+g*(q+1),h=u+1+g*(q+1),k=u+1+g*q,e[p]=u+g*q,e[p+1]=f,e[p+2]=k,e[p+3]=f,e[p+4]=h,e[p+5]=k,p+=6;this.setIndex(new THREE.BufferAttribute(e,1));this.addAttribute("position",new THREE.BufferAttribute(b,3));this.addAttribute("normal",new THREE.BufferAttribute(a,3));this.addAttribute("uv",new THREE.BufferAttribute(m,2))};THREE.PlaneBufferGeometry.prototype=Object.create(THREE.BufferGeometry.prototype);THREE.PlaneBufferGeometry.prototype.constructor=THREE.PlaneBufferGeometry;
THREE.RingGeometry=function(a,b,c,d,e,f){THREE.Geometry.call(this);this.type="RingGeometry";this.parameters={innerRadius:a,outerRadius:b,thetaSegments:c,phiSegments:d,thetaStart:e,thetaLength:f};a=a||0;b=b||50;e=void 0!==e?e:0;f=void 0!==f?f:2*Math.PI;c=void 0!==c?Math.max(3,c):8;d=void 0!==d?Math.max(1,d):8;var g,h=[],k=a,l=(b-a)/d;for(a=0;a<d+1;a++){for(g=0;g<c+1;g++){var m=new THREE.Vector3,p=e+g/c*f;m.x=k*Math.cos(p);m.y=k*Math.sin(p);this.vertices.push(m);h.push(new THREE.Vector2((m.x/b+1)/2,
(m.y/b+1)/2))}k+=l}b=new THREE.Vector3(0,0,1);for(a=0;a<d;a++)for(e=a*(c+1),g=0;g<c;g++)f=p=g+e,l=p+c+1,m=p+c+2,this.faces.push(new THREE.Face3(f,l,m,[b.clone(),b.clone(),b.clone()])),this.faceVertexUvs[0].push([h[f].clone(),h[l].clone(),h[m].clone()]),f=p,l=p+c+2,m=p+1,this.faces.push(new THREE.Face3(f,l,m,[b.clone(),b.clone(),b.clone()])),this.faceVertexUvs[0].push([h[f].clone(),h[l].clone(),h[m].clone()]);this.computeFaceNormals();this.boundingSphere=new THREE.Sphere(new THREE.Vector3,k)};
THREE.RingGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.RingGeometry.prototype.constructor=THREE.RingGeometry;THREE.SphereGeometry=function(a,b,c,d,e,f,g){THREE.Geometry.call(this);this.type="SphereGeometry";this.parameters={radius:a,widthSegments:b,heightSegments:c,phiStart:d,phiLength:e,thetaStart:f,thetaLength:g};this.fromBufferGeometry(new THREE.SphereBufferGeometry(a,b,c,d,e,f,g))};THREE.SphereGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.SphereGeometry.prototype.constructor=THREE.SphereGeometry;
THREE.SphereBufferGeometry=function(a,b,c,d,e,f,g){THREE.BufferGeometry.call(this);this.type="SphereBufferGeometry";this.parameters={radius:a,widthSegments:b,heightSegments:c,phiStart:d,phiLength:e,thetaStart:f,thetaLength:g};a=a||50;b=Math.max(3,Math.floor(b)||8);c=Math.max(2,Math.floor(c)||6);d=void 0!==d?d:0;e=void 0!==e?e:2*Math.PI;f=void 0!==f?f:0;g=void 0!==g?g:Math.PI;for(var h=f+g,k=(b+1)*(c+1),l=new THREE.BufferAttribute(new Float32Array(3*k),3),m=new THREE.BufferAttribute(new Float32Array(3*
k),3),k=new THREE.BufferAttribute(new Float32Array(2*k),2),p=0,n=[],q=new THREE.Vector3,s=0;s<=c;s++){for(var u=[],t=s/c,w=0;w<=b;w++){var v=w/b,C=-a*Math.cos(d+v*e)*Math.sin(f+t*g),x=a*Math.cos(f+t*g),B=a*Math.sin(d+v*e)*Math.sin(f+t*g);q.set(C,x,B).normalize();l.setXYZ(p,C,x,B);m.setXYZ(p,q.x,q.y,q.z);k.setXY(p,v,1-t);u.push(p);p++}n.push(u)}d=[];for(s=0;s<c;s++)for(w=0;w<b;w++)e=n[s][w+1],g=n[s][w],p=n[s+1][w],q=n[s+1][w+1],(0!==s||0<f)&&d.push(e,g,q),(s!==c-1||h<Math.PI)&&d.push(g,p,q);this.setIndex(new (65535<
l.count?THREE.Uint32Attribute:THREE.Uint16Attribute)(d,1));this.addAttribute("position",l);this.addAttribute("normal",m);this.addAttribute("uv",k);this.boundingSphere=new THREE.Sphere(new THREE.Vector3,a)};THREE.SphereBufferGeometry.prototype=Object.create(THREE.BufferGeometry.prototype);THREE.SphereBufferGeometry.prototype.constructor=THREE.SphereBufferGeometry;
THREE.TextGeometry=function(a,b){b=b||{};var c=b.font;if(!1===c instanceof THREE.Font)return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),new THREE.Geometry;c=c.generateShapes(a,b.size,b.curveSegments);b.amount=void 0!==b.height?b.height:50;void 0===b.bevelThickness&&(b.bevelThickness=10);void 0===b.bevelSize&&(b.bevelSize=8);void 0===b.bevelEnabled&&(b.bevelEnabled=!1);THREE.ExtrudeGeometry.call(this,c,b);this.type="TextGeometry"};
THREE.TextGeometry.prototype=Object.create(THREE.ExtrudeGeometry.prototype);THREE.TextGeometry.prototype.constructor=THREE.TextGeometry;
THREE.TorusGeometry=function(a,b,c,d,e){THREE.Geometry.call(this);this.type="TorusGeometry";this.parameters={radius:a,tube:b,radialSegments:c,tubularSegments:d,arc:e};a=a||100;b=b||40;c=c||8;d=d||6;e=e||2*Math.PI;for(var f=new THREE.Vector3,g=[],h=[],k=0;k<=c;k++)for(var l=0;l<=d;l++){var m=l/d*e,p=k/c*Math.PI*2;f.x=a*Math.cos(m);f.y=a*Math.sin(m);var n=new THREE.Vector3;n.x=(a+b*Math.cos(p))*Math.cos(m);n.y=(a+b*Math.cos(p))*Math.sin(m);n.z=b*Math.sin(p);this.vertices.push(n);g.push(new THREE.Vector2(l/
d,k/c));h.push(n.clone().sub(f).normalize())}for(k=1;k<=c;k++)for(l=1;l<=d;l++)a=(d+1)*k+l-1,b=(d+1)*(k-1)+l-1,e=(d+1)*(k-1)+l,f=(d+1)*k+l,m=new THREE.Face3(a,b,f,[h[a].clone(),h[b].clone(),h[f].clone()]),this.faces.push(m),this.faceVertexUvs[0].push([g[a].clone(),g[b].clone(),g[f].clone()]),m=new THREE.Face3(b,e,f,[h[b].clone(),h[e].clone(),h[f].clone()]),this.faces.push(m),this.faceVertexUvs[0].push([g[b].clone(),g[e].clone(),g[f].clone()]);this.computeFaceNormals()};
THREE.TorusGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.TorusGeometry.prototype.constructor=THREE.TorusGeometry;
THREE.TorusKnotGeometry=function(a,b,c,d,e,f,g){function h(a,b,c,d,e){var f=Math.cos(a),g=Math.sin(a);a*=b/c;b=Math.cos(a);f*=d*(2+b)*.5;g=d*(2+b)*g*.5;d=e*d*Math.sin(a)*.5;return new THREE.Vector3(f,g,d)}THREE.Geometry.call(this);this.type="TorusKnotGeometry";this.parameters={radius:a,tube:b,radialSegments:c,tubularSegments:d,p:e,q:f,heightScale:g};a=a||100;b=b||40;c=c||64;d=d||8;e=e||2;f=f||3;g=g||1;for(var k=Array(c),l=new THREE.Vector3,m=new THREE.Vector3,p=new THREE.Vector3,n=0;n<c;++n){k[n]=
Array(d);var q=n/c*2*e*Math.PI,s=h(q,f,e,a,g),q=h(q+.01,f,e,a,g);l.subVectors(q,s);m.addVectors(q,s);p.crossVectors(l,m);m.crossVectors(p,l);p.normalize();m.normalize();for(q=0;q<d;++q){var u=q/d*2*Math.PI,t=-b*Math.cos(u),u=b*Math.sin(u),w=new THREE.Vector3;w.x=s.x+t*m.x+u*p.x;w.y=s.y+t*m.y+u*p.y;w.z=s.z+t*m.z+u*p.z;k[n][q]=this.vertices.push(w)-1}}for(n=0;n<c;++n)for(q=0;q<d;++q)e=(n+1)%c,f=(q+1)%d,a=k[n][q],b=k[e][q],e=k[e][f],f=k[n][f],g=new THREE.Vector2(n/c,q/d),l=new THREE.Vector2((n+1)/c,
q/d),m=new THREE.Vector2((n+1)/c,(q+1)/d),p=new THREE.Vector2(n/c,(q+1)/d),this.faces.push(new THREE.Face3(a,b,f)),this.faceVertexUvs[0].push([g,l,p]),this.faces.push(new THREE.Face3(b,e,f)),this.faceVertexUvs[0].push([l.clone(),m,p.clone()]);this.computeFaceNormals();this.computeVertexNormals()};THREE.TorusKnotGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.TorusKnotGeometry.prototype.constructor=THREE.TorusKnotGeometry;
THREE.TubeGeometry=function(a,b,c,d,e,f){THREE.Geometry.call(this);this.type="TubeGeometry";this.parameters={path:a,segments:b,radius:c,radialSegments:d,closed:e,taper:f};b=b||64;c=c||1;d=d||8;e=e||!1;f=f||THREE.TubeGeometry.NoTaper;var g=[],h,k,l=b+1,m,p,n,q,s,u=new THREE.Vector3,t,w,v;t=new THREE.TubeGeometry.FrenetFrames(a,b,e);w=t.normals;v=t.binormals;this.tangents=t.tangents;this.normals=w;this.binormals=v;for(t=0;t<l;t++)for(g[t]=[],m=t/(l-1),s=a.getPointAt(m),h=w[t],k=v[t],n=c*f(m),m=0;m<
d;m++)p=m/d*2*Math.PI,q=-n*Math.cos(p),p=n*Math.sin(p),u.copy(s),u.x+=q*h.x+p*k.x,u.y+=q*h.y+p*k.y,u.z+=q*h.z+p*k.z,g[t][m]=this.vertices.push(new THREE.Vector3(u.x,u.y,u.z))-1;for(t=0;t<b;t++)for(m=0;m<d;m++)f=e?(t+1)%b:t+1,l=(m+1)%d,a=g[t][m],c=g[f][m],f=g[f][l],l=g[t][l],u=new THREE.Vector2(t/b,m/d),w=new THREE.Vector2((t+1)/b,m/d),v=new THREE.Vector2((t+1)/b,(m+1)/d),h=new THREE.Vector2(t/b,(m+1)/d),this.faces.push(new THREE.Face3(a,c,l)),this.faceVertexUvs[0].push([u,w,h]),this.faces.push(new THREE.Face3(c,
f,l)),this.faceVertexUvs[0].push([w.clone(),v,h.clone()]);this.computeFaceNormals();this.computeVertexNormals()};THREE.TubeGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.TubeGeometry.prototype.constructor=THREE.TubeGeometry;THREE.TubeGeometry.NoTaper=function(a){return 1};THREE.TubeGeometry.SinusoidalTaper=function(a){return Math.sin(Math.PI*a)};
THREE.TubeGeometry.FrenetFrames=function(a,b,c){var d=new THREE.Vector3,e=[],f=[],g=[],h=new THREE.Vector3,k=new THREE.Matrix4;b+=1;var l,m,p;this.tangents=e;this.normals=f;this.binormals=g;for(l=0;l<b;l++)m=l/(b-1),e[l]=a.getTangentAt(m),e[l].normalize();f[0]=new THREE.Vector3;g[0]=new THREE.Vector3;a=Number.MAX_VALUE;l=Math.abs(e[0].x);m=Math.abs(e[0].y);p=Math.abs(e[0].z);l<=a&&(a=l,d.set(1,0,0));m<=a&&(a=m,d.set(0,1,0));p<=a&&d.set(0,0,1);h.crossVectors(e[0],d).normalize();f[0].crossVectors(e[0],
h);g[0].crossVectors(e[0],f[0]);for(l=1;l<b;l++)f[l]=f[l-1].clone(),g[l]=g[l-1].clone(),h.crossVectors(e[l-1],e[l]),h.length()>Number.EPSILON&&(h.normalize(),d=Math.acos(THREE.Math.clamp(e[l-1].dot(e[l]),-1,1)),f[l].applyMatrix4(k.makeRotationAxis(h,d))),g[l].crossVectors(e[l],f[l]);if(c)for(d=Math.acos(THREE.Math.clamp(f[0].dot(f[b-1]),-1,1)),d/=b-1,0<e[0].dot(h.crossVectors(f[0],f[b-1]))&&(d=-d),l=1;l<b;l++)f[l].applyMatrix4(k.makeRotationAxis(e[l],d*l)),g[l].crossVectors(e[l],f[l])};
THREE.PolyhedronGeometry=function(a,b,c,d){function e(a){var b=a.normalize().clone();b.index=k.vertices.push(b)-1;var c=Math.atan2(a.z,-a.x)/2/Math.PI+.5;a=Math.atan2(-a.y,Math.sqrt(a.x*a.x+a.z*a.z))/Math.PI+.5;b.uv=new THREE.Vector2(c,1-a);return b}function f(a,b,c,d){d=new THREE.Face3(a.index,b.index,c.index,[a.clone(),b.clone(),c.clone()],void 0,d);k.faces.push(d);t.copy(a).add(b).add(c).divideScalar(3);d=Math.atan2(t.z,-t.x);k.faceVertexUvs[0].push([h(a.uv,a,d),h(b.uv,b,d),h(c.uv,c,d)])}function g(a,
b){for(var c=Math.pow(2,b),d=e(k.vertices[a.a]),g=e(k.vertices[a.b]),h=e(k.vertices[a.c]),l=[],m=a.materialIndex,n=0;n<=c;n++){l[n]=[];for(var p=e(d.clone().lerp(h,n/c)),q=e(g.clone().lerp(h,n/c)),s=c-n,t=0;t<=s;t++)l[n][t]=0===t&&n===c?p:e(p.clone().lerp(q,t/s))}for(n=0;n<c;n++)for(t=0;t<2*(c-n)-1;t++)d=Math.floor(t/2),0===t%2?f(l[n][d+1],l[n+1][d],l[n][d],m):f(l[n][d+1],l[n+1][d+1],l[n+1][d],m)}function h(a,b,c){0>c&&1===a.x&&(a=new THREE.Vector2(a.x-1,a.y));0===b.x&&0===b.z&&(a=new THREE.Vector2(c/
2/Math.PI+.5,a.y));return a.clone()}THREE.Geometry.call(this);this.type="PolyhedronGeometry";this.parameters={vertices:a,indices:b,radius:c,detail:d};c=c||1;d=d||0;for(var k=this,l=0,m=a.length;l<m;l+=3)e(new THREE.Vector3(a[l],a[l+1],a[l+2]));a=this.vertices;for(var p=[],n=l=0,m=b.length;l<m;l+=3,n++){var q=a[b[l]],s=a[b[l+1]],u=a[b[l+2]];p[n]=new THREE.Face3(q.index,s.index,u.index,[q.clone(),s.clone(),u.clone()],void 0,n)}for(var t=new THREE.Vector3,l=0,m=p.length;l<m;l++)g(p[l],d);l=0;for(m=this.faceVertexUvs[0].length;l<
m;l++)b=this.faceVertexUvs[0][l],d=b[0].x,a=b[1].x,p=b[2].x,n=Math.max(d,a,p),q=Math.min(d,a,p),.9<n&&.1>q&&(.2>d&&(b[0].x+=1),.2>a&&(b[1].x+=1),.2>p&&(b[2].x+=1));l=0;for(m=this.vertices.length;l<m;l++)this.vertices[l].multiplyScalar(c);this.mergeVertices();this.computeFaceNormals();this.boundingSphere=new THREE.Sphere(new THREE.Vector3,c)};THREE.PolyhedronGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.PolyhedronGeometry.prototype.constructor=THREE.PolyhedronGeometry;
THREE.DodecahedronGeometry=function(a,b){var c=(1+Math.sqrt(5))/2,d=1/c;THREE.PolyhedronGeometry.call(this,[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-d,-c,0,-d,c,0,d,-c,0,d,c,-d,-c,0,-d,c,0,d,-c,0,d,c,0,-c,0,-d,c,0,-d,-c,0,d,c,0,d],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,
12,14,1,14,5,1,5,9],a,b);this.type="DodecahedronGeometry";this.parameters={radius:a,detail:b}};THREE.DodecahedronGeometry.prototype=Object.create(THREE.PolyhedronGeometry.prototype);THREE.DodecahedronGeometry.prototype.constructor=THREE.DodecahedronGeometry;
THREE.IcosahedronGeometry=function(a,b){var c=(1+Math.sqrt(5))/2;THREE.PolyhedronGeometry.call(this,[-1,c,0,1,c,0,-1,-c,0,1,-c,0,0,-1,c,0,1,c,0,-1,-c,0,1,-c,c,0,-1,c,0,1,-c,0,-1,-c,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],a,b);this.type="IcosahedronGeometry";this.parameters={radius:a,detail:b}};THREE.IcosahedronGeometry.prototype=Object.create(THREE.PolyhedronGeometry.prototype);
THREE.IcosahedronGeometry.prototype.constructor=THREE.IcosahedronGeometry;THREE.OctahedronGeometry=function(a,b){THREE.PolyhedronGeometry.call(this,[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],a,b);this.type="OctahedronGeometry";this.parameters={radius:a,detail:b}};THREE.OctahedronGeometry.prototype=Object.create(THREE.PolyhedronGeometry.prototype);THREE.OctahedronGeometry.prototype.constructor=THREE.OctahedronGeometry;
THREE.TetrahedronGeometry=function(a,b){THREE.PolyhedronGeometry.call(this,[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],a,b);this.type="TetrahedronGeometry";this.parameters={radius:a,detail:b}};THREE.TetrahedronGeometry.prototype=Object.create(THREE.PolyhedronGeometry.prototype);THREE.TetrahedronGeometry.prototype.constructor=THREE.TetrahedronGeometry;
THREE.ParametricGeometry=function(a,b,c){THREE.Geometry.call(this);this.type="ParametricGeometry";this.parameters={func:a,slices:b,stacks:c};var d=this.vertices,e=this.faces,f=this.faceVertexUvs[0],g,h,k,l,m=b+1;for(g=0;g<=c;g++)for(l=g/c,h=0;h<=b;h++)k=h/b,k=a(k,l),d.push(k);var p,n,q,s;for(g=0;g<c;g++)for(h=0;h<b;h++)a=g*m+h,d=g*m+h+1,l=(g+1)*m+h+1,k=(g+1)*m+h,p=new THREE.Vector2(h/b,g/c),n=new THREE.Vector2((h+1)/b,g/c),q=new THREE.Vector2((h+1)/b,(g+1)/c),s=new THREE.Vector2(h/b,(g+1)/c),e.push(new THREE.Face3(a,
d,k)),f.push([p,n,s]),e.push(new THREE.Face3(d,l,k)),f.push([n.clone(),q,s.clone()]);this.computeFaceNormals();this.computeVertexNormals()};THREE.ParametricGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.ParametricGeometry.prototype.constructor=THREE.ParametricGeometry;
THREE.WireframeGeometry=function(a){function b(a,b){return a-b}THREE.BufferGeometry.call(this);var c=[0,0],d={},e=["a","b","c"];if(a instanceof THREE.Geometry){var f=a.vertices,g=a.faces,h=0,k=new Uint32Array(6*g.length);a=0;for(var l=g.length;a<l;a++)for(var m=g[a],p=0;3>p;p++){c[0]=m[e[p]];c[1]=m[e[(p+1)%3]];c.sort(b);var n=c.toString();void 0===d[n]&&(k[2*h]=c[0],k[2*h+1]=c[1],d[n]=!0,h++)}c=new Float32Array(6*h);a=0;for(l=h;a<l;a++)for(p=0;2>p;p++)d=f[k[2*a+p]],h=6*a+3*p,c[h+0]=d.x,c[h+1]=d.y,
c[h+2]=d.z;this.addAttribute("position",new THREE.BufferAttribute(c,3))}else if(a instanceof THREE.BufferGeometry){if(null!==a.index){l=a.index.array;f=a.attributes.position;e=a.groups;h=0;0===e.length&&a.addGroup(0,l.length);k=new Uint32Array(2*l.length);g=0;for(m=e.length;g<m;++g){a=e[g];p=a.start;n=a.count;a=p;for(var q=p+n;a<q;a+=3)for(p=0;3>p;p++)c[0]=l[a+p],c[1]=l[a+(p+1)%3],c.sort(b),n=c.toString(),void 0===d[n]&&(k[2*h]=c[0],k[2*h+1]=c[1],d[n]=!0,h++)}c=new Float32Array(6*h);a=0;for(l=h;a<
l;a++)for(p=0;2>p;p++)h=6*a+3*p,d=k[2*a+p],c[h+0]=f.getX(d),c[h+1]=f.getY(d),c[h+2]=f.getZ(d)}else for(f=a.attributes.position.array,h=f.length/3,k=h/3,c=new Float32Array(6*h),a=0,l=k;a<l;a++)for(p=0;3>p;p++)h=18*a+6*p,k=9*a+3*p,c[h+0]=f[k],c[h+1]=f[k+1],c[h+2]=f[k+2],d=9*a+(p+1)%3*3,c[h+3]=f[d],c[h+4]=f[d+1],c[h+5]=f[d+2];this.addAttribute("position",new THREE.BufferAttribute(c,3))}};THREE.WireframeGeometry.prototype=Object.create(THREE.BufferGeometry.prototype);
THREE.WireframeGeometry.prototype.constructor=THREE.WireframeGeometry;THREE.AxisHelper=function(a){a=a||1;var b=new Float32Array([0,0,0,a,0,0,0,0,0,0,a,0,0,0,0,0,0,a]),c=new Float32Array([1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1]);a=new THREE.BufferGeometry;a.addAttribute("position",new THREE.BufferAttribute(b,3));a.addAttribute("color",new THREE.BufferAttribute(c,3));b=new THREE.LineBasicMaterial({vertexColors:THREE.VertexColors});THREE.LineSegments.call(this,a,b)};THREE.AxisHelper.prototype=Object.create(THREE.LineSegments.prototype);
THREE.AxisHelper.prototype.constructor=THREE.AxisHelper;
THREE.ArrowHelper=function(){var a=new THREE.Geometry;a.vertices.push(new THREE.Vector3(0,0,0),new THREE.Vector3(0,1,0));var b=new THREE.CylinderGeometry(0,.5,1,5,1);b.translate(0,-.5,0);return function(c,d,e,f,g,h){THREE.Object3D.call(this);void 0===f&&(f=16776960);void 0===e&&(e=1);void 0===g&&(g=.2*e);void 0===h&&(h=.2*g);this.position.copy(d);this.line=new THREE.Line(a,new THREE.LineBasicMaterial({color:f}));this.line.matrixAutoUpdate=!1;this.add(this.line);this.cone=new THREE.Mesh(b,new THREE.MeshBasicMaterial({color:f}));
this.cone.matrixAutoUpdate=!1;this.add(this.cone);this.setDirection(c);this.setLength(e,g,h)}}();THREE.ArrowHelper.prototype=Object.create(THREE.Object3D.prototype);THREE.ArrowHelper.prototype.constructor=THREE.ArrowHelper;THREE.ArrowHelper.prototype.setDirection=function(){var a=new THREE.Vector3,b;return function(c){.99999<c.y?this.quaternion.set(0,0,0,1):-.99999>c.y?this.quaternion.set(1,0,0,0):(a.set(c.z,0,-c.x).normalize(),b=Math.acos(c.y),this.quaternion.setFromAxisAngle(a,b))}}();
THREE.ArrowHelper.prototype.setLength=function(a,b,c){void 0===b&&(b=.2*a);void 0===c&&(c=.2*b);this.line.scale.set(1,Math.max(0,a-b),1);this.line.updateMatrix();this.cone.scale.set(c,b,c);this.cone.position.y=a;this.cone.updateMatrix()};THREE.ArrowHelper.prototype.setColor=function(a){this.line.material.color.set(a);this.cone.material.color.set(a)};
THREE.BoxHelper=function(a){var b=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),c=new Float32Array(24),d=new THREE.BufferGeometry;d.setIndex(new THREE.BufferAttribute(b,1));d.addAttribute("position",new THREE.BufferAttribute(c,3));THREE.LineSegments.call(this,d,new THREE.LineBasicMaterial({color:16776960}));void 0!==a&&this.update(a)};THREE.BoxHelper.prototype=Object.create(THREE.LineSegments.prototype);THREE.BoxHelper.prototype.constructor=THREE.BoxHelper;
THREE.BoxHelper.prototype.update=function(){var a=new THREE.Box3;return function(b){a.setFromObject(b);if(!a.isEmpty()){b=a.min;var c=a.max,d=this.geometry.attributes.position,e=d.array;e[0]=c.x;e[1]=c.y;e[2]=c.z;e[3]=b.x;e[4]=c.y;e[5]=c.z;e[6]=b.x;e[7]=b.y;e[8]=c.z;e[9]=c.x;e[10]=b.y;e[11]=c.z;e[12]=c.x;e[13]=c.y;e[14]=b.z;e[15]=b.x;e[16]=c.y;e[17]=b.z;e[18]=b.x;e[19]=b.y;e[20]=b.z;e[21]=c.x;e[22]=b.y;e[23]=b.z;d.needsUpdate=!0;this.geometry.computeBoundingSphere()}}}();
THREE.BoundingBoxHelper=function(a,b){var c=void 0!==b?b:8947848;this.object=a;this.box=new THREE.Box3;THREE.Mesh.call(this,new THREE.BoxGeometry(1,1,1),new THREE.MeshBasicMaterial({color:c,wireframe:!0}))};THREE.BoundingBoxHelper.prototype=Object.create(THREE.Mesh.prototype);THREE.BoundingBoxHelper.prototype.constructor=THREE.BoundingBoxHelper;THREE.BoundingBoxHelper.prototype.update=function(){this.box.setFromObject(this.object);this.box.size(this.scale);this.box.center(this.position)};
THREE.CameraHelper=function(a){function b(a,b,d){c(a,d);c(b,d)}function c(a,b){d.vertices.push(new THREE.Vector3);d.colors.push(new THREE.Color(b));void 0===f[a]&&(f[a]=[]);f[a].push(d.vertices.length-1)}var d=new THREE.Geometry,e=new THREE.LineBasicMaterial({color:16777215,vertexColors:THREE.FaceColors}),f={};b("n1","n2",16755200);b("n2","n4",16755200);b("n4","n3",16755200);b("n3","n1",16755200);b("f1","f2",16755200);b("f2","f4",16755200);b("f4","f3",16755200);b("f3","f1",16755200);b("n1","f1",16755200);
b("n2","f2",16755200);b("n3","f3",16755200);b("n4","f4",16755200);b("p","n1",16711680);b("p","n2",16711680);b("p","n3",16711680);b("p","n4",16711680);b("u1","u2",43775);b("u2","u3",43775);b("u3","u1",43775);b("c","t",16777215);b("p","c",3355443);b("cn1","cn2",3355443);b("cn3","cn4",3355443);b("cf1","cf2",3355443);b("cf3","cf4",3355443);THREE.LineSegments.call(this,d,e);this.camera=a;this.camera.updateProjectionMatrix();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.pointMap=f;this.update()};
THREE.CameraHelper.prototype=Object.create(THREE.LineSegments.prototype);THREE.CameraHelper.prototype.constructor=THREE.CameraHelper;
THREE.CameraHelper.prototype.update=function(){function a(a,g,h,k){d.set(g,h,k).unproject(e);a=c[a];if(void 0!==a)for(g=0,h=a.length;g<h;g++)b.vertices[a[g]].copy(d)}var b,c,d=new THREE.Vector3,e=new THREE.Camera;return function(){b=this.geometry;c=this.pointMap;e.projectionMatrix.copy(this.camera.projectionMatrix);a("c",0,0,-1);a("t",0,0,1);a("n1",-1,-1,-1);a("n2",1,-1,-1);a("n3",-1,1,-1);a("n4",1,1,-1);a("f1",-1,-1,1);a("f2",1,-1,1);a("f3",-1,1,1);a("f4",1,1,1);a("u1",.7,1.1,-1);a("u2",-.7,1.1,
-1);a("u3",0,2,-1);a("cf1",-1,0,1);a("cf2",1,0,1);a("cf3",0,-1,1);a("cf4",0,1,1);a("cn1",-1,0,-1);a("cn2",1,0,-1);a("cn3",0,-1,-1);a("cn4",0,1,-1);b.verticesNeedUpdate=!0}}();
THREE.DirectionalLightHelper=function(a,b){THREE.Object3D.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;b=b||1;var c=new THREE.Geometry;c.vertices.push(new THREE.Vector3(-b,b,0),new THREE.Vector3(b,b,0),new THREE.Vector3(b,-b,0),new THREE.Vector3(-b,-b,0),new THREE.Vector3(-b,b,0));var d=new THREE.LineBasicMaterial({fog:!1});d.color.copy(this.light.color).multiplyScalar(this.light.intensity);this.lightPlane=new THREE.Line(c,d);this.add(this.lightPlane);
c=new THREE.Geometry;c.vertices.push(new THREE.Vector3,new THREE.Vector3);d=new THREE.LineBasicMaterial({fog:!1});d.color.copy(this.light.color).multiplyScalar(this.light.intensity);this.targetLine=new THREE.Line(c,d);this.add(this.targetLine);this.update()};THREE.DirectionalLightHelper.prototype=Object.create(THREE.Object3D.prototype);THREE.DirectionalLightHelper.prototype.constructor=THREE.DirectionalLightHelper;
THREE.DirectionalLightHelper.prototype.dispose=function(){this.lightPlane.geometry.dispose();this.lightPlane.material.dispose();this.targetLine.geometry.dispose();this.targetLine.material.dispose()};
THREE.DirectionalLightHelper.prototype.update=function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3;return function(){a.setFromMatrixPosition(this.light.matrixWorld);b.setFromMatrixPosition(this.light.target.matrixWorld);c.subVectors(b,a);this.lightPlane.lookAt(c);this.lightPlane.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);this.targetLine.geometry.vertices[1].copy(c);this.targetLine.geometry.verticesNeedUpdate=!0;this.targetLine.material.color.copy(this.lightPlane.material.color)}}();
THREE.EdgesHelper=function(a,b,c){b=void 0!==b?b:16777215;THREE.LineSegments.call(this,new THREE.EdgesGeometry(a.geometry,c),new THREE.LineBasicMaterial({color:b}));this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1};THREE.EdgesHelper.prototype=Object.create(THREE.LineSegments.prototype);THREE.EdgesHelper.prototype.constructor=THREE.EdgesHelper;
THREE.FaceNormalsHelper=function(a,b,c,d){this.object=a;this.size=void 0!==b?b:1;a=void 0!==c?c:16776960;d=void 0!==d?d:1;b=0;c=this.object.geometry;c instanceof THREE.Geometry?b=c.faces.length:console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.");c=new THREE.BufferGeometry;b=new THREE.Float32Attribute(6*b,3);c.addAttribute("position",b);THREE.LineSegments.call(this,c,new THREE.LineBasicMaterial({color:a,linewidth:d}));this.matrixAutoUpdate=
!1;this.update()};THREE.FaceNormalsHelper.prototype=Object.create(THREE.LineSegments.prototype);THREE.FaceNormalsHelper.prototype.constructor=THREE.FaceNormalsHelper;
THREE.FaceNormalsHelper.prototype.update=function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Matrix3;return function(){this.object.updateMatrixWorld(!0);c.getNormalMatrix(this.object.matrixWorld);for(var d=this.object.matrixWorld,e=this.geometry.attributes.position,f=this.object.geometry,g=f.vertices,f=f.faces,h=0,k=0,l=f.length;k<l;k++){var m=f[k],p=m.normal;a.copy(g[m.a]).add(g[m.b]).add(g[m.c]).divideScalar(3).applyMatrix4(d);b.copy(p).applyMatrix3(c).normalize().multiplyScalar(this.size).add(a);
e.setXYZ(h,a.x,a.y,a.z);h+=1;e.setXYZ(h,b.x,b.y,b.z);h+=1}e.needsUpdate=!0;return this}}();
THREE.GridHelper=function(a,b){var c=new THREE.Geometry,d=new THREE.LineBasicMaterial({vertexColors:THREE.VertexColors});this.color1=new THREE.Color(4473924);this.color2=new THREE.Color(8947848);for(var e=-a;e<=a;e+=b){c.vertices.push(new THREE.Vector3(-a,0,e),new THREE.Vector3(a,0,e),new THREE.Vector3(e,0,-a),new THREE.Vector3(e,0,a));var f=0===e?this.color1:this.color2;c.colors.push(f,f,f,f)}THREE.LineSegments.call(this,c,d)};THREE.GridHelper.prototype=Object.create(THREE.LineSegments.prototype);
THREE.GridHelper.prototype.constructor=THREE.GridHelper;THREE.GridHelper.prototype.setColors=function(a,b){this.color1.set(a);this.color2.set(b);this.geometry.colorsNeedUpdate=!0};
THREE.HemisphereLightHelper=function(a,b){THREE.Object3D.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.colors=[new THREE.Color,new THREE.Color];var c=new THREE.SphereGeometry(b,4,2);c.rotateX(-Math.PI/2);for(var d=0;8>d;d++)c.faces[d].color=this.colors[4>d?0:1];d=new THREE.MeshBasicMaterial({vertexColors:THREE.FaceColors,wireframe:!0});this.lightSphere=new THREE.Mesh(c,d);this.add(this.lightSphere);this.update()};
THREE.HemisphereLightHelper.prototype=Object.create(THREE.Object3D.prototype);THREE.HemisphereLightHelper.prototype.constructor=THREE.HemisphereLightHelper;THREE.HemisphereLightHelper.prototype.dispose=function(){this.lightSphere.geometry.dispose();this.lightSphere.material.dispose()};
THREE.HemisphereLightHelper.prototype.update=function(){var a=new THREE.Vector3;return function(){this.colors[0].copy(this.light.color).multiplyScalar(this.light.intensity);this.colors[1].copy(this.light.groundColor).multiplyScalar(this.light.intensity);this.lightSphere.lookAt(a.setFromMatrixPosition(this.light.matrixWorld).negate());this.lightSphere.geometry.colorsNeedUpdate=!0}}();
THREE.PointLightHelper=function(a,b){this.light=a;this.light.updateMatrixWorld();var c=new THREE.SphereGeometry(b,4,2),d=new THREE.MeshBasicMaterial({wireframe:!0,fog:!1});d.color.copy(this.light.color).multiplyScalar(this.light.intensity);THREE.Mesh.call(this,c,d);this.matrix=this.light.matrixWorld;this.matrixAutoUpdate=!1};THREE.PointLightHelper.prototype=Object.create(THREE.Mesh.prototype);THREE.PointLightHelper.prototype.constructor=THREE.PointLightHelper;
THREE.PointLightHelper.prototype.dispose=function(){this.geometry.dispose();this.material.dispose()};THREE.PointLightHelper.prototype.update=function(){this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)};
THREE.SkeletonHelper=function(a){this.bones=this.getBoneList(a);for(var b=new THREE.Geometry,c=0;c<this.bones.length;c++)this.bones[c].parent instanceof THREE.Bone&&(b.vertices.push(new THREE.Vector3),b.vertices.push(new THREE.Vector3),b.colors.push(new THREE.Color(0,0,1)),b.colors.push(new THREE.Color(0,1,0)));b.dynamic=!0;c=new THREE.LineBasicMaterial({vertexColors:THREE.VertexColors,depthTest:!1,depthWrite:!1,transparent:!0});THREE.LineSegments.call(this,b,c);this.root=a;this.matrix=a.matrixWorld;
this.matrixAutoUpdate=!1;this.update()};THREE.SkeletonHelper.prototype=Object.create(THREE.LineSegments.prototype);THREE.SkeletonHelper.prototype.constructor=THREE.SkeletonHelper;THREE.SkeletonHelper.prototype.getBoneList=function(a){var b=[];a instanceof THREE.Bone&&b.push(a);for(var c=0;c<a.children.length;c++)b.push.apply(b,this.getBoneList(a.children[c]));return b};
THREE.SkeletonHelper.prototype.update=function(){for(var a=this.geometry,b=(new THREE.Matrix4).getInverse(this.root.matrixWorld),c=new THREE.Matrix4,d=0,e=0;e<this.bones.length;e++){var f=this.bones[e];f.parent instanceof THREE.Bone&&(c.multiplyMatrices(b,f.matrixWorld),a.vertices[d].setFromMatrixPosition(c),c.multiplyMatrices(b,f.parent.matrixWorld),a.vertices[d+1].setFromMatrixPosition(c),d+=2)}a.verticesNeedUpdate=!0;a.computeBoundingSphere()};
THREE.SpotLightHelper=function(a){THREE.Object3D.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;a=new THREE.CylinderGeometry(0,1,1,8,1,!0);a.translate(0,-.5,0);a.rotateX(-Math.PI/2);var b=new THREE.MeshBasicMaterial({wireframe:!0,fog:!1});this.cone=new THREE.Mesh(a,b);this.add(this.cone);this.update()};THREE.SpotLightHelper.prototype=Object.create(THREE.Object3D.prototype);THREE.SpotLightHelper.prototype.constructor=THREE.SpotLightHelper;
THREE.SpotLightHelper.prototype.dispose=function(){this.cone.geometry.dispose();this.cone.material.dispose()};THREE.SpotLightHelper.prototype.update=function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(){var c=this.light.distance?this.light.distance:1E4,d=c*Math.tan(this.light.angle);this.cone.scale.set(d,d,c);a.setFromMatrixPosition(this.light.matrixWorld);b.setFromMatrixPosition(this.light.target.matrixWorld);this.cone.lookAt(b.sub(a));this.cone.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)}}();
THREE.VertexNormalsHelper=function(a,b,c,d){this.object=a;this.size=void 0!==b?b:1;a=void 0!==c?c:16711680;d=void 0!==d?d:1;b=0;c=this.object.geometry;c instanceof THREE.Geometry?b=3*c.faces.length:c instanceof THREE.BufferGeometry&&(b=c.attributes.normal.count);c=new THREE.BufferGeometry;b=new THREE.Float32Attribute(6*b,3);c.addAttribute("position",b);THREE.LineSegments.call(this,c,new THREE.LineBasicMaterial({color:a,linewidth:d}));this.matrixAutoUpdate=!1;this.update()};
THREE.VertexNormalsHelper.prototype=Object.create(THREE.LineSegments.prototype);THREE.VertexNormalsHelper.prototype.constructor=THREE.VertexNormalsHelper;
THREE.VertexNormalsHelper.prototype.update=function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Matrix3;return function(){var d=["a","b","c"];this.object.updateMatrixWorld(!0);c.getNormalMatrix(this.object.matrixWorld);var e=this.object.matrixWorld,f=this.geometry.attributes.position,g=this.object.geometry;if(g instanceof THREE.Geometry)for(var h=g.vertices,k=g.faces,l=g=0,m=k.length;l<m;l++)for(var p=k[l],n=0,q=p.vertexNormals.length;n<q;n++){var s=p.vertexNormals[n];a.copy(h[p[d[n]]]).applyMatrix4(e);
b.copy(s).applyMatrix3(c).normalize().multiplyScalar(this.size).add(a);f.setXYZ(g,a.x,a.y,a.z);g+=1;f.setXYZ(g,b.x,b.y,b.z);g+=1}else if(g instanceof THREE.BufferGeometry)for(d=g.attributes.position,h=g.attributes.normal,n=g=0,q=d.count;n<q;n++)a.set(d.getX(n),d.getY(n),d.getZ(n)).applyMatrix4(e),b.set(h.getX(n),h.getY(n),h.getZ(n)),b.applyMatrix3(c).normalize().multiplyScalar(this.size).add(a),f.setXYZ(g,a.x,a.y,a.z),g+=1,f.setXYZ(g,b.x,b.y,b.z),g+=1;f.needsUpdate=!0;return this}}();
THREE.WireframeHelper=function(a,b){var c=void 0!==b?b:16777215;THREE.LineSegments.call(this,new THREE.WireframeGeometry(a.geometry),new THREE.LineBasicMaterial({color:c}));this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1};THREE.WireframeHelper.prototype=Object.create(THREE.LineSegments.prototype);THREE.WireframeHelper.prototype.constructor=THREE.WireframeHelper;THREE.ImmediateRenderObject=function(a){THREE.Object3D.call(this);this.material=a;this.render=function(a){}};
THREE.ImmediateRenderObject.prototype=Object.create(THREE.Object3D.prototype);THREE.ImmediateRenderObject.prototype.constructor=THREE.ImmediateRenderObject;THREE.MorphBlendMesh=function(a,b){THREE.Mesh.call(this,a,b);this.animationsMap={};this.animationsList=[];var c=this.geometry.morphTargets.length;this.createAnimation("__default",0,c-1,c/1);this.setAnimationWeight("__default",1)};THREE.MorphBlendMesh.prototype=Object.create(THREE.Mesh.prototype);THREE.MorphBlendMesh.prototype.constructor=THREE.MorphBlendMesh;
THREE.MorphBlendMesh.prototype.createAnimation=function(a,b,c,d){b={start:b,end:c,length:c-b+1,fps:d,duration:(c-b)/d,lastFrame:0,currentFrame:0,active:!1,time:0,direction:1,weight:1,directionBackwards:!1,mirroredLoop:!1};this.animationsMap[a]=b;this.animationsList.push(b)};
THREE.MorphBlendMesh.prototype.autoCreateAnimations=function(a){for(var b=/([a-z]+)_?(\d+)/i,c,d={},e=this.geometry,f=0,g=e.morphTargets.length;f<g;f++){var h=e.morphTargets[f].name.match(b);if(h&&1<h.length){var k=h[1];d[k]||(d[k]={start:Infinity,end:-Infinity});h=d[k];f<h.start&&(h.start=f);f>h.end&&(h.end=f);c||(c=k)}}for(k in d)h=d[k],this.createAnimation(k,h.start,h.end,a);this.firstAnimation=c};
THREE.MorphBlendMesh.prototype.setAnimationDirectionForward=function(a){if(a=this.animationsMap[a])a.direction=1,a.directionBackwards=!1};THREE.MorphBlendMesh.prototype.setAnimationDirectionBackward=function(a){if(a=this.animationsMap[a])a.direction=-1,a.directionBackwards=!0};THREE.MorphBlendMesh.prototype.setAnimationFPS=function(a,b){var c=this.animationsMap[a];c&&(c.fps=b,c.duration=(c.end-c.start)/c.fps)};
THREE.MorphBlendMesh.prototype.setAnimationDuration=function(a,b){var c=this.animationsMap[a];c&&(c.duration=b,c.fps=(c.end-c.start)/c.duration)};THREE.MorphBlendMesh.prototype.setAnimationWeight=function(a,b){var c=this.animationsMap[a];c&&(c.weight=b)};THREE.MorphBlendMesh.prototype.setAnimationTime=function(a,b){var c=this.animationsMap[a];c&&(c.time=b)};THREE.MorphBlendMesh.prototype.getAnimationTime=function(a){var b=0;if(a=this.animationsMap[a])b=a.time;return b};
THREE.MorphBlendMesh.prototype.getAnimationDuration=function(a){var b=-1;if(a=this.animationsMap[a])b=a.duration;return b};THREE.MorphBlendMesh.prototype.playAnimation=function(a){var b=this.animationsMap[a];b?(b.time=0,b.active=!0):console.warn("THREE.MorphBlendMesh: animation["+a+"] undefined in .playAnimation()")};THREE.MorphBlendMesh.prototype.stopAnimation=function(a){if(a=this.animationsMap[a])a.active=!1};
THREE.MorphBlendMesh.prototype.update=function(a){for(var b=0,c=this.animationsList.length;b<c;b++){var d=this.animationsList[b];if(d.active){var e=d.duration/d.length;d.time+=d.direction*a;if(d.mirroredLoop){if(d.time>d.duration||0>d.time)d.direction*=-1,d.time>d.duration&&(d.time=d.duration,d.directionBackwards=!0),0>d.time&&(d.time=0,d.directionBackwards=!1)}else d.time%=d.duration,0>d.time&&(d.time+=d.duration);var f=d.start+THREE.Math.clamp(Math.floor(d.time/e),0,d.length-1),g=d.weight;f!==d.currentFrame&&
(this.morphTargetInfluences[d.lastFrame]=0,this.morphTargetInfluences[d.currentFrame]=1*g,this.morphTargetInfluences[f]=0,d.lastFrame=d.currentFrame,d.currentFrame=f);e=d.time%e/e;d.directionBackwards&&(e=1-e);d.currentFrame!==d.lastFrame?(this.morphTargetInfluences[d.currentFrame]=e*g,this.morphTargetInfluences[d.lastFrame]=(1-e)*g):this.morphTargetInfluences[d.currentFrame]=g}}};

/**
 * @author alteredq / http://alteredqualia.com/
 *
 * Full-screen textured quad shader
 */

THREE.CopyShader = {

	uniforms: {

		"tDiffuse": { type: "t", value: null },
		"opacity":  { type: "f", value: 1.0 }

	},

	vertexShader: [

		"varying vec2 vUv;",

		"void main() {",

			"vUv = uv;",
			"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

		"}"

	].join( "\n" ),

	fragmentShader: [

		"uniform float opacity;",

		"uniform sampler2D tDiffuse;",

		"varying vec2 vUv;",

		"void main() {",

			"vec4 texel = texture2D( tDiffuse, vUv );",
			"gl_FragColor = opacity * texel;",

		"}"

	].join( "\n" )

};

/**
 * @author alteredq / http://alteredqualia.com/
 *
 * Dot screen shader
 * based on glfx.js sepia shader
 * https://github.com/evanw/glfx.js
 */

THREE.DotScreenShader = {

	uniforms: {

		"tDiffuse": { type: "t", value: null },
		"tSize":    { type: "v2", value: new THREE.Vector2( 256, 256 ) },
		"center":   { type: "v2", value: new THREE.Vector2( 0.5, 0.5 ) },
		"angle":    { type: "f", value: 1.57 },
		"scale":    { type: "f", value: 1.0 }

	},

	vertexShader: [

		"varying vec2 vUv;",

		"void main() {",

			"vUv = uv;",
			"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

		"}"

	].join( "\n" ),

	fragmentShader: [

		"uniform vec2 center;",
		"uniform float angle;",
		"uniform float scale;",
		"uniform vec2 tSize;",

		"uniform sampler2D tDiffuse;",

		"varying vec2 vUv;",

		"float pattern() {",

			"float s = sin( angle ), c = cos( angle );",

			"vec2 tex = vUv * tSize - center;",
			"vec2 point = vec2( c * tex.x - s * tex.y, s * tex.x + c * tex.y ) * scale;",

			"return ( sin( point.x ) * sin( point.y ) ) * 4.0;",

		"}",

		"void main() {",

			"vec4 color = texture2D( tDiffuse, vUv );",

			"float average = ( color.r + color.g + color.b ) / 3.0;",

			"gl_FragColor = vec4( vec3( average * 10.0 - 5.0 + pattern() ), color.a );",

		"}"

	].join( "\n" )

};

/**
 * @author felixturner / http://airtight.cc/
 *
 * Mirror Shader
 * Copies half the input to the other half
 *
 * side: side of input to mirror (0 = left, 1 = right, 2 = top, 3 = bottom)
 */

THREE.MirrorShader = {

	uniforms: {

		"tDiffuse": { type: "t", value: null },
		"side":     { type: "i", value: 1 }

	},

	vertexShader: [

		"varying vec2 vUv;",

		"void main() {",

			"vUv = uv;",
			"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

		"}"

	].join( "\n" ),

	fragmentShader: [

		"uniform sampler2D tDiffuse;",
		"uniform int side;",
		
		"varying vec2 vUv;",

		"void main() {",

			"vec2 p = vUv;",
			"if (side == 0){",
				"if (p.x > 0.5) p.x = 1.0 - p.x;",
			"}else if (side == 1){",
				"if (p.x < 0.5) p.x = 1.0 - p.x;",
			"}else if (side == 2){",
				"if (p.y < 0.5) p.y = 1.0 - p.y;",
			"}else if (side == 3){",
				"if (p.y > 0.5) p.y = 1.0 - p.y;",
			"} ",
			"vec4 color = texture2D(tDiffuse, p);",
			"gl_FragColor = color;",

		"}"

	].join( "\n" )

};
/**
 * @author qiao / https://github.com/qiao
 * @author mrdoob / http://mrdoob.com
 * @author alteredq / http://alteredqualia.com/
 * @author WestLangley / http://github.com/WestLangley
 * @author erich666 / http://erichaines.com
 */
/*global THREE, console */

// This set of controls performs orbiting, dollying (zooming), and panning. It maintains
// the "up" direction as +Y, unlike the TrackballControls. Touch on tablet and phones is
// supported.
//
//    Orbit - left mouse / touch: one finger move
//    Zoom - middle mouse, or mousewheel / touch: two finger spread or squish
//    Pan - right mouse, or arrow keys / touch: three finter swipe
//
// This is a drop-in replacement for (most) TrackballControls used in examples.
// That is, include this js file and wherever you see:
//    	controls = new THREE.TrackballControls( camera );
//      controls.target.z = 150;
// Simple substitute "OrbitControls" and the control should work as-is.

THREE.OrbitControls = function ( object, domElement ) {

	this.object = object;
	this.domElement = ( domElement !== undefined ) ? domElement : document;

	// API

	// Set to false to disable this control
	this.enabled = true;

	// "target" sets the location of focus, where the control orbits around
	// and where it pans with respect to.
	this.target = new THREE.Vector3();
	// center is old, deprecated; use "target" instead
	this.center = this.target;

	// This option actually enables dollying in and out; left as "zoom" for
	// backwards compatibility
	this.noZoom = false;
	this.zoomSpeed = 1.0;
	// Limits to how far you can dolly in and out
	this.minDistance = 0;
	this.maxDistance = Infinity;

	// Set to true to disable this control
	this.noRotate = false;
	this.rotateSpeed = 1.0;

	// Set to true to disable this control
	this.noPan = false;
	this.keyPanSpeed = 7.0;	// pixels moved per arrow key push

	// Set to true to automatically rotate around the target
	this.autoRotate = false;
	this.autoRotateSpeed = 2.0; // 30 seconds per round when fps is 60

	// How far you can orbit vertically, upper and lower limits.
	// Range is 0 to Math.PI radians.
	this.minPolarAngle = 0; // radians
	this.maxPolarAngle = Math.PI; // radians

	// Set to true to disable use of the keys
	this.noKeys = false;
	// The four arrow keys
	this.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 };

	////////////
	// internals

	var scope = this;

	var EPS = 0.000001;

	var rotateStart = new THREE.Vector2();
	var rotateEnd = new THREE.Vector2();
	var rotateDelta = new THREE.Vector2();

	var panStart = new THREE.Vector2();
	var panEnd = new THREE.Vector2();
	var panDelta = new THREE.Vector2();

	var dollyStart = new THREE.Vector2();
	var dollyEnd = new THREE.Vector2();
	var dollyDelta = new THREE.Vector2();

	var phiDelta = 0;
	var thetaDelta = 0;
	var scale = 1;
	var pan = new THREE.Vector3();

	var lastPosition = new THREE.Vector3();

	var STATE = { NONE : -1, ROTATE : 0, DOLLY : 1, PAN : 2, TOUCH_ROTATE : 3, TOUCH_DOLLY : 4, TOUCH_PAN : 5 };
	var state = STATE.NONE;

	// events

	var changeEvent = { type: 'change' };


	this.rotateLeft = function ( angle ) {

		if ( angle === undefined ) {

			angle = getAutoRotationAngle();

		}

		thetaDelta -= angle;

	};

	this.rotateUp = function ( angle ) {

		if ( angle === undefined ) {

			angle = getAutoRotationAngle();

		}

		phiDelta -= angle;

	};

	// pass in distance in world space to move left
	this.panLeft = function ( distance ) {

		var panOffset = new THREE.Vector3();
		var te = this.object.matrix.elements;
		// get X column of matrix
		panOffset.set( te[0], te[1], te[2] );
		panOffset.multiplyScalar(-distance);

		pan.add( panOffset );

	};

	// pass in distance in world space to move up
	this.panUp = function ( distance ) {

		var panOffset = new THREE.Vector3();
		var te = this.object.matrix.elements;
		// get Y column of matrix
		panOffset.set( te[4], te[5], te[6] );
		panOffset.multiplyScalar(distance);

		pan.add( panOffset );
	};

	// main entry point; pass in Vector2 of change desired in pixel space,
	// right and down are positive
	this.pan = function ( delta ) {

		var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

		if ( scope.object.fov !== undefined ) {

			// perspective
			var position = scope.object.position;
			var offset = position.clone().sub( scope.target );
			var targetDistance = offset.length();

			// half of the fov is center to top of screen
			targetDistance *= Math.tan( (scope.object.fov/2) * Math.PI / 180.0 );
			// we actually don't use screenWidth, since perspective camera is fixed to screen height
			scope.panLeft( 2 * delta.x * targetDistance / element.clientHeight );
			scope.panUp( 2 * delta.y * targetDistance / element.clientHeight );

		} else if ( scope.object.top !== undefined ) {

			// orthographic
			scope.panLeft( delta.x * (scope.object.right - scope.object.left) / element.clientWidth );
			scope.panUp( delta.y * (scope.object.top - scope.object.bottom) / element.clientHeight );

		} else {

			// camera neither orthographic or perspective - warn user
			console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.' );

		}

	};

	this.dollyIn = function ( dollyScale ) {

		if ( dollyScale === undefined ) {

			dollyScale = getZoomScale();

		}

		scale /= dollyScale;

	};

	this.dollyOut = function ( dollyScale ) {

		if ( dollyScale === undefined ) {

			dollyScale = getZoomScale();

		}

		scale *= dollyScale;

	};

	this.update = function () {

		var position = this.object.position;
		var offset = position.clone().sub( this.target );

		// angle from z-axis around y-axis

		var theta = Math.atan2( offset.x, offset.z );

		// angle from y-axis

		var phi = Math.atan2( Math.sqrt( offset.x * offset.x + offset.z * offset.z ), offset.y );

		if ( this.autoRotate ) {

			this.rotateLeft( getAutoRotationAngle() );

		}

		theta += thetaDelta;
		phi += phiDelta;

		// restrict phi to be between desired limits
		phi = Math.max( this.minPolarAngle, Math.min( this.maxPolarAngle, phi ) );

		// restrict phi to be betwee EPS and PI-EPS
		phi = Math.max( EPS, Math.min( Math.PI - EPS, phi ) );

		var radius = offset.length() * scale;

		// restrict radius to be between desired limits
		radius = Math.max( this.minDistance, Math.min( this.maxDistance, radius ) );

		// move target to panned location
		this.target.add( pan );

		offset.x = radius * Math.sin( phi ) * Math.sin( theta );
		offset.y = radius * Math.cos( phi );
		offset.z = radius * Math.sin( phi ) * Math.cos( theta );

		position.copy( this.target ).add( offset );

		this.object.lookAt( this.target );

		thetaDelta = 0;
		phiDelta = 0;
		scale = 1;
		pan.set(0,0,0);

		if ( lastPosition.distanceTo( this.object.position ) > 0 ) {

			this.dispatchEvent( changeEvent );

			lastPosition.copy( this.object.position );

		}

	};


	function getAutoRotationAngle() {

		return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;

	}

	function getZoomScale() {

		return Math.pow( 0.95, scope.zoomSpeed );

	}

	function onMouseDown( event ) {

		if ( scope.enabled === false ) { return; }
		event.preventDefault();

		if ( event.button === 0 ) {
			if ( scope.noRotate === true ) { return; }

			state = STATE.ROTATE;

			rotateStart.set( event.clientX, event.clientY );

		} else if ( event.button === 1 ) {
			if ( scope.noZoom === true ) { return; }

			state = STATE.DOLLY;

			dollyStart.set( event.clientX, event.clientY );

		} else if ( event.button === 2 ) {
			if ( scope.noPan === true ) { return; }

			state = STATE.PAN;

			panStart.set( event.clientX, event.clientY );

		}

		// Greggman fix: https://github.com/greggman/three.js/commit/fde9f9917d6d8381f06bf22cdff766029d1761be
		scope.domElement.addEventListener( 'mousemove', onMouseMove, false );
		scope.domElement.addEventListener( 'mouseup', onMouseUp, false );

	}

	function onMouseMove( event ) {

		if ( scope.enabled === false ) return;

		event.preventDefault();

		var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

		if ( state === STATE.ROTATE ) {

			if ( scope.noRotate === true ) return;

			rotateEnd.set( event.clientX, event.clientY );
			rotateDelta.subVectors( rotateEnd, rotateStart );

			// rotating across whole screen goes 360 degrees around
			scope.rotateLeft( 2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed );
			// rotating up and down along whole screen attempts to go 360, but limited to 180
			scope.rotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed );

			rotateStart.copy( rotateEnd );

		} else if ( state === STATE.DOLLY ) {

			if ( scope.noZoom === true ) return;

			dollyEnd.set( event.clientX, event.clientY );
			dollyDelta.subVectors( dollyEnd, dollyStart );

			if ( dollyDelta.y > 0 ) {

				scope.dollyIn();

			} else {

				scope.dollyOut();

			}

			dollyStart.copy( dollyEnd );

		} else if ( state === STATE.PAN ) {

			if ( scope.noPan === true ) return;

			panEnd.set( event.clientX, event.clientY );
			panDelta.subVectors( panEnd, panStart );

			scope.pan( panDelta );

			panStart.copy( panEnd );

		}

		// Greggman fix: https://github.com/greggman/three.js/commit/fde9f9917d6d8381f06bf22cdff766029d1761be
		scope.update();

	}

	function onMouseUp( /* event */ ) {

		if ( scope.enabled === false ) return;

		// Greggman fix: https://github.com/greggman/three.js/commit/fde9f9917d6d8381f06bf22cdff766029d1761be
		scope.domElement.removeEventListener( 'mousemove', onMouseMove, false );
		scope.domElement.removeEventListener( 'mouseup', onMouseUp, false );

		state = STATE.NONE;

	}

	function onMouseWheel( event ) {

		if ( scope.enabled === false || scope.noZoom === true ) return;

		var delta = 0;

		if ( event.wheelDelta ) { // WebKit / Opera / Explorer 9

			delta = event.wheelDelta;

		} else if ( event.detail ) { // Firefox

			delta = - event.detail;

		}

		if ( delta > 0 ) {

			scope.dollyOut();

		} else {

			scope.dollyIn();

		}

	}

	function onKeyDown( event ) {

		if ( scope.enabled === false ) { return; }
		if ( scope.noKeys === true ) { return; }
		if ( scope.noPan === true ) { return; }

		// pan a pixel - I guess for precise positioning?
		// Greggman fix: https://github.com/greggman/three.js/commit/fde9f9917d6d8381f06bf22cdff766029d1761be
		var needUpdate = false;

		switch ( event.keyCode ) {

			case scope.keys.UP:
				scope.pan( new THREE.Vector2( 0, scope.keyPanSpeed ) );
				needUpdate = true;
				break;
			case scope.keys.BOTTOM:
				scope.pan( new THREE.Vector2( 0, -scope.keyPanSpeed ) );
				needUpdate = true;
				break;
			case scope.keys.LEFT:
				scope.pan( new THREE.Vector2( scope.keyPanSpeed, 0 ) );
				needUpdate = true;
				break;
			case scope.keys.RIGHT:
				scope.pan( new THREE.Vector2( -scope.keyPanSpeed, 0 ) );
				needUpdate = true;
				break;
		}

		// Greggman fix: https://github.com/greggman/three.js/commit/fde9f9917d6d8381f06bf22cdff766029d1761be
		if ( needUpdate ) {

			scope.update();

		}

	}

	function touchstart( event ) {

		if ( scope.enabled === false ) { return; }

		switch ( event.touches.length ) {

			case 1:	// one-fingered touch: rotate
				if ( scope.noRotate === true ) { return; }

				state = STATE.TOUCH_ROTATE;

				rotateStart.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
				break;

			case 2:	// two-fingered touch: dolly
				if ( scope.noZoom === true ) { return; }

				state = STATE.TOUCH_DOLLY;

				var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
				var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;
				var distance = Math.sqrt( dx * dx + dy * dy );
				dollyStart.set( 0, distance );
				break;

			case 3: // three-fingered touch: pan
				if ( scope.noPan === true ) { return; }

				state = STATE.TOUCH_PAN;

				panStart.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
				break;

			default:
				state = STATE.NONE;

		}
	}

	function touchmove( event ) {

		if ( scope.enabled === false ) { return; }

		event.preventDefault();
		event.stopPropagation();

		var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

		switch ( event.touches.length ) {

			case 1: // one-fingered touch: rotate
				if ( scope.noRotate === true ) { return; }
				if ( state !== STATE.TOUCH_ROTATE ) { return; }

				rotateEnd.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
				rotateDelta.subVectors( rotateEnd, rotateStart );

				// rotating across whole screen goes 360 degrees around
				scope.rotateLeft( 2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed );
				// rotating up and down along whole screen attempts to go 360, but limited to 180
				scope.rotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed );

				rotateStart.copy( rotateEnd );
				break;

			case 2: // two-fingered touch: dolly
				if ( scope.noZoom === true ) { return; }
				if ( state !== STATE.TOUCH_DOLLY ) { return; }

				var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
				var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;
				var distance = Math.sqrt( dx * dx + dy * dy );

				dollyEnd.set( 0, distance );
				dollyDelta.subVectors( dollyEnd, dollyStart );

				if ( dollyDelta.y > 0 ) {

					scope.dollyOut();

				} else {

					scope.dollyIn();

				}

				dollyStart.copy( dollyEnd );
				break;

			case 3: // three-fingered touch: pan
				if ( scope.noPan === true ) { return; }
				if ( state !== STATE.TOUCH_PAN ) { return; }

				panEnd.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
				panDelta.subVectors( panEnd, panStart );

				scope.pan( panDelta );

				panStart.copy( panEnd );
				break;

			default:
				state = STATE.NONE;

		}

	}

	function touchend( /* event */ ) {

		if ( scope.enabled === false ) { return; }

		state = STATE.NONE;
	}

	this.domElement.addEventListener( 'contextmenu', function ( event ) { event.preventDefault(); }, false );
	this.domElement.addEventListener( 'mousedown', onMouseDown, false );
	this.domElement.addEventListener( 'mousewheel', onMouseWheel, false );
	this.domElement.addEventListener( 'DOMMouseScroll', onMouseWheel, false ); // firefox

	this.domElement.addEventListener( 'keydown', onKeyDown, false );

	this.domElement.addEventListener( 'touchstart', touchstart, false );
	this.domElement.addEventListener( 'touchend', touchend, false );
	this.domElement.addEventListener( 'touchmove', touchmove, false );

};

THREE.OrbitControls.prototype = Object.create( THREE.EventDispatcher.prototype );

/**
 * @author miibond
 * Generate a texture that represents the luminosity of the current scene, adapted over time
 * to simulate the optic nerve responding to the amount of light it is receiving.
 * Based on a GDC2007 presentation by Wolfgang Engel titled "Post-Processing Pipeline"
 *
 * Full-screen tone-mapping shader based on http://www.graphics.cornell.edu/~jaf/publications/sig02_paper.pdf
 */

THREE.AdaptiveToneMappingPass = function ( adaptive, resolution ) {

	this.resolution = ( resolution !== undefined ) ? resolution : 256;
	this.needsInit = true;
	this.adaptive = adaptive !== undefined ? !! adaptive : true;

	this.luminanceRT = null;
	this.previousLuminanceRT = null;
	this.currentLuminanceRT = null;

	if ( THREE.CopyShader === undefined )
		console.error( "THREE.AdaptiveToneMappingPass relies on THREE.CopyShader" );

	var copyShader = THREE.CopyShader;

	this.copyUniforms = THREE.UniformsUtils.clone( copyShader.uniforms );

	this.materialCopy = new THREE.ShaderMaterial( {

		uniforms: this.copyUniforms,
		vertexShader: copyShader.vertexShader,
		fragmentShader: copyShader.fragmentShader,
		blending: THREE.NoBlending,
		depthTest: false

	} );

	if ( THREE.LuminosityShader === undefined )
		console.error( "THREE.AdaptiveToneMappingPass relies on THREE.LuminosityShader" );

	this.materialLuminance = new THREE.ShaderMaterial( {

		uniforms: THREE.UniformsUtils.clone( THREE.LuminosityShader.uniforms ),
		vertexShader: THREE.LuminosityShader.vertexShader,
		fragmentShader: THREE.LuminosityShader.fragmentShader,
		blending: THREE.NoBlending,
	} );

	this.adaptLuminanceShader = {
		defines: {
			"MIP_LEVEL_1X1" : ( Math.log( this.resolution ) / Math.log( 2.0 ) ).toFixed( 1 ),
		},
		uniforms: {
			"lastLum": { type: "t", value: null },
			"currentLum": { type: "t", value: null },
			"delta": { type: 'f', value: 0.016 },
			"tau": { type: 'f', value: 1.0 }
		},
		vertexShader: [
			"varying vec2 vUv;",

			"void main() {",

				"vUv = uv;",
				"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

			"}"
		].join( '\n' ),
		fragmentShader: [
			"varying vec2 vUv;",

			"uniform sampler2D lastLum;",
			"uniform sampler2D currentLum;",
			"uniform float delta;",
			"uniform float tau;",

			"void main() {",

				"vec4 lastLum = texture2D( lastLum, vUv, MIP_LEVEL_1X1 );",
				"vec4 currentLum = texture2D( currentLum, vUv, MIP_LEVEL_1X1 );",

				"float fLastLum = lastLum.r;",
				"float fCurrentLum = currentLum.r;",

				//The adaption seems to work better in extreme lighting differences
				//if the input luminance is squared.
				"fCurrentLum *= fCurrentLum;",

				// Adapt the luminance using Pattanaik's technique
				"float fAdaptedLum = fLastLum + (fCurrentLum - fLastLum) * (1.0 - exp(-delta * tau));",
				// "fAdaptedLum = sqrt(fAdaptedLum);",
				"gl_FragColor = vec4( vec3( fAdaptedLum ), 1.0 );",
			"}",
		].join( '\n' )
	};

	this.materialAdaptiveLum = new THREE.ShaderMaterial( {

		uniforms: THREE.UniformsUtils.clone( this.adaptLuminanceShader.uniforms ),
		vertexShader: this.adaptLuminanceShader.vertexShader,
		fragmentShader: this.adaptLuminanceShader.fragmentShader,
		defines: this.adaptLuminanceShader.defines,
		blending: THREE.NoBlending
	} );

	if ( THREE.ToneMapShader === undefined )
		console.error( "THREE.AdaptiveToneMappingPass relies on THREE.ToneMapShader" );

	this.materialToneMap = new THREE.ShaderMaterial( {

		uniforms: THREE.UniformsUtils.clone( THREE.ToneMapShader.uniforms ),
		vertexShader: THREE.ToneMapShader.vertexShader,
		fragmentShader: THREE.ToneMapShader.fragmentShader,
		blending: THREE.NoBlending
	} );

	this.enabled = true;
	this.needsSwap = true;
	this.clear = false;

	this.camera = new THREE.OrthographicCamera( - 1, 1, 1, - 1, 0, 1 );
	this.scene  = new THREE.Scene();

	this.quad = new THREE.Mesh( new THREE.PlaneBufferGeometry( 2, 2 ), null );
	this.scene.add( this.quad );

};

THREE.AdaptiveToneMappingPass.prototype = {

	render: function ( renderer, writeBuffer, readBuffer, delta, maskActive ) {

		if ( this.needsInit ) {

			this.reset( renderer );

			this.luminanceRT.texture.type = readBuffer.texture.type;
			this.previousLuminanceRT.texture.type = readBuffer.texture.type;
			this.currentLuminanceRT.texture.type = readBuffer.texture.type;
			this.needsInit = false;

		}

		if ( this.adaptive ) {

			//Render the luminance of the current scene into a render target with mipmapping enabled
			this.quad.material = this.materialLuminance;
			this.materialLuminance.uniforms.tDiffuse.value = readBuffer;
			renderer.render( this.scene, this.camera, this.currentLuminanceRT );

			//Use the new luminance values, the previous luminance and the frame delta to
			//adapt the luminance over time.
			this.quad.material = this.materialAdaptiveLum;
			this.materialAdaptiveLum.uniforms.delta.value = delta;
			this.materialAdaptiveLum.uniforms.lastLum.value = this.previousLuminanceRT;
			this.materialAdaptiveLum.uniforms.currentLum.value = this.currentLuminanceRT;
			renderer.render( this.scene, this.camera, this.luminanceRT );

			//Copy the new adapted luminance value so that it can be used by the next frame.
			this.quad.material = this.materialCopy;
			this.copyUniforms.tDiffuse.value = this.luminanceRT;
			renderer.render( this.scene, this.camera, this.previousLuminanceRT );

		}

		this.quad.material = this.materialToneMap;
		this.materialToneMap.uniforms.tDiffuse.value = readBuffer;
		renderer.render( this.scene, this.camera, writeBuffer, this.clear );

	},

	reset: function( renderer ) {

		// render targets
		if ( this.luminanceRT ) {

			this.luminanceRT.dispose();

		}
		if ( this.currentLuminanceRT ) {

			this.currentLuminanceRT.dispose();

		}
		if ( this.previousLuminanceRT ) {

			this.previousLuminanceRT.dispose();

		}
		var pars = { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, format: THREE.RGBFormat };

		this.luminanceRT = new THREE.WebGLRenderTarget( this.resolution, this.resolution, pars );
		this.luminanceRT.texture.generateMipmaps = false;

		this.previousLuminanceRT = new THREE.WebGLRenderTarget( this.resolution, this.resolution, pars );
		this.previousLuminanceRT.texture.generateMipmaps = false;

		// We only need mipmapping for the current luminosity because we want a down-sampled version to sample in our adaptive shader
		pars.minFilter = THREE.LinearMipMapLinearFilter;
		this.currentLuminanceRT = new THREE.WebGLRenderTarget( this.resolution, this.resolution, pars );

		if ( this.adaptive ) {

			this.materialToneMap.defines[ "ADAPTED_LUMINANCE" ] = "";
			this.materialToneMap.uniforms.luminanceMap.value = this.luminanceRT;

		}
		//Put something in the adaptive luminance texture so that the scene can render initially
		this.quad.material = new THREE.MeshBasicMaterial( { color: 0x777777 } );
		this.materialLuminance.needsUpdate = true;
		this.materialAdaptiveLum.needsUpdate = true;
		this.materialToneMap.needsUpdate = true;
		// renderer.render( this.scene, this.camera, this.luminanceRT );
		// renderer.render( this.scene, this.camera, this.previousLuminanceRT );
		// renderer.render( this.scene, this.camera, this.currentLuminanceRT );

	},

	setAdaptive: function( adaptive ) {

		if ( adaptive ) {

			this.adaptive = true;
			this.materialToneMap.defines[ "ADAPTED_LUMINANCE" ] = "";
			this.materialToneMap.uniforms.luminanceMap.value = this.luminanceRT;

		} else {

			this.adaptive = false;
			delete this.materialToneMap.defines[ "ADAPTED_LUMINANCE" ];
			this.materialToneMap.uniforms.luminanceMap.value = undefined;

		}
		this.materialToneMap.needsUpdate = true;

	},

	setAdaptionRate: function( rate ) {

		if ( rate ) {

			this.materialAdaptiveLum.uniforms.tau.value = Math.abs( rate );

		}

	},

	setMaxLuminance: function( maxLum ) {

		if ( maxLum ) {

			this.materialToneMap.uniforms.maxLuminance.value = maxLum;

		}

	},

	setAverageLuminance: function( avgLum ) {

		if ( avgLum ) {

			this.materialToneMap.uniforms.averageLuminance.value = avgLum;

		}

	},

	setMiddleGrey: function( middleGrey ) {

		if ( middleGrey ) {

			this.materialToneMap.uniforms.middleGrey.value = middleGrey;

		}

	},

	dispose: function() {

		if ( this.luminanceRT ) {

			this.luminanceRT.dispose();

		}
		if ( this.previousLuminanceRT ) {

			this.previousLuminanceRT.dispose();

		}
		if ( this.currentLuminanceRT ) {

			this.currentLuminanceRT.dispose();

		}
		if ( this.materialLuminance ) {

			this.materialLuminance.dispose();

		}
		if ( this.materialAdaptiveLum ) {

			this.materialAdaptiveLum.dispose();

		}
		if ( this.materialCopy ) {

			this.materialCopy.dispose();

		}
		if ( this.materialToneMap ) {

			this.materialToneMap.dispose();

		}

	}

};

/**
 * @author alteredq / http://alteredqualia.com/
 */

THREE.BloomPass = function ( strength, kernelSize, sigma, resolution ) {

	strength = ( strength !== undefined ) ? strength : 1;
	kernelSize = ( kernelSize !== undefined ) ? kernelSize : 25;
	sigma = ( sigma !== undefined ) ? sigma : 4.0;
	resolution = ( resolution !== undefined ) ? resolution : 256;

	// render targets

	var pars = { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, format: THREE.RGBFormat };

	this.renderTargetX = new THREE.WebGLRenderTarget( resolution, resolution, pars );
	this.renderTargetY = new THREE.WebGLRenderTarget( resolution, resolution, pars );

	// copy material

	if ( THREE.CopyShader === undefined )
		console.error( "THREE.BloomPass relies on THREE.CopyShader" );

	var copyShader = THREE.CopyShader;

	this.copyUniforms = THREE.UniformsUtils.clone( copyShader.uniforms );

	this.copyUniforms[ "opacity" ].value = strength;

	this.materialCopy = new THREE.ShaderMaterial( {

		uniforms: this.copyUniforms,
		vertexShader: copyShader.vertexShader,
		fragmentShader: copyShader.fragmentShader,
		blending: THREE.AdditiveBlending,
		transparent: true

	} );

	// convolution material

	if ( THREE.ConvolutionShader === undefined )
		console.error( "THREE.BloomPass relies on THREE.ConvolutionShader" );

	var convolutionShader = THREE.ConvolutionShader;

	this.convolutionUniforms = THREE.UniformsUtils.clone( convolutionShader.uniforms );

	this.convolutionUniforms[ "uImageIncrement" ].value = THREE.BloomPass.blurX;
	this.convolutionUniforms[ "cKernel" ].value = THREE.ConvolutionShader.buildKernel( sigma );

	this.materialConvolution = new THREE.ShaderMaterial( {

		uniforms: this.convolutionUniforms,
		vertexShader:  convolutionShader.vertexShader,
		fragmentShader: convolutionShader.fragmentShader,
		defines: {
			"KERNEL_SIZE_FLOAT": kernelSize.toFixed( 1 ),
			"KERNEL_SIZE_INT": kernelSize.toFixed( 0 )
		}

	} );

	this.enabled = true;
	this.needsSwap = false;
	this.clear = false;


	this.camera = new THREE.OrthographicCamera( - 1, 1, 1, - 1, 0, 1 );
	this.scene  = new THREE.Scene();

	this.quad = new THREE.Mesh( new THREE.PlaneBufferGeometry( 2, 2 ), null );
	this.scene.add( this.quad );

};

THREE.BloomPass.prototype = {

	render: function ( renderer, writeBuffer, readBuffer, delta, maskActive ) {

		if ( maskActive ) renderer.context.disable( renderer.context.STENCIL_TEST );

		// Render quad with blured scene into texture (convolution pass 1)

		this.quad.material = this.materialConvolution;

		this.convolutionUniforms[ "tDiffuse" ].value = readBuffer;
		this.convolutionUniforms[ "uImageIncrement" ].value = THREE.BloomPass.blurX;

		renderer.render( this.scene, this.camera, this.renderTargetX, true );


		// Render quad with blured scene into texture (convolution pass 2)

		this.convolutionUniforms[ "tDiffuse" ].value = this.renderTargetX;
		this.convolutionUniforms[ "uImageIncrement" ].value = THREE.BloomPass.blurY;

		renderer.render( this.scene, this.camera, this.renderTargetY, true );

		// Render original scene with superimposed blur to texture

		this.quad.material = this.materialCopy;

		this.copyUniforms[ "tDiffuse" ].value = this.renderTargetY;

		if ( maskActive ) renderer.context.enable( renderer.context.STENCIL_TEST );

		renderer.render( this.scene, this.camera, readBuffer, this.clear );

	}

};

THREE.BloomPass.blurX = new THREE.Vector2( 0.001953125, 0.0 );
THREE.BloomPass.blurY = new THREE.Vector2( 0.0, 0.001953125 );

/**
 * Depth-of-field post-process with bokeh shader
 */


THREE.BokehPass = function ( scene, camera, params ) {

	this.scene = scene;
	this.camera = camera;

	var focus = ( params.focus !== undefined ) ? params.focus : 1.0;
	var aspect = ( params.aspect !== undefined ) ? params.aspect : camera.aspect;
	var aperture = ( params.aperture !== undefined ) ? params.aperture : 0.025;
	var maxblur = ( params.maxblur !== undefined ) ? params.maxblur : 1.0;

	// render targets

	var width = params.width || window.innerWidth || 1;
	var height = params.height || window.innerHeight || 1;

	this.renderTargetColor = new THREE.WebGLRenderTarget( width, height, {
		minFilter: THREE.LinearFilter,
		magFilter: THREE.LinearFilter,
		format: THREE.RGBFormat
	} );

	this.renderTargetDepth = this.renderTargetColor.clone();

	// depth material

	this.materialDepth = new THREE.MeshDepthMaterial();

	// bokeh material

	if ( THREE.BokehShader === undefined ) {

		console.error( "THREE.BokehPass relies on THREE.BokehShader" );

	}
	
	var bokehShader = THREE.BokehShader;
	var bokehUniforms = THREE.UniformsUtils.clone( bokehShader.uniforms );

	bokehUniforms[ "tDepth" ].value = this.renderTargetDepth;

	bokehUniforms[ "focus" ].value = focus;
	bokehUniforms[ "aspect" ].value = aspect;
	bokehUniforms[ "aperture" ].value = aperture;
	bokehUniforms[ "maxblur" ].value = maxblur;

	this.materialBokeh = new THREE.ShaderMaterial( {
		uniforms: bokehUniforms,
		vertexShader: bokehShader.vertexShader,
		fragmentShader: bokehShader.fragmentShader
	} );

	this.uniforms = bokehUniforms;
	this.enabled = true;
	this.needsSwap = false;
	this.renderToScreen = false;
	this.clear = false;

	this.camera2 = new THREE.OrthographicCamera( - 1, 1, 1, - 1, 0, 1 );
	this.scene2  = new THREE.Scene();

	this.quad2 = new THREE.Mesh( new THREE.PlaneBufferGeometry( 2, 2 ), null );
	this.scene2.add( this.quad2 );

};

THREE.BokehPass.prototype = {

	render: function ( renderer, writeBuffer, readBuffer, delta, maskActive ) {

		this.quad2.material = this.materialBokeh;

		// Render depth into texture

		this.scene.overrideMaterial = this.materialDepth;

		renderer.render( this.scene, this.camera, this.renderTargetDepth, true );

		// Render bokeh composite

		this.uniforms[ "tColor" ].value = readBuffer;

		if ( this.renderToScreen ) {

			renderer.render( this.scene2, this.camera2 );

		} else {

			renderer.render( this.scene2, this.camera2, writeBuffer, this.clear );

		}

		this.scene.overrideMaterial = null;

	}

};


/**
 * @author mrdoob / http://mrdoob.com/
 */

THREE.ClearPass = function () {

	this.enabled = true;

};

THREE.ClearPass.prototype = {

	render: function ( renderer, writeBuffer, readBuffer ) {

		renderer.setRenderTarget( readBuffer );
		renderer.clear();

	}

};

/**
 * @author alteredq / http://alteredqualia.com/
 */

THREE.DotScreenPass = function ( center, angle, scale ) {

	if ( THREE.DotScreenShader === undefined )
		console.error( "THREE.DotScreenPass relies on THREE.DotScreenShader" );

	var shader = THREE.DotScreenShader;

	this.uniforms = THREE.UniformsUtils.clone( shader.uniforms );

	if ( center !== undefined ) this.uniforms[ "center" ].value.copy( center );
	if ( angle !== undefined ) this.uniforms[ "angle" ].value = angle;
	if ( scale !== undefined ) this.uniforms[ "scale" ].value = scale;

	this.material = new THREE.ShaderMaterial( {

		uniforms: this.uniforms,
		vertexShader: shader.vertexShader,
		fragmentShader: shader.fragmentShader

	} );

	this.enabled = true;
	this.renderToScreen = false;
	this.needsSwap = true;


	this.camera = new THREE.OrthographicCamera( - 1, 1, 1, - 1, 0, 1 );
	this.scene  = new THREE.Scene();

	this.quad = new THREE.Mesh( new THREE.PlaneBufferGeometry( 2, 2 ), null );
	this.scene.add( this.quad );

};

THREE.DotScreenPass.prototype = {

	render: function ( renderer, writeBuffer, readBuffer, delta ) {

		this.uniforms[ "tDiffuse" ].value = readBuffer;
		this.uniforms[ "tSize" ].value.set( readBuffer.width, readBuffer.height );

		this.quad.material = this.material;

		if ( this.renderToScreen ) {

			renderer.render( this.scene, this.camera );

		} else {

			renderer.render( this.scene, this.camera, writeBuffer, false );

		}

	}

};

/**
 * @author alteredq / http://alteredqualia.com/
 */

THREE.EffectComposer = function ( renderer, renderTarget ) {

	this.renderer = renderer;

	if ( renderTarget === undefined ) {

		var pixelRatio = renderer.getPixelRatio();

		var width  = Math.floor( renderer.context.canvas.width  / pixelRatio ) || 1;
		var height = Math.floor( renderer.context.canvas.height / pixelRatio ) || 1;
		var parameters = { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, format: THREE.RGBFormat, stencilBuffer: false };

		renderTarget = new THREE.WebGLRenderTarget( width, height, parameters );

	}

	this.renderTarget1 = renderTarget;
	this.renderTarget2 = renderTarget.clone();

	this.writeBuffer = this.renderTarget1;
	this.readBuffer = this.renderTarget2;

	this.passes = [];

	if ( THREE.CopyShader === undefined )
		console.error( "THREE.EffectComposer relies on THREE.CopyShader" );

	this.copyPass = new THREE.ShaderPass( THREE.CopyShader );

};

THREE.EffectComposer.prototype = {

	swapBuffers: function() {

		var tmp = this.readBuffer;
		this.readBuffer = this.writeBuffer;
		this.writeBuffer = tmp;

	},

	addPass: function ( pass ) {

		this.passes.push( pass );

	},

	insertPass: function ( pass, index ) {

		this.passes.splice( index, 0, pass );

	},

	render: function ( delta ) {

		this.writeBuffer = this.renderTarget1;
		this.readBuffer = this.renderTarget2;

		var maskActive = false;

		var pass, i, il = this.passes.length;

		for ( i = 0; i < il; i ++ ) {

			pass = this.passes[ i ];

			if ( ! pass.enabled ) continue;

			pass.render( this.renderer, this.writeBuffer, this.readBuffer, delta, maskActive );

			if ( pass.needsSwap ) {

				if ( maskActive ) {

					var context = this.renderer.context;

					context.stencilFunc( context.NOTEQUAL, 1, 0xffffffff );

					this.copyPass.render( this.renderer, this.writeBuffer, this.readBuffer, delta );

					context.stencilFunc( context.EQUAL, 1, 0xffffffff );

				}

				this.swapBuffers();

			}

			if ( pass instanceof THREE.MaskPass ) {

				maskActive = true;

			} else if ( pass instanceof THREE.ClearMaskPass ) {

				maskActive = false;

			}

		}

	},

	reset: function ( renderTarget ) {

		if ( renderTarget === undefined ) {

			renderTarget = this.renderTarget1.clone();

			var pixelRatio = this.renderer.getPixelRatio();

			renderTarget.setSize(
				Math.floor( this.renderer.context.canvas.width  / pixelRatio ),
				Math.floor( this.renderer.context.canvas.height / pixelRatio )
			);

		}

		this.renderTarget1.dispose();
		this.renderTarget1 = renderTarget;
		this.renderTarget2.dispose();
		this.renderTarget2 = renderTarget.clone();

		this.writeBuffer = this.renderTarget1;
		this.readBuffer = this.renderTarget2;

	},

	setSize: function ( width, height ) {

		this.renderTarget1.setSize( width, height );
		this.renderTarget2.setSize( width, height );

	}

};

/**
 * @author alteredq / http://alteredqualia.com/
 * @author davidedc / http://www.sketchpatch.net/
 *
 * NVIDIA FXAA by Timothy Lottes
 * http://timothylottes.blogspot.com/2011/06/fxaa3-source-released.html
 * - WebGL port by @supereggbert
 * http://www.glge.org/demos/fxaa/
 */

THREE.FXAAShader = {

	uniforms: {

		"tDiffuse":   { type: "t", value: null },
		"resolution": { type: "v2", value: new THREE.Vector2( 1 / 1024, 1 / 512 ) }

	},

	vertexShader: [

		"void main() {",

			"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

		"}"

	].join( "\n" ),

	fragmentShader: [

		"uniform sampler2D tDiffuse;",
		"uniform vec2 resolution;",

		"#define FXAA_REDUCE_MIN   (1.0/128.0)",
		"#define FXAA_REDUCE_MUL   (1.0/8.0)",
		"#define FXAA_SPAN_MAX     8.0",

		"void main() {",

			"vec3 rgbNW = texture2D( tDiffuse, ( gl_FragCoord.xy + vec2( -1.0, -1.0 ) ) * resolution ).xyz;",
			"vec3 rgbNE = texture2D( tDiffuse, ( gl_FragCoord.xy + vec2( 1.0, -1.0 ) ) * resolution ).xyz;",
			"vec3 rgbSW = texture2D( tDiffuse, ( gl_FragCoord.xy + vec2( -1.0, 1.0 ) ) * resolution ).xyz;",
			"vec3 rgbSE = texture2D( tDiffuse, ( gl_FragCoord.xy + vec2( 1.0, 1.0 ) ) * resolution ).xyz;",
			"vec4 rgbaM  = texture2D( tDiffuse,  gl_FragCoord.xy  * resolution );",
			"vec3 rgbM  = rgbaM.xyz;",
			"vec3 luma = vec3( 0.299, 0.587, 0.114 );",

			"float lumaNW = dot( rgbNW, luma );",
			"float lumaNE = dot( rgbNE, luma );",
			"float lumaSW = dot( rgbSW, luma );",
			"float lumaSE = dot( rgbSE, luma );",
			"float lumaM  = dot( rgbM,  luma );",
			"float lumaMin = min( lumaM, min( min( lumaNW, lumaNE ), min( lumaSW, lumaSE ) ) );",
			"float lumaMax = max( lumaM, max( max( lumaNW, lumaNE) , max( lumaSW, lumaSE ) ) );",

			"vec2 dir;",
			"dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));",
			"dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));",

			"float dirReduce = max( ( lumaNW + lumaNE + lumaSW + lumaSE ) * ( 0.25 * FXAA_REDUCE_MUL ), FXAA_REDUCE_MIN );",

			"float rcpDirMin = 1.0 / ( min( abs( dir.x ), abs( dir.y ) ) + dirReduce );",
			"dir = min( vec2( FXAA_SPAN_MAX,  FXAA_SPAN_MAX),",
				  "max( vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),",
						"dir * rcpDirMin)) * resolution;",
			"vec4 rgbA = (1.0/2.0) * (",
        	"texture2D(tDiffuse,  gl_FragCoord.xy  * resolution + dir * (1.0/3.0 - 0.5)) +",
			"texture2D(tDiffuse,  gl_FragCoord.xy  * resolution + dir * (2.0/3.0 - 0.5)));",
    		"vec4 rgbB = rgbA * (1.0/2.0) + (1.0/4.0) * (",
			"texture2D(tDiffuse,  gl_FragCoord.xy  * resolution + dir * (0.0/3.0 - 0.5)) +",
      		"texture2D(tDiffuse,  gl_FragCoord.xy  * resolution + dir * (3.0/3.0 - 0.5)));",
    		"float lumaB = dot(rgbB, vec4(luma, 0.0));",

			"if ( ( lumaB < lumaMin ) || ( lumaB > lumaMax ) ) {",

				"gl_FragColor = rgbA;",

			"} else {",
				"gl_FragColor = rgbB;",

			"}",

		"}"

	].join( "\n" )

};
/**
 * @author alteredq / http://alteredqualia.com/
 */

THREE.MaskPass = function ( scene, camera ) {

	this.scene = scene;
	this.camera = camera;

	this.enabled = true;
	this.clear = true;
	this.needsSwap = false;

	this.inverse = false;

};

THREE.MaskPass.prototype = {

	render: function ( renderer, writeBuffer, readBuffer, delta ) {

		var context = renderer.context;

		// don't update color or depth

		context.colorMask( false, false, false, false );
		context.depthMask( false );

		// set up stencil

		var writeValue, clearValue;

		if ( this.inverse ) {

			writeValue = 0;
			clearValue = 1;

		} else {

			writeValue = 1;
			clearValue = 0;

		}

		context.enable( context.STENCIL_TEST );
		context.stencilOp( context.REPLACE, context.REPLACE, context.REPLACE );
		context.stencilFunc( context.ALWAYS, writeValue, 0xffffffff );
		context.clearStencil( clearValue );

		// draw into the stencil buffer

		renderer.render( this.scene, this.camera, readBuffer, this.clear );
		renderer.render( this.scene, this.camera, writeBuffer, this.clear );

		// re-enable update of color and depth

		context.colorMask( true, true, true, true );
		context.depthMask( true );

		// only render where stencil is set to 1

		context.stencilFunc( context.EQUAL, 1, 0xffffffff );  // draw if == 1
		context.stencilOp( context.KEEP, context.KEEP, context.KEEP );

	}

};


THREE.ClearMaskPass = function () {

	this.enabled = true;

};

THREE.ClearMaskPass.prototype = {

	render: function ( renderer, writeBuffer, readBuffer, delta ) {

		var context = renderer.context;

		context.disable( context.STENCIL_TEST );

	}

};

/**
 * @author Slayvin / http://slayvin.net
 */

THREE.ShaderLib[ 'mirror' ] = {

	uniforms: { "mirrorColor": { type: "c", value: new THREE.Color( 0x7F7F7F ) },
				"mirrorSampler": { type: "t", value: null },
                // "test": { type: "v3", value: new THREE.Vector3(0,1,0) },
				"textureMatrix" : { type: "m4", value: new THREE.Matrix4() }
	},

	vertexShader: [

		"uniform mat4 textureMatrix;",

		"varying vec4 mirrorCoord;",
        "varying vec2 vuv;",
		"void main() {",
            
            "vuv = uv;",
            
			"vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );",
			"vec4 worldPosition = modelMatrix * vec4( position, 1.0 );",
			"mirrorCoord = textureMatrix * worldPosition;",

			"gl_Position = projectionMatrix * mvPosition;",

		"}"

	].join( "\n" ),

	fragmentShader: [

		"uniform vec3 mirrorColor;",
		"uniform sampler2D mirrorSampler;",

		"varying vec4 mirrorCoord;",
        "varying vec2 vuv;",

		"float blendOverlay(float base, float blend) {",
			"return( base < 0.5 ? ( 2.0 * base * blend ) : (1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );",
		"}",

		"void main() {",

			"vec4 color = texture2DProj(mirrorSampler, mirrorCoord);",
			"color = mod(vuv.y*100.0, 2.0) * vec4(blendOverlay(mirrorColor.r, color.r), blendOverlay(mirrorColor.g, color.g), blendOverlay(mirrorColor.b, color.b), 1.0);",
            
			"gl_FragColor = color;",

		"}"

	].join( "\n" )

};

THREE.Mirror = function ( renderer, camera, options ) {

	THREE.Object3D.call( this );

	this.name = 'mirror_' + this.id;

	options = options || {};

	this.matrixNeedsUpdate = true;

	var width = options.textureWidth !== undefined ? options.textureWidth : 512;
	var height = options.textureHeight !== undefined ? options.textureHeight : 512;

	this.clipBias = options.clipBias !== undefined ? options.clipBias : 0.0;

	var mirrorColor = options.color !== undefined ? new THREE.Color( options.color ) : new THREE.Color( 0x7F7F7F );

	this.renderer = renderer;
	this.mirrorPlane = new THREE.Plane();
	this.normal = new THREE.Vector3( 0, 0, 1 );
	this.mirrorWorldPosition = new THREE.Vector3();
	this.cameraWorldPosition = new THREE.Vector3();
	this.rotationMatrix = new THREE.Matrix4();
	this.lookAtPosition = new THREE.Vector3( 0, 0, - 1 );
	this.clipPlane = new THREE.Vector4();

	// For debug only, show the normal and plane of the mirror
	var debugMode = options.debugMode !== undefined ? options.debugMode : false;

	if ( debugMode ) {

		var arrow = new THREE.ArrowHelper( new THREE.Vector3( 0, 0, 1 ), new THREE.Vector3( 0, 0, 0 ), 10, 0xffff80 );
		var planeGeometry = new THREE.Geometry();
		planeGeometry.vertices.push( new THREE.Vector3( - 10, - 10, 0 ) );
		planeGeometry.vertices.push( new THREE.Vector3( 10, - 10, 0 ) );
		planeGeometry.vertices.push( new THREE.Vector3( 10, 10, 0 ) );
		planeGeometry.vertices.push( new THREE.Vector3( - 10, 10, 0 ) );
		planeGeometry.vertices.push( planeGeometry.vertices[ 0 ] );
		var plane = new THREE.Line( planeGeometry, new THREE.LineBasicMaterial( { color: 0xffff80 } ) );

		this.add( arrow );
		this.add( plane );

	}

	if ( camera instanceof THREE.PerspectiveCamera ) {

		this.camera = camera;

	} else {

		this.camera = new THREE.PerspectiveCamera();
		console.log( this.name + ': camera is not a Perspective Camera!' );

	}

	this.textureMatrix = new THREE.Matrix4();

	this.mirrorCamera = this.camera.clone();
	this.mirrorCamera.matrixAutoUpdate = true;

	var parameters = { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, format: THREE.RGBFormat, stencilBuffer: false };

	this.texture = new THREE.WebGLRenderTarget( width, height, parameters );
	this.tempTexture = new THREE.WebGLRenderTarget( width, height, parameters );

	var mirrorShader = THREE.ShaderLib[ "mirror" ];
	var mirrorUniforms = THREE.UniformsUtils.clone( mirrorShader.uniforms );

	this.material = new THREE.ShaderMaterial( {

		fragmentShader: mirrorShader.fragmentShader,
		vertexShader: mirrorShader.vertexShader,
		uniforms: mirrorUniforms

	} );

	this.material.uniforms.mirrorSampler.value = this.texture;
	this.material.uniforms.mirrorColor.value = mirrorColor;
	this.material.uniforms.textureMatrix.value = this.textureMatrix;

	if ( ! THREE.Math.isPowerOfTwo( width ) || ! THREE.Math.isPowerOfTwo( height ) ) {

		this.texture.generateMipmaps = false;
		this.tempTexture.generateMipmaps = false;

	}

	this.updateTextureMatrix();
	this.render();

};

THREE.Mirror.prototype = Object.create( THREE.Object3D.prototype );
THREE.Mirror.prototype.constructor = THREE.Mirror;

THREE.Mirror.prototype.renderWithMirror = function ( otherMirror ) {

	// update the mirror matrix to mirror the current view
	this.updateTextureMatrix();
	this.matrixNeedsUpdate = false;

	// set the camera of the other mirror so the mirrored view is the reference view
	var tempCamera = otherMirror.camera;
	otherMirror.camera = this.mirrorCamera;

	// render the other mirror in temp texture
	otherMirror.renderTemp();
	otherMirror.material.uniforms.mirrorSampler.value = otherMirror.tempTexture;

	// render the current mirror
	this.render();
	this.matrixNeedsUpdate = true;

	// restore material and camera of other mirror
	otherMirror.material.uniforms.mirrorSampler.value = otherMirror.texture;
	otherMirror.camera = tempCamera;

	// restore texture matrix of other mirror
	otherMirror.updateTextureMatrix();

};

THREE.Mirror.prototype.updateTextureMatrix = function () {

	this.updateMatrixWorld();
	this.camera.updateMatrixWorld();

	this.mirrorWorldPosition.setFromMatrixPosition( this.matrixWorld );
	this.cameraWorldPosition.setFromMatrixPosition( this.camera.matrixWorld );

	this.rotationMatrix.extractRotation( this.matrixWorld );

	this.normal.set( 0, 0, 1 );
	this.normal.applyMatrix4( this.rotationMatrix );

	var view = this.mirrorWorldPosition.clone().sub( this.cameraWorldPosition );
	view.reflect( this.normal ).negate();
	view.add( this.mirrorWorldPosition );

	this.rotationMatrix.extractRotation( this.camera.matrixWorld );

	this.lookAtPosition.set( 0, 0, - 1 );
	this.lookAtPosition.applyMatrix4( this.rotationMatrix );
	this.lookAtPosition.add( this.cameraWorldPosition );

	var target = this.mirrorWorldPosition.clone().sub( this.lookAtPosition );
	target.reflect( this.normal ).negate();
	target.add( this.mirrorWorldPosition );

	this.up.set( 0, - 1, 0 );
	this.up.applyMatrix4( this.rotationMatrix );
	this.up.reflect( this.normal ).negate();

	this.mirrorCamera.position.copy( view );
	this.mirrorCamera.up = this.up;
	this.mirrorCamera.lookAt( target );

	this.mirrorCamera.updateProjectionMatrix();
	this.mirrorCamera.updateMatrixWorld();
	this.mirrorCamera.matrixWorldInverse.getInverse( this.mirrorCamera.matrixWorld );

	// Update the texture matrix
	this.textureMatrix.set( 0.5, 0.0, 0.0, 0.5,
							0.0, 0.5, 0.0, 0.5,
							0.0, 0.0, 0.5, 0.5,
							0.0, 0.0, 0.0, 1.0 );
	this.textureMatrix.multiply( this.mirrorCamera.projectionMatrix );
	this.textureMatrix.multiply( this.mirrorCamera.matrixWorldInverse );

	// Now update projection matrix with new clip plane, implementing code from: http://www.terathon.com/code/oblique.html
	// Paper explaining this technique: http://www.terathon.com/lengyel/Lengyel-Oblique.pdf
	this.mirrorPlane.setFromNormalAndCoplanarPoint( this.normal, this.mirrorWorldPosition );
	this.mirrorPlane.applyMatrix4( this.mirrorCamera.matrixWorldInverse );

	this.clipPlane.set( this.mirrorPlane.normal.x, this.mirrorPlane.normal.y, this.mirrorPlane.normal.z, this.mirrorPlane.constant );

	var q = new THREE.Vector4();
	var projectionMatrix = this.mirrorCamera.projectionMatrix;

	q.x = ( Math.sign( this.clipPlane.x ) + projectionMatrix.elements[ 8 ] ) / projectionMatrix.elements[ 0 ];
	q.y = ( Math.sign( this.clipPlane.y ) + projectionMatrix.elements[ 9 ] ) / projectionMatrix.elements[ 5 ];
	q.z = - 1.0;
	q.w = ( 1.0 + projectionMatrix.elements[ 10 ] ) / projectionMatrix.elements[ 14 ];

	// Calculate the scaled plane vector
	var c = new THREE.Vector4();
	c = this.clipPlane.multiplyScalar( 2.0 / this.clipPlane.dot( q ) );

	// Replacing the third row of the projection matrix
	projectionMatrix.elements[ 2 ] = c.x;
	projectionMatrix.elements[ 6 ] = c.y;
	projectionMatrix.elements[ 10 ] = c.z + 1.0 - this.clipBias;
	projectionMatrix.elements[ 14 ] = c.w;

};

THREE.Mirror.prototype.render = function () {

	if ( this.matrixNeedsUpdate ) this.updateTextureMatrix();

	this.matrixNeedsUpdate = true;

	// Render the mirrored view of the current scene into the target texture
	var scene = this;

	while ( scene.parent !== null ) {

		scene = scene.parent;

	}

	if ( scene !== undefined && scene instanceof THREE.Scene ) {

		// We can't render ourself to ourself
		var visible = this.material.visible;
		this.material.visible = false;

		this.renderer.render( scene, this.mirrorCamera, this.texture, true );

		this.material.visible = visible;

	}

};

THREE.Mirror.prototype.renderTemp = function () {

	if ( this.matrixNeedsUpdate ) this.updateTextureMatrix();

	this.matrixNeedsUpdate = true;

	// Render the mirrored view of the current scene into the target texture
	var scene = this;

	while ( scene.parent !== null ) {

		scene = scene.parent;

	}

	if ( scene !== undefined && scene instanceof THREE.Scene ) {

		this.renderer.render( scene, this.mirrorCamera, this.tempTexture, true );

	}

};

/**
 * @author alteredq / http://alteredqualia.com/
 */

THREE.RenderPass = function ( scene, camera, overrideMaterial, clearColor, clearAlpha ) {

	this.scene = scene;
	this.camera = camera;

	this.overrideMaterial = overrideMaterial;

	this.clearColor = clearColor;
	this.clearAlpha = ( clearAlpha !== undefined ) ? clearAlpha : 1;

	this.oldClearColor = new THREE.Color();
	this.oldClearAlpha = 1;

	this.enabled = true;
	this.clear = true;
	this.needsSwap = false;

};

THREE.RenderPass.prototype = {

	render: function ( renderer, writeBuffer, readBuffer, delta ) {

		this.scene.overrideMaterial = this.overrideMaterial;

		if ( this.clearColor ) {

			this.oldClearColor.copy( renderer.getClearColor() );
			this.oldClearAlpha = renderer.getClearAlpha();

			renderer.setClearColor( this.clearColor, this.clearAlpha );

		}

		renderer.render( this.scene, this.camera, readBuffer, this.clear );

		if ( this.clearColor ) {

			renderer.setClearColor( this.oldClearColor, this.oldClearAlpha );

		}

		this.scene.overrideMaterial = null;

	}

};

/**
 * @author alteredq / http://alteredqualia.com/
 */

THREE.SavePass = function ( renderTarget ) {

	if ( THREE.CopyShader === undefined )
		console.error( "THREE.SavePass relies on THREE.CopyShader" );

	var shader = THREE.CopyShader;

	this.textureID = "tDiffuse";

	this.uniforms = THREE.UniformsUtils.clone( shader.uniforms );

	this.material = new THREE.ShaderMaterial( {

		uniforms: this.uniforms,
		vertexShader: shader.vertexShader,
		fragmentShader: shader.fragmentShader

	} );

	this.renderTarget = renderTarget;

	if ( this.renderTarget === undefined ) {

		this.renderTargetParameters = { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, format: THREE.RGBFormat, stencilBuffer: false };
		this.renderTarget = new THREE.WebGLRenderTarget( window.innerWidth, window.innerHeight, this.renderTargetParameters );

	}

	this.enabled = true;
	this.needsSwap = false;
	this.clear = false;


	this.camera = new THREE.OrthographicCamera( - 1, 1, 1, - 1, 0, 1 );
	this.scene  = new THREE.Scene();

	this.quad = new THREE.Mesh( new THREE.PlaneBufferGeometry( 2, 2 ), null );
	this.scene.add( this.quad );

};

THREE.SavePass.prototype = {

	render: function ( renderer, writeBuffer, readBuffer, delta ) {

		if ( this.uniforms[ this.textureID ] ) {

			this.uniforms[ this.textureID ].value = readBuffer;

		}

		this.quad.material = this.material;

		renderer.render( this.scene, this.camera, this.renderTarget, this.clear );

	}

};

/**
 * @author alteredq / http://alteredqualia.com/
 */

THREE.ShaderPass = function( shader, textureID ) {

	this.textureID = ( textureID !== undefined ) ? textureID : "tDiffuse";

	if ( shader instanceof THREE.ShaderMaterial ) {

		this.uniforms = shader.uniforms;

		this.material = shader;

	}
	else if ( shader ) {

		this.uniforms = THREE.UniformsUtils.clone( shader.uniforms );

		this.material = new THREE.ShaderMaterial( {

			defines: shader.defines || {},
			uniforms: this.uniforms,
			vertexShader: shader.vertexShader,
			fragmentShader: shader.fragmentShader

		} );

	}

	this.renderToScreen = false;

	this.enabled = true;
	this.needsSwap = true;
	this.clear = false;


	this.camera = new THREE.OrthographicCamera( - 1, 1, 1, - 1, 0, 1 );
	this.scene = new THREE.Scene();

	this.quad = new THREE.Mesh( new THREE.PlaneBufferGeometry( 2, 2 ), null );
	this.scene.add( this.quad );

};

THREE.ShaderPass.prototype = {

	render: function( renderer, writeBuffer, readBuffer, delta ) {

		if ( this.uniforms[ this.textureID ] ) {

			this.uniforms[ this.textureID ].value = readBuffer;

		}

		this.quad.material = this.material;

		if ( this.renderToScreen ) {

			renderer.render( this.scene, this.camera );

		} else {

			renderer.render( this.scene, this.camera, writeBuffer, this.clear );

		}

	}

};

/**
 * @author alteredq / http://alteredqualia.com/
 */

THREE.TexturePass = function ( texture, opacity ) {

	if ( THREE.CopyShader === undefined )
		console.error( "THREE.TexturePass relies on THREE.CopyShader" );

	var shader = THREE.CopyShader;

	this.uniforms = THREE.UniformsUtils.clone( shader.uniforms );

	this.uniforms[ "opacity" ].value = ( opacity !== undefined ) ? opacity : 1.0;
	this.uniforms[ "tDiffuse" ].value = texture;

	this.material = new THREE.ShaderMaterial( {

		uniforms: this.uniforms,
		vertexShader: shader.vertexShader,
		fragmentShader: shader.fragmentShader

	} );

	this.enabled = true;
	this.needsSwap = false;


	this.camera = new THREE.OrthographicCamera( - 1, 1, 1, - 1, 0, 1 );
	this.scene  = new THREE.Scene();

	this.quad = new THREE.Mesh( new THREE.PlaneBufferGeometry( 2, 2 ), null );
	this.scene.add( this.quad );

};

THREE.TexturePass.prototype = {

	render: function ( renderer, writeBuffer, readBuffer, delta ) {

		this.quad.material = this.material;

		renderer.render( this.scene, this.camera, readBuffer );

	}

};

var math = require('mathjs');

// module.exports = init;

function terrainGeometry() {
   
    var geometry = new THREE.BufferGeometry();
    
    var vertexData = generateTerrainData(100, 100);
    geometry.addAttribute( 'position', new THREE.BufferAttribute( vertexData.aPositionData, 3 ) );
    geometry.addAttribute( 'normal', new THREE.BufferAttribute( vertexData.aNormalData, 3 ) );
    
    
    var h = Float32Array.from(vertexData.aTriangleHeightData);
    h.sort();
    var hMax = h[h.length-1]; var hMin = h[0];
    vertexData.aTriangleHeightData.forEach(function(val, index, array){
        array[index] += math.abs(hMin);
        array[index] /= ( math.abs(hMin) + math.abs(hMax) );
    });
    
    // debugger;
    geometry.addAttribute( 'aTriangleHeight', new THREE.BufferAttribute( vertexData.aTriangleHeightData, 1 ) );
    
    
    return geometry;
}

function generateTerrainData(resX, resY) {
    
    var gridResX = resX, gridResY = resY;
    gridResX = 400, gridResY = 400;
    var xScale = 16, yScale = 16;
    var offsetX = 0, offsetY = 0;
    var totalSquareSize = 18;
    var totalDataSize = totalSquareSize * gridResX * gridResY;
    console.log(totalDataSize)
    var nVertices = totalSquareSize * gridResX * gridResY / 3;
    var aPositionData = new Float32Array(totalDataSize);
    var aNormalData = new Float32Array(totalDataSize);
    var aTriangleHeightData = new Float32Array(nVertices);
    var triangleHeightDataPos = 0;
    var maxHeight = getHeight(1,1,1);
    // console.log(maxHeight);
    var i = 0;

    // var xh = (gridResX % 2 == 0) ? gridResX / 2 : (gridResX - 1) / 2 ;
    // var yh = (gridResY % 2 == 0) ? gridResY / 2 : (gridResY - 1) / 2 ;
    var xh = gridResX / 2;
    var yh = gridResY / 2;
    for (var X = -xh; X < xh; X++)
    for (var Y = -yh; Y < yh; Y++, i += totalSquareSize) {

        var x = X  * xScale;
        var y = Y  * yScale;

        aPositionData[i   ] = x
        aPositionData[i+2 ] = y
        aPositionData[i+1 ] = getHeight(aPositionData[i] + offsetX, aPositionData[i + 2] + offsetY)

        aPositionData[i+3 ] = x
        aPositionData[i+5 ] = y+yScale
        aPositionData[i+4 ] = getHeight(aPositionData[i + 3] + offsetX, aPositionData[i + 5] + offsetY)

        aPositionData[i+6 ] = x+xScale
        aPositionData[i+8 ] = y
        aPositionData[i+7 ] = getHeight(aPositionData[i + 6] + offsetX, aPositionData[i + 8] + offsetY)

        var triangleHeight1 = (aPositionData[i+1] + aPositionData[i+4] + aPositionData[i+7]) / 3 ;
        // console.log((triangleHeight1+1)/2);

        var normal1 = math.cross([
            aPositionData[i + 3] - aPositionData[i + 0],
            aPositionData[i + 4] - aPositionData[i + 1],
            aPositionData[i + 5] - aPositionData[i + 2]
        ],[
            aPositionData[i + 6] - aPositionData[i + 3],
            aPositionData[i + 7] - aPositionData[i + 4],
            aPositionData[i + 8] - aPositionData[i + 5]
        ]);

        aPositionData[i+ 9] = x+xScale
        aPositionData[i+11] = y
        aPositionData[i+10] = getHeight(aPositionData[i + 9] + offsetX, aPositionData[i + 11] + offsetY)

        aPositionData[i+12] = x
        aPositionData[i+14] = y+yScale
        aPositionData[i+13] = getHeight(aPositionData[i + 12] + offsetX, aPositionData[i + 14] + offsetY)

        aPositionData[i+15] = x+xScale
        aPositionData[i+17] = y+yScale
        aPositionData[i+16] = getHeight(aPositionData[i + 15] + offsetX, aPositionData[i + 17] + offsetY)

        var tirangleHeight2 = (aPositionData[i+10] + aPositionData[i+13] + aPositionData[i+16]) / 3;

        // console.log(((tirangleHeight2/11.875) + 1)/2);
        aTriangleHeightData[triangleHeightDataPos + 0] = triangleHeight1;
        aTriangleHeightData[triangleHeightDataPos + 1] = triangleHeight1;
        aTriangleHeightData[triangleHeightDataPos + 2] = triangleHeight1;
        aTriangleHeightData[triangleHeightDataPos + 3] = tirangleHeight2;
        aTriangleHeightData[triangleHeightDataPos + 4] = tirangleHeight2;
        aTriangleHeightData[triangleHeightDataPos + 5] = tirangleHeight2;
        triangleHeightDataPos += 6;

        //calc the second normal
        var normal2 = math.cross([
            aPositionData[i + 12] - aPositionData[i +  9],
            aPositionData[i + 13] - aPositionData[i + 10],
            aPositionData[i + 14] - aPositionData[i + 11]
        ],[
            aPositionData[i + 15] - aPositionData[i + 12],
            aPositionData[i + 16] - aPositionData[i + 13],
            aPositionData[i + 17] - aPositionData[i + 14]
        ]);

        // //fill the normal data-array with the 2 normals
        for (var ii = 0; ii < totalSquareSize; ii += 3) {
            if ( ii < 9 ) {
                aNormalData[ii + i + 0] = normal1[0];
                aNormalData[ii + i + 1] = normal1[1];
                aNormalData[ii + i + 2] = normal1[2];
            }
            else {
                aNormalData[ii + i + 0] = normal2[0];
                aNormalData[ii + i + 1] = normal2[1];
                aNormalData[ii + i + 2] = normal2[2];
            }
        }
    }


    var returnData = {
        aPositionData: aPositionData,
        aNormalData: aNormalData,
        aTriangleHeightData: aTriangleHeightData,
        
        nVertices: nVertices
    };
    return returnData;
}


var simplexNoise = require('../js/simplexNoiseImproved.js');
var simplex = new simplexNoise();

function getHeight(x ,y, getMax)
{
    // var height = 1.0 * simplex.noise2D(0.00116*0.4*x, 0.00116*0.9*y);
    var d = math.sqrt( x * x  +  y * y );
    // height = 5*el;

    var f = 0.125 / (128 * 1.0) ;
    var s = 2.0 * 16 / 0.9;
    var height = s * simplex.noise2D(1.16*f*x,1.0*f*y); //a
    
    var d = math.sqrt(x*x + y*y);
    var b = 50*16;
    
    if(d > b ){
        
        var dd = 1.0 + (d-b)*0.01;
        height /= math.min(dd, 8); //
    }
    
    var max = s;
    s = s/2;
    f = f*2;
    height += s * simplex.noise2D(f*x, f*y);
    max += s;
    
    
    
    
    height =  height > 0.0 ? height * (math.pow(height, 0.5)) : height *0.8;
    max = max * math.pow(max, 0.5);
    
    for (var i = 0; i < 2; i++) {
        s = s/2;
        f = f*2;
        max += s;
        height += s * simplex.noise2D(f*x, f*y);
    }

    // if(height > 0.0)
    //     height *= 1.3;
    // else
    //     height *= 1.0;
    // max *= 1.3;
    

    var hl = 80.0;
    if(height > hl)
        height += 0.6*(height - hl)
    
    // hl = 2000.0;
    // if(height > hl)
        // height += 0.8*(height - hl)
        
    var wl = 6.0;
    if(height < -wl)
        height += 4*(height + wl)
    // if(height > 6.0)
    for (var i = 0; i < 3; i++) {
        s = s/1.25;
        f = f*2;
        max += s;
        height += s * simplex.noise2D(f*x, f*y);
    }
    // else
    // for (var i = 0; i < 4; i++) {
    //     s = s/2;
    //     f = f*2;
    //     max += s;
    //     height += s * simplex.noise2D(f*x, f*y);
    // }
    
    if(getMax)
        return max;
    return height;
    // var waterNoise = 0.25 * simplex.noise2D(2.0*x,2.0*y);
    // waterNoise += 0.125 * simplex.noise2D(4.0*x,4.0*y);
    // waterNoise += 0.0625 * simplex.noise2D(8.0*x,8.0*y);
    // waterNoise *= 1.0;
    // waterNoise = math.min(waterNoise, 0.0);
    // //
    // var mountainNoise = 1.0 ; //* snoise(0.002*vec2(0.4*p.x, 0.9*p.y));
    // // var snow = 0;
    // //
    // mountainNoise = height;
    // height = math.max(-0.3,height);
    // height = math.min(height, 0.5);
    // // vh = height;
    // height = height < 0.5 ? height  :  mountainNoise;// + 0.0 + mountainNoise;
    // height = height > -0.3 ? height : -1.0 + waterNoise;
    // mountainNoise = height;
    // height = math.min(height, 2.0);
    // // snow = height;
    // height = height < 2.0 ? height  : mountainNoise;
    // height *= 1.0;
    // max*=1;
    // console.log(max); //11.875
    // console.log(max);
    
}

var SCREEN_WIDTH = window.innerWidth ;
var SCREEN_HEIGHT = window.innerHeight ;
var SCREEN_RATIO = SCREEN_WIDTH/SCREEN_HEIGHT ;
var HALF_WIDTH = SCREEN_WIDTH / 2 ;
var HALF_HEIGHT = SCREEN_HEIGHT / 2 ;

var camera, mirrorCamera, mirrorTarget, water, terrainMesh, plane,
scene, renderer, container, light, controls, composer, groundMirror;

// var THREE = require('three')
// var OrbitControls = require('three-orbit-controls')(THREE)

var groundShaders = {
    vs : require('../shaders/groundVertexshader.glsl')(),
    fs : require('../shaders/groundFragmentshader.glsl')()
};
var waterShaders = {
    vs : require('../shaders/waterVertexshader.glsl')(),
    fs : require('../shaders/waterFragmentshader.glsl')()
};

init();
render();

function init(){
    container = document.createElement('div');
    document.body.appendChild(container);
    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xaa0000, 1.2);
    debugger;
    camera = new THREE.PerspectiveCamera(30, SCREEN_RATIO, 1, 10000);
    camera.position.set(505, 280, 1400);
    camera.up = new THREE.Vector3(0.0, 1.0, 0.0);
    camera.lookAt({x: 0, y: 0, z: 0 }); 
    
    mirrorCamera = camera.clone(camera);
    // mirrorCamera.projectionMatrix.makeRotationX(Math.PI);
    mirrorTarget = new THREE.WebGLRenderTarget(SCREEN_WIDTH, SCREEN_HEIGHT,  { format: THREE.RGBFormat});
   
    light = new THREE.DirectionalLight(0xdfebff, 1.75);
    light.position.set(0.0, 100.0, 500.0);
    // scene.add(light);
    
    
    
    
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
    renderer.setClearColor( 0x77bbcc );
    
    container.appendChild(renderer.domElement);
    controls = new THREE.OrbitControls( camera );
    
    //WATER
    var material = new THREE.ShaderMaterial( {
        uniforms: {
            uCameraPos: {type: "v3", value: camera.position},
            uMirror: {type: "t", value: mirrorTarget}
        },
        transparent: true,
        vertexShader: waterShaders.vs,
        fragmentShader: waterShaders.fs,
        // depthWrite: false
    } );
    
    
    //TERRAIN
    var meterial = new THREE.ShaderMaterial( {
        uniforms: {
            uCameraPos: {type: "v3", value: camera.position},
            uLightPos: {type: "v3", value: light.position},
        },
        vertexShader: groundShaders.vs,
        fragmentShader: groundShaders.fs,
        // side: THREE.DoubleSide
    } );
    var terrain = terrainGeometry();//require('../js/terrainHeightDataGeneration.js')(THREE)
    
    terrainMesh = new THREE.Mesh(terrain, meterial);
    terrainMesh.position.y -= 50;
    scene.add(terrainMesh); 
    
    
    //PLANE 
    var geometry = new THREE.PlaneGeometry( 1600, 1600, 1 , 1 );
    var material = new THREE.MeshBasicMaterial( {color: 0xaaaaaa, side: THREE.DoubleSide} );
    plane = new THREE.Mesh( geometry, material );
    plane.rotation.x = -Math.PI/2;
    // plane.position.z = -1600.0;
    plane.position.y = -80;
    // scene.add( plane );
    
    
    groundMirror = new THREE.Mirror( renderer, camera, { clipBias: 0.003,
	textureWidth: SCREEN_WIDTH, textureHeight: SCREEN_HEIGHT, color: 0x777777 } );
	
    //feed THREE.Mirror with custom shaders to look more like water than a normal mirror!
    groundMirror.material.vertexShader = require("../shaders/mirrorVertexShader.glsl")();
    groundMirror.material.fragmentShader = require("../shaders/mirrorFragmentShader.glsl")();
    groundMirror.material.transparent = true;
    groundMirror.material.uniforms["uLight"] = {type: "v3", value: light.position} ;
    groundMirror.material.uniforms["uCamera"] = {type: "v3", value: camera.position} ; 
    
    var mirrorMesh = new THREE.Mesh( geometry, groundMirror.material );
	mirrorMesh.add( groundMirror );
	mirrorMesh.rotateX( - Math.PI / 2 );
    mirrorMesh.position.y = -113;
	scene.add( mirrorMesh );

    
    // renderer.autoClear = false;
    
    
    composer = new THREE.EffectComposer( renderer );
    var render = new THREE.RenderPass(scene, camera);
    var ts = new THREE.ShaderPass(THREE.CopyShader);
    var fxaa = new THREE.ShaderPass(THREE.FXAAShader);
    fxaa.uniforms.resolution.value.set(1 / (SCREEN_WIDTH), 1 / (SCREEN_HEIGHT));
    ts.renderToScreen = true;
    
    
    composer.addPass(render);
    composer.addPass(fxaa);
    composer.addPass(ts);
}   

function render(){
    
    console.log(camera.position);
    requestAnimationFrame( render );
    
    groundMirror.render();
    composer.render();
    // renderer.render(scene, camera);
    
    controls.update();
}










