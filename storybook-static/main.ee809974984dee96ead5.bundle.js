(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1142:function(module,exports,__webpack_require__){"use strict";var _clientApi=__webpack_require__(53),_clientLogger=__webpack_require__(40),_configFilename=__webpack_require__(1174);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1145:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(114).configure)([__webpack_require__(1146),__webpack_require__(1147)],module,!1)}).call(this,__webpack_require__(97)(module))},1146:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=1146},1147:function(module,exports,__webpack_require__){var map={"./components/Design_System/Button/Button2.stories.tsx":1148,"./components/Design_System/Input/Input.stories.tsx":1175,"./components/Group1/AppBar/AppBar.stories.tsx":1150,"./components/Group1/Card/Card.stories.tsx":1155,"./components/Group1/Header/Header.stories.tsx":235,"./components/Group2/Card2/Card.stories.tsx":1176,"./components/Group2/Page/Page.stories.tsx":1177,"./components/Group2/TextArea/TextArea.stories.tsx":1168,"./components/Pages/AppBarAndCard/AppBarAndCard.stories.tsx":1173};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1147},1148:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary})),__webpack_require__.d(__webpack_exports__,"Secondary",(function(){return Secondary})),__webpack_require__.d(__webpack_exports__,"Large",(function(){return Large})),__webpack_require__.d(__webpack_exports__,"Small",(function(){return Small}));var _home_q_Documents_WebDev_test_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(28),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(0),__webpack_require__(132)),_Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(135),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1);__webpack_exports__.default={title:"Design System/Atoms/Button",component:_Button__WEBPACK_IMPORTED_MODULE_3__.a,argTypes:{backgroundColor:{control:"color"},onClick:{action:"clicked"}},decorators:[_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.withKnobs]};var Template=function Template(args){var labelKnob=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)("label",args.label);return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_3__.a,Object(_home_q_Documents_WebDev_test_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(_home_q_Documents_WebDev_test_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},args),{},{label:labelKnob}))},Primary=Template.bind({});Primary.args={primary:!0,label:"Button"};var Secondary=Template.bind({});Secondary.args={label:"Button"};var Large=Template.bind({});Large.args={size:"large",label:"Button"};var Small=Template.bind({});Small.args={size:"small",label:"Button"},Primary.parameters=Object(_home_q_Documents_WebDev_test_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => {\n  const labelKnob = text('label', args.label)\n  return (\n    <Button {...args} label={labelKnob} />\n  )\n}"}},Primary.parameters),Secondary.parameters=Object(_home_q_Documents_WebDev_test_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => {\n  const labelKnob = text('label', args.label)\n  return (\n    <Button {...args} label={labelKnob} />\n  )\n}"}},Secondary.parameters),Large.parameters=Object(_home_q_Documents_WebDev_test_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => {\n  const labelKnob = text('label', args.label)\n  return (\n    <Button {...args} label={labelKnob} />\n  )\n}"}},Large.parameters),Small.parameters=Object(_home_q_Documents_WebDev_test_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => {\n  const labelKnob = text('label', args.label)\n  return (\n    <Button {...args} label={labelKnob} />\n  )\n}"}},Small.parameters)},1149:function(module,exports,__webpack_require__){},1150:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(0);var _storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(114),_AppBar__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(518),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Group1/AppBar",module).addParameters({storySource:{source:'import React from "react";\nimport { storiesOf } from "@storybook/react";\n\nimport AppBar from "./AppBar";\n\nstoriesOf("Group1/AppBar", module).add("default", () => (\n  <AppBar />\n));\n',locationsMap:{default:{startLoc:{col:39,line:6},endLoc:{col:1,line:8},startBody:{col:50,line:6},endBody:{col:1,line:8}}}}}).add("default",(function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_AppBar__WEBPACK_IMPORTED_MODULE_2__.a,{})}))}.call(this,__webpack_require__(142)(module))},1155:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _home_q_Documents_WebDev_test_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(28),_storybook_react__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(0),__webpack_require__(114)),_Card__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(346),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1),props={title:"Contemplative Reptile1"};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("Group1/Card",module).addParameters({storySource:{source:'import React from "react";\nimport { storiesOf } from "@storybook/react";\n\nimport Card, {IMediaCardProps} from "./Card";\n\nconst props: IMediaCardProps = {\n  title: \'Contemplative Reptile1\',\n}\n\nstoriesOf("Group1/Card", module)\n  .addDecorator((story) => (\n    <div>\n      <p style={{backgroundColor: \'gray\'}}>start</p>\n      {story()}\n      <p style={{backgroundColor: \'gray\'}}>stop</p>\n    </div>\n  ))\n  .add("titled", () => (<Card {...props} />))\n  .add("title less", () => (<Card  />))\n\n',locationsMap:{"title-less":{startLoc:{col:7,line:19},endLoc:{col:38,line:19},startBody:{col:21,line:19},endBody:{col:38,line:19}},titled:{startLoc:{col:7,line:18},endLoc:{col:44,line:18},startBody:{col:17,line:18},endBody:{col:44,line:18}}}}}).addDecorator((function(story){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p",{style:{backgroundColor:"gray"},children:"start"}),story(),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p",{style:{backgroundColor:"gray"},children:"stop"})]})})).add("titled",(function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Card__WEBPACK_IMPORTED_MODULE_3__.a,Object(_home_q_Documents_WebDev_test_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},props))})).add("title less",(function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Card__WEBPACK_IMPORTED_MODULE_3__.a,{})}))}.call(this,__webpack_require__(142)(module))},1156:function(module,exports,__webpack_require__){},1167:function(module,exports,__webpack_require__){},1168:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(0);var _storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(114),_TextArea__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(517),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Group2/TextArea",module).addParameters({storySource:{source:'import React from "react";\nimport { storiesOf } from "@storybook/react";\n\nimport TextArea from "./TextArea";\n\nstoriesOf("Group2/TextArea", module).add("default", () => (\n  <TextArea val={""} />\n));\n',locationsMap:{default:{startLoc:{col:41,line:6},endLoc:{col:1,line:8},startBody:{col:52,line:6},endBody:{col:1,line:8}}}}}).add("default",(function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_TextArea__WEBPACK_IMPORTED_MODULE_2__.a,{val:""})}))}.call(this,__webpack_require__(142)(module))},1173:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary}));var objectSpread2=__webpack_require__(28),makeStyles=(__webpack_require__(0),__webpack_require__(1179)),style=Object(makeStyles.a)((function(theme){return{container:{padding:theme.spacing(0)}}})),jsx_runtime=__webpack_require__(1),AppBarAndCard_AppBarAndCard=function AppBarAndCard(){style();return Object(jsx_runtime.jsx)(jsx_runtime.Fragment,{children:Object(jsx_runtime.jsx)("span",{children:"AppBarAndCard"})})},Pages_AppBarAndCard=AppBarAndCard_AppBarAndCard;try{AppBarAndCard_AppBarAndCard.displayName="AppBarAndCard",AppBarAndCard_AppBarAndCard.__docgenInfo={description:"",displayName:"AppBarAndCard",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Pages/AppBarAndCard/index.tsx#AppBarAndCard"]={docgenInfo:AppBarAndCard_AppBarAndCard.__docgenInfo,name:"AppBarAndCard",path:"src/components/Pages/AppBarAndCard/index.tsx#AppBarAndCard"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Pages/AppBarAndCard",component:Pages_AppBarAndCard};var Primary=function Template(){return Object(jsx_runtime.jsx)(Pages_AppBarAndCard,{})}.bind({});Primary.parameters=Object(objectSpread2.a)({storySource:{source:"() => <AppBarAndCard />"}},Primary.parameters)},1174:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"parameters",(function(){return parameters})),__webpack_require__.d(__webpack_exports__,"decorators",(function(){return decorators})),__webpack_require__.d(__webpack_exports__,"loaders",(function(){return loaders})),__webpack_require__.d(__webpack_exports__,"globalTypes",(function(){return globalTypes}));var regenerator=__webpack_require__(345),regenerator_default=__webpack_require__.n(regenerator),asyncToGenerator=__webpack_require__(512),objectSpread2=__webpack_require__(28),browser=(__webpack_require__(0),__webpack_require__(513)),browser_default=__webpack_require__.n(browser),preview=__webpack_require__(514),jsx_runtime=__webpack_require__(1),parameters={actions:{argTypesRegex:"^on[A-Z].*"},options:{storySort:function storySort(a,b){return a[1].kind===b[1].kind?0:a[1].id.localeCompare(b[1].id,void 0,{numeric:!0})}},viewport:{viewports:Object(objectSpread2.a)(Object(objectSpread2.a)({},preview.MINIMAL_VIEWPORTS),{kindleFire2:{name:"Kindle Fire 2",styles:{width:"600px",height:"963px"}},kindleFireHD:{name:"Kindle Fire HD",styles:{width:"533px",height:"801px"}}})}},decorators=[function(Story){return Object(jsx_runtime.jsx)("div",{style:{margin:"3em"},children:Object(jsx_runtime.jsx)(Story,{})})}],loaders=[Object(asyncToGenerator.a)(regenerator_default.a.mark((function _callee(){return regenerator_default.a.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,browser_default()("https://jsonplaceholder.typicode.com/users/1");case 2:return _context.t0=_context.sent.json(),_context.abrupt("return",{currentUser:_context.t0});case 4:case"end":return _context.stop()}}),_callee)})))],globalTypes={locale:{name:"Locale",description:"Internationalization locale",defaultValue:"en",toolbar:{icon:"globe",items:[{value:"en",right:"🇺🇸",title:"English"},{value:"fr",right:"🇫🇷",title:"Français"},{value:"es",right:"🇪🇸",title:"Español"},{value:"zh",right:"🇨🇳",title:"中文"},{value:"kr",right:"🇰🇷",title:"한국어"}]}}}},1175:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Template",(function(){return Input_stories_Template})),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary})),__webpack_require__.d(__webpack_exports__,"Secondary",(function(){return Secondary})),__webpack_require__.d(__webpack_exports__,"Tertiary",(function(){return Tertiary}));var objectSpread2=__webpack_require__(28),jsx_runtime=(__webpack_require__(0),__webpack_require__(1)),Input_Input=function Input(_ref){var val=_ref.val;return Object(jsx_runtime.jsx)("input",{type:"text",value:val})},Design_System_Input_Input=Input_Input;try{Input_Input.displayName="Input",Input_Input.__docgenInfo={description:"",displayName:"Input",props:{val:{defaultValue:null,description:"",name:"val",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Design_System/Input/Input.tsx#Input"]={docgenInfo:Input_Input.__docgenInfo,name:"Input",path:"src/components/Design_System/Input/Input.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Design System/Atoms/Input",component:Design_System_Input_Input,parameters:{layout:"centered",backgrounds:{values:[{name:"red",value:"#f00"},{name:"green",value:"#0f0"},{name:"blue",value:"#00f"}]}},decorators:[function(Story){return Object(jsx_runtime.jsx)("div",{className:"testClassName",children:Object(jsx_runtime.jsx)(Story,{})})}]};var Input_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(Design_System_Input_Input,Object(objectSpread2.a)({},args))},Primary=Input_stories_Template.bind({});Primary.storyName="Primary Input",Primary.args={val:"Primary"};var Secondary=Input_stories_Template.bind({});Secondary.storyName="Secondary Input",Secondary.args={val:"Secondary"};var Tertiary=Input_stories_Template.bind({});Tertiary.storyName="Tertiary Input",Tertiary.args={val:"Tertiary"},Input_stories_Template.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Input {...args} />"}},Input_stories_Template.parameters),Primary.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Input {...args} />"}},Primary.parameters),Secondary.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Input {...args} />"}},Secondary.parameters),Tertiary.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Input {...args} />"}},Tertiary.parameters)},1176:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"PrimaryComponent",(function(){return PrimaryComponent}));var objectSpread2=__webpack_require__(28),Button=(__webpack_require__(0),__webpack_require__(523)),dist=__webpack_require__(516),addon_knobs_dist=__webpack_require__(132),blocks=__webpack_require__(117),makeStyles=__webpack_require__(1179),Card_Card=__webpack_require__(1180),CardActionArea=__webpack_require__(1181),CardActions=__webpack_require__(1184),CardContent=__webpack_require__(1183),CardMedia=__webpack_require__(1182),Typography=__webpack_require__(522),jsx_runtime=__webpack_require__(1),useStyles=Object(makeStyles.a)({root:{maxWidth:345},media:{height:140}}),Card2_Card=function MediaCard(_ref){var title=_ref.title,onShareClick=_ref.onShareClick,classes=useStyles();return Object(jsx_runtime.jsxs)(Card_Card.a,{className:classes.root,children:[Object(jsx_runtime.jsxs)(CardActionArea.a,{children:[title&&Object(jsx_runtime.jsx)(CardMedia.a,{className:classes.media,image:"https://picsum.photos/200/300",title:title}),Object(jsx_runtime.jsxs)(CardContent.a,{children:[Object(jsx_runtime.jsx)(Typography.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Lizard"}),Object(jsx_runtime.jsx)(Typography.a,{variant:"body2",color:"textSecondary",component:"p",children:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"})]})]}),Object(jsx_runtime.jsxs)(CardActions.a,{children:[Object(jsx_runtime.jsx)(Button.a,{size:"small",color:"primary",onClick:onShareClick,children:"Share"}),Object(jsx_runtime.jsx)(Button.a,{size:"small",color:"primary",className:"btn",children:"Learn More"})]})]})};try{Card.displayName="Card",Card.__docgenInfo={description:"",displayName:"Card",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},onShareClick:{defaultValue:null,description:"",name:"onShareClick",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Group2/Card2/Card.tsx#Card"]={docgenInfo:Card.__docgenInfo,name:"Card",path:"src/components/Group2/Card2/Card.tsx#Card"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Group2/Card",component:Card2_Card,subcomponents:{Button:Button.a},argTypes:{backgroundColor:{control:"color"},onClick:{action:"clicked"}},parameters:{docs:{page:function page(){return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(blocks.Title,{}),Object(jsx_runtime.jsx)(blocks.Subtitle,{}),Object(jsx_runtime.jsx)(blocks.Description,{}),Object(jsx_runtime.jsx)(blocks.Primary,{}),Object(jsx_runtime.jsx)(blocks.ArgsTable,{story:blocks.PRIMARY_STORY}),Object(jsx_runtime.jsx)(blocks.Stories,{})]})}},actions:{handles:["mouseover","click .btn"]}},decorators:[addon_knobs_dist.withKnobs]};var PrimaryComponent=function Template(args){var titleKnow=Object(addon_knobs_dist.text)("title",args.title);return Object(jsx_runtime.jsx)(Card2_Card,Object(objectSpread2.a)(Object(objectSpread2.a)({},args),{},{title:titleKnow}))}.bind({});PrimaryComponent.args={title:"Contemplative Reptile",onShareClick:Object(dist.action)("share")},PrimaryComponent.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => {\n  const titleKnow = text('title', args.title as string)\n  return (\n    <Card {...args} title={titleKnow} />\n  )\n}"}},PrimaryComponent.parameters)},1177:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"LoggedIn",(function(){return LoggedIn})),__webpack_require__.d(__webpack_exports__,"LoggedOut",(function(){return LoggedOut}));var objectSpread2=__webpack_require__(28),Header=(__webpack_require__(0),__webpack_require__(178)),jsx_runtime=(__webpack_require__(1167),__webpack_require__(1)),Page_Page=function Page(_ref){var user=_ref.user,onLogin=_ref.onLogin,onLogout=_ref.onLogout,onCreateAccount=_ref.onCreateAccount;return Object(jsx_runtime.jsxs)("article",{children:[Object(jsx_runtime.jsx)(Header.a,{user:user,onLogin:onLogin,onLogout:onLogout,onCreateAccount:onCreateAccount}),Object(jsx_runtime.jsxs)("section",{children:[Object(jsx_runtime.jsx)("h2",{children:"Pages in Storybook"}),Object(jsx_runtime.jsxs)("p",{children:["We recommend building UIs with a"," ",Object(jsx_runtime.jsx)("a",{href:"https://componentdriven.org",target:"_blank",rel:"noopener noreferrer",children:Object(jsx_runtime.jsx)("strong",{children:"component-driven"})})," ","process starting with atomic components and ending with pages."]}),Object(jsx_runtime.jsx)("p",{children:"Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook:"}),Object(jsx_runtime.jsxs)("ul",{children:[Object(jsx_runtime.jsx)("li",{children:'Use a higher-level connected component. Storybook helps you compose such data from the "args" of child component stories'}),Object(jsx_runtime.jsx)("li",{children:"Assemble data in the page component from your services. You can mock these services out using Storybook."})]}),Object(jsx_runtime.jsxs)("p",{children:["Get a guided tutorial on component-driven development at"," ",Object(jsx_runtime.jsx)("a",{href:"https://www.learnstorybook.com",target:"_blank",rel:"noopener noreferrer",children:"Learn Storybook"}),". Read more in the"," ",Object(jsx_runtime.jsx)("a",{href:"https://storybook.js.org/docs",target:"_blank",rel:"noopener noreferrer",children:"docs"}),"."]}),Object(jsx_runtime.jsxs)("div",{className:"tip-wrapper",children:[Object(jsx_runtime.jsx)("span",{className:"tip",children:"Tip"})," Adjust the width of the canvas with the"," ",Object(jsx_runtime.jsx)("svg",{width:"10",height:"10",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg",children:Object(jsx_runtime.jsx)("g",{fill:"none",fillRule:"evenodd",children:Object(jsx_runtime.jsx)("path",{d:"M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z",id:"a",fill:"#999"})})}),"Viewports addon in the toolbar"]})]})]})};try{Page_Page.displayName="Page",Page_Page.__docgenInfo={description:"",displayName:"Page",props:{user:{defaultValue:null,description:"",name:"user",required:!1,type:{name:"{}"}},onLogin:{defaultValue:null,description:"",name:"onLogin",required:!0,type:{name:"() => void"}},onLogout:{defaultValue:null,description:"",name:"onLogout",required:!0,type:{name:"() => void"}},onCreateAccount:{defaultValue:null,description:"",name:"onCreateAccount",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Group2/Page/Page.tsx#Page"]={docgenInfo:Page_Page.__docgenInfo,name:"Page",path:"src/components/Group2/Page/Page.tsx#Page"})}catch(__react_docgen_typescript_loader_error){}var Header_stories=__webpack_require__(235),Page_stories_Template=(__webpack_exports__.default={title:"Group2/Page",component:Page_Page},function Template(args){return Object(jsx_runtime.jsx)(Page_Page,Object(objectSpread2.a)({},args))}),LoggedIn=Page_stories_Template.bind({});LoggedIn.args=Object(objectSpread2.a)({},Header_stories.LoggedIn.args);var LoggedOut=Page_stories_Template.bind({});LoggedOut.args=Object(objectSpread2.a)({},Header_stories.LoggedOut.args),LoggedIn.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Page {...args} />"}},LoggedIn.parameters),LoggedOut.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Page {...args} />"}},LoggedOut.parameters)},135:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Button}));var _home_q_Documents_WebDev_test_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(28),_home_q_Documents_WebDev_test_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(519),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__(0),__webpack_require__(1149),__webpack_require__(1)),Button=function Button(_ref){var _ref$primary=_ref.primary,primary=void 0!==_ref$primary&&_ref$primary,_ref$size=_ref.size,size=void 0===_ref$size?"medium":_ref$size,backgroundColor=_ref.backgroundColor,label=_ref.label,props=Object(_home_q_Documents_WebDev_test_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.a)(_ref,["primary","size","backgroundColor","label"]),mode=primary?"storybook-button--primary":"storybook-button--secondary";return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",Object(_home_q_Documents_WebDev_test_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(_home_q_Documents_WebDev_test_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({type:"button",className:["storybook-button","storybook-button--".concat(size),mode].join(" "),style:{backgroundColor:backgroundColor}},props),{},{children:label}))};try{Button.displayName="Button",Button.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Button",props:{primary:{defaultValue:{value:!1},description:"Is this the principal call to action on the page?",name:"primary",required:!1,type:{name:"boolean"}},backgroundColor:{defaultValue:null,description:"What background color to use",name:"backgroundColor",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"How large should the button be?",name:"size",required:!1,type:{name:'"small" | "medium" | "large"'}},label:{defaultValue:null,description:"Button contents",name:"label",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"Optional click handler",name:"onClick",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Design_System/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Design_System/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},178:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Header}));__webpack_require__(0);var _Design_System_Button_Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(135),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(1156),__webpack_require__(1)),Header=function Header(_ref){var user=_ref.user,onLogin=_ref.onLogin,onLogout=_ref.onLogout,onCreateAccount=_ref.onCreateAccount;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("header",{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"wrapper",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("g",{fill:"none",fillRule:"evenodd",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path",{d:"M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",fill:"#FFF"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path",{d:"M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",fill:"#555AB9"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path",{d:"M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",fill:"#91BAF8"})]})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h1",{children:"Acme"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{children:user?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Design_System_Button_Button__WEBPACK_IMPORTED_MODULE_1__.a,{size:"small",onClick:onLogout,label:"Log out"}):Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Design_System_Button_Button__WEBPACK_IMPORTED_MODULE_1__.a,{size:"small",onClick:onLogin,label:"Log in"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Design_System_Button_Button__WEBPACK_IMPORTED_MODULE_1__.a,{primary:!0,size:"small",onClick:onCreateAccount,label:"Sign up"})]})})]})})};try{Header.displayName="Header",Header.__docgenInfo={description:"",displayName:"Header",props:{user:{defaultValue:null,description:"",name:"user",required:!1,type:{name:"{}"}},onLogin:{defaultValue:null,description:"",name:"onLogin",required:!0,type:{name:"() => void"}},onLogout:{defaultValue:null,description:"",name:"onLogout",required:!0,type:{name:"() => void"}},onCreateAccount:{defaultValue:null,description:"",name:"onCreateAccount",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Group1/Header/Header.tsx#Header"]={docgenInfo:Header.__docgenInfo,name:"Header",path:"src/components/Group1/Header/Header.tsx#Header"})}catch(__react_docgen_typescript_loader_error){}},235:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"LoggedIn",(function(){return LoggedIn})),__webpack_require__.d(__webpack_exports__,"LoggedOut",(function(){return LoggedOut}));var _home_q_Documents_WebDev_test_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(28),_Header__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(0),__webpack_require__(178)),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1);__webpack_exports__.default={title:"Group1/Header",component:_Header__WEBPACK_IMPORTED_MODULE_2__.a};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Header__WEBPACK_IMPORTED_MODULE_2__.a,Object(_home_q_Documents_WebDev_test_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},args))},LoggedIn=Template.bind({});LoggedIn.args={user:{}};var LoggedOut=Template.bind({});LoggedOut.args={},LoggedIn.parameters=Object(_home_q_Documents_WebDev_test_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => <Header {...args} />"}},LoggedIn.parameters),LoggedOut.parameters=Object(_home_q_Documents_WebDev_test_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => <Header {...args} />"}},LoggedOut.parameters)},346:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(0);var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1179),_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1180),_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1181),_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1184),_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(1183),_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(1182),_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(523),_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(522),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(1),useStyles=Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.a)({root:{maxWidth:345},media:{height:140}});__webpack_exports__.a=function MediaCard(_ref){var title=_ref.title,classes=useStyles();return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__.a,{className:classes.root,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_3__.a,{children:[title&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6__.a,{className:classes.media,image:"https://picsum.photos/200/300",title:title}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__.a,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Lizard"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__.a,{variant:"body2",color:"textSecondary",component:"p",children:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"})]})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4__.a,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__.a,{size:"small",color:"primary",children:"Share"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__.a,{size:"small",color:"primary",children:"Learn More"})]})]})};try{Card.displayName="Card",Card.__docgenInfo={description:"",displayName:"Card",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Group1/Card/Card.tsx#Card"]={docgenInfo:Card.__docgenInfo,name:"Card",path:"src/components/Group1/Card/Card.tsx#Card"})}catch(__react_docgen_typescript_loader_error){}},517:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(0);var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1);__webpack_exports__.a=function TextArea(_ref){var val=_ref.val,_ref$cols=_ref.cols,cols=void 0===_ref$cols?10:_ref$cols,_ref$rows=_ref.rows,rows=void 0===_ref$rows?5:_ref$rows,name=_ref.name;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("textarea",{name:name,id:"",cols:cols,rows:rows,value:val})}},518:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return ButtonAppBar}));__webpack_require__(0);var AppBar=__webpack_require__(1205),Toolbar=__webpack_require__(1206),Typography=__webpack_require__(522),Button=__webpack_require__(523),IconButton=__webpack_require__(1207),Menu=__webpack_require__(515),Menu_default=__webpack_require__.n(Menu),makeStyles=__webpack_require__(1179),createStyles=__webpack_require__(1209),styles=Object(makeStyles.a)((function(theme){return Object(createStyles.a)({root:{flexGrow:1},menuButton:{marginRight:theme.spacing(2)},title:{flexGrow:1}})})),jsx_runtime=__webpack_require__(1);function ButtonAppBar(){var classes=styles();return Object(jsx_runtime.jsx)("div",{className:classes.root,children:Object(jsx_runtime.jsx)(AppBar.a,{position:"static",children:Object(jsx_runtime.jsxs)(Toolbar.a,{children:[Object(jsx_runtime.jsx)(IconButton.a,{edge:"start",className:classes.menuButton,color:"inherit","aria-label":"menu",children:Object(jsx_runtime.jsx)(Menu_default.a,{})}),Object(jsx_runtime.jsx)(Typography.a,{variant:"h6",className:classes.title,children:"News"}),Object(jsx_runtime.jsx)(Button.a,{color:"inherit",children:"Login"})]})})})}},533:function(module,exports,__webpack_require__){__webpack_require__(534),__webpack_require__(698),__webpack_require__(699),__webpack_require__(857),__webpack_require__(1073),__webpack_require__(1106),__webpack_require__(1111),__webpack_require__(1123),__webpack_require__(1125),__webpack_require__(1130),__webpack_require__(1132),__webpack_require__(1142),module.exports=__webpack_require__(1145)},607:function(module,exports){},699:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(114)}},[[533,1,2]]]);
//# sourceMappingURL=main.ee809974984dee96ead5.bundle.js.map