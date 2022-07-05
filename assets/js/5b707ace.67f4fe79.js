"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5591,2600],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>d,MDXProvider:()=>u,mdx:()=>v,useMDXComponents:()=>c,withMDXComponents:()=>s});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},r.apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=i.createContext({}),s=function(e){return function(n){var t=c(n.components);return i.createElement(e,r({},n,{components:t}))}},c=function(e){var n=i.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=c(e.components);return i.createElement(d.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=c(t),u=a,g=s["".concat(o,".").concat(u)]||s[u]||m[u]||r;return t?i.createElement(g,p(p({ref:n},d),{},{components:t})):i.createElement(g,p({ref:n},d))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=g;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var d=2;d<r;d++)o[d]=t[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},85956:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>s,default:()=>g,frontMatter:()=>d,metadata:()=>c,toc:()=>u});var i=t(83117),a=t(80102),r=(t(67294),t(3905)),o=t(44996),p=t(39960),l=["components"],d={},s=void 0,c={type:"mdx",permalink:"/docs/plugins/navigation/setup",source:"@site/src/embedded-pages/docs/plugins/navigation/setup.mdx",description:"Android",frontMatter:{}},u=[{value:"Android",id:"android",level:2},{value:"Using Android deep links",id:"using-android-deep-links",level:3},{value:"Third party solutions",id:"third-party-solutions",level:3},{value:"AirBnB deep link dispatch",id:"airbnb-deep-link-dispatch",level:4},{value:"iOS",id:"ios",level:2}],m={toc:u};function g(e){var n=e.components,t=(0,a.Z)(e,l);return(0,r.mdx)("wrapper",(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h2",{id:"android"},"Android"),(0,r.mdx)("p",null,"First, add the ",(0,r.mdx)(p.default,{to:(0,o.default)("/docs/features/plugins/navigation"),mdxType:"Link"},"Navigation plugin")," to your Flipper client instance:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"import com.facebook.flipper.android.AndroidFlipperClient;\nimport com.facebook.flipper.plugins.navigation.NavigationFlipperPlugin;\n\nfinal FlipperClient client = AndroidFlipperClient.getInstance(this);\nclient.addPlugin(NavigationFlipperPlugin.getInstance());\n")),(0,r.mdx)("p",null,"Navigation events in the app can then be recorded by calling ",(0,r.mdx)("inlineCode",{parentName:"p"},"sendNavigationEvent")," method of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"NavigationFlipperPlugin")," instance from anywhere in the app.\nThis enables the Navigation Plugin to be integrated into existing navigation frameworks."),(0,r.mdx)("h3",{id:"using-android-deep-links"},"Using Android deep links"),(0,r.mdx)("p",null,"The Navigation Plugin can be used with built in ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.android.com/training/app-links/deep-linking"},"deep links for Android"),"."),(0,r.mdx)("p",null,"To deep link to an activity, edit the AndroidManifest.xml and add the intent filter for the given activity, as follows:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-xml"},'<intent-filter>\n  <action android:name="android.intent.action.VIEW" />\n  <category android:name="android.intent.category.DEFAULT" />\n  <category android:name="android.intent.category.BROWSABLE" />\n  <data android:scheme="flipper" android:host="deep_link_activity" />\n</intent-filter>\n')),(0,r.mdx)("p",null,"This enables the user to jump to ",(0,r.mdx)("inlineCode",{parentName:"p"},"flipper://deep_link_activity")," within Flipper."),(0,r.mdx)("p",null,"To log that navigation event in flipper, you can send the navigation event in the Activity's ",(0,r.mdx)("inlineCode",{parentName:"p"},"onCreate")," method, as follows:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},'public class DeepLinkActivity extends AppCompatActivity {\n  @Override\n  protected void onCreate(final Bundle savedInstanceState) {\n    super.onCreate(savedInstanceState);\n    NavigationFlipperPlugin.getInstance().sendNavigationEvent("flipper://deep_link_activity/");\n    ...\n')),(0,r.mdx)("h3",{id:"third-party-solutions"},"Third party solutions"),(0,r.mdx)("p",null,"The Navigation Plugin can easily be integrated into a third-party navigation framework."),(0,r.mdx)("h4",{id:"airbnb-deep-link-dispatch"},"AirBnB deep link dispatch"),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"https://github.com/airbnb/DeepLinkDispatch"},"Deep Link Dispatch")," will work out of the box with Flipper for navigating to links, including support for url parameters."),(0,r.mdx)("p",null,"To add logging, simply add a BroadcastReceiver to your app that is called on any incoming deep links:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},'public class DeepLinkReceiver extends BroadcastReceiver {\n  private static final String TAG = "DeepLinkReceiver";\n\n  @Override public void onReceive(Context context, Intent intent) {\n    String deepLinkUri = intent.getStringExtra(DeepLinkHandler.EXTRA_URI);\n    if (intent.getBooleanExtra(DeepLinkHandler.EXTRA_SUCCESSFUL, false)) {\n      NavigationFlipperPlugin.getInstance().sendNavigationEvent(deepLinkUri);\n    }\n  }\n}\n\npublic class DeepLinkApplication extends Application {\n  @Override public void onCreate() {\n    super.onCreate();\n    IntentFilter intentFilter = new IntentFilter(DeepLinkHandler.ACTION);\n    LocalBroadcastManager.getInstance(this).registerReceiver(new DeepLinkReceiver(), intentFilter);\n  }\n}\n')),(0,r.mdx)("h2",{id:"ios"},"iOS"),(0,r.mdx)("p",null,"iOS support is coming soon."))}g.isMDXComponent=!0},14664:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var i=t(83117),a=t(80102),r=(t(67294),t(3905)),o=t(85956),p=["components"],l={id:"navigation",title:"Navigation Plugin Setup",sidebar_label:"Navigation",custom_edit_url:"https://github.com/facebook/flipper/blob/main/desktop/plugins/public/navigation/docs/setup.mdx"},d=void 0,s={unversionedId:"setup/plugins/navigation",id:"setup/plugins/navigation",title:"Navigation Plugin Setup",description:"",source:"@site/../docs/setup/plugins/navigation.mdx",sourceDirName:"setup/plugins",slug:"/setup/plugins/navigation",permalink:"/docs/setup/plugins/navigation",draft:!1,editUrl:"https://github.com/facebook/flipper/blob/main/desktop/plugins/public/navigation/docs/setup.mdx",tags:[],version:"current",frontMatter:{id:"navigation",title:"Navigation Plugin Setup",sidebar_label:"Navigation",custom_edit_url:"https://github.com/facebook/flipper/blob/main/desktop/plugins/public/navigation/docs/setup.mdx"},sidebar:"main",previous:{title:"LeakCanary",permalink:"/docs/setup/plugins/leak-canary"},next:{title:"Network",permalink:"/docs/setup/plugins/network"}},c={},u=[],m={toc:u};function g(e){var n=e.components,t=(0,a.Z)(e,p);return(0,r.mdx)("wrapper",(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)(o.default,{mdxType:"Article"}))}g.isMDXComponent=!0}}]);