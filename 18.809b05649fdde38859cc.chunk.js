webpackJsonp([18],{"0Z1x":function(n,a){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> NgModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> CommonModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/common\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> ReactiveFormsModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyModule <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyBootstrapModule <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/bootstrap\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> AppComponent <span class="token punctuation" >}</span> from <span class="token string" >\'./app.component\'</span><span class="token punctuation" >;</span>\n@<span class="token function" >NgModule</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  imports<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    CommonModule<span class="token punctuation" >,</span>\n    ReactiveFormsModule<span class="token punctuation" >,</span>\n    FormlyBootstrapModule<span class="token punctuation" >,</span>\n    FormlyModule<span class="token punctuation" >.</span><span class="token function" >forRoot</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      validationMessages<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n        <span class="token punctuation" >{</span> name<span class="token punctuation" >:</span> <span class="token string" >\'required\'</span><span class="token punctuation" >,</span> message<span class="token punctuation" >:</span> <span class="token string" >\'This field is required\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n  declarations<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    AppComponent<span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppModule</span> <span class="token punctuation" >{</span> <span class="token punctuation" >}</span>\n'},"8AhF":function(n,a){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Component <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormGroup <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyFormOptions<span class="token punctuation" >,</span> FormlyFieldConfig <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n\n@<span class="token function" >Component</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  selector<span class="token punctuation" >:</span> <span class="token string" >\'formly-app-example\'</span><span class="token punctuation" >,</span>\n  templateUrl<span class="token punctuation" >:</span> <span class="token string" >\'./app.component.html\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppComponent</span> <span class="token punctuation" >{</span>\n  form <span class="token operator" >=</span> <span class="token keyword" >new</span> <span class="token class-name" >FormGroup</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  options<span class="token punctuation" >:</span> FormlyFormOptions <span class="token operator" >=</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\n  model <span class="token operator" >=</span> <span class="token punctuation" >{</span>\n    showErrorState<span class="token punctuation" >:</span> <span class="token keyword" >true</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\n  fields<span class="token punctuation" >:</span> FormlyFieldConfig<span class="token punctuation" >[</span><span class="token punctuation" >]</span> <span class="token operator" >=</span> <span class="token punctuation" >[</span>\n    <span class="token punctuation" >{</span>\n      key<span class="token punctuation" >:</span> <span class="token string" >\'email\'</span><span class="token punctuation" >,</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'input\'</span><span class="token punctuation" >,</span>\n      templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        type<span class="token punctuation" >:</span> <span class="token string" >\'email\'</span><span class="token punctuation" >,</span>\n        label<span class="token punctuation" >:</span> <span class="token string" >\'Email\'</span><span class="token punctuation" >,</span>\n        required<span class="token punctuation" >:</span> <span class="token keyword" >true</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      validation<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        show<span class="token punctuation" >:</span> <span class="token keyword" >true</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      expressionProperties<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        <span class="token string" >\'validation.show\'</span><span class="token punctuation" >:</span> <span class="token string" >\'model.showErrorState\'</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >{</span>\n      key<span class="token punctuation" >:</span> <span class="token string" >\'showErrorState\'</span><span class="token punctuation" >,</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'checkbox\'</span><span class="token punctuation" >,</span>\n      templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        label<span class="token punctuation" >:</span> <span class="token string" >\'Force show error state\'</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\n  <span class="token function" >submit</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>form<span class="token punctuation" >.</span>valid<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      <span class="token function" >alert</span><span class="token punctuation" >(</span>JSON<span class="token punctuation" >.</span><span class="token function" >stringify</span><span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>model<span class="token punctuation" >)</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n  <span class="token punctuation" >}</span>\n<span class="token punctuation" >}</span>\n'},Abzq:function(n,a){n.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nimport { AppComponent } from './app.component';\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      validationMessages: [\n        { name: 'required', message: 'This field is required' },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\nexport class AppModule { }\n"},SWKr:function(n,a){n.exports="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  options: FormlyFormOptions = {};\n\n  model = {\n    showErrorState: true,\n  };\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'email',\n      type: 'input',\n      templateOptions: {\n        type: 'email',\n        label: 'Email',\n        required: true,\n      },\n      validation: {\n        show: true,\n      },\n      expressionProperties: {\n        'validation.show': 'model.showErrorState',\n      },\n    },\n    {\n      key: 'showErrorState',\n      type: 'checkbox',\n      templateOptions: {\n        label: 'Force show error state',\n      },\n    },\n  ];\n\n  submit() {\n    if (this.form.valid) {\n      alert(JSON.stringify(this.model));\n    }\n  }\n}\n"},ascm:function(n,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=s("WT6e"),o=s("7DMc"),p=function(){function n(){this.form=new o.FormGroup({}),this.options={},this.model={showErrorState:!0},this.fields=[{key:"email",type:"input",templateOptions:{type:"email",label:"Email",required:!0},validation:{show:!0},expressionProperties:{"validation.show":"model.showErrorState"}},{key:"showErrorState",type:"checkbox",templateOptions:{label:"Force show error state"}}]}return n.prototype.submit=function(){this.form.valid&&alert(JSON.stringify(this.model))},n}(),e={examples:[{title:"Force showing error state",description:"\n              Using <code>validation.show = true</code> you can force the validation state to be set to true.\n            ",component:p,files:[{file:"app.component.html",content:s("qRCy"),filecontent:s("oYp/")},{file:"app.component.ts",content:s("8AhF"),filecontent:s("SWKr")},{file:"app.module.ts",content:s("0Z1x"),filecontent:s("Abzq")}]}]},l=function(){},c=s("INQx"),u=s("cPG/"),i=s("OGTa"),r=s("z4JO"),m=s("WhiG"),k=s("XPYZ"),d=s("CoID"),f=s("QMRz"),g=s("SSjb"),y=s("tGRr"),b=s("qwng"),h=s("UFNd"),v=s("PV5Z"),w=s("dI39"),C=s("S3hu"),F=s("UJsg"),M=s("OiLZ"),O=s("cIfd"),x=s("njCa"),N=t["\u0275crt"]({encapsulation:2,styles:[],data:{}});function S(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,12,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,a,s){var o=!0,p=n.component;return"submit"===a&&(o=!1!==t["\u0275nov"](n,2).onSubmit(s)&&o),"reset"===a&&(o=!1!==t["\u0275nov"](n,2).onReset()&&o),"ngSubmit"===a&&(o=!1!==p.submit()&&o),o},null,null)),t["\u0275did"](1,16384,null,0,o["\u0275bf"],[],null,null),t["\u0275did"](2,540672,null,0,o.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t["\u0275prd"](2048,null,o.ControlContainer,null,[o.FormGroupDirective]),t["\u0275did"](4,16384,null,0,o.NgControlStatusGroup,[o.ControlContainer],null,null),(n()(),t["\u0275ted"](-1,null,["\n  "])),(n()(),t["\u0275eld"](6,0,null,null,5,"formly-form",[],null,null,null,C.b,C.a)),t["\u0275did"](7,966656,null,0,F.a,[M.a,O.a,x.b,[2,o.NgForm],[2,o.FormGroupDirective],[3,F.a]],{model:[0,"model"],form:[1,"form"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),t["\u0275ted"](-1,0,["\n    "])),(n()(),t["\u0275eld"](9,0,null,0,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Submit"])),(n()(),t["\u0275ted"](-1,0,["\n  "])),(n()(),t["\u0275ted"](-1,null,["\n"])),(n()(),t["\u0275ted"](-1,null,["\n"]))],function(n,a){var s=a.component;n(a,2,0,s.form),n(a,7,0,s.model,s.form,s.fields,s.options)},function(n,a){n(a,0,0,t["\u0275nov"](a,4).ngClassUntouched,t["\u0275nov"](a,4).ngClassTouched,t["\u0275nov"](a,4).ngClassPristine,t["\u0275nov"](a,4).ngClassDirty,t["\u0275nov"](a,4).ngClassValid,t["\u0275nov"](a,4).ngClassInvalid,t["\u0275nov"](a,4).ngClassPending)})}var E=t["\u0275ccf"]("formly-app-example",p,function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,S,N)),t["\u0275did"](1,49152,null,0,p,[],null,null)],null,null)},{},{},[]),D=s("Xjw4"),R=s("9Sd6"),T=s("XHgV"),U=s("1T37"),q=s("+j5Y"),A=s("U/+3"),G=s("Mcof"),j=s("7u3n"),Z=s("6sdf"),P=s("z7Rf"),I=s("ItHS"),L=s("OE0E"),B=s("iLnc"),z=s("ApVT"),J=s("bkcK"),W=s("Uo70"),V=s("6GVX"),Y=s("gsbp"),H=s("EPl/"),K=s("kJ/S"),X=s("j06o"),Q=s("ZuzD"),_=s("sqmn"),$=s("255V"),nn=s("ixPN"),an=s("rK2e"),sn=function(){},tn=s("bfOx"),on=s("fCQL"),pn=s("ByAW"),en=s("9N4v"),ln=s("ykPx"),cn=s("nwY2"),un=s("TqLH"),rn=s("R2dV"),mn=s("JkuO"),kn=s("BILt"),dn=s("H69Y"),fn=s("j/TD"),gn=s("daWb"),yn=s("Dm6n"),bn=s("8F5j"),hn=s("WIBo"),vn=s("MjWI");s.d(a,"ConfigModuleNgFactory",function(){return wn});var wn=t["\u0275cmf"](l,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[c.a,u.a,i.a,r.a,m.a,k.a,d.a,f.a,g.a,y.a,b.a,h.a,v.a,w.a,E]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,D.NgLocalization,D.NgLocaleLocalization,[t.LOCALE_ID,[2,D["\u0275a"]]]),t["\u0275mpd"](6144,R.b,null,[D.DOCUMENT]),t["\u0275mpd"](4608,R.c,R.c,[[2,R.b]]),t["\u0275mpd"](4608,T.a,T.a,[]),t["\u0275mpd"](5120,U.d,U.b,[[3,U.d],t.NgZone,T.a]),t["\u0275mpd"](5120,U.g,U.f,[[3,U.g],T.a,t.NgZone]),t["\u0275mpd"](4608,q.i,q.i,[U.d,U.g,t.NgZone,D.DOCUMENT]),t["\u0275mpd"](5120,q.e,q.j,[[3,q.e],D.DOCUMENT]),t["\u0275mpd"](4608,q.h,q.h,[U.g,D.DOCUMENT]),t["\u0275mpd"](5120,q.f,q.m,[[3,q.f],D.DOCUMENT]),t["\u0275mpd"](4608,q.c,q.c,[q.i,q.e,t.ComponentFactoryResolver,q.h,q.f,t.ApplicationRef,t.Injector,t.NgZone,D.DOCUMENT]),t["\u0275mpd"](5120,q.k,q.l,[q.c]),t["\u0275mpd"](4608,A.k,A.k,[T.a]),t["\u0275mpd"](4608,A.j,A.j,[A.k,t.NgZone,D.DOCUMENT]),t["\u0275mpd"](136192,A.d,A.b,[[3,A.d],D.DOCUMENT]),t["\u0275mpd"](5120,A.n,A.m,[[3,A.n],[2,A.l],D.DOCUMENT]),t["\u0275mpd"](5120,A.i,A.g,[[3,A.i],t.NgZone,T.a]),t["\u0275mpd"](4608,G.d,G.d,[T.a]),t["\u0275mpd"](135680,G.a,G.a,[G.d,t.NgZone]),t["\u0275mpd"](5120,j.b,j.c,[q.c]),t["\u0275mpd"](4608,Z.b,Z.b,[]),t["\u0275mpd"](5120,P.d,P.a,[[3,P.d],[2,I.c],L.c,[2,D.DOCUMENT]]),t["\u0275mpd"](4608,B.a,B.a,[]),t["\u0275mpd"](4608,z.a,z.a,[]),t["\u0275mpd"](4608,o.FormBuilder,o.FormBuilder,[]),t["\u0275mpd"](4608,o["\u0275i"],o["\u0275i"],[]),t["\u0275mpd"](4608,x.b,x.b,[x.a]),t["\u0275mpd"](4608,O.a,O.a,[]),t["\u0275mpd"](4608,M.a,M.a,[x.b,O.a]),t["\u0275mpd"](512,D.CommonModule,D.CommonModule,[]),t["\u0275mpd"](512,R.a,R.a,[]),t["\u0275mpd"](512,J.g,J.g,[]),t["\u0275mpd"](512,T.b,T.b,[]),t["\u0275mpd"](512,U.c,U.c,[]),t["\u0275mpd"](512,q.g,q.g,[]),t["\u0275mpd"](256,W.f,!0,[]),t["\u0275mpd"](512,W.n,W.n,[[2,W.f]]),t["\u0275mpd"](512,A.a,A.a,[]),t["\u0275mpd"](512,G.c,G.c,[]),t["\u0275mpd"](512,j.e,j.e,[]),t["\u0275mpd"](512,W.x,W.x,[]),t["\u0275mpd"](512,Z.c,Z.c,[]),t["\u0275mpd"](512,V.i,V.i,[]),t["\u0275mpd"](512,P.c,P.c,[]),t["\u0275mpd"](512,Y.c,Y.c,[]),t["\u0275mpd"](512,H.b,H.b,[]),t["\u0275mpd"](512,K.h,K.h,[]),t["\u0275mpd"](512,X.b,X.b,[]),t["\u0275mpd"](512,W.o,W.o,[]),t["\u0275mpd"](512,W.v,W.v,[]),t["\u0275mpd"](512,Q.b,Q.b,[]),t["\u0275mpd"](512,_.c,_.c,[]),t["\u0275mpd"](512,$.a,$.a,[]),t["\u0275mpd"](512,o["\u0275ba"],o["\u0275ba"],[]),t["\u0275mpd"](512,o.ReactiveFormsModule,o.ReactiveFormsModule,[]),t["\u0275mpd"](512,nn.a,nn.a,[]),t["\u0275mpd"](512,an.a,an.a,[]),t["\u0275mpd"](512,sn,sn,[]),t["\u0275mpd"](512,tn.r,tn.r,[[2,tn.w],[2,tn.o]]),t["\u0275mpd"](512,l,l,[]),t["\u0275mpd"](256,j.a,{showDelay:0,hideDelay:0,touchendHideDelay:1500},[]),t["\u0275mpd"](256,K.a,!1,[]),t["\u0275mpd"](1024,x.a,function(){return[{types:[{name:"formly-group",component:on.a}]},{types:[{name:"input",component:pn.a,wrappers:["fieldset","label"]},{name:"checkbox",component:en.a,wrappers:["fieldset"],defaultOptions:{templateOptions:{indeterminate:!0}}},{name:"radio",component:ln.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{options:[]}}},{name:"select",component:cn.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{options:[]}}},{name:"textarea",component:un.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{cols:1,rows:1}}},{name:"multicheckbox",component:rn.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{options:[]}}}],wrappers:[{name:"label",component:mn.a},{name:"description",component:kn.a},{name:"validation-message",component:dn.a},{name:"fieldset",component:fn.a},{name:"addons",component:gn.a}],manipulators:[{class:yn.a,method:"run"},{class:bn.a,method:"run"},{class:hn.a,method:"run"}]},{types:[{name:"formly-group",component:on.a}]},{validationMessages:[{name:"required",message:"This field is required"}]}]},[]),t["\u0275mpd"](1024,tn.m,function(){return[[{path:"",component:vn.a,data:e}]]},[])])})},"oYp/":function(n,a){n.exports='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form">\n    <button type="submit" class="btn btn-primary submit-button">Submit</button>\n  </formly-form>\n</form>\n'},qRCy:function(n,a){n.exports='<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>form</span> <span class="token attr-name" >[formGroup]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form<span class="token punctuation" >"</span></span> <span class="token attr-name" >(ngSubmit)</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit()<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>formly-form</span> <span class="token attr-name" >[model]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>model<span class="token punctuation" >"</span></span> <span class="token attr-name" >[fields]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>fields<span class="token punctuation" >"</span></span> <span class="token attr-name" >[options]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>options<span class="token punctuation" >"</span></span> <span class="token attr-name" >[form]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit<span class="token punctuation" >"</span></span> <span class="token attr-name" >class</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>btn btn-primary submit-button<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Submit<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>button</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>formly-form</span><span class="token punctuation" >></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>form</span><span class="token punctuation" >></span></span>\n'}});