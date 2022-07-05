"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6405],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>p,MDXProvider:()=>c,mdx:()=>h,useMDXComponents:()=>d,withMDXComponents:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){return function(t){var n=d(t.components);return r.createElement(e,i({},t,{components:n}))}},d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),c=o,g=u["".concat(a,".").concat(c)]||u[c]||m[c]||i;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},18941:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var r,o=n(83117),i=n(80102),a=(n(67294),n(3905)),l=["components"],s={id:"general",title:"Troubleshooting General Issues",sidebar_label:"General Issues",custom_edit_url:"https://www.internalfb.com/intern/diffusion/FBS/browsefile/master/xplat/sonar/docs/getting-started/troubleshooting/general.mdx"},p=void 0,u={unversionedId:"getting-started/troubleshooting/general",id:"getting-started/troubleshooting/general",title:"Troubleshooting General Issues",description:"Flipper is a work in progress and issues may occur. This page contains known issues associated with the Mac desktop apps and provides steps you can take to try to resolve them.",source:"@site/../docs/getting-started/troubleshooting/general.mdx",sourceDirName:"getting-started/troubleshooting",slug:"/getting-started/troubleshooting/general",permalink:"/docs/getting-started/troubleshooting/general",draft:!1,editUrl:"https://www.internalfb.com/intern/diffusion/FBS/browsefile/master/xplat/sonar/docs/getting-started/troubleshooting/general.mdx",tags:[],version:"current",frontMatter:{id:"general",title:"Troubleshooting General Issues",sidebar_label:"General Issues",custom_edit_url:"https://www.internalfb.com/intern/diffusion/FBS/browsefile/master/xplat/sonar/docs/getting-started/troubleshooting/general.mdx"},sidebar:"main",previous:{title:"Introduction",permalink:"/docs/getting-started/troubleshooting/"},next:{title:"Android Issues",permalink:"/docs/getting-started/troubleshooting/android"}},d={},c=[{value:"Flipper won&#39;t launch on Mac",id:"flipper-wont-launch-on-mac",level:2},{value:"Flipper shows weird render artifacts",id:"flipper-shows-weird-render-artifacts",level:2},{value:"No plugins showing up for your device",id:"no-plugins-showing-up-for-your-device",level:2},{value:"Known Incompatibilities",id:"known-incompatibilities",level:2},{value:"I see &quot;No emulators available&quot;",id:"i-see-no-emulators-available",level:2}],m=(r="InternalGeneral",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.mdx)("div",e)}),g={toc:c};function h(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.mdx)("wrapper",(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"Flipper is a work in progress and issues may occur. This page contains known issues associated with the Mac desktop apps and provides steps you can take to try to resolve them."),(0,a.mdx)(m,{mdxType:"InternalGeneral"}),(0,a.mdx)("h2",{id:"flipper-wont-launch-on-mac"},"Flipper won't launch on Mac"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"If the window is appearing, try opening the Chrome DevTools within Flipper. To do so, from the View menu select 'Toggle Developer Tools' or press CMD+Option+I and check if there are any errors on the console."),(0,a.mdx)("li",{parentName:"ul"},"Launch Flipper from the command line using ",(0,a.mdx)("inlineCode",{parentName:"li"},"/Applications/Flipper.app/Contents/MacOS/Flipper"),". This should give you some logs, that might be helpful when debugging."),(0,a.mdx)("li",{parentName:"ul"},"Delete ",(0,a.mdx)("inlineCode",{parentName:"li"},"~/.flipper")," and try relaunching Flipper."),(0,a.mdx)("li",{parentName:"ul"},"Delete Flipper from your applications folder and ",(0,a.mdx)("a",{parentName:"li",href:"/docs/getting-started/#installation"},"re-install it"),"."),(0,a.mdx)("li",{parentName:"ul"},"If you're using ",(0,a.mdx)("inlineCode",{parentName:"li"},"yarn start")," to run from source, make sure all dependencies are installed correctly by running yarn install.")),(0,a.mdx)("h2",{id:"flipper-shows-weird-render-artifacts"},"Flipper shows weird render artifacts"),(0,a.mdx)("p",null,"This is a long standing MacOS + Electron issue outside our control. In general, restarting your computer fixes the problem.\nFor a quick, temporarily work around start Flipper with hardware acceleration disabled. Please note that this will consume a lot of CPU: ",(0,a.mdx)("inlineCode",{parentName:"p"},"FLIPPER_DISABLE_GPU=1 open -a Flipper"),"."),(0,a.mdx)("h2",{id:"no-plugins-showing-up-for-your-device"},"No plugins showing up for your device"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Check your device isn't on the list of ",(0,a.mdx)("a",{parentName:"li",href:"#known-incompatibilities"},"known incompatibilities"),"."),(0,a.mdx)("li",{parentName:"ul"},"Make sure your version of Flipper is up to date."),(0,a.mdx)("li",{parentName:"ul"},"Make sure the mobile SDK you are using is relatively recent (<1 month old)."),(0,a.mdx)("li",{parentName:"ul"},"Open Chrome dev tools within Flipper. To do so, from the View menu select Toggle Developer Tools or press CMD+Option+I and check if there are any errors on the console."),(0,a.mdx)("li",{parentName:"ul"},"Delete ",(0,a.mdx)("inlineCode",{parentName:"li"},"~/.flipper"),"."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("strong",{parentName:"li"},"Uninstall")," and reinstall the mobile app."),(0,a.mdx)("li",{parentName:"ul"},"Make sure the time and date are set correctly on your mobile device and desktop computer."),(0,a.mdx)("li",{parentName:"ul"},"If no app plugins are showing up, there may be a connectivity issue between Flipper and your app. Check ",(0,a.mdx)("a",{parentName:"li",href:"#connection-issues"},"connection issues")," to see if anything is failing.")),(0,a.mdx)("h2",{id:"known-incompatibilities"},"Known Incompatibilities"),(0,a.mdx)("p",null,"The following devices are known to be incompatible or face issues with Flipper:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Some Samsung devices (",(0,a.mdx)("a",{parentName:"li",href:"https://github.com/facebook/flipper/issues/92"},"Tracking Issue"),")."),(0,a.mdx)("li",{parentName:"ul"},"Genymotion emulators on Android 8+ are reported to have issues.")),(0,a.mdx)("h2",{id:"i-see-no-emulators-available"},'I see "No emulators available"'),(0,a.mdx)("p",null,"For ",(0,a.mdx)("strong",{parentName:"p"},"Android"),", you first need to set up Android Virtual Devices, called AVDs. You\ncan do this in Android Studio using the ",(0,a.mdx)("a",{parentName:"p",href:"https://developer.android.com/studio/run/managing-avds"},"Virtual Device Manager"),"."),(0,a.mdx)("p",null,"For ",(0,a.mdx)("strong",{parentName:"p"},"iOS"),", after installing Xcode, you should have a default set of simulators set up. However,\nit is possible to delete them and there is no easy way to restore them afterwards. You can use\n",(0,a.mdx)("a",{parentName:"p",href:"https://gist.github.com/dynamicguy/e8756a9f0f50af86d6e746d4b1ab6a09"},"a script like this one")," to\nrecreate the default set."))}h.isMDXComponent=!0}}]);