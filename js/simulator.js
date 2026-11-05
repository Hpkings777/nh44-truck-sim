(()=>{var hu=0,Ec=1,uu=2;var $r=1,Io=2,Xs=3,Di=0,Kt=1,gn=2,xi=0,qs=1,Jr=2,bc=3,Tc=4,du=5;var ns=100,fu=101,pu=102,mu=103,gu=104,xu=200,_u=201,Mu=202,vu=203,wc=204,Ac=205,yu=206,Su=207,Eu=208,bu=209,Tu=210,wu=211,Au=212,Ru=213,Cu=214,Za=0,$a=1,Ja=2,Ps=3,Qa=4,ja=5,eo=6,to=7,Lo=0,Pu=1,Iu=2,jn=0,Qr=1,jr=2,ea=3,is=4,ta=5,na=6,ia=7;var Rc=300,ss=301,Ys=302,Do=303,No=304,on=1e3,an=1001,no=1002,en=1003,Lu=1004;var sa=1005;var tn=1006,Uo=1007;var _i=1008;var _n=1009,Cc=1010,Pc=1011,Ks=1012,Fo=1013,Gn=1014,Pn=1015,ln=1016,Oo=1017,Bo=1018,rs=1020,Ic=35902,Lc=35899,Dc=1021,Nc=1022,bn=1023,pi=1026,Mi=1027,Ho=1028,zo=1029,Ni=1030,Go=1031;var ko=1033,ra=33776,aa=33777,oa=33778,la=33779,Vo=35840,Wo=35841,Xo=35842,qo=35843,Yo=36196,Ko=37492,Zo=37496,$o=37488,Jo=37489,ca=37490,Qo=37491,jo=37808,el=37809,tl=37810,nl=37811,il=37812,sl=37813,rl=37814,al=37815,ol=37816,ll=37817,cl=37818,hl=37819,ul=37820,dl=37821,fl=36492,pl=36494,ml=36495,gl=36283,xl=36284,ha=36285,_l=36286;var xr=2300,io=2301,Ya=2302,uc=2303,dc=2400,fc=2401,pc=2402;var Du=3200;var ua=0,Nu=1,In="",Ct="srgb",_r="srgb-linear",Mr="linear",Tt="srgb";var Ka=7680;var Uu=519,Fu=512,Ou=513,Bu=514,Uc=515,Hu=516,zu=517,Fc=518,Oc=519,Gu=35044;var Bc="300 es",Cn=2e3,Is=2001;function Gd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function kd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function vr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ku(){let i=vr("canvas");return i.style.display="block",i}var Ph={},Ls=null;function Hc(...i){let e="THREE."+i.shift();Ls?Ls("log",e,...i):console.log(e,...i)}function Vu(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Je(...i){i=Vu(i);let e="THREE."+i.shift();if(Ls)Ls("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ot(...i){i=Vu(i);let e="THREE."+i.shift();if(Ls)Ls("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Wi(...i){let e=i.join(" ");e in Ph||(Ph[e]=!0,Je(...i))}function Wu(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Xu={[Za]:Za,[Ja]:eo,[Qa]:Qa,[Ps]:ja,[$a]:$a,[eo]:Ja,[to]:to,[ja]:Ps},Kn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ih=1234567,fr=Math.PI/180,Xi=180/Math.PI;function as(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function mt(i,e,t){return Math.max(e,Math.min(t,i))}function zc(i,e){return(i%e+e)%e}function Vd(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Wd(i,e,t){return i!==e?(t-i)/(e-i):0}function pr(i,e,t){return(1-t)*i+t*e}function Xd(i,e,t,n){return pr(i,e,1-Math.exp(-t*n))}function qd(i,e=1){return e-Math.abs(zc(i,e*2)-e)}function Yd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Kd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Zd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function $d(i,e){return i+Math.random()*(e-i)}function Jd(i){return i*(.5-Math.random())}function Qd(i){i!==void 0&&(Ih=i);let e=Ih+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jd(i){return i*fr}function ef(i){return i*Xi}function tf(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function nf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Gc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function sf(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),x=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*x,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*x,o*c);break;case"ZYZ":i.set(l*x,l*f,o*h,o*c);break;default:Je("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function kc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function qu(i,e){if(e.constructor===Float32Array)return i;let t=kc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Yu(i,e){if(e.constructor===Float32Array)return i;let t=kc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var Zs={DEG2RAD:fr,RAD2DEG:Xi,generateUUID:as,clamp:mt,euclideanModulo:zc,mapLinear:Vd,inverseLerp:Wd,lerp:pr,damp:Xd,pingpong:qd,smoothstep:Yd,smootherstep:Kd,randInt:Zd,randFloat:$d,randFloatSpread:Jd,seededRandom:Qd,degToRad:jd,radToDeg:ef,isPowerOfTwo:tf,ceilPowerOfTwo:nf,floorPowerOfTwo:Gc,setQuaternionFromProperEuler:sf,normalize:Yu,denormalize:qu},Kc=class Kc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Kc.prototype.isVector2=!0;var le=Kc,Zn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],x=r[a+2],S=r[a+3];if(u!==S||l!==d||c!==f||h!==x){let m=l*d+c*f+h*x+u*S;m<0&&(d=-d,f=-f,x=-x,S=-S,m=-m);let p=1-o;if(m<.9995){let y=Math.acos(m),T=Math.sin(y);p=Math.sin(p*y)/T,o=Math.sin(o*y)/T,l=l*p+d*o,c=c*p+f*o,h=h*p+x*o,u=u*p+S*o}else{l=l*p+d*o,c=c*p+f*o,h=h*p+x*o,u=u*p+S*o;let y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],x=r[a+3];return e[t]=o*x+h*u+l*f-c*d,e[t+1]=l*x+h*d+c*u-o*f,e[t+2]=c*x+h*f+o*d-l*u,e[t+3]=h*x-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*x,this._y=c*f*u-d*h*x,this._z=c*h*x+d*f*u,this._w=c*h*u-d*f*x;break;case"YXZ":this._x=d*h*u+c*f*x,this._y=c*f*u-d*h*x,this._z=c*h*x-d*f*u,this._w=c*h*u+d*f*x;break;case"ZXY":this._x=d*h*u-c*f*x,this._y=c*f*u+d*h*x,this._z=c*h*x+d*f*u,this._w=c*h*u-d*f*x;break;case"ZYX":this._x=d*h*u-c*f*x,this._y=c*f*u+d*h*x,this._z=c*h*x-d*f*u,this._w=c*h*u+d*f*x;break;case"YZX":this._x=d*h*u+c*f*x,this._y=c*f*u+d*h*x,this._z=c*h*x-d*f*u,this._w=c*h*u-d*f*x;break;case"XZY":this._x=d*h*u-c*f*x,this._y=c*f*u-d*h*x,this._z=c*h*x+d*f*u,this._w=c*h*u+d*f*x;break;default:Je("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Zc=class Zc{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Gl.copy(this).projectOnVector(e),this.sub(Gl)}reflect(e){return this.sub(Gl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Zc.prototype.isVector3=!0;var N=Zc,Gl=new N,Lh=new Zn,$c=class $c{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],x=n[8],S=s[0],m=s[3],p=s[6],y=s[1],T=s[4],v=s[7],R=s[2],w=s[5],_=s[8];return r[0]=a*S+o*y+l*R,r[3]=a*m+o*T+l*w,r[6]=a*p+o*v+l*_,r[1]=c*S+h*y+u*R,r[4]=c*m+h*T+u*w,r[7]=c*p+h*v+u*_,r[2]=d*S+f*y+x*R,r[5]=d*m+f*T+x*w,r[8]=d*p+f*v+x*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,x=t*u+n*d+s*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/x;return e[0]=u*S,e[1]=(s*c-h*n)*S,e[2]=(o*n-s*a)*S,e[3]=d*S,e[4]=(h*t-s*l)*S,e[5]=(s*r-o*t)*S,e[6]=f*S,e[7]=(n*l-c*t)*S,e[8]=(a*t-n*r)*S,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Wi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(kl.makeScale(e,t)),this}rotate(e){return Wi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(kl.makeRotation(-e)),this}translate(e,t){return Wi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(kl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};$c.prototype.isMatrix3=!0;var lt=$c,kl=new lt,Dh=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nh=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rf(){let i={enabled:!0,workingColorSpace:_r,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Tt&&(s.r=fi(s.r),s.g=fi(s.g),s.b=fi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Tt&&(s.r=Cs(s.r),s.g=Cs(s.g),s.b=Cs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===In?Mr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[_r]:{primaries:e,whitePoint:n,transfer:Mr,toXYZ:Dh,fromXYZ:Nh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ct},outputColorSpaceConfig:{drawingBufferColorSpace:Ct}},[Ct]:{primaries:e,whitePoint:n,transfer:Tt,toXYZ:Dh,fromXYZ:Nh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ct}}}),i}var gt=rf();function fi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Cs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ms,so=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ms===void 0&&(ms=vr("canvas")),ms.width=e.width,ms.height=e.height;let s=ms.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ms}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=vr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=fi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fi(t[n]/255)*255):t[n]=fi(t[n]);return{data:t,width:e.width,height:e.height}}else return Je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},af=0,Ds=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=as(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Vl(s[a].image)):r.push(Vl(s[a]))}else r=Vl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Vl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?so.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Je("Texture: Unable to serialize Texture."),{})}var of=0,Wl=new N,pn=class i extends Kn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=an,s=an,r=tn,a=_i,o=bn,l=_n,c=i.DEFAULT_ANISOTROPY,h=In){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:of++}),this.uuid=as(),this.name="",this.source=new Ds(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Wl).x}get height(){return this.source.getSize(Wl).y}get depth(){return this.source.getSize(Wl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Je(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case on:e.x=e.x-Math.floor(e.x);break;case an:e.x=e.x<0?0:1;break;case no:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case on:e.y=e.y-Math.floor(e.y);break;case an:e.y=e.y<0?0:1;break;case no:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=Rc;pn.DEFAULT_ANISOTROPY=1;var Jc=class Jc{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],x=l[9],S=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-S)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+S)<.1&&Math.abs(x+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(c+1)/2,v=(f+1)/2,R=(p+1)/2,w=(h+d)/4,_=(u+S)/4,E=(x+m)/4;return T>v&&T>R?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=w/n,r=_/n):v>R?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=w/s,r=E/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=_/r,s=E/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-x)*(m-x)+(u-S)*(u-S)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-x)/y,this.y=(u-S)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this.w=mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this.w=mt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Jc.prototype.isVector4=!0;var Bt=Jc,ro=class extends Kn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new pn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ds(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vt=class extends ro{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},yr=class extends pn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ao=class extends pn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Po=class Po{constructor(e,t,n,s,r,a,o,l,c,h,u,d,f,x,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,f,x,S,m)}set(e,t,n,s,r,a,o,l,c,h,u,d,f,x,S,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=x,p[11]=S,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Po().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/gs.setFromMatrixColumn(e,0).length(),r=1/gs.setFromMatrixColumn(e,1).length(),a=1/gs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,x=o*h,S=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+x*c,t[5]=d-S*c,t[9]=-o*l,t[2]=S-d*c,t[6]=x+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,x=c*h,S=c*u;t[0]=d+S*o,t[4]=x*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-x,t[6]=S+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,x=c*h,S=c*u;t[0]=d-S*o,t[4]=-a*u,t[8]=x+f*o,t[1]=f+x*o,t[5]=a*h,t[9]=S-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,x=o*h,S=o*u;t[0]=l*h,t[4]=x*c-f,t[8]=d*c+S,t[1]=l*u,t[5]=S*c+d,t[9]=f*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,x=o*l,S=o*c;t[0]=l*h,t[4]=S-d*u,t[8]=x*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+x,t[10]=d-S*u}else if(e.order==="XZY"){let d=a*l,f=a*c,x=o*l,S=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+S,t[5]=a*h,t[9]=f*u-x,t[2]=x*u-f,t[6]=o*h,t[10]=S*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lf,e,cf)}lookAt(e,t,n){let s=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Ei.crossVectors(n,vn),Ei.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Ei.crossVectors(n,vn)),Ei.normalize(),Sa.crossVectors(vn,Ei),s[0]=Ei.x,s[4]=Sa.x,s[8]=vn.x,s[1]=Ei.y,s[5]=Sa.y,s[9]=vn.y,s[2]=Ei.z,s[6]=Sa.z,s[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],x=n[2],S=n[6],m=n[10],p=n[14],y=n[3],T=n[7],v=n[11],R=n[15],w=s[0],_=s[4],E=s[8],L=s[12],P=s[1],O=s[5],G=s[9],K=s[13],D=s[2],H=s[6],X=s[10],Y=s[14],ce=s[3],$=s[7],ie=s[11],re=s[15];return r[0]=a*w+o*P+l*D+c*ce,r[4]=a*_+o*O+l*H+c*$,r[8]=a*E+o*G+l*X+c*ie,r[12]=a*L+o*K+l*Y+c*re,r[1]=h*w+u*P+d*D+f*ce,r[5]=h*_+u*O+d*H+f*$,r[9]=h*E+u*G+d*X+f*ie,r[13]=h*L+u*K+d*Y+f*re,r[2]=x*w+S*P+m*D+p*ce,r[6]=x*_+S*O+m*H+p*$,r[10]=x*E+S*G+m*X+p*ie,r[14]=x*L+S*K+m*Y+p*re,r[3]=y*w+T*P+v*D+R*ce,r[7]=y*_+T*O+v*H+R*$,r[11]=y*E+T*G+v*X+R*ie,r[15]=y*L+T*K+v*Y+R*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],x=e[3],S=e[7],m=e[11],p=e[15],y=l*f-c*d,T=o*f-c*u,v=o*d-l*u,R=a*f-c*h,w=a*d-l*h,_=a*u-o*h;return t*(S*y-m*T+p*v)-n*(x*y-m*R+p*w)+s*(x*T-S*R+p*_)-r*(x*v-S*w+m*_)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],x=e[12],S=e[13],m=e[14],p=e[15],y=t*o-n*a,T=t*l-s*a,v=t*c-r*a,R=n*l-s*o,w=n*c-r*o,_=s*c-r*l,E=h*S-u*x,L=h*m-d*x,P=h*p-f*x,O=u*m-d*S,G=u*p-f*S,K=d*p-f*m,D=y*K-T*G+v*O+R*P-w*L+_*E;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/D;return e[0]=(o*K-l*G+c*O)*H,e[1]=(s*G-n*K-r*O)*H,e[2]=(S*_-m*w+p*R)*H,e[3]=(d*w-u*_-f*R)*H,e[4]=(l*P-a*K-c*L)*H,e[5]=(t*K-s*P+r*L)*H,e[6]=(m*v-x*_-p*T)*H,e[7]=(h*_-d*v+f*T)*H,e[8]=(a*G-o*P+c*E)*H,e[9]=(n*P-t*G-r*E)*H,e[10]=(x*w-S*v+p*y)*H,e[11]=(u*v-h*w-f*y)*H,e[12]=(o*L-a*O-l*E)*H,e[13]=(t*O-n*L+s*E)*H,e[14]=(S*T-x*R-m*y)*H,e[15]=(h*R-u*T+d*y)*H,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,x=r*u,S=a*h,m=a*u,p=o*u,y=l*c,T=l*h,v=l*u,R=n.x,w=n.y,_=n.z;return s[0]=(1-(S+p))*R,s[1]=(f+v)*R,s[2]=(x-T)*R,s[3]=0,s[4]=(f-v)*w,s[5]=(1-(d+p))*w,s[6]=(m+y)*w,s[7]=0,s[8]=(x+T)*_,s[9]=(m-y)*_,s[10]=(1-(d+S))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=gs.set(s[0],s[1],s[2]).length(),o=gs.set(s[4],s[5],s[6]).length(),l=gs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),On.copy(this);let c=1/a,h=1/o,u=1/l;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=h,On.elements[5]*=h,On.elements[6]*=h,On.elements[8]*=u,On.elements[9]*=u,On.elements[10]*=u,t.setFromRotationMatrix(On),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Cn,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),x,S;if(l)x=r/(a-r),S=a*r/(a-r);else if(o===Cn)x=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===Is)x=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Cn,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),x,S;if(l)x=1/(a-r),S=a/(a-r);else if(o===Cn)x=-2/(a-r),S=-(a+r)/(a-r);else if(o===Is)x=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Po.prototype.isMatrix4=!0;var Lt=Po,gs=new N,On=new Lt,lf=new N(0,0,0),cf=new N(1,1,1),Ei=new N,Sa=new N,vn=new N,Uh=new Lt,Fh=new Zn,$n=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(mt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Uh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fh.setFromEuler(this),this.setFromQuaternion(Fh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$n.DEFAULT_ORDER="XYZ";var Sr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},hf=0,Oh=new N,xs=new Zn,li=new Lt,Ea=new N,rr=new N,uf=new N,df=new Zn,Bh=new N(1,0,0),Hh=new N(0,1,0),zh=new N(0,0,1),Gh={type:"added"},ff={type:"removed"},_s={type:"childadded",child:null},Xl={type:"childremoved",child:null},Ut=class i extends Kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=as(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new N,t=new $n,n=new Zn,s=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Lt},normalMatrix:{value:new lt}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.multiply(xs),this}rotateOnWorldAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.premultiply(xs),this}rotateX(e){return this.rotateOnAxis(Bh,e)}rotateY(e){return this.rotateOnAxis(Hh,e)}rotateZ(e){return this.rotateOnAxis(zh,e)}translateOnAxis(e,t){return Oh.copy(e).applyQuaternion(this.quaternion),this.position.add(Oh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bh,e)}translateY(e){return this.translateOnAxis(Hh,e)}translateZ(e){return this.translateOnAxis(zh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ea.copy(e):Ea.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(rr,Ea,this.up):li.lookAt(Ea,rr,this.up),this.quaternion.setFromRotationMatrix(li),s&&(li.extractRotation(s.matrixWorld),xs.setFromRotationMatrix(li),this.quaternion.premultiply(xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gh),_s.child=e,this.dispatchEvent(_s),_s.child=null):ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ff),Xl.child=e,this.dispatchEvent(Xl),Xl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gh),_s.child=e,this.dispatchEvent(_s),_s.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,e,uf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,df,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ut.DEFAULT_UP=new N(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var It=class extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}},pf={type:"move"},Ns=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new It,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new It,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new It,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let S of e.hand.values()){let m=t.getJointPose(S,n),p=this._getHandJoint(c,S);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,x=.005;c.inputState.pinching&&d>f+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new It;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ku={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},ba={h:0,s:0,l:0};function ql(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ye=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,gt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=gt.workingColorSpace){if(e=zc(e,1),t=mt(t,0,1),n=mt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ql(a,r,e+1/3),this.g=ql(a,r,e),this.b=ql(a,r,e-1/3)}return gt.colorSpaceToWorking(this,s),this}setStyle(e,t=Ct){function n(r){r!==void 0&&parseFloat(r)<1&&Je("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Je("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){let n=Ku[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fi(e.r),this.g=fi(e.g),this.b=fi(e.b),this}copyLinearToSRGB(e){return this.r=Cs(e.r),this.g=Cs(e.g),this.b=Cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return gt.workingToColorSpace(hn.copy(this),e),Math.round(mt(hn.r*255,0,255))*65536+Math.round(mt(hn.g*255,0,255))*256+Math.round(mt(hn.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.workingToColorSpace(hn.copy(this),t);let n=hn.r,s=hn.g,r=hn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=gt.workingColorSpace){return gt.workingToColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=Ct){gt.workingToColorSpace(hn.copy(this),e);let t=hn.r,n=hn.g,s=hn.b;return e!==Ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(bi),this.setHSL(bi.h+e,bi.s+t,bi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(bi),e.getHSL(ba);let n=pr(bi.h,ba.h,t),s=pr(bi.s,ba.s,t),r=pr(bi.l,ba.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new Ye;Ye.NAMES=Ku;var Er=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ye(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},qi=class extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Bn=new N,ci=new N,Yl=new N,hi=new N,Ms=new N,vs=new N,kh=new N,Kl=new N,Zl=new N,$l=new N,Jl=new Bt,Ql=new Bt,jl=new Bt,Ri=class i{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Bn.subVectors(e,t),s.cross(Bn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Bn.subVectors(s,t),ci.subVectors(n,t),Yl.subVectors(e,t);let a=Bn.dot(Bn),o=Bn.dot(ci),l=Bn.dot(Yl),c=ci.dot(ci),h=ci.dot(Yl),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,x=(a*h-o*l)*d;return r.set(1-f-x,x,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,hi.x),l.addScaledVector(a,hi.y),l.addScaledVector(o,hi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Jl.setScalar(0),Ql.setScalar(0),jl.setScalar(0),Jl.fromBufferAttribute(e,t),Ql.fromBufferAttribute(e,n),jl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Jl,r.x),a.addScaledVector(Ql,r.y),a.addScaledVector(jl,r.z),a}static isFrontFacing(e,t,n,s){return Bn.subVectors(n,t),ci.subVectors(e,t),Bn.cross(ci).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Bn.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ms.subVectors(s,n),vs.subVectors(r,n),Kl.subVectors(e,n);let l=Ms.dot(Kl),c=vs.dot(Kl);if(l<=0&&c<=0)return t.copy(n);Zl.subVectors(e,s);let h=Ms.dot(Zl),u=vs.dot(Zl);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(n).addScaledVector(Ms,a);$l.subVectors(e,r);let f=Ms.dot($l),x=vs.dot($l);if(x>=0&&f<=x)return t.copy(r);let S=f*c-l*x;if(S<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(n).addScaledVector(vs,o);let m=h*x-f*u;if(m<=0&&u-h>=0&&f-x>=0)return kh.subVectors(r,s),o=(u-h)/(u-h+(f-x)),t.copy(s).addScaledVector(kh,o);let p=1/(m+S+d);return a=S*p,o=d*p,t.copy(n).addScaledVector(Ms,a).addScaledVector(vs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Jn=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Hn):Hn.fromBufferAttribute(r,a),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ta.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ta.copy(n.boundingBox)),Ta.applyMatrix4(e.matrixWorld),this.union(Ta)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ar),wa.subVectors(this.max,ar),ys.subVectors(e.a,ar),Ss.subVectors(e.b,ar),Es.subVectors(e.c,ar),Ti.subVectors(Ss,ys),wi.subVectors(Es,Ss),Hi.subVectors(ys,Es);let t=[0,-Ti.z,Ti.y,0,-wi.z,wi.y,0,-Hi.z,Hi.y,Ti.z,0,-Ti.x,wi.z,0,-wi.x,Hi.z,0,-Hi.x,-Ti.y,Ti.x,0,-wi.y,wi.x,0,-Hi.y,Hi.x,0];return!ec(t,ys,Ss,Es,wa)||(t=[1,0,0,0,1,0,0,0,1],!ec(t,ys,Ss,Es,wa))?!1:(Aa.crossVectors(Ti,wi),t=[Aa.x,Aa.y,Aa.z],ec(t,ys,Ss,Es,wa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ui=[new N,new N,new N,new N,new N,new N,new N,new N],Hn=new N,Ta=new Jn,ys=new N,Ss=new N,Es=new N,Ti=new N,wi=new N,Hi=new N,ar=new N,wa=new N,Aa=new N,zi=new N;function ec(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){zi.fromArray(i,r);let o=s.x*Math.abs(zi.x)+s.y*Math.abs(zi.y)+s.z*Math.abs(zi.z),l=e.dot(zi),c=t.dot(zi),h=n.dot(zi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Xt=new N,Ra=new le,mf=0,Nt=class extends Kn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Gu,this.updateRanges=[],this.gpuType=Pn,this.version=0,this._normalizationScale=e!==void 0?kc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ra.fromBufferAttribute(this,t),Ra.applyMatrix3(e),this.setXY(t,Ra.x,Ra.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix3(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):qu(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Yu(e,this.array)}};var br=class extends Nt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Tr=class extends Nt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Et=class extends Nt{constructor(e,t,n){super(new Float32Array(e),t,n)}},gf=new Jn,or=new N,tc=new N,mi=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):gf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;or.subVectors(e,this.center);let t=or.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(or,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(or.copy(e.center).add(tc)),this.expandByPoint(or.copy(e.center).sub(tc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},xf=0,Rn=new Lt,nc=new Ut,bs=new N,yn=new Jn,lr=new Jn,Qt=new N,Ot=class i extends Kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=as(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gd(e)?Tr:br)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new lt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,t,n){return Rn.makeTranslation(e,t,n),this.applyMatrix4(Rn),this}scale(e,t,n){return Rn.makeScale(e,t,n),this.applyMatrix4(Rn),this}lookAt(e){return nc.lookAt(e),nc.updateMatrix(),this.applyMatrix4(nc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Et(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){let n=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];lr.setFromBufferAttribute(o),this.morphTargetsRelative?(Qt.addVectors(yn.min,lr.min),yn.expandByPoint(Qt),Qt.addVectors(yn.max,lr.max),yn.expandByPoint(Qt)):(yn.expandByPoint(lr.min),yn.expandByPoint(lr.max))}yn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Qt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Qt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Qt.fromBufferAttribute(o,c),l&&(bs.fromBufferAttribute(e,c),Qt.add(bs)),s=Math.max(s,n.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Nt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let L=0;L<n.count;L++)o[L]=new N,l[L]=new N;let h=new N,u=new N,d=new N,f=new le,x=new le,S=new le,m=new N,p=new N;function y(L,P,O){c[L]=c[P]=c[O]=1,h.fromBufferAttribute(n,L),u.fromBufferAttribute(n,P),d.fromBufferAttribute(n,O),f.fromBufferAttribute(r,L),x.fromBufferAttribute(r,P),S.fromBufferAttribute(r,O),u.sub(h),d.sub(h),x.sub(f),S.sub(f);let G=1/(x.x*S.y-S.x*x.y);isFinite(G)&&(m.copy(u).multiplyScalar(S.y).addScaledVector(d,-x.y).multiplyScalar(G),p.copy(d).multiplyScalar(x.x).addScaledVector(u,-S.x).multiplyScalar(G),o[L].add(m),o[P].add(m),o[O].add(m),l[L].add(p),l[P].add(p),l[O].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let L=0,P=T.length;L<P;++L){let O=T[L],G=O.start,K=O.count;for(let D=G,H=G+K;D<H;D+=3)y(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let v=new N,R=new N,w=new N,_=new N;function E(L){w.fromBufferAttribute(s,L),_.copy(w);let P=o[L];v.copy(P),v.sub(w.multiplyScalar(w.dot(P))).normalize(),R.crossVectors(_,P);let G=R.dot(l[L])<0?-1:1;a.setXYZW(L,v.x,v.y,v.z,G)}for(let L=0,P=n.count;L<P;++L)c[L]&&E(L);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Nt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new N,r=new N,a=new N,o=new N,l=new N,c=new N,h=new N,u=new N;if(e)for(let d=0,f=e.count;d<f;d+=3){let x=e.getX(d+0),S=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,S),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Qt.fromBufferAttribute(e,t),Qt.normalize(),e.setXYZ(t,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,x=0;for(let S=0,m=l.length;S<m;S++){o.isInterleavedBufferAttribute?f=l[S]*o.data.stride+o.offset:f=l[S]*h;for(let p=0;p<h;p++)d[x++]=c[f++]}return new Nt(d,h,u)}if(this.index===null)return Je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var ic=new N,_f=new N,Mf=new lt,zn=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=ic.subVectors(n,t).cross(_f.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(ic),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Mf.getNormalMatrix(e),s=this.coplanarPoint(ic).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},vf=0,Qn=class extends Kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=as(),this.name="",this.type="Material",this.blending=qs,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wc,this.blendDst=Ac,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ka,this.stencilZFail=Ka,this.stencilZPass=Ka,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Je(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ye().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new zn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new le().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new le().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var di=new N,sc=new N,Ca=new N,Pa=new N,wr=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,t),di.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){sc.copy(e).add(t).multiplyScalar(.5),Ca.copy(t).sub(e).normalize(),Pa.copy(this.origin).sub(sc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ca),o=Pa.dot(this.direction),l=-Pa.dot(Ca),c=Pa.lengthSq(),h=Math.abs(1-a*a),u,d,f,x;if(h>0)if(u=a*l-o,d=a*o-l,x=r*h,u>=0)if(d>=-x)if(d<=x){let S=1/h;u*=S,d*=S,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-x?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=x?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(sc).addScaledVector(Ca,d),f}intersectSphere(e,t){if(e.radius<0)return null;di.subVectors(e.center,this.origin);let n=di.dot(this.direction),s=di.dot(di)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,x=t.x-a.x,S=t.y-a.y,m=t.z-a.z,p=n.x-a.x,y=n.y-a.y,T=n.z-a.z,v=Math.abs(l),R=Math.abs(c),w=Math.abs(h),_,E,L,P,O,G,K,D,H,X,Y,ce;if(v>=R&&v>=w?(L=l,G=u,H=x,ce=p,l>=0?(_=c,E=h,P=d,O=f,K=S,D=m,X=y,Y=T):(_=h,E=c,P=f,O=d,K=m,D=S,X=T,Y=y)):R>=w?(L=c,G=d,H=S,ce=y,c>=0?(_=h,E=l,P=f,O=u,K=m,D=x,X=T,Y=p):(_=l,E=h,P=u,O=f,K=x,D=m,X=p,Y=T)):(L=h,G=f,H=m,ce=T,h>=0?(_=l,E=c,P=u,O=d,K=x,D=S,X=p,Y=y):(_=c,E=l,P=d,O=u,K=S,D=x,X=y,Y=p)),L===0)return null;let $=_/L,ie=E/L,re=1/L,me=P-$*G,ze=O-ie*G,Q=K-$*H,Te=D-ie*H,Ie=X-$*ce,we=Y-ie*ce,ve=Ie*Te-we*Q,Ge=me*we-ze*Ie,ut=Q*ze-Te*me;if(s){if(ve<0||Ge<0||ut<0)return null}else if((ve<0||Ge<0||ut<0)&&(ve>0||Ge>0||ut>0))return null;let Ve=ve+Ge+ut;if(Ve===0)return null;let $e=re*(ve*G+Ge*H+ut*ce);return(Ve>0?$e<0:$e>0)?null:this.at($e/Ve,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},vt=class extends Qn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=Lo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Vh=new Lt,Gi=new wr,Ia=new mi,Wh=new N,La=new N,Da=new N,Na=new N,rc=new N,Ua=new N,Xh=new N,Fa=new N,B=class extends Ut{constructor(e=new Ot,t=new vt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Ua.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(rc.fromBufferAttribute(u,e),a?Ua.addScaledVector(rc,h):Ua.addScaledVector(rc.sub(t),h))}t.add(Ua)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ia.copy(n.boundingSphere),Ia.applyMatrix4(r),Gi.copy(e.ray).recast(e.near),!(Ia.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(Ia,Wh)===null||Gi.origin.distanceToSquared(Wh)>(e.far-e.near)**2))&&(Vh.copy(r).invert(),Gi.copy(e.ray).applyMatrix4(Vh),!(n.boundingBox!==null&&Gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Gi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,S=d.length;x<S;x++){let m=d[x],p=a[m.materialIndex],y=Math.max(m.start,f.start),T=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,R=T;v<R;v+=3){let w=o.getX(v),_=o.getX(v+1),E=o.getX(v+2);s=Oa(this,p,e,n,c,h,u,w,_,E),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let x=Math.max(0,f.start),S=Math.min(o.count,f.start+f.count);for(let m=x,p=S;m<p;m+=3){let y=o.getX(m),T=o.getX(m+1),v=o.getX(m+2);s=Oa(this,a,e,n,c,h,u,y,T,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,S=d.length;x<S;x++){let m=d[x],p=a[m.materialIndex],y=Math.max(m.start,f.start),T=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,R=T;v<R;v+=3){let w=v,_=v+1,E=v+2;s=Oa(this,p,e,n,c,h,u,w,_,E),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let x=Math.max(0,f.start),S=Math.min(l.count,f.start+f.count);for(let m=x,p=S;m<p;m+=3){let y=m,T=m+1,v=m+2;s=Oa(this,a,e,n,c,h,u,y,T,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function yf(i,e,t,n,s,r,a,o){let l;if(e.side===Kt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Di,o),l===null)return null;Fa.copy(o),Fa.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Fa);return c<t.near||c>t.far?null:{distance:c,point:Fa.clone(),object:i}}function Oa(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,La),i.getVertexPosition(l,Da),i.getVertexPosition(c,Na);let h=yf(i,e,t,n,La,Da,Na,Xh);if(h){let u=new N;Ri.getBarycoord(Xh,La,Da,Na,u),s&&(h.uv=Ri.getInterpolatedAttribute(s,o,l,c,u,new le)),r&&(h.uv1=Ri.getInterpolatedAttribute(r,o,l,c,u,new le)),a&&(h.normal=Ri.getInterpolatedAttribute(a,o,l,c,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new N,materialIndex:0};Ri.getNormal(La,Da,Na,d.normal),h.face=d,h.barycoord=u}return h}var Ar=class extends pn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=en,h=en,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Rr=class extends Nt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ts=new Lt,qh=new Lt,Ba=[],Yh=new Jn,Sf=new Lt,cr=new B,hr=new mi,mn=class extends B{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Rr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Sf)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Jn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ts),Yh.copy(e.boundingBox).applyMatrix4(Ts),this.boundingBox.union(Yh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new mi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ts),hr.copy(e.boundingSphere).applyMatrix4(Ts),this.boundingSphere.union(hr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(cr.geometry=this.geometry,cr.material=this.material,cr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hr.copy(this.boundingSphere),hr.applyMatrix4(n),e.ray.intersectsSphere(hr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ts),qh.multiplyMatrices(n,Ts),cr.matrixWorld=qh,cr.raycast(e,Ba);for(let a=0,o=Ba.length;a<o;a++){let l=Ba[a];l.instanceId=r,l.object=this,t.push(l)}Ba.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Rr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ar(new Float32Array(s*this.count),s,this.count,Ho,Pn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ki=new mi,Ef=new le(.5,.5),Ha=new N,Ci=class{constructor(e=new zn,t=new zn,n=new zn,s=new zn,r=new zn,a=new zn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Cn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],x=r[8],S=r[9],m=r[10],p=r[11],y=r[12],T=r[13],v=r[14],R=r[15];if(s[0].setComponents(c-a,f-h,p-x,R-y).normalize(),s[1].setComponents(c+a,f+h,p+x,R+y).normalize(),s[2].setComponents(c+o,f+u,p+S,R+T).normalize(),s[3].setComponents(c-o,f-u,p-S,R-T).normalize(),n)s[4].setComponents(l,d,m,v).normalize(),s[5].setComponents(c-l,f-d,p-m,R-v).normalize();else if(s[4].setComponents(c-l,f-d,p-m,R-v).normalize(),t===Cn)s[5].setComponents(c+l,f+d,p+m,R+v).normalize();else if(t===Is)s[5].setComponents(l,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(e){ki.center.set(0,0,0);let t=Ef.distanceTo(e.center);return ki.radius=.7071067811865476+t,ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ha.x=s.normal.x>0?e.max.x:e.min.x,Ha.y=s.normal.y>0?e.max.y:e.min.y,Ha.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ha)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Kh=new Lt,oo=class i{constructor(){this.coordinateSystem=Cn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Kh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Ci),n[s].setFromProjectionMatrix(Kh,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Ci),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var Us=class extends Qn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},lo=new N,co=new N,Zh=new Lt,ur=new wr,za=new mi,ac=new N,$h=new N,Fs=class extends Ut{constructor(e=new Ot,t=new Us){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)lo.fromBufferAttribute(t,s-1),co.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=lo.distanceTo(co);e.setAttribute("lineDistance",new Et(n,1))}else Je("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),za.copy(n.boundingSphere),za.applyMatrix4(s),za.radius+=r,e.ray.intersectsSphere(za)===!1)return;Zh.copy(s).invert(),ur.copy(e.ray).applyMatrix4(Zh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),x=Math.min(h.count,a.start+a.count);for(let S=f,m=x-1;S<m;S+=c){let p=h.getX(S),y=h.getX(S+1),T=Ga(this,e,ur,l,p,y,S);T&&t.push(T)}if(this.isLineLoop){let S=h.getX(x-1),m=h.getX(f),p=Ga(this,e,ur,l,S,m,x-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),x=Math.min(d.count,a.start+a.count);for(let S=f,m=x-1;S<m;S+=c){let p=Ga(this,e,ur,l,S,S+1,S);p&&t.push(p)}if(this.isLineLoop){let S=Ga(this,e,ur,l,x-1,f,x-1);S&&t.push(S)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ga(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(lo.fromBufferAttribute(o,s),co.fromBufferAttribute(o,r),t.distanceSqToSegment(lo,co,ac,$h)>n)return;ac.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ac);if(!(c<e.near||c>e.far))return{distance:c,point:$h.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Cr=class extends pn{constructor(e=[],t=ss,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},kt=class extends pn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var gi=class extends pn{constructor(e,t,n=Gn,s,r,a,o=en,l=en,c,h=pi,u=1){if(h!==pi&&h!==Mi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ds(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Pr=class extends gi{constructor(e,t=Gn,n=ss,s,r,a=en,o=en,l,c=pi){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ir=class extends pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},We=class i extends Ot{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,s,a,2),x("x","z","y",1,-1,e,n,-t,s,a,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Et(c,3)),this.setAttribute("normal",new Et(h,3)),this.setAttribute("uv",new Et(u,2));function x(S,m,p,y,T,v,R,w,_,E,L){let P=v/_,O=R/E,G=v/2,K=R/2,D=w/2,H=_+1,X=E+1,Y=0,ce=0,$=new N;for(let ie=0;ie<X;ie++){let re=ie*O-K;for(let me=0;me<H;me++){let ze=me*P-G;$[S]=ze*y,$[m]=re*T,$[p]=D,c.push($.x,$.y,$.z),$[S]=0,$[m]=0,$[p]=w>0?1:-1,h.push($.x,$.y,$.z),u.push(me/_),u.push(1-ie/E),Y+=1}}for(let ie=0;ie<E;ie++)for(let re=0;re<_;re++){let me=d+re+H*ie,ze=d+re+H*(ie+1),Q=d+(re+1)+H*(ie+1),Te=d+(re+1)+H*ie;l.push(me,ze,Te),l.push(ze,Q,Te),ce+=6}o.addGroup(f,ce,L),f+=ce,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Ke=class i extends Ot{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],x=0,S=[],m=n/2,p=0;y(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new Et(u,3)),this.setAttribute("normal",new Et(d,3)),this.setAttribute("uv",new Et(f,2));function y(){let v=new N,R=new N,w=0,_=(t-e)/n;for(let E=0;E<=r;E++){let L=[],P=E/r,O=P*(t-e)+e;for(let G=0;G<=s;G++){let K=G/s,D=K*l+o,H=Math.sin(D),X=Math.cos(D);R.x=O*H,R.y=-P*n+m,R.z=O*X,u.push(R.x,R.y,R.z),v.set(H,_,X).normalize(),d.push(v.x,v.y,v.z),f.push(K,1-P),L.push(x++)}S.push(L)}for(let E=0;E<s;E++)for(let L=0;L<r;L++){let P=S[L][E],O=S[L+1][E],G=S[L+1][E+1],K=S[L][E+1];(e>0||L!==0)&&(h.push(P,O,K),w+=3),(t>0||L!==r-1)&&(h.push(O,G,K),w+=3)}c.addGroup(p,w,0),p+=w}function T(v){let R=x,w=new le,_=new N,E=0,L=v===!0?e:t,P=v===!0?1:-1;for(let G=1;G<=s;G++)u.push(0,m*P,0),d.push(0,P,0),f.push(.5,.5),x++;let O=x;for(let G=0;G<=s;G++){let D=G/s*l+o,H=Math.cos(D),X=Math.sin(D);_.x=L*X,_.y=m*P,_.z=L*H,u.push(_.x,_.y,_.z),d.push(0,P,0),w.x=H*.5+.5,w.y=X*.5*P+.5,f.push(w.x,w.y),x++}for(let G=0;G<s;G++){let K=R+G,D=O+G;v===!0?h.push(D,D+1,K):h.push(D+1,D,K),E+=3}c.addGroup(p,E,v===!0?1:2),p+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Lr=class i extends Ke{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ho=class i extends Ot{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new Et(r,3)),this.setAttribute("normal",new Et(r.slice(),3)),this.setAttribute("uv",new Et(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let T=new N,v=new N,R=new N;for(let w=0;w<t.length;w+=3)f(t[w+0],T),f(t[w+1],v),f(t[w+2],R),l(T,v,R,y)}function l(y,T,v,R){let w=R+1,_=[];for(let E=0;E<=w;E++){_[E]=[];let L=y.clone().lerp(v,E/w),P=T.clone().lerp(v,E/w),O=w-E;for(let G=0;G<=O;G++)G===0&&E===w?_[E][G]=L:_[E][G]=L.clone().lerp(P,G/O)}for(let E=0;E<w;E++)for(let L=0;L<2*(w-E)-1;L++){let P=Math.floor(L/2);L%2===0?(d(_[E][P+1]),d(_[E+1][P]),d(_[E][P])):(d(_[E][P+1]),d(_[E+1][P+1]),d(_[E+1][P]))}}function c(y){let T=new N;for(let v=0;v<r.length;v+=3)T.x=r[v+0],T.y=r[v+1],T.z=r[v+2],T.normalize().multiplyScalar(y),r[v+0]=T.x,r[v+1]=T.y,r[v+2]=T.z}function h(){let y=new N;for(let T=0;T<r.length;T+=3){y.x=r[T+0],y.y=r[T+1],y.z=r[T+2];let v=m(y)/2/Math.PI+.5,R=p(y)/Math.PI+.5;a.push(v,1-R)}x(),u()}function u(){for(let y=0;y<a.length;y+=6){let T=a[y+0],v=a[y+2],R=a[y+4],w=Math.max(T,v,R),_=Math.min(T,v,R);w>.9&&_<.1&&(T<.2&&(a[y+0]+=1),v<.2&&(a[y+2]+=1),R<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,T){let v=y*3;T.x=e[v+0],T.y=e[v+1],T.z=e[v+2]}function x(){let y=new N,T=new N,v=new N,R=new N,w=new le,_=new le,E=new le;for(let L=0,P=0;L<r.length;L+=9,P+=6){y.set(r[L+0],r[L+1],r[L+2]),T.set(r[L+3],r[L+4],r[L+5]),v.set(r[L+6],r[L+7],r[L+8]),w.set(a[P+0],a[P+1]),_.set(a[P+2],a[P+3]),E.set(a[P+4],a[P+5]),R.copy(y).add(T).add(v).divideScalar(3);let O=m(R);S(w,P+0,y,O),S(_,P+2,T,O),S(E,P+4,v,O)}}function S(y,T,v,R){R<0&&y.x===1&&(a[T]=y.x-1),v.x===0&&v.z===0&&(a[T]=R/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var Sn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Je("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new le:new N);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new N,s=[],r=[],a=[],o=new N,l=new Lt;for(let f=0;f<=e;f++){let x=f/e;s[f]=this.getTangentAt(x,new N)}r[0]=new N,a[0]=new N;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(mt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,x))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(mt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let x=1;x<=e;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],f*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Os=class extends Sn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new le){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},uo=class extends Os{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Vc(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Jh=new N,Qh=new N,oc=new Vc,lc=new Vc,cc=new Vc,Bs=class extends Sn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new N){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Qh.subVectors(s[0],s[1]).add(s[0]),c=Qh);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Jh.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Jh),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(u),f),S=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);S<1e-4&&(S=1),x<1e-4&&(x=S),m<1e-4&&(m=S),oc.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,x,S,m),lc.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,x,S,m),cc.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,x,S,m)}else this.curveType==="catmullrom"&&(oc.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),lc.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),cc.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(oc.calc(l),lc.calc(l),cc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new N().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function jh(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function bf(i,e){let t=1-i;return t*t*e}function Tf(i,e){return 2*(1-i)*i*e}function wf(i,e){return i*i*e}function mr(i,e,t,n){return bf(i,e)+Tf(i,t)+wf(i,n)}function Af(i,e){let t=1-i;return t*t*t*e}function Rf(i,e){let t=1-i;return 3*t*t*i*e}function Cf(i,e){return 3*(1-i)*i*i*e}function Pf(i,e){return i*i*i*e}function gr(i,e,t,n,s){return Af(i,e)+Rf(i,t)+Cf(i,n)+Pf(i,s)}var Dr=class extends Sn{constructor(e=new le,t=new le,n=new le,s=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new le){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(gr(e,s.x,r.x,a.x,o.x),gr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},fo=class extends Sn{constructor(e=new N,t=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new N){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(gr(e,s.x,r.x,a.x,o.x),gr(e,s.y,r.y,a.y,o.y),gr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Nr=class extends Sn{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},po=class extends Sn{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ur=class extends Sn{constructor(e=new le,t=new le,n=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new le){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(mr(e,s.x,r.x,a.x),mr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fr=class extends Sn{constructor(e=new N,t=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new N){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(mr(e,s.x,r.x,a.x),mr(e,s.y,r.y,a.y),mr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Or=class extends Sn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(jh(o,l.x,c.x,h.x,u.x),jh(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new le().fromArray(s))}return this}},mo=Object.freeze({__proto__:null,ArcCurve:uo,CatmullRomCurve3:Bs,CubicBezierCurve:Dr,CubicBezierCurve3:fo,EllipseCurve:Os,LineCurve:Nr,LineCurve3:po,QuadraticBezierCurve:Ur,QuadraticBezierCurve3:Fr,SplineCurve:Or}),go=class extends Sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new mo[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new mo[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Br=class extends go{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Nr(this.currentPoint.clone(),new le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Ur(this.currentPoint.clone(),new le(e,t),new le(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Dr(this.currentPoint.clone(),new le(e,t),new le(n,s),new le(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Or(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Os(e,t,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Yi=class extends Br{constructor(e){super(e),this.uuid=as(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Br().fromJSON(s))}return this}};function If(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Zu(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Ff(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let h=o,u=l;for(let d=t;d<s;d+=t){let f=i[d],x=i[d+1];f<o&&(o=f),x<l&&(l=x),f>h&&(h=f),x>u&&(u=x)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Hr(r,a,t,o,l,c,0),a}function Zu(i,e,t,n,s){let r;if(s===Yf(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=eu(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=eu(a/n|0,i[a],i[a+1],r);return r&&Hs(r,r.next)&&(Gr(r),r=r.next),r}function Ki(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Hs(t,t.next)||Gt(t.prev,t,t.next)===0)){if(Gr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Hr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Gf(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Df(i,n,s,r):Lf(i)){e.push(l.i,i.i,c.i),Gr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Nf(Ki(i),e),Hr(i,e,t,n,s,r,2)):a===2&&Uf(i,e,t,n,s,r):Hr(Ki(i),e,t,n,s,r,1);break}}}function Lf(i){let e=i.prev,t=i,n=i.next;if(Gt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c),x=n.next;for(;x!==e;){if(x.x>=h&&x.x<=d&&x.y>=u&&x.y<=f&&dr(s,o,r,l,a,c,x.x,x.y)&&Gt(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function Df(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Gt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=Math.min(o,l,c),x=Math.min(h,u,d),S=Math.max(o,l,c),m=Math.max(h,u,d),p=mc(f,x,e,t,n),y=mc(S,m,e,t,n),T=i.prevZ,v=i.nextZ;for(;T&&T.z>=p&&v&&v.z<=y;){if(T.x>=f&&T.x<=S&&T.y>=x&&T.y<=m&&T!==s&&T!==a&&dr(o,h,l,u,c,d,T.x,T.y)&&Gt(T.prev,T,T.next)>=0||(T=T.prevZ,v.x>=f&&v.x<=S&&v.y>=x&&v.y<=m&&v!==s&&v!==a&&dr(o,h,l,u,c,d,v.x,v.y)&&Gt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;T&&T.z>=p;){if(T.x>=f&&T.x<=S&&T.y>=x&&T.y<=m&&T!==s&&T!==a&&dr(o,h,l,u,c,d,T.x,T.y)&&Gt(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;v&&v.z<=y;){if(v.x>=f&&v.x<=S&&v.y>=x&&v.y<=m&&v!==s&&v!==a&&dr(o,h,l,u,c,d,v.x,v.y)&&Gt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Nf(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Hs(n,s)&&Ju(n,t,t.next,s)&&zr(n,s)&&zr(s,n)&&(e.push(n.i,t.i,s.i),Gr(t),Gr(t.next),t=i=s),t=t.next}while(t!==i);return Ki(t)}function Uf(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Wf(a,o)){let l=Qu(a,o);a=Ki(a,a.next),l=Ki(l,l.next),Hr(a,e,t,n,s,r,0),Hr(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Ff(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Zu(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Vf(c))}s.sort(Of);for(let r=0;r<s.length;r++)t=Bf(s[r],t);return t}function Of(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Bf(i,e){let t=Hf(i,e);if(!t)return e;let n=Qu(t,i);return Ki(n,n.next),Ki(t,t.next)}function Hf(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Hs(i,t))return t;do{if(Hs(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&$u(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);zr(t,i)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&zf(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function zf(i,e){return Gt(i.prev,i,e.prev)<0&&Gt(e.next,i,i.next)<0}function Gf(i,e,t,n){let s=i;do s.z===0&&(s.z=mc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,kf(s)}function kf(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function mc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Vf(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function $u(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function dr(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&$u(i,e,t,n,s,r,a,o)}function Wf(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Xf(i,e)&&(zr(i,e)&&zr(e,i)&&qf(i,e)&&(Gt(i.prev,i,e.prev)||Gt(i,e.prev,e))||Hs(i,e)&&Gt(i.prev,i,i.next)>0&&Gt(e.prev,e,e.next)>0)}function Gt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Hs(i,e){return i.x===e.x&&i.y===e.y}function Ju(i,e,t,n){let s=Va(Gt(i,e,t)),r=Va(Gt(i,e,n)),a=Va(Gt(t,n,i)),o=Va(Gt(t,n,e));return!!(s!==r&&a!==o||s===0&&ka(i,t,e)||r===0&&ka(i,n,e)||a===0&&ka(t,i,n)||o===0&&ka(t,e,n))}function ka(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Va(i){return i>0?1:i<0?-1:0}function Xf(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Ju(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function zr(i,e){return Gt(i.prev,i,i.next)<0?Gt(i,e,i.next)>=0&&Gt(i,i.prev,e)>=0:Gt(i,e,i.prev)<0||Gt(i,i.next,e)<0}function qf(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Qu(i,e){let t=gc(i.i,i.x,i.y),n=gc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function eu(i,e,t,n){let s=gc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Gr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function gc(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Yf(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var xc=class{static triangulate(e,t,n=2){return If(e,t,n)}},Vi=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];tu(e),nu(n,e);let a=e.length;t.forEach(tu);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,nu(n,t[l]);let o=xc.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function tu(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function nu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var zs=class i extends Ot{constructor(e=new Yi([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new Et(s,3)),this.setAttribute("uv",new Et(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:f-.1,S=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Kf,T,v=!1,R,w,_,E;if(p){T=p.getSpacedPoints(h),v=!0,d=!1;let ne=p.isCatmullRomCurve3?p.closed:!1;R=p.computeFrenetFrames(h,ne),w=new N,_=new N,E=new N}d||(m=0,f=0,x=0,S=0);let L=o.extractPoints(c),P=L.shape,O=L.holes;if(!Vi.isClockWise(P)){P=P.reverse();for(let ne=0,_e=O.length;ne<_e;ne++){let xe=O[ne];Vi.isClockWise(xe)&&(O[ne]=xe.reverse())}}function K(ne){let xe=10000000000000001e-36,V=ne[0];for(let Ee=1;Ee<=ne.length;Ee++){let qe=Ee%ne.length,ae=ne[qe],st=ae.x-V.x,rt=ae.y-V.y,tt=st*st+rt*rt,F=Math.max(Math.abs(ae.x),Math.abs(ae.y),Math.abs(V.x),Math.abs(V.y)),yt=xe*F*F;if(tt<=yt){ne.splice(qe,1),Ee--;continue}V=ae}}K(P),O.forEach(K);let D=O.length,H=P;for(let ne=0;ne<D;ne++){let _e=O[ne];P=P.concat(_e)}function X(ne,_e,xe){return _e||ot("ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(_e,xe)}let Y=P.length;function ce(ne,_e,xe){let V,Ee,qe,ae=ne.x-_e.x,st=ne.y-_e.y,rt=xe.x-ne.x,tt=xe.y-ne.y,F=ae*ae+st*st,yt=ae*tt-st*rt;if(Math.abs(yt)>Number.EPSILON){let nt=Math.sqrt(F),W=Math.sqrt(rt*rt+tt*tt),te=_e.x-st/nt,Le=_e.y+ae/nt,fe=xe.x-tt/W,Ue=xe.y+rt/W,A=((fe-te)*tt-(Ue-Le)*rt)/(ae*tt-st*rt);V=te+ae*A-ne.x,Ee=Le+st*A-ne.y;let M=V*V+Ee*Ee;if(M<=2)return new le(V,Ee);qe=Math.sqrt(M/2)}else{let nt=!1;ae>Number.EPSILON?rt>Number.EPSILON&&(nt=!0):ae<-Number.EPSILON?rt<-Number.EPSILON&&(nt=!0):Math.sign(st)===Math.sign(tt)&&(nt=!0),nt?(V=-st,Ee=ae,qe=Math.sqrt(F)):(V=ae,Ee=st,qe=Math.sqrt(F/2))}return new le(V/qe,Ee/qe)}let $=[];for(let ne=0,_e=H.length,xe=_e-1,V=ne+1;ne<_e;ne++,xe++,V++)xe===_e&&(xe=0),V===_e&&(V=0),$[ne]=ce(H[ne],H[xe],H[V]);let ie=[],re,me=$.concat();for(let ne=0,_e=D;ne<_e;ne++){let xe=O[ne];re=[];for(let V=0,Ee=xe.length,qe=Ee-1,ae=V+1;V<Ee;V++,qe++,ae++)qe===Ee&&(qe=0),ae===Ee&&(ae=0),re[V]=ce(xe[V],xe[qe],xe[ae]);ie.push(re),me=me.concat(re)}let ze;if(m===0)ze=Vi.triangulateShape(H,O);else{let ne=[],_e=[];for(let xe=0;xe<m;xe++){let V=xe/m,Ee=f*Math.cos(V*Math.PI/2),qe=x*Math.sin(V*Math.PI/2)+S;for(let ae=0,st=H.length;ae<st;ae++){let rt=X(H[ae],$[ae],qe);Ge(rt.x,rt.y,-Ee),V===0&&ne.push(rt)}for(let ae=0,st=D;ae<st;ae++){let rt=O[ae];re=ie[ae];let tt=[];for(let F=0,yt=rt.length;F<yt;F++){let nt=X(rt[F],re[F],qe);Ge(nt.x,nt.y,-Ee),V===0&&tt.push(nt)}V===0&&_e.push(tt)}}ze=Vi.triangulateShape(ne,_e)}let Q=ze.length,Te=x+S;for(let ne=0;ne<Y;ne++){let _e=d?X(P[ne],me[ne],Te):P[ne];v?(_.copy(R.normals[0]).multiplyScalar(_e.x),w.copy(R.binormals[0]).multiplyScalar(_e.y),E.copy(T[0]).add(_).add(w),Ge(E.x,E.y,E.z)):Ge(_e.x,_e.y,0)}for(let ne=1;ne<=h;ne++)for(let _e=0;_e<Y;_e++){let xe=d?X(P[_e],me[_e],Te):P[_e];v?(_.copy(R.normals[ne]).multiplyScalar(xe.x),w.copy(R.binormals[ne]).multiplyScalar(xe.y),E.copy(T[ne]).add(_).add(w),Ge(E.x,E.y,E.z)):Ge(xe.x,xe.y,u/h*ne)}for(let ne=m-1;ne>=0;ne--){let _e=ne/m,xe=f*Math.cos(_e*Math.PI/2),V=x*Math.sin(_e*Math.PI/2)+S;for(let Ee=0,qe=H.length;Ee<qe;Ee++){let ae=X(H[Ee],$[Ee],V);Ge(ae.x,ae.y,u+xe)}for(let Ee=0,qe=O.length;Ee<qe;Ee++){let ae=O[Ee];re=ie[Ee];for(let st=0,rt=ae.length;st<rt;st++){let tt=X(ae[st],re[st],V);v?Ge(tt.x,tt.y+T[h-1].y,T[h-1].x+xe):Ge(tt.x,tt.y,u+xe)}}}Ie(),we();function Ie(){let ne=s.length/3;if(d){let _e=0,xe=Y*_e;for(let V=0;V<Q;V++){let Ee=ze[V];ut(Ee[2]+xe,Ee[1]+xe,Ee[0]+xe)}_e=h+m*2,xe=Y*_e;for(let V=0;V<Q;V++){let Ee=ze[V];ut(Ee[0]+xe,Ee[1]+xe,Ee[2]+xe)}}else{for(let _e=0;_e<Q;_e++){let xe=ze[_e];ut(xe[2],xe[1],xe[0])}for(let _e=0;_e<Q;_e++){let xe=ze[_e];ut(xe[0]+Y*h,xe[1]+Y*h,xe[2]+Y*h)}}n.addGroup(ne,s.length/3-ne,0)}function we(){let ne=s.length/3,_e=0;ve(H,_e),_e+=H.length;for(let xe=0,V=O.length;xe<V;xe++){let Ee=O[xe];ve(Ee,_e),_e+=Ee.length}n.addGroup(ne,s.length/3-ne,1)}function ve(ne,_e){let xe=ne.length;for(;--xe>=0;){let V=xe,Ee=xe-1;Ee<0&&(Ee=ne.length-1);for(let qe=0,ae=h+m*2;qe<ae;qe++){let st=Y*qe,rt=Y*(qe+1),tt=_e+V+st,F=_e+Ee+st,yt=_e+Ee+rt,nt=_e+V+rt;Ve(tt,F,yt,nt)}}}function Ge(ne,_e,xe){l.push(ne),l.push(_e),l.push(xe)}function ut(ne,_e,xe){$e(ne),$e(_e),$e(xe);let V=s.length/3,Ee=y.generateTopUV(n,s,V-3,V-2,V-1);Qe(Ee[0]),Qe(Ee[1]),Qe(Ee[2])}function Ve(ne,_e,xe,V){$e(ne),$e(_e),$e(V),$e(_e),$e(xe),$e(V);let Ee=s.length/3,qe=y.generateSideWallUV(n,s,Ee-6,Ee-3,Ee-2,Ee-1);Qe(qe[0]),Qe(qe[1]),Qe(qe[3]),Qe(qe[1]),Qe(qe[2]),Qe(qe[3])}function $e(ne){s.push(l[ne*3+0]),s.push(l[ne*3+1]),s.push(l[ne*3+2])}function Qe(ne){r.push(ne.x),r.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Zf(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new mo[s.type]().fromJSON(s)),new i(n,e.options)}},Kf={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new le(r,a),new le(o,l),new le(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],x=e[s*3+2],S=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new le(a,1-l),new le(c,1-u),new le(d,1-x),new le(S,1-p)]:[new le(o,1-l),new le(h,1-u),new le(f,1-x),new le(m,1-p)]}};function Zf(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Zi=class i extends ho{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var nn=class i extends Ot{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,f=[],x=[],S=[],m=[];for(let p=0;p<h;p++){let y=p*d-a;for(let T=0;T<c;T++){let v=T*u-r;x.push(v,-y,0),S.push(0,0,1),m.push(T/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){let T=y+c*p,v=y+c*(p+1),R=y+1+c*(p+1),w=y+1+c*p;f.push(T,v,w),f.push(v,R,w)}this.setIndex(f),this.setAttribute("position",new Et(x,3)),this.setAttribute("normal",new Et(S,3)),this.setAttribute("uv",new Et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var $i=class i extends Ot{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new N,d=new N,f=[],x=[],S=[],m=[];for(let p=0;p<=n;p++){let y=[],T=p/n,v=a+T*o,R=e*Math.cos(v),w=Math.sqrt(e*e-R*R),_=0;p===0&&a===0?_=.5/t:p===n&&l===Math.PI&&(_=-.5/t);for(let E=0;E<=t;E++){let L=E/t,P=s+L*r;u.x=-w*Math.cos(P),u.y=R,u.z=w*Math.sin(P),x.push(u.x,u.y,u.z),d.copy(u).normalize(),S.push(d.x,d.y,d.z),m.push(L+_,1-T),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){let T=h[p][y+1],v=h[p][y],R=h[p+1][y],w=h[p+1][y+1];(p!==0||a>0)&&f.push(T,v,w),(p!==n-1||l<Math.PI)&&f.push(v,R,w)}this.setIndex(f),this.setAttribute("position",new Et(x,3)),this.setAttribute("normal",new Et(S,3)),this.setAttribute("uv",new Et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ji=class i extends Ot{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],d=new N,f=new N,x=new N;for(let S=0;S<=n;S++){let m=a+S/n*o;for(let p=0;p<=s;p++){let y=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(y),f.y=(e+t*Math.cos(m))*Math.sin(y),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(y),d.y=e*Math.sin(y),x.subVectors(f,d).normalize(),h.push(x.x,x.y,x.z),u.push(p/s),u.push(S/n)}}for(let S=1;S<=n;S++)for(let m=1;m<=s;m++){let p=(s+1)*S+m-1,y=(s+1)*(S-1)+m-1,T=(s+1)*(S-1)+m,v=(s+1)*S+m;l.push(p,y,v),l.push(y,T,v)}this.setIndex(l),this.setAttribute("position",new Et(c,3)),this.setAttribute("normal",new Et(h,3)),this.setAttribute("uv",new Et(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var kr=class i extends Ot{constructor(e=new Fr(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new N,l=new N,c=new le,h=new N,u=[],d=[],f=[],x=[];S(),this.setIndex(x),this.setAttribute("position",new Et(u,3)),this.setAttribute("normal",new Et(d,3)),this.setAttribute("uv",new Et(f,2));function S(){for(let T=0;T<t;T++)m(T);m(r===!1?t:0),y(),p()}function m(T){h=e.getPointAt(T/t,h);let v=a.normals[T],R=a.binormals[T];for(let w=0;w<=s;w++){let _=w/s*Math.PI*2,E=Math.sin(_),L=-Math.cos(_);l.x=L*v.x+E*R.x,l.y=L*v.y+E*R.y,l.z=L*v.z+E*R.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let T=1;T<=t;T++)for(let v=1;v<=s;v++){let R=(s+1)*(T-1)+(v-1),w=(s+1)*T+(v-1),_=(s+1)*T+v,E=(s+1)*(T-1)+v;x.push(R,w,E),x.push(w,_,E)}}function y(){for(let T=0;T<=t;T++)for(let v=0;v<=s;v++)c.x=T/t,c.y=v/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new mo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function os(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(iu(s))s.isRenderTargetTexture?(Je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(iu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function un(i){let e={};for(let t=0;t<i.length;t++){let n=os(i[t]);for(let s in n)e[s]=n[s]}return e}function iu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function $f(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Wc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}var kn={clone:os,merge:un},Jf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,qt=class extends Qn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jf,this.fragmentShader=Qf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=os(e.uniforms),this.uniformsGroups=$f(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ye().setHex(s.value);break;case"v2":this.uniforms[n].value=new le().fromArray(s.value);break;case"v3":this.uniforms[n].value=new N().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Bt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new lt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Lt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Gs=class extends qt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},He=class extends Qn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ua,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Qi=class extends He{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new le(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return mt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Wi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Wi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Vr=class extends Qn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ua,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=Lo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},xo=class extends Qn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Du,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},_o=class extends Qn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ws(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Wa(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Pi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Mo=class extends Pi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:dc,endingEnd:dc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case fc:r=e,o=2*t-n;break;case pc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case fc:a=e,l=2*n-t;break;case pc:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,x=(n-t)/(s-t),S=x*x,m=S*x,p=-d*m+2*d*S-d*x,y=(1+d)*m+(-1.5-2*d)*S+(-.5+d)*x+1,T=(-1-f)*m+(1.5+f)*S+.5*x,v=f*m-f*S;for(let R=0;R!==o;++R)r[R]=p*a[h+R]+y*a[c+R]+T*a[l+R]+v*a[u+R];return r}},vo=class extends Pi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},yo=class extends Pi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},So=class extends Pi{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let x=(n-t)/(s-t),S=1-x;for(let m=0;m!==o;++m)r[m]=a[c+m]*S+a[l+m]*x;return r}let d=o*2,f=e-1;for(let x=0;x!==o;++x){let S=a[c+x],m=a[l+x],p=f*d+x*2,y=u[p],T=u[p+1],v=e*d+x*2,R=h[v],w=h[v+1],_=ep(n,t,y,R,s);r[x]=ju(_,S,T,w,m)}return r}};function ju(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function jf(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function ep(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=ju(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=jf(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var En=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ws(t,this.TimeBufferType),this.values=ws(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ws(e.times,Array),values:ws(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Wa(e.settings)&&(n.settings={inTangents:ws(e.settings.inTangents,Array),outTangents:ws(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new yo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new vo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Mo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new So(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case xr:t=this.InterpolantFactoryMethodDiscrete;break;case io:t=this.InterpolantFactoryMethodLinear;break;case Ya:t=this.InterpolantFactoryMethodSmooth;break;case uc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Je("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xr;case this.InterpolantFactoryMethodLinear:return io;case this.InterpolantFactoryMethodSmooth:return Ya;case this.InterpolantFactoryMethodBezier:return uc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Wa(this.settings)&&(su(this.settings.inTangents,e),su(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Wa(this.settings)&&(ru(this.settings.inTangents,e),ru(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ot("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ot("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){ot("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){ot("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&kd(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){ot("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ya,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let x=0;x!==n;++x){let S=t[u+x];if(S!==t[d+x]||S!==t[f+x]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Wa(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function su(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function ru(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}En.prototype.ValueTypeName="";En.prototype.TimeBufferType=Float32Array;En.prototype.ValueBufferType=Float32Array;En.prototype.DefaultInterpolation=io;var Ii=class extends En{constructor(e,t,n){super(e,t,n)}};Ii.prototype.ValueTypeName="bool";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=xr;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var Eo=class extends En{constructor(e,t,n,s){super(e,t,n,s)}};Eo.prototype.ValueTypeName="color";var bo=class extends En{constructor(e,t,n,s){super(e,t,n,s)}};bo.prototype.ValueTypeName="number";var To=class extends Pi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Zn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Wr=class extends En{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new To(this.times,this.values,this.getValueSize(),e)}};Wr.prototype.ValueTypeName="quaternion";Wr.prototype.InterpolantFactoryMethodSmooth=void 0;var Li=class extends En{constructor(e,t,n){super(e,t,n)}};Li.prototype.ValueTypeName="string";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=xr;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var wo=class extends En{constructor(e,t,n,s){super(e,t,n,s)}};wo.prototype.ValueTypeName="vector";var Ao=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],x=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ed=new Ao,Ro=class{constructor(e){this.manager=e!==void 0?e:ed,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Ro.DEFAULT_MATERIAL_NAME="__DEFAULT";var ji=class extends Ut{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Xr=class extends ji{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},hc=new Lt,au=new N,ou=new N,ks=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=_n,this.map=null,this.mapPass=null,this.matrix=new Lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ci,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new Bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;au.setFromMatrixPosition(e.matrixWorld),t.position.copy(au),ou.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ou),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){hc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(hc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Is||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(hc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Xa=new N,qa=new Zn,Yn=new N,qr=class extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=Cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Xa,qa,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xa,qa,Yn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Xa,qa,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xa,qa,Yn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ai=new N,lu=new le,cu=new le,jt=class extends qr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Xi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(fr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xi*2*Math.atan(Math.tan(fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z)}getViewSize(e,t){return this.getViewBounds(e,lu,cu),t.subVectors(cu,lu)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(fr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},_c=class extends ks{constructor(){super(new jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Xi*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Vs=class extends ji{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new _c}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Mc=class extends ks{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0}},es=class extends ji{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Mc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ts=class extends qr{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},vc=class extends ks{constructor(){super(new ts(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Yr=class extends ji{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new vc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var As=-90,Rs=1,Ws=class extends Ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new jt(As,Rs,e,t);s.layers=this.layers,this.add(s);let r=new jt(As,Rs,e,t);r.layers=this.layers,this.add(r);let a=new jt(As,Rs,e,t);a.layers=this.layers,this.add(a);let o=new jt(As,Rs,e,t);o.layers=this.layers,this.add(o);let l=new jt(As,Rs,e,t);l.layers=this.layers,this.add(l);let c=new jt(As,Rs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Cn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Is)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let S=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=S,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Co=class extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Kr=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=tp.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function tp(){this._document.hidden===!1&&this.reset()}var Xc="\\[\\]\\.:\\/",np=new RegExp("["+Xc+"]","g"),qc="[^"+Xc+"]",ip="[^"+Xc.replace("\\.","")+"]",sp=/((?:WC+[\/:])*)/.source.replace("WC",qc),rp=/(WCOD+)?/.source.replace("WCOD",ip),ap=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qc),op=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qc),lp=new RegExp("^"+sp+rp+ap+op+"$"),cp=["material","materials","bones","map"],yc=class{constructor(e,t,n){let s=n||Ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ft=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(np,"")}static parseTrackName(e){let t=lp.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);cp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Je("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ot("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ot("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ot("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ot("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){ot("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;ot("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ft.Composite=yc;Ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ft.prototype.GetterByBindingType=[Ft.prototype._getValue_direct,Ft.prototype._getValue_array,Ft.prototype._getValue_arrayElement,Ft.prototype._getValue_toArray];Ft.prototype.SetterByBindingTypeAndVersioning=[[Ft.prototype._setValue_direct,Ft.prototype._setValue_direct_setNeedsUpdate,Ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_array,Ft.prototype._setValue_array_setNeedsUpdate,Ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_arrayElement,Ft.prototype._setValue_arrayElement_setNeedsUpdate,Ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_fromArray,Ft.prototype._setValue_fromArray_setNeedsUpdate,Ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var M_=new Float32Array(1);var Zr=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Je("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var Qc=class Qc{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Qc.prototype.isMatrix2=!0;var Sc=Qc;function Yc(i,e,t,n){let s=hp(n);switch(t){case Dc:return i*e;case Ho:return i*e/s.components*s.byteLength;case zo:return i*e/s.components*s.byteLength;case Ni:return i*e*2/s.components*s.byteLength;case Go:return i*e*2/s.components*s.byteLength;case Nc:return i*e*3/s.components*s.byteLength;case bn:return i*e*4/s.components*s.byteLength;case ko:return i*e*4/s.components*s.byteLength;case ra:case aa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case oa:case la:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wo:case qo:return Math.max(i,16)*Math.max(e,8)/4;case Vo:case Xo:return Math.max(i,8)*Math.max(e,8)/2;case Yo:case Ko:case $o:case Jo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Zo:case ca:case Qo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case el:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case tl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case nl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case il:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case sl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case rl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case al:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ol:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ll:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case cl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case hl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ul:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case dl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case fl:case pl:case ml:return Math.ceil(i/4)*Math.ceil(e/4)*16;case gl:case xl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ha:case _l:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function hp(i){switch(i){case _n:case Cc:return{byteLength:1,components:1};case Ks:case Pc:case ln:return{byteLength:2,components:1};case Oo:case Bo:return{byteLength:2,components:4};case Gn:case Fo:case Pn:return{byteLength:4,components:1};case Ic:case Lc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Sd(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function dp(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,x)=>f.start-x.start);let d=0;for(let f=1;f<u.length;f++){let x=u[d],S=u[f];S.start<=x.start+x.count+1?x.count=Math.max(x.count,S.start+S.count-x.start):(++d,u[d]=S)}u.length=d+1;for(let f=0,x=u.length;f<x;f++){let S=u[f];i.bufferSubData(c,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var fp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,mp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_p=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Sp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ep=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,wp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ap=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Rp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Cp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ip=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Dp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Np=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Up=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Fp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Op=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Bp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Xp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,qp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Yp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Zp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$p=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,em=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,im=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,sm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,rm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,am=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,om=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,hm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,um=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pm=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,mm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_m=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ym=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Sm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Em=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wm=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Am=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Cm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Im=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Um=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Fm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Om=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,km=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ym=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Km=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Zm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$m=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Jm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Qm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,e0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,t0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,n0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,i0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,s0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,r0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,a0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,o0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,l0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,c0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,h0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,u0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,d0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,f0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m0=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,M0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,v0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,y0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,S0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,E0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,T0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,w0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,A0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,I0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,D0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,N0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,U0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,O0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,H0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,G0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,k0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,V0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,W0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,X0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ft={alphahash_fragment:fp,alphahash_pars_fragment:pp,alphamap_fragment:mp,alphamap_pars_fragment:gp,alphatest_fragment:xp,alphatest_pars_fragment:_p,aomap_fragment:Mp,aomap_pars_fragment:vp,batching_pars_vertex:yp,batching_vertex:Sp,begin_vertex:Ep,beginnormal_vertex:bp,bsdfs:Tp,iridescence_fragment:wp,bumpmap_pars_fragment:Ap,clipping_planes_fragment:Rp,clipping_planes_pars_fragment:Cp,clipping_planes_pars_vertex:Pp,clipping_planes_vertex:Ip,color_fragment:Lp,color_pars_fragment:Dp,color_pars_vertex:Np,color_vertex:Up,common:Fp,defaultnormal_vertex:Op,displacementmap_pars_vertex:Bp,displacementmap_vertex:Hp,emissivemap_fragment:zp,emissivemap_pars_fragment:Gp,colorspace_fragment:kp,colorspace_pars_fragment:Vp,envmap_fragment:Wp,envmap_common_pars_fragment:Xp,envmap_pars_fragment:qp,envmap_pars_vertex:Yp,envmap_physical_pars_fragment:sm,envmap_vertex:Kp,fog_vertex:Zp,fog_pars_vertex:$p,fog_fragment:Jp,fog_pars_fragment:Qp,gradientmap_pars_fragment:jp,lightmap_pars_fragment:em,lights_lambert_fragment:tm,lights_lambert_pars_fragment:nm,lights_pars_begin:im,lights_toon_fragment:rm,lights_toon_pars_fragment:am,lights_phong_fragment:om,lights_phong_pars_fragment:lm,lights_physical_fragment:cm,lights_physical_pars_fragment:hm,lights_fragment_begin:um,lights_fragment_maps:dm,lights_fragment_end:fm,lightprobes_pars_fragment:pm,logdepthbuf_fragment:mm,logdepthbuf_pars_fragment:gm,logdepthbuf_pars_vertex:xm,logdepthbuf_vertex:_m,map_fragment:Mm,map_pars_fragment:vm,map_particle_fragment:ym,map_particle_pars_fragment:Sm,metalnessmap_fragment:Em,metalnessmap_pars_fragment:bm,morphinstance_vertex:Tm,morphcolor_vertex:wm,morphnormal_vertex:Am,morphtarget_pars_vertex:Rm,morphtarget_vertex:Cm,normal_fragment_begin:Pm,normal_fragment_maps:Im,normal_pars_fragment:Lm,normal_pars_vertex:Dm,normal_vertex:Nm,normalmap_pars_fragment:Um,clearcoat_normal_fragment_begin:Fm,clearcoat_normal_fragment_maps:Om,clearcoat_pars_fragment:Bm,iridescence_pars_fragment:Hm,opaque_fragment:zm,packing:Gm,premultiplied_alpha_fragment:km,project_vertex:Vm,dithering_fragment:Wm,dithering_pars_fragment:Xm,roughnessmap_fragment:qm,roughnessmap_pars_fragment:Ym,shadowmap_pars_fragment:Km,shadowmap_pars_vertex:Zm,shadowmap_vertex:$m,shadowmask_pars_fragment:Jm,skinbase_vertex:Qm,skinning_pars_vertex:jm,skinning_vertex:e0,skinnormal_vertex:t0,specularmap_fragment:n0,specularmap_pars_fragment:i0,tonemapping_fragment:s0,tonemapping_pars_fragment:r0,transmission_fragment:a0,transmission_pars_fragment:o0,uv_pars_fragment:l0,uv_pars_vertex:c0,uv_vertex:h0,worldpos_vertex:u0,background_vert:d0,background_frag:f0,backgroundCube_vert:p0,backgroundCube_frag:m0,cube_vert:g0,cube_frag:x0,depth_vert:_0,depth_frag:M0,distance_vert:v0,distance_frag:y0,equirect_vert:S0,equirect_frag:E0,linedashed_vert:b0,linedashed_frag:T0,meshbasic_vert:w0,meshbasic_frag:A0,meshlambert_vert:R0,meshlambert_frag:C0,meshmatcap_vert:P0,meshmatcap_frag:I0,meshnormal_vert:L0,meshnormal_frag:D0,meshphong_vert:N0,meshphong_frag:U0,meshphysical_vert:F0,meshphysical_frag:O0,meshtoon_vert:B0,meshtoon_frag:H0,points_vert:z0,points_frag:G0,shadow_vert:k0,shadow_frag:V0,sprite_vert:W0,sprite_frag:X0},De={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},ti={basic:{uniforms:un([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:un([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Ye(0)},envMapIntensity:{value:1}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:un([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:un([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:un([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new Ye(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:un([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:un([De.points,De.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:un([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:un([De.common,De.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:un([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:un([De.sprite,De.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:un([De.common,De.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:un([De.lights,De.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};ti.physical={uniforms:un([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new lt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};var Ml={r:0,b:0,g:0},q0=new Lt,Ed=new lt;Ed.set(-1,0,0,0,1,0,0,0,1);function Y0(i,e,t,n,s,r){let a=new Ye(0),o=s===!0?0:1,l,c,h=null,u=0,d=null;function f(y){let T=y.isScene===!0?y.background:null;if(T&&T.isTexture){let v=y.backgroundBlurriness>0;T=e.get(T,v)}return T}function x(y){let T=!1,v=f(y);v===null?m(a,o):v&&v.isColor&&(m(v,1),T=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(y,T){let v=f(T);v&&v.isCubeTexture?(c===void 0&&(c=new B(new We(1,1,1),new qt({name:"BackgroundCubeMaterial",uniforms:os(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,w,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(q0.makeRotationFromEuler(T.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ed),c.material.toneMapped=gt.getTransfer(v.colorSpace)!==Tt,(h!==v||u!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new B(new nn(2,2),new qt({name:"BackgroundMaterial",uniforms:os(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=gt.getTransfer(v.colorSpace)!==Tt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,d=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,T){y.getRGB(Ml,Wc(i)),t.buffers.color.setClear(Ml.r,Ml.g,Ml.b,T,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,T=1){a.set(y),o=T,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,m(a,o)},render:x,addToRenderList:S,dispose:p}}function K0(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(O,G,K,D,H){let X=!1,Y=u(O,D,K,G);r!==Y&&(r=Y,c(r.object)),X=f(O,D,K,H),X&&x(O,D,K,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,v(O,G,K,D),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return i.createVertexArray()}function c(O){return i.bindVertexArray(O)}function h(O){return i.deleteVertexArray(O)}function u(O,G,K,D){let H=D.wireframe===!0,X=n[G.id];X===void 0&&(X={},n[G.id]=X);let Y=O.isInstancedMesh===!0?O.id:0,ce=X[Y];ce===void 0&&(ce={},X[Y]=ce);let $=ce[K.id];$===void 0&&($={},ce[K.id]=$);let ie=$[H];return ie===void 0&&(ie=d(l()),$[H]=ie),ie}function d(O){let G=[],K=[],D=[];for(let H=0;H<t;H++)G[H]=0,K[H]=0,D[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:K,attributeDivisors:D,object:O,attributes:{},index:null}}function f(O,G,K,D){let H=r.attributes,X=G.attributes,Y=0,ce=K.getAttributes();for(let $ in ce)if(ce[$].location>=0){let re=H[$],me=X[$];if(me===void 0&&($==="instanceMatrix"&&O.instanceMatrix&&(me=O.instanceMatrix),$==="instanceColor"&&O.instanceColor&&(me=O.instanceColor)),re===void 0||re.attribute!==me||me&&re.data!==me.data)return!0;Y++}return r.attributesNum!==Y||r.index!==D}function x(O,G,K,D){let H={},X=G.attributes,Y=0,ce=K.getAttributes();for(let $ in ce)if(ce[$].location>=0){let re=X[$];re===void 0&&($==="instanceMatrix"&&O.instanceMatrix&&(re=O.instanceMatrix),$==="instanceColor"&&O.instanceColor&&(re=O.instanceColor));let me={};me.attribute=re,re&&re.data&&(me.data=re.data),H[$]=me,Y++}r.attributes=H,r.attributesNum=Y,r.index=D}function S(){let O=r.newAttributes;for(let G=0,K=O.length;G<K;G++)O[G]=0}function m(O){p(O,0)}function p(O,G){let K=r.newAttributes,D=r.enabledAttributes,H=r.attributeDivisors;K[O]=1,D[O]===0&&(i.enableVertexAttribArray(O),D[O]=1),H[O]!==G&&(i.vertexAttribDivisor(O,G),H[O]=G)}function y(){let O=r.newAttributes,G=r.enabledAttributes;for(let K=0,D=G.length;K<D;K++)G[K]!==O[K]&&(i.disableVertexAttribArray(K),G[K]=0)}function T(O,G,K,D,H,X,Y){Y===!0?i.vertexAttribIPointer(O,G,K,H,X):i.vertexAttribPointer(O,G,K,D,H,X)}function v(O,G,K,D){S();let H=D.attributes,X=K.getAttributes(),Y=G.defaultAttributeValues;for(let ce in X){let $=X[ce];if($.location>=0){let ie=H[ce];if(ie===void 0&&(ce==="instanceMatrix"&&O.instanceMatrix&&(ie=O.instanceMatrix),ce==="instanceColor"&&O.instanceColor&&(ie=O.instanceColor)),ie!==void 0){let re=ie.normalized,me=ie.itemSize,ze=e.get(ie);if(ze===void 0)continue;let Q=ze.buffer,Te=ze.type,Ie=ze.bytesPerElement,we=Te===i.INT||Te===i.UNSIGNED_INT||ie.gpuType===Fo;if(ie.isInterleavedBufferAttribute){let ve=ie.data,Ge=ve.isInterleavedBuffer===!0?ve.stride:ve.itemSize,ut=ie.offset;if(ve.isInstancedInterleavedBuffer||ve.isInstancedBufferAttribute){for(let Ve=0;Ve<$.locationSize;Ve++)p($.location+Ve,ve.meshPerAttribute);O.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ve=0;Ve<$.locationSize;Ve++)m($.location+Ve);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let Ve=0;Ve<$.locationSize;Ve++)T($.location+Ve,me/$.locationSize,Te,re,Ge*Ie,(ut+me/$.locationSize*Ve)*Ie,we)}else{if(ie.isInstancedBufferAttribute){for(let ve=0;ve<$.locationSize;ve++)p($.location+ve,ie.meshPerAttribute);O.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ve=0;ve<$.locationSize;ve++)m($.location+ve);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let ve=0;ve<$.locationSize;ve++)T($.location+ve,me/$.locationSize,Te,re,me*Ie,me/$.locationSize*ve*Ie,we)}}else if(Y!==void 0){let re=Y[ce];if(re!==void 0)switch(re.length){case 2:i.vertexAttrib2fv($.location,re);break;case 3:i.vertexAttrib3fv($.location,re);break;case 4:i.vertexAttrib4fv($.location,re);break;default:i.vertexAttrib1fv($.location,re)}}}}y()}function R(){L();for(let O in n){let G=n[O];for(let K in G){let D=G[K];for(let H in D){let X=D[H];for(let Y in X)h(X[Y].object),delete X[Y];delete D[H]}}delete n[O]}}function w(O){if(n[O.id]===void 0)return;let G=n[O.id];for(let K in G){let D=G[K];for(let H in D){let X=D[H];for(let Y in X)h(X[Y].object),delete X[Y];delete D[H]}}delete n[O.id]}function _(O){for(let G in n){let K=n[G];for(let D in K){let H=K[D];if(H[O.id]===void 0)continue;let X=H[O.id];for(let Y in X)h(X[Y].object),delete X[Y];delete H[O.id]}}}function E(O){for(let G in n){let K=n[G],D=O.isInstancedMesh===!0?O.id:0,H=K[D];if(H!==void 0){for(let X in H){let Y=H[X];for(let ce in Y)h(Y[ce].object),delete Y[ce];delete H[X]}delete K[D],Object.keys(K).length===0&&delete n[G]}}}function L(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:P,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfObject:E,releaseStatesOfProgram:_,initAttributes:S,enableAttribute:m,disableUnusedAttributes:y}}function Z0(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function $0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==bn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let E=_===ln&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==_n&&_!==Pn&&!E&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Je("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&Je("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&Je("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:x,maxTextureSize:S,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:v,maxSamples:R,samples:w}}function J0(i){let e=this,t=null,n=0,s=!1,r=!1,a=new zn,o=new lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let x=u.clippingPlanes,S=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||x===null||x.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,T=y*4,v=p.clippingState||null;l.value=v,v=h(x,d,T,f);for(let R=0;R!==T;++R)v[R]=t[R];p.clippingState=v,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,x){let S=u!==null?u.length:0,m=null;if(S!==0){if(m=l.value,x!==!0||m===null){let p=f+S*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,v=f;T!==S;++T,v+=4)a.copy(u[T]).applyMatrix4(y,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}var pa=class extends Vt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Cr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new We(5,5,5),r=new qt({name:"CubemapFromEquirect",uniforms:os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kt,blending:xi});r.uniforms.tEquirect.value=t;let a=new B(s,r),o=t.minFilter;return t.minFilter===_i&&(t.minFilter=tn),new Ws(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},td=256,Q0=3,j0=20,bd=256,Td=16,eg=3,tg=new N,ng=new Ye,Js=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ws(1,10,null),this._boxMesh=new B(new We(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=tg}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,x=l.autoClearStencil,S=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,S===null&&(e.background=l.getClearColor(ng));let m=new Ws(n,s,h);return m.position.copy(o),m.update(l,e),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=x,e.background=S,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=id(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(td,Gc(e))}_fromTexture(e,t){e.mapping===ss||e.mapping===Ys?this._setSize(e.image.length===0?td:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=nd(e,!1,!1),n=Math.log2(e)-Q0;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=nd(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ss||e.mapping===Ys?(this._cubemapMaterial===null&&(this._cubemapMaterial=sd()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=id()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=ig(),this._integrationMaterial=sg());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Td);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-eg)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(bd*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=rg());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function nd(i,e,t){return new pa(i,{minFilter:_i,generateMipmaps:e,type:ln,colorSpace:_r,depthBuffer:t})}function ma(i,e,t){return new qt({name:i,uniforms:e,vertexShader:ft.cube_vert,fragmentShader:t,side:Kt,blending:xi,depthTest:!1,depthWrite:!1})}function ig(){return ma("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${bd}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function sg(){return ma("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Td}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function rg(){return ma("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${j0}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function id(){return ma("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function sd(){return ma("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function ag(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Do||f===No)if(e.has(d)){let x=e.get(d).texture;return o(x,d.mapping)}else{let x=d.image;if(x&&x.height>0){let S=new pa(x.height);return S.fromEquirectangularTexture(i,d),e.set(d,S),d.addEventListener("dispose",c),o(S.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,x=f===Do||f===No,S=f===ss||f===Ys;if(x||S){let m=t.get(d),p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new Js(i)),m=x?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let y=d.image;return x&&y&&y.height>0||S&&y&&l(y)?(n===null&&(n=new Js(i)),m=x?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,f){return f===Do?d.mapping=ss:f===No&&(d.mapping=Ys),d}function l(d){let f=0,x=6;for(let S=0;S<x;S++)d[S]!==void 0&&f++;return f===x}function c(d){let f=d.target;f.removeEventListener("dispose",c);let x=e.get(f);x!==void 0&&(e.delete(f),x.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let x=t.get(f);x!==void 0&&(t.delete(f),x.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function og(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Wi("WebGLRenderer: "+n+" extension not supported."),s}}}function lg(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(x=>delete s[x]);function o(x){l(x.target)}function l(x){x.index!==null&&e.remove(x.index);for(let m in x.attributes)e.remove(x.attributes[m]);x.removeEventListener("dispose",o),delete s[x.id],a.unregister(x);let S=r.get(x);S&&(e.remove(S),r.delete(x)),n.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function c(x,S){return s[S.id]!==void 0||(S.addEventListener("dispose",o),s[S.id]=new WeakRef(S),a.register(S,S.id,S),t.memory.geometries++),S}function h(x){let S=x.attributes;for(let m in S)e.update(S[m],i.ARRAY_BUFFER)}function u(x){let S=x.index,m=x.attributes.position,p=0;if(m===void 0)return;let y=S!==null?S.array.length:m.array.length/3-1,T=m.count>=65535?Tr:br,v=new T(Math.ceil(y/3)*6,1),R=v.array;if(S!==null){let _=S.array;p=S.version;for(let E=0,L=0;E<y;E+=3){let P=_[E+0],O=_[E+1],G=_[E+2];R[L++]=P,R[L++]=O,R[L++]=O,R[L++]=G,R[L++]=G,R[L++]=P}}else{p=m.version;for(let _=0,E=0;_<y;_+=3){let L=_+0,P=_+1,O=_+2;R[E++]=L,R[E++]=P,R[E++]=P,R[E++]=O,R[E++]=O,R[E++]=L}}v.version=p;let w=r.get(x);w&&e.remove(w),r.set(x,v)}function d(x){let S=r.get(x);if(S){let m=x.index;m!==null&&S.version<m.version&&u(x)}else u(x);return r.get(x)}function f(){for(let x in s){let S=s[x].deref();S!==void 0&&l(S)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function cg(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*a),t.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*a,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let S=0;for(let m=0;m<f;m++)S+=d[m];t.update(S,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function hg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:ot("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function ug(i,e,t){let n=new WeakMap,s=new Bt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let L=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",L)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],T=0;f===!0&&(T=1),x===!0&&(T=2),S===!0&&(T=3);let v=o.attributes.position.count*T,R=1;v>e.maxTextureSize&&(R=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let w=new Float32Array(v*R*4*u),_=new yr(w,v,R,u);_.type=Pn,_.needsUpdate=!0;let E=T*4;for(let P=0;P<u;P++){let O=m[P],G=p[P],K=y[P],D=v*R*4*P;for(let H=0;H<O.count;H++){let X=H*E;f===!0&&(s.fromBufferAttribute(O,H),w[D+X+0]=s.x,w[D+X+1]=s.y,w[D+X+2]=s.z,w[D+X+3]=0),x===!0&&(s.fromBufferAttribute(G,H),w[D+X+4]=s.x,w[D+X+5]=s.y,w[D+X+6]=s.z,w[D+X+7]=0),S===!0&&(s.fromBufferAttribute(K,H),w[D+X+8]=s.x,w[D+X+9]=s.y,w[D+X+10]=s.z,w[D+X+11]=K.itemSize===4?s.w:1)}}d={count:u,texture:_,size:new le(v,R)},n.set(o,d),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let S=0;S<c.length;S++)f+=c[S];let x=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function dg(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var fg={[Qr]:"LINEAR_TONE_MAPPING",[jr]:"REINHARD_TONE_MAPPING",[ea]:"CINEON_TONE_MAPPING",[is]:"ACES_FILMIC_TONE_MAPPING",[na]:"AGX_TONE_MAPPING",[ia]:"NEUTRAL_TONE_MAPPING",[ta]:"CUSTOM_TONE_MAPPING"};function pg(i,e,t,n,s,r){let a=new Vt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Ot;h.setAttribute("position",new Et([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Et([0,2,0,0,2,0],2));let u=new Gs({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new B(h,u),f=new ts(-1,1,1,-1,0,1),x=null,S=null,m=!1,p,y=null,T=[],v=!1;this.setSize=function(R,w){a.setSize(R,w),o!==null&&o.setSize(R,w),l!==null&&l.setSize(R,w);for(let _=0;_<T.length;_++){let E=T[_];E.setSize&&E.setSize(R,w)}},this.setEffects=function(R){T=R,v=T.length>0&&T[0].isRenderPass===!0;let w=a.width,_=a.height;T.length>0&&o===null&&(o=new Vt(w,_,{type:ln,depthBuffer:!1,stencilBuffer:!1}),l=new Vt(w,_,{type:ln,depthBuffer:!1,stencilBuffer:!1}));let E=s===!0&&T.some(L=>L.needsDepthTexture===!0);E!==(a.depthTexture!==null)&&(E===!0&&c===null&&(c=new gi(w,_),r===!0&&(c.format=Mi,c.type=rs)),a.dispose(),a.depthTexture=E?c:null,a.resolveDepthBuffer=E,a.storeMultisampledDepthBuffer=E);for(let L=0;L<T.length;L++){let P=T[L];P.setSize&&P.setSize(w,_),E&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(c)}},this.begin=function(R,w){if(m||R.toneMapping===jn&&T.length===0)return!1;if(y=w,w!==null){let _=w.width,E=w.height;(a.width!==_||a.height!==E)&&this.setSize(_,E)}return v===!1&&R.setRenderTarget(a),p=R.toneMapping,R.toneMapping=jn,!0},this.hasRenderPass=function(){return v},this.end=function(R,w){R.toneMapping=p,m=!0;let _=a,E=o;for(let L=0;L<T.length;L++){let P=T[L];P.enabled!==!1&&(P.render(R,E,_,w),P.needsSwap!==!1&&(_=E,E=E===o?l:o))}if(x!==R.outputColorSpace||S!==R.toneMapping){x=R.outputColorSpace,S=R.toneMapping,u.defines={},gt.getTransfer(x)===Tt&&(u.defines.SRGB_TRANSFER="");let L=fg[S];L&&(u.defines[L]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,R.setRenderTarget(y),R.render(d,f),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var wd=new pn,Ad=new gi(1,1),Rd=new Pr(1),Cd=new yr,Pd=new ao,Id=new Cr,rd=[],ad=[],od=new Float32Array(16),ld=new Float32Array(9),cd=new Float32Array(4);function Qs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=rd[s];if(r===void 0&&(r=new Float32Array(s),rd[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Zt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function $t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Sl(i,e){let t=ad[e];t===void 0&&(t=new Int32Array(e),ad[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function mg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function gg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2fv(this.addr,e),$t(t,e)}}function xg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;i.uniform3fv(this.addr,e),$t(t,e)}}function _g(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4fv(this.addr,e),$t(t,e)}}function Mg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(Zt(t,n))return;cd.set(n),i.uniformMatrix2fv(this.addr,!1,cd),$t(t,n)}}function vg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(Zt(t,n))return;ld.set(n),i.uniformMatrix3fv(this.addr,!1,ld),$t(t,n)}}function yg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(Zt(t,n))return;od.set(n),i.uniformMatrix4fv(this.addr,!1,od),$t(t,n)}}function Sg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Eg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2iv(this.addr,e),$t(t,e)}}function bg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;i.uniform3iv(this.addr,e),$t(t,e)}}function Tg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4iv(this.addr,e),$t(t,e)}}function wg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ag(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2uiv(this.addr,e),$t(t,e)}}function Rg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;i.uniform3uiv(this.addr,e),$t(t,e)}}function Cg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4uiv(this.addr,e),$t(t,e)}}function El(i){return i.version===0&&(i.compareFunction=Oc,i.needsUpdate=!0),i}function Pg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=El(Ad):r=wd,t.setTexture2D(e||r,s)}function Ig(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Pd,s)}function Lg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=El(Rd):r=Id,t.setTextureCube(e||r,s)}function Dg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Cd,s)}function Ng(i){switch(i){case 5126:return mg;case 35664:return gg;case 35665:return xg;case 35666:return _g;case 35674:return Mg;case 35675:return vg;case 35676:return yg;case 5124:case 35670:return Sg;case 35667:case 35671:return Eg;case 35668:case 35672:return bg;case 35669:case 35673:return Tg;case 5125:return wg;case 36294:return Ag;case 36295:return Rg;case 36296:return Cg;case 35678:case 36198:case 36298:case 36306:case 35682:return Pg;case 35679:case 36299:case 36307:return Ig;case 35680:case 36300:case 36308:case 36293:return Lg;case 36289:case 36303:case 36311:case 36292:return Dg}}function Ug(i,e){i.uniform1fv(this.addr,e)}function Fg(i,e){let t=Qs(e,this.size,2);i.uniform2fv(this.addr,t)}function Og(i,e){let t=Qs(e,this.size,3);i.uniform3fv(this.addr,t)}function Bg(i,e){let t=Qs(e,this.size,4);i.uniform4fv(this.addr,t)}function Hg(i,e){let t=Qs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function zg(i,e){let t=Qs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Gg(i,e){let t=Qs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function kg(i,e){i.uniform1iv(this.addr,e)}function Vg(i,e){i.uniform2iv(this.addr,e)}function Wg(i,e){i.uniform3iv(this.addr,e)}function Xg(i,e){i.uniform4iv(this.addr,e)}function qg(i,e){i.uniform1uiv(this.addr,e)}function Yg(i,e){i.uniform2uiv(this.addr,e)}function Kg(i,e){i.uniform3uiv(this.addr,e)}function Zg(i,e){i.uniform4uiv(this.addr,e)}function $g(i,e,t){let n=this.cache,s=e.length,r=Sl(t,s);Zt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=El(Ad):a=wd;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Jg(i,e,t){let n=this.cache,s=e.length,r=Sl(t,s);Zt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Pd,r[a])}function Qg(i,e,t){let n=this.cache,s=e.length,r=Sl(t,s);Zt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=El(Rd):a=Id;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function jg(i,e,t){let n=this.cache,s=e.length,r=Sl(t,s);Zt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Cd,r[a])}function ex(i){switch(i){case 5126:return Ug;case 35664:return Fg;case 35665:return Og;case 35666:return Bg;case 35674:return Hg;case 35675:return zg;case 35676:return Gg;case 5124:case 35670:return kg;case 35667:case 35671:return Vg;case 35668:case 35672:return Wg;case 35669:case 35673:return Xg;case 5125:return qg;case 36294:return Yg;case 36295:return Kg;case 36296:return Zg;case 35678:case 36198:case 36298:case 36306:case 35682:return $g;case 35679:case 36299:case 36307:return Jg;case 35680:case 36300:case 36308:case 36293:return Qg;case 36289:case 36303:case 36311:case 36292:return jg}}var th=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ng(t.type)}},nh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ex(t.type)}},ih=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},jc=/(\w+)(\])?(\[|\.)?/g;function hd(i,e){i.seq.push(e),i.map[e.id]=e}function tx(i,e,t){let n=i.name,s=n.length;for(jc.lastIndex=0;;){let r=jc.exec(n),a=jc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){hd(t,c===void 0?new th(o,i,e):new nh(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new ih(o),hd(t,u)),t=u}}}var $s=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);tx(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function ud(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var nx=37297,ix=0;function sx(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var dd=new lt;function rx(i){gt._getMatrix(dd,gt.workingColorSpace,i);let e=`mat3( ${dd.elements.map(t=>t.toFixed(4))} )`;switch(gt.getTransfer(i)){case Mr:return[e,"LinearTransferOETF"];case Tt:return[e,"sRGBTransferOETF"];default:return Je("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function fd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+sx(i.getShaderSource(e),o)}else return r}function ax(i,e){let t=rx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var ox={[Qr]:"Linear",[jr]:"Reinhard",[ea]:"Cineon",[is]:"ACESFilmic",[na]:"AgX",[ia]:"Neutral",[ta]:"Custom"};function lx(i,e){let t=ox[e];return t===void 0?(Je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var vl=new N;function cx(){gt.getLuminanceCoefficients(vl);let i=vl.x.toFixed(4),e=vl.y.toFixed(4),t=vl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fa).join(`
`)}function ux(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function dx(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function fa(i){return i!==""}function pd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function md(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var fx=/^[ \t]*#include +<([\w\d./]+)>/gm;function sh(i){return i.replace(fx,px)}function px(i,e){let t=ft[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return sh(t)}var mx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gd(i){return i.replace(mx,gx)}function gx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function xd(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var xx={[$r]:"SHADOWMAP_TYPE_PCF",[Xs]:"SHADOWMAP_TYPE_VSM"};function _x(i){return xx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Mx={[Ys]:"ENVMAP_MODE_REFRACTION"};function vx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Mx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var yx={[Lo]:"ENVMAP_BLENDING_MULTIPLY",[Pu]:"ENVMAP_BLENDING_MIX",[Iu]:"ENVMAP_BLENDING_ADD"};function Sx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":yx[i.combine]||"ENVMAP_BLENDING_NONE"}function Ex(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=_x(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=vx(t),u=Sx(t),d=hx(t),f=ux(r),x=s.createProgram(),S,m,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(fa).join(`
`),S.length>0&&(S+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(fa).join(`
`),m.length>0&&(m+=`
`)):(S=[xd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fa).join(`
`),m=[xd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==jn?"#define TONE_MAPPING":"",t.toneMapping!==jn?ft.tonemapping_pars_fragment:"",t.toneMapping!==jn?lx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,ax("linearToOutputTexel",t.outputColorSpace),cx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fa).join(`
`)),a=sh(a),a=pd(a,t),a=md(a,t),o=sh(o),o=pd(o,t),o=md(o,t),a=gd(a),o=gd(o),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,S=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,m=["#define varying in",t.glslVersion===Bc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=p+S+a,T=p+m+o,v=ud(s,s.VERTEX_SHADER,y),R=ud(s,s.FRAGMENT_SHADER,T);s.attachShader(x,v),s.attachShader(x,R),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(P){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(x)||"",G=s.getShaderInfoLog(v)||"",K=s.getShaderInfoLog(R)||"",D=O.trim(),H=G.trim(),X=K.trim(),Y=!0,ce=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,v,R);else{let $=fd(s,v,"vertex"),ie=fd(s,R,"fragment");ot("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+D+`
`+$+`
`+ie)}else D!==""?Je("WebGLProgram: Program Info Log:",D):(H===""||X==="")&&(ce=!1);ce&&(P.diagnostics={runnable:Y,programLog:D,vertexShader:{log:H,prefix:S},fragmentShader:{log:X,prefix:m}})}s.deleteShader(v),s.deleteShader(R),_=new $s(s,x),E=dx(s,x)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(x,nx)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ix++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=v,this.fragmentShader=R,this}var bx=0,rh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ah(e),t.set(e,n)),n}},ah=class{constructor(e){this.id=bx++,this.code=e,this.usedTimes=0}};function Tx(i){return i===Ni||i===ca||i===ha}function wx(i,e,t,n,s,r){let a=new Sr,o=new rh,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function x(_,E,L,P,O,G){let K=P.fog,D=O.geometry,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,Y=e.get(_.envMap||H,X),ce=d[_.type],$=n.precision;_.precision!==null&&($=n.getMaxPrecision(_.precision),$!==_.precision&&Je("WebGLProgram.getParameters:",_.precision,"not supported, using",$,"instead."));let ie=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,re=ie!==void 0?ie.length:0,me=0;D.morphAttributes.position!==void 0&&(me=1),D.morphAttributes.normal!==void 0&&(me=2),D.morphAttributes.color!==void 0&&(me=3);let ze,Q,Te,Ie;if(ce){let Ce=ti[ce];ze=Ce.vertexShader,Q=Ce.fragmentShader}else{ze=_.vertexShader,Q=_.fragmentShader;let Ce=o.getVertexShaderStage(_),xt=o.getFragmentShaderStage(_);o.update(_,Ce,xt),Te=Ce.id,Ie=xt.id}let we=i.getRenderTarget(),ve=i.state.buffers.depth.getReversed(),Ge=O.isInstancedMesh===!0,ut=O.isBatchedMesh===!0,Ve=!!_.map,$e=!!_.matcap,Qe=!!Y,ne=Qe&&Y.isPMREMTexture===!0,_e=!!_.aoMap,xe=!!_.lightMap,V=!!_.bumpMap&&_.wireframe===!1,Ee=!!_.normalMap,qe=!!_.displacementMap,ae=!!_.emissiveMap,st=!!_.metalnessMap,rt=!!_.roughnessMap,tt=_.anisotropy>0,F=_.clearcoat>0,yt=_.diffuseRoughness>0,nt=_.dispersion>0,W=_.retroreflectivity>0,te=_.iridescence>0,Le=_.sheen>0,fe=_.transmission>0,Ue=tt&&!!_.anisotropyMap,A=F&&!!_.clearcoatMap,M=F&&!!_.clearcoatNormalMap,k=F&&!!_.clearcoatRoughnessMap,ue=yt&&!!_.diffuseRoughnessMap,se=te&&!!_.iridescenceMap,ge=te&&!!_.iridescenceThicknessMap,be=Le&&!!_.sheenColorMap,ee=Le&&!!_.sheenRoughnessMap,j=!!_.specularMap,Se=!!_.specularColorMap,I=!!_.specularIntensityMap,q=fe&&!!_.transmissionMap,Z=fe&&!!_.thicknessMap,oe=!!_.gradientMap,de=!!_.alphaMap,ye=_.alphaTest>0,Fe=!!_.alphaHash,it=!!_.extensions,he=jn;_.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(he=i.toneMapping);let Xe=ne?Y.isCompressedCubeTexture?Y.image[0].mipmaps:Y.mipmaps:null,je={shaderID:ce,shaderType:_.type,shaderName:_.name,vertexShader:ze,fragmentShader:Q,defines:_.defines,customVertexShaderID:Te,customFragmentShaderID:Ie,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:$,batching:ut,batchingColor:ut&&O._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&O.instanceColor!==null,instancingMorph:Ge&&O.morphTexture!==null,outputColorSpace:we===null?i.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:gt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ve,matcap:$e,envMap:Qe,envMapMode:Qe&&Y.mapping,envMapPMREM:ne,envMapMaxLod:ne?Xe.length-1:null,envMapSize:ne?Xe[0].width:null,aoMap:_e,lightMap:xe,bumpMap:V,normalMap:Ee,displacementMap:qe,emissiveMap:ae,normalMapObjectSpace:Ee&&_.normalMapType===Nu,normalMapTangentSpace:Ee&&_.normalMapType===ua,packedNormalMap:Ee&&_.normalMapType===ua&&Tx(_.normalMap.format),metalnessMap:st,roughnessMap:rt,anisotropy:tt,anisotropyMap:Ue,clearcoat:F,clearcoatMap:A,clearcoatNormalMap:M,clearcoatRoughnessMap:k,diffuseRoughness:yt,diffuseRoughnessMap:ue,dispersion:nt,retroreflection:W,iridescence:te,iridescenceMap:se,iridescenceThicknessMap:ge,sheen:Le,sheenColorMap:be,sheenRoughnessMap:ee,specularMap:j,specularColorMap:Se,specularIntensityMap:I,transmission:fe,transmissionMap:q,thicknessMap:Z,gradientMap:oe,opaque:_.transparent===!1&&_.blending===qs&&_.alphaToCoverage===!1,alphaMap:de,alphaTest:ye,alphaHash:Fe,combine:_.combine,mapUv:Ve&&f(_.map.channel),aoMapUv:_e&&f(_.aoMap.channel),lightMapUv:xe&&f(_.lightMap.channel),bumpMapUv:V&&f(_.bumpMap.channel),normalMapUv:Ee&&f(_.normalMap.channel),displacementMapUv:qe&&f(_.displacementMap.channel),emissiveMapUv:ae&&f(_.emissiveMap.channel),metalnessMapUv:st&&f(_.metalnessMap.channel),roughnessMapUv:rt&&f(_.roughnessMap.channel),anisotropyMapUv:Ue&&f(_.anisotropyMap.channel),clearcoatMapUv:A&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:M&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ue&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:se&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:be&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:ee&&f(_.sheenRoughnessMap.channel),specularMapUv:j&&f(_.specularMap.channel),specularColorMapUv:Se&&f(_.specularColorMap.channel),specularIntensityMapUv:I&&f(_.specularIntensityMap.channel),transmissionMapUv:q&&f(_.transmissionMap.channel),thicknessMapUv:Z&&f(_.thicknessMap.channel),alphaMapUv:de&&f(_.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(Ee||tt),vertexNormals:!!D.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!D.attributes.uv&&(Ve||de),fog:!!K,useFog:_.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||D.attributes.normal===void 0&&Ee===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ve,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:me,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:G.filter(Ce=>Ce.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:he,decodeVideoTexture:Ve&&_.map.isVideoTexture===!0&&gt.getTransfer(_.map.colorSpace)===Tt,decodeVideoTextureEmissive:ae&&_.emissiveMap.isVideoTexture===!0&&gt.getTransfer(_.emissiveMap.colorSpace)===Tt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===gn,flipSided:_.side===Kt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:it&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&_.extensions.multiDraw===!0||ut)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return je.vertexUv1s=l.has(1),je.vertexUv2s=l.has(2),je.vertexUv3s=l.has(3),l.clear(),je}function S(_){let E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(let L in _.defines)E.push(L),E.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(m(E,_),p(E,_),E.push(i.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function m(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapPMREM),_.push(E.envMapMaxLod),_.push(E.envMapSize),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.diffuseRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.numLightProbeGrids),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function p(_,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.diffuseRoughness&&a.enable(25),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function y(_){let E=d[_.type],L;if(E){let P=ti[E];L=kn.clone(P.uniforms)}else L=_.uniforms;return L}function T(_,E){let L=h.get(E);return L!==void 0?++L.usedTimes:(L=new Ex(i,E,_,s),c.push(L),h.set(E,L)),L}function v(_){if(--_.usedTimes===0){let E=c.indexOf(_);c[E]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function R(_){o.remove(_)}function w(){o.dispose()}return{getParameters:x,getProgramCacheKey:S,getUniforms:y,acquireProgram:T,releaseProgram:v,releaseShaderCache:R,programs:c,dispose:w}}function Ax(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Rx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function _d(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Md(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,x,S,m,p){let y=i[e];return y===void 0?(y={id:d.id,object:d,geometry:f,material:x,materialVariant:a(d),groupOrder:S,renderOrder:d.renderOrder,z:m,group:p},i[e]=y):(y.id=d.id,y.object=d,y.geometry=f,y.material=x,y.materialVariant=a(d),y.groupOrder=S,y.renderOrder=d.renderOrder,y.z=m,y.group=p),e++,y}function l(d,f,x,S,m,p,y){y.reversedDepth===!0&&(m=-m);let T=o(d,f,x,S,m,p);x.transmission>0?n.push(T):x.transparent===!0?s.push(T):t.push(T)}function c(d,f,x,S,m,p){let y=o(d,f,x,S,m,p);x.transmission>0?n.unshift(y):x.transparent===!0?s.unshift(y):t.unshift(y)}function h(d,f){t.length>1&&t.sort(d||Rx),n.length>1&&n.sort(f||_d),s.length>1&&s.sort(f||_d)}function u(){for(let d=e,f=i.length;d<f;d++){let x=i[d];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function Cx(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Md,i.set(n,[a])):s>=r.length?(a=new Md,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Px(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new N,color:new Ye};break;case"SpotLight":t={position:new N,direction:new N,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function Ix(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Lx=0;function Dx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Nx(i){let e=new Px,t=Ix(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);let s=new N,r=new Lt,a=new Lt;function o(c){let h=0,u=0,d=0;for(let G=0;G<9;G++)n.probe[G].set(0,0,0);let f=0,x=0,S=0,m=0,p=0,y=0,T=0,v=0,R=0,w=0,_=0,E=0,L=0,P=0;c.sort(Dx);for(let G=0,K=c.length;G<K;G++){let D=c[G],H=D.color,X=D.intensity,Y=D.distance,ce=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Ni?ce=D.shadow.map.texture:ce=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=H.r*X,u+=H.g*X,d+=H.b*X;else if(D.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(D.sh.coefficients[$],X);P++}else if(D.isSunLight){let $=e.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let ie=D.shadow,re=t.get(D);re.shadowIntensity=ie.intensity,re.shadowBias=ie.bias,re.shadowNormalBias=ie.normalBias,re.shadowRadius=ie.radius,re.shadowMapSize.copy(ie.mapSize).multiply(ie.getFrameExtents()),n.sunShadow[x]=re,n.sunShadowMap[x]=ce;let me=ie.getViewportCount();for(let ze=0;ze<me;ze++)n.sunShadowMatrix[S+ze]=ie.getMatrix(ze),n.sunShadowCascade[S+ze]=ie._cascadeData[ze];S+=me,x++}n.sun[f]=$,f++}else if(D.isDirectionalLight){let $=e.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let ie=D.shadow,re=t.get(D);re.shadowIntensity=ie.intensity,re.shadowBias=ie.bias,re.shadowNormalBias=ie.normalBias,re.shadowRadius=ie.radius,re.shadowMapSize=ie.mapSize,n.directionalShadow[m]=re,n.directionalShadowMap[m]=ce,n.directionalShadowMatrix[m]=D.shadow.matrix,R++}n.directional[m]=$,m++}else if(D.isSpotLight){let $=e.get(D);$.position.setFromMatrixPosition(D.matrixWorld),$.color.copy(H).multiplyScalar(X),$.distance=Y,$.coneCos=Math.cos(D.angle),$.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),$.decay=D.decay,n.spot[y]=$;let ie=D.shadow;if(D.map&&(n.spotLightMap[E]=D.map,E++,ie.updateMatrices(D),D.castShadow&&L++),n.spotLightMatrix[y]=ie.matrix,D.castShadow){let re=t.get(D);re.shadowIntensity=ie.intensity,re.shadowBias=ie.bias,re.shadowNormalBias=ie.normalBias,re.shadowRadius=ie.radius,re.shadowMapSize=ie.mapSize,n.spotShadow[y]=re,n.spotShadowMap[y]=ce,_++}y++}else if(D.isRectAreaLight){let $=e.get(D);$.color.copy(H).multiplyScalar(X),$.halfWidth.set(D.width*.5,0,0),$.halfHeight.set(0,D.height*.5,0),n.rectArea[T]=$,T++}else if(D.isPointLight){let $=e.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),$.distance=D.distance,$.decay=D.decay,D.castShadow){let ie=D.shadow,re=t.get(D);re.shadowIntensity=ie.intensity,re.shadowBias=ie.bias,re.shadowNormalBias=ie.normalBias,re.shadowRadius=ie.radius,re.shadowMapSize=ie.mapSize,re.shadowCameraNear=ie.camera.near,re.shadowCameraFar=ie.camera.far,n.pointShadow[p]=re,n.pointShadowMap[p]=ce,n.pointShadowMatrix[p]=D.shadow.matrix,w++}n.point[p]=$,p++}else if(D.isHemisphereLight){let $=e.get(D);$.skyColor.copy(D.color).multiplyScalar(X),$.groundColor.copy(D.groundColor).multiplyScalar(X),n.hemi[v]=$,v++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=De.LTC_FLOAT_1,n.rectAreaLTC2=De.LTC_FLOAT_2):(n.rectAreaLTC1=De.LTC_HALF_1,n.rectAreaLTC2=De.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let O=n.hash;(O.sunLength!==f||O.directionalLength!==m||O.pointLength!==p||O.spotLength!==y||O.rectAreaLength!==T||O.hemiLength!==v||O.numSunShadows!==x||O.numDirectionalShadows!==R||O.numPointShadows!==w||O.numSpotShadows!==_||O.numSpotMaps!==E||O.numLightProbes!==P)&&(n.sun.length=f,n.directional.length=m,n.spot.length=y,n.rectArea.length=T,n.point.length=p,n.hemi.length=v,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.directionalShadowMatrix.length=R,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+E-L,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=P,O.sunLength=f,O.directionalLength=m,O.pointLength=p,O.spotLength=y,O.rectAreaLength=T,O.hemiLength=v,O.numSunShadows=x,O.numDirectionalShadows=R,O.numPointShadows=w,O.numSpotShadows=_,O.numSpotMaps=E,O.numLightProbes=P,n.version=Lx++)}function l(c,h){let u=0,d=0,f=0,x=0,S=0,m=0,p=h.matrixWorldInverse;for(let y=0,T=c.length;y<T;y++){let v=c[y];if(v.isSunLight){let R=n.sun[u];R.direction.setFromMatrixPosition(v.matrixWorld),R.direction.transformDirection(p),u++}else if(v.isDirectionalLight){let R=n.directional[d];R.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),d++}else if(v.isSpotLight){let R=n.spot[x];R.position.setFromMatrixPosition(v.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),x++}else if(v.isRectAreaLight){let R=n.rectArea[S];R.position.setFromMatrixPosition(v.matrixWorld),R.position.applyMatrix4(p),a.identity(),r.copy(v.matrixWorld),r.premultiply(p),a.extractRotation(r),R.halfWidth.set(v.width*.5,0,0),R.halfHeight.set(0,v.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),S++}else if(v.isPointLight){let R=n.point[f];R.position.setFromMatrixPosition(v.matrixWorld),R.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){let R=n.hemi[m];R.direction.setFromMatrixPosition(v.matrixWorld),R.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function vd(i){let e=new Nx(i),t=[],n=[],s=[];function r(u){h.camera=u,t.length=0,n.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):t.push(u)}function o(u){n.push(u)}function l(){e.setup(t),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Ux(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new vd(i),e.set(s,[o])):r>=a.length?(o=new vd(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Fx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ox=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Bx=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],Hx=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],yd=new Lt,da=new N,eh=new N;function zx(i,e,t){let n=new Ci,s=new le,r=new le,a=new Bt,o=new xo,l=new _o,c={},h=t.maxTextureSize,u={[Di]:Kt,[Kt]:Di,[gn]:gn},d=new qt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:Fx,fragmentShader:Ox}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let x=new Ot;x.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new B(x,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$r;let p=this.type;this.render=function(w,_,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===Io&&(Je("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=$r);let L=i.getRenderTarget(),P=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),G=i.state;G.setBlending(xi),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let K=p!==this.type;K&&_.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(H=>H.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,H=w.length;D<H;D++){let X=w[D],Y=X.shadow;if(Y===void 0){Je("WebGLShadowMap:",X,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let ce=Y.getFrameExtents();s.multiply(ce),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ce.x),s.x=r.x*ce.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ce.y),s.y=r.y*ce.y,Y.mapSize.y=r.y));let $=i.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=$,Y.map===null||K===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Xs){if(X.isPointLight){Je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Vt(s.x,s.y,{format:Ni,type:ln,minFilter:tn,magFilter:tn,generateMipmaps:!1}),Y.map.texture.name=X.name+".shadowMap",Y.map.depthTexture=new gi(s.x,s.y,Pn),Y.map.depthTexture.name=X.name+".shadowMapDepth",Y.map.depthTexture.format=pi,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=en,Y.map.depthTexture.magFilter=en}else X.isPointLight?(Y.map=new pa(s.x),Y.map.depthTexture=new Pr(s.x,Gn)):(Y.map=new Vt(s.x,s.y),Y.map.depthTexture=new gi(s.x,s.y,Gn)),Y.map.depthTexture.name=X.name+".shadowMap",Y.map.depthTexture.format=pi,this.type===$r?(Y.map.depthTexture.compareFunction=$?Fc:Uc,Y.map.depthTexture.minFilter=tn,Y.map.depthTexture.magFilter=tn):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=en,Y.map.depthTexture.magFilter=en);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==s.x||Y.map.height!==s.y)&&Y.map.setSize(s.x,s.y);let ie=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();X.isPointLight!==!0&&Y.updateMatrices(X,E);let re=(Y.camera.layers.mask&4294967294)!==0?Y.camera.layers:E.layers;for(let me=0;me<ie;me++){let ze=Y.getCamera(me);if(X.isPointLight){let Q=Y.camera,Te=Y.matrix,Ie=X.distance||Q.far;Ie!==Q.far&&(Q.far=Ie,Q.updateProjectionMatrix()),da.setFromMatrixPosition(X.matrixWorld),Q.position.copy(da),eh.copy(Q.position),eh.add(Bx[me]),Q.up.copy(Hx[me]),Q.lookAt(eh),Q.updateMatrixWorld(),Te.makeTranslation(-da.x,-da.y,-da.z),yd.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(yd,Q.coordinateSystem,Q.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)i.setRenderTarget(Y.map,me),i.clear();else{me===0&&(i.setRenderTarget(Y.map),i.clear());let Q=Y.getViewport(me);a.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),G.viewport(a)}n=Y.getFrustum(me),v(_,E,ze,X,re,this.type)}Y.isPointLightShadow!==!0&&this.type===Xs&&y(Y,E),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(L,P,O)};function y(w,_){let E=e.update(S);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new Vt(s.x,s.y,{format:Ni,type:ln}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(_,null,E,d,S,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(_,null,E,f,S,null)}function T(w,_,E,L){let P=null,O=E.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(O!==void 0)P=O;else if(P=E.isPointLight===!0?l:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let G=P.uuid,K=_.uuid,D=c[G];D===void 0&&(D={},c[G]=D);let H=D[K];H===void 0&&(H=P.clone(),D[K]=H,_.addEventListener("dispose",R)),P=H}if(P.visible=_.visible,P.wireframe=_.wireframe,L===Xs?P.side=_.shadowSide!==null?_.shadowSide:_.side:P.side=_.shadowSide!==null?_.shadowSide:u[_.side],P.alphaMap=_.alphaMap,P.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,P.map=_.map,P.clipShadows=_.clipShadows,P.clippingPlanes=_.clippingPlanes,P.clipIntersection=_.clipIntersection,P.displacementMap=_.displacementMap,P.displacementScale=_.displacementScale,P.displacementBias=_.displacementBias,P.wireframeLinewidth=_.wireframeLinewidth,P.linewidth=_.linewidth,E.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let G=i.properties.get(P);G.light=E}return P}function v(w,_,E,L,P,O){if(w.visible===!1)return;if(w.layers.test(P)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&O===Xs)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,w.matrixWorld);let D=e.update(w),H=w.material;if(Array.isArray(H)){let X=D.groups;for(let Y=0,ce=X.length;Y<ce;Y++){let $=X[Y],ie=H[$.materialIndex];if(ie&&ie.visible){let re=T(w,ie,L,O);w.onBeforeShadow(i,w,_,E,D,re,$),i.renderBufferDirect(E,null,D,re,w,$),w.onAfterShadow(i,w,_,E,D,re,$)}}}else if(H.visible){let X=T(w,H,L,O);w.onBeforeShadow(i,w,_,E,D,X,null),i.renderBufferDirect(E,null,D,X,w,null),w.onAfterShadow(i,w,_,E,D,X,null)}}let K=w.children;for(let D=0,H=K.length;D<H;D++)v(K[D],_,E,L,P,O)}function R(w){w.target.removeEventListener("dispose",R);for(let E in c){let L=c[E],P=w.target.uuid;P in L&&(L[P].dispose(),delete L[P])}}}function Gx(i,e){function t(){let I=!1,q=new Bt,Z=null,oe=new Bt(0,0,0,0);return{setMask:function(de){Z!==de&&!I&&(i.colorMask(de,de,de,de),Z=de)},setLocked:function(de){I=de},setClear:function(de,ye,Fe,it,he){he===!0&&(de*=it,ye*=it,Fe*=it),q.set(de,ye,Fe,it),oe.equals(q)===!1&&(i.clearColor(de,ye,Fe,it),oe.copy(q))},reset:function(){I=!1,Z=null,oe.set(-1,0,0,0)}}}function n(){let I=!1,q=!1,Z=null,oe=null,de=null;return{setReversed:function(ye){if(q!==ye){let Fe=e.get("EXT_clip_control");ye?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),q=ye;let it=de;de=null,this.setClear(it)}},getReversed:function(){return q},setTest:function(ye){ye?ve(i.DEPTH_TEST):Ge(i.DEPTH_TEST)},setMask:function(ye){Z!==ye&&!I&&(i.depthMask(ye),Z=ye)},setFunc:function(ye){if(q&&(ye=Xu[ye]),oe!==ye){switch(ye){case Za:i.depthFunc(i.NEVER);break;case $a:i.depthFunc(i.ALWAYS);break;case Ja:i.depthFunc(i.LESS);break;case Ps:i.depthFunc(i.LEQUAL);break;case Qa:i.depthFunc(i.EQUAL);break;case ja:i.depthFunc(i.GEQUAL);break;case eo:i.depthFunc(i.GREATER);break;case to:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}oe=ye}},setLocked:function(ye){I=ye},setClear:function(ye){de!==ye&&(de=ye,q&&(ye=1-ye),i.clearDepth(ye))},reset:function(){I=!1,Z=null,oe=null,de=null,q=!1}}}function s(){let I=!1,q=null,Z=null,oe=null,de=null,ye=null,Fe=null,it=null,he=null;return{setTest:function(Xe){I||(Xe?ve(i.STENCIL_TEST):Ge(i.STENCIL_TEST))},setMask:function(Xe){q!==Xe&&!I&&(i.stencilMask(Xe),q=Xe)},setFunc:function(Xe,je,Ce){(Z!==Xe||oe!==je||de!==Ce)&&(i.stencilFunc(Xe,je,Ce),Z=Xe,oe=je,de=Ce)},setOp:function(Xe,je,Ce){(ye!==Xe||Fe!==je||it!==Ce)&&(i.stencilOp(Xe,je,Ce),ye=Xe,Fe=je,it=Ce)},setLocked:function(Xe){I=Xe},setClear:function(Xe){he!==Xe&&(i.clearStencil(Xe),he=Xe)},reset:function(){I=!1,q=null,Z=null,oe=null,de=null,ye=null,Fe=null,it=null,he=null}}}let r=new t,a=new n,o=new s,l={},c=new WeakMap,h={},u={},d={},f=new WeakMap,x=[],S=null,m=!1,p=null,y=null,T=null,v=null,R=null,w=null,_=null,E=new Ye(0,0,0),L=0,P=!1,O=null,G=null,K=null,D=null,H=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,ce=0,$=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec($)[1]),Y=ce>=1):$.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),Y=ce>=2);let ie=null,re={},me=i.getParameter(i.SCISSOR_BOX),ze=i.getParameter(i.VIEWPORT),Q=new Bt().fromArray(me),Te=new Bt().fromArray(ze);function Ie(I,q,Z,oe){let de=new Uint8Array(4),ye=i.createTexture();i.bindTexture(I,ye),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Fe=0;Fe<Z;Fe++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(q,0,i.RGBA,1,1,oe,0,i.RGBA,i.UNSIGNED_BYTE,de):i.texImage2D(q+Fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,de);return ye}let we={};we[i.TEXTURE_2D]=Ie(i.TEXTURE_2D,i.TEXTURE_2D,1),we[i.TEXTURE_CUBE_MAP]=Ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[i.TEXTURE_2D_ARRAY]=Ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),we[i.TEXTURE_3D]=Ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ve(i.DEPTH_TEST),a.setFunc(Ps),V(!1),Ee(Ec),ve(i.CULL_FACE),_e(xi);function ve(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function Ge(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function ut(I,q){return d[I]!==q?(i.bindFramebuffer(I,q),d[I]=q,I===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=q),I===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=q),!0):!1}function Ve(I,q){let Z=x,oe=!1;if(I){Z=f.get(q),Z===void 0&&(Z=[],f.set(q,Z));let de=I.textures;if(Z.length!==de.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let ye=0,Fe=de.length;ye<Fe;ye++)Z[ye]=i.COLOR_ATTACHMENT0+ye;Z.length=de.length,oe=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,oe=!0);oe&&i.drawBuffers(Z)}function $e(I){return S!==I?(i.useProgram(I),S=I,!0):!1}let Qe={[ns]:i.FUNC_ADD,[fu]:i.FUNC_SUBTRACT,[pu]:i.FUNC_REVERSE_SUBTRACT};Qe[mu]=i.MIN,Qe[gu]=i.MAX;let ne={[xu]:i.ZERO,[_u]:i.ONE,[Mu]:i.SRC_COLOR,[wc]:i.SRC_ALPHA,[Tu]:i.SRC_ALPHA_SATURATE,[Eu]:i.DST_COLOR,[yu]:i.DST_ALPHA,[vu]:i.ONE_MINUS_SRC_COLOR,[Ac]:i.ONE_MINUS_SRC_ALPHA,[bu]:i.ONE_MINUS_DST_COLOR,[Su]:i.ONE_MINUS_DST_ALPHA,[wu]:i.CONSTANT_COLOR,[Au]:i.ONE_MINUS_CONSTANT_COLOR,[Ru]:i.CONSTANT_ALPHA,[Cu]:i.ONE_MINUS_CONSTANT_ALPHA};function _e(I,q,Z,oe,de,ye,Fe,it,he,Xe){if(I===xi){m===!0&&(Ge(i.BLEND),m=!1);return}if(m===!1&&(ve(i.BLEND),m=!0),I!==du){if(I!==p||Xe!==P){if((y!==ns||R!==ns)&&(i.blendEquation(i.FUNC_ADD),y=ns,R=ns),Xe)switch(I){case qs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jr:i.blendFunc(i.ONE,i.ONE);break;case bc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Tc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ot("WebGLState: Invalid blending: ",I);break}else switch(I){case qs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case bc:ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Tc:ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ot("WebGLState: Invalid blending: ",I);break}T=null,v=null,w=null,_=null,E.set(0,0,0),L=0,p=I,P=Xe}return}de=de||q,ye=ye||Z,Fe=Fe||oe,(q!==y||de!==R)&&(i.blendEquationSeparate(Qe[q],Qe[de]),y=q,R=de),(Z!==T||oe!==v||ye!==w||Fe!==_)&&(i.blendFuncSeparate(ne[Z],ne[oe],ne[ye],ne[Fe]),T=Z,v=oe,w=ye,_=Fe),(it.equals(E)===!1||he!==L)&&(i.blendColor(it.r,it.g,it.b,he),E.copy(it),L=he),p=I,P=!1}function xe(I,q){I.side===gn?Ge(i.CULL_FACE):ve(i.CULL_FACE);let Z=I.side===Kt;q&&(Z=!Z),V(Z),I.blending===qs&&I.transparent===!1?_e(xi):_e(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);let oe=I.stencilWrite;o.setTest(oe),oe&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ae(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ve(i.SAMPLE_ALPHA_TO_COVERAGE):Ge(i.SAMPLE_ALPHA_TO_COVERAGE)}function V(I){O!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),O=I)}function Ee(I){I!==hu?(ve(i.CULL_FACE),I!==G&&(I===Ec?i.cullFace(i.BACK):I===uu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ge(i.CULL_FACE),G=I}function qe(I){I!==K&&(Y&&i.lineWidth(I),K=I)}function ae(I,q,Z){I?(ve(i.POLYGON_OFFSET_FILL),(D!==q||H!==Z)&&(D=q,H=Z,a.getReversed()&&(q=-q,Z=-Z),i.polygonOffset(q,Z))):Ge(i.POLYGON_OFFSET_FILL)}function st(I){I?ve(i.SCISSOR_TEST):Ge(i.SCISSOR_TEST)}function rt(I){I===void 0&&(I=i.TEXTURE0+X-1),ie!==I&&(i.activeTexture(I),ie=I)}function tt(I,q,Z){Z===void 0&&(ie===null?Z=i.TEXTURE0+X-1:Z=ie);let oe=re[Z];oe===void 0&&(oe={type:void 0,texture:void 0},re[Z]=oe),(oe.type!==I||oe.texture!==q)&&(ie!==Z&&(i.activeTexture(Z),ie=Z),i.bindTexture(I,q||we[I]),oe.type=I,oe.texture=q)}function F(){let I=re[ie];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function yt(){try{i.compressedTexImage2D(...arguments)}catch(I){ot("WebGLState:",I)}}function nt(){try{i.compressedTexImage3D(...arguments)}catch(I){ot("WebGLState:",I)}}function W(){try{i.texSubImage2D(...arguments)}catch(I){ot("WebGLState:",I)}}function te(){try{i.texSubImage3D(...arguments)}catch(I){ot("WebGLState:",I)}}function Le(){try{i.compressedTexSubImage2D(...arguments)}catch(I){ot("WebGLState:",I)}}function fe(){try{i.compressedTexSubImage3D(...arguments)}catch(I){ot("WebGLState:",I)}}function Ue(){try{i.texStorage2D(...arguments)}catch(I){ot("WebGLState:",I)}}function A(){try{i.texStorage3D(...arguments)}catch(I){ot("WebGLState:",I)}}function M(){try{i.texImage2D(...arguments)}catch(I){ot("WebGLState:",I)}}function k(){try{i.texImage3D(...arguments)}catch(I){ot("WebGLState:",I)}}function ue(I){return u[I]!==void 0?u[I]:i.getParameter(I)}function se(I,q){u[I]!==q&&(i.pixelStorei(I,q),u[I]=q)}function ge(I){Q.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Q.copy(I))}function be(I){Te.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Te.copy(I))}function ee(I,q){let Z=c.get(q);Z===void 0&&(Z=new WeakMap,c.set(q,Z));let oe=Z.get(I);oe===void 0&&(oe=i.getUniformBlockIndex(q,I.name),i.uniformBlockBinding(q,oe,oe),Z.set(I,oe))}function j(I,q,Z){let de=c.get(q).get(I);l[de]!==Z&&(i.bindBufferBase(i.UNIFORM_BUFFER,de,Z),l[de]=Z)}function Se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},ie=null,re={},d={},l={},f=new WeakMap,x=[],S=null,m=!1,p=null,y=null,T=null,v=null,R=null,w=null,_=null,E=new Ye(0,0,0),L=0,P=!1,O=null,G=null,K=null,D=null,H=null,Q.set(0,0,i.canvas.width,i.canvas.height),Te.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ve,disable:Ge,bindFramebuffer:ut,drawBuffers:Ve,useProgram:$e,setBlending:_e,setMaterial:xe,setFlipSided:V,setCullFace:Ee,setLineWidth:qe,setPolygonOffset:ae,setScissorTest:st,activeTexture:rt,bindTexture:tt,unbindTexture:F,compressedTexImage2D:yt,compressedTexImage3D:nt,texImage2D:M,texImage3D:k,pixelStorei:se,getParameter:ue,updateUBOMapping:ee,uniformBlockBinding:j,texStorage2D:Ue,texStorage3D:A,texSubImage2D:W,texSubImage3D:te,compressedTexSubImage2D:Le,compressedTexSubImage3D:fe,scissor:ge,viewport:be,reset:Se}}function kx(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new le,h=new WeakMap,u=new Set,d,f=new WeakMap,x=new Set,S=new FinalizationRegistry(A=>x.delete(A)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(A,M){return m?new OffscreenCanvas(A,M):vr("canvas")}function y(A,M,k){let ue=1,se=Ue(A);if((se.width>k||se.height>k)&&(ue=k/Math.max(se.width,se.height)),ue<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ge=Math.floor(ue*se.width),be=Math.floor(ue*se.height);d===void 0&&(d=p(ge,be));let ee=M?p(ge,be):d;return ee.width=ge,ee.height=be,ee.getContext("2d").drawImage(A,0,0,ge,be),Je("WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+ge+"x"+be+")."),ee}else return"data"in A&&Je("WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),A;return A}function T(A){return A.generateMipmaps}function v(A){i.generateMipmap(A)}function R(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(A,M,k,ue,se,ge=!1){if(A!==null){if(i[A]!==void 0)return i[A];Je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let be;ue&&(be=e.get("EXT_texture_norm16"),be||Je("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=M;if(M===i.RED&&(k===i.FLOAT&&(ee=i.R32F),k===i.HALF_FLOAT&&(ee=i.R16F),k===i.UNSIGNED_BYTE&&(ee=i.R8),k===i.UNSIGNED_SHORT&&be&&(ee=be.R16_EXT),k===i.SHORT&&be&&(ee=be.R16_SNORM_EXT)),M===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(ee=i.R8UI),k===i.UNSIGNED_SHORT&&(ee=i.R16UI),k===i.UNSIGNED_INT&&(ee=i.R32UI),k===i.BYTE&&(ee=i.R8I),k===i.SHORT&&(ee=i.R16I),k===i.INT&&(ee=i.R32I)),M===i.RG&&(k===i.FLOAT&&(ee=i.RG32F),k===i.HALF_FLOAT&&(ee=i.RG16F),k===i.UNSIGNED_BYTE&&(ee=i.RG8),k===i.UNSIGNED_SHORT&&be&&(ee=be.RG16_EXT),k===i.SHORT&&be&&(ee=be.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(ee=i.RG8UI),k===i.UNSIGNED_SHORT&&(ee=i.RG16UI),k===i.UNSIGNED_INT&&(ee=i.RG32UI),k===i.BYTE&&(ee=i.RG8I),k===i.SHORT&&(ee=i.RG16I),k===i.INT&&(ee=i.RG32I)),M===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(ee=i.RGB8UI),k===i.UNSIGNED_SHORT&&(ee=i.RGB16UI),k===i.UNSIGNED_INT&&(ee=i.RGB32UI),k===i.BYTE&&(ee=i.RGB8I),k===i.SHORT&&(ee=i.RGB16I),k===i.INT&&(ee=i.RGB32I)),M===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(ee=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(ee=i.RGBA16UI),k===i.UNSIGNED_INT&&(ee=i.RGBA32UI),k===i.BYTE&&(ee=i.RGBA8I),k===i.SHORT&&(ee=i.RGBA16I),k===i.INT&&(ee=i.RGBA32I)),M===i.RGB&&(k===i.UNSIGNED_SHORT&&be&&(ee=be.RGB16_EXT),k===i.SHORT&&be&&(ee=be.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&(ee=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(ee=i.R11F_G11F_B10F)),M===i.RGBA){let j=ge?Mr:gt.getTransfer(se);k===i.FLOAT&&(ee=i.RGBA32F),k===i.HALF_FLOAT&&(ee=i.RGBA16F),k===i.UNSIGNED_BYTE&&(ee=j===Tt?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&be&&(ee=be.RGBA16_EXT),k===i.SHORT&&be&&(ee=be.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function _(A,M){let k;return A?M===null||M===Gn||M===rs?k=i.DEPTH24_STENCIL8:M===Pn?k=i.DEPTH32F_STENCIL8:M===Ks&&(k=i.DEPTH24_STENCIL8,Je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Gn||M===rs?k=i.DEPTH_COMPONENT24:M===Pn?k=i.DEPTH_COMPONENT32F:M===Ks&&(k=i.DEPTH_COMPONENT16),k}function E(A,M){return T(A)===!0||A.isFramebufferTexture&&A.minFilter!==en&&A.minFilter!==tn?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function L(A){let M=new WeakRef(A);n.get(A).__ref=M,x.add(M),S.register(A,M,M)}function P(A){let M=n.get(A).__ref;M!==void 0&&(x.delete(M),S.unregister(M))}function O(A){K(A.target)}function G(A){D(A.target)}function K(A){A.removeEventListener("dispose",O),P(A),X(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&u.delete(A)}function D(A){A.removeEventListener("dispose",G),P(A),ce(A)}function H(){for(let A of x){let M=A.deref();M!==void 0&&(M.isRenderTarget===!0?D(M):K(M))}x.clear(),u.clear()}function X(A){let M=n.get(A);if(M.__webglInit===void 0)return;let k=A.source,ue=f.get(k);if(ue){let se=ue[M.__cacheKey];se.usedTimes--,se.usedTimes===0&&Y(A),Object.keys(ue).length===0&&f.delete(k)}n.remove(A)}function Y(A){let M=n.get(A);i.deleteTexture(M.__webglTexture);let k=A.source,ue=f.get(k);delete ue[M.__cacheKey],a.memory.textures--}function ce(A){let M=n.get(A);M.__depthDisposeCallback&&M.__depthDisposeCallback();let k=A.depthTexture;if(k&&k.renderTarget===A&&K(k),A.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(M.__webglFramebuffer[se]))for(let ge=0;ge<M.__webglFramebuffer[se].length;ge++)i.deleteFramebuffer(M.__webglFramebuffer[se][ge]);else i.deleteFramebuffer(M.__webglFramebuffer[se]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[se])}else{if(Array.isArray(M.__webglFramebuffer))for(let se=0;se<M.__webglFramebuffer.length;se++)i.deleteFramebuffer(M.__webglFramebuffer[se]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let se=0;se<M.__webglColorRenderbuffer.length;se++)M.__webglColorRenderbuffer[se]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[se]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let ue=A.textures;for(let se=0,ge=ue.length;se<ge;se++){let be=n.get(ue[se]);be.__webglTexture&&(i.deleteTexture(be.__webglTexture),a.memory.textures--),n.remove(ue[se])}n.remove(A)}let $=0;function ie(){$=0}function re(){return $}function me(A){$=A}function ze(){let A=$;return A>=s.maxTextures&&Je("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),$+=1,A}function Q(A){let M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.mipmapsAutoUpdate),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function Te(A,M){let k=n.get(A);if(A.isVideoTexture&&Le(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&k.__version!==A.version){let ue=A.image;if(ue===null)Je("WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)Je("WebGLRenderer: Texture marked for update but image is incomplete");else{xe(k,A,M);return}}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+M)}function Ie(A,M){let k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){xe(k,A,M);return}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+M)}function we(A,M){let k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){xe(k,A,M);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+M)}function ve(A,M){let k=n.get(A);if(A.version>0&&k.__version!==A.version){V(k,A,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+M)}let Ge={[on]:i.REPEAT,[an]:i.CLAMP_TO_EDGE,[no]:i.MIRRORED_REPEAT},ut={[en]:i.NEAREST,[Lu]:i.NEAREST_MIPMAP_NEAREST,[sa]:i.NEAREST_MIPMAP_LINEAR,[tn]:i.LINEAR,[Uo]:i.LINEAR_MIPMAP_NEAREST,[_i]:i.LINEAR_MIPMAP_LINEAR},Ve={[Fu]:i.NEVER,[Oc]:i.ALWAYS,[Ou]:i.LESS,[Uc]:i.LEQUAL,[Bu]:i.EQUAL,[Fc]:i.GEQUAL,[Hu]:i.GREATER,[zu]:i.NOTEQUAL};function $e(A,M){if(M.type===Pn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===tn||M.magFilter===Uo||M.magFilter===sa||M.magFilter===_i||M.minFilter===tn||M.minFilter===Uo||M.minFilter===sa||M.minFilter===_i)&&Je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Ge[M.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Ge[M.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Ge[M.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ut[M.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ut[M.minFilter]),M.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Ve[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===en||M.minFilter!==sa&&M.minFilter!==_i||M.type===Pn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Qe(A,M){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",O),L(M));let ue=M.source,se=f.get(ue);se===void 0&&(se={},f.set(ue,se));let ge=Q(M);if(ge!==A.__cacheKey){se[ge]===void 0&&(se[ge]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),se[ge].usedTimes++;let be=se[A.__cacheKey];be!==void 0&&(se[A.__cacheKey].usedTimes--,be.usedTimes===0&&Y(M)),A.__cacheKey=ge,A.__webglTexture=se[ge].texture}return k}function ne(A,M,k){return Math.floor(Math.floor(A/k)/M)}function _e(A,M,k,ue){let ge=A.updateRanges;if(ge.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,k,ue,M.data);else{ge.sort((I,q)=>I.start-q.start);let be=0;for(let I=1;I<ge.length;I++){let q=ge[be],Z=ge[I],oe=q.start+q.count,de=ne(Z.start,M.width,4),ye=ne(q.start,M.width,4);Z.start<=oe+1&&de===ye&&ne(Z.start+Z.count-1,M.width,4)===de?q.count=Math.max(q.count,Z.start+Z.count-q.start):(++be,ge[be]=Z)}ge.length=be+1;let ee=t.getParameter(i.UNPACK_ROW_LENGTH),j=t.getParameter(i.UNPACK_SKIP_PIXELS),Se=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let I=0,q=ge.length;I<q;I++){let Z=ge[I],oe=Math.floor(Z.start/4),de=Math.ceil(Z.count/4),ye=oe%M.width,Fe=Math.floor(oe/M.width),it=de,he=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ye),t.pixelStorei(i.UNPACK_SKIP_ROWS,Fe),t.texSubImage2D(i.TEXTURE_2D,0,ye,Fe,it,he,k,ue,M.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ee),t.pixelStorei(i.UNPACK_SKIP_PIXELS,j),t.pixelStorei(i.UNPACK_SKIP_ROWS,Se)}}function xe(A,M,k){let ue=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ue=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ue=i.TEXTURE_3D);let se=Qe(A,M),ge=M.source;t.bindTexture(ue,A.__webglTexture,i.TEXTURE0+k);let be=n.get(ge);if(ge.version!==be.__version||se===!0){if(t.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let he=gt.getPrimaries(gt.workingColorSpace),Xe=M.colorSpace===In?null:gt.getPrimaries(M.colorSpace),je=M.colorSpace===In||he===Xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,je)}t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let j=y(M.image,!1,s.maxTextureSize);j=fe(M,j);let Se=r.convert(M.format,M.colorSpace),I=r.convert(M.type),q=w(M.internalFormat,Se,I,M.normalized,M.colorSpace,M.isVideoTexture);$e(ue,M);let Z,oe=M.mipmaps,de=M.isVideoTexture!==!0,ye=be.__version===void 0||se===!0,Fe=ge.dataReady,it=E(M,j);if(M.isDepthTexture)q=_(M.format===Mi,M.type),ye&&(de?t.texStorage2D(i.TEXTURE_2D,1,q,j.width,j.height):t.texImage2D(i.TEXTURE_2D,0,q,j.width,j.height,0,Se,I,null));else if(M.isDataTexture)if(oe.length>0){de&&ye&&t.texStorage2D(i.TEXTURE_2D,it,q,oe[0].width,oe[0].height);for(let he=0,Xe=oe.length;he<Xe;he++)Z=oe[he],de?Fe&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,Z.width,Z.height,Se,I,Z.data):t.texImage2D(i.TEXTURE_2D,he,q,Z.width,Z.height,0,Se,I,Z.data);M.generateMipmaps=!1}else de?(ye&&t.texStorage2D(i.TEXTURE_2D,it,q,j.width,j.height),Fe&&_e(M,j,Se,I)):t.texImage2D(i.TEXTURE_2D,0,q,j.width,j.height,0,Se,I,j.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){de&&ye&&t.texStorage3D(i.TEXTURE_2D_ARRAY,it,q,oe[0].width,oe[0].height,j.depth);for(let he=0,Xe=oe.length;he<Xe;he++)if(Z=oe[he],M.format!==bn)if(Se!==null)if(de){if(Fe)if(M.layerUpdates.size>0){let je=Yc(Z.width,Z.height,M.format,M.type);for(let Ce of M.layerUpdates){let xt=Z.data.subarray(Ce*je/Z.data.BYTES_PER_ELEMENT,(Ce+1)*je/Z.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,Ce,Z.width,Z.height,1,Se,xt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,Z.width,Z.height,j.depth,Se,Z.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,he,q,Z.width,Z.height,j.depth,0,Z.data,0,0);else Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else de?Fe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,Z.width,Z.height,j.depth,Se,I,Z.data):t.texImage3D(i.TEXTURE_2D_ARRAY,he,q,Z.width,Z.height,j.depth,0,Se,I,Z.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{de&&ye&&t.texStorage2D(i.TEXTURE_2D,it,q,oe[0].width,oe[0].height);for(let he=0,Xe=oe.length;he<Xe;he++)Z=oe[he],M.format!==bn?Se!==null?de?Fe&&t.compressedTexSubImage2D(i.TEXTURE_2D,he,0,0,Z.width,Z.height,Se,Z.data):t.compressedTexImage2D(i.TEXTURE_2D,he,q,Z.width,Z.height,0,Z.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):de?Fe&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,Z.width,Z.height,Se,I,Z.data):t.texImage2D(i.TEXTURE_2D,he,q,Z.width,Z.height,0,Se,I,Z.data)}else if(M.isDataArrayTexture)if(de){if(ye&&t.texStorage3D(i.TEXTURE_2D_ARRAY,it,q,j.width,j.height,j.depth),Fe)if(M.layerUpdates.size>0){let he=Yc(j.width,j.height,M.format,M.type);for(let Xe of M.layerUpdates){let je=j.data.subarray(Xe*he/j.data.BYTES_PER_ELEMENT,(Xe+1)*he/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Xe,j.width,j.height,1,Se,I,je)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,Se,I,j.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,q,j.width,j.height,j.depth,0,Se,I,j.data);else if(M.isData3DTexture)de?(ye&&t.texStorage3D(i.TEXTURE_3D,it,q,j.width,j.height,j.depth),Fe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,Se,I,j.data)):t.texImage3D(i.TEXTURE_3D,0,q,j.width,j.height,j.depth,0,Se,I,j.data);else if(M.isFramebufferTexture){if(ye)if(de)t.texStorage2D(i.TEXTURE_2D,it,q,j.width,j.height);else{let he=j.width,Xe=j.height;for(let je=0;je<it;je++)t.texImage2D(i.TEXTURE_2D,je,q,he,Xe,0,Se,I,null),he>>=1,Xe>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){let he=i.canvas;if(he.hasAttribute("layoutsubtree")||he.setAttribute("layoutsubtree","true"),j.parentNode!==he){he.appendChild(j),u.add(M),he.onpaint=Xe=>{let je=Xe.changedElements;for(let Ce of u)je.includes(Ce.image)&&(Ce.needsUpdate=!0)},he.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,j);else{let je=i.RGBA,Ce=i.RGBA,xt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,je,Ce,xt,j)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(oe.length>0){if(de&&ye){let he=Ue(oe[0]);t.texStorage2D(i.TEXTURE_2D,it,q,he.width,he.height)}for(let he=0,Xe=oe.length;he<Xe;he++)Z=oe[he],de?Fe&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,Se,I,Z):t.texImage2D(i.TEXTURE_2D,he,q,Se,I,Z);M.generateMipmaps=!1}else if(de){if(ye){let he=Ue(j);t.texStorage2D(i.TEXTURE_2D,it,q,he.width,he.height)}Fe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Se,I,j)}else t.texImage2D(i.TEXTURE_2D,0,q,Se,I,j);T(M)&&M.mipmapsAutoUpdate===!0&&v(ue),be.__version=ge.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function V(A,M,k){if(M.image.length!==6)return;let ue=Qe(A,M),se=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+k);let ge=n.get(se);if(se.version!==ge.__version||ue===!0){t.activeTexture(i.TEXTURE0+k);let be=gt.getPrimaries(gt.workingColorSpace),ee=M.colorSpace===In?null:gt.getPrimaries(M.colorSpace),j=M.colorSpace===In||be===ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let Se=M.isCompressedTexture||M.image[0].isCompressedTexture,I=M.image[0]&&M.image[0].isDataTexture,q=[];for(let Ce=0;Ce<6;Ce++)!Se&&!I?q[Ce]=y(M.image[Ce],!0,s.maxCubemapSize):q[Ce]=I?M.image[Ce].image:M.image[Ce],q[Ce]=fe(M,q[Ce]);let Z=q[0],oe=r.convert(M.format,M.colorSpace),de=r.convert(M.type),ye=w(M.internalFormat,oe,de,M.normalized,M.colorSpace),Fe=M.isVideoTexture!==!0,it=ge.__version===void 0||ue===!0,he=se.dataReady,Xe=E(M,Z);$e(i.TEXTURE_CUBE_MAP,M);let je;if(M.isDepthTexture){if(ye=_(M.format===Mi,M.type),it)if(Fe)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,ye,Z.width,Z.height);else for(let Ce=0;Ce<6;Ce++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,ye,Z.width,Z.height,0,oe,de,null)}else if(Se){Fe&&it&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Xe,ye,Z.width,Z.height);for(let Ce=0;Ce<6;Ce++){je=q[Ce].mipmaps;for(let xt=0;xt<je.length;xt++){let ct=je[xt];M.format!==bn?oe!==null?Fe?he&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,xt,0,0,ct.width,ct.height,oe,ct.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,xt,ye,ct.width,ct.height,0,ct.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,xt,0,0,ct.width,ct.height,oe,de,ct.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,xt,ye,ct.width,ct.height,0,oe,de,ct.data)}}}else{if(je=M.mipmaps,Fe&&it){je.length>0&&Xe++;let Ce=Ue(q[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Xe,ye,Ce.width,Ce.height)}for(let Ce=0;Ce<6;Ce++)if(I){Fe?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,0,0,q[Ce].width,q[Ce].height,oe,de,q[Ce].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,ye,q[Ce].width,q[Ce].height,0,oe,de,q[Ce].data);for(let xt=0;xt<je.length;xt++){let sn=je[xt].image[Ce].image;Fe?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,xt+1,0,0,sn.width,sn.height,oe,de,sn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,xt+1,ye,sn.width,sn.height,0,oe,de,sn.data)}}else{Fe?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,0,0,oe,de,q[Ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,ye,oe,de,q[Ce]);for(let xt=0;xt<je.length;xt++){let ct=je[xt];Fe?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,xt+1,0,0,oe,de,ct.image[Ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,xt+1,ye,oe,de,ct.image[Ce])}}}T(M)&&M.mipmapsAutoUpdate===!0&&v(i.TEXTURE_CUBE_MAP),ge.__version=se.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Ee(A,M,k,ue,se,ge){let be=r.convert(k.format,k.colorSpace),ee=r.convert(k.type),j=w(k.internalFormat,be,ee,k.normalized,k.colorSpace),Se=n.get(M),I=n.get(k);if(I.__renderTarget=M,!Se.__hasExternalTextures){let q=Math.max(1,M.width>>ge),Z=Math.max(1,M.height>>ge);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,ge,j,q,Z,M.depth,0,be,ee,null):t.texImage2D(se,ge,j,q,Z,0,be,ee,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),te(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ue,se,I.__webglTexture,0,W(M)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ue,se,I.__webglTexture,ge),t.bindFramebuffer(i.FRAMEBUFFER,null)}function qe(A,M,k){if(i.bindRenderbuffer(i.RENDERBUFFER,A),M.depthBuffer){let ue=M.depthTexture,se=ue&&ue.isDepthTexture?ue.type:null,ge=_(M.stencilBuffer,se),be=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;te(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,W(M),ge,M.width,M.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,W(M),ge,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ge,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,be,i.RENDERBUFFER,A)}else{let ue=M.textures;for(let se=0;se<ue.length;se++){let ge=ue[se],be=r.convert(ge.format,ge.colorSpace),ee=r.convert(ge.type),j=w(ge.internalFormat,be,ee,ge.normalized,ge.colorSpace);te(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,W(M),j,M.width,M.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,W(M),j,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,j,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ae(A,M,k){let ue=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let se=n.get(M.depthTexture);se.__renderTarget=M;let ge=ue?M.depthTexture.image[0]:M.depthTexture.image;(!se.__webglTexture||ge.width!==M.width||ge.height!==M.height)&&(ge.width=M.width,ge.height=M.height,M.depthTexture.needsUpdate=!0),ue?ve(M.depthTexture,0):Te(M.depthTexture,0);let be=se.__webglTexture,ee=W(M),j=ue?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,Se=M.depthTexture.format===Mi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===pi)te(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Se,j,be,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,Se,j,be,0);else if(M.depthTexture.format===Mi)te(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Se,j,be,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,Se,j,be,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function st(A){let M=n.get(A),k=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){let ue=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ue){let se=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ue.removeEventListener("dispose",se)};ue.addEventListener("dispose",se),M.__depthDisposeCallback=se}M.__boundDepthTexture=ue}if(A.depthTexture&&!M.__autoAllocateDepthBuffer)if(k)for(let ue=0;ue<6;ue++)ae(M.__webglFramebuffer[ue],A,ue);else A.texture.mipmaps.length>0?ae(M.__webglFramebuffer[0],A,0):ae(M.__webglFramebuffer,A,0);else if(k){M.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[ue]),M.__webglDepthbuffer[ue]===void 0)M.__webglDepthbuffer[ue]=i.createRenderbuffer(),qe(M.__webglDepthbuffer[ue],A,!1);else{let se=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=M.__webglDepthbuffer[ue];i.bindRenderbuffer(i.RENDERBUFFER,ge),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,ge)}}else if(A.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),qe(M.__webglDepthbuffer,A,!1);else{let se=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ge),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,ge)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(A,M,k){let ue=n.get(A);M!==void 0&&Ee(ue.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&st(A)}function tt(A){let M=A.texture,k=n.get(A),ue=n.get(M);A.addEventListener("dispose",G),L(A);let se=A.textures,ge=A.isWebGLCubeRenderTarget===!0,be=se.length>1;if(be||(ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture()),ue.__version=M.version,a.memory.textures++),ge){k.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(M.mipmaps.length>0){k.__webglFramebuffer[ee]=[];for(let j=0;j<M.mipmaps.length;j++)k.__webglFramebuffer[ee][j]=i.createFramebuffer()}else k.__webglFramebuffer[ee]=i.createFramebuffer()}else{if(M.mipmaps.length>0){k.__webglFramebuffer=[];for(let ee=0;ee<M.mipmaps.length;ee++)k.__webglFramebuffer[ee]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(be)for(let ee=0,j=se.length;ee<j;ee++){let Se=n.get(se[ee]);Se.__webglTexture===void 0&&(Se.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&te(A)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ee=0;ee<se.length;ee++){let j=se[ee];k.__webglColorRenderbuffer[ee]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[ee]);let Se=r.convert(j.format,j.colorSpace),I=r.convert(j.type),q=w(j.internalFormat,Se,I,j.normalized,j.colorSpace,A.isXRRenderTarget===!0),Z=W(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Z,q,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ee,i.RENDERBUFFER,k.__webglColorRenderbuffer[ee])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),qe(k.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ge){t.bindTexture(i.TEXTURE_CUBE_MAP,ue.__webglTexture),$e(i.TEXTURE_CUBE_MAP,M);for(let ee=0;ee<6;ee++)if(M.mipmaps.length>0)for(let j=0;j<M.mipmaps.length;j++)Ee(k.__webglFramebuffer[ee][j],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,j);else Ee(k.__webglFramebuffer[ee],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);T(M)?v(i.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}else if(be){for(let ee=0,j=se.length;ee<j;ee++){let Se=se[ee],I=n.get(Se),q=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(q=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(q,I.__webglTexture),$e(q,Se),Ee(k.__webglFramebuffer,A,Se,i.COLOR_ATTACHMENT0+ee,q,0),T(Se)&&v(q)}t.unbindTexture()}else{let ee=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ee=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ee,ue.__webglTexture),$e(ee,M),M.mipmaps.length>0)for(let j=0;j<M.mipmaps.length;j++)Ee(k.__webglFramebuffer[j],A,M,i.COLOR_ATTACHMENT0,ee,j);else Ee(k.__webglFramebuffer,A,M,i.COLOR_ATTACHMENT0,ee,0);T(M)?v(ee):M.mipmaps.length>0&&i.texParameteri(ee,i.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}A.depthBuffer&&st(A)}function F(A){let M=A.textures;for(let k=0,ue=M.length;k<ue;k++){let se=M[k];if(T(se)&&se.mipmapsAutoUpdate===!0){let ge=R(A),be=n.get(se).__webglTexture;t.bindTexture(ge,be),v(ge),t.unbindTexture()}}}let yt=[];function nt(A){if(A.samples>0){if(te(A)===!1){let M=A.textures,k=A.width,ue=A.height,se=i.COLOR_BUFFER_BIT,ge=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=n.get(A),ee=M.length>1;if(ee)for(let Se=0;Se<M.length;Se++)t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Se=0;Se<M.length;Se++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),ee){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,be.__webglColorRenderbuffer[Se]);let I=n.get(M[Se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,I,0)}i.blitFramebuffer(0,0,k,ue,0,0,k,ue,se,i.NEAREST),l===!0&&(yt.length=0,yt.push(i.COLOR_ATTACHMENT0+Se),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&yt.push(ge),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,yt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ee)for(let Se=0;Se<M.length;Se++){t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,be.__webglColorRenderbuffer[Se]);let I=n.get(M[Se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,I,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let M=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function W(A){return Math.min(s.maxSamples,A.samples)}function te(A){let M=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Le(A){let M=a.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function fe(A,M){let k=A.colorSpace,ue=A.format,se=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==_r&&k!==In&&(gt.getTransfer(k)===Tt?(ue!==bn||se!==_n)&&Je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ot("WebGLTextures: Unsupported texture color space:",k)),M}function Ue(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=ze,this.resetTextureUnits=ie,this.getTextureUnits=re,this.setTextureUnits=me,this.setTexture2D=Te,this.setTexture2DArray=Ie,this.setTexture3D=we,this.setTextureCube=ve,this.rebindTextures=rt,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=te,this.dispose=H}function Vx(i,e){function t(n,s=In){let r,a=gt.getTransfer(s);if(n===_n)return i.UNSIGNED_BYTE;if(n===Oo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Bo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ic)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Lc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Cc)return i.BYTE;if(n===Pc)return i.SHORT;if(n===Ks)return i.UNSIGNED_SHORT;if(n===Fo)return i.INT;if(n===Gn)return i.UNSIGNED_INT;if(n===Pn)return i.FLOAT;if(n===ln)return i.HALF_FLOAT;if(n===Dc)return i.ALPHA;if(n===Nc)return i.RGB;if(n===bn)return i.RGBA;if(n===pi)return i.DEPTH_COMPONENT;if(n===Mi)return i.DEPTH_STENCIL;if(n===Ho)return i.RED;if(n===zo)return i.RED_INTEGER;if(n===Ni)return i.RG;if(n===Go)return i.RG_INTEGER;if(n===ko)return i.RGBA_INTEGER;if(n===ra||n===aa||n===oa||n===la)if(a===Tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ra)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ra)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===aa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===oa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===la)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Vo||n===Wo||n===Xo||n===qo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Vo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===qo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Yo||n===Ko||n===Zo||n===$o||n===Jo||n===ca||n===Qo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Yo||n===Ko)return a===Tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Zo)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===$o)return r.COMPRESSED_R11_EAC;if(n===Jo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ca)return r.COMPRESSED_RG11_EAC;if(n===Qo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===jo||n===el||n===tl||n===nl||n===il||n===sl||n===rl||n===al||n===ol||n===ll||n===cl||n===hl||n===ul||n===dl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===jo)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===el)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===tl)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===nl)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===il)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===sl)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===rl)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===al)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ol)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ll)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===cl)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===hl)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ul)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===dl)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fl||n===pl||n===ml)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===fl)return a===Tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===pl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ml)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===gl||n===xl||n===ha||n===_l)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===gl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===xl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ha)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_l)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===rs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Wx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,oh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ir(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new qt({vertexShader:Wx,fragmentShader:Xx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new B(new nn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},lh=class extends Kn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,x=null,S=typeof XRWebGLBinding<"u",m=new oh,p={},y=t.getContextAttributes(),T=null,v=null,R=[],w=[],_=new le,E=null,L=null,P=new jt;P.viewport=new Bt;let O=new jt;O.viewport=new Bt;let G=[P,O],K=new Co,D=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let Te=R[Q];return Te===void 0&&(Te=new Ns,R[Q]=Te),Te.getTargetRaySpace()},this.getControllerGrip=function(Q){let Te=R[Q];return Te===void 0&&(Te=new Ns,R[Q]=Te),Te.getGripSpace()},this.getHand=function(Q){let Te=R[Q];return Te===void 0&&(Te=new Ns,R[Q]=Te),Te.getHandSpace()};function X(Q){let Te=w.indexOf(Q.inputSource);if(Te===-1)return;let Ie=R[Te];Ie!==void 0&&(Ie.update(Q.inputSource,Q.frame,c||a),Ie.dispatchEvent({type:Q.type,data:Q.inputSource}))}function Y(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",ce);for(let Q=0;Q<R.length;Q++){let Te=w[Q];Te!==null&&(w[Q]=null,R[Q].disconnect(Te))}D=null,H=null,m.reset();for(let Q in p)delete p[Q];if(e.setRenderTarget(T),f=null,d=null,u=null,s=null,v=null,ze.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(_.width,_.height,!1),L!==null){let Q=L.camera;Q.fov=L.fov,Q.zoom=L.zoom,Q.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&Je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&Je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&S&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",ce),y.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(_),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ie=null,we=null,ve=null;y.depth&&(ve=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ie=y.stencil?Mi:pi,we=y.stencil?rs:Gn);let Ge={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Ge),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Vt(d.textureWidth,d.textureHeight,{format:bn,type:_n,depthTexture:new gi(d.textureWidth,d.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,Ie),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Ie={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Ie),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Vt(f.framebufferWidth,f.framebufferHeight,{format:bn,type:_n,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ze.setContext(s),ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ce(Q){for(let Te=0;Te<Q.removed.length;Te++){let Ie=Q.removed[Te],we=w.indexOf(Ie);we>=0&&(w[we]=null,R[we].disconnect(Ie))}for(let Te=0;Te<Q.added.length;Te++){let Ie=Q.added[Te],we=w.indexOf(Ie);if(we===-1){for(let Ge=0;Ge<R.length;Ge++)if(Ge>=w.length){w.push(Ie),we=Ge;break}else if(w[Ge]===null){w[Ge]=Ie,we=Ge;break}if(we===-1)break}let ve=R[we];ve&&ve.connect(Ie)}}function $(Q,Te){Te===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(Te.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let Te=Q.near,Ie=Q.far;m.texture!==null&&(m.depthNear>0&&(Te=m.depthNear),m.depthFar>0&&(Ie=m.depthFar)),K.near=O.near=P.near=Te,K.far=O.far=P.far=Ie,(D!==K.near||H!==K.far)&&(s.updateRenderState({depthNear:K.near,depthFar:K.far}),D=K.near,H=K.far),K.layers.mask=Q.layers.mask|6,P.layers.mask=K.layers.mask&-5,O.layers.mask=K.layers.mask&-3;let we=Q.parent,ve=K.cameras;$(K,we);for(let Ge=0;Ge<ve.length;Ge++)$(ve[Ge],we);K.projectionMatrix.copy(P.projectionMatrix),K.projectionMatrixInverse.copy(P.projectionMatrixInverse),L===null&&Q.isPerspectiveCamera&&(L={camera:Q,fov:Q.fov,zoom:Q.zoom}),ie(Q,K,we)};function ie(Q,Te,Ie){Ie===null?Q.matrix.copy(Te.matrixWorld):(Q.matrix.copy(Ie.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(Te.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(Te.projectionMatrix),Q.projectionMatrixInverse.copy(Te.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Xi*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(K)},this.getCameraTexture=function(Q){return p[Q]};let re=null;function me(Q,Te){if(h=Te.getViewerPose(c||a),x=Te,h!==null){let Ie=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let we=!1;Ie.length!==K.cameras.length&&(K.cameras.length=0,we=!0);for(let Ve=0;Ve<Ie.length;Ve++){let $e=Ie[Ve],Qe=null;if(f!==null)Qe=f.getViewport($e);else{let _e=u.getViewSubImage(d,$e);Qe=_e.viewport,Ve===0&&(e.setRenderTargetTextures(v,_e.colorTexture,_e.depthStencilTexture),e.setRenderTarget(v))}let ne=G[Ve];ne===void 0&&(ne=new jt,ne.layers.enable(Ve),ne.viewport=new Bt,G[Ve]=ne),ne.matrix.fromArray($e.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray($e.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),Ve===0&&(K.matrix.copy(ne.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),we===!0&&K.cameras.push(ne)}let ve=s.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){u=n.getBinding();let Ve=u.getDepthInformation(Ie[0]);Ve&&Ve.isValid&&Ve.texture&&m.init(Ve,s.renderState)}if(ve&&ve.includes("camera-access")&&S){e.state.unbindTexture(),u=n.getBinding();for(let Ve=0;Ve<Ie.length;Ve++){let $e=Ie[Ve].camera;if($e){let Qe=p[$e];Qe||(Qe=new Ir,p[$e]=Qe);let ne=u.getCameraImage($e);Qe.sourceTexture=ne}}}}for(let Ie=0;Ie<R.length;Ie++){let we=w[Ie],ve=R[Ie];we!==null&&ve!==void 0&&ve.update(we,Te,c||a)}re&&re(Q,Te),Te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Te}),x=null}let ze=new Sd;ze.setAnimationLoop(me),this.setAnimationLoop=function(Q){re=Q},this.dispose=function(){}}},qx=new Lt,Ld=new lt;Ld.set(-1,0,0,0,1,0,0,0,1);function Yx(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Wc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,T,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),x(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),S(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Kt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Kt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=e.get(p),T=y.envMap,v=y.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(qx.makeRotationFromEuler(v)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Ld),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=T*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Kt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,p){p.matcap&&(m.matcap.value=p.matcap)}function S(m,p){let y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Kx(i,e,t,n){let s={},r={};function a(y,T){let v=T.program;n.uniformBlockBinding(y,v,s[y.id])}function o(y,T){let v=s[y.id];v===void 0&&(x(y),v=l(y),s[y.id]=v,y.addEventListener("dispose",m));let R=T.program;n.updateUBOMapping(y,R);let w=e.render.frame;r[y.id]!==w&&(c(y),r[y.id]=w)}function l(y){let T=i.createBuffer(),v=y.__size,R=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,v,R),i.bindBuffer(i.UNIFORM_BUFFER,null),T}function c(y){let T=s[y.id],v=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let w=0,_=v.length;w<_;w++){let E=v[w];if(Array.isArray(E))for(let L=0,P=E.length;L<P;L++)h(E[L],w,L,R);else h(E,w,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(y,T,v,R){if(d(y,T,v,R)===!0){let w=y.__offset,_=y.value;if(Array.isArray(_)){let E=0;for(let L=0;L<_.length;L++){let P=_[L],O=S(P,!0);u(P,y.__data,E),E+=O.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,w,y.__data)}}function u(y,T,v){typeof y=="number"||typeof y=="boolean"?T[v]=y:y.isMatrix3?(T[v]=y.elements[0],T[v+1]=y.elements[1],T[v+2]=y.elements[2],T[v+3]=0,T[v+4]=y.elements[3],T[v+5]=y.elements[4],T[v+6]=y.elements[5],T[v+7]=0,T[v+8]=y.elements[6],T[v+9]=y.elements[7],T[v+10]=y.elements[8],T[v+11]=0):ArrayBuffer.isView(y)?T.set(y.subarray(0,T.length-v),v):y.toArray(T,v)}function d(y,T,v,R){let w=y.value,_=T+"_"+v;if(Array.isArray(w)){R[_]===void 0&&(R[_]=[]);let E=R[_],L=!1;for(let P=0;P<w.length;P++)f(w[P],E,P)===!0&&(L=!0);return L}return f(w,R,_)}function f(y,T,v){if(T[v]===void 0)return typeof y=="number"||typeof y=="boolean"?T[v]=y:ArrayBuffer.isView(y)?T[v]=y.slice():T[v]=y.clone(),!0;{let R=T[v];if(typeof y=="number"||typeof y=="boolean"){if(R!==y)return T[v]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(R.equals(y)===!1)return R.copy(y),!0}}return!1}function x(y){let T=y.uniforms,v=0,R=16;for(let _=0,E=T.length;_<E;_++){let L=Array.isArray(T[_])?T[_]:[T[_]];for(let P=0,O=L.length;P<O;P++){let G=L[P],K=Array.isArray(G.value)?G.value:[G.value],D=Array.isArray(T[_])||Array.isArray(G.value),H=v;for(let Y=0,ce=K.length;Y<ce;Y++){let $=K[Y],ie=S($,D),re=v%R,me=re%ie.boundary,ze=re+me;v+=me,ze!==0&&R-ze<ie.storage&&(v+=R-ze),Y===0&&(H=v),v+=ie.storage}let X=G.type==="int"?Int32Array:G.type==="uint"?Uint32Array:Float32Array;G.__data=new X((v-H)/Float32Array.BYTES_PER_ELEMENT),G.__offset=H}}let w=v%R;return w>0&&(v+=R-w),y.__size=v,y.__cache={},this}function S(y,T){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=16,v.storage=48):y.isMatrix4?(v.boundary=16,v.storage=64):y.isTexture?Je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(v.boundary=16,v.storage=y.byteLength):Je("WebGLRenderer: Unsupported uniform value type.",y),T===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function m(y){let T=y.target;T.removeEventListener("dispose",m),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function p(){for(let y in s)i.deleteBuffer(s[y]);s={},r={}}return{bind:a,update:o,dispose:p}}var Zx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ei=null;function $x(){return ei===null&&(ei=new Ar(Zx,16,16,Ni,ln),ei.name="DFG_LUT",ei.minFilter=tn,ei.magFilter=tn,ei.wrapS=an,ei.wrapT=an,ei.generateMipmaps=!1,ei.needsUpdate=!0),ei}var yl=class{constructor(e={}){let{canvas:t=ku(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=_n}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;let S=f,m=new Set([ko,Go,zo]),p=new Set([_n,Gn,Ks,rs,Oo,Bo]),y=new Uint32Array(4),T=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},R=null,w=null,_=[],E=[],L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,O=!1,G=null,K=null,D=null,H=null;this._outputColorSpace=Ct;let X=0,Y=0,ce=null,$=-1,ie=null,re=new Bt,me=new Bt,ze=null,Q=new Ye(0),Te=0,Ie=t.width,we=t.height,ve=1,Ge=null,ut=null,Ve=new Bt(0,0,Ie,we),$e=new Bt(0,0,Ie,we),Qe=!1,ne=new Ci,_e=new oo,xe=!1,V=!1,Ee=new Lt,qe=new N,ae=new Bt,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},rt=!1;function tt(){return ce===null?ve:1}let F=n;function yt(g,b){return t.getContext(g,b)}let nt,W,te,Le,fe,Ue,A,M,k,ue,se,ge,be,ee,j,Se,I,q,Z,oe,de,ye,Fe;try{let g={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Xe,!1),t.addEventListener("webglcontextrestored",je,!1),t.addEventListener("webglcontextcreationerror",Ce,!1),F===null){let b="webgl2";if(F=yt(b,g),F===null)throw yt(b)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}it()}catch(g){throw t.removeEventListener("webglcontextlost",Xe,!1),t.removeEventListener("webglcontextrestored",je,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),ot("WebGLRenderer: "+g.message),g}function it(){nt=new og(F),nt.init(),de=new Vx(F,nt),W=new $0(F,nt,e,de),te=new Gx(F,nt),W.reversedDepthBuffer&&d&&te.buffers.depth.setReversed(!0),K=F.createFramebuffer(),D=F.createFramebuffer(),H=F.createFramebuffer(),Le=new hg(F),fe=new Ax,Ue=new kx(F,nt,te,fe,W,de,Le),A=new ag(P),M=new dp(F),ye=new K0(F,M),k=new lg(F,M,Le,ye),ue=new dg(F,k,M,ye,Le),q=new ug(F,W,Ue),j=new J0(fe),se=new wx(P,A,nt,W,ye,j),ge=new Yx(P,fe),be=new Cx,ee=new Ux(nt),I=new Y0(P,A,te,ue,x,l),Se=new zx(P,ue,W),Fe=new Kx(F,Le,W,te),Z=new Z0(F,nt,Le),oe=new cg(F,nt,Le),Le.programs=se.programs,P.capabilities=W,P.extensions=nt,P.properties=fe,P.renderLists=be,P.shadowMap=Se,P.state=te,P.info=Le}S!==_n&&(L=new pg(S,t.width,t.height,o,s,r));let he=new lh(P,F);this.xr=he,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let g=nt.get("WEBGL_lose_context");g&&g.loseContext()},this.forceContextRestore=function(){let g=nt.get("WEBGL_lose_context");g&&g.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(g){g!==void 0&&(ve=g,this.setSize(Ie,we,!1))},this.getSize=function(g){return g.set(Ie,we)},this.setSize=function(g,b,C=!0){if(he.isPresenting){Je("WebGLRenderer: Can't change size while VR device is presenting.");return}Ie=g,we=b,t.width=Math.floor(g*ve),t.height=Math.floor(b*ve),C===!0&&(t.style.width=g+"px",t.style.height=b+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,g,b)},this.getDrawingBufferSize=function(g){return g.set(Ie*ve,we*ve).floor()},this.setDrawingBufferSize=function(g,b,C){Ie=g,we=b,ve=C,t.width=Math.floor(g*C),t.height=Math.floor(b*C),this.setViewport(0,0,g,b)},this.setEffects=function(g){if(S===_n){ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(g){for(let b=0;b<g.length;b++)if(g[b].isOutputPass===!0){Je("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(g||[])},this.getCurrentViewport=function(g){return g.copy(re)},this.getViewport=function(g){return g.copy(Ve)},this.setViewport=function(g,b,C,U){g.isVector4?Ve.set(g.x,g.y,g.z,g.w):Ve.set(g,b,C,U),te.viewport(re.copy(Ve).multiplyScalar(tt()).round())},this.getScissor=function(g){return g.copy($e)},this.setScissor=function(g,b,C,U){g.isVector4?$e.set(g.x,g.y,g.z,g.w):$e.set(g,b,C,U),te.scissor(me.copy($e).multiplyScalar(tt()).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(g){te.setScissorTest(Qe=g)},this.setOpaqueSort=function(g){Ge=g},this.setTransparentSort=function(g){ut=g},this.getClearColor=function(g){return g.copy(I.getClearColor())},this.setClearColor=function(){I.setClearColor(...arguments)},this.getClearAlpha=function(){return I.getClearAlpha()},this.setClearAlpha=function(){I.setClearAlpha(...arguments)},this.clear=function(g=!0,b=!0,C=!0){let U=0;if(g){let z=!1;if(ce!==null){let pe=ce.texture.format;z=m.has(pe)}if(z){let pe=ce.texture.type,Pe=p.has(pe),Me=I.getClearColor(),Re=I.getClearAlpha(),ke=Me.r,at=Me.g,dt=Me.b;Pe?(y[0]=ke,y[1]=at,y[2]=dt,y[3]=Re,F.clearBufferuiv(F.COLOR,0,y)):(T[0]=ke,T[1]=at,T[2]=dt,T[3]=Re,F.clearBufferiv(F.COLOR,0,T))}else U|=F.COLOR_BUFFER_BIT}b&&(U|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),C&&(U|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U!==0&&F.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(g){g.setRenderer(this),G=g},this.dispose=function(){t.removeEventListener("webglcontextlost",Xe,!1),t.removeEventListener("webglcontextrestored",je,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),I.dispose(),be.dispose(),ee.dispose(),Ue.dispose(),fe.dispose(),A.dispose(),ue.dispose(),k.dispose(),ye.dispose(),Fe.dispose(),se.dispose(),he.dispose(),he.removeEventListener("sessionstart",Xn),he.removeEventListener("sessionend",An),xn.stop()};function Xe(g){g.preventDefault(),Hc("WebGLRenderer: Context Lost."),O=!0}function je(){Hc("WebGLRenderer: Context Restored."),O=!1;let g=Le.autoReset,b=Se.enabled,C=Se.autoUpdate,U=Se.needsUpdate,z=Se.type;it(),Le.autoReset=g,Se.enabled=b,Se.autoUpdate=C,Se.needsUpdate=U,Se.type=z}function Ce(g){ot("WebGLRenderer: A WebGL context could not be created. Reason: ",g.statusMessage)}function xt(g){let b=g.target;b.removeEventListener("dispose",xt),ct(b)}function ct(g){sn(g),fe.remove(g)}function sn(g){let b=fe.get(g).programs;b!==void 0&&(b.forEach(function(C){se.releaseProgram(C)}),g.isShaderMaterial&&se.releaseShaderCache(g))}this.renderBufferDirect=function(g,b,C,U,z,pe){b===null&&(b=st);let Pe=z.isMesh&&z.matrixWorld.determinantAffine()<0,Me=J(g,b,C,U,z);te.setMaterial(U,Pe);let Re=C.index,ke=1;if(U.wireframe===!0){if(Re=k.getWireframeAttribute(C),Re===void 0)return;ke=2}let at=C.drawRange,dt=C.attributes.position,Oe=at.start*ke,pt=(at.start+at.count)*ke;pe!==null&&(Oe=Math.max(Oe,pe.start*ke),pt=Math.min(pt,(pe.start+pe.count)*ke)),Re!==null?(Oe=Math.max(Oe,0),pt=Math.min(pt,Re.count)):dt!=null&&(Oe=Math.max(Oe,0),pt=Math.min(pt,dt.count));let Ht=pt-Oe;if(Ht<0||Ht===1/0)return;ye.setup(z,U,Me,C,Re);let Pt,At=Z;if(Re!==null&&(Pt=M.get(Re),At=oe,At.setIndex(Pt)),z.isMesh)U.wireframe===!0?(te.setLineWidth(U.wireframeLinewidth*tt()),At.setMode(F.LINES)):At.setMode(F.TRIANGLES);else if(z.isLine){let Wt=U.linewidth;Wt===void 0&&(Wt=1),te.setLineWidth(Wt*tt()),z.isLineSegments?At.setMode(F.LINES):z.isLineLoop?At.setMode(F.LINE_LOOP):At.setMode(F.LINE_STRIP)}else z.isPoints?At.setMode(F.POINTS):z.isSprite&&At.setMode(F.TRIANGLES);if(z.isBatchedMesh)if(nt.get("WEBGL_multi_draw"))At.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Wt=z._multiDrawStarts,Be=z._multiDrawCounts,Yt=z._multiDrawCount,Mt=Re?M.get(Re).bytesPerElement:1,Mn=fe.get(U).currentProgram.getUniforms();for(let ht=0;ht<Yt;ht++)Mn.setValue(F,"_gl_DrawID",ht),At.render(Wt[ht]/Mt,Be[ht])}else if(z.isInstancedMesh)At.renderInstances(Oe,Ht,z.count);else if(C.isInstancedBufferGeometry){let Wt=C._maxInstanceCount!==void 0?C._maxInstanceCount:1/0,Be=Math.min(C.instanceCount,Wt);At.renderInstances(Oe,Ht,Be)}else At.render(Oe,Ht)};function dn(g,b,C,U){G!==null&&g.isNodeMaterial&&G.setObject(U,g),xe===!0&&j.setState(g,C,!1),g.transparent===!0&&g.side===gn&&g.forceSinglePass===!1?(g.side=Kt,g.needsUpdate=!0,Un(g,b,U),g.side=Di,g.needsUpdate=!0,Un(g,b,U),g.side=gn):Un(g,b,U)}this.compile=function(g,b,C=null){C===null&&(C=g),G!==null&&G.renderStart(g,b,C),w=ee.get(C),w.init(b),E.push(w),C.traverseVisible(function(z){z.isLight&&z.layers.test(b.layers)&&(w.pushLight(z),z.castShadow&&w.pushShadow(z))}),g!==C&&g.traverseVisible(function(z){z.isLight&&z.layers.test(b.layers)&&(w.pushLight(z),z.castShadow&&w.pushShadow(z))}),w.setupLights(),G!==null&&G.updateLights(w.state.lightsArray),V=this.localClippingEnabled,xe=j.init(this.clippingPlanes,V),xe===!0&&j.setGlobalState(this.clippingPlanes,b),G!==null&&Se.render(w.state.shadowsArray,C,b);let U=new Set;return g.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let pe=z.material;if(pe)if(Array.isArray(pe))for(let Pe=0;Pe<pe.length;Pe++){let Me=pe[Pe];dn(Me,C,b,z),U.add(Me)}else dn(pe,C,b,z),U.add(pe)}),w=E.pop(),G!==null&&G.renderEnd(),U},this.compileAsync=function(g,b,C=null){let U=this.compile(g,b,C);return new Promise(z=>{function pe(){if(U.forEach(function(Pe){let Re=fe.get(Pe).currentProgram;(Re===void 0||Re.isReady())&&U.delete(Pe)}),U.size===0){z(g);return}setTimeout(pe,10)}nt.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let fn=null;function wn(g){fn&&fn(g)}function Xn(){xn.stop()}function An(){xn.start()}let xn=new Sd;xn.setAnimationLoop(wn),typeof self<"u"&&xn.setContext(self),this.setAnimationLoop=function(g){fn=g,he.setAnimationLoop(g),g===null?xn.stop():xn.start()},he.addEventListener("sessionstart",Xn),he.addEventListener("sessionend",An),this.render=function(g,b){if(b!==void 0&&b.isCamera!==!0){ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;G!==null&&G.renderStart(g,b);let C=he.enabled===!0&&he.isPresenting===!0,U=L!==null&&(ce===null||C)&&L.begin(P,ce);if(g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),b.parent===null&&b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(he.cameraAutoUpdate===!0&&he.updateCamera(b),b=he.getCamera()),g.isScene===!0&&g.onBeforeRender(P,g,b,ce),w=ee.get(g,E.length),w.init(b),w.state.textureUnits=Ue.getTextureUnits(),E.push(w),Ee.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse),b.isArrayCamera?_e.setFromArrayCamera(b):ne.setFromProjectionMatrix(Ee,Cn,b.reversedDepth),V=this.localClippingEnabled,xe=j.init(this.clippingPlanes,V),R=be.get(g,_.length),R.init(),_.push(R),this.info.render.frame++,he.enabled===!0&&he.isPresenting===!0){let Pe=P.xr.getDepthSensingMesh();Pe!==null&&Dn(Pe,b,-1/0,P.sortObjects)}Dn(g,b,0,P.sortObjects),R.finish(),G!==null&&G.updateLights(w.state.lightsArray),P.sortObjects===!0&&R.sort(Ge,ut),rt=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,rt&&I.addToRenderList(R,g),this.info.autoReset===!0&&this.info.reset(),xe===!0&&j.beginShadows();let z=w.state.shadowsArray;if(Se.render(z,g,b),xe===!0&&j.endShadows(),(U&&L.hasRenderPass())===!1){let Pe=R.opaque,Me=R.transmissive;if(w.setupLights(),b.isArrayCamera){let Re=b.cameras;if(Me.length>0)for(let ke=0,at=Re.length;ke<at;ke++){let dt=Re[ke];bt(Pe,Me,g,dt)}rt&&I.render(g);for(let ke=0,at=Re.length;ke<at;ke++){let dt=Re[ke];ri(R,g,dt,dt.viewport)}}else Me.length>0&&bt(Pe,Me,g,b),rt&&I.render(g),ri(R,g,b)}ce!==null&&Y===0&&(Ue.updateMultisampleRenderTarget(ce),Ue.updateRenderTargetMipmap(ce)),U&&L.end(P),g.isScene===!0&&g.onAfterRender(P,g,b),ye.resetDefaultState(),$=-1,ie=null,E.pop(),E.length>0?(w=E[E.length-1],Ue.setTextureUnits(w.state.textureUnits),xe===!0&&j.setGlobalState(P.clippingPlanes,w.state.camera)):w=null,_.pop(),_.length>0?R=_[_.length-1]:R=null,G!==null&&G.renderEnd()};function Dn(g,b,C,U){if(g.visible===!1)return;if(g.layers.test(b.layers)){if(g.isGroup)C=g.renderOrder;else if(g.isLOD)g.autoUpdate===!0&&g.update(b);else if(g.isLight)w.pushLight(g),g.castShadow&&w.pushShadow(g);else if(g.isSprite){let Pe=b.isArrayCamera?_e:ne;if(!g.frustumCulled||g.intersectsFrustum(Pe)){U&&ae.setFromMatrixPosition(g.matrixWorld).applyMatrix4(Ee);let Me=ue.update(g),Re=g.material;Re.visible&&R.push(g,Me,Re,C,ae.z,null,b)}}else if(g.isMesh||g.isLine||g.isPoints){let Pe=b.isArrayCamera?_e:ne;if(!g.frustumCulled||g.intersectsFrustum(Pe)){let Me=ue.update(g),Re=g.material;if(U&&(g.boundingSphere!==void 0?(g.boundingSphere===null&&g.computeBoundingSphere(),ae.copy(g.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),ae.copy(Me.boundingSphere.center)),ae.applyMatrix4(g.matrixWorld).applyMatrix4(Ee)),Array.isArray(Re)){let ke=Me.groups;for(let at=0,dt=ke.length;at<dt;at++){let Oe=ke[at],pt=Re[Oe.materialIndex];pt&&pt.visible&&R.push(g,Me,pt,C,ae.z,Oe,b)}}else Re.visible&&R.push(g,Me,Re,C,ae.z,null,b)}}}let pe=g.children;for(let Pe=0,Me=pe.length;Pe<Me;Pe++)Dn(pe[Pe],b,C,U)}function ri(g,b,C,U){let{opaque:z,transmissive:pe,transparent:Pe}=g;w.setupLightsView(C),xe===!0&&j.setGlobalState(P.clippingPlanes,C),U&&te.viewport(re.copy(U)),z.length>0&&Nn(z,b,C),pe.length>0&&Nn(pe,b,C),Pe.length>0&&Nn(Pe,b,C),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function bt(g,b,C,U){if((C.isScene===!0?C.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[U.id]===void 0){let Oe=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[U.id]=new Vt(1,1,{generateMipmaps:!0,type:Oe?ln:_n,minFilter:_i,samples:Math.max(4,W.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:gt.workingColorSpace})}let pe=w.state.transmissionRenderTarget[U.id],Pe=U.viewport||re;pe.setSize(Pe.z*P.transmissionResolutionScale,Pe.w*P.transmissionResolutionScale);let Me=P.getRenderTarget(),Re=P.getActiveCubeFace(),ke=P.getActiveMipmapLevel();P.setRenderTarget(pe),P.getClearColor(Q),Te=P.getClearAlpha(),Te<1&&P.setClearColor(16777215,.5),P.clear(),rt&&I.render(C);let at=P.toneMapping;P.toneMapping=jn;let dt=U.viewport;if(U.viewport!==void 0&&(U.viewport=void 0),w.setupLightsView(U),xe===!0&&j.setGlobalState(P.clippingPlanes,U),Nn(g,C,U),Ue.updateMultisampleRenderTarget(pe),Ue.updateRenderTargetMipmap(pe),nt.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let pt=0,Ht=b.length;pt<Ht;pt++){let Pt=b[pt],{object:At,geometry:Wt,material:Be,group:Yt}=Pt;if(Be.side===gn&&At.layers.test(U.layers)){let Mt=Be.side;Be.side=Kt,Be.needsUpdate=!0,yi(At,C,U,Wt,Be,Yt),Be.side=Mt,Be.needsUpdate=!0,Oe=!0}}Oe===!0&&(Ue.updateMultisampleRenderTarget(pe),Ue.updateRenderTargetMipmap(pe))}P.setRenderTarget(Me,Re,ke),P.setClearColor(Q,Te),dt!==void 0&&(U.viewport=dt),P.toneMapping=at}function Nn(g,b,C){let U=b.isScene===!0?b.overrideMaterial:null;for(let z=0,pe=g.length;z<pe;z++){let Pe=g[z],{object:Me,geometry:Re,group:ke}=Pe,at=Pe.material;at.allowOverride===!0&&U!==null&&(at=U),Me.layers.test(C.layers)&&yi(Me,b,C,Re,at,ke)}}function yi(g,b,C,U,z,pe){G!==null&&z.isNodeMaterial&&G.setObject(g,z),g.onBeforeRender(P,b,C,U,z,pe),g.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,g.matrixWorld),g.normalMatrix.getNormalMatrix(g.modelViewMatrix),z.onBeforeRender(P,b,C,U,g,pe),z.transparent===!0&&z.side===gn&&z.forceSinglePass===!1?(z.side=Kt,z.needsUpdate=!0,P.renderBufferDirect(C,b,U,z,g,pe),z.side=Di,z.needsUpdate=!0,P.renderBufferDirect(C,b,U,z,g,pe),z.side=gn):P.renderBufferDirect(C,b,U,z,g,pe),g.onAfterRender(P,b,C,U,z,pe)}function fs(g){let b=0;for(let C of g)C.texture!==null&&b++;return b}function Un(g,b,C){b.isScene!==!0&&(b=st);let U=fe.get(g),z=w.state.lights,pe=w.state.shadowsArray,Pe=z.state.version,Me=se.getParameters(g,z.state,pe,b,C,w.state.lightProbeGridArray),Re=se.getProgramCacheKey(Me),ke=U.programs;U.environment=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?b.environment:null,U.fog=b.fog;let at=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap;U.envMap=A.get(g.envMap||U.environment,at),U.envMapRotation=U.environment!==null&&g.envMap===null?b.environmentRotation:g.envMapRotation,ke===void 0&&(g.addEventListener("dispose",xt),ke=new Map,U.programs=ke,U.programVariants=new Map);let dt=ke.get(Re);if(dt!==void 0){if(U.currentProgram===dt&&U.lightsStateVersion===Pe)return qn(g,Me),dt}else Me.uniforms=se.getUniforms(g),G!==null&&g.isNodeMaterial&&G.build(g,C,Me),g.onBeforeCompile(Me,P),dt=se.acquireProgram(Me,Re),ke.set(Re,dt),U.uniforms=Me.uniforms;let Oe=U.uniforms;return(!g.isShaderMaterial&&!g.isRawShaderMaterial||g.clipping===!0)&&(Oe.clippingPlanes=j.uniform),qn(g,Me),U.needsLights=Ne(g),U.lightsStateVersion=Pe,U.needsLights&&(Oe.ambientLightColor.value=z.state.ambient,Oe.lightProbe.value=z.state.probe,Oe.sunLights.value=z.state.sun,Oe.sunLightShadows.value=z.state.sunShadow,Oe.directionalLights.value=z.state.directional,Oe.directionalLightShadows.value=z.state.directionalShadow,Oe.spotLights.value=z.state.spot,Oe.spotLightShadows.value=z.state.spotShadow,Oe.rectAreaLights.value=z.state.rectArea,Oe.ltc_1.value=z.state.rectAreaLTC1,Oe.ltc_2.value=z.state.rectAreaLTC2,Oe.pointLights.value=z.state.point,Oe.pointLightShadows.value=z.state.pointShadow,Oe.hemisphereLights.value=z.state.hemi,Oe.sunShadowMatrix.value=z.state.sunShadowMatrix,Oe.sunShadowCascade.value=z.state.sunShadowCascade,Oe.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Oe.spotLightMatrix.value=z.state.spotLightMatrix,Oe.spotLightMap.value=z.state.spotLightMap,Oe.pointShadowMatrix.value=z.state.pointShadowMatrix),U.numLightProbeGrids=fs(w.state.lightProbeGridArray),U.currentProgram=dt,U.uniformsList=null,dt}function ai(g,b,C,U,z){let pe=fe.get(g),Pe=pe.currentProgram.id+","+U+","+z,Me=pe.programVariants.get(Pe);return Me===void 0?(Me=Un(g,b,C),pe.programVariants.set(Pe,Me)):(pe.currentProgram=Me,pe.uniformsList=null,pe.outputColorSpace=U,pe.toneMapping=z),Me}function ps(g){if(g.uniformsList===null){let b=g.currentProgram.getUniforms();g.uniformsList=$s.seqWithValue(b.seq,g.uniforms)}return g.uniformsList}function qn(g,b){let C=fe.get(g);C.outputColorSpace=b.outputColorSpace,C.batching=b.batching,C.batchingColor=b.batchingColor,C.instancing=b.instancing,C.instancingColor=b.instancingColor,C.instancingMorph=b.instancingMorph,C.skinning=b.skinning,C.morphTargets=b.morphTargets,C.morphNormals=b.morphNormals,C.morphColors=b.morphColors,C.morphTargetsCount=b.morphTargetsCount,C.numClippingPlanes=b.numClippingPlanes,C.numIntersection=b.numClipIntersection,C.vertexAlphas=b.vertexAlphas,C.vertexTangents=b.vertexTangents,C.toneMapping=b.toneMapping}function J(g,b,C,U,z){b.isScene!==!0&&(b=st),Ue.resetTextureUnits();let pe=b.fog,Pe=U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial?b.environment:null,Me=ce===null?P.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:gt.workingColorSpace,Re=U.isMeshStandardMaterial||U.isMeshLambertMaterial&&!U.envMap||U.isMeshPhongMaterial&&!U.envMap,ke=A.get(U.envMap||Pe,Re),at=U.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,dt=!!C.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),Oe=!!C.morphAttributes.position,pt=!!C.morphAttributes.normal,Ht=!!C.morphAttributes.color,Pt=jn;U.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(Pt=P.toneMapping);let At=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,Wt=At!==void 0?At.length:0,Be=fe.get(U),Yt=w.state.lights;if(xe===!0&&(V===!0||g!==ie)){let zt=g===ie&&U.id===$;j.setState(U,g,zt)}let Mt=!1,Mn=!1;U.version===Be.__version?Be.needsLights&&Be.lightsStateVersion!==Yt.state.version||z.isBatchedMesh&&Be.batching===!1||!z.isBatchedMesh&&Be.batching===!0||z.isBatchedMesh&&Be.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&Be.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&Be.instancing===!1||!z.isInstancedMesh&&Be.instancing===!0||z.isSkinnedMesh&&Be.skinning===!1||!z.isSkinnedMesh&&Be.skinning===!0||z.isInstancedMesh&&Be.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Be.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Be.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Be.instancingMorph===!1&&z.morphTexture!==null||Be.envMap!==ke||U.fog===!0&&Be.fog!==pe||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==j.numPlanes||Be.numIntersection!==j.numIntersection)||Be.vertexAlphas!==at||Be.vertexTangents!==dt||Be.morphTargets!==Oe||Be.morphNormals!==pt||Be.morphColors!==Ht||Be.morphTargetsCount!==Wt||Be.numLightProbeGrids!==fs(w.state.lightProbeGridArray)?Mt=!0:(Be.outputColorSpace!==Me||Be.toneMapping!==Pt)&&(Mn=!0):(Mt=!0,Be.__version=U.version);let ht=Be.currentProgram;(Mt===!0||Mn===!0)&&(ht=Mn===!0?ai(U,b,z,Me,Pt):Un(U,b,z),G&&U.isNodeMaterial&&G.onUpdateProgram(U,ht,Be));let Rt=!1,Si=!1,Bi=!1,St=ht.getUniforms(),rn=Be.uniforms;if(te.useProgram(ht.program)&&(Rt=!0,Si=!0,Bi=!0),U.id!==$&&($=U.id,Si=!0),Rt||ie!==g){te.buffers.depth.getReversed()&&g.reversedDepth!==!0&&(g._reversedDepth=!0,g.updateProjectionMatrix()),St.setValue(F,"projectionMatrix",g.projectionMatrix),St.setValue(F,"viewMatrix",g.matrixWorldInverse);let Jt=St.map.cameraPosition;Jt!==void 0&&Jt.setValue(F,qe.setFromMatrixPosition(g.matrixWorld)),W.logarithmicDepthBuffer&&St.setValue(F,"logDepthBufFC",2/(Math.log(g.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&St.setValue(F,"isOrthographic",g.isOrthographicCamera===!0),ie!==g&&(ie=g,Si=!0,Bi=!0)}if(Be.needsLights&&(Yt.state.sunShadowMap.length>0&&St.setValue(F,"sunShadowMap",Yt.state.sunShadowMap,Ue),Yt.state.directionalShadowMap.length>0&&St.setValue(F,"directionalShadowMap",Yt.state.directionalShadowMap,Ue),Yt.state.spotShadowMap.length>0&&St.setValue(F,"spotShadowMap",Yt.state.spotShadowMap,Ue),Yt.state.pointShadowMap.length>0&&St.setValue(F,"pointShadowMap",Yt.state.pointShadowMap,Ue)),z.isSkinnedMesh){St.setOptional(F,z,"bindMatrix"),St.setOptional(F,z,"bindMatrixInverse");let zt=z.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),St.setValue(F,"boneTexture",zt.boneTexture,Ue))}z.isBatchedMesh&&(St.setOptional(F,z,"batchingTexture"),St.setValue(F,"batchingTexture",z._matricesTexture,Ue),St.setOptional(F,z,"batchingIdTexture"),St.setValue(F,"batchingIdTexture",z._indirectTexture,Ue),St.setOptional(F,z,"batchingColorTexture"),z._colorsTexture!==null&&St.setValue(F,"batchingColorTexture",z._colorsTexture,Ue));let Fn=C.morphAttributes;if((Fn.position!==void 0||Fn.normal!==void 0||Fn.color!==void 0)&&q.update(z,C,ht),(Si||Be.receiveShadow!==z.receiveShadow)&&(Be.receiveShadow=z.receiveShadow,St.setValue(F,"receiveShadow",z.receiveShadow)),(U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial)&&U.envMap===null&&b.environment!==null&&(rn.envMapIntensity.value=b.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=$x()),Si){if(St.setValue(F,"toneMappingExposure",P.toneMappingExposure),Be.needsLights&&Ae(rn,Bi),pe&&U.fog===!0&&ge.refreshFogUniforms(rn,pe),ge.refreshMaterialUniforms(rn,U,ve,we,w.state.transmissionRenderTarget[g.id]),Be.needsLights&&Be.numLightProbeGrids>0){let zt=v,Jt=0;for(let oi of w.state.lightProbeGridArray)oi.texture!==null&&(zt.textures[Jt]=oi.texture,zt.min[Jt]=oi.boundingBox.min,zt.max[Jt]=oi.boundingBox.max,zt.resolution[Jt]=oi.resolution,Jt++);for(let oi in zt)zt[oi].length=Jt;rn.probesSH.value=zt.textures,rn.probesMin.value=zt.min,rn.probesMax.value=zt.max,rn.probesResolution.value=zt.resolution}$s.upload(F,ps(Be),rn,Ue)}if(U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&($s.upload(F,ps(Be),rn,Ue),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&St.setValue(F,"center",z.center),St.setValue(F,"modelViewMatrix",z.modelViewMatrix),St.setValue(F,"normalMatrix",z.normalMatrix),St.setValue(F,"modelMatrix",z.matrixWorld),U.uniformsGroups!==void 0){let zt=U.uniformsGroups;for(let Jt=0,oi=zt.length;Jt<oi;Jt++){let Ch=zt[Jt];Fe.update(Ch,ht),Fe.bind(Ch,ht)}}return ht}function Ae(g,b){g.ambientLightColor.needsUpdate=b,g.lightProbe.needsUpdate=b,g.sunLights.needsUpdate=b,g.sunLightShadows.needsUpdate=b,g.directionalLights.needsUpdate=b,g.directionalLightShadows.needsUpdate=b,g.pointLights.needsUpdate=b,g.pointLightShadows.needsUpdate=b,g.spotLights.needsUpdate=b,g.spotLightShadows.needsUpdate=b,g.rectAreaLights.needsUpdate=b,g.hemisphereLights.needsUpdate=b}function Ne(g){return g.isMeshLambertMaterial||g.isMeshToonMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isShadowMaterial||g.isShaderMaterial&&g.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return ce},this.setRenderTargetTextures=function(g,b,C){let U=fe.get(g);U.__autoAllocateDepthBuffer=g.resolveDepthBuffer===!1,U.__autoAllocateDepthBuffer===!1&&(U.__useRenderToTexture=!1),fe.get(g.texture).__webglTexture=b,fe.get(g.depthTexture).__webglTexture=U.__autoAllocateDepthBuffer?void 0:C,U.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(g,b){let C=fe.get(g);C.__webglFramebuffer=b,C.__useDefaultFramebuffer=b===void 0},this.setRenderTarget=function(g,b=0,C=0){ce=g,X=b,Y=C;let U=null,z=!1,pe=!1;if(g){let Me=fe.get(g);if(Me.__useDefaultFramebuffer!==void 0){te.bindFramebuffer(F.FRAMEBUFFER,Me.__webglFramebuffer),re.copy(g.viewport),me.copy(g.scissor),ze=g.scissorTest,te.viewport(re),te.scissor(me),te.setScissorTest(ze),$=-1;return}else if(Me.__webglFramebuffer===void 0)Ue.setupRenderTarget(g);else if(Me.__hasExternalTextures)Ue.rebindTextures(g,fe.get(g.texture).__webglTexture,fe.get(g.depthTexture).__webglTexture);else if(g.depthBuffer){let at=g.depthTexture;if(Me.__boundDepthTexture!==at){if(at!==null&&fe.has(at)&&(g.width!==at.image.width||g.height!==at.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ue.setupDepthRenderbuffer(g)}}let Re=g.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(pe=!0);let ke=fe.get(g).__webglFramebuffer;g.isWebGLCubeRenderTarget?(Array.isArray(ke[b])?U=ke[b][C]:U=ke[b],z=!0):g.samples>0&&Ue.useMultisampledRTT(g)===!1?U=fe.get(g).__webglMultisampledFramebuffer:Array.isArray(ke)?U=ke[C]:U=ke,re.copy(g.viewport),me.copy(g.scissor),ze=g.scissorTest}else re.copy(Ve).multiplyScalar(ve).floor(),me.copy($e).multiplyScalar(ve).floor(),ze=Qe;if(C!==0&&(U=K),te.bindFramebuffer(F.FRAMEBUFFER,U)&&te.drawBuffers(g,U),te.viewport(re),te.scissor(me),te.setScissorTest(ze),z){let Me=fe.get(g.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+b,Me.__webglTexture,C)}else if(pe){let Me=b;for(let Re=0;Re<g.textures.length;Re++){let ke=fe.get(g.textures[Re]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Re,ke.__webglTexture,C,Me)}}else if(g!==null&&C!==0){let Me=fe.get(g.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Me.__webglTexture,C)}$=-1};function et(g){let b=fe.get(g);return(b.__readFormat!==g.format||b.__readType!==g.type)&&(b.__readFormat=g.format,b.__readType=g.type,b.__formatReadable=W.textureFormatReadable(g.format),b.__typeReadable=W.textureTypeReadable(g.type)),b}this.readRenderTargetPixels=function(g,b,C,U,z,pe,Pe,Me=0){if(!(g&&g.isWebGLRenderTarget)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=fe.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&Pe!==void 0&&(Re=Re[Pe],Array.isArray(Re)&&(Re=Re[0])),Re){te.bindFramebuffer(F.FRAMEBUFFER,Re);try{let ke=g.textures[Me],at=ke.format,dt=ke.type;g.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Me);let Oe=et(ke);if(Oe.__formatReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Oe.__typeReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}b>=0&&b<=g.width-U&&C>=0&&C<=g.height-z&&F.readPixels(b,C,U,z,de.convert(at),de.convert(dt),pe)}finally{let ke=ce!==null?fe.get(ce).__webglFramebuffer:null;te.bindFramebuffer(F.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(g,b,C,U,z,pe,Pe,Me=0){if(!(g&&g.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=fe.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&Pe!==void 0&&(Re=Re[Pe],Array.isArray(Re)&&(Re=Re[0])),Re)if(b>=0&&b<=g.width-U&&C>=0&&C<=g.height-z){te.bindFramebuffer(F.FRAMEBUFFER,Re);let ke=g.textures[Me],at=ke.format,dt=ke.type;g.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Me);let Oe=et(ke);if(Oe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Oe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let pt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,pt),F.bufferData(F.PIXEL_PACK_BUFFER,pe.byteLength,F.STREAM_READ),F.readPixels(b,C,U,z,de.convert(at),de.convert(dt),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Ht=ce!==null?fe.get(ce).__webglFramebuffer:null;te.bindFramebuffer(F.FRAMEBUFFER,Ht);let Pt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Wu(F,Pt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,pt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,pe),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(pt),F.deleteSync(Pt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(g,b=null,C=0){let U=Math.pow(2,-C),z=Math.floor(g.image.width*U),pe=Math.floor(g.image.height*U),Pe=b!==null?b.x:0,Me=b!==null?b.y:0;Ue.setTexture2D(g,0),F.copyTexSubImage2D(F.TEXTURE_2D,C,0,0,Pe,Me,z,pe),te.unbindTexture()},this.copyTextureToTexture=function(g,b,C=null,U=null,z=0,pe=0){let Pe,Me,Re,ke,at,dt,Oe,pt,Ht,Pt=g.isCompressedTexture?g.mipmaps[pe]:g.image;if(C!==null)Pe=C.max.x-C.min.x,Me=C.max.y-C.min.y,Re=C.isBox3?C.max.z-C.min.z:1,ke=C.min.x,at=C.min.y,dt=C.isBox3?C.min.z:0;else{let St=Math.pow(2,-z);Pe=Math.floor(Pt.width*St),Me=Math.floor(Pt.height*St),g.isDataArrayTexture?Re=Pt.depth:g.isData3DTexture?Re=Math.floor(Pt.depth*St):Re=1,ke=0,at=0,dt=0}U!==null?(Oe=U.x,pt=U.y,Ht=U.z):(Oe=0,pt=0,Ht=0);let At=de.convert(b.format),Wt=de.convert(b.type),Be;b.isData3DTexture?(Ue.setTexture3D(b,0),Be=F.TEXTURE_3D):b.isDataArrayTexture||b.isCompressedArrayTexture?(Ue.setTexture2DArray(b,0),Be=F.TEXTURE_2D_ARRAY):(Ue.setTexture2D(b,0),Be=F.TEXTURE_2D),te.activeTexture(F.TEXTURE0),te.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,b.flipY),te.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),te.pixelStorei(F.UNPACK_ALIGNMENT,b.unpackAlignment);let Yt=te.getParameter(F.UNPACK_ROW_LENGTH),Mt=te.getParameter(F.UNPACK_IMAGE_HEIGHT),Mn=te.getParameter(F.UNPACK_SKIP_PIXELS),ht=te.getParameter(F.UNPACK_SKIP_ROWS),Rt=te.getParameter(F.UNPACK_SKIP_IMAGES);te.pixelStorei(F.UNPACK_ROW_LENGTH,Pt.width),te.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Pt.height),te.pixelStorei(F.UNPACK_SKIP_PIXELS,ke),te.pixelStorei(F.UNPACK_SKIP_ROWS,at),te.pixelStorei(F.UNPACK_SKIP_IMAGES,dt);let Si=g.isDataArrayTexture||g.isData3DTexture,Bi=b.isDataArrayTexture||b.isData3DTexture;if(g.isDepthTexture){let St=fe.get(g),rn=fe.get(b),Fn=fe.get(St.__renderTarget),zt=fe.get(rn.__renderTarget);te.bindFramebuffer(F.READ_FRAMEBUFFER,Fn.__webglFramebuffer),te.bindFramebuffer(F.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let Jt=0;Jt<Re;Jt++)Si&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,fe.get(g).__webglTexture,z,dt+Jt),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,fe.get(b).__webglTexture,pe,Ht+Jt)),F.blitFramebuffer(ke,at,ke+Pe,at+Me,Oe,pt,Oe+Pe,pt+Me,F.DEPTH_BUFFER_BIT,F.NEAREST);te.bindFramebuffer(F.READ_FRAMEBUFFER,null),te.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(z!==0||g.isRenderTargetTexture||fe.has(g)){let St=fe.get(g),rn=fe.get(b);te.bindFramebuffer(F.READ_FRAMEBUFFER,D),te.bindFramebuffer(F.DRAW_FRAMEBUFFER,H);for(let Fn=0;Fn<Re;Fn++)Si?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,St.__webglTexture,z,dt+Fn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,St.__webglTexture,z),Bi?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,rn.__webglTexture,pe,Ht+Fn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,rn.__webglTexture,pe),z!==0?F.blitFramebuffer(ke,at,ke+Pe,at+Me,Oe,pt,Oe+Pe,pt+Me,F.COLOR_BUFFER_BIT,F.NEAREST):Bi?F.copyTexSubImage3D(Be,pe,Oe,pt,Ht+Fn,ke,at,Pe,Me):F.copyTexSubImage2D(Be,pe,Oe,pt,ke,at,Pe,Me);te.bindFramebuffer(F.READ_FRAMEBUFFER,null),te.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Bi?g.isDataTexture||g.isData3DTexture?F.texSubImage3D(Be,pe,Oe,pt,Ht,Pe,Me,Re,At,Wt,Pt.data):b.isCompressedArrayTexture?F.compressedTexSubImage3D(Be,pe,Oe,pt,Ht,Pe,Me,Re,At,Pt.data):F.texSubImage3D(Be,pe,Oe,pt,Ht,Pe,Me,Re,At,Wt,Pt):g.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,pe,Oe,pt,Pe,Me,At,Wt,Pt.data):g.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,pe,Oe,pt,Pt.width,Pt.height,At,Pt.data):F.texSubImage2D(F.TEXTURE_2D,pe,Oe,pt,Pe,Me,At,Wt,Pt);te.pixelStorei(F.UNPACK_ROW_LENGTH,Yt),te.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Mt),te.pixelStorei(F.UNPACK_SKIP_PIXELS,Mn),te.pixelStorei(F.UNPACK_SKIP_ROWS,ht),te.pixelStorei(F.UNPACK_SKIP_IMAGES,Rt),pe===0&&b.generateMipmaps===!0&&b.mipmapsAutoUpdate===!0&&F.generateMipmap(Be),te.unbindTexture()},this.initRenderTarget=function(g){fe.get(g).__webglFramebuffer===void 0&&Ue.setupRenderTarget(g)},this.initTexture=function(g){g.isCubeTexture?Ue.setTextureCube(g,0):g.isData3DTexture?Ue.setTexture3D(g,0):g.isDataArrayTexture||g.isCompressedArrayTexture?Ue.setTexture2DArray(g,0):Ue.setTexture2D(g,0),te.unbindTexture()},this.resetState=function(){X=0,Y=0,ce=null,te.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=gt._getUnpackColorSpace()}};var Tl=class extends qi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new We;e.deleteAttribute("uv");let t=new He({side:Kt}),n=new He,s=new es(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new B(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new mn(e,n,6),o=new Ut;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new B(e,js(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new B(e,js(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new B(e,js(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new B(e,js(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new B(e,js(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new B(e,js(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function js(i){return new Vr({color:0,emissive:16777215,emissiveIntensity:i})}var ga=class i extends B{constructor(){let e=i.SkyShader,t=new qt({name:e.name,uniforms:kn.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:Kt,depthWrite:!1});super(new We(1,1,1),t),this.isSky=!0}};ga.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new N},cloudScale:{value:2e-4},cloudSpeed:{value:2e-5},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( vSunDirection.y );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform float cloudScale;
		uniform float cloudSpeed;
		uniform float cloudCoverage;
		uniform float cloudDensity;
		uniform float cloudElevation;
		uniform float showSunDisc;
		uniform float time;

		// gradient at a lattice corner; sinless hash so every GPU produces the same clouds
		vec2 gradient( vec2 i ) {
			vec3 p = fract( i.xyx * vec3( 0.1031, 0.1030, 0.0973 ) );
			p += dot( p, p.yzx + 33.33 );
			return fract( ( p.xx + p.yz ) * p.zy ) * 2.0 - 1.0;
		}

		// 2D gradient noise: isotropic lobes like Perlin at value-noise cost
		float noise( vec2 p ) {
			vec2 i = floor( p );
			vec2 f = fract( p );
			vec2 u = f * f * f * ( f * ( f * 6.0 - 15.0 ) + 10.0 ); // quintic fade
			float a = dot( gradient( i ), f );
			float b = dot( gradient( i + vec2( 1.0, 0.0 ) ), f - vec2( 1.0, 0.0 ) );
			float c = dot( gradient( i + vec2( 0.0, 1.0 ) ), f - vec2( 0.0, 1.0 ) );
			float d = dot( gradient( i + vec2( 1.0, 1.0 ) ), f - vec2( 1.0, 1.0 ) );
			return mix( mix( a, b, u.x ), mix( c, d, u.x ), u.y ) * 1.6; // ~[-1,1]
		}

		// fbm; per-octave drift makes clouds billow instead of scrolling as a rigid stamp
		float fbm( vec2 p, float drift ) {
			float result = 0.0;
			float amplitude = 1.0;
			for ( int i = 0; i < 4; i ++ ) {
				result += amplitude * noise( p );
				amplitude *= 0.5;
				p = p * 2.0 + drift;
			}
			return result;
		}

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, direction.y ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - vSunDirection.y, 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisc = clamp( ( cosTheta - sunAngularDiameterCos ) * 50000.0, 0.0, 1.0 ) * showSunDisc;
			vec3 sundiscColor = ( 760.0 * sundisc ) * min( vSunE * Fex, 80.0 );

			vec3 texColor = ( Lin + L0 ) * 0.04 + sundiscColor + vec3( 0.0, 0.0003, 0.00075 );

			// Clouds
			if ( direction.y > 0.0 && cloudCoverage > 0.0 ) {

				// Project to cloud plane (higher elevation = clouds appear lower/closer)
				float elevation = mix( 1.0, 0.1, cloudElevation );
				vec2 cloudUV = direction.xz / ( direction.y * elevation );
				cloudUV *= cloudScale;
				cloudUV += time * cloudSpeed;

				// Cloud density field
				float evolve = time * cloudSpeed * 300.0;
				float cloudNoise = clamp( fbm( cloudUV * 1000.0, evolve ) * 0.7 + 0.5, 0.0, 1.0 );

				// Large-scale coverage variation: clear gaps next to dense banks
				float region = noise( cloudUV * 300.0 ) * 0.37 + 0.5;
				float cov = clamp( cloudCoverage + ( region - 0.5 ) * 0.6, 0.0, 1.0 );

				// Carve clouds where noise rises above the coverage level
				float threshold = 1.0 - cov;
				float cloudMask = smoothstep( threshold, threshold + 0.3, cloudNoise );

				// Fade clouds near horizon (adjusted by elevation)
				float horizonFade = smoothstep( 0.0, 0.03 + 0.06 * cloudElevation, direction.y );
				cloudMask *= horizonFade;

				// Cloud lighting from the sky's own radiance
				float dayFactor = smoothstep( -0.08, 0.3, vSunDirection.y );
				vec3 sunColor = vSunE * Fex * 0.22 * 0.04; // 0.22 ~ albedo/pi, 0.04 = exposure; the aerial composite adds the eye-leg extinction
				vec3 skyAmbient = Lin * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

				// Beer-powder self-shadow from the sampled density
				float depth = max( 0.0, cloudNoise - threshold );
				float beer = exp( depth * -4.0 );
				float powder = 1.0 - beer * beer; // beer*beer == exp(-8*depth)
				float shade = mix( 0.45, 1.0, clamp( beer * powder * 2.6, 0.0, 1.0 ) ); // 2.6 = 1/0.385, normalizes beer*powder peak to 1

				// Henyey-Greenstein forward lobe ( g = 0.7 ): silver lining on rims toward the sun
				float silver = clamp( 0.51 / pow( 1.49 - cosTheta * 1.4, 1.5 ), 0.0, 3.0 ); // 0.51=1-g^2, 1.49=1+g^2, 1.4=2g
				float edge = cloudMask * ( 1.0 - cloudMask ) * 4.0;

				vec3 cloudColor = skyAmbient + sunColor * shade;
				cloudColor += sunColor * silver * edge * 0.6;
				cloudColor *= max( dayFactor, 0.03 );

				// Cloud opacity via Beer's law: density sets how solid the clouds get
				float alpha = ( 1.0 - exp( depth * cloudDensity * -12.0 ) ) * horizonFade;

				// Occlude the sun disc/glow behind opaque cloud
				texColor -= L0 * 0.04 * alpha;

				// Composite through the atmosphere so distant clouds dissolve into haze
				vec3 cloudAerial = mix( texColor, cloudColor, Fex );
				texColor = mix( texColor, cloudAerial, alpha );

			}

			gl_FragColor = vec4( texColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var er={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Tn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Jx=new ts(-1,1,1,-1,0,1),ch=class extends Ot{constructor(){super(),this.setAttribute("position",new Et([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Et([0,2,0,0,2,0],2))}},Qx=new ch,Ui=class{constructor(e){this._mesh=new B(Qx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Jx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var wl=class extends Tn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof qt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=kn.clone(e.uniforms),this.material=new qt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ui(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var xa=class extends Tn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Al=class extends Tn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Rl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new le);this._width=n.width,this._height=n.height,t=new Vt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ln}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new wl(er),this.copyPass.material.blending=xi,this.timer=new Kr}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}xa!==void 0&&(a instanceof xa?n=!0:a instanceof Al&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new le);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Cl=class extends Tn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ye}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Dd={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ye(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var tr=class i extends Tn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new le(e.x,e.y):new le(256,256),this.clearColor=new Ye(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Vt(r,a,{type:ln,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Vt(r,a,{type:ln,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new Vt(r,a,{type:ln,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=Dd;this.highPassUniforms=kn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new qt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new le(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=kn.clone(er.uniforms),this.blendMaterial=new qt({uniforms:this.copyUniforms,vertexShader:er.vertexShader,fragmentShader:er.fragmentShader,premultipliedAlpha:!0,blending:Jr,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ye,this._oldClearAlpha=1,this._basic=new vt,this._fsQuad=new Ui(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new le(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],l=a+1<e?t[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new qt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new le(.5,.5)},direction:{value:new le(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new qt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};tr.BlurDirectionX=new le(1,0);tr.BlurDirectionY=new le(0,1);var _a={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Pl=class extends Tn{constructor(){super(),this.isOutputPass=!0,this.uniforms=kn.clone(_a.uniforms),this.material=new Gs({name:_a.name,uniforms:this.uniforms,vertexShader:_a.vertexShader,fragmentShader:_a.fragmentShader}),this._fsQuad=new Ui(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},gt.getTransfer(this._outputColorSpace)===Tt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Qr?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===jr?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ea?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===is?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===na?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ia?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ta&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Il=i=>String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),ls={camera:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>',lamp:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7zM9 21h6"/></svg>',sun:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>',sound:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5 6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>',mute:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5 6 9H2v6h4l5 4V5zM23 9l-6 6M17 9l6 6"/></svg>',restart:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8M3 3v5h5"/></svg>',pause:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14M16 5v14"/></svg>'},Ll=class{constructor(e,t){this.root=e,this.actions=t,this.model=null,this.activePointers=new Map,e.addEventListener("click",n=>this.onClick(n)),e.addEventListener("pointerdown",n=>this.onPointerDown(n)),window.addEventListener("pointerup",n=>this.releasePointer(n.pointerId)),window.addEventListener("pointercancel",n=>this.releasePointer(n.pointerId)),window.addEventListener("blur",()=>this.releaseHeldControls())}render(e){this.model=e,document.body.dataset.state=e.gameState,this.root.innerHTML=e.gameState==="title"?this.titleScreen(e):`${this.playScreen(e)}${e.gameState==="paused"?this.pauseModal(e):""}${e.gameState==="gameover"?this.outcomeModal(e):""}`,this.updateTelemetry(e.telemetry),this.syncSelections()}updateTelemetry(e){if(!e||!this.root.isConnected)return;let t={speed:Math.round(e.speedKmh),gear:e.gearLabel,transmission:e.transmissionMode,rpm:`ENGINE ${Math.round(e.rpm)} RPM`,boostAir:`BOOST ${e.turboBoostBar.toFixed(1)} BAR \xB7 AIR ${Math.round(e.airPressurePsi)} PSI`,odometer:`ODOMETER ${(e.distanceAlongHighwayM/1e3).toFixed(2)} / 4.35 KM`,fuel:`FUEL ${Math.round(e.fuelLiters/e.fuelMaxLiters*100)}%`,cargo:`CARGO ${Math.round(e.cargoIntegrityPct)}%`,speedLimit:e.speedLimitKmh,landmark:e.landmarkKm,zone:e.zoneName,nextWaypoint:`Next: ${e.nextWaypointName} (${e.nextWaypointDistanceM} m)`,pauseDistance:`${(e.distanceAlongHighwayM/1e3).toFixed(2)} km`,pauseCargo:`${Math.round(e.cargoIntegrityPct)}%`,pauseAir:Math.round(e.airPressurePsi)};for(let[c,h]of Object.entries(t)){let u=this.root.querySelector(`[data-field="${c}"]`);u&&(u.textContent=h)}let n=Math.min(100,Math.max(0,e.distanceAlongHighwayM/4350*100)),s=Math.min(100,Math.max(0,e.rpm/2500*100)),r=this.root.querySelector('[data-field="routeProgress"]'),a=this.root.querySelector('[data-field="rpmProgress"]');r&&(r.style.transform=`scaleX(${n/100})`),a&&(a.style.transform=`scaleX(${s/100})`,a.className=`rpm-fill ${e.rpm>2050?"red":e.rpm>=1050&&e.rpm<=1780?"green":"amber"}`),this.toggleState('[data-toggle="headlights"]',e.headlightsOn),this.toggleState('[data-toggle="left-indicator"]',e.indicatorBlinkOn&&(e.indicator==="left"||e.indicator==="hazard")),this.toggleState('[data-toggle="right-indicator"]',e.indicatorBlinkOn&&(e.indicator==="right"||e.indicator==="hazard")),this.toggleState('[data-toggle="horn"]',e.hornActive);let o=this.root.querySelector('[data-field="cargo"]');o&&o.classList.toggle("warning",e.cargoIntegrityPct<80);let l=this.root.querySelector('[data-role="jackknife"]');l&&(l.hidden=!e.jackknifeWarning)}syncSelections(){if(!this.model)return;let{cameraMode:e,timeOfDay:t,graphicsQuality:n,telemetry:s}=this.model;for(let r of this.root.querySelectorAll("[data-select]")){let[a,o]=r.dataset.select.split(":"),l=a==="camera"?e===o:a==="time"?t===o:a==="quality"?n===o:a==="transmission"?s.transmissionMode===o:!1;r.classList.toggle("selected",l)}for(let r of this.root.querySelectorAll('[data-action="quality"]'))r.classList.toggle("selected",r.dataset.value===n)}toggleState(e,t){let n=this.root.querySelector(e);n&&n.classList.toggle("active",!!t)}onClick(e){let t=e.target.closest("button[data-action]");if(!t||!this.root.contains(t))return;t.blur();let{action:n,value:s}=t.dataset,r=this.actions[n];r&&r(s)}onPointerDown(e){let t=e.target.closest("[data-hold]");if(!t||!this.root.contains(t))return;let{hold:n,value:s}=t.dataset;try{t.setPointerCapture?.(e.pointerId)}catch{}this.activePointers.set(e.pointerId,{hold:n,value:s}),n==="touch"&&this.actions.touch?.(s,!0),n==="horn"&&this.actions.horn?.(!0)}releasePointer(e){let t=this.activePointers.get(e);if(!t)return;this.activePointers.delete(e);let n=(s,r)=>[...this.activePointers.values()].some(a=>a.hold===s&&a.value===r);t.hold==="touch"&&this.actions.touch?.(t.value,n("touch",t.value)),t.hold==="horn"&&this.actions.horn?.(n("horn",t.value))}releaseHeldControls(){this.activePointers.clear(),this.actions.touch?.("left",!1),this.actions.touch?.("right",!1),this.actions.touch?.("throttle",!1),this.actions.touch?.("brake",!1),this.actions.horn?.(!1)}titleScreen(e){let t=["low","medium","high","ultra"];return`<div class="title-layout">
      <section class="title-card" aria-label="Simulator setup">
        <div class="title-emblem">
          <svg viewBox="0 0 540 118" role="img" aria-label="Grand Trunk NH-44 Heavy Haul 3D Simulator">
            <rect x="2" y="6" width="96" height="104" rx="10" fill="#f59e0b" stroke="#1c1917" stroke-width="4"/><rect x="9" y="13" width="82" height="90" rx="6" fill="none" stroke="#1c1917" stroke-width="2.5"/>
            <text x="50" y="39" text-anchor="middle" fill="#1c1917" font-family="Plus Jakarta Sans,sans-serif" font-weight="800" font-size="14.5" letter-spacing="1">IND \xB7 NH</text>
            <text x="50" y="88" text-anchor="middle" fill="#1c1917" font-family="Chakra Petch,sans-serif" font-weight="700" font-size="50">44</text>
            <text x="114" y="48" fill="#f5f5f4" font-family="Chakra Petch,sans-serif" font-weight="700" font-size="42" letter-spacing="1.5">GRAND TRUNK</text>
            <text x="114" y="81" fill="#fbbf24" font-family="Chakra Petch,sans-serif" font-weight="600" font-size="21" letter-spacing="2.5">HEAVY HAUL 3D SIMULATOR</text>
            <line x1="114" y1="95" x2="532" y2="95" stroke="#44403c" stroke-width="2"/>
            <text x="114" y="112" fill="#a8a29e" font-family="JetBrains Mono,monospace" font-weight="600" font-size="11" letter-spacing=".4">AMBALA CANTT \u2192 SHAHBAD ROB \u2192 PIPLI \u2192 KARNAL TOLL (5.0 KM)</text>
          </svg>
        </div>
        <div class="setup-group">
          <div class="field-label">Lighting &amp; Atmosphere</div>
          <div class="button-grid three">${[["golden","Golden Hour"],["day","High Noon"],["night","Dusk / Night"]].map(([n,s])=>`<button data-action="time" data-value="${n}" data-select="time:${n}" class="choice ${e.timeOfDay===n?"selected":""}">${s}</button>`).join("")}</div>
        </div>
        <div class="setup-group">
          <div class="field-label">Graphics Quality Preset (Pixel-Perfect 3D \xB7 60 FPS Optimised)</div>
          <div class="button-grid four">${t.map(n=>`<button data-action="quality" data-value="${n}" data-select="quality:${n}" class="choice ${e.graphicsQuality===n?"selected":""}">${n==="low"?"Low (Default)":n==="ultra"?"Ultra 4K":n[0].toUpperCase()+n.slice(1)}</button>`).join("")}</div>
        </div>
        <div class="setup-group">
          <div class="field-label">12-Speed Gearbox Mode</div>
          <div class="button-grid two">
            <button data-action="transmission" data-value="auto" data-select="transmission:auto" class="choice ${e.telemetry.transmissionMode==="auto"?"selected":""}">OptiCruise Automatic</button>
            <button data-action="transmission" data-value="manual" data-select="transmission:manual" class="choice ${e.telemetry.transmissionMode==="manual"?"selected":""}">12-Speed Sequential Manual</button>
          </div>
        </div>
        <button class="start-button" data-action="start" data-start="true">START HEAVY HAUL (ENTER)</button>
        <div class="title-meta"><span>32t 6x4 Articulated Container Rig \xB7 Left-Hand Traffic</span><span>RHD Cabin + Chase Cam</span></div>
      </section>
      <footer class="title-footer"><span>WASD / Arrows Drive \xB7 Space Air Brake \xB7 C Camera \xB7 L Headlights \xB7 Q/E Indicators \xB7 H Horn \xB7 Esc Pause</span><span>Road Alignment &amp; Waypoints \xA9 OpenStreetMap contributors (ODbL) \xB7 NH-44 Ambala\u2013Karnal Corridor</span></footer>
    </div>`}playScreen(e){let t=e.telemetry,n=e.graphicsQuality==="medium"?"MED":e.graphicsQuality==="ultra"?"ULTRA 4K":e.graphicsQuality,s=e.cameraMode.toUpperCase(),r=e.isMuted?ls.mute:ls.sound,a=e.isTouchDevice&&e.gameState==="playing"?`<div class="touch-row">
      <div class="touch-group"><button class="touch-button" aria-label="Steer Left" data-hold="touch" data-value="left">\u25C0</button><button class="touch-button" aria-label="Steer Right" data-hold="touch" data-value="right">\u25B6</button></div>
      <div class="touch-group"><button class="touch-button brake" aria-label="Air Brake Pedal" data-hold="touch" data-value="brake">BRAKE</button><button class="touch-button drive" aria-label="Throttle Accelerator Pedal" data-hold="touch" data-value="throttle">DRIVE</button></div>
    </div>`:"",o=["cabin","chase","orbit"].map(l=>`<button data-action="camera" data-value="${l}" data-select="camera:${l}" class="camera-choice ${e.cameraMode===l?"selected":""}">${l[0].toUpperCase()+l.slice(1)}</button>`).join("");return`<div class="play-hud">
      <div class="top-bar">
        <section class="route-card" aria-label="Route and next waypoint">
          <div class="route-overview"><div class="speed-limit"><span data-field="speedLimit">${t.speedLimitKmh}</span></div><div class="route-copy">
            <div class="route-kicker"><span data-field="landmark">${Il(t.landmarkKm)}</span><span>\xB7</span><span>LHT KEEP LEFT</span></div>
            <div class="route-zone" data-field="zone">${Il(t.zoneName)}</div>
            <div class="route-next" data-field="nextWaypoint">Next: ${Il(t.nextWaypointName)} (${t.nextWaypointDistanceM} m)</div>
          </div></div><div class="route-progress"><div data-field="routeProgress"></div></div>
        </section>
        <div class="utility-bar">
          <button class="utility quality-chip" data-action="cycleQuality" data-testid="hud-gfx-cycle-btn" aria-label="Cycle Graphics Quality (Current: ${e.graphicsQuality})" title="Cycle Graphics Quality Preset [F] (Low / Med / High / Ultra 4K)"><span class="mini-label">GFX</span><span class="quality-name">${n}</span></button>
          <button class="utility camera-chip" data-action="cycleCamera" aria-label="Switch Camera View (Current: ${e.cameraMode})">${ls.camera}<span class="camera-name">${s}</span><span class="hotkey">[C]</span></button>
          <button class="utility icon-button ${t.headlightsOn?"active":""}" data-action="headlights" data-toggle="headlights" aria-label="Toggle Headlights (Current: ${t.headlightsOn?"On":"Off"})">${ls.lamp}</button>
          <button class="utility icon-button" data-action="cycleTime" aria-label="Cycle Time of Day (Current: ${e.timeOfDay})">${ls.sun}</button>
          <button class="utility icon-button sound-button ${e.isMuted?"muted":""}" data-action="mute" aria-label="${e.isMuted?"Unmute Audio [M]":"Mute Audio [M]"}">${r}</button>
          <button class="utility icon-button" data-action="restart" aria-label="Restart Haul [R]">${ls.restart}</button>
          <button class="utility icon-button" data-action="pause" aria-label="Pause Simulator [P]">${ls.pause}</button>
        </div>
      </div>
      <div class="jackknife" data-role="jackknife" hidden>JACKKNIFE WARNING \xB7 REDUCE SPEED</div>
      ${a}
      <div class="control-dock-wrap">
        <button class="dock-toggle" data-action="toggleHud">${e.hudCollapsed?"\u25B4 Show Telemetry Dock [U]":"\u25BE Hide Controls [U]"}</button>
        ${e.hudCollapsed?"":`<section class="control-dock" aria-label="Driving telemetry and controls">
          <div class="dock-left">
            <button class="indicator-button" data-action="indicator" data-value="left" data-toggle="left-indicator" aria-label="Left Turn Indicator [Q]">\u2190</button>
            <div class="speed-readout"><div data-field="speed">${Math.round(t.speedKmh)}</div><span>SPEED KM/H</span></div>
            <div class="gear-control"><div><strong data-field="gear">${t.gearLabel}</strong><button class="transmission" data-action="toggleTransmission" title="Click to toggle Auto / Manual transmission" data-field="transmission">${t.transmissionMode}</button></div><div class="shift-buttons"><button data-action="shiftUp" aria-label="Shift Gear Up">+</button><button data-action="shiftDown" aria-label="Shift Gear Down">\u2212</button></div></div>
            <button class="indicator-button" data-action="indicator" data-value="right" data-toggle="right-indicator" aria-label="Right Turn Indicator [E]">\u2192</button>
          </div>
          <div class="dock-center">
            <div class="engine-labels"><span data-field="rpm">ENGINE ${Math.round(t.rpm)} RPM</span><span data-field="boostAir">BOOST ${t.turboBoostBar.toFixed(1)} BAR \xB7 AIR ${Math.round(t.airPressurePsi)} PSI</span></div>
            <div class="rpm-bar"><span class="economy-band"></span><span class="rpm-fill amber" data-field="rpmProgress"></span></div>
            <div class="vehicle-stats"><span data-field="odometer">ODOMETER ${(t.distanceAlongHighwayM/1e3).toFixed(2)} / 4.35 KM</span><span data-field="fuel">FUEL ${Math.round(t.fuelLiters/t.fuelMaxLiters*100)}%</span><span data-field="cargo" class="${t.cargoIntegrityPct<80?"warning":""}">CARGO ${Math.round(t.cargoIntegrityPct)}%</span></div>
          </div>
          <div class="dock-right">${o}<button class="horn-button ${t.hornActive?"active":""}" data-hold="horn" data-toggle="horn" aria-label="Sound Pressure Horn [H]">HORN [H]</button></div>
        </section>`}
      </div>
    </div>`}pauseModal(e){let t=e.telemetry,n=["low","medium","high","ultra"];return`<div class="modal-shade"><section class="modal-card" role="dialog" aria-modal="true" aria-labelledby="pause-title">
      <h2 id="pause-title">SIMULATION PAUSED</h2><p class="modal-subtitle">NH-44 Grand Trunk Road (Ambala Cantt \u2192 Karnal Toll Plaza)</p>
      <div class="stat-tiles"><div><span>DISTANCE</span><strong data-field="pauseDistance">${(t.distanceAlongHighwayM/1e3).toFixed(2)} km</strong></div><div><span>CARGO</span><strong class="green" data-field="pauseCargo">${Math.round(t.cargoIntegrityPct)}%</strong></div><div><span>AIR PSI</span><strong class="amber" data-field="pauseAir">${Math.round(t.airPressurePsi)}</strong></div></div>
      <div class="modal-settings"><div class="quality-settings"><div><span>Graphics Quality Tier</span><strong class="amber">${e.graphicsQuality==="ultra"?"Ultra 4K UHD":e.graphicsQuality}</strong></div><div class="button-grid four">${n.map(s=>`<button data-action="quality" data-value="${s}" class="choice ${s===e.graphicsQuality?"selected":""}">${s==="medium"?"Med":s==="ultra"?"Ultra 4K":s}</button>`).join("")}</div></div>
      <div class="geo-status"><strong>Geospatial &amp; Road Architecture</strong><span>OpenStreetMap (ODbL) NH-44 Grand Trunk Road Alignment + Procedural PBR Environment active</span></div></div>
      <button class="modal-primary" data-action="resume">RESUME HAUL (ESC)</button><div class="modal-buttons"><button data-action="restart">Restart Corridor</button><button data-action="title">Title Screen</button></div>
    </section></div>`}outcomeModal(e){let t=e.outcome;return t?`<div class="modal-shade outcome-shade"><section class="modal-card" role="dialog" aria-modal="true">
      <div class="outcome-kicker">${t.victory?"NH-44 FREIGHT CONTRACT COMPLETED":"HAUL TERMINATED"}</div>
      <h2>${t.victory?"KARNAL TOLL PLAZA REACHED":"CARGO INTEGRITY DEPLETED"}</h2><p class="modal-subtitle">${Il(t.reason)}</p>
      <div class="stat-tiles"><div><span>DISTANCE</span><strong>${t.distanceKm} km</strong></div><div><span>HAUL TIME</span><strong class="amber">${t.elapsedTimeFormatted}</strong></div><div><span>CARGO</span><strong class="green">${Math.round(t.cargoIntegrityPct)}%</strong></div></div>
      <button class="modal-primary" data-action="restart" data-start="true">${t.victory?"START NEXT HAUL (ENTER)":"TRY HAUL AGAIN (ENTER)"}</button><button class="modal-secondary" data-action="title">Return to Title Screen</button>
    </section></div>`:""}};var jx=Object.defineProperty,hs=(i,e)=>jx(i,"name",{value:e,configurable:!0}),Dt=5e3,ni={FORWARD_OUTER:-7.6,FORWARD_INNER:-3.85,ONCOMING_INNER:3.85,ONCOMING_OUTER:7.6},Ma=[{s:0,name:"Ambala Cantt Freight Corridor",hindiSub:"\u0905\u0902\u092C\u093E\u0932\u093E \u091B\u093E\u0935\u0928\u0940 \u0930\u093E\u0937\u094D\u091F\u094D\u0930\u0940\u092F \u0930\u093E\u091C\u092E\u093E\u0930\u094D\u0917 \u096A\u096A",code:"NH-44 \xB7 KM 202.0",speedLimit:80,elevationM:274,lat:30.3398,lng:76.8367},{s:1150,name:"Shahbad Markanda Flyover (ROB)",hindiSub:"\u0936\u093E\u0939\u092C\u093E\u0926 \u092E\u093E\u0930\u0915\u0902\u0921\u093E \u0930\u0947\u0932 \u0913\u0935\u0930\u092C\u094D\u0930\u093F\u091C",code:"NH-44 \xB7 KM 203.2",speedLimit:70,elevationM:282,lat:30.1672,lng:76.8712},{s:2450,name:"Sher-e-Punjab Highway Dhaba & Fuel Plaza",hindiSub:"\u0936\u0947\u0930-\u090F-\u092A\u0902\u091C\u093E\u092C \u0922\u093E\u092C\u093E \u090F\u0935\u0902 \u0935\u093F\u0936\u094D\u0930\u093E\u092E \u0915\u0947\u0902\u0926\u094D\u0930",code:"NH-44 \xB7 KM 204.5",speedLimit:80,elevationM:275,lat:30.0418,lng:76.8965},{s:3450,name:"Pipli Kurukshetra Express Interchange",hindiSub:"\u092A\u093F\u092A\u0932\u0940 \u0915\u0941\u0930\u0941\u0915\u094D\u0937\u0947\u0924\u094D\u0930 \u090F\u0915\u094D\u0938\u092A\u094D\u0930\u0947\u0938 \u091A\u094C\u0930\u093E\u0939\u093E",code:"NH-44 \xB7 KM 205.5",speedLimit:80,elevationM:278,lat:29.9781,lng:76.8902},{s:4350,name:"Karnal 6-Lane FASTag Toll Plaza",hindiSub:"\u0915\u0930\u0928\u093E\u0932 \u091F\u094B\u0932 \u092A\u094D\u0932\u093E\u091C\u093C\u093E \xB7 \u092B\u093E\u0938\u094D\u091F\u0948\u0917 \u0932\u0947\u0928",code:"NH-44 \xB7 KM 206.4",speedLimit:50,elevationM:274,lat:29.7429,lng:76.9684}];function cs(i,e,t){let n=Math.max(0,Math.min(1,(t-i)/(e-i)));return n*n*(3-2*n)}hs(cs,"smoothstep");function Dl(i){let e=i/Dt*Math.PI*2;return Math.sin(e)*145+Math.sin(e*2-.6)*68+Math.cos(e*3+.4)*28-Math.cos(.4)*28-Math.sin(-.6)*68}hs(Dl,"rawXAtS");function Nl(i){let e=(i%Dt+Dt)%Dt,t=0;if(e>=950&&e<=1850){let a=cs(950,1280,e),o=1-cs(1520,1850,e);t=7.8*a*o}let n=0;if(e>=3150&&e<=3750){let a=cs(3150,3380,e),o=1-cs(3520,3750,e);n=4.2*a*o}let s=e>=4100&&e<=4650?1-cs(4100,4200,e)*(1-cs(4550,4650,e)):1,r=(Math.sin(e/Dt*Math.PI*4)*.9+Math.cos(e/Dt*Math.PI*8)*.35-.35)*s;return Math.max(0,t+n+r)}hs(Nl,"rawYAtS");function Nd(i){let e=(i%Dt+Dt)%Dt,t=(202+e/1e3).toFixed(1),n=e>=1020&&e<=1780||e>=3220&&e<=3680,s=e>=4220&&e<=4520;return e<950?{zoneName:"Ambala Cantt Express Corridor",landmarkKm:`NH-44 \xB7 KM ${t}`,speedLimitKmh:80,isBridge:n,isTollPlaza:s}:e<1900?{zoneName:"Shahbad Markanda Flyover (ROB)",landmarkKm:`NH-44 \xB7 KM ${t}`,speedLimitKmh:70,isBridge:n,isTollPlaza:s}:e<3050?{zoneName:"Sher-e-Punjab Dhaba & Agro Belt",landmarkKm:`NH-44 \xB7 KM ${t}`,speedLimitKmh:80,isBridge:n,isTollPlaza:s}:e<4050?{zoneName:"Pipli Kurukshetra Interchange",landmarkKm:`NH-44 \xB7 KM ${t}`,speedLimitKmh:80,isBridge:n,isTollPlaza:s}:{zoneName:"Karnal FASTag Toll Plaza Approach",landmarkKm:`NH-44 \xB7 KM ${t}`,speedLimitKmh:s?40:60,isBridge:n,isTollPlaza:s}}hs(Nd,"getZoneMetadata");function Vn(i){let t=Dl(i-1),n=Dl(i),s=Dl(i+1),r=Nl(i-1),a=Nl(i),o=Nl(i+1),l=-i,c=(s-t)/2,h=(o-r)/2,u=-1,d=Math.hypot(c,h,u)||1,f=c/d,x=h/d,S=u/d,m=Math.hypot(c,u)||1,p=-u/m,y=c/m,T=Math.atan2(c,-u),R=(s-2*n+t)/1/Math.pow(1+c*c,1.5),w=Math.max(-.078,Math.min(.078,-R*14)),_=h,E=Nd(i);return{s:i,x:n,y:a,z:l,tangentX:f,tangentY:x,tangentZ:S,normalX:p,normalZ:y,heading:T,curvature:R,bankAngle:w,grade:_,...E}}hs(Vn,"getRoadPointAtDistance");function _t(i,e,t=0){let n=Vn(i),s=n.x+n.normalX*e,r=n.z+n.normalZ*e,a=Math.sin(n.bankAngle)*e,o=n.y+a+t;return{x:s,y:o,z:r,sample:n}}hs(_t,"splineToWorld");function nr(i,e,t){let n=typeof t=="number"&&Math.abs(-e-t)<40?t:-e;for(let m=0;m<2;m++){let p=Vn(n),y=i-p.x,T=e-p.z,v=Math.hypot(p.tangentX,p.tangentZ)||1,R=p.tangentX/v,w=p.tangentZ/v;n+=y*R+T*w}let s=Vn(n),r=i-s.x,a=e-s.z,o=r*s.normalX+a*s.normalZ,l=Math.abs(o),c=s.isTollPlaza?15.2:9.6,h=s.isTollPlaza?17.5:12.4,u=s.isTollPlaza?.8:1.75,d="asphalt",f=0;if(l<u?(d="median",f=.18):l<=c?d="asphalt":l<=h?(d="shoulder",f=Math.sin(n*3.5)*.012-.03):(d="offroad",f=-Math.min(10,l-h)*.18+Math.sin(i*.4+n*.3)*.04),s.isBridge&&d==="asphalt"){let m=(n%40+40)%40;m<.45&&(f+=.018*Math.sin(m/.45*Math.PI))}let x=Math.sin(s.bankAngle)*o,S=s.y+x+f;return{s:n,lateralOffset:o,groundY:S,heading:s.heading,bankAngle:s.bankAngle,grade:s.grade,surfaceType:d,sample:s}}hs(nr,"projectWorldToSpline");var e_=Object.defineProperty,va=(i,e)=>e_(i,"name",{value:e,configurable:!0}),us=[{label:"R2",ratio:-8.2},{label:"R1",ratio:-11.4},{label:"N",ratio:0},{label:"1L",ratio:11.73},{label:"1H",ratio:9.21},{label:"2L",ratio:7.09},{label:"2H",ratio:5.57},{label:"3L",ratio:4.35},{label:"3H",ratio:3.41},{label:"4L",ratio:2.69},{label:"4H",ratio:2.11},{label:"5L",ratio:1.63},{label:"5H",ratio:1.28},{label:"6L",ratio:1},{label:"6H",ratio:.78}],t_=7800,n_=24200,hh=t_+n_,i_=5.2,s_=8.4,Ul=.54,Ud=5.12,r_=.91,vi=650,ir=2500,uh=2450,a_=.54,Fd=9.81,o_=1.2,l_=9.4,c_=.62,h_=.0062;function Od(i){let e=Math.max(vi,Math.min(ir+150,i));if(e<1050){let n=(e-vi)/(1050-vi);return uh*(.68+.32*n)}if(e<=1750)return uh;let t=(e-1750)/(ir-1750);return uh*Math.max(.2,1-.68*t*t)}va(Od,"computeEngineTorqueNm");function ds(i=60){let e=ni.FORWARD_OUTER,t=_t(i,e,0),n=t.sample.heading,s=Math.sin(n),r=-Math.cos(n),a=t.x-s*1.9,o=t.z-r*1.9,l=5.4,c=a-s*l,h=o-r*l,u=nr(c,h,i-7.3),d=[{id:"FL",contactY:t.y,compression:.35,rotationRad:0,steerAngleRad:0,slipRatio:0},{id:"FR",contactY:t.y,compression:.35,rotationRad:0,steerAngleRad:0,slipRatio:0},{id:"ML",contactY:t.y,compression:.4,rotationRad:0,steerAngleRad:0,slipRatio:0},{id:"MR",contactY:t.y,compression:.4,rotationRad:0,steerAngleRad:0,slipRatio:0},{id:"RL",contactY:t.y,compression:.4,rotationRad:0,steerAngleRad:0,slipRatio:0},{id:"RR",contactY:t.y,compression:.4,rotationRad:0,steerAngleRad:0,slipRatio:0}];return{x:t.x,y:t.y,z:t.z,heading:n,pitch:-t.sample.grade,roll:t.sample.bankAngle,speedMs:0,speedKmh:0,lateralVelocityMs:0,yawRateRadS:0,accelerationMs2:0,steerAngleRad:0,wheelRotationRad:0,wheels:d,rpm:vi,gearIndex:5,gearLabel:us[5].label,transmissionMode:"auto",shiftCooldownS:0,turboBoostBar:.05,engineLoad:.1,airPressurePsi:118,fuelLiters:385,fuelMaxLiters:400,fuelConsumptionL100Km:0,airBrakeReleaseTrigger:0,gearShiftTrigger:0,trailerX:c,trailerY:u.groundY,trailerZ:h,trailerHeading:n,trailerPitch:-u.grade,trailerRoll:u.bankAngle,articulationAngleRad:0,jackknifeWarning:!1,distanceAlongHighwayM:i,totalDistanceDrivenM:0,lateralOffsetM:e,currentSurface:"asphalt",zoneName:t.sample.zoneName,landmarkKm:t.sample.landmarkKm,speedLimitKmh:t.sample.speedLimitKmh,nextWaypointName:Ma[1].name,nextWaypointDistanceM:Ma[1].s-i,cargoIntegrityPct:100,headlightsOn:!1,highBeamOn:!1,indicator:"off",indicatorBlinkOn:!1,hornActive:!1,hitstopTimerS:0,cameraTrauma:0,lastImpactSeverity:0}}va(ds,"createInitialTruckState");function ii(i){for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;return i}va(ii,"normalizeAngleRad");function dh(i,e,t,n=0){let s=Math.max(1e-4,Math.min(t,.05));if(i.cameraTrauma=Math.max(0,i.cameraTrauma-s*1.45),i.hitstopTimerS>0)return i.hitstopTimerS=Math.max(0,i.hitstopTimerS-s),i;let r=Math.abs(i.speedMs)*3.6,a=1/(1+Math.pow(r/42,1.45)),o=a_*Math.max(.22,a),l=-e.steer*o,c=e.steer!==0?2.4:3.2;i.steerAngleRad+=(l-i.steerAngleRad)*(1-Math.exp(-c*s)),i.indicatorBlinkOn=i.indicator!=="off"&&Math.floor(n*2.6)%2===0,i.shiftCooldownS>0&&(i.shiftCooldownS=Math.max(0,i.shiftCooldownS-s));let h=va(W=>{let te=Math.max(0,Math.min(us.length-1,W));te!==i.gearIndex&&(i.gearIndex=te,i.gearLabel=us[te].label,i.shiftCooldownS=.14,i.gearShiftTrigger+=1)},"triggerShift"),d=us[i.gearIndex].ratio*Ud,f=i.speedMs/Ul,x=Math.abs(d)>.01?Math.abs(f*d*(60/(Math.PI*2))):vi;if(e.shiftUpJustPressed)h(i.gearIndex+1);else if(e.shiftDownJustPressed)h(i.gearIndex-1);else if(i.transmissionMode==="auto"&&i.shiftCooldownS<=0){if(i.gearIndex<=2&&e.throttle>.1&&i.speedMs>=-.4)h(5);else if(i.gearIndex>=3){let W=e.throttle>.75?1780:1620,te=940;if(x>W&&i.gearIndex<us.length-1){let Le=i.gearIndex<9&&x>1950?2:1;h(Math.min(us.length-1,i.gearIndex+Le))}else x<te&&e.throttle<.3&&i.gearIndex>5&&i.speedMs>2.5&&h(i.gearIndex-1)}}let S=us[i.gearIndex],m=S.ratio*Ud,p=e.throttle,y=e.brake;i.transmissionMode==="auto"&&i.gearIndex<2&&(e.brake>0&&e.throttle===0?(p=e.brake,y=0):e.throttle>0&&(y=e.throttle,p=0)),e.serviceAirBrake&&(y=1,p=0);let T=i.speedMs/Ul,v=Math.abs(m)>.01?Math.abs(T*m*(60/(Math.PI*2))):vi,R=vi+p*720,w=S.ratio===0||i.shiftCooldownS>0?vi+p*1150:Math.max(R,Math.min(ir,v));i.rpm+=(w-i.rpm)*(1-Math.exp(-14*s)),i.engineLoad=i.shiftCooldownS>0?.15:Math.min(1,p*.88+(i.rpm-vi)/4e3);let _=i.shiftCooldownS>0?.15:Math.max(0,Math.min(1.8,p*1.65*Math.max(0,(i.rpm-850)/1100)));i.turboBoostBar+=(_-i.turboBoostBar)*(1-Math.exp(-4.5*s));let E=0;if(S.ratio!==0&&i.shiftCooldownS<=0){let W=Od(i.rpm),te=Math.abs(i.speedMs)<5?1.45:1,Le=i.rpm>=ir-40?Math.max(0,(ir-i.rpm)/40):1;if(E=W*p*m*r_*te*Le/Ul,p<.05&&Math.abs(i.speedMs)>.5){let Ue=e.engineBrakeActive?2.4:1,A=Math.abs(m)*165*(i.rpm/1500)*Ue;E-=Math.sign(i.speedMs)*A}}let L=nr(i.x,i.z,i.distanceAlongHighwayM),P=L.surfaceType==="asphalt"?1:L.surfaceType==="shoulder"?1.75:3.2,O=.5*o_*c_*l_*i.speedMs*Math.abs(i.speedMs),G=(Math.abs(i.speedMs)>.05?Math.sign(i.speedMs):0)*hh*Fd*h_*P,K=Math.cos(i.heading-L.heading),D=L.grade*K,H=hh*Fd*Math.sin(Math.atan(D)),X=Math.min(1,Math.max(.35,i.airPressurePsi/100)),Y=(e.serviceAirBrake?24e4:195e3)*X,ce=Math.abs(i.speedMs)>.02?Math.sign(i.speedMs)*y*Y:0;y>.15?i.airPressurePsi=Math.max(65,i.airPressurePsi-y*3.2*s):i.airPressurePsi=Math.min(122,i.airPressurePsi+(1.2+i.rpm/1500*1.8)*s);let $=E-O-G-H-ce,ie=i.speedMs,re=$/hh,me=i.speedMs+re*s;p<.02&&(y>.05||Math.abs(me)<.08)&&Math.sign(me)!==Math.sign(ie)&&Math.abs(ie)<.8&&(me=0,y>.4&&(i.airBrakeReleaseTrigger+=1)),i.speedMs=Math.max(-6.5,Math.min(30.5,me)),i.speedKmh=Math.abs(i.speedMs)*3.6,i.accelerationMs2=(i.speedMs-ie)/s;let ze=Math.tan(i.steerAngleRad)/i_,Q=1/(1+Math.abs(i.articulationAngleRad)*.35);i.yawRateRadS=i.speedMs*ze*Q,i.heading=ii(i.heading+i.yawRateRadS*s);let Te=Math.sin(i.heading),Ie=-Math.cos(i.heading);i.x+=Te*i.speedMs*s,i.z+=Ie*i.speedMs*s;let we=nr(i.x,i.z,i.distanceAlongHighwayM);i.distanceAlongHighwayM=we.s,i.lateralOffsetM=we.lateralOffset,i.currentSurface=we.surfaceType,i.zoneName=we.sample.zoneName,i.landmarkKm=we.sample.landmarkKm,i.speedLimitKmh=we.sample.speedLimitKmh,i.totalDistanceDrivenM+=Math.abs(i.speedMs)*s;let ve=we.sample.isTollPlaza?16.5:12.8;if(Math.abs(we.lateralOffset)>ve){let W=Math.sign(we.lateralOffset)*ve,te=_t(we.s,W,0);i.x=te.x,i.z=te.z,i.lateralOffsetM=W;let Le=ii(we.sample.heading-i.heading);i.heading=ii(i.heading+Le*.35),i.speedKmh>25&&(i.speedMs*=.88,i.cameraTrauma=Math.min(1,i.cameraTrauma+.35),i.cargoIntegrityPct=Math.max(0,i.cargoIntegrityPct-1.5))}if(!we.sample.isTollPlaza&&Math.abs(we.lateralOffset)<1.35){let W=we.lateralOffset<=0?-1.42:1.42,te=_t(we.s,W,0);i.x=te.x,i.z=te.z,i.lateralOffsetM=W;let Le=ii(we.sample.heading-i.heading);i.heading=ii(i.heading+Le*.45),i.speedKmh>20&&(i.speedMs*=.82,i.cameraTrauma=Math.min(1,i.cameraTrauma+.45),i.cargoIntegrityPct=Math.max(0,i.cargoIntegrityPct-2.5),i.lastImpactSeverity=.5)}i.y+=(we.groundY-i.y)*(1-Math.exp(-22*s));let Ge=-we.grade+Math.max(-.055,Math.min(.045,i.accelerationMs2*.0085)),ut=i.speedMs*i.yawRateRadS,Ve=we.bankAngle+Math.max(-.08,Math.min(.08,-ut*.014));i.pitch+=(Ge-i.pitch)*(1-Math.exp(-10*s)),i.roll+=(Ve-i.roll)*(1-Math.exp(-10*s)),i.wheelRotationRad=(i.wheelRotationRad+i.speedMs/Ul*s)%(Math.PI*2e3);let $e=(i.currentSurface==="shoulder"?.08:.015)*Math.sin(i.distanceAlongHighwayM*2.2);for(let W=0;W<i.wheels.length;W++){let te=i.wheels[W],Le=W<2,fe=W%2===0;te.rotationRad=i.wheelRotationRad,te.steerAngleRad=Le?i.steerAngleRad:0;let Ue=(Le?-1:1)*i.pitch*2.2,A=(fe?-1:1)*i.roll*2;te.compression=Math.max(.05,Math.min(.95,.4+Ue+A+(fe?$e:-$e))),te.contactY=i.y}let Qe=i.x-Te*1.9,ne=i.z-Ie*1.9,_e=ii(i.heading-i.trailerHeading),xe=i.speedMs/s_*Math.sin(_e);i.trailerHeading=ii(i.trailerHeading+xe*s);let V=ii(i.heading-i.trailerHeading),Ee=1.25;Math.abs(V)>Ee&&(V=Math.sign(V)*Ee,i.trailerHeading=ii(i.heading-V)),i.articulationAngleRad=V,i.jackknifeWarning=Math.abs(V)>.78;let qe=Math.sin(i.trailerHeading),ae=-Math.cos(i.trailerHeading),st=5.4;i.trailerX=Qe-qe*st,i.trailerZ=ne-ae*st;let rt=nr(i.trailerX,i.trailerZ,i.distanceAlongHighwayM-7.3);i.trailerY+=(rt.groundY-i.trailerY)*(1-Math.exp(-18*s)),i.trailerPitch+=(-rt.grade-i.trailerPitch)*(1-Math.exp(-10*s)),i.trailerRoll+=(rt.bankAngle+i.roll*.45-i.trailerRoll)*(1-Math.exp(-10*s));let tt=.0012+i.rpm/ir*p*.016;i.fuelLiters=Math.max(0,i.fuelLiters-tt*s),i.fuelConsumptionL100Km=i.speedKmh>5?Math.min(85,Math.round(tt*3600/i.speedKmh*100*10)/10):0;let F=(i.distanceAlongHighwayM%Dt+Dt)%Dt,yt=Ma[0],nt=Dt-F;for(let W of Ma)if(W.s>F+20){yt=W,nt=W.s-F;break}return i.nextWaypointName=yt.name,i.nextWaypointDistanceM=Math.max(0,Math.round(nt)),i}va(dh,"stepTruckPhysics");var u_=Object.defineProperty,ph=(i,e)=>u_(i,"name",{value:e,configurable:!0}),d_={lorry:{minSpeedKmh:48,maxSpeedKmh:64,lengthM:9.6,widthM:2.5,colors:[14251782,11817737,1409085,12131356,1920728]},bus:{minSpeedKmh:64,maxSpeedKmh:78,lengthM:11.4,widthM:2.55,colors:[165063,14427686,366185,15381256]},sedan:{minSpeedKmh:72,maxSpeedKmh:92,lengthM:4.5,widthM:1.85,colors:[16317180,9741240,3359061,14427686,2450411,14251782]},pickup:{minSpeedKmh:52,maxSpeedKmh:68,lengthM:5.1,widthM:1.92,colors:[15857145,15381256,1013358,7893356]}};function fh(i){let e=Math.sin(i*12.9898+78.233)*43758.5453;return e-Math.floor(e)}ph(fh,"seededRandom");function ya(i=60){let e=["lorry","bus","sedan","pickup"],t=[];for(let n=0;n<24;n++){let s=n<14,r=s?1:-1,a=e[n%e.length],o=d_[a],l=fh(n*17+3),c=fh(n*31+11),h=a==="sedan"||a==="bus"&&l>.45,u=s?h?ni.FORWARD_INNER:ni.FORWARD_OUTER:h?ni.ONCOMING_INNER:ni.ONCOMING_OUTER,d=0;s?d=55+n*38:d=90+(n-14)*58;let f=i+d,S=(o.minSpeedKmh+c*(o.maxSpeedKmh-o.minSpeedKmh))/3.6,m=_t(f,u,0),p=r===1?m.sample.heading:m.sample.heading+Math.PI;t.push({id:n+1,archetype:a,direction:r,s:f,laneOffset:u,targetLaneOffset:u,speedMs:S*.9,desiredSpeedMs:S,lengthM:o.lengthM,widthM:o.widthM,colorHex:o.colors[n%o.colors.length],x:m.x,y:m.y,z:m.z,heading:p,pitch:-m.sample.grade*r,roll:m.sample.bankAngle*r,wheelRotationRad:0,indicator:"off",laneChangeCooldownS:3+n%5,braking:!1})}return t}ph(ya,"createInitialTrafficFleet");function Fl(i,e,t){let n=Math.max(1e-4,Math.min(t,.05));for(let s=0;s<i.length;s++){let r=i[s];r.laneChangeCooldownS=Math.max(0,r.laneChangeCooldownS-n);let a=999,o=r.desiredSpeedMs;for(let _=0;_<i.length;_++){if(s===_)continue;let E=i[_];if(E.direction!==r.direction||Math.abs(E.laneOffset-r.laneOffset)>2.1)continue;let L=(E.s-r.s)*r.direction,P=L-(r.lengthM*.5+E.lengthM*.5);L>0&&P<a&&(a=P,o=E.speedMs)}if(r.direction===1&&Math.abs(e.lateralOffsetM-r.laneOffset)<2.4){let E=e.distanceAlongHighwayM-r.s,L=E-(r.lengthM*.5+11.5);E>-4&&L<a&&(a=L,o=Math.max(0,e.speedMs))}if(r.direction===1&&r.laneChangeCooldownS<=0&&Math.abs(r.laneOffset-r.targetLaneOffset)<.15&&a<28&&o<r.desiredSpeedMs*.85){let _=Math.abs(r.laneOffset-ni.FORWARD_OUTER)<1?ni.FORWARD_INNER:ni.FORWARD_OUTER,E=!0;if(Math.abs(e.lateralOffsetM-_)<2.5&&Math.abs(e.distanceAlongHighwayM-r.s)<28&&(E=!1),E)for(let L=0;L<i.length;L++){if(s===L)continue;let P=i[L];if(P.direction===1&&Math.abs(P.laneOffset-_)<2.2&&Math.abs(P.s-r.s)<26){E=!1;break}}E&&(r.targetLaneOffset=_,r.laneChangeCooldownS=7.5)}let l=1.6,c=6.5,h=r.speedMs-o,u=c+Math.max(0,r.speedMs*l+r.speedMs*h/(2*Math.sqrt(1.8*3.2))),d=1-Math.pow(r.speedMs/Math.max(1,r.desiredSpeedMs),4),f=a<120?Math.pow(u/Math.max(1.5,a),2):0,x=Math.max(-6.5,Math.min(2,1.8*(d-f)));r.braking=x<-.65||a<12,r.speedMs=Math.max(0,Math.min(r.desiredSpeedMs*1.05,r.speedMs+x*n)),r.s+=r.speedMs*r.direction*n;let S=r.targetLaneOffset-r.laneOffset;if(Math.abs(S)>.05){let _=Math.sign(S)*Math.min(Math.abs(S),1.85*n);r.laneOffset+=_,r.indicator=S>0?"right":"left"}else r.laneOffset=r.targetLaneOffset,r.indicator="off";let m=r.s-e.distanceAlongHighwayM;r.direction===1?m<-140?r.s=e.distanceAlongHighwayM+380+r.id%7*18:m>520&&(r.s=e.distanceAlongHighwayM-95-r.id%5*14):m<-140?r.s=e.distanceAlongHighwayM+440+r.id%8*22:m>560&&(r.s=e.distanceAlongHighwayM+420);let p=_t(r.s,r.laneOffset,0);r.x=p.x,r.y=p.y,r.z=p.z;let y=Math.atan2(r.targetLaneOffset-r.laneOffset,12)*.35;r.heading=(r.direction===1?p.sample.heading:p.sample.heading+Math.PI)+y,r.pitch=-p.sample.grade*r.direction,r.roll=p.sample.bankAngle*r.direction,r.wheelRotationRad=(r.wheelRotationRad+r.speedMs/.45*n)%(Math.PI*1e3);let T=Math.abs(r.s-e.distanceAlongHighwayM),v=Math.abs(r.laneOffset-e.lateralOffsetM),R=r.lengthM*.5+3.8,w=r.widthM*.5+1.25;if(T<R&&v<w){if(v>T*.28){let E=e.lateralOffsetM>=r.laneOffset?1:-1;e.lateralOffsetM+=E*(w-v+.25);let L=_t(e.distanceAlongHighwayM,e.lateralOffsetM,0);e.x=L.x,e.z=L.z}else e.distanceAlongHighwayM<r.s?(e.speedMs=Math.min(e.speedMs,r.speedMs*r.direction*.75),r.s+=1.5):(r.speedMs*=.6,r.s-=1.5);let _=Math.abs(e.speedMs-r.speedMs*r.direction);_>2.5&&(e.hitstopTimerS=Math.min(.06,.025+_*.002),e.cameraTrauma=Math.min(1,e.cameraTrauma+.35+_*.03),e.cargoIntegrityPct=Math.max(0,Math.round((e.cargoIntegrityPct-Math.min(12,2+_*.45))*10)/10),e.lastImpactSeverity=Math.min(1,_/15))}}}ph(Fl,"stepTrafficSimulation");var f_=Object.defineProperty,Ln=(i,e)=>f_(i,"name",{value:e,configurable:!0});function xh(i){i.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
       varying vec3 vWorldPosMicro;`),e.vertexShader=e.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
       vWorldPosMicro = (modelMatrix * vec4(transformed, 1.0)).xyz;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
       varying vec3 vWorldPosMicro;
       float hash12Micro(vec2 p) {
         vec3 p3 = fract(vec3(p.xyx) * 0.1031);
         p3 += dot(p3, p3.yzx + 33.33);
         return fract((p3.x + p3.y) * p3.z);
       }`),e.fragmentShader=e.fragmentShader.replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
       float microStone = hash12Micro(floor(vWorldPosMicro.xz * 38.0));
       float macroPatch = sin(vWorldPosMicro.z * 0.09 + vWorldPosMicro.x * 0.25) * 0.5 + 0.5;
       roughnessFactor = clamp(roughnessFactor + (microStone - 0.5) * 0.12 - macroPatch * 0.05, 0.22, 0.95);
       diffuseColor.rgb *= (0.94 + microStone * 0.12);`)},i.needsUpdate=!0}Ln(xh,"applyUltraMicroShaderToAsphalt");function _h(i){i.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
       varying vec3 vLocalPosFlake;`),e.vertexShader=e.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
       vLocalPosFlake = position;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
       varying vec3 vLocalPosFlake;
       float flakeHash(vec3 p) {
         p = fract(p * 0.3183099 + 0.1);
         p *= 17.0;
         return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
       }`),e.fragmentShader=e.fragmentShader.replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
       float flake = flakeHash(floor(vLocalPosFlake * 95.0));
       roughnessFactor = clamp(roughnessFactor - flake * 0.06, 0.08, 0.45);
       diffuseColor.rgb += vec3(flake * 0.045, flake * 0.02, 0.0);`)},i.needsUpdate=!0}Ln(_h,"applyUltraFlakeShaderToPaint");function Fi(i,e=2.6,t=8){let n=i.width,s=i.height,a=i.getContext("2d").getImageData(0,0,n,s).data,o=document.createElement("canvas");o.width=n,o.height=s;let l=o.getContext("2d"),c=l.createImageData(n,s),h=c.data,u=Ln((f,x)=>{let S=(f+n)%n,m=(x+s)%s;return a[(m*n+S)*4]/255},"sampleHeight");for(let f=0;f<s;f++)for(let x=0;x<n;x++){let S=u(x-1,f),m=u(x+1,f),p=u(x,f-1),y=u(x,f+1),T=(S-m)*e,v=(p-y)*e,R=1,w=1/Math.sqrt(T*T+v*v+R*R),_=(f*n+x)*4;h[_]=Math.round((T*w*.5+.5)*255),h[_+1]=Math.round((v*w*.5+.5)*255),h[_+2]=Math.round((R*w*.5+.5)*255),h[_+3]=255}l.putImageData(c,0,0);let d=new kt(o);return d.colorSpace=In,d.wrapS=on,d.wrapT=on,d.anisotropy=t,d}Ln(Fi,"createNormalMapFromHeightCanvas");function mh(i,e){let t=i.width,n=t/1024,s=i.getContext("2d");s.fillStyle="#1f2226",s.fillRect(0,0,t,t);let r=s.createLinearGradient(0,0,118*n,0);r.addColorStop(0,"#443c32"),r.addColorStop(.75,"#332f2a"),r.addColorStop(1,"#222428"),s.fillStyle=r,s.fillRect(0,0,118*n,t);let a=s.createLinearGradient(906*n,0,t,0);a.addColorStop(0,"#222428"),a.addColorStop(.25,"#332f2a"),a.addColorStop(1,"#443c32"),s.fillStyle=a,s.fillRect(906*n,0,118*n,t);let o=s.createLinearGradient(418*n,0,606*n,0);o.addColorStop(0,"rgba(28, 25, 22, 0)"),o.addColorStop(.12,"rgba(68, 58, 45, 0.55)"),o.addColorStop(.5,"rgba(18, 16, 15, 0.85)"),o.addColorStop(.88,"rgba(68, 58, 45, 0.55)"),o.addColorStop(1,"rgba(28, 25, 22, 0)"),s.fillStyle=o,s.fillRect(418*n,0,188*n,t);let l=[.188,.342,.658,.812];for(let u of l){let d=u*t,f=64*n,x=s.createLinearGradient(d-f,0,d+f,0);x.addColorStop(0,"rgba(12, 14, 17, 0)"),x.addColorStop(.24,"rgba(10, 12, 15, 0.54)"),x.addColorStop(.5,"rgba(28, 31, 36, 0.16)"),x.addColorStop(.76,"rgba(10, 12, 15, 0.54)"),x.addColorStop(1,"rgba(12, 14, 17, 0)"),s.fillStyle=x,s.fillRect(d-f,0,f*2,t)}for(let u=0;u<e;u++){let d=u*7919%t,f=u*6271%t,x=24+u*37%34;s.fillStyle=`rgb(${x}, ${x+1}, ${x+3})`,s.fillRect(d,f,u%3===0?3:2,2)}s.fillStyle="rgba(14, 16, 19, 0.68)",s.fillRect(158*n,180*n,54*n,195*n),s.fillRect(318*n,640*n,66*n,145*n),s.fillRect(675*n,380*n,56*n,165*n),s.strokeStyle="rgba(10, 11, 13, 0.82)",s.lineWidth=2.5*n;for(let u of[212,365,695,835]){s.beginPath(),s.moveTo(u*n,0);for(let d=64;d<=1024;d+=64)s.lineTo((u+Math.sin(d*.04+u)*8)*n,d*n);s.stroke()}s.fillStyle="#f1f5f9",s.fillRect(110*n,0,10*n,t),s.fillRect(904*n,0,10*n,t),s.fillStyle="#facc15",s.fillRect(422*n,0,10*n,t),s.fillRect(592*n,0,10*n,t),s.fillStyle="#f8fafc";let c=Math.round(.265*t)-5*n,h=Math.round(.735*t)-5*n;for(let u=20;u<1024;u+=128)s.fillRect(c,u*n,10*n,62*n),s.fillRect(h,u*n,10*n,62*n);s.fillStyle="rgba(226, 232, 240, 0.44)";for(let u=0;u<1024;u+=24)s.fillRect(86*n,u*n,18*n,10*n),s.fillRect(920*n,u*n,18*n,10*n)}Ln(mh,"paintAsphaltCanvas");function gh(i){let e=i.width,t=i.height,n=e/1024,s=t/512,r=i.getContext("2d");r.fillStyle="#173152",r.fillRect(0,0,e,t);for(let a=0;a<1024;a+=16)r.fillStyle="rgba(0, 0, 0, 0.25)",r.fillRect(a*n,26*s,6*n,460*s),r.fillStyle="rgba(255, 255, 255, 0.11)",r.fillRect((a+6)*n,26*s,4*n,460*s);r.fillStyle="#0c1d33",r.fillRect(0,0,e,32*s),r.fillRect(0,480*s,e,32*s),r.fillRect(0,0,28*n,t),r.fillRect(996*n,0,28*n,t),r.fillStyle="#f59e0b",r.fillRect(60*n,148*s,904*n,14*s),r.fillRect(60*n,346*s,904*n,8*s),r.fillStyle="#f8fafc",r.font=`700 ${Math.round(54*n)}px "Chakra Petch", sans-serif`,r.fillText("BHARAT FREIGHT CORRIDOR",84*n,232*s),r.fillStyle="#fbbf24",r.font=`600 ${Math.round(28*n)}px "Plus Jakarta Sans", sans-serif`,r.fillText("NH-44 GRAND TRUNK EXPRESS \xB7 HEAVY HAUL LOGISTICS \xB7 IN-HR-44",88*n,284*s),r.fillStyle="#e2e8f0",r.font=`600 ${Math.round(22*n)}px "JetBrains Mono", monospace`,r.fillText("BFCL 449280-7",775*n,92*s),r.fillText("45G1 \xB7 MAX GROSS 32,500 KG",682*n,122*s);for(let a=32;a<992;a+=48)r.fillStyle=a%96===32?"#ef4444":"#f8fafc",r.fillRect(a*n,488*s,36*n,12*s)}Ln(gh,"paintContainerSideCanvas");function Mh(i=8){let e=document.createElement("canvas");e.width=1024,e.height=1024,mh(e,26e3);let t=document.createElement("canvas");t.width=512,t.height=512;let n=t.getContext("2d"),s=document.createElement("canvas");s.width=512,s.height=512;let r=s.getContext("2d");r.fillStyle="rgb(212, 212, 212)",r.fillRect(0,0,512,512),r.fillStyle="rgb(242, 242, 242)",r.fillRect(0,0,58,512),r.fillRect(454,0,58,512);let a=[.188,.342,.658,.812];for(let W of a){let te=W*512,Le=r.createLinearGradient(te-32,0,te+32,0);Le.addColorStop(0,"rgba(210, 210, 210, 0)"),Le.addColorStop(.25,"rgba(88, 88, 88, 0.88)"),Le.addColorStop(.5,"rgba(175, 175, 175, 0.4)"),Le.addColorStop(.75,"rgba(88, 88, 88, 0.88)"),Le.addColorStop(1,"rgba(210, 210, 210, 0)"),r.fillStyle=Le,r.fillRect(te-32,0,64,512)}r.fillStyle="rgb(75, 75, 75)",r.fillRect(79,90,27,97),r.fillRect(159,320,33,72),n.fillStyle="#808080",n.fillRect(0,0,512,512);for(let W=0;W<24e3;W++){let te=W*4999%512,Le=W*3571%512,fe=74+W*53%108;n.fillStyle=`rgb(${fe},${fe},${fe})`,n.fillRect(te,Le,2,2)}n.fillStyle="#252525";for(let W=0;W<512;W+=12)n.fillRect(44,W,8,5),n.fillRect(460,W,8,5);let o=new kt(e);o.colorSpace=Ct,o.wrapS=an,o.wrapT=on,o.anisotropy=i;let l=Fi(t,3.1,i);l.repeat.set(4,1);let c=new kt(s);c.colorSpace=In,c.wrapS=an,c.wrapT=on,c.anisotropy=i;let h=document.createElement("canvas");h.width=512,h.height=512;let u=h.getContext("2d");u.fillStyle="#827e77",u.fillRect(0,0,512,512);let d=u.createLinearGradient(0,0,0,512);d.addColorStop(0,"rgba(30, 28, 25, 0.28)"),d.addColorStop(.25,"rgba(255, 255, 255, 0.05)"),d.addColorStop(.8,"rgba(40, 35, 28, 0.18)"),d.addColorStop(1,"rgba(28, 24, 18, 0.62)"),u.fillStyle=d,u.fillRect(0,0,512,512);for(let W=0;W<6500;W++){let te=W*1999%512,Le=W*2903%512,fe=96+W*23%42;u.fillStyle=`rgb(${fe}, ${fe-2}, ${fe-5})`,u.fillRect(te,Le,3,3)}u.strokeStyle="rgba(32, 30, 27, 0.48)",u.lineWidth=3,u.strokeRect(4,4,504,248),u.strokeRect(4,256,504,252),u.fillStyle="#272522";for(let W of[64,256,448])for(let te of[64,192,320,448])u.beginPath(),u.arc(W,te,5,0,Math.PI*2),u.fill();let f=new kt(h);f.colorSpace=Ct,f.wrapS=on,f.wrapT=on,f.anisotropy=i;let x=Fi(h,2.2,i),S=document.createElement("canvas");S.width=512,S.height=128;let m=S.getContext("2d");m.fillStyle="#eab308",m.fillRect(0,0,512,128),m.fillStyle="#18181b";for(let W=-128;W<640;W+=96)m.beginPath(),m.moveTo(W,0),m.lineTo(W+48,0),m.lineTo(W+16,128),m.lineTo(W-32,128),m.closePath(),m.fill();let p=m.createLinearGradient(0,75,0,128);p.addColorStop(0,"rgba(24, 22, 18, 0)"),p.addColorStop(1,"rgba(24, 22, 18, 0.58)"),m.fillStyle=p,m.fillRect(0,75,512,53);let y=new kt(S);y.colorSpace=Ct,y.wrapS=on,y.wrapT=an,y.anisotropy=i;let T=document.createElement("canvas");T.width=256,T.height=128;let v=T.getContext("2d"),R=v.createLinearGradient(0,0,0,128);R.addColorStop(0,"#94a3b8"),R.addColorStop(.22,"#e2e8f0"),R.addColorStop(.5,"#475569"),R.addColorStop(.78,"#e2e8f0"),R.addColorStop(1,"#64748b"),v.fillStyle=R,v.fillRect(0,0,256,128),v.fillStyle="#334155";for(let W=16;W<256;W+=64)v.fillRect(W,12,4,104),v.beginPath(),v.arc(W+10,64,5,0,Math.PI*2),v.fill();v.fillStyle="#ef4444",v.fillRect(118,52,20,24),v.fillStyle="#f8fafc",v.fillRect(138,52,10,24);let w=new kt(T);w.colorSpace=Ct,w.wrapS=on,w.wrapT=an,w.anisotropy=i;let _=Fi(T,3,i),E=document.createElement("canvas");E.width=1024,E.height=1024;let L=E.getContext("2d");L.fillStyle="#4a432f",L.fillRect(0,0,1024,1024);let P=["#3d5220","#5e582c","#6b572b","#2f4419","#7a6424","#475927","#574829","#384c1e"];for(let W=0;W<8;W++)for(let te=0;te<4;te++){let Le=te*256,fe=W*128;if(L.fillStyle=P[(W*3+te)%P.length],L.fillRect(Le+4,fe+4,248,120),L.fillStyle="rgba(22, 20, 13, 0.26)",(W+te)%2===0)for(let A=8;A<120;A+=8)L.fillRect(Le+6,fe+A,244,3);else for(let A=8;A<248;A+=8)L.fillRect(Le+A,fe+6,3,116);L.strokeStyle="#3b3222",L.lineWidth=6,L.strokeRect(Le+2,fe+2,252,124)}for(let W=0;W<16e3;W++){let te=W*3917%1024,Le=W*2851%1024;L.fillStyle=W%3===0?"rgba(198, 168, 72, 0.18)":W%3===1?"rgba(32, 44, 16, 0.22)":"rgba(92, 74, 46, 0.18)",L.fillRect(te,Le,4,4)}let O=new kt(E);O.colorSpace=Ct,O.wrapS=on,O.wrapT=on,O.repeat.set(28,28),O.anisotropy=i;let G=Fi(E,2.4,i);G.repeat.set(28,28);let K=document.createElement("canvas");K.width=1024,K.height=512,gh(K);let D=new kt(K);D.colorSpace=Ct,D.anisotropy=i;let H=document.createElement("canvas");H.width=512,H.height=512;let X=H.getContext("2d");X.fillStyle="#152c4a",X.fillRect(0,0,512,512);for(let W=24;W<488;W+=24)X.fillStyle="rgba(0,0,0,0.22)",X.fillRect(W,28,10,456);X.fillStyle="#090d14",X.fillRect(252,20,8,472),X.strokeStyle="#090d14",X.lineWidth=10,X.strokeRect(18,20,476,472),X.fillStyle="#facc15",X.fillRect(42,390,160,54),X.fillRect(310,390,160,54),X.fillStyle="#dc2626",X.fillRect(48,396,70,42),X.fillRect(384,396,70,42),X.fillStyle="#f8fafc",X.font='700 22px "JetBrains Mono", monospace',X.fillText("BFCL 449280-7",280,95),X.fillStyle="#fbbf24",X.font='700 24px "Chakra Petch", sans-serif',X.fillText("SPEED LIMIT 60 KM/H",44,95),X.fillText("KEEP 15M DISTANCE",44,130);let Y=new kt(H);Y.colorSpace=Ct,Y.anisotropy=i;let ce=document.createElement("canvas");ce.width=512,ce.height=256;let $=ce.getContext("2d");$.fillStyle="#808080",$.fillRect(0,0,512,256);for(let W=0;W<512;W+=8)$.fillStyle="#e0e0e0",$.fillRect(W,14,4,228),$.fillStyle="#282828",$.fillRect(W+4,14,4,228);let ie=Fi(ce,3.2,i),re=document.createElement("canvas");re.width=512,re.height=512;let me=re.getContext("2d");me.fillStyle="#92400e",me.fillRect(0,0,512,512);for(let W=0;W<512;W+=42)me.fillStyle="rgba(24, 16, 8, 0.35)",me.fillRect(16,W,480,6);me.fillStyle="#facc15",me.fillRect(36,48,440,120),me.strokeStyle="#dc2626",me.lineWidth=8,me.strokeRect(42,54,428,108),me.fillStyle="#18181b",me.textAlign="center",me.font='700 44px "Chakra Petch", sans-serif',me.fillText("HORN  OK  PLEASE",256,122),me.fillStyle="#10b981",me.fillRect(198,70,116,68),me.fillStyle="#ffffff",me.fillText("OK",256,120),me.fillStyle="#fef08a",me.font='700 32px "Plus Jakarta Sans", sans-serif',me.fillText("ALL INDIA PERMIT \xB7 NH-44",256,260),me.fillStyle="#ef4444",me.fillRect(36,420,440,38),me.fillStyle="#ffffff",me.font='700 24px "JetBrains Mono", monospace',me.fillText("USE DIPPER AT NIGHT \xB7 BLOW HORN",256,446);let ze=new kt(re);ze.colorSpace=Ct,ze.anisotropy=i;let Q=document.createElement("canvas");Q.width=256,Q.height=256;let Te=Q.getContext("2d");Te.fillStyle="#808080",Te.fillRect(0,0,256,256);for(let W=0;W<9e3;W++){let te=W*1777%256,Le=W*2311%256,fe=95+W*29%65;Te.fillStyle=`rgb(${fe},${fe},${fe})`,Te.fillRect(te,Le,2,2)}let Ie=Fi(Q,1.8,i);Ie.repeat.set(8,8);let we=document.createElement("canvas");we.width=256,we.height=256;let ve=we.getContext("2d");ve.fillStyle="#303030",ve.fillRect(0,0,256,256),ve.fillStyle="#d8d8d8";for(let W=0;W<256;W+=24)ve.fillRect(14,W,48,16),ve.fillRect(72,W+6,48,16),ve.fillRect(136,W,48,16),ve.fillRect(194,W+6,48,16);let Ge=Fi(we,3.6,i);Ge.repeat.set(1,6);let ut=document.createElement("canvas");ut.width=256,ut.height=256;let Ve=ut.getContext("2d");Ve.fillStyle="#4a3728",Ve.fillRect(0,0,256,256);for(let W=0;W<1200;W++){let te=W*733%256,Le=W*919%256;Ve.fillStyle=W%2===0?"#36271c":"#5e4735",Ve.fillRect(te,Le,4,24)}let $e=new kt(ut);$e.colorSpace=Ct,$e.wrapS=on,$e.wrapT=on;let Qe=document.createElement("canvas");Qe.width=512,Qe.height=512;let ne=Qe.getContext("2d");ne.clearRect(0,0,512,512);for(let W=0;W<95;W++){let te=W*2.39996%(Math.PI*2),Le=Math.sqrt(W/95)*195,fe=256+Math.cos(te)*Le,Ue=256+Math.sin(te)*Le,A=Math.max(0,1-Le/215),M=28+W*37%54,k=ne.createRadialGradient(fe,Ue,2,fe,Ue,M);k.addColorStop(0,`rgba(255, 252, 246, ${(.18*A).toFixed(3)})`),k.addColorStop(.55,`rgba(255, 248, 238, ${(.07*A).toFixed(3)})`),k.addColorStop(1,"rgba(255, 248, 238, 0)"),ne.fillStyle=k,ne.beginPath(),ne.arc(fe,Ue,M,0,Math.PI*2),ne.fill()}let _e=new kt(Qe);_e.colorSpace=Ct,_e.wrapS=an,_e.wrapT=an;let xe=document.createElement("canvas");xe.width=1024,xe.height=512;let V=xe.getContext("2d"),Ee=new kt(xe);Ee.colorSpace=Ct,Ee.anisotropy=i;let qe=document.createElement("canvas");qe.width=512,qe.height=384;let ae=qe.getContext("2d"),st=new kt(qe);st.colorSpace=Ct,st.anisotropy=i;let rt=-1e3,tt=Ln((W,te,Le=!0)=>{let fe=performance.now(),Ue=Le?70:650;if(fe-rt<Ue)return;rt=fe,V.fillStyle="#070a10",V.fillRect(0,0,1024,512),V.strokeStyle="#1e293b",V.lineWidth=8,V.strokeRect(8,8,1008,496);let A=Ln((q,Z,oe,de,ye,Fe,it,he,Xe)=>{let je=V.createRadialGradient(q,Z,oe-12,q,Z,oe+8);je.addColorStop(0,"#0f172a"),je.addColorStop(.7,"#475569"),je.addColorStop(1,"#1e293b"),V.strokeStyle=je,V.lineWidth=10,V.beginPath(),V.arc(q,Z,oe,0,Math.PI*2),V.stroke(),V.fillStyle="#0b111e",V.beginPath(),V.arc(q,Z,oe-6,0,Math.PI*2),V.fill(),Xe&&(V.strokeStyle="#10b981",V.lineWidth=14,V.beginPath(),V.arc(q,Z,oe-18,Math.PI*.75+.42*Math.PI*1.5,Math.PI*.75+.68*Math.PI*1.5),V.stroke(),V.strokeStyle="#ef4444",V.beginPath(),V.arc(q,Z,oe-18,Math.PI*.75+.84*Math.PI*1.5,Math.PI*.75+1*Math.PI*1.5),V.stroke()),V.textAlign="center",V.textBaseline="middle";for(let ct=0;ct<=Fe;ct+=it/2){let sn=ct/Fe,dn=Math.PI*.75+sn*Math.PI*1.5,fn=ct%it===0,wn=fn?oe-30:oe-20;if(V.strokeStyle=fn?"#f8fafc":"#64748b",V.lineWidth=fn?4:2,V.beginPath(),V.moveTo(q+Math.cos(dn)*wn,Z+Math.sin(dn)*wn),V.lineTo(q+Math.cos(dn)*(oe-10),Z+Math.sin(dn)*(oe-10)),V.stroke(),fn){V.fillStyle="#e2e8f0",V.font='700 24px "JetBrains Mono", monospace';let Xn=q+Math.cos(dn)*(oe-54),An=Z+Math.sin(dn)*(oe-54);V.fillText(String(ct),Xn,An)}}V.fillStyle="#94a3b8",V.font='700 20px "Plus Jakarta Sans", sans-serif',V.fillText(de,q,Z+56),V.fillStyle="#38bdf8",V.font='700 18px "JetBrains Mono", monospace',V.fillText(ye,q,Z+84);let Ce=Math.max(0,Math.min(1,he/Fe)),xt=Math.PI*.75+Ce*Math.PI*1.5;V.save(),V.translate(q,Z),V.rotate(xt),V.fillStyle="#f97316",V.beginPath(),V.moveTo(-18,-5),V.lineTo(oe-22,-2),V.lineTo(oe-22,2),V.lineTo(-18,5),V.closePath(),V.fill(),V.restore(),V.fillStyle="#334155",V.beginPath(),V.arc(q,Z,18,0,Math.PI*2),V.fill()},"drawGauge");A(230,260,182,"TACHOMETER","RPM x100",25,5,W.rpm/100,!0),A(794,260,182,"SPEEDOMETER","KM/H",120,20,W.speedKmh,!1),V.fillStyle="#0f172a",V.fillRect(434,48,156,416),V.strokeStyle="#334155",V.lineWidth=3,V.strokeRect(434,48,156,416);let M=W.indicatorBlinkOn&&(W.indicator==="left"||W.indicator==="hazard"),k=W.indicatorBlinkOn&&(W.indicator==="right"||W.indicator==="hazard");V.fillStyle=M?"#22c55e":"#1e293b",V.font='700 34px "JetBrains Mono", monospace',V.textAlign="center",V.fillText("\u25C0",462,82),V.fillStyle=k?"#22c55e":"#1e293b",V.fillText("\u25B6",562,82),V.fillStyle=W.highBeamOn?"#38bdf8":W.headlightsOn?"#4ade80":"#334155",V.font='700 18px "JetBrains Mono", monospace',V.fillText(W.highBeamOn?"HIGH BEAM":W.headlightsOn?"LOW BEAM":"LIGHTS OFF",512,82),V.fillStyle="#1e293b",V.fillRect(450,108,124,96),V.fillStyle="#f59e0b",V.font='700 54px "Chakra Petch", sans-serif';let se=["R2","R1","N","1L","1H","2L","2H","3L","3H","4L","4H","5L","5H","6L","6H"][W.gearIndex+2]||"N";V.fillText(se,512,160),V.fillStyle="#94a3b8",V.font='700 15px "JetBrains Mono", monospace',V.fillText(W.transmissionMode==="auto"?"OPTICRUISE AUTO":"MANUAL SPLIT",512,192),V.fillStyle="#f8fafc",V.font='700 36px "JetBrains Mono", monospace',V.fillText(`${Math.round(W.speedKmh)}`,512,248),V.fillStyle="#64748b",V.font='600 14px "Plus Jakarta Sans", sans-serif',V.fillText("KM/H DIGITAL",512,274),V.fillStyle=W.airPressurePsi<75?"#ef4444":"#38bdf8",V.font='700 20px "JetBrains Mono", monospace',V.fillText(`AIR ${Math.round(W.airPressurePsi)} PSI`,512,318),V.fillStyle="#1e293b",V.fillRect(452,334,120,12),V.fillStyle=W.airPressurePsi<75?"#ef4444":"#38bdf8",V.fillRect(452,334,Math.min(120,W.airPressurePsi/120*120),12),V.fillStyle="#fbbf24",V.font='700 18px "JetBrains Mono", monospace',V.fillText(`FUEL ${Math.round(W.fuelLiters)}L`,512,378),V.fillStyle="#4ade80",V.fillText(`ODO ${(W.distanceAlongHighwayM/1e3).toFixed(2)} KM`,512,418),Ee.needsUpdate=!0,ae.fillStyle="#0b1520",ae.fillRect(0,0,512,384),ae.strokeStyle="rgba(56, 189, 248, 0.12)",ae.lineWidth=1;for(let q=0;q<512;q+=48)ae.beginPath(),ae.moveTo(q,0),ae.lineTo(q,384),ae.stroke();for(let q=0;q<384;q+=48)ae.beginPath(),ae.moveTo(0,q),ae.lineTo(512,q),ae.stroke();let ge=W.distanceAlongHighwayM,be=Vn(ge),ee=256,j=275,Se=.85;ae.strokeStyle="#334155",ae.lineWidth=26,ae.lineCap="round",ae.beginPath();for(let q=-120;q<=320;q+=20){let oe=(Vn(Math.max(0,Math.min(Dt,ge+q))).x-be.x)*Se,de=-q*Se;q===-120?ae.moveTo(ee+oe,j+de):ae.lineTo(ee+oe,j+de)}ae.stroke(),ae.strokeStyle="#10b981",ae.lineWidth=6,ae.stroke();for(let q of te){let Z=q.s-ge;if(Z>-110&&Z<300){let oe=ee+(q.laneOffset-W.lateralOffsetM)*1.8,de=j-Z*Se;ae.fillStyle=q.direction===1?"#38bdf8":"#f59e0b",ae.fillRect(oe-4,de-6,8,12)}}ae.fillStyle="#f97316",ae.beginPath(),ae.moveTo(ee,j-14),ae.lineTo(ee+11,j+10),ae.lineTo(ee,j+4),ae.lineTo(ee-11,j+10),ae.closePath(),ae.fill(),ae.fillStyle="#065f46",ae.fillRect(0,0,512,68),ae.fillStyle="#facc15",ae.fillRect(14,12,68,44),ae.fillStyle="#18181b",ae.textAlign="center",ae.font='700 22px "Chakra Petch", sans-serif',ae.fillText("NH-44",48,42);let I=ge<1350?{name:"SHAHBAD FLYOVER",distM:1350-ge}:ge<2450?{name:"SHER-E-PUNJAB DHABA",distM:2450-ge}:ge<3450?{name:"PIPLI INTERCHANGE",distM:3450-ge}:{name:"KARNAL FASTAG TOLL",distM:Math.max(0,4350-ge)};ae.textAlign="left",ae.fillStyle="#ffffff",ae.font='700 22px "Plus Jakarta Sans", sans-serif',ae.fillText(I.name,98,32),ae.fillStyle="#a7f3d0",ae.font='700 18px "JetBrains Mono", monospace',ae.fillText(`IN ${(I.distM/1e3).toFixed(2)} KM  \xB7  REMAINING ${Math.max(0,(4350-ge)/1e3).toFixed(2)} KM`,98,56),st.needsUpdate=!0},"updateCabinDisplays");tt(ds(60),[],!0);let nt={asphaltMap:o,asphaltNormalMap:l,asphaltRoughnessMap:c,concreteMap:f,concreteNormalMap:x,hazardConcreteMap:y,guardrailMap:w,guardrailNormalMap:_,terrainMap:O,terrainNormalMap:G,containerSideMap:D,containerRearMap:Y,containerNormalMap:ie,lorryTailgateMap:ze,leatherNormalMap:Ie,tireTreadNormalMap:Ge,barkMap:$e,cloudLayerMap:_e,dashboardClusterMap:Ee,gpsNavMap:st,isUltra4KUpgraded:!1,upgradeToUltra4K:Ln(W=>{nt.isUltra4KUpgraded||(nt.isUltra4KUpgraded=!0,e.width=2048,e.height=2048,mh(e,65e3),o.anisotropy=W,o.needsUpdate=!0,K.width=2048,K.height=1024,gh(K),D.anisotropy=W,D.needsUpdate=!0,f.anisotropy=W,O.anisotropy=W,w.anisotropy=W)},"upgradeToUltra4K"),updateCabinDisplays:tt,createGantrySignTexture:Ln((W,te,Le,fe,Ue)=>{let A=document.createElement("canvas");A.width=1024,A.height=256;let M=A.getContext("2d"),k=M.createLinearGradient(0,0,0,256);k.addColorStop(0,"#047857"),k.addColorStop(.5,"#065f46"),k.addColorStop(1,"#064e3b"),M.fillStyle=k,M.fillRect(0,0,1024,256),M.strokeStyle="#f8fafc",M.lineWidth=10,M.strokeRect(12,12,1e3,232),M.fillStyle="#facc15",M.fillRect(36,36,148,184),M.strokeStyle="#18181b",M.lineWidth=4,M.strokeRect(42,42,136,172),M.fillStyle="#18181b",M.font='700 28px "Plus Jakarta Sans", sans-serif',M.textAlign="center",M.fillText("NH",110,96),M.font='700 56px "Chakra Petch", sans-serif',M.fillText(Ue,110,162),M.textAlign="left",M.fillStyle="#ffffff",M.font='700 48px "Plus Jakarta Sans", sans-serif',M.fillText(W,215,94),M.fillStyle="#fde047",M.font='600 34px "Plus Jakarta Sans", sans-serif',M.fillText(te,215,148),M.fillStyle="#e2e8f0",M.font='700 30px "JetBrains Mono", monospace',M.fillText(`\u2193 ${Le}`,215,210),M.fillText(`\u2193 ${fe}`,620,210);let ue=new kt(A);return ue.colorSpace=Ct,ue.anisotropy=i,ue},"createGantrySignTexture"),createMilestoneTexture:Ln((W,te)=>{let Le=document.createElement("canvas");Le.width=256,Le.height=384;let fe=Le.getContext("2d");fe.fillStyle="#f5f5f4",fe.fillRect(0,0,256,384),fe.fillStyle="#facc15",fe.fillRect(0,0,256,128),fe.fillStyle="#18181b",fe.textAlign="center",fe.font='700 34px "Chakra Petch", sans-serif',fe.fillText("NH-44",128,78),fe.font='700 32px "Plus Jakarta Sans", sans-serif',fe.fillText(W,128,195),fe.font='700 64px "JetBrains Mono", monospace',fe.fillText(`${te}`,128,280),fe.font='600 24px "Plus Jakarta Sans", sans-serif',fe.fillText("KM",128,325);let Ue=new kt(Le);return Ue.colorSpace=Ct,Ue.anisotropy=i,Ue},"createMilestoneTexture")};return nt}Ln(Mh,"createHighwayTextureSet");var p_=Object.defineProperty,Wn=(i,e)=>p_(i,"name",{value:e,configurable:!0});function Ze(i,e,t,n=.06,s=3){let r=Math.min(n,i*.25,e*.25,t*.25),a=Math.max(.02,i-r*2),o=Math.max(.02,e-r*2),l=Math.max(.02,t-r*2),c=new Yi,h=a*.5,u=o*.5;c.moveTo(-h,-u+r),c.lineTo(-h,u-r),c.quadraticCurveTo(-h,u,-h+r,u),c.lineTo(h-r,u),c.quadraticCurveTo(h,u,h,u-r),c.lineTo(h,-u+r),c.quadraticCurveTo(h,-u,h-r,-u),c.lineTo(-h+r,-u),c.quadraticCurveTo(-h,-u,-h,-u+r);let d=new zs(c,{depth:l,bevelEnabled:!0,bevelSegments:s,steps:1,bevelSize:r,bevelThickness:r});return d.center(),d}Wn(Ze,"createRoundedBoxGeometry");function si(i,e,t=.08,n=3){let s=new Yi;s.moveTo(i[0][0],i[0][1]);for(let o=1;o<i.length;o++)s.lineTo(i[o][0],i[o][1]);s.closePath();let r=Math.max(.05,e-t*2),a=new zs(s,{depth:r,bevelEnabled:!0,bevelSegments:n,steps:1,bevelSize:t,bevelThickness:t});if(a.rotateY(-Math.PI/2),a.computeBoundingBox(),a.boundingBox){let o=(a.boundingBox.min.x+a.boundingBox.max.x)*.5;a.translate(-o,0,0)}return a.computeVertexNormals(),a}Wn(si,"createSideProfileGeometry");function Oi(i,e,t,n,s=!1){let r=new It,a=.54,o=.31,l=Wn(S=>{let m=new It;m.position.x=S;let p=new Ke(a,a,.29,28,1);p.rotateZ(Math.PI/2);let y=new B(p,i);m.add(y);let T=new Ji(.42,.115,12,28);T.rotateY(Math.PI/2);let v=new B(T,i);v.position.x=-.055,m.add(v);let R=new B(T,i);R.position.x=.055,m.add(R);let w=new Ke(o,o*.88,.31,24);w.rotateZ(Math.PI/2);let _=new B(w,e);return m.add(_),m},"buildSingleTireAndRim");s?(r.add(l(-.165)),r.add(l(.165))):r.add(l(0));let c=s?.68:.36,h=new Ke(.15,.17,c,16);h.rotateZ(Math.PI/2);let u=new B(h,n);r.add(u);let d=.22,f=s?.33:.17,x=new Ke(.016,.016,f*2.04,8);x.rotateZ(Math.PI/2);for(let S=0;S<8;S++){let m=S/8*Math.PI*2,p=new B(x,t);p.position.set(0,Math.cos(m)*d,Math.sin(m)*d),r.add(p)}return r}Wn(Oi,"createHeavyWheelGroup");function vh(i,e,t){let n=[];for(let c=0;c<=48;c++){let h=c/48,u=new N().lerpVectors(i,e,h),d=Math.sin(h*Math.PI)*.26,f=Math.sin(h*Math.PI)*.065,x=h*9*Math.PI*2;n.push(new N(u.x+Math.cos(x)*f,u.y-d+Math.sin(x)*f,u.z))}let a=new Bs(n),o=new kr(a,44,.016,8,!1),l=new He({color:t,roughness:.35,metalness:.15});return new B(o,l)}Wn(vh,"createCoiledSuzieHose");var Ol=null;function yh(){if(Ol)return Ol;let i=document.createElement("canvas");i.width=128,i.height=256;let e=i.getContext("2d"),t=e.createRadialGradient(64,128,10,64,128,64);t.addColorStop(0,"rgba(0, 0, 0, 0.85)"),t.addColorStop(.65,"rgba(0, 0, 0, 0.52)"),t.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=t,e.fillRect(0,0,128,256);let n=new kt(i);return Ol=new vt({map:n,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),Ol}Wn(yh,"getSharedContactShadowMaterial");function Sh(i,e){let t=new It,n=new It;t.add(n);let s=new Qi({color:12138507,metalness:.68,roughness:.2,clearcoat:e?0:1,clearcoatRoughness:.1});e||_h(s);let r=new Qi({color:1579035,metalness:.35,roughness:.42,clearcoat:e?0:.4}),a=new He({color:16096779,metalness:.65,roughness:.28}),o=new He({color:1841431,metalness:.55,roughness:.68}),l=new He({color:2237738,metalness:.28,roughness:.78}),c=new He({color:15857145,metalness:.94,roughness:.12}),h=new He({color:13358561,metalness:.82,roughness:.28}),u=new He({color:1579035,normalMap:i.tireTreadNormalMap,normalScale:new le(1.4,1.4),metalness:.06,roughness:.86}),d=new He({color:14078929,metalness:.82,roughness:.26}),f=new Qi({color:988970,metalness:.12,roughness:.06,transparent:!0,opacity:.32,depthWrite:!1}),x=new He({color:1120295,normalMap:i.leatherNormalMap,normalScale:new le(.65,.65),metalness:.14,roughness:.62}),S=new He({color:1976635,normalMap:i.leatherNormalMap,normalScale:new le(.45,.45),metalness:.08,roughness:.78}),m=new He({color:16777215,emissive:16776171,emissiveIntensity:.6,roughness:.1}),p=new He({color:10033947,emissive:15680580,emissiveIntensity:.45,roughness:.25}),y=new He({color:9584654,emissive:16096779,emissiveIntensity:0,roughness:.25}),T=new He({color:9584654,emissive:16096779,emissiveIntensity:0,roughness:.25}),v=yh(),R=new B(new nn(3.3,7.8),v);R.rotation.x=-Math.PI/2,R.position.set(0,.02,.2),t.add(R);for(let g of[-1,1]){let b=new B(Ze(.16,.3,6.9,.03,2),o);b.position.set(g*.52,.72,.2),t.add(b)}for(let g of[-1.85,-.4,1.15,2.48,3.35]){let b=new B(new We(1.08,.22,.18),o);b.position.set(0,.72,g),t.add(b)}for(let g of[-1.85,1.15,2.48]){let b=new B(new Ke(.09,.09,2.08,12).rotateZ(Math.PI/2),o);if(b.position.set(0,.54,g),t.add(b),g>0){let C=new B(new $i(.24,14,12),o);C.position.set(0,.54,g),t.add(C);for(let U of[-1,1]){let z=new B(new Ke(.085,.085,.18,10).rotateX(Math.PI/2),l);z.position.set(U*.42,.65,g-.18),t.add(z)}}}let w=new B(Ze(1.26,.06,2.55,.02,2),h);w.position.set(0,.89,.75),t.add(w);let _=new Ke(.35,.35,1.72,24);_.rotateX(Math.PI/2);let E=new B(_,h);E.position.set(-.92,.68,-.12),t.add(E);for(let g of[-.68,.44]){let b=new B(new Ke(.362,.362,.06,24).rotateX(Math.PI/2),c);b.position.set(-.92,.68,g),t.add(b)}let L=new B(Ze(.62,.54,.95,.05,3),l);L.position.set(.92,.7,-.48),t.add(L);let P=new B(Ze(.56,.52,.58,.05,3),new He({color:1981066,roughness:.45}));P.position.set(.9,.68,.36),t.add(P);let O=new B(new We(1.18,.12,.95),o);O.position.set(0,.92,1.9),t.add(O);let G=new B(new Ke(.58,.64,.1,24),new He({color:988970,metalness:.75,roughness:.35}));G.position.set(0,1.01,1.9),t.add(G);let K=new B(new Ke(.012,.012,.55,8).rotateZ(Math.PI/2),c);K.position.set(-.56,.98,1.9),t.add(K);for(let g of[-1,1]){let b=new B(Ze(.68,.14,2.85,.05,3),r);b.position.set(g*1.04,1.12,1.82),t.add(b);let C=new B(new We(.64,.65,.04),l);C.position.set(g*1.04,.62,3.22),t.add(C);let U=new B(new We(.58,.08,.05),new vt({color:15680580}));U.position.set(g*1.04,.34,3.23),t.add(U)}let D=vh(new N(-.22,1.55,-.35),new N(-.18,1.42,1.25),14427686);t.add(D);let H=vh(new N(.22,1.55,-.35),new N(.18,1.42,1.25),15381256);t.add(H);let Y=si([[-2.7,.88],[-2.74,1.38],[-2.68,1.88],[-2.42,1.88],[-2.38,1.56],[-.42,1.56],[-.42,.88]],2.48,.08,4),ce=new B(Y,s);ce.castShadow=!e,ce.receiveShadow=!e,n.add(ce);for(let g of[-1,1]){let b=new B(Ze(.11,.42,1.98,.03,3),s);b.position.set(g*1.19,1.69,-1.42),n.add(b)}for(let g of[-1,1]){let b=new B(Ze(.14,.24,1.24,.04,3),r);b.position.set(g*1.22,.82,-1.85),n.add(b);let C=new B(Ze(.12,.16,1.48,.03,2),s);C.position.set(g*1.17,2.98,-1.85),n.add(C);for(let z=0;z<3;z++){let pe=new B(new We(.16,.04,.56),h);pe.position.set(g*1.24,.56+z*.24,-2.35),n.add(pe)}let U=new B(Ze(.06,.05,.22,.015,2),c);U.position.set(g*1.25,1.62,-1.45),n.add(U)}let $=new B(Ze(2.51,.11,2.28,.03,2),a);$.position.set(0,1.36,-1.56),n.add($);let ie=new B(Ze(2.52,.04,2.28,.01,2),c);ie.position.set(0,1.28,-1.56),n.add(ie);let re=[[-1.12,1.85],[-1.12,3.08],[-.42,3.08],[-.42,1.85]],me=new B(si(re,2.46,.08,4),s);me.castShadow=!e,n.add(me);let ze=new B(Ze(1.15,.45,.06,.02,2),r);ze.position.set(0,2.48,-.4),n.add(ze);let Q=[[-2.58,2.98],[-2.25,3.36],[-1.35,3.74],[-.44,3.82],[-.44,3.04],[-2.58,3.04]],Te=new B(si(Q,2.42,.1,4),s);Te.castShadow=!e,n.add(Te);let Ie=new B(Ze(2.44,.12,1.45,.03,2),a);Ie.position.set(0,3.42,-1.25),Ie.rotation.x=.22,n.add(Ie);for(let g of[-1,1]){let b=new B(new Ke(.06,.075,.05,12),c);b.position.set(g*.95,3.82,-.58),n.add(b);let C=new B(new Ke(.048,.058,.11,12),new vt({color:16096779}));C.position.set(g*.95,3.88,-.58),n.add(C)}let we=Ze(.12,1.18,.14,.03,2);for(let g of[-1,1]){let b=new B(we,s);b.position.set(g*1.16,2.45,-2.58),b.rotation.x=-.15,n.add(b);let C=new B(we,r);C.position.set(g*1.18,2.45,-1.16),n.add(C)}let ve=new B(new nn(2.26,1.08),f);ve.position.set(0,2.45,-2.66),ve.rotation.x=Math.PI+.15,ve.renderOrder=5,n.add(ve);for(let g of[-.52,.42]){let b=new B(new We(.68,.03,.03),r);b.position.set(g,1.94,-2.74),b.rotation.z=.12,n.add(b)}let Ge=new B(Ze(2.46,.22,.32,.04,3),r);Ge.position.set(0,3.01,-2.68),n.add(Ge);let ut=new B(new We(2.44,.04,.34),c);ut.position.set(0,2.92,-2.69),n.add(ut);for(let g=-2;g<=2;g++){let b=new B(new We(.14,.05,.04),new vt({color:16096779}));b.position.set(g*.46,3.02,-2.85),n.add(b)}let Ve=new Ke(.035,.085,.74,16);Ve.rotateX(Math.PI/2);for(let g of[-1,1]){let b=new B(Ve,c);b.position.set(g*.92,3.45,-2.05),n.add(b);let C=new B(new Ke(.18,.18,.95,16),r);C.position.set(g*.86,2.15,-.32),n.add(C)}let $e=new B(new Ke(.09,.105,3.05,18),c);$e.position.set(-1.14,2.35,-.28),n.add($e);let Qe=new B(new Ke(.08,.09,.35,16),c);Qe.position.set(-1.14,3.92,-.22),Qe.rotation.x=-.38,n.add(Qe);let ne=[],_e=new Zi(.14,1);for(let g=0;g<5;g++){let b=new vt({color:3359061,transparent:!0,opacity:.22,depthWrite:!1}),C=new B(_e,b);C.position.set(-1.14,4.15+g*.28,-.1+g*.18),n.add(C),ne.push(C)}let xe=new B(Ze(2.54,.52,.42,.07,4),l);xe.position.set(0,.72,-2.68),n.add(xe);let V=new B(new Ke(.042,.042,2.28,14).rotateZ(Math.PI/2),c);V.position.set(0,.62,-2.92),n.add(V);let Ee=new B(new Ke(.038,.038,1.72,14).rotateZ(Math.PI/2),c);Ee.position.set(0,1.08,-2.92),n.add(Ee);for(let g of[-.72,.72]){let b=new B(new Ke(.04,.04,.56,12),c);b.position.set(g,.85,-2.92),n.add(b)}let qe=new B(Ze(1.74,.92,.12,.04,3),r);qe.position.set(0,1.42,-2.72),n.add(qe);let ae=new It;ae.position.set(0,1.38,-2.69);let st=new B(new Ke(.08,.08,.05,12).rotateX(Math.PI/2),h);ae.add(st);let rt=new We(.06,.34,.015);rt.translate(0,.18,0);for(let g=0;g<9;g++){let b=new B(rt,h);b.rotation.z=g/9*Math.PI*2,ae.add(b)}n.add(ae);for(let g=0;g<6;g++){let b=new B(Ze(1.62,.048,.14,.015,2),c);b.position.set(0,1.06+g*.14,-2.74),n.add(b)}let tt=new B(new We(.52,.12,.04),new vt({color:16436245}));tt.position.set(0,.56,-2.9),n.add(tt);for(let g of[-1,1]){let b=new B(Ze(.44,.28,.1,.03,2),r);b.position.set(g*.98,.92,-2.72),n.add(b);let C=new B(Ze(.36,.2,.11,.02,2),m);C.position.set(g*.96,.92,-2.74),n.add(C);let U=new B(Ze(.16,.2,.12,.02,2),g===-1?y:T);U.position.set(g*1.21,.92,-2.71),n.add(U)}let F=new Vs(16776171,0,95,Math.PI/5,.45,1.35);F.position.set(-.98,.95,-2.82),F.target.position.set(-1.2,.1,-42),n.add(F),n.add(F.target);let yt=new Vs(16776171,0,95,Math.PI/5,.45,1.35);yt.position.set(.98,.95,-2.82),yt.target.position.set(1.2,.1,-42),n.add(yt),n.add(yt.target);let nt=Wn(g=>{let b=new It;for(let Pe of[2.64,2.12]){let Me=new B(new Ke(.018,.018,.36,8).rotateZ(Math.PI/2),r);Me.position.set(g*1.32,Pe,-2.38),b.add(Me)}let C=new It;C.position.set(g*1.46,2.38,-2.36),C.rotation.y=g*-.18;let U=new B(Ze(.2,.62,.12,.03,3),r);C.add(U);let z=new vt({color:14870768}),pe=new B(new nn(.155,.54),z);return pe.position.set(0,0,.062),C.add(pe),b.add(C),n.add(b),pe},"createWingMirrorAssembly"),W=nt(-1),te=nt(1),Le=new Ut;Le.position.set(1.48,2.38,-2.25),n.add(Le);let fe=new es(16770229,.95,3.8,1.2);fe.position.set(.18,2.68,-1.65),n.add(fe);let Ue=new B(new We(2.36,.08,2.15),l);Ue.position.set(0,1.32,-1.52),n.add(Ue);for(let g of[-1,1]){let b=new B(Ze(.1,.72,1.45,.03,2),S);b.position.set(g*1.16,1.58,-1.85),n.add(b);let C=new B(Ze(.14,.08,.62,.03,2),x);C.position.set(g*1.1,1.76,-1.68),n.add(C);let U=new B(new Ke(.016,.016,.55,8),h);U.position.set(g*1.09,2.38,-2.46),U.rotation.x=-.15,n.add(U)}let A=new B(Ze(2.32,.42,.68,.06,4),x);A.position.set(0,1.68,-2.32),n.add(A);let M=new B(Ze(2.26,.032,.68,.01,2),h);M.position.set(0,1.85,-2.31),n.add(M);let k=new B(Ze(.68,.05,.28,.02,3),x);k.position.set(.58,2.1,-2.24),n.add(k);let ue=new B(Ze(.68,.3,.14,.02,2),x);ue.position.set(.58,1.95,-2.29),n.add(ue);let se=new B(new nn(.62,.28),new vt({map:i.dashboardClusterMap}));se.position.set(.58,1.94,-2.21),se.rotation.x=-.16,n.add(se);let ge=new vt({color:16347926}),be=new B(new We(.007,.072,.004),ge);be.position.set(.415,1.935,-2.2),n.add(be);let ee=new B(new We(.007,.072,.004),ge);ee.position.set(.745,1.935,-2.2),n.add(ee);let j=new It;j.position.set(.02,1.96,-2.18),j.rotation.y=.26,j.rotation.x=-.14;let Se=new B(Ze(.46,.34,.12,.025,3),x);j.add(Se);let I=new B(new nn(.4,.26),new vt({map:i.gpsNavMap}));I.position.set(0,.02,.062),j.add(I);for(let g=-3;g<=3;g++){let b=g===0?15680580:g===3?16436245:3718648,C=new B(new We(.036,.028,.02),new vt({color:b}));C.position.set(g*.052,-.13,.062),j.add(C)}n.add(j);let q=new B(Ze(.36,.42,.62,.05,3),x);q.position.set(.12,1.52,-1.62),n.add(q);let Z=new B(new Lr(.09,.16,12),S);Z.position.set(.18,1.78,-1.58),n.add(Z);let oe=new B(new Ke(.014,.016,.28,10),c);oe.position.set(.18,1.92,-1.58),oe.rotation.z=-.12,n.add(oe);let de=new B(Ze(.055,.085,.065,.02,3),x);de.position.set(.2,2.06,-1.58),n.add(de);let ye=new B(Ze(2.28,.22,.46,.04,3),S);ye.position.set(0,2.94,-2.38),n.add(ye);let Fe=new B(new nn(.26,.06),new vt({color:1096065}));Fe.position.set(.58,2.9,-2.14),Fe.rotation.x=.25,n.add(Fe);let it=new B(new Ke(.052,.065,.44,14),x);it.position.set(.58,1.75,-2.02),it.rotation.x=Math.PI/2-.42,n.add(it);for(let g of[-1,1]){let b=new B(new Ke(.01,.014,.22,8).rotateZ(Math.PI/2),l);b.position.set(.58+g*.12,1.8,-1.94),n.add(b)}let he=new It;he.position.set(.58,1.84,-1.86),he.rotation.x=-.42;let Xe=new B(new Ji(.235,.024,16,36),x);he.add(Xe);let je=new B(new Ji(.235,.025,12,12,.14),new vt({color:16347926}));je.rotation.z=Math.PI/2-.07,he.add(je);let Ce=new B(new Ke(.072,.068,.045,20).rotateX(Math.PI/2),x);he.add(Ce);let xt=new B(new Ke(.028,.028,.048,16).rotateX(Math.PI/2),a);he.add(xt);let ct=new B(Ze(.21,.032,.022,.008,2),h);ct.position.set(-.11,-.035,0),ct.rotation.z=.26,he.add(ct);let sn=new B(Ze(.21,.032,.022,.008,2),h);sn.position.set(.11,-.035,0),sn.rotation.z=-.26,he.add(sn);let dn=new B(Ze(.038,.2,.022,.008,2),h);dn.position.y=-.115,he.add(dn),n.add(he);for(let g of[.58,-.58]){let b=new B(Ze(.56,.16,.56,.04,3),S);b.position.set(g,1.46,-1.24),n.add(b);let C=new B(Ze(.54,.78,.16,.04,3),S);C.position.set(g,1.88,-1.02),C.rotation.x=-.08,n.add(C);let U=new B(Ze(.32,.24,.14,.04,3),x);U.position.set(g,2.34,-.98),n.add(U)}let fn=new Ut;fn.position.set(.58,2.34,-1.32),n.add(fn);let wn=new It;wn.position.set(-1.08,.54,-1.85);let Xn=Oi(u,d,c,o,!1);wn.add(Xn),t.add(wn);let An=new It;An.position.set(1.08,.54,-1.85);let xn=Oi(u,d,c,o,!1);An.add(xn),t.add(An);let Dn=[Xn,xn],ri=[1.15,2.48];for(let g of ri){let b=Oi(u,d,c,o,!0);b.position.set(-1.02,.54,g),t.add(b),Dn.push(b);let C=Oi(u,d,c,o,!0);C.position.set(1.02,.54,g),t.add(C),Dn.push(C)}let bt=new It,Nn=new B(new nn(3.4,13),v);Nn.rotation.x=-Math.PI/2,Nn.position.set(0,.02,0),bt.add(Nn);let yi=new He({color:1519954,normalMap:i.containerNormalMap,normalScale:new le(.8,.8),metalness:.38,roughness:.58}),fs=new He({color:16777215,map:i.containerRearMap,normalMap:i.containerNormalMap,normalScale:new le(.6,.6),metalness:.35,roughness:.52}),Un=new He({color:16777215,map:i.containerSideMap,normalMap:i.containerNormalMap,normalScale:new le(1.2,1.2),metalness:.34,roughness:.52}),ai=new B(new We(2.5,2.72,11.8),[Un,Un,yi,o,fs,yi]);ai.position.set(0,2.58,0),ai.castShadow=!e,ai.receiveShadow=!e,bt.add(ai);let ps=new We(.18,.18,.18);for(let g of[-1.2,1.2])for(let b of[1.28,3.88])for(let C of[-5.84,5.84]){let U=new B(ps,a);U.position.set(g,b,C),bt.add(U)}let qn=new B(Ze(1.88,.34,11.65,.04,2),o);qn.position.set(0,1.06,.1),bt.add(qn);for(let g of[-.88,.88]){let b=new B(new We(.18,.72,.18),l);b.position.set(g,.68,-2.85),bt.add(b);let C=new B(new We(.32,.06,.32),o);C.position.set(g,.32,-2.85),bt.add(C)}for(let g of[-1,1]){for(let b of[.62,.84]){let C=new B(new We(.06,.1,4.8),h);C.position.set(g*1.18,b,-.15),bt.add(C)}for(let b of[-4.8,-1.6,1.6,4.8]){let C=new B(new We(.04,.06,.14),new vt({color:16096779}));C.position.set(g*1.26,1.15,b),bt.add(C)}}let J=Oi(u,d,c,o,!1);J.rotation.z=Math.PI/2,J.position.set(0,.58,-.65),bt.add(J);for(let g of[-.68,-.24,.24,.68]){let b=new B(new Ke(.022,.022,2.62,10),c);b.position.set(g,2.58,5.93),bt.add(b)}let Ae=new B(Ze(2.48,.28,.22,.04,2),l);Ae.position.set(0,.66,5.88),bt.add(Ae);for(let g of[-1,1]){let b=new B(Ze(.42,.15,.06,.02,2),p);b.position.set(g*.76,.66,5.99),bt.add(b);let C=new B(Ze(.24,.15,.06,.02,2),g===-1?y:T);C.position.set(g*1.09,.66,5.99),bt.add(C)}let Ne=[],et=[2.2,3.45,4.7];for(let g of[-1,1]){let b=new B(Ze(.66,.14,3.85,.04,2),r);b.position.set(g*1.06,1.12,3.45),bt.add(b)}for(let g of et){let b=Oi(u,d,c,o,!0);b.position.set(-1.04,.54,g),bt.add(b),Ne.push(b);let C=Oi(u,d,c,o,!0);C.position.set(1.04,.54,g),bt.add(C),Ne.push(C)}return{tractorRoot:t,cabinSuspensionGroup:n,trailerRoot:bt,steeringWheelGroup:he,rpmNeedle:be,speedNeedle:ee,frontLeftSteerPivot:wn,frontRightSteerPivot:An,tractorWheelMeshes:Dn,trailerWheelMeshes:Ne,headlightLeftSpot:F,headlightRightSpot:yt,headlightLensMat:m,brakeLightMat:p,indicatorLeftMat:y,indicatorRightMat:T,cabinCameraAnchor:fn,mirrorCameraAnchor:Le,rightMirrorMesh:te,leftMirrorMesh:W,coolingFanGroup:ae,exhaustPuffs:ne,cabPaintMat:s}}Wn(Sh,"buildPlayerTruckAndTrailer");function Eh(i,e,t,n){i.tractorRoot.position.set(e.x,e.y,e.z),i.tractorRoot.rotation.set(0,-e.heading,0,"YXZ"),i.cabinSuspensionGroup.rotation.set(e.pitch,0,-e.roll,"YXZ"),i.frontLeftSteerPivot.rotation.y=-e.steerAngleRad,i.frontRightSteerPivot.rotation.y=-e.steerAngleRad;for(let u of i.tractorWheelMeshes)u.rotation.x=-e.wheelRotationRad;for(let u of i.trailerWheelMeshes)u.rotation.x=-e.wheelRotationRad;i.coolingFanGroup.rotation.z-=e.rpm/600*.18;let s=Math.max(.2,Math.min(1,(e.rpm-600)/1600)),r=performance.now()*.0032;for(let u=0;u<i.exhaustPuffs.length;u++){let d=i.exhaustPuffs[u],f=(r+u*.2)%1;d.position.set(-1.14+Math.sin(f*6+u)*.06,4.02+f*1.45,-.18+f*(.45+e.speedMs*.04));let x=(.45+f*1.65)*(.65+s*.65);d.scale.setScalar(x),d.material.opacity=(1-f)*.24*s}i.steeringWheelGroup.rotation.z=e.steerAngleRad*6.5;let a=Math.max(0,Math.min(1,e.rpm/2500));i.rpmNeedle.rotation.z=(.5-a)*Math.PI*1.35;let o=Math.max(0,Math.min(1,e.speedKmh/120));i.speedNeedle.rotation.z=(.5-o)*Math.PI*1.35;let l=e.headlightsOn?e.highBeamOn?115:58:0;n||(i.headlightLeftSpot.intensity=l,i.headlightRightSpot.intensity=l,i.headlightLeftSpot.distance=e.highBeamOn?135:85,i.headlightRightSpot.distance=e.highBeamOn?135:85),i.headlightLensMat.emissiveIntensity=e.headlightsOn?2.4:.4,i.brakeLightMat.emissiveIntensity=t?2.8:e.headlightsOn?.85:.25;let c=e.indicatorBlinkOn&&(e.indicator==="left"||e.indicator==="hazard"),h=e.indicatorBlinkOn&&(e.indicator==="right"||e.indicator==="hazard");i.indicatorLeftMat.emissiveIntensity=c?2.6:0,i.indicatorRightMat.emissiveIntensity=h?2.6:0,i.trailerRoot.position.set(e.trailerX,e.trailerY,e.trailerZ),i.trailerRoot.rotation.set(e.trailerPitch,-e.trailerHeading,-e.trailerRoll,"YXZ")}Wn(Eh,"syncPlayerRigMeshes");var Bl=null;function Bd(){return Bl||(Bl={lorryCab:si([[-4.35,.68],[-4.38,1.48],[-4.22,2.48],[-2.15,2.52],[-2.15,.68]],2.38,.08,3),lorryCrown:si([[-4.15,2.48],[-4.28,3.18],[-3.15,3.28],[-3.15,2.48]],2.24,.06,3),lorryWs:Ze(2.12,.72,.1,.02,2),lorryGrille:Ze(1.64,.56,.1,.02,2),lorryCargo:new We(2.46,2.68,6.55),busHull:si([[-5.58,.58],[-5.65,1.45],[-5.38,3.12],[5.48,3.16],[5.58,2.85],[5.58,.62]],2.54,.1,4),busWindowBand:Ze(2.57,.96,10.4,.03,2),busFrontGlass:Ze(2.36,1.18,.12,.03,2),busAcPod:Ze(1.78,.28,2.45,.06,3),pickupCab:si([[-2.35,.48],[-2.38,1.05],[-1.42,1.16],[-.96,1.88],[.12,1.88],[.12,.48]],1.88,.07,3),pickupGlass:Ze(1.76,.62,1.05,.04,2),pickupBed:Ze(1.94,.85,2.38,.04,2),pickupCage:Ze(1.88,.68,2.28,.03,2),sedanBody:si([[-2.25,.38],[-2.28,.78],[-1.25,.96],[-.52,1.48],[.88,1.46],[1.72,1.02],[2.22,.94],[2.25,.42]],1.86,.08,4),sedanGreenhouse:si([[-1.18,.94],[-.48,1.45],[.82,1.43],[1.58,.98]],1.62,.05,3),sedanGrille:Ze(1.12,.28,.08,.02,2),hlLamp:Ze(.36,.16,.08,.02,2),tlLamp:Ze(.42,.16,.08,.02,2),heavyTire:new Ke(.48,.48,.28,16).rotateZ(Math.PI/2),heavyRim:new Ke(.3,.3,.3,12).rotateZ(Math.PI/2),lightTire:new Ke(.38,.38,.26,16).rotateZ(Math.PI/2),lightRim:new Ke(.24,.24,.28,12).rotateZ(Math.PI/2),trimMat:new He({color:1976635,metalness:.3,roughness:.72}),chromeMat:new He({color:14870768,metalness:.9,roughness:.18}),glassMat:new He({color:988970,metalness:.85,roughness:.12}),headlightMat:new vt({color:16710083}),crownMat:new He({color:16436245,roughness:.38}),tarpMat:new He({color:1981066,roughness:.8}),cageMat:new He({color:14251782,roughness:.6})},Bl)}Wn(Bd,"getTrafficCache");function sr(i,e,t){let n=new It,s=Bd(),r=new He({color:e,metalness:.48,roughness:.3}),a=new vt({color:14427686}),o=i==="bus"?11.8:i==="lorry"?9.2:5.2,l=new B(new nn(2.8,o),yh());if(l.rotation.x=-Math.PI/2,l.position.y=.02,n.add(l),i==="lorry"){n.add(new B(s.lorryCab,r)),n.add(new B(s.lorryCrown,s.crownMat));let p=new B(s.lorryWs,s.glassMat);p.position.set(0,1.96,-4.28),p.rotation.x=-.14,n.add(p);let y=new B(s.lorryGrille,s.chromeMat);y.position.set(0,1.12,-4.36),n.add(y);let T=new He({color:10105874,normalMap:t?.containerNormalMap,roughness:.68}),v=t?new He({map:t.lorryTailgateMap,roughness:.6}):T,R=new B(s.lorryCargo,[T,T,s.tarpMat,s.trimMat,v,T]);R.position.set(0,1.98,1.25),n.add(R)}else if(i==="bus"){n.add(new B(s.busHull,r));let p=new B(s.busWindowBand,s.glassMat);p.position.set(0,2.28,-.1),n.add(p);let y=new B(s.busFrontGlass,s.glassMat);y.position.set(0,2.15,-5.48),y.rotation.x=-.16,n.add(y);for(let T of[-1.8,1.9]){let v=new B(s.busAcPod,s.trimMat);v.position.set(0,3.26,T),n.add(v)}}else if(i==="pickup"){n.add(new B(s.pickupCab,r));let p=new B(s.pickupGlass,s.glassMat);p.position.set(0,1.54,-.45),n.add(p);let y=new B(s.pickupBed,s.trimMat);y.position.set(0,.92,1.32),n.add(y);let T=new B(s.pickupCage,s.cageMat);T.position.set(0,1.62,1.32),n.add(T)}else{n.add(new B(s.sedanBody,r)),n.add(new B(s.sedanGreenhouse,s.glassMat));let p=new B(s.sedanGrille,s.trimMat);p.position.set(0,.62,-2.26),n.add(p)}let c=i==="bus"?5.6:i==="lorry"?4.36:2.25,h=i==="sedan"||i==="pickup"?.68:.88;for(let p of[-1,1]){let y=new B(s.hlLamp,s.headlightMat);y.position.set(p*h,.76,-c),n.add(y);let T=new B(s.tlLamp,a);T.position.set(p*h,.82,c),n.add(T)}let u=i==="sedan"||i==="pickup",d=u?.38:.48,f=u?s.lightTire:s.heavyTire,x=u?s.lightRim:s.heavyRim,S=c*.64,m=u?.88:1.14;for(let p of[-m,m])for(let y of[-S,S]){let T=new B(f,s.trimMat);T.position.set(p,d,y),n.add(T);let v=new B(x,s.chromeMat);v.position.set(p,d,y),n.add(v)}return{root:n,brakeMat:a}}Wn(sr,"buildTrafficVehicleMesh");var m_=Object.defineProperty,zl=(i,e)=>m_(i,"name",{value:e,configurable:!0});function Hl(i){let e=0,t=i.map(o=>{let l=o.index?o.toNonIndexed():o.clone();return e+=l.attributes.position.count,l}),n=new Float32Array(e*3),s=new Float32Array(e*3),r=0;for(let o of t){let l=o.attributes.position.array,c=o.attributes.normal.array;n.set(l,r),s.set(c,r),r+=l.length}let a=new Ot;return a.setAttribute("position",new Nt(n,3)),a.setAttribute("normal",new Nt(s,3)),a}zl(Hl,"mergeBufferGeometriesSimple");function bh(i,e){let t=new It,n=1e3,s=Dt/n,r=12.4,a=4.2,o=new Float32Array((n+1)*4*3),l=new Float32Array((n+1)*4*2),c=new Uint32Array(n*18),h=.65,u=.96,d=new Float32Array((n+1)*4*3),f=new Float32Array((n+1)*4*2),x=new Uint32Array(n*18),S=new Float32Array((n+1)*4*3),m=new Float32Array((n+1)*4*2),p=new Uint32Array(n*12);for(let J=0;J<=n;J++){let Ae=J*s,et=Vn(Ae).isTollPlaza?1.28:1,g=r*et,b=_t(Ae,-(g+a),-.42),C=_t(Ae,-g,.02),U=_t(Ae,g,.02),z=_t(Ae,g+a,-.42),pe=J*12;o.set([b.x,b.y,b.z,C.x,C.y,C.z,U.x,U.y,U.z,z.x,z.y,z.z],pe);let Pe=J*8,Me=Ae/18;if(l.set([0,Me,0,Me,1,Me,1,Me],Pe),J<n){let Mn=J*18,ht=J*4,Rt=(J+1)*4;c.set([ht+0,ht+1,Rt+0,ht+1,Rt+1,Rt+0,ht+1,ht+2,Rt+1,ht+2,Rt+2,Rt+1,ht+2,ht+3,Rt+2,ht+3,Rt+3,Rt+2],Mn)}let Re=_t(Ae,-h,.02),ke=_t(Ae,-h*.42,u),at=_t(Ae,h*.42,u),dt=_t(Ae,h,.02);d.set([Re.x,Re.y,Re.z,ke.x,ke.y,ke.z,at.x,at.y,at.z,dt.x,dt.y,dt.z],pe);let Oe=Ae/4;if(f.set([0,Oe,.35,Oe,.65,Oe,1,Oe],Pe),J<n){let Mn=J*18,ht=J*4,Rt=(J+1)*4;x.set([ht+0,ht+1,Rt+0,ht+1,Rt+1,Rt+0,ht+1,ht+2,Rt+1,ht+2,Rt+2,Rt+1,ht+2,ht+3,Rt+2,ht+3,Rt+3,Rt+2],Mn)}let pt=Ae>2385&&Ae<2515,Ht=pt?-1.5:.48,Pt=pt?-1.2:.82,At=_t(Ae,-g+.18,Ht),Wt=_t(Ae,-g+.18,Pt),Be=_t(Ae,g-.18,Pt),Yt=_t(Ae,g-.18,Ht);S.set([At.x,At.y,At.z,Wt.x,Wt.y,Wt.z,Be.x,Be.y,Be.z,Yt.x,Yt.y,Yt.z],pe);let Mt=Ae/4;if(m.set([Mt,0,Mt,1,Mt,1,Mt,0],Pe),J<n){let Mn=J*12,ht=J*4,Rt=(J+1)*4;p.set([ht+0,ht+1,Rt+0,ht+1,Rt+1,Rt+0,ht+2,ht+3,Rt+2,ht+3,Rt+3,Rt+2],Mn)}}let y=new Ot;y.setAttribute("position",new Nt(o,3)),y.setAttribute("uv",new Nt(l,2)),y.setIndex(new Nt(c,1)),y.computeVertexNormals();let T=new He({color:16777215,map:i.asphaltMap,normalMap:i.asphaltNormalMap,normalScale:new le(.85,.85),roughnessMap:i.asphaltRoughnessMap,roughness:1,metalness:.1});e||xh(T);let v=new B(y,T);v.receiveShadow=!e,t.add(v);let R=new Ot;R.setAttribute("position",new Nt(d,3)),R.setAttribute("uv",new Nt(f,2)),R.setIndex(new Nt(x,1)),R.computeVertexNormals();let w=new He({color:16777215,map:i.concreteMap,normalMap:i.concreteNormalMap,normalScale:new le(.7,.7),roughness:.82,metalness:.06}),_=new B(R,w);_.castShadow=!e,_.receiveShadow=!e,t.add(_);let E=new Ot;E.setAttribute("position",new Nt(S,3)),E.setAttribute("uv",new Nt(m,2)),E.setIndex(new Nt(p,1)),E.computeVertexNormals();let L=new He({color:16777215,map:i.guardrailMap,normalMap:i.guardrailNormalMap,normalScale:new le(.9,.9),metalness:.72,roughness:.34,side:gn}),P=new B(E,L);t.add(P);let O=1e3,G=new We(.1,.85,.14);G.translate(0,.42,0);let K=new He({color:9741240,metalness:.72,roughness:.32}),D=new mn(G,K,O),H=new Ut;for(let J=0;J<O;J++){let Ae=Math.floor(J/2)*10+5,Ne=J%2===0?-1:1,et=Vn(Ae),g=r*(et.isTollPlaza?1.28:1);if(Ne===-1&&Ae>2385&&Ae<2515)H.scale.set(0,0,0);else{let b=_t(Ae,Ne*(g-.12),0);H.position.set(b.x,b.y,b.z),H.rotation.set(0,-b.sample.heading,0),H.scale.set(1,1,1)}H.updateMatrix(),D.setMatrixAt(J,H.matrix)}D.instanceMatrix.needsUpdate=!0,D.computeBoundingSphere(),t.add(D);let X=64,Y=140,ce=2200,$=Dt+1400,ie=new nn(ce,$,X,Y);ie.rotateX(-Math.PI/2);let re=ie.attributes.position;for(let J=0;J<re.count;J++){let Ae=re.getX(J),Ne=re.getZ(J)-Dt*.5;re.setZ(J,Ne);let et=Math.max(0,Math.min(Dt,-Ne)),g=Vn(et),b=Math.abs(Ae-g.x);if(b<22)re.setY(J,-.38);else{let C=Math.min(1,(b-22)/140),U=Math.sin(Ae*.014+Ne*.008)*3.8+Math.cos(Ae*.032-Ne*.019)*1.9+(b>260?Math.pow((b-260)/180,1.45)*(12+Math.sin(Ne*.011+Ae*.007)*6.5):0);re.setY(J,-.35+C*Math.max(-.2,U))}}ie.computeVertexNormals();let me=new He({color:16777215,map:i.terrainMap,normalMap:i.terrainNormalMap,normalScale:new le(.85,.85),roughness:.92,metalness:.02}),ze=new B(ie,me);ze.receiveShadow=!e,t.add(ze);let Q=96,Te=1650,Ie=3400,we=new Float32Array((Q+1)*2*3),ve=new Float32Array((Q+1)*2*3),Ge=new Uint32Array(Q*6);for(let J=0;J<=Q;J++){let Ae=J/Q*Math.PI*2,Ne=Math.cos(Ae)*Te,et=-Dt*.5+Math.sin(Ae)*Ie,g=22+Math.abs(Math.sin(Ae*7))*38+Math.abs(Math.cos(Ae*13+1.2))*22+Math.sin(Ae*3)*12,b=J*6;if(we[b]=Ne,we[b+1]=-4,we[b+2]=et,we[b+3]=Ne*1.03,we[b+4]=g,we[b+5]=et*1.02,ve.set([.24,.27,.25,.38,.42,.46],b),J<Q){let C=J*6,U=J*2;Ge.set([U,U+1,U+2,U+1,U+3,U+2],C)}}let ut=new Ot;ut.setAttribute("position",new Nt(we,3)),ut.setAttribute("color",new Nt(ve,3)),ut.setIndex(new Nt(Ge,1)),ut.computeVertexNormals();let Ve=new B(ut,new He({vertexColors:!0,roughness:.95,metalness:.02,side:gn}));t.add(Ve);let $e=720,Qe=new Ke(.18,.38,3.6,8);Qe.translate(0,1.8,0);let ne=new Ke(.1,.18,2.4,6);ne.rotateZ(.42),ne.translate(-.55,3.9,.15);let _e=new Ke(.1,.17,2.3,6);_e.rotateZ(-.38),_e.rotateX(.25),_e.translate(.52,3.8,-.25);let xe=new Ke(.09,.15,2.1,6);xe.rotateX(-.44),xe.translate(.05,4,.55);let V=Hl([Qe,ne,_e,xe]),Ee=new He({color:7033662,map:i.barkMap,roughness:.92}),qe=new mn(V,Ee,$e),ae=zl((J,Ae,Ne,et,g,b)=>{let C=new Zi(1.75,2),U=C.attributes.position;for(let z=0;z<U.count;z++){let pe=U.getX(z),Pe=U.getY(z),Me=U.getZ(z),Re=1+Math.sin(pe*3.1+Pe*2.7)*.16+Math.cos(Me*3.5-pe*2.1)*.14;U.setXYZ(z,pe*J*Re,Pe*Ae*Re,Me*Ne*Re)}return C.computeVertexNormals(),C.translate(et,g,b),C},"makeLeafCluster"),st=Hl([ae(1.25,.92,1.2,0,6.2,0),ae(1.05,.82,1.05,-1.25,4.9,.35),ae(1.08,.85,1.02,1.18,5.1,-.42),ae(.95,.78,1.1,.15,5.2,1.15)]),rt=new He({color:16777215,roughness:.84,metalness:.02}),tt=new mn(st,rt,$e);tt.castShadow=!e;let F=new Ye;for(let J=0;J<$e;J++){let Ae=J*33.7%(Dt-80)+30,Ne=J%2===0?-1:1,g=(Ne===-1&&Ae>2360&&Ae<2530?44:16.8)+J*19%52,b=_t(Ae,Ne*g,0),C=.78+J*13%44*.014;H.position.set(b.x,-.25,b.z),H.rotation.set(0,J*1.9%(Math.PI*2),0),H.scale.set(C,C*(.88+J%5*.09),C),H.updateMatrix(),qe.setMatrixAt(J,H.matrix),tt.setMatrixAt(J,H.matrix);let U=.24+J*7%12*.008,z=.44+J*11%9*.022,pe=.13+J*5%10*.012;F.setHSL(U,z,pe),tt.setColorAt(J,F)}qe.instanceMatrix.needsUpdate=!0,tt.instanceMatrix.needsUpdate=!0,tt.instanceColor&&(tt.instanceColor.needsUpdate=!0),qe.computeBoundingSphere(),tt.computeBoundingSphere(),t.add(qe),t.add(tt);let yt=800,nt=ae(.75,.52,.75,0,.35,0),W=new He({color:16777215,roughness:.9}),te=new mn(nt,W,yt);for(let J=0;J<yt;J++){let Ae=J*23.1%(Dt-40)+20,Ne=J%2===0?-1:1,et=13.6+J*7%14*.85,g=_t(Ae,Ne*et,-.25),b=.55+J%5*.16;H.position.set(g.x,g.y,g.z),H.rotation.set(0,J*1.1,0),H.scale.set(b,b*.85,b),H.updateMatrix(),te.setMatrixAt(J,H.matrix),F.setHSL(.21+J%6*.012,.42,.16+J%4*.02),te.setColorAt(J,F)}te.instanceMatrix.needsUpdate=!0,te.instanceColor&&(te.instanceColor.needsUpdate=!0),te.computeBoundingSphere(),t.add(te);let Le=350,fe=ae(.45,.58,.68,0,1.32,0),Ue=new He({color:2705694,roughness:.86}),A=new mn(fe,Ue,Le);for(let J=0;J<Le;J++){let Ae=J*14+18,Ne=_t(Ae,0,0);if(Ne.sample.isTollPlaza)H.scale.set(0,0,0);else{let et=.82+J%4*.12;H.position.set(Ne.x,Ne.y,Ne.z),H.rotation.set(0,-Ne.sample.heading+J%3*.3,0),H.scale.set(et,et,et)}H.updateMatrix(),A.setMatrixAt(J,H.matrix)}A.instanceMatrix.needsUpdate=!0,A.computeBoundingSphere(),t.add(A);let M=112,k=new Ke(.1,.17,9.4,8);k.translate(0,4.7,0);let ue=new Ke(.045,.06,2.2,6);ue.rotateZ(Math.PI/2-.22),ue.translate(-1.02,9.25,0);let se=new Ke(.045,.06,2.2,6);se.rotateZ(-(Math.PI/2-.22)),se.translate(1.02,9.25,0);let ge=Hl([k,ue,se]),be=new mn(ge,K,M),ee=new vt({color:16707722}),j=new We(4.4,.09,.36);j.translate(0,9.42,0);let Se=new mn(j,ee,M);for(let J=0;J<M;J++){let Ae=J*44+28,Ne=_t(Ae,0,0);H.position.set(Ne.x,Ne.y,Ne.z),H.rotation.set(0,-Ne.sample.heading,0),H.scale.set(1,1,1),H.updateMatrix(),be.setMatrixAt(J,H.matrix),Se.setMatrixAt(J,H.matrix)}be.instanceMatrix.needsUpdate=!0,Se.instanceMatrix.needsUpdate=!0,be.computeBoundingSphere(),Se.computeBoundingSphere(),t.add(be),t.add(Se);let I=600,q=new We(.14,.045,.18),Z=new vt({color:16498468}),oe=new mn(q,Z,I);for(let J=0;J<I;J++){let Ae=Math.floor(J/2)*16+6,Ne=J%2===0?-5.75:-1.85,et=_t(Ae,Ne,.04);H.position.set(et.x,et.y,et.z),H.rotation.set(0,-et.sample.heading,0),H.scale.set(1,1,1),H.updateMatrix(),oe.setMatrixAt(J,H.matrix)}oe.instanceMatrix.needsUpdate=!0,oe.computeBoundingSphere(),t.add(oe);let de=[],ye=[],Fe=new He({color:6583435,metalness:.65,roughness:.4,wireframe:!1});for(let J=180;J<Dt-150;J+=260){let Ae=_t(J,46,0),Ne=new It;Ne.position.set(Ae.x,0,Ae.z),Ne.rotation.y=-Ae.sample.heading;let et=new B(new Ke(.75,2.4,26,4,4,!1),Fe);et.position.y=13,et.rotation.y=Math.PI/4,Ne.add(et);let g=new B(new We(8.6,.45,.55),Fe);g.position.y=19.5,Ne.add(g);let b=new B(new We(6.4,.4,.45),Fe);b.position.y=23.8,Ne.add(b),t.add(Ne);let C=new N(Ae.x-4.1,19.3,Ae.z),U=new N(Ae.x+4.1,19.3,Ae.z);if(de.length>0){let z=de[de.length-1],pe=ye[ye.length-1];for(let Pe=1;Pe<=6;Pe++){let Me=Pe/6,Re=Math.sin(Me*Math.PI)*3.4;de.push(new N().lerpVectors(z,C,Me).add(new N(0,-Re,0))),ye.push(new N().lerpVectors(pe,U,Me).add(new N(0,-Re,0)))}}else de.push(C),ye.push(U)}let it=new Us({color:1976635});t.add(new Fs(new Ot().setFromPoints(de),it)),t.add(new Fs(new Ot().setFromPoints(ye),it));let he=new He({color:16777215,map:i.hazardConcreteMap,normalMap:i.concreteNormalMap,normalScale:new le(.5,.5),roughness:.68}),Xe=zl((J,Ae)=>{for(let Ne=J;Ne<=Ae;Ne+=35){let et=_t(Ne,0,0);if(et.y>.5){let g=et.y+.4,b=new It;b.position.set(et.x,0,et.z),b.rotation.y=-et.sample.heading;for(let U of[-5.8,5.8]){let z=new B(new Ke(.95,1.12,g,16),w);z.position.set(U,g*.5-.3,0),b.add(z)}let C=new B(new We(22.5,1.35,2.4),w);C.position.set(0,g-.65,0),b.add(C),t.add(b)}for(let g of[-1,1]){let b=_t(Ne,g*12.15,.52),C=new B(new We(.52,1.08,34.8),he);C.position.set(b.x,b.y,b.z),C.rotation.set(-b.sample.grade,-b.sample.heading,0,"YXZ"),t.add(C)}}},"buildBridgeStructure");Xe(980,1820),Xe(3180,3720);let je=[{s:260,en:"SHAHBAD 1.0 KM \xB7 KARNAL 4.1 KM",hi:"\u0936\u093E\u0939\u092C\u093E\u0926 \u0967 \u0915\u093F\u092E\u0940 \xB7 \u0915\u0930\u0928\u093E\u0932 \u096A.\u0967 \u0915\u093F\u092E\u0940",left:"HEAVY VEHICLES KEEP LEFT",right:"FAST LANE 80 KM/H",badge:"44"},{s:1050,en:"SHAHBAD FLYOVER AHEAD \xB7 KEEP LANE",hi:"\u0936\u093E\u0939\u092C\u093E\u0926 \u092B\u094D\u0932\u093E\u0908\u0913\u0935\u0930 \xB7 \u0905\u092A\u0928\u0940 \u0932\u0947\u0928 \u092E\u0947\u0902 \u091A\u0932\u0947\u0902",left:"GOODS CARRIERS 70 KM/H",right:"OVERTAKING LANE",badge:"44"},{s:2320,en:"SHER-E-PUNJAB DHABA & FUEL PLAZA",hi:"\u0936\u0947\u0930-\u090F-\u092A\u0902\u091C\u093E\u092C \u0922\u093E\u092C\u093E \u090F\u0935\u0902 \u0935\u093F\u0936\u094D\u0930\u093E\u092E \u0915\u0947\u0902\u0926\u094D\u0930",left:"TRUCK LAY-BY LEFT",right:"THROUGH TRAFFIC NH-44",badge:"44"},{s:3320,en:"PIPLI KURUKSHETRA INTERCHANGE",hi:"\u092A\u093F\u092A\u0932\u0940 \u0915\u0941\u0930\u0941\u0915\u094D\u0937\u0947\u0924\u094D\u0930 \u090F\u0915\u094D\u0938\u092A\u094D\u0930\u0947\u0938 \u091A\u094C\u0930\u093E\u0939\u093E",left:"KARNAL / PANIPAT / DELHI",right:"EXPRESS CORRIDOR",badge:"44"},{s:4120,en:"KARNAL TOLL PLAZA 250M \xB7 FASTAG",hi:"\u0915\u0930\u0928\u093E\u0932 \u091F\u094B\u0932 \u092A\u094D\u0932\u093E\u091C\u093C\u093E \u0968\u096B\u0966 \u092E\u0940\u091F\u0930 \xB7 \u092B\u093E\u0938\u094D\u091F\u0948\u0917",left:"HEAVY AXLE LANES 1-2",right:"REDUCE SPEED 40 KM/H",badge:"44"}];for(let J of je){let Ae=_t(J.s,0,0),Ne=new It;Ne.position.set(Ae.x,Ae.y,Ae.z),Ne.rotation.y=-Ae.sample.heading;for(let b of[-12.3,0]){let C=new B(new We(.95,1.2,.95),w);C.position.set(b,.6,0),Ne.add(C);let U=new B(new Ke(.24,.28,7.8,12),K);U.position.set(b,4.1,0),Ne.add(U)}for(let b of[6.65,7.75]){let C=new B(new Ke(.1,.1,13.4,10).rotateZ(Math.PI/2),K);C.position.set(-6.15,b,0),Ne.add(C)}for(let b=-12;b<=-.5;b+=1.4){let C=new B(new We(.08,1.15,.35),K);C.position.set(b,7.2,0),Ne.add(C)}let et=i.createGantrySignTexture(J.en,J.hi,J.left,J.right,J.badge),g=new B(new We(10.8,2.62,.16),new He({map:et,roughness:.32,metalness:.15}));g.position.set(-6.15,7.2,.28),Ne.add(g),t.add(Ne)}for(let J=500;J<Dt;J+=500){let Ae=Math.max(1,Math.round((Dt-J)/1e3*10)),Ne=_t(J,-11.6,0),et=i.createMilestoneTexture("KARNAL",Ae),g=new B(new We(.68,1.08,.22),new He({map:et,roughness:.7}));g.position.set(Ne.x,Ne.y+.54,Ne.z),g.rotation.y=-Ne.sample.heading,t.add(g)}let Ce=new vt({color:16498468}),xt=_t(2450,-25,0),ct=new It;ct.position.set(xt.x,0,xt.z),ct.rotation.y=-xt.sample.heading;let sn=new B(new We(26,.12,108),new He({color:4472892,normalMap:i.asphaltNormalMap,roughness:.92}));sn.position.set(4.5,.02,0),ct.add(sn);let dn=new B(new We(11,5.2,36),new He({color:10105874,normalMap:i.concreteNormalMap,roughness:.78}));dn.position.set(-7.5,2.6,-14),ct.add(dn);let fn=new B(new We(4.8,.35,36.8),new He({color:8138002,roughness:.7}));fn.position.set(-.2,3.8,-14),ct.add(fn);for(let J=-30;J<=2;J+=6.4){let Ae=new B(new We(.45,3.8,.45),w);Ae.position.set(1.8,1.9,J),ct.add(Ae)}for(let J=-26;J<=-2;J+=6){let Ae=new B(new We(1.9,.48,1.2),new He({color:14251782,roughness:.85}));Ae.position.set(.2,.28,J),ct.add(Ae)}let wn=new B(new We(.45,1.35,32),Ce);wn.position.set(-1.8,4.9,-14),ct.add(wn);let Xn=new B(new We(10.5,.92,22),new He({color:1981066,roughness:.35,metalness:.25}));Xn.position.set(-1.5,5.8,26),ct.add(Xn);let An=new B(new We(10.8,.42,22.3),new vt({color:16347926}));An.position.set(-1.5,5.8,26),ct.add(An);for(let J of[18,34]){let Ae=new B(new Ke(.32,.34,5.8,14),w);Ae.position.set(-1.5,2.9,J),ct.add(Ae);let Ne=new B(new We(.95,2.1,1.2),new He({color:14870768,roughness:.4}));Ne.position.set(-1.5,1.15,J+3.2),ct.add(Ne)}let xn=sr("lorry",14251782,i);xn.root.position.set(6.5,.05,-18),xn.root.rotation.y=.28,ct.add(xn.root);let Dn=sr("lorry",366185,i);Dn.root.position.set(5.8,.05,12),Dn.root.rotation.y=-.15,ct.add(Dn.root),t.add(ct);let ri=_t(4350,0,0),bt=new It;bt.position.set(ri.x,ri.y,ri.z),bt.rotation.y=-ri.sample.heading;let Nn=new B(new We(35.2,1.45,10.5),new He({color:988970,metalness:.45,roughness:.4}));Nn.position.set(0,7.6,0),bt.add(Nn);let yi=new B(new We(35.5,.48,10.8),new vt({color:1096065}));yi.position.set(0,7.8,0),bt.add(yi);for(let J of[-8.6,-3.1,3.1,8.6]){let Ae=new B(new We(1.6,.95,.25),new vt({color:2278750}));Ae.position.set(J,6.45,5.3),bt.add(Ae)}let fs=[-11.6,-5.75,0,5.75,11.6];for(let J of fs){let Ae=new B(new We(.96,.34,15.5),he);Ae.position.set(J,.17,0),bt.add(Ae);let Ne=new B(new Ke(.42,.45,1.15,14),new He({color:16436245,roughness:.5}));Ne.position.set(J,.65,7.2),bt.add(Ne);let et=new B(new We(.84,2.85,3.4),new He({color:14870768,roughness:.45}));et.position.set(J,1.6,0),bt.add(et);let g=new B(new We(.88,1.15,2.8),new He({color:988970,metalness:.8,roughness:.15}));g.position.set(J,1.95,0),bt.add(g);let b=new B(new Ke(.3,.34,7.6,14),w);b.position.set(J,3.8,0),bt.add(b)}t.add(bt);for(let J=0;J<42;J++){let Ae=J*118+90,Ne=J%2===0?-1:1,et=58+J*29%95,g=_t(Ae,Ne*et,0),b=new It;if(b.position.set(g.x,-.2,g.z),b.rotation.y=-g.sample.heading+J%3*.2,J%4===0){let C=new B(new Ke(5.5,7.2,2.6,12),new He({color:8138002,roughness:.92}));C.position.y=1.3,b.add(C);let U=new B(new Ke(.82,2.25,26,14),new He({color:10105874,roughness:.88}));U.position.y=13,b.add(U)}else if(J%5===0){let C=new B(new Ke(.35,1.85,32,4),new He({color:14427686,roughness:.6}));C.position.y=16,b.add(C);let U=new B(new $i(.35,8,8),new vt({color:15680580}));U.position.y=32.4,b.add(U)}else{let C=9+J%4*3.5,U=4.8+J%3*2.2,z=14+J%5*4.5,pe=new B(new We(C,U,z),new He({color:J%3===0?14078929:J%3===1?16708551:14742270,normalMap:i.concreteNormalMap,roughness:.85}));pe.position.set(0,U*.5,0),b.add(pe);let Pe=new B(new We(C+.8,.45,z+.8),new He({color:3359061,metalness:.5,roughness:.5}));Pe.position.set(0,U+.22,0),b.add(Pe)}t.add(b)}let Un=240,ai=new We(.08,.24,.04);ai.translate(0,.94,0);let ps=new vt({color:15680580}),qn=new mn(ai,ps,Un);for(let J=0;J<Un;J++){let Ae=Math.floor(J/2)*40+15,Ne=J%2===0?-1:1,et=_t(Ae,Ne*12.18,0);H.position.set(et.x,et.y,et.z),H.rotation.set(0,-et.sample.heading,0),H.scale.set(1,1,1),H.updateMatrix(),qn.setMatrixAt(J,H.matrix)}return qn.instanceMatrix.needsUpdate=!0,qn.computeBoundingSphere(),t.add(qn),{root:t,roadMat:T,streetLightHeadsMat:ee,dhabaLightsMat:Ce}}zl(bh,"buildHighwayEnvironment");var g_=Object.defineProperty,x_=(i,e)=>g_(i,"name",{value:e,configurable:!0}),Hd=class{constructor(){this.ctx=null,this.isMuted=!1,this.isRunning=!1,this.masterGain=null,this.engineOsc1=null,this.engineOsc2=null,this.engineSubOsc=null,this.engineFilter=null,this.engineGain=null,this.turboOsc=null,this.turboGain=null,this.roadNoiseFilter=null,this.roadNoiseGain=null,this.hornOsc1=null,this.hornOsc2=null,this.hornGain=null,this.lastShiftTrigger=0,this.lastAirBrakeTrigger=0,this.lastIndicatorBlink=!1}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{});return}let e=window.AudioContext||window.webkitAudioContext;if(e)try{this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=this.isMuted?0:.34,this.masterGain.connect(this.ctx.destination),this.engineFilter=this.ctx.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.frequency.value=180,this.engineFilter.Q.value=2.4,this.engineGain=this.ctx.createGain(),this.engineGain.gain.value=.001,this.engineOsc1=this.ctx.createOscillator(),this.engineOsc1.type="sawtooth",this.engineOsc1.frequency.value=32,this.engineOsc2=this.ctx.createOscillator(),this.engineOsc2.type="triangle",this.engineOsc2.frequency.value=64,this.engineSubOsc=this.ctx.createOscillator(),this.engineSubOsc.type="sine",this.engineSubOsc.frequency.value=16,this.engineOsc1.connect(this.engineFilter),this.engineOsc2.connect(this.engineFilter),this.engineSubOsc.connect(this.engineFilter),this.engineFilter.connect(this.engineGain),this.engineGain.connect(this.masterGain),this.engineOsc1.start(),this.engineOsc2.start(),this.engineSubOsc.start(),this.turboOsc=this.ctx.createOscillator(),this.turboOsc.type="sine",this.turboOsc.frequency.value=1600,this.turboGain=this.ctx.createGain(),this.turboGain.gain.value=0,this.turboOsc.connect(this.turboGain),this.turboGain.connect(this.masterGain),this.turboOsc.start();let t=this.ctx.sampleRate*2,n=this.ctx.createBuffer(1,t,this.ctx.sampleRate),s=n.getChannelData(0);for(let o=0;o<t;o++)s[o]=Math.random()*2-1;let r=this.ctx.createBufferSource();r.buffer=n,r.loop=!0,this.roadNoiseFilter=this.ctx.createBiquadFilter(),this.roadNoiseFilter.type="bandpass",this.roadNoiseFilter.frequency.value=320,this.roadNoiseFilter.Q.value=.9,this.roadNoiseGain=this.ctx.createGain(),this.roadNoiseGain.gain.value=0,r.connect(this.roadNoiseFilter),this.roadNoiseFilter.connect(this.roadNoiseGain),this.roadNoiseGain.connect(this.masterGain),r.start(),this.hornOsc1=this.ctx.createOscillator(),this.hornOsc1.type="sawtooth",this.hornOsc1.frequency.value=349.23,this.hornOsc2=this.ctx.createOscillator(),this.hornOsc2.type="sawtooth",this.hornOsc2.frequency.value=440;let a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.value=1450,this.hornGain=this.ctx.createGain(),this.hornGain.gain.value=0,this.hornOsc1.connect(a),this.hornOsc2.connect(a),a.connect(this.hornGain),this.hornGain.connect(this.masterGain),this.hornOsc1.start(),this.hornOsc2.start(),this.isRunning=!0}catch{}}setMuted(e){this.isMuted=e,this.masterGain&&this.ctx&&this.masterGain.gain.setTargetAtTime(e?0:.34,this.ctx.currentTime,.04)}getMuted(){return this.isMuted}pause(){this.engineGain&&this.ctx&&this.engineGain.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.05),this.roadNoiseGain&&this.ctx&&this.roadNoiseGain.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.05),this.turboGain&&this.ctx&&this.turboGain.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.05),this.hornGain&&this.ctx&&this.hornGain.gain.setTargetAtTime(0,this.ctx.currentTime,.02)}update(e,t){if(!this.ctx||!this.isRunning)return;if(!t||this.isMuted){this.pause();return}let n=this.ctx.currentTime,s=Math.max(28,e.rpm/60*3);this.engineOsc1?.frequency.setTargetAtTime(s,n,.04),this.engineOsc2?.frequency.setTargetAtTime(s*1.5,n,.04),this.engineSubOsc?.frequency.setTargetAtTime(s*.5,n,.04);let r=135+(e.rpm-650)*.18+e.engineLoad*180;this.engineFilter?.frequency.setTargetAtTime(r,n,.05);let a=.18+e.engineLoad*.16;this.engineGain?.gain.setTargetAtTime(a,n,.05);let o=1500+e.turboBoostBar*1100,l=Math.max(0,(e.turboBoostBar-.25)*.032);this.turboOsc?.frequency.setTargetAtTime(o,n,.06),this.turboGain?.gain.setTargetAtTime(l,n,.06);let c=Math.min(1,e.speedKmh/95),h=e.currentSurface==="asphalt"?1:2.1,u=c*.14*h;this.roadNoiseFilter?.frequency.setTargetAtTime(240+e.speedKmh*4.5,n,.08),this.roadNoiseGain?.gain.setTargetAtTime(u,n,.08),this.hornGain?.gain.setTargetAtTime(e.hornActive?.24:0,n,.02),e.gearShiftTrigger!==this.lastShiftTrigger&&(this.lastShiftTrigger=e.gearShiftTrigger,this.playPneumaticBurst(.11,950,.12)),e.airBrakeReleaseTrigger!==this.lastAirBrakeTrigger&&(this.lastAirBrakeTrigger=e.airBrakeReleaseTrigger,this.playPneumaticBurst(.24,1850,.16)),e.indicator!=="off"&&e.indicatorBlinkOn!==this.lastIndicatorBlink&&(this.lastIndicatorBlink=e.indicatorBlinkOn,this.playIndicatorClick(e.indicatorBlinkOn?1150:840))}playPneumaticBurst(e,t,n){if(!(!this.ctx||!this.masterGain||this.isMuted))try{let s=this.ctx.currentTime,r=Math.floor(this.ctx.sampleRate*e),a=this.ctx.createBuffer(1,r,this.ctx.sampleRate),o=a.getChannelData(0);for(let u=0;u<r;u++)o[u]=(Math.random()*2-1)*Math.exp(-u/(r*.4));let l=this.ctx.createBufferSource();l.buffer=a;let c=this.ctx.createBiquadFilter();c.type="bandpass",c.frequency.value=t,c.Q.value=1.8;let h=this.ctx.createGain();h.gain.setValueAtTime(n,s),h.gain.exponentialRampToValueAtTime(.001,s+e),l.connect(c),c.connect(h),h.connect(this.masterGain),l.start(s)}catch{}}playIndicatorClick(e){if(!(!this.ctx||!this.masterGain||this.isMuted))try{let t=this.ctx.currentTime,n=this.ctx.createOscillator(),s=this.ctx.createGain();n.type="triangle",n.frequency.setValueAtTime(e,t),s.gain.setValueAtTime(.08,t),s.gain.exponentialRampToValueAtTime(.001,t+.025),n.connect(s),s.connect(this.masterGain),n.start(t),n.stop(t+.028)}catch{}}dispose(){this.ctx&&(this.ctx.close().catch(()=>{}),this.ctx=null)}};x_(Hd,"TruckAudioEngine");var zd=Hd;var Th=["low","medium","high","ultra"],wh=["golden","day","night"],Ah=["chase","cabin","orbit"],wt={camera:new N,cameraLook:new N,cabin:new N,cabinLook:new N,mirror:new N,mirrorLook:new N,sun:new N};function __(){let e=document.createElement("canvas").getContext("webgl2");if(!e)return{available:!1,software:!0};let t=e.getExtension("WEBGL_debug_renderer_info"),n=String(e.getParameter(t?t.UNMASKED_RENDERER_WEBGL:e.RENDERER));return e.getExtension("WEBGL_lose_context")?.loseContext(),{available:!0,software:/SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(n)}}var Rh=class{constructor(){this.container=document.getElementById("canvas-mount"),this.hudRoot=document.getElementById("hud-root"),this.fatalError=document.getElementById("fatal-error"),this.autostart=new URLSearchParams(location.search).get("autostart")==="1",this.gameState=this.autostart?"playing":"title",this.telemetry=ds(60),this.traffic=ya(60),this.cameraMode="chase",this.timeOfDay="golden",this.graphicsQuality="low",this.isMuted=!1,this.hudCollapsed=!1,this.isTouchDevice=(window.matchMedia?.("(pointer: coarse)").matches??!1)||navigator.maxTouchPoints>0||"ontouchstart"in window&&window.innerWidth<1024,this.outcome=null,this.keysHeld=new Set,this.touchHeld={left:!1,right:!1,throttle:!1,brake:!1},this.shiftUpQueued=!1,this.shiftDownQueued=!1,this.orbit={yaw:.55,pitch:.28,distance:13.5},this.isDraggingOrbit=!1,this.lastPointer={x:0,y:0},this.runStartTime=performance.now(),this.elapsedSimTime=0,this.lastHudSyncTime=0,this.frameCounter=0,this.frameId=0,this.disposed=!1,this.hud=new Ll(this.hudRoot,{start:()=>this.startGame(),resume:()=>this.resumeGame(),pause:()=>this.pauseGame(),restart:()=>this.restartGame(),title:()=>this.returnToTitle(),camera:t=>this.cycleCamera(t),cycleCamera:()=>this.cycleCamera(),cycleTime:()=>this.cycleTimeOfDay(),time:t=>this.cycleTimeOfDay(t),quality:t=>this.setGraphicsQuality(t),cycleQuality:()=>this.cycleGraphicsQuality(),mute:()=>this.toggleMute(),headlights:()=>this.toggleHeadlights(),indicator:t=>this.toggleIndicator(t),transmission:t=>this.toggleTransmission(t),toggleTransmission:()=>this.toggleTransmission(),shiftUp:()=>this.queueShift(1),shiftDown:()=>this.queueShift(-1),toggleHud:()=>this.toggleHud(),horn:t=>this.setHorn(t),touch:(t,n)=>this.setTouchControl(t,n)}),this.renderHud();let e=__();if(!e.available){this.showFatalError("This browser cannot start the simulator because WebGL 2 is unavailable. Try a recent version of Chrome, Edge, Firefox, or Safari with hardware acceleration enabled.");return}this.isSoftwareGl=e.software;try{this.createScene(),this.bindInput(),this.frameId=requestAnimationFrame(()=>this.tick())}catch(t){console.error("Truck simulator initialization failed:",t),this.showFatalError(`The simulator could not initialize its 3D scene. ${t instanceof Error?t.message:String(t)}`)}}showFatalError(e){this.fatalError.textContent=e,this.fatalError.hidden=!1}model(){return{gameState:this.gameState,telemetry:this.telemetry,cameraMode:this.cameraMode,timeOfDay:this.timeOfDay,graphicsQuality:this.graphicsQuality,isMuted:this.isMuted,hudCollapsed:this.hudCollapsed,isTouchDevice:this.isTouchDevice,outcome:this.outcome}}renderHud(){this.hud.render(this.model())}startGame(){this.keysHeld.clear(),this.audio?.init(),this.runStartTime=performance.now(),this.outcome=null,this.gameState="playing",this.renderHud()}resumeGame(){this.keysHeld.clear(),this.audio?.init(),this.gameState="playing",this.renderHud()}pauseGame(){this.keysHeld.clear(),this.audio?.pause(),this.gameState="paused",this.renderHud()}restartGame(){this.keysHeld.clear();let e=ds(60);e.transmissionMode=this.telemetry.transmissionMode,e.headlightsOn=this.telemetry.headlightsOn,this.telemetry=e,this.traffic=ya(60),this.outcome=null,this.runStartTime=performance.now(),this.audio?.init(),this.gameState="playing",this.renderHud()}returnToTitle(){this.keysHeld.clear(),this.audio?.pause(),this.telemetry=ds(60),this.traffic=ya(60),this.outcome=null,this.gameState="title",this.renderHud()}cycleCamera(e){let t=Ah.indexOf(this.cameraMode);this.cameraMode=e||Ah[(t+1)%Ah.length],this.renderHud()}cycleTimeOfDay(e){let t=wh.indexOf(this.timeOfDay);this.timeOfDay=e||wh[(t+1)%wh.length],this.timeOfDay==="night"&&(this.telemetry.headlightsOn=!0),this.renderHud(),this.hud.updateTelemetry(this.telemetry)}setGraphicsQuality(e){this.graphicsQuality=e||Th[(Th.indexOf(this.graphicsQuality)+1)%Th.length],this.renderHud()}cycleGraphicsQuality(){this.setGraphicsQuality()}toggleMute(){this.isMuted=!this.isMuted,this.audio?.setMuted(this.isMuted),this.renderHud()}toggleHeadlights(){let e=this.telemetry;e.headlightsOn?e.highBeamOn?(e.headlightsOn=!1,e.highBeamOn=!1):e.highBeamOn=!0:(e.headlightsOn=!0,e.highBeamOn=!1),this.hud.updateTelemetry(e)}toggleIndicator(e){let t=this.telemetry;t.indicator=t.indicator===e?"off":e,this.hud.updateTelemetry(t)}toggleTransmission(e){this.telemetry.transmissionMode=e||(this.telemetry.transmissionMode==="auto"?"manual":"auto"),this.hud.updateTelemetry(this.telemetry),this.hud.syncSelections()}queueShift(e){e>0?this.shiftUpQueued=!0:this.shiftDownQueued=!0}setHorn(e){this.telemetry.hornActive=e,this.hud.updateTelemetry(this.telemetry)}setTouchControl(e,t){e in this.touchHeld&&(this.touchHeld[e]=t)}toggleHud(){this.hudCollapsed=!this.hudCollapsed,this.renderHud()}createScene(){let e=this.container.clientWidth||window.innerWidth,t=this.container.clientHeight||window.innerHeight;this.renderer=new yl({antialias:!this.isSoftwareGl,powerPreference:"high-performance"}),this.renderer.outputColorSpace=Ct,this.renderer.toneMapping=is,this.renderer.toneMappingExposure=.88,this.renderer.setPixelRatio(1),this.renderer.setSize(e,t),this.renderer.shadowMap.enabled=!1,this.renderer.shadowMap.type=Io,this.container.replaceChildren(this.renderer.domElement),this.scene=new qi,this.camera=new jt(62,e/t,.16,1150),this.composer=null,this.isSoftwareGl||(this.composer=new Rl(this.renderer),this.composer.addPass(new Cl(this.scene,this.camera)),this.composer.addPass(new tr(new le(Math.round(e*.5),Math.round(t*.5)),.12,.25,1.55)),this.composer.addPass(new Pl));let n=new Js(this.renderer);if(this.scene.environment=n.fromScene(new Tl,.04).texture,n.dispose(),this.sky=new ga,this.sky.scale.setScalar(2400),this.scene.add(this.sky),this.skyUniforms=this.sky.material.uniforms,this.hemiLight=new Xr(16639626,4472892,.88),this.hemiLight.position.set(0,120,0),this.scene.add(this.hemiLight),this.sunLight=new Yr(16772565,2.25),this.sunLight.position.set(-85,68,-60),!this.isSoftwareGl){this.sunLight.castShadow=!1,this.sunLight.shadow.mapSize.width=1024,this.sunLight.shadow.mapSize.height=1024,this.sunLight.shadow.camera.near=5,this.sunLight.shadow.camera.far=240;let a=48;this.sunLight.shadow.camera.left=-a,this.sunLight.shadow.camera.right=a,this.sunLight.shadow.camera.top=a,this.sunLight.shadow.camera.bottom=-a,this.sunLight.shadow.bias=-5e-4,this.sunLight.shadow.normalBias=.02}this.scene.add(this.sunLight,this.sunLight.target),this.fogColor=new Ye(14002050),this.scene.background=this.fogColor,this.linearFog=new Er(this.fogColor.getHex(),340,1180),this.scene.fog=this.linearFog,this.maxAnisotropy=this.renderer.capabilities.getMaxAnisotropy(),this.textures=Mh(Math.min(4,this.maxAnisotropy)),this.cloudPlane=new B(new nn(2200,2200),new vt({map:this.textures.cloudLayerMap,transparent:!0,opacity:.48,depthWrite:!1,fog:!1,side:gn})),this.cloudPlane.rotation.x=Math.PI/2,this.cloudPlane.position.y=240,this.scene.add(this.cloudPlane),this.envHandles=bh(this.textures,this.isSoftwareGl),this.scene.add(this.envHandles.root),this.playerRig=Sh(this.textures,this.isSoftwareGl),this.scene.add(this.playerRig.tractorRoot,this.playerRig.trailerRoot),this.mirrorRenderTarget=new Vt(256,512,{minFilter:tn,magFilter:tn,format:bn}),this.mirrorCamera=new jt(44,.5,.4,180);let s=new vt({map:this.mirrorRenderTarget.texture});this.playerRig.rightMirrorMesh.material=s,this.playerRig.leftMirrorMesh.material=s,this.trafficMeshes=[];for(let a of this.traffic){let o=sr(a.archetype,a.colorHex,this.textures);this.scene.add(o.root),this.trafficMeshes.push(o)}this.lastAppliedTier=null,this.activeTrafficCullDist=380,this.activeMirrorInterval=4,this.lastAppliedPreset=null,this.syncGraphicsTier(this.graphicsQuality);let r=this.telemetry;this.camera.position.set(r.x+7.5,r.y+3.1,r.z-8.2),this.camera.lookAt(r.x-.5,r.y+2,r.z+2.5),this.isSoftwareGl||this.renderer.compile(this.scene,this.camera),this.audio=new zd,this.clock=new Zr,this.applyLightingPreset(this.timeOfDay,r.z)}syncGraphicsTier(e){if(this.lastAppliedTier===e)return;this.lastAppliedTier=e;let t=this.container.clientWidth||window.innerWidth,n=this.container.clientHeight||window.innerHeight,s=window.devicePixelRatio||1;e==="low"?(this.renderer.setPixelRatio(1),this.renderer.setSize(t,n),this.renderer.shadowMap.enabled=!1,this.sunLight.castShadow=!1,this.camera.far=920,this.camera.updateProjectionMatrix(),this.mirrorCamera.far=115,this.mirrorCamera.updateProjectionMatrix(),this.activeTrafficCullDist=360,this.activeMirrorInterval=4):e==="medium"?(this.renderer.setPixelRatio(this.isSoftwareGl?1:Math.min(s,1.25)),this.renderer.setSize(t,n),this.renderer.shadowMap.enabled=!this.isSoftwareGl,this.sunLight.castShadow=!this.isSoftwareGl,!this.isSoftwareGl&&this.sunLight.shadow.mapSize.width!==1024&&(this.sunLight.shadow.mapSize.set(1024,1024),this.sunLight.shadow.map?.dispose(),this.sunLight.shadow.map=null),this.camera.far=1020,this.camera.updateProjectionMatrix(),this.mirrorCamera.far=155,this.mirrorCamera.updateProjectionMatrix(),this.activeTrafficCullDist=440,this.activeMirrorInterval=3):e==="high"?(this.renderer.setPixelRatio(this.isSoftwareGl?1:Math.min(s,1.65)),this.renderer.setSize(t,n),this.renderer.shadowMap.enabled=!this.isSoftwareGl,this.sunLight.castShadow=!this.isSoftwareGl,!this.isSoftwareGl&&this.sunLight.shadow.mapSize.width!==2048&&(this.sunLight.shadow.mapSize.set(2048,2048),this.sunLight.shadow.map?.dispose(),this.sunLight.shadow.map=null),this.camera.far=1120,this.camera.updateProjectionMatrix(),this.mirrorCamera.far=200,this.mirrorCamera.updateProjectionMatrix(),this.activeTrafficCullDist=520,this.activeMirrorInterval=2):(this.textures.upgradeToUltra4K(this.maxAnisotropy),this.renderer.setPixelRatio(this.isSoftwareGl?1:Math.min(s,2)),this.renderer.setSize(t,n),this.composer?.setSize(t,n),this.renderer.shadowMap.enabled=!this.isSoftwareGl,this.sunLight.castShadow=!this.isSoftwareGl,!this.isSoftwareGl&&this.sunLight.shadow.mapSize.width!==2048&&(this.sunLight.shadow.mapSize.set(2048,2048),this.sunLight.shadow.map?.dispose(),this.sunLight.shadow.map=null),this.camera.far=1250,this.camera.updateProjectionMatrix(),this.mirrorCamera.far=250,this.mirrorCamera.updateProjectionMatrix(),this.activeTrafficCullDist=680,this.activeMirrorInterval=1)}applyLightingPreset(e,t){this.sky.position.set(0,0,t),this.cloudPlane.position.z=t-180;let n=this.skyUniforms;if(e==="golden"){if(this.lastAppliedPreset!==e){n.turbidity.value=4.6,n.rayleigh.value=1.85,n.mieCoefficient.value=.0045,n.mieDirectionalG.value=.78;let s=Zs.degToRad(90-14.5),r=Zs.degToRad(205);wt.sun.setFromSphericalCoords(1,s,r),n.sunPosition.value.copy(wt.sun),this.fogColor.setHex(14002050),this.hemiLight.color.setHex(16639626),this.hemiLight.groundColor.setHex(4472892),this.hemiLight.intensity=.88,this.sunLight.color.setHex(16760440),this.sunLight.intensity=2.2,this.renderer.toneMappingExposure=.88,this.envHandles.streetLightHeadsMat.color.setHex(16707722),this.cloudPlane.visible=!0,this.sky.visible=!0,this.linearFog.near=350,this.linearFog.far=1180,this.lastAppliedPreset=e}this.sunLight.position.set(-110,56,t-140)}else if(e==="day"){if(this.lastAppliedPreset!==e){n.turbidity.value=2.6,n.rayleigh.value=1.25,n.mieCoefficient.value=.003,n.mieDirectionalG.value=.75;let s=Zs.degToRad(46),r=Zs.degToRad(160);wt.sun.setFromSphericalCoords(1,s,r),n.sunPosition.value.copy(wt.sun),this.fogColor.setHex(10212092),this.hemiLight.color.setHex(14742270),this.hemiLight.groundColor.setHex(5722958),this.hemiLight.intensity=.96,this.sunLight.color.setHex(16777215),this.sunLight.intensity=2.25,this.renderer.toneMappingExposure=.9,this.envHandles.streetLightHeadsMat.color.setHex(9741240),this.cloudPlane.visible=!0,this.sky.visible=!0,this.linearFog.near=380,this.linearFog.far=1220,this.lastAppliedPreset=e}this.sunLight.position.set(65,140,t-60)}else this.lastAppliedPreset!==e&&(this.fogColor.setHex(395796),this.hemiLight.color.setHex(1976635),this.hemiLight.groundColor.setHex(593174),this.hemiLight.intensity=.25,this.sunLight.color.setHex(3718648),this.sunLight.intensity=.28,this.renderer.toneMappingExposure=.92,this.envHandles.streetLightHeadsMat.color.setHex(16707722),this.cloudPlane.visible=!1,this.sky.visible=!1,this.linearFog.near=240,this.linearFog.far=860,this.lastAppliedPreset=e),this.sunLight.position.set(-60,80,t-80);this.scene.background=this.fogColor,this.linearFog.color.copy(this.fogColor)}bindInput(){this.onKeyDown=e=>{let t=e.code;if((this.gameState==="title"||this.gameState==="gameover")&&(t==="Enter"||t==="Space")){e.preventDefault(),this.gameState==="title"?this.startGame():this.restartGame();return}if(t==="Escape"||t==="KeyP"){e.preventDefault(),this.gameState==="playing"?this.pauseGame():this.gameState==="paused"&&this.resumeGame();return}this.gameState==="playing"&&(e.repeat||(t==="KeyC"?this.cycleCamera():t==="KeyL"?this.toggleHeadlights():t==="KeyT"?this.cycleTimeOfDay():t==="KeyF"?this.cycleGraphicsQuality():t==="KeyM"?this.toggleMute():t==="KeyR"?this.restartGame():t==="KeyU"?this.toggleHud():t==="KeyG"?this.toggleTransmission():t==="KeyQ"?this.toggleIndicator(this.telemetry.indicator==="left"?"off":"left"):t==="KeyE"?this.toggleIndicator(this.telemetry.indicator==="right"?"off":"right"):t==="KeyX"?this.toggleIndicator(this.telemetry.indicator==="hazard"?"off":"hazard"):["ShiftLeft","ShiftRight","BracketRight"].includes(t)?this.shiftUpQueued=!0:["ControlLeft","ControlRight","BracketLeft"].includes(t)?this.shiftDownQueued=!0:t==="KeyH"&&this.setHorn(!0)),this.keysHeld.add(t),this.audio?.init())},this.onKeyUp=e=>{this.keysHeld.delete(e.code),e.code==="KeyH"&&this.setHorn(!1)},this.onBlur=()=>{this.keysHeld.clear(),this.touchHeld={left:!1,right:!1,throttle:!1,brake:!1},this.telemetry.hornActive=!1,this.isDraggingOrbit=!1},this.onPointerDown=e=>{this.cameraMode==="orbit"&&(this.isDraggingOrbit=!0,this.lastPointer={x:e.clientX,y:e.clientY})},this.onPointerMove=e=>{if(!this.isDraggingOrbit||this.cameraMode!=="orbit")return;let t=e.clientX-this.lastPointer.x,n=e.clientY-this.lastPointer.y;this.lastPointer={x:e.clientX,y:e.clientY},this.orbit.yaw-=t*.007,this.orbit.pitch=Math.max(.08,Math.min(1.15,this.orbit.pitch+n*.006))},this.onPointerUp=()=>{this.isDraggingOrbit=!1},this.onResize=()=>{if(!this.renderer)return;let e=this.container.clientWidth||window.innerWidth,t=this.container.clientHeight||window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.composer?.setSize(e,t);let n=(window.matchMedia?.("(pointer: coarse)").matches??!1)||navigator.maxTouchPoints>0||"ontouchstart"in window&&window.innerWidth<1024;n!==this.isTouchDevice&&(this.isTouchDevice=n,this.renderHud())},window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),window.addEventListener("blur",this.onBlur),this.renderer.domElement.addEventListener("pointerdown",this.onPointerDown),window.addEventListener("pointermove",this.onPointerMove),window.addEventListener("pointerup",this.onPointerUp),window.addEventListener("resize",this.onResize)}finishRun(e){let t=e.cargoIntegrityPct>0,n=Math.max(1,(performance.now()-this.runStartTime)/1e3),s=Math.floor(n/60),r=Math.floor(n%60);this.outcome={victory:t,reason:t?"Cleared Karnal FASTag Toll Plaza on NH-44 Grand Trunk Corridor with heavy container freight intact.":"Excessive highway barrier or traffic impacts compromised the container cargo.",distanceKm:(e.distanceAlongHighwayM/1e3).toFixed(2),elapsedTimeFormatted:`${s}:${String(r).padStart(2,"0")}`,avgSpeedKmh:Math.round(e.totalDistanceDrivenM/n*3.6),cargoIntegrityPct:e.cargoIntegrityPct,fuelUsedLiters:(385-e.fuelLiters).toFixed(1)},this.audio?.pause(),this.gameState="gameover",this.renderHud()}afterDraw(){let e=this.renderer.getContext(),t=e.fenceSync?e.fenceSync(e.SYNC_GPU_COMMANDS_COMPLETE,0):null;e.flush();let n=()=>{if(this.disposed)return;(t?e.getSyncParameter(t,e.SYNC_STATUS):e.SIGNALED)===e.UNSIGNALED?this.frameId=window.setTimeout(n,5):(t&&e.deleteSync(t),this.frameId=window.setTimeout(()=>this.tick(),80))};this.frameId=window.setTimeout(n,5)}tick(){if(this.disposed)return;this.frameCounter++;let e=this.clock.getDelta(),t=this.isSoftwareGl&&e>.045?2:1,n=Math.min(e/t,.045);this.syncGraphicsTier(this.graphicsQuality);let s=this.keysHeld,r=this.touchHeld,g=window.__truckGamepad||{},eyeCtl=window.__truckEyeState||{},a=(s.has("KeyW")||s.has("ArrowUp")||r.throttle||g.throttle)&&!eyeCtl.emergency?1:0,o=s.has("KeyS")||s.has("ArrowDown")||r.brake||g.brake||eyeCtl.emergency?1:0,l=s.has("Space")||eyeCtl.emergency,c=s.has("KeyA")||s.has("ArrowLeft")||r.left?1:0,h=s.has("KeyD")||s.has("ArrowRight")||r.right?1:0,u=eyeCtl.emergency?Math.max(-.35,Math.min(.35,(this.telemetry.lateralOffsetM-8.2)*.08)):(g.steeringActive?g.steer:c-h),d=this.telemetry;if(this.gameState==="playing"){for(let S=0;S<t;S++)this.elapsedSimTime+=n,dh(d,{throttle:a,brake:o,serviceAirBrake:l,steer:u,shiftUpJustPressed:S===0?this.shiftUpQueued:!1,shiftDownJustPressed:S===0?this.shiftDownQueued:!1,engineBrakeActive:s.has("KeyB")},n,this.elapsedSimTime),Fl(this.traffic,d,n);this.shiftUpQueued=!1,this.shiftDownQueued=!1,(d.distanceAlongHighwayM>=4350||d.cargoIntegrityPct<=0)&&this.finishRun(d)}else this.gameState==="title"&&(this.elapsedSimTime+=n,Fl(this.traffic,d,n));Eh(this.playerRig,d,o>.1||l,this.isSoftwareGl),this.textures.updateCabinDisplays(d,this.traffic,this.cameraMode==="cabin");for(let S=0;S<this.traffic.length;S++){let m=this.traffic[S],p=this.trafficMeshes[S],y=m.s-d.distanceAlongHighwayM;y<-110||y>this.activeTrafficCullDist?p.root.visible=!1:(p.root.visible=!0,p.root.position.set(m.x,m.y,m.z),p.root.rotation.set(m.pitch,-m.heading,-m.roll,"YXZ"),p.brakeMat.color.setHex(m.braking?16720418:8330525))}this.applyLightingPreset(this.timeOfDay,d.z),this.sunLight.target.position.set(d.x,d.y,d.z-15);let f=this.isSoftwareGl?3:this.activeMirrorInterval;if(this.cameraMode==="cabin"&&this.frameCounter%f===1){this.playerRig.mirrorCameraAnchor.getWorldPosition(wt.mirror);let S=-Math.sin(d.heading),m=Math.cos(d.heading);this.mirrorCamera.position.copy(wt.mirror),wt.mirrorLook.set(wt.mirror.x+S*35-.8,wt.mirror.y-.55,wt.mirror.z+m*35),this.mirrorCamera.lookAt(wt.mirrorLook),this.playerRig.rightMirrorMesh.visible=!1,this.playerRig.leftMirrorMesh.visible=!1,this.renderer.setRenderTarget(this.mirrorRenderTarget),this.renderer.render(this.scene,this.mirrorCamera),this.renderer.setRenderTarget(null),this.playerRig.rightMirrorMesh.visible=!0,this.playerRig.leftMirrorMesh.visible=!0}this.updateCamera(d,e),this.audio.update(d,this.gameState==="playing");let x=performance.now();x-this.lastHudSyncTime>95&&(this.lastHudSyncTime=x,this.hud.updateTelemetry(d)),this.composer&&this.graphicsQuality==="ultra"?this.composer.render():this.renderer.render(this.scene,this.camera),this.isSoftwareGl?this.afterDraw():this.frameId=requestAnimationFrame(()=>this.tick())}updateCamera(e,t){let n=1-Math.exp(-8.5*Math.max(.016,t)),s=e.cameraTrauma*e.cameraTrauma*.22,r=Math.sin(this.elapsedSimTime*37)*s,a=Math.cos(this.elapsedSimTime*43)*s;if(this.gameState==="title"){let o=-.75+Math.sin(this.elapsedSimTime*.25)*.35,l=11.2;wt.camera.set(e.x+Math.cos(o)*l,e.y+3.1+Math.sin(this.elapsedSimTime*.4)*.35,e.z+Math.sin(o)*l+1.5),wt.cameraLook.set(e.x-.8,e.y+1.95,e.z+2.2),this.camera.position.copy(wt.camera),this.camera.lookAt(wt.cameraLook)}else if(this.cameraMode==="cabin"){this.playerRig.cabinCameraAnchor.getWorldPosition(wt.cabin);let o=Math.sin(e.heading),l=-Math.cos(e.heading),c=e.heading+e.steerAngleRad*.45,h=Math.sin(c),u=-Math.cos(c);this.camera.position.set(wt.cabin.x+r*.35,wt.cabin.y+a*.35,wt.cabin.z),wt.cabinLook.set(wt.cabin.x+h*26+o*2,wt.cabin.y-2.15+Math.sin(e.pitch)*18,wt.cabin.z+u*26+l*2),this.camera.lookAt(wt.cabinLook),this.camera.fov!==74&&(this.camera.fov=74,this.camera.updateProjectionMatrix())}else if(this.cameraMode==="orbit"){let{yaw:o,pitch:l,distance:c}=this.orbit,h=-e.heading+o;wt.camera.set(e.x+Math.sin(h)*Math.cos(l)*c,e.y+Math.sin(l)*c+1.5,e.z+Math.cos(h)*Math.cos(l)*c+2),this.camera.position.lerp(wt.camera,n),wt.cameraLook.set(e.x,e.y+1.9,e.z+1.5),this.camera.lookAt(wt.cameraLook)}else{let o=Math.sin(e.heading),l=-Math.cos(e.heading),c=Math.cos(e.heading),h=Math.sin(e.heading),u=17.2+Math.min(2.6,e.speedKmh*.025),d=1.35-e.steerAngleRad*2.2;wt.camera.set(e.x-o*u+c*d+r,e.y+5.35+a,e.z-l*u+h*d),this.camera.position.lerp(wt.camera,n),wt.cameraLook.set(e.x+o*16,e.y+2.1,e.z+l*16),this.camera.lookAt(wt.cameraLook);let f=60+Math.min(8,e.speedKmh*.075);Math.abs(this.camera.fov-f)>.2&&(this.camera.fov+=(f-this.camera.fov)*.1,this.camera.updateProjectionMatrix())}}dispose(){this.disposed=!0,cancelAnimationFrame(this.frameId),clearTimeout(this.frameId),this.onKeyDown&&window.removeEventListener("keydown",this.onKeyDown),this.onKeyUp&&window.removeEventListener("keyup",this.onKeyUp),this.onBlur&&window.removeEventListener("blur",this.onBlur),this.onPointerDown&&this.renderer?.domElement.removeEventListener("pointerdown",this.onPointerDown),this.onPointerMove&&window.removeEventListener("pointermove",this.onPointerMove),this.onPointerUp&&window.removeEventListener("pointerup",this.onPointerUp),this.onResize&&window.removeEventListener("resize",this.onResize),this.mirrorRenderTarget?.dispose(),this.composer?.dispose(),this.audio?.dispose(),this.renderer?.dispose()}};try{let i=new Rh;window.__truckSimulator=i;window.addEventListener("pagehide",()=>i.dispose(),{once:!0})}catch(i){console.error("Truck simulator startup failed:",i);let e=document.getElementById("fatal-error");e.textContent=`The simulator could not start. ${i instanceof Error?i.message:String(i)}`,e.hidden=!1}})();
