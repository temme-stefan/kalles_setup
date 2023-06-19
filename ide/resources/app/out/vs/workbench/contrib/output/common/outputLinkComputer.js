/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/(function(){var q=["require","exports","vs/base/common/platform","vs/base/common/extpath","vs/base/common/strings","vs/base/common/network","vs/base/common/uri","vs/base/common/path","vs/base/common/resources","vs/base/common/types","vs/base/common/errors","vs/workbench/contrib/output/common/outputLinkComputer","vs/editor/common/core/range"],N=function(L){for(var e=[],h=0,g=L.length;h<g;h++)e[h]=q[L[h]];return e};define(q[3],N([0,1,7,2,4,9]),function(L,e,h,g,m,v){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.randomPath=e.parseLineAndColumnAware=e.indexOfPath=e.getDriveLetter=e.hasDriveLetter=e.isRootOrDriveLetter=e.sanitizeFilePath=e.isWindowsDriveLetter=e.isEqualOrParent=e.isEqual=e.isValidBasename=e.isUNC=e.getRoot=e.toPosixPath=e.toSlashes=e.isPathSeparator=void 0;function y(i){return i===47||i===92}e.isPathSeparator=y;function w(i){return i.replace(/[\\/]/g,h.posix.sep)}e.toSlashes=w;function C(i){return i.indexOf("/")===-1&&(i=w(i)),/^[a-zA-Z]:(\/|$)/.test(i)&&(i="/"+i),i}e.toPosixPath=C;function a(i,o=h.posix.sep){if(!i)return"";const d=i.length,A=i.charCodeAt(0);if(y(A)){if(y(i.charCodeAt(1))&&!y(i.charCodeAt(2))){let U=3;const I=U;for(;U<d&&!y(i.charCodeAt(U));U++);if(I!==U&&!y(i.charCodeAt(U+1))){for(U+=1;U<d;U++)if(y(i.charCodeAt(U)))return i.slice(0,U+1).replace(/[\\/]/g,o)}}return o}else if(u(A)&&i.charCodeAt(1)===58)return y(i.charCodeAt(2))?i.slice(0,2)+o:i.slice(0,2);let R=i.indexOf("://");if(R!==-1){for(R+=3;R<d;R++)if(y(i.charCodeAt(R)))return i.slice(0,R+1)}return""}e.getRoot=a;function s(i){if(!g.isWindows||!i||i.length<5)return!1;let o=i.charCodeAt(0);if(o!==92||(o=i.charCodeAt(1),o!==92))return!1;let d=2;const A=d;for(;d<i.length&&(o=i.charCodeAt(d),o!==92);d++);return!(A===d||(o=i.charCodeAt(d+1),isNaN(o)||o===92))}e.isUNC=s;const P=/[\\/:\*\?"<>\|]/g,c=/[\\/]/g,l=/^(con|prn|aux|clock\$|nul|lpt[0-9]|com[0-9])(\.(.*?))?$/i;function t(i,o=g.isWindows){const d=o?P:c;return!(!i||i.length===0||/^\s+$/.test(i)||(d.lastIndex=0,d.test(i))||o&&l.test(i)||i==="."||i===".."||o&&i[i.length-1]==="."||o&&i.length!==i.trim().length||i.length>255)}e.isValidBasename=t;function n(i,o,d){const A=i===o;return!d||A?A:!i||!o?!1:(0,m.equalsIgnoreCase)(i,o)}e.isEqual=n;function r(i,o,d,A=h.sep){if(i===o)return!0;if(!i||!o||o.length>i.length)return!1;if(d){if(!(0,m.startsWithIgnoreCase)(i,o))return!1;if(o.length===i.length)return!0;let U=o.length;return o.charAt(o.length-1)===A&&U--,i.charAt(U)===A}return o.charAt(o.length-1)!==A&&(o+=A),i.indexOf(o)===0}e.isEqualOrParent=r;function u(i){return i>=65&&i<=90||i>=97&&i<=122}e.isWindowsDriveLetter=u;function f(i,o){return g.isWindows&&i.endsWith(":")&&(i+=h.sep),(0,h.isAbsolute)(i)||(i=(0,h.join)(o,i)),i=(0,h.normalize)(i),g.isWindows?(i=(0,m.rtrim)(i,h.sep),i.endsWith(":")&&(i+=h.sep)):(i=(0,m.rtrim)(i,h.sep),i||(i=h.sep)),i}e.sanitizeFilePath=f;function b(i){const o=(0,h.normalize)(i);return g.isWindows?i.length>3?!1:E(o)&&(i.length===2||o.charCodeAt(2)===92):o===h.posix.sep}e.isRootOrDriveLetter=b;function E(i,o=g.isWindows){return o?u(i.charCodeAt(0))&&i.charCodeAt(1)===58:!1}e.hasDriveLetter=E;function O(i,o=g.isWindows){return E(i,o)?i[0]:void 0}e.getDriveLetter=O;function k(i,o,d){return o.length>i.length?-1:i===o?0:(d&&(i=i.toLowerCase(),o=o.toLowerCase()),i.indexOf(o))}e.indexOfPath=k;function M(i){const o=i.split(":");let d,A,R;for(const U of o){const I=Number(U);(0,v.isNumber)(I)?A===void 0?A=I:R===void 0&&(R=I):d=d?[d,U].join(":"):U}if(!d)throw new Error("Format for `--goto` should be: `FILE:LINE(:COLUMN)`");return{path:d,line:A!==void 0?A:void 0,column:R!==void 0?R:A!==void 0?1:void 0}}e.parseLineAndColumnAware=M;const S="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",T="BDEFGHIJKMOQRSTUVWXYZbdefghijkmoqrstuvwxyz0123456789";function $(i,o,d=8){let A="";for(let U=0;U<d;U++){let I;U===0&&g.isWindows&&!o&&(d===3||d===4)?I=T:I=S,A+=I.charAt(Math.floor(Math.random()*I.length))}let R;return o?R=`${o}-${A}`:R=A,i?(0,h.join)(i,R):R}e.randomPath=$}),define(q[5],N([0,1,10,2,6]),function(L,e,h,g,m){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.COI=e.FileAccess=e.nodeModulesAsarUnpackedPath=e.nodeModulesAsarPath=e.nodeModulesPath=e.builtinExtensionsPath=e.RemoteAuthorities=e.connectionTokenQueryName=e.connectionTokenCookieName=e.Schemas=void 0;var v;(function(a){a.inMemory="inmemory",a.vscode="vscode",a.internal="private",a.walkThrough="walkThrough",a.walkThroughSnippet="walkThroughSnippet",a.http="http",a.https="https",a.file="file",a.mailto="mailto",a.untitled="untitled",a.data="data",a.command="command",a.vscodeRemote="vscode-remote",a.vscodeRemoteResource="vscode-remote-resource",a.vscodeUserData="vscode-userdata",a.vscodeCustomEditor="vscode-custom-editor",a.vscodeNotebookCell="vscode-notebook-cell",a.vscodeNotebookCellMetadata="vscode-notebook-cell-metadata",a.vscodeNotebookCellOutput="vscode-notebook-cell-output",a.vscodeInteractive="vscode-interactive",a.vscodeInteractiveInput="vscode-interactive-input",a.vscodeSettings="vscode-settings",a.vscodeWorkspaceTrust="vscode-workspace-trust",a.vscodeTerminal="vscode-terminal",a.vscodeChatSesssion="vscode-chat-editor",a.webviewPanel="webview-panel",a.vscodeWebview="vscode-webview",a.extension="extension",a.vscodeFileResource="vscode-file",a.tmp="tmp",a.vsls="vsls",a.vscodeSourceControl="vscode-scm"})(v||(e.Schemas=v={})),e.connectionTokenCookieName="vscode-tkn",e.connectionTokenQueryName="tkn";class y{constructor(){this.a=Object.create(null),this.b=Object.create(null),this.c=Object.create(null),this.d="http",this.e=null,this.f=`/${v.vscodeRemoteResource}`}setPreferredWebSchema(s){this.d=s}setDelegate(s){this.e=s}setServerRootPath(s){this.f=`${s}/${v.vscodeRemoteResource}`}set(s,P,c){this.a[s]=P,this.b[s]=c}setConnectionToken(s,P){this.c[s]=P}getPreferredWebSchema(){return this.d}rewrite(s){if(this.e)try{return this.e(s)}catch(r){return h.onUnexpectedError(r),s}const P=s.authority;let c=this.a[P];c&&c.indexOf(":")!==-1&&c.indexOf("[")===-1&&(c=`[${c}]`);const l=this.b[P],t=this.c[P];let n=`path=${encodeURIComponent(s.path)}`;return typeof t=="string"&&(n+=`&${e.connectionTokenQueryName}=${encodeURIComponent(t)}`),m.URI.from({scheme:g.isWeb?this.d:v.vscodeRemoteResource,authority:`${c}:${l}`,path:this.f,query:n})}}e.RemoteAuthorities=new y,e.builtinExtensionsPath="vs/../../extensions",e.nodeModulesPath="vs/../../node_modules",e.nodeModulesAsarPath="vs/../../node_modules.asar",e.nodeModulesAsarUnpackedPath="vs/../../node_modules.asar.unpacked";class w{asBrowserUri(s){const P=this.b(s,L);return this.uriToBrowserUri(P)}uriToBrowserUri(s){return s.scheme===v.vscodeRemote?e.RemoteAuthorities.rewrite(s):s.scheme===v.file&&(g.isNative||g.isWebWorker&&g.globals.origin===`${v.vscodeFileResource}://${w.a}`)?s.with({scheme:v.vscodeFileResource,authority:s.authority||w.a,query:null,fragment:null}):s}asFileUri(s){const P=this.b(s,L);return this.uriToFileUri(P)}uriToFileUri(s){return s.scheme===v.vscodeFileResource?s.with({scheme:v.file,authority:s.authority!==w.a?s.authority:null,query:null,fragment:null}):s}b(s,P){return m.URI.isUri(s)?s:m.URI.parse(P.toUrl(s))}}w.a="vscode-app",e.FileAccess=new w;var C;(function(a){const s=new Map([["1",{"Cross-Origin-Opener-Policy":"same-origin"}],["2",{"Cross-Origin-Embedder-Policy":"require-corp"}],["3",{"Cross-Origin-Opener-Policy":"same-origin","Cross-Origin-Embedder-Policy":"require-corp"}]]);a.CoopAndCoep=Object.freeze(s.get("3"));const P="vscode-coi";function c(t){let n;typeof t=="string"?n=new URL(t).searchParams:t instanceof URL?n=t.searchParams:m.URI.isUri(t)&&(n=new URL(t.toString(!0)).searchParams);const r=n?.get(P);if(r)return s.get(r)}a.getHeadersFromQuery=c;function l(t,n,r){if(!globalThis.crossOriginIsolated)return;const u=n&&r?"3":r?"2":"1";t instanceof URLSearchParams?t.set(P,u):t[P]=u}a.addSearchParam=l})(C||(e.COI=C={}))}),define(q[8],N([0,1,3,5,7,2,4,6]),function(L,e,h,g,m,v,y,w){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.toLocalResource=e.DataUri=e.distinctParents=e.addTrailingPathSeparator=e.removeTrailingPathSeparator=e.hasTrailingPathSeparator=e.isEqualAuthority=e.isAbsolutePath=e.resolvePath=e.relativePath=e.normalizePath=e.joinPath=e.dirname=e.extname=e.basename=e.basenameOrAuthority=e.getComparisonKey=e.isEqualOrParent=e.isEqual=e.extUriIgnorePathCase=e.extUriBiasedIgnorePathCase=e.extUri=e.ExtUri=e.originalFSPath=void 0;function C(l){return(0,w.uriToFsPath)(l,!0)}e.originalFSPath=C;class a{constructor(t){this.a=t}compare(t,n,r=!1){return t===n?0:(0,y.compare)(this.getComparisonKey(t,r),this.getComparisonKey(n,r))}isEqual(t,n,r=!1){return t===n?!0:!t||!n?!1:this.getComparisonKey(t,r)===this.getComparisonKey(n,r)}getComparisonKey(t,n=!1){return t.with({path:this.a(t)?t.path.toLowerCase():void 0,fragment:n?null:void 0}).toString()}ignorePathCasing(t){return this.a(t)}isEqualOrParent(t,n,r=!1){if(t.scheme===n.scheme){if(t.scheme===g.Schemas.file)return h.isEqualOrParent(C(t),C(n),this.a(t))&&t.query===n.query&&(r||t.fragment===n.fragment);if((0,e.isEqualAuthority)(t.authority,n.authority))return h.isEqualOrParent(t.path,n.path,this.a(t),"/")&&t.query===n.query&&(r||t.fragment===n.fragment)}return!1}joinPath(t,...n){return w.URI.joinPath(t,...n)}basenameOrAuthority(t){return(0,e.basename)(t)||t.authority}basename(t){return m.posix.basename(t.path)}extname(t){return m.posix.extname(t.path)}dirname(t){if(t.path.length===0)return t;let n;return t.scheme===g.Schemas.file?n=w.URI.file(m.dirname(C(t))).path:(n=m.posix.dirname(t.path),t.authority&&n.length&&n.charCodeAt(0)!==47&&(console.error(`dirname("${t.toString})) resulted in a relative path`),n="/")),t.with({path:n})}normalizePath(t){if(!t.path.length)return t;let n;return t.scheme===g.Schemas.file?n=w.URI.file(m.normalize(C(t))).path:n=m.posix.normalize(t.path),t.with({path:n})}relativePath(t,n){if(t.scheme!==n.scheme||!(0,e.isEqualAuthority)(t.authority,n.authority))return;if(t.scheme===g.Schemas.file){const f=m.relative(C(t),C(n));return v.isWindows?h.toSlashes(f):f}let r=t.path||"/";const u=n.path||"/";if(this.a(t)){let f=0;for(const b=Math.min(r.length,u.length);f<b&&!(r.charCodeAt(f)!==u.charCodeAt(f)&&r.charAt(f).toLowerCase()!==u.charAt(f).toLowerCase());f++);r=u.substr(0,f)+r.substr(f)}return m.posix.relative(r,u)}resolvePath(t,n){if(t.scheme===g.Schemas.file){const r=w.URI.file(m.resolve(C(t),n));return t.with({authority:r.authority,path:r.path})}return n=h.toPosixPath(n),t.with({path:m.posix.resolve(t.path,n)})}isAbsolutePath(t){return!!t.path&&t.path[0]==="/"}isEqualAuthority(t,n){return t===n||t!==void 0&&n!==void 0&&(0,y.equalsIgnoreCase)(t,n)}hasTrailingPathSeparator(t,n=m.sep){if(t.scheme===g.Schemas.file){const r=C(t);return r.length>h.getRoot(r).length&&r[r.length-1]===n}else{const r=t.path;return r.length>1&&r.charCodeAt(r.length-1)===47&&!/^[a-zA-Z]:(\/$|\\$)/.test(t.fsPath)}}removeTrailingPathSeparator(t,n=m.sep){return(0,e.hasTrailingPathSeparator)(t,n)?t.with({path:t.path.substr(0,t.path.length-1)}):t}addTrailingPathSeparator(t,n=m.sep){let r=!1;if(t.scheme===g.Schemas.file){const u=C(t);r=u!==void 0&&u.length===h.getRoot(u).length&&u[u.length-1]===n}else{n="/";const u=t.path;r=u.length===1&&u.charCodeAt(u.length-1)===47}return!r&&!(0,e.hasTrailingPathSeparator)(t,n)?t.with({path:t.path+"/"}):t}}e.ExtUri=a,e.extUri=new a(()=>!1),e.extUriBiasedIgnorePathCase=new a(l=>l.scheme===g.Schemas.file?!v.isLinux:!0),e.extUriIgnorePathCase=new a(l=>!0),e.isEqual=e.extUri.isEqual.bind(e.extUri),e.isEqualOrParent=e.extUri.isEqualOrParent.bind(e.extUri),e.getComparisonKey=e.extUri.getComparisonKey.bind(e.extUri),e.basenameOrAuthority=e.extUri.basenameOrAuthority.bind(e.extUri),e.basename=e.extUri.basename.bind(e.extUri),e.extname=e.extUri.extname.bind(e.extUri),e.dirname=e.extUri.dirname.bind(e.extUri),e.joinPath=e.extUri.joinPath.bind(e.extUri),e.normalizePath=e.extUri.normalizePath.bind(e.extUri),e.relativePath=e.extUri.relativePath.bind(e.extUri),e.resolvePath=e.extUri.resolvePath.bind(e.extUri),e.isAbsolutePath=e.extUri.isAbsolutePath.bind(e.extUri),e.isEqualAuthority=e.extUri.isEqualAuthority.bind(e.extUri),e.hasTrailingPathSeparator=e.extUri.hasTrailingPathSeparator.bind(e.extUri),e.removeTrailingPathSeparator=e.extUri.removeTrailingPathSeparator.bind(e.extUri),e.addTrailingPathSeparator=e.extUri.addTrailingPathSeparator.bind(e.extUri);function s(l,t){const n=[];for(let r=0;r<l.length;r++){const u=t(l[r]);l.some((f,b)=>b===r?!1:(0,e.isEqualOrParent)(u,t(f)))||n.push(l[r])}return n}e.distinctParents=s;var P;(function(l){l.META_DATA_LABEL="label",l.META_DATA_DESCRIPTION="description",l.META_DATA_SIZE="size",l.META_DATA_MIME="mime";function t(n){const r=new Map;n.path.substring(n.path.indexOf(";")+1,n.path.lastIndexOf(";")).split(";").forEach(b=>{const[E,O]=b.split(":");E&&O&&r.set(E,O)});const f=n.path.substring(0,n.path.indexOf(";"));return f&&r.set(l.META_DATA_MIME,f),r}l.parseMetaData=t})(P||(e.DataUri=P={}));function c(l,t,n){if(t){let r=l.path;return r&&r[0]!==m.posix.sep&&(r=m.posix.sep+r),l.with({scheme:n,authority:t,path:r})}return l.with({scheme:n})}e.toLocalResource=c}),define(q[11],N([0,1,6,3,8,4,12,2,5]),function(L,e,h,g,m,v,y,w,C){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.create=e.OutputLinkComputer=void 0;class a{constructor(c,l){this.b=c,this.a=new Map,this.c(l)}c(c){const l=c.workspaceFolders.sort((t,n)=>n.length-t.length).map(t=>h.URI.parse(t));for(const t of l){const n=a.createPatterns(t);this.a.set(t,n)}}d(c){return this.b.getMirrorModels().find(t=>t.uri.toString()===c)}computeLinks(c){const l=this.d(c);if(!l)return[];const t=[],n=v.splitLines(l.getValue());for(const[r,u]of this.a){const f={toResource:b=>typeof b=="string"?m.joinPath(r,b):null};for(let b=0,E=n.length;b<E;b++)t.push(...a.detectLinks(n[b],b+1,u,f))}return t}static createPatterns(c){const l=[],t=c.scheme===C.Schemas.file?c.fsPath:c.path,n=[t];w.isWindows&&c.scheme===C.Schemas.file&&n.push(g.toSlashes(t));for(const r of n){const u='[^\\s\\(\\):<>"]',b=`${`(?:${u}| ${u})`}+\\.${u}+`,E=`${u}+`;l.push(new RegExp(v.escapeRegExpCharacters(r)+`(${b}) on line ((\\d+)(, column (\\d+))?)`,"gi")),l.push(new RegExp(v.escapeRegExpCharacters(r)+`(${b}):line ((\\d+)(, column (\\d+))?)`,"gi")),l.push(new RegExp(v.escapeRegExpCharacters(r)+`(${b})(\\s?\\((\\d+)(,(\\d+))?)\\)`,"gi")),l.push(new RegExp(v.escapeRegExpCharacters(r)+`(${E})(:(\\d+))?(:(\\d+))?`,"gi"))}return l}static detectLinks(c,l,t,n){const r=[];return t.forEach(u=>{u.lastIndex=0;let f,b=0;for(;(f=u.exec(c))!==null;){const E=v.rtrim(f[1],".").replace(/\\/g,"/");let O;try{const T=n.toResource(E);T&&(O=T.toString())}catch{continue}if(f[3]){const T=f[3];if(f[5]){const $=f[5];O=v.format("{0}#{1},{2}",O,T,$)}else O=v.format("{0}#{1}",O,T)}const k=v.rtrim(f[0],"."),M=c.indexOf(k,b);b=M+k.length;const S={startColumn:M+1,startLineNumber:l,endColumn:M+1+k.length,endLineNumber:l};if(r.some(T=>y.Range.areIntersectingOrTouching(T.range,S)))return;r.push({range:S,url:O})}}),r}}e.OutputLinkComputer=a;function s(P,c){return new a(P,c)}e.create=s})}).call(this);

//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/695af097c7bd098fbf017ce3ac85e09bbc5dda06/core/vs/workbench/contrib/output/common/outputLinkComputer.js.map
