(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return h}));var i=n(3),a=n(7),o=(n(0),n(143)),r=n(144),l={id:"troubleshooting",title:"Troubleshooting Issues",sidebar_label:"Troubleshooting Issues"},c={unversionedId:"troubleshooting",id:"troubleshooting",isDocsHomePage:!1,title:"Troubleshooting Issues",description:"We hope that flipper works well out of the box, but the software is a work in progress and problems will occur. Below are some known issues and steps you can take to try to resolve them.",source:"@site/../docs/troubleshooting.mdx",slug:"/troubleshooting",permalink:"/docs/troubleshooting",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/troubleshooting.mdx",version:"current",sidebar_label:"Troubleshooting Issues",sidebar:"setup",previous:{title:"Manually set up your React Native iOS App",permalink:"/docs/getting-started/react-native-ios"},next:{title:"Implementing a Flipper Client",permalink:"/docs/extending/new-clients"}},s=[{value:"General Issues",id:"general-issues",children:[]},{value:"Mac Desktop app",id:"mac-desktop-app",children:[{value:"Flipper won&#39;t launch on Mac",id:"flipper-wont-launch-on-mac",children:[]},{value:"Flipper shows weird render artifacts",id:"flipper-shows-weird-render-artifacts",children:[]},{value:"iOS Simulator missing from devices dropdown",id:"ios-simulator-missing-from-devices-dropdown",children:[]},{value:"No plugins showing up for your device",id:"no-plugins-showing-up-for-your-device",children:[]},{value:"Connection Issues",id:"connection-issues",children:[]},{value:"Known Incompatibilities",id:"known-incompatibilities",children:[]},{value:"File an Issue",id:"file-an-issue",children:[]}]},{value:"Android",id:"android-1",children:[{value:"Exception from call site #4 bootstrap method",id:"exception-from-call-site-4-bootstrap-method",children:[]},{value:"Duplicate class <code>com.facebook.jni.*</code>",id:"duplicate-class-comfacebookjni",children:[]}]},{value:"React Native",id:"react-native",children:[]}],p=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},b=p("FbInternalOnly"),u=p("InternalTroubleshooting"),d=p("OssOnly"),m={rightToc:s};function h(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"We hope that flipper works well out of the box, but the software is a work in progress and problems will occur. Below are some known issues and steps you can take to try to resolve them."),Object(o.b)(b,{mdxType:"FbInternalOnly"},Object(o.b)("h2",{id:"general-issues"},"General Issues"),Object(o.b)(u,{mdxType:"InternalTroubleshooting"})),Object(o.b)("h2",{id:"mac-desktop-app"},"Mac Desktop app"),Object(o.b)("h3",{id:"flipper-wont-launch-on-mac"},"Flipper won't launch on Mac"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If the window is appearing, try opening the Chrome DevTools within Flipper. To do so, from the View menu select Toggle Developer Tools or press CMD+Option+I and check if there are any errors on the console."),Object(o.b)("li",{parentName:"ul"},"Launch Flipper from the command line using ",Object(o.b)("inlineCode",{parentName:"li"},"/Applications/Flipper.app/Contents/MacOS/Flipper"),". This should give you some logs, that might be helpful when debugging."),Object(o.b)("li",{parentName:"ul"},"Delete ",Object(o.b)("inlineCode",{parentName:"li"},"~/.flipper")," and try relaunching Flipper."),Object(o.b)("li",{parentName:"ul"},"Delete Flipper from your applications folder and redownload ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.facebook.com/fbflipper/public/mac"}),"Flipper"),"."),Object(o.b)("li",{parentName:"ul"},"If you're using ",Object(o.b)("inlineCode",{parentName:"li"},"yarn start")," to run from source, make sure all dependencies are installed correctly by running yarn install.")),Object(o.b)("h3",{id:"flipper-shows-weird-render-artifacts"},"Flipper shows weird render artifacts"),Object(o.b)("p",null,"This is a long standing MacOS + Electron issue outside our control. In general restarting your computer fixes the problem.\nFor a quick, temporarily work around start Flipper with hardware acceleration disabled. Please note that this will consume a lot of CPU: ",Object(o.b)("inlineCode",{parentName:"p"},"FLIPPER_DISABLE_GPU=1 open -a Flipper"),"."),Object(o.b)("h3",{id:"ios-simulator-missing-from-devices-dropdown"},"iOS Simulator missing from devices dropdown"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Check that ",Object(o.b)("inlineCode",{parentName:"li"},"xcode-select -p")," shows the same XCode version that you're using. If not, see xcode-select for how to select the correct version.")),Object(o.b)("h3",{id:"no-plugins-showing-up-for-your-device"},"No plugins showing up for your device"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Check your device isn't on the list of ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"#known-incompatibilities"}),"known incompatibilities"),"."),Object(o.b)("li",{parentName:"ul"},"Make sure your version of Flipper is up to date."),Object(o.b)("li",{parentName:"ul"},"Make sure the mobile SDK you are using is relatively recent (<1 month old)."),Object(o.b)("li",{parentName:"ul"},"Open Chrome dev tools within Flipper. To do so, from the View menu select Toggle Developer Tools or press CMD+Option+I and check if there are any errors on the console."),Object(o.b)("li",{parentName:"ul"},"Delete ",Object(o.b)("inlineCode",{parentName:"li"},"~/.flipper"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Uninstall")," and reinstall the mobile app."),Object(o.b)("li",{parentName:"ul"},"Make sure the time and date are set correctly on your mobile device and desktop computer."),Object(o.b)("li",{parentName:"ul"},"If no app plugins are showing up, there may be a connectivity issue between Flipper and your app. Check ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"#connection-issues"}),"connection issues")," to see if anything is failing.")),Object(o.b)(d,{mdxType:"OssOnly"},Object(o.b)("h3",{id:"connection-issues"},"Connection Issues"),Object(o.b)("p",null,"The Flipper SDK includes an in-app connection diagnostics screen to help you diagnose problems."),Object(o.b)("h4",{id:"android"},"Android"),Object(o.b)("p",null,"Replace ",Object(o.b)("inlineCode",{parentName:"p"},"<APP_PACKAGE>")," below with the package name of your app, e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"com.facebook.flipper.sample"),".\nOn a terminal, run the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"adb shell am start -n <APP_PACKAGE>/com.facebook.flipper.android.diagnostics.FlipperDiagnosticActivity\n")),Object(o.b)("p",null,"This will only work if you added ",Object(o.b)("inlineCode",{parentName:"p"},"FlipperDiagnosticActivity")," to your ",Object(o.b)("inlineCode",{parentName:"p"},"AndroidManifest.xml"),". See ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/getting-started/android-native#diagnostics"}),"getting started")," for help."),Object(o.b)("h4",{id:"ios"},"iOS"),Object(o.b)("p",null,"You'll need to manually add this ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/facebook/flipper/blob/master/iOS/FlipperKit/FlipperDiagnosticsViewController.m"}),"ViewController")," to your app to see the in-app diagnostics.")),Object(o.b)("h3",{id:"known-incompatibilities"},"Known Incompatibilities"),Object(o.b)("p",null,"The following devices are known to be incompatible or face issues with flipper:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Physical iOS devices. Currently on iOS, only simulators are supported (",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/facebook/flipper/issues/262"}),"Tracking Issue"),")."),Object(o.b)("li",{parentName:"ul"},"Some Samsung devices (",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/facebook/flipper/issues/92"}),"Tracking Issue"),")."),Object(o.b)("li",{parentName:"ul"},"Genymotion emulators on Android 8+ are reported to have issues.")),Object(o.b)("h3",{id:"file-an-issue"},"File an Issue"),Object(o.b)("p",null,"Still not working? File an issue on ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/facebook/flipper/issues"}),"GitHub")," with the chrome DevTools logs and the output from the diagnostics screen, if relevant."),Object(o.b)("h2",{id:"android-1"},"Android"),Object(o.b)("h3",{id:"exception-from-call-site-4-bootstrap-method"},"Exception from call site #4 bootstrap method"),Object(o.b)("p",null,"Build error after including the Flipper dependency:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"Exception from call site #4 bootstrap method\n")),Object(o.b)("p",null,"This can happen because we include ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/square/okhttp/issues/4597#issuecomment-461204144"}),"OkHttp3")," as dependency which makes use of Java 8 features. There are two ways of dealing with this:"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Enable Java 8 support")),Object(o.b)("p",null,"Add this to your Gradle config:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-groovy"}),'android {\n  compileOptions {\n    targetCompatibility = "8"\n    sourceCompatibility = "8"\n   }\n }\n')),Object(o.b)("p",null," ",Object(o.b)("strong",{parentName:"p"},"Exclude the OkHttp3 dependency")),Object(o.b)("p",null," Alternatively, if you don't plan on making use of OkHttp, you can exclude the dependency from the build entirely:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"debugImplementation('com.facebook.flipper:flipper:*') {\n exclude group: 'com.squareup.okhttp3'\n}\n")),Object(o.b)("h3",{id:"duplicate-class-comfacebookjni"},"Duplicate class ",Object(o.b)("inlineCode",{parentName:"h3"},"com.facebook.jni.*")),Object(o.b)("p",null,"This can occur when mixing different versions of ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/facebookincubator/fbjni"}),"FBJNI"),",\na library we use to interact with native C++ code."),Object(o.b)("p",null,"Speficially, this can happen when the versions ",Object(o.b)("inlineCode",{parentName:"p"},"0.0.x")," and ",Object(o.b)("inlineCode",{parentName:"p"},"0.1.x")," are mixed. Version ",Object(o.b)("inlineCode",{parentName:"p"},"0.1.0")," of FBJNI\nswitched to using ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://google.github.io/prefab/"}),"Google Prefab"),' for distributing native artifacts,\nwhich made the split into combined, "java-only" and "header" packages redundant and only requires\na single dependency in your projects.'),Object(o.b)("p",null,'When including both "fbjni-java-only:0.0.1" and "fbjni:0.1.0" in one project, you will now\nduplicate class errors during the build process. You must ensure that only one of the two\nversions is used in your entire dependency tree. Start by looking at ',Object(o.b)("inlineCode",{parentName:"p"},"./gradlew :myapp:dependencies"),"\nto see where the different version requirements come from. Then exclude the FBJNI dependency from\none of them, e.g."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-groovy"}),"implementation(\"com.facebook.react:react-native:+\") {\n    exclude group:'com.facebook.fbjni'\n}\n")),Object(o.b)("h2",{id:"react-native"},"React Native"),Object(o.b)("p",null,"Make sure the project is using the ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"getting-started/react-native#using-the-latest-flipper-sdk"}),"latest Flipper SDK"),"."),Object(o.b)("p",null,"When using Flipper with React Native, two devices should show up:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"The 'React Native' device. This is the \"device\" that talks to the Metro server and shows plugins that connect to or through Metro, such as the React DevTools, the Hermes Debugger and Metro logs."),Object(o.b)("li",{parentName:"ol"},"The device on which your app is running (like ",Object(o.b)("inlineCode",{parentName:"li"},"SM760FS"),", ",Object(o.b)("inlineCode",{parentName:"li"},"Pixel 3"),", ",Object(o.b)("inlineCode",{parentName:"li"},"android_emulator"),", ",Object(o.b)("inlineCode",{parentName:"li"},"iPhone 11"),"). This is the device that Flipper connects to ADB / IDB. We primarily support emulators and USB connected devices.")),Object(o.b)("h4",{id:"q-i-dont-see-the-react-native-device"},"Q: I don't see the 'React Native' device"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Make sure that the Metro server is running."),Object(o.b)("li",{parentName:"ol"},"Make sure you are on React Native 0.62 or higher."),Object(o.b)("li",{parentName:"ol"},"Verify that the ",Object(o.b)("inlineCode",{parentName:"li"},"@react-native-community/cli")," version is ",Object(o.b)("inlineCode",{parentName:"li"},"0.47.0")," or higher (using ",Object(o.b)("inlineCode",{parentName:"li"},"yarn why @react-native-community/cli"),").")),Object(o.b)("h4",{id:"q-i-see-my-device--emulator-but-i-cant-see-the-app"},"Q: I see my device / emulator, but I can't see the app"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Make sure you are running a debug build. Flipper ",Object(o.b)("em",{parentName:"li"},"only")," supports debug builds."),Object(o.b)("li",{parentName:"ol"},"If you are upgraded from RN < 0.62.2, make sure you've updated all the dependencies and build related files according to the upgrade helper. For example: ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://react-native-community.github.io/upgrade-helper/?from=0.61.4&to=0.62.2"}),"https://react-native-community.github.io/upgrade-helper/?from=0.61.4&to=0.62.2")),Object(o.b)("li",{parentName:"ol"},"If you upgraded, make sure you made a clean build: ",Object(o.b)("inlineCode",{parentName:"li"},"cd android && ./gradlew clean"),", ",Object(o.b)("inlineCode",{parentName:"li"},"cd iOS && pod install --repo-update")),Object(o.b)("li",{parentName:"ol"},"For iOS, make sure it works on a simulator first"),Object(o.b)("li",{parentName:"ol"},"(Unconfirmed) check the deployment info target in the XCode project settings. Target should be ",Object(o.b)("inlineCode",{parentName:"li"},"iOS 9.0"),".")),Object(o.b)("h4",{id:"q-i-see-my-app-but-i-dont-see-the-external-plugins-ive-installed"},"Q: I see my app, but I don't see the external plugins I've installed"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},'Make sure you\'ve installed the desktop part of the plugin (usually through "Manage plugins" in Flipper). If no plugins show up under "Manage plugins" > "Status", make sure you\'ve selected your running device in the Flipper toolbar (and ',Object(o.b)("em",{parentName:"li"},"not"),' "React Native").'),Object(o.b)("li",{parentName:"ol"},"Make sure you've installed the app part of the plugin. Typically the installation instructions of the plugin itself need to be followed here."),Object(o.b)("li",{parentName:"ol"},"Make sure you've installed the latest version of ",Object(o.b)("inlineCode",{parentName:"li"},"react-native-flipper")," in your app, and run ",Object(o.b)("inlineCode",{parentName:"li"},"pod install")," in the ",Object(o.b)("inlineCode",{parentName:"li"},"iOS")," dir afterwards."),Object(o.b)("li",{parentName:"ol"},"Make sure you've restarted both Flipper and your app.")),Object(o.b)("h4",{id:"q-on-ios-it-seems-that-the-flipper-dependencies-are-compiled-when-making-a-release-build"},"Q: On iOS it seems that the Flipper dependencies are compiled when making a release build"),Object(o.b)("p",null,"That is correct, the dependencies won't be actually included in the release (when using ",Object(o.b)("inlineCode",{parentName:"p"},"react-native-flipper")," > 0.45), but sadly we can't exclude those dependencies from the build process."),Object(o.b)("h4",{id:"q-the-react-devtools-dont-seem-to-connect"},"Q: The React DevTools don't seem to connect"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Make sure there are no other instances of the React DevTools are running (For example a stand-alone version). Restart Flipper if needed after closing other tools."),Object(o.b)("li",{parentName:"ol"},"Make sure you have only one device running to connect to. If there are multiple devices, close them and try again (restart Flipper if needed)."),Object(o.b)("li",{parentName:"ol"},"Make sure there is only one RN app running on the device")),Object(o.b)("h4",{id:"q-how-to-select-a-specific-element-in-the-react-devtools"},"Q: How to select a specific element in the React DevTools?"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Trigger the debug menu on your RN app (you can use the button in the Flipper toolbar for that)"),Object(o.b)("li",{parentName:"ol"},"Use ",Object(o.b)("inlineCode",{parentName:"li"},"Show Inspector"),". Flipper will now follow the selection on your device.")),Object(o.b)("h4",{id:"q-the-hermes-debugger-does-not-connect"},"Q: The Hermes Debugger does not connect"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Make sure the Hermes engine is ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://reactnative.dev/docs/hermes"}),"enabled")),Object(o.b)("li",{parentName:"ol"},"Make sure only one device with React Native is running"),Object(o.b)("li",{parentName:"ol"},"Make sure there is only one RN app running on the device"),Object(o.b)("li",{parentName:"ol"},"Make sure the React Native app is ",Object(o.b)("em",{parentName:"li"},"not")," in debug mode already (trigger dev menu, and make sure that ",Object(o.b)("inlineCode",{parentName:"li"},"Remote JS Debugging")," is ",Object(o.b)("em",{parentName:"li"},"not")," enabled).")),Object(o.b)("h4",{id:"ios-build-errors-in-react-native"},"iOS Build errors in React Native"),Object(o.b)("p",null,"First, make sure your cocoapods is up to date (",Object(o.b)("inlineCode",{parentName:"p"},"sudo gem install cocoapods"),"), and that you are using the ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"getting-started/react-native#using-the-latest-flipper-sdk"}),"latest FlipperKit"),"."),Object(o.b)("p",null,"For inexplainable build errors, clone and verify if our ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/facebook/flipper/tree/master/react-native/ReactNativeFlipperExample"}),"reference project")," builds and runs locally. If it does, we recommend to compare the ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," and ",Object(o.b)("inlineCode",{parentName:"p"},"ios/Podfile")," files with yours. If that doesn't yield anything, compare the ",Object(o.b)("inlineCode",{parentName:"p"},"ios/Podfile.lock")," as well to verify any transitive pod dependencies need updating. "),Object(o.b)("h4",{id:"yogakitmodulemap-not-found"},Object(o.b)("inlineCode",{parentName:"h4"},"YogaKit.modulemap")," not found"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Make sure you are opening the ",Object(o.b)("inlineCode",{parentName:"li"},".xcodeworkspace")," dir when building from XCode, ",Object(o.b)("em",{parentName:"li"},"not")," the project file. Pods based projects should always be opened this way."),Object(o.b)("li",{parentName:"ol"},"Make sure you did run ",Object(o.b)("inlineCode",{parentName:"li"},"cd ios && pod install"),"."),Object(o.b)("li",{parentName:"ol"},"Restarting your machine seems to magically fix the issue for quite some people. This might especially be needed after doing an XCode upgrade."),Object(o.b)("li",{parentName:"ol"},"Make sure that the simulators are spawned by your current Xcode version. Force quite all simulators, run ",Object(o.b)("inlineCode",{parentName:"li"},"sudo xcode-select --switch /Applications/Xcode.app")," (update path were necessary), and start simulators & Flipper again."),Object(o.b)("li",{parentName:"ol"},"Make sure the iOS build target version aligns with the podfile and target iOS 11. ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/facebook/react-native/issues/28503#issuecomment-696026013"}),"Example")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/facebook/react-native/issues/28503#issuecomment-621662670"}),"Verify")," XCode has enough permissions."),Object(o.b)("li",{parentName:"ol"},"More solutions might be found in this ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/facebook/react-native/issues/28503"}),"thread"),".")),Object(o.b)("h4",{id:"swift-errors"},"Swift errors"),Object(o.b)("p",null,"If you experience errors such as ",Object(o.b)("inlineCode",{parentName:"p"},"Undefined symbol: associated type descriptor for FloatLiteralType")," or ",Object(o.b)("inlineCode",{parentName:"p"},"Undefined symbol: __swift_FORCE_LOAD_$_swiftCompatibility50")," after going through the ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"getting-started/index"}),"Getting Started")," tutorial you must do as follows:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Open your project in Xcode;")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click in your project's name on the left side;")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Make sure that you choose your project under ",Object(o.b)("inlineCode",{parentName:"p"},"PROJECT")," on the screen that has been opened;")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Go to the tab ",Object(o.b)("inlineCode",{parentName:"p"},"Build Settings"),";")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Search for ",Object(o.b)("inlineCode",{parentName:"p"},"LD_RUNPATH_SEARCH_PATHS")," (make sure that ",Object(o.b)("inlineCode",{parentName:"p"},"All")," is selected);")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Double-click ",Object(o.b)("inlineCode",{parentName:"p"},"Runpath Search Paths")," and, in the dialog that opens, click on the plus button at the bottom-left corner and paste ",Object(o.b)("inlineCode",{parentName:"p"},"/usr/lib/swift $(inherited)")," there;"),Object(o.b)("img",{alt:"Screenshot showing the places mentioned in the first steps",src:Object(r.a)("img/troubleshooting-react-native-ios-swift.png")})),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Now search for ",Object(o.b)("inlineCode",{parentName:"p"},"LIBRARY_SEARCH_PATHS"),";")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Double-click ",Object(o.b)("inlineCode",{parentName:"p"},"Library Search Paths")," and, in the dialog that opens, add the following items:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),'"$(TOOLCHAIN_DIR)/usr/lib/swift/$(PLATFORM_NAME)"\n"$(TOOLCHAIN_DIR)/usr/lib/swift-5.0/$(PLATFORM_NAME)"\n"$(inherited)"\n')),Object(o.b)("p",{parentName:"li"},Object(o.b)("em",{parentName:"p"},"Note: all of them should be added as ",Object(o.b)("inlineCode",{parentName:"em"},"non-recursive")," (the default).")),Object(o.b)("p",{parentName:"li"},"In the end it should look like this:"),Object(o.b)("img",{alt:"Screenshot showing the places mentioned in the last steps",src:Object(r.a)("img/troubleshooting-react-native-ios-swift-2.png")})),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Now you can run your build normally."))),Object(o.b)("h4",{id:"opting-out-from-flipper-ios"},"Opting out from flipper (iOS)"),Object(o.b)("p",null,"Comment out the relevant lines in ",Object(o.b)("inlineCode",{parentName:"p"},"ios/Podfile")," and run ",Object(o.b)("inlineCode",{parentName:"p"},"cd ios && pod install")," again:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"  # use_flipper!\n  # post_install do |installer|\n  #  flipper_post_install(installer)\n  # end\n")),Object(o.b)("h4",{id:"disable-flipper-on-ci-builds-ios"},"Disable Flipper on CI builds (iOS)"),Object(o.b)("p",null,"To speed up CI builds, Flipper can be disabled on CI environments by making the Flipper SDK inclusion conditional (this works on most CI providers, feel free to customize the environment variable):"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{}),"  if !ENV['CI']\n    use_flipper!\n    post_install do |installer|\n      flipper_post_install(installer)\n    end\n  end\n")))}h.isMDXComponent=!0},143:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var i=n(0),a=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),d=i,m=b["".concat(r,".").concat(d)]||b[d]||u[d]||o;return n?a.a.createElement(m,l(l({ref:t},s),{},{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},144:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return r}));var i=n(145),a=n(146);function o(){var e=Object(i.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,i){var o=void 0===i?{}:i,r=o.forcePrependBaseUrl,l=void 0!==r&&r,c=o.absolute,s=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(l)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+p:p}(o,n,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},145:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n(20);t.default=function(){var e=Object(i.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},146:function(e,t,n){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!i(e)}n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}))}}]);