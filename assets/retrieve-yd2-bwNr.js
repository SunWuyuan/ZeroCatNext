import{_ as g}from"./LoadingDialog-C1yfdgiD.js";import{_ as x,l as d,i as _,r as v,o as y,e as w,g as l,a as t,w as e,n as c,p as r,C as V,j as i,m as C,t as k,F as R}from"./index-DZBwqCr_.js";import"https://static.geetest.com/v4/gt4.js";import{i as m,g as p,r as b}from"./useRecaptcha-D4VPpSaq.js";import{V as B}from"./VForm-BLOrn775.js";const z={components:{LoadingDialog:g},data(){return{BASE_API:"https://zerocat-api.houlangs.com",email:"",tryinguser:{},loading:!1,initRecaptcha:m,getResponse:p,resetCaptcha:b,emailRules:[s=>s?!0:"必须填写邮箱",s=>/.+@.+\..+/.test(s)?!0:"不符合格式"],usernameRules:[s=>s?!0:"必须填写用户名"]}},created(){d.islogin.value==!0&&this.$router.push("/")},setup(){m("recaptcha-div","float")},methods:{async login(){if(this.loading=!0,this.tryinguser=await _({url:"/account/repw",method:"post",data:{captcha:p(),un:this.email}}),this.tryinguser.message!="OK"){this.loading=!1,this.$toast.add({severity:"info",summary:"info",detail:this.tryinguser.msg||this.tryinguser.message,life:3e3});return}this.loading=!1,d.setuser(this.tryinguser.token),console.log(this.tryinguser),(this.tryinguser.msg||this.tryinguser.message=="OK")&&this.$router.push("/")},addtoast(s){this.$toast.add({severity:"info",summary:"info",detail:s,life:3e3})}}},F={class:"auth-wrapper d-flex align-center justify-center pa-4"};function N(s,a,$,j,o,f){const n=v("v-cardtext"),h=g;return y(),w(R,null,[l("div",F,[t(k,{class:"auth-card pa-4 pt-7","max-width":"448",border:""},{default:e(()=>[t(c,null,{default:e(()=>[t(r,{cols:"12"},{default:e(()=>[t(n,null,{default:e(()=>a[2]||(a[2]=[l("h5",{class:"text-h5 font-weight-semibold mb-1"}," 欢迎来到ZeroCatNext！ 👋🏻 ",-1),l("p",{class:"mb-0"},"找回密码",-1)])),_:1})]),_:1})]),_:1}),t(n,null,{default:e(()=>[t(B,null,{default:e(()=>[t(c,null,{default:e(()=>[t(r,{cols:"12"},{default:e(()=>[t(V,{label:"邮箱",type:"text",modelValue:o.email,"onUpdate:modelValue":a[0]||(a[0]=u=>o.email=u),variant:"outlined",rules:o.emailRules},null,8,["modelValue","rules"])]),_:1}),t(r,{cols:"9"},{default:e(()=>a[3]||(a[3]=[l("div",{id:"recaptcha-div"},null,-1)])),_:1}),t(r,{cols:"3"},{default:e(()=>[t(i,{onClick:a[1]||(a[1]=u=>o.resetCaptcha()),variant:"text"},{default:e(()=>a[4]||(a[4]=[C("刷新")])),_:1})]),_:1}),t(r,{cols:"12"},{default:e(()=>[t(i,{class:"text-none",color:"primary",rounded:"xl",text:"找回密码",variant:"flat",size:"large",onClick:f.login,"append-icon":"mdi-arrow-right"},null,8,["onClick"])]),_:1}),t(r,{cols:"12"},{default:e(()=>[t(i,{class:"text-none",color:"white",rounded:"xl",text:"登录",variant:"text",size:"large","append-icon":"mdi-arrow-right",to:"/account/login"}),t(i,{class:"text-none",color:"white",rounded:"xl",text:"注册",variant:"text",size:"large","append-icon":"mdi-arrow-right",to:"/account/register"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),t(h,{show:o.loading,text:"正在发送邮件"},null,8,["show"])],64)}const O=x(z,[["render",N]]);export{O as default};
