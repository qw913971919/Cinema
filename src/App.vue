<template>
  <div id="app">
    <div id="main">
    <header id="header">
			<h1>喵喵电影</h1>
		</header>
    <router-view></router-view>
    <div class="tabbar">
      <router-link to="/action" tag="div" class="box">
      <img src="../public/image/action.png">
          电影
      </router-link>
      <router-link to="/cinema" tag="div" class="box">
      <img src="../public/image/cinema.png">
          影院
      </router-link>
      <router-link to="/member" tag="div" class="box">
      <img src="../public/image/member.png">
          我的
      </router-link>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      selected:''
    }
  },
  methods:{
    pushaction(){
      this.$router.push('/action')
    },
    pushcinema(){
      this.$router.push('/cinema')
    },
    pushmember(){
      this.$router.push('/member')
    },
}
}
</script>
<style lang="scss" >
*{ margin : 0; padding : 0;}
ul,li{ list-style: none;}
img{ display: block;}
html,body{ height:100%;}
.clearfix:after{ content:""; display: block; clear:both;}
#app{
  height: 100%
}

#main{ height: 100%; display: flex; flex-direction:column;margin-bottom: 45px;}

#header{width:100%; height:50px; color: #fff; background: pink; border-bottom: 1px solid pink; position: relative;}
#header h1{ font-size: 18px; text-align: center; line-height: 50px; font-weight: normal; }
#header i{ position: absolute; left: 5px; top: 50%; margin-top: -13px; font-size: 26px;}
.myactive{
  color:	#FF1493;
}
.tabbar{
  position: fixed;
  bottom: 0;
  left:0;
  display:flex;
  justify-content:space-around;
  width:100%;
  background: pink;
  -moz-box-shadow:1px 0px 5px #333333; -webkit-box-shadow:1px 0px 5px #333333; box-shadow:1px 0px 5px #333333;
.box{
  display: flex;
  flex-direction: column;//改变主轴
  justify-content:center;//上下居中
  align-items:center;//左右居中
  
img{
  
  width:24px;
  height: 24px;
}
}}
</style>
