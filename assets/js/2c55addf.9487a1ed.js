"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[795],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>p,MDXProvider:()=>d,mdx:()=>f,useMDXComponents:()=>c,withMDXComponents:()=>u});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(){return l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},l.apply(this,arguments)}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),u=function(e){return function(n){var t=c(n.components);return r.createElement(e,l({},n,{components:t}))}},c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),d=i,g=u["".concat(a,".").concat(d)]||u[d]||m[d]||l;return t?r.createElement(g,o(o({ref:n},p),{},{components:t})):r.createElement(g,o({ref:n},p))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,a=new Array(l);a[0]=g;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var p=2;p<l;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},8924:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>u,default:()=>y,frontMatter:()=>p,metadata:()=>c,toc:()=>m});var r=t(83117),i=t(80102),l=(t(67294),t(3905)),a=t(44996),o=t(39960),s=["components"],p={id:"js-publishing",title:"Publishing Your Plugin",sidebar_label:"Publishing Your Plugin"},u=void 0,c={unversionedId:"tutorial/js-publishing",id:"tutorial/js-publishing",title:"Publishing Your Plugin",description:"The process of releasing plugins is largely automated at Meta. For details, see the Desktop Plugin Releases page.",source:"@site/../docs/tutorial/js-publishing.mdx",sourceDirName:"tutorial",slug:"/tutorial/js-publishing",permalink:"/docs/tutorial/js-publishing",draft:!1,editUrl:"https://github.com/facebook/flipper/blob/main/website/../docs/tutorial/js-publishing.mdx",tags:[],version:"current",frontMatter:{id:"js-publishing",title:"Publishing Your Plugin",sidebar_label:"Publishing Your Plugin"},sidebar:"main",previous:{title:"Custom UI",permalink:"/docs/tutorial/js-custom"},next:{title:"Development Setup",permalink:"/docs/extending/dev-setup"}},d={},m=[{value:"Installing Plugins",id:"installing-plugins",level:2},{value:"Native Distribution",id:"native-distribution",level:2}],g=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.mdx)("div",n)}},f=g("FbInternalOnly"),b=g("OssOnly"),h={toc:m};function y(e){var n=e.components,t=(0,i.Z)(e,s);return(0,l.mdx)("wrapper",(0,r.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)(f,{mdxType:"FbInternalOnly"},(0,l.mdx)("p",null,"The process of releasing plugins is largely automated at Meta. For details, see the ",(0,l.mdx)(o.default,{to:(0,a.default)("/docs/extending/fb/desktop-plugin-releases"),mdxType:"Link"},"Desktop Plugin Releases")," page.")),(0,l.mdx)(b,{mdxType:"OssOnly"},(0,l.mdx)("p",null,"Once you're happy with your plugin and want the world to see it, you can publish it to npm."),(0,l.mdx)("p",null,"Before publishing, ensure that your plugin complies with the following rules:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"The package name should start with 'flipper-plugin-'. This makes it easier to see the purpose of the package."),(0,l.mdx)("li",{parentName:"ul"},"The package must include the keyword 'flipper-plugin'."),(0,l.mdx)("li",{parentName:"ul"},"Source code of the plugin must be bundled by 'flipper-pkg' tool.")),(0,l.mdx)("p",null,"A valid example ",(0,l.mdx)("inlineCode",{parentName:"p"},"package.json")," could look like the following:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "https://fbflipper.com/schemas/plugin-package/v2.json",\n  "name": "flipper-plugin-sea-mammals",\n  "id": "sea-mammals",\n  "version": "2.0.0",\n  "main": "dist/bundle.js",\n  "flipperBundlerEntry": "src/index.tsx",\n  "license": "MIT",\n  "keywords": ["flipper-plugin"],\n  "icon": "apps",\n  "title": "Sea Mammals",\n  "category": "Example Plugin",\n  "scripts": {\n    "prepack": "flipper-pkg lint && flipper-pkg bundle"\n  },\n  "dependencies": {\n    "flipper": "latest"\n  },\n  "devDependencies": {\n    "flipper-pkg": "latest"\n  }\n}\n')),(0,l.mdx)("p",null,"When you have confirmed that your ",(0,l.mdx)("inlineCode",{parentName:"p"},"package.json")," is correct, run ",(0,l.mdx)("inlineCode",{parentName:"p"},"yarn publish")," or ",(0,l.mdx)("inlineCode",{parentName:"p"},"npm publish")," and follow the instructions."),(0,l.mdx)("h2",{id:"installing-plugins"},"Installing Plugins"),(0,l.mdx)("p",null,"Once your plugin is published you can find it, alongside other available Flipper plugins, by clicking on 'Manage Plugins...' in the bottom of the left sidebar and selecting the 'Install Plugins' tab.\nIt may take a few moments for the search index to update and your plugin to appear."),(0,l.mdx)("img",{alt:"Install plugins",src:(0,a.default)("img/install-plugins.png")}),(0,l.mdx)("h2",{id:"native-distribution"},"Native Distribution"),(0,l.mdx)("p",null,"Depending on whether the client-side part of your plugin targets Android, iOS or React Native, it's recommended you use the standard package distribution mechanism for the platform.\nThis may be Maven Central, JCenter or GitHub Packages for Android, CocoaPods for iOS and npm or GitHub Packages for React Native."),(0,l.mdx)("p",null,"Make sure to leave setup instructions in the README of your npm package.")))}y.isMDXComponent=!0}}]);