import{_ as g}from"./LoadingDialog-C1yfdgiD.js";import{_ as w,d as y,l as d,i as _,r as v,o as V,e as C,g as n,a as e,w as s,n as p,p as a,C as m,j as i,m as k,t as R,F as b}from"./index-DZBwqCr_.js";import"https://static.geetest.com/v4/gt4.js";import{i as c,g as f,r as B}from"./useRecaptcha-D4VPpSaq.js";import{V as z}from"./VForm-BLOrn775.js";const F={components:{LoadingDialog:g},data(){return{BASE_API:"https://zerocat-api.houlangs.com",username:"",password:"",tryinguser:{},loading:!1,initRecaptcha:c,getResponse:f,resetCaptcha:B,show1:y(!1),emailRules:[o=>o?!0:"必须填写邮箱",o=>/.+@.+\..+/.test(o)?!0:"不符合格式"],usernameRules:[o=>o?!0:"必须填写用户名"]}},created(){d.islogin.value==!0&&this.$router.push("/")},setup(){c("recaptcha-div","float")},methods:{async login(){if(this.loading=!0,this.tryinguser=await _({url:"/account/login",method:"post",data:{captcha:f(),un:this.username,pw:this.password}}),this.tryinguser.message!="OK"){this.loading=!1,this.$toast.add({severity:"info",summary:"info",detail:this.tryinguser.msg||this.tryinguser.message,life:3e3});return}this.loading=!1,d.setuser(this.tryinguser.token),console.log(this.tryinguser),(this.tryinguser.msg||this.tryinguser.message=="OK")&&this.$router.push("/")},addtoast(o){this.$toast.add({severity:"info",summary:"info",detail:o,life:3e3})}}},N={class:"auth-wrapper d-flex align-center justify-center pa-4"};function j(o,t,A,D,r,h){const u=v("v-cardtext"),x=g;return V(),C(b,null,[n("div",N,[e(R,{class:"auth-card pa-4 pt-7","max-width":"448",border:""},{default:s(()=>[e(p,null,{default:s(()=>[e(a,{cols:"12"},{default:s(()=>[e(u,null,{default:s(()=>t[4]||(t[4]=[n("h5",{class:"text-h5 font-weight-semibold mb-1"}," 欢迎来到ZeroCatNext！ 👋🏻 ",-1),n("p",{class:"mb-0"},"登录你的账户",-1)])),_:1})]),_:1})]),_:1}),e(u,null,{default:s(()=>[e(z,null,{default:s(()=>[e(p,null,{default:s(()=>[e(a,{cols:"12"},{default:s(()=>[e(m,{label:"邮箱",type:"text",modelValue:r.username,"onUpdate:modelValue":t[0]||(t[0]=l=>r.username=l),variant:"outlined",rules:r.emailRules},null,8,["modelValue","rules"]),e(m,{label:"密码",modelValue:r.password,"onUpdate:modelValue":t[1]||(t[1]=l=>r.password=l),variant:"outlined",rules:r.usernameRules,"append-icon":r.show1?"mdi-eye":"mdi-eye-off",type:r.show1?"text":"password","onClick:append":t[2]||(t[2]=l=>r.show1=!r.show1)},null,8,["modelValue","rules","append-icon","type"])]),_:1}),e(a,{cols:"9"},{default:s(()=>t[5]||(t[5]=[n("div",{id:"recaptcha-div"},null,-1)])),_:1}),e(a,{cols:"3"},{default:s(()=>[e(i,{onClick:t[3]||(t[3]=l=>r.resetCaptcha()),variant:"text"},{default:s(()=>t[6]||(t[6]=[k("刷新")])),_:1})]),_:1}),e(a,{cols:"12"},{default:s(()=>[e(i,{class:"text-none",color:"primary",rounded:"xl",text:"登录",variant:"flat",size:"large",onClick:h.login,"append-icon":"mdi-arrow-right"},null,8,["onClick"])]),_:1}),e(a,{cols:"12"},{default:s(()=>[e(i,{class:"text-none",color:"white",rounded:"xl",text:"注册",variant:"text",size:"large","append-icon":"mdi-arrow-right",to:"/account/register"}),e(i,{class:"text-none",color:"white",rounded:"xl",text:"找回密码",variant:"text",size:"large","append-icon":"mdi-arrow-right",to:"/account/retrieve"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),e(x,{show:r.loading,text:"登录中"},null,8,["show"])],64)}const U=w(F,[["render",j]]);export{U as default};
