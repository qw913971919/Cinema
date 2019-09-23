<template>
  <div class="mainbox slide-enter-active">
		<header id="header">
			<i class="iconfont icon-right" @click="goback"></i>
      <h1>影片详情</h1>
		</header>
		<div id="content" class="contentDetail">
			<div class="detail_list">
				<div class="detail_list_bg"></div>
				<div class="detail_list_filter"></div>
				<div class="detail_list_content">
					<div class="detail_list_img">
						<img :src="src|setWH('128.180')">
					</div>
					<div class="detail_list_info">
						<h2>{{detailMovie.nm}}</h2>
						<p>{{detailMovie.enm}}</p>
						<p>{{detailMovie.sc}}</p>
						<p>{{detailMovie.cat}}</p>
						<p>{{detailMovie.fra}} / {{detailMovie.episodeDur}}分钟</p>
						<p>{{detailMovie.pubDesc}}</p>
					</div>
				</div>
			</div>
			<div class="detail_intro">
				<p>{{detailMovie.dra}}</p>
			</div>
			<div class="detail_player swiper-container">
				<ul class="swiper-wrapper">
					<li class="swiper-slide">
						<div>
							<img :src="item|setWH('120.600')" v-for="(item,i) in detailMovie.photos" :key="i">
						</div>
						<p>陈建斌</p>
						<p>马先勇</p>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  data(){
    return {
      detailMovie:{},
      src:''
    }
  },
    mounted(){
      this.$axios.get('/api/detailmovie?movieId='+this.$route.params.id).then(res=>{
        if(res.data.msg==='ok'){
          console.log(res.data.data.detailMovie)
          this.detailMovie=res.data.data.detailMovie
          this.src=res.data.data.detailMovie.img
        }
      })
    },
    methods:{
      goback(){
        this.$router.go(-1)//不是必须写在router-link中
      },
      teee(){
        console.log(this.detailMovie)
      }
    },
}
</script>

<style lang="scss" scoped>
.mainbox{
  width:100%;
  background-color: antiquewhite;
  position: absolute;
  display:block;
  z-index: 999;
  margin-bottom: 0px;
  display: block;

}
.slide-enter-active{
  overflow: hidden;
  animation: .5s slidemove;
}
@keyframes slidemove{//关键帧动画，起始时0%在可视区外，.5s内100%挪移至最左
  0%{
    transform: translateX(100%)
  }
  100%{
    transform: translateX(0%)
  }
}
li{
  width:100%;

  div{
    display: flex;
    flex-wrap:wrap;
    flex-direction:row;
    justify-content:flex-start;
    width:100%;
    img{
      display: block;
    }
  }
}
ul{
  width:100%;

}
#content.contentDetail{ display: block; margin-bottom:0;height:100%}
#content .detail_list{ height:200px; width:100%; position: relative; overflow: hidden;}
.detail_list .detail_list_bg{ width:100%; height:100%; background: url(../../../public/image/movie_1.jpg) 0 40%; filter: blur(20px); background-size:cover; position: absolute; left: 0; top: 0;}
.detail_list .detail_list_filter{ width:100%; height:100%; position: absolute;background-color: #40454d;opacity: .55; position: absolute; left: 0; top: 0; z-index: 1;}
.detail_list .detail_list_content{ display: flex; width:100%; height:100%; position: absolute; left: 0; top: 0; z-index: 2;}
.detail_list .detail_list_img{ width:108px; height: 150px; border: solid 1px #f0f2f3; margin:20px;}
.detail_list .detail_list_img img{ width:100%; height: 100%;}
.detail_list .detail_list_info{ margin-top: 20px;}
.detail_list .detail_list_info h2{ font-size: 20px; color:white; font-weight: normal; line-height: 40px;}
.detail_list .detail_list_info p{ color:white; line-height: 20px; font-size: 14px; color:#ccc;}
#content .detail_intro{ padding: 10px;}
#content .detail_player{ margin:20px; height:100%;}
.detail_player .swiper-slide{ margin-right: 20px; text-align: center; font-size: 14px;}
.detail_player .swiper-slide img{margin-bottom: 5px;}
.detail_player .swiper-slide p:nth-of-type(2){ color:#999;}
</style>