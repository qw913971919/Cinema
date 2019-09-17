<template>
  <div id="content" class="textbody">
      <div class="movie_menu">
				<router-link class="city_name" tag="div" to="/action/city">
					<span>大连</span><i class="iconfont icon-lower-triangle"></i>
				</router-link>
				<div class="hot_swtich">
					<router-link tag="div" class="hot_item" to="/action/nowplaying">正在热映</router-link>
					<router-link tag="div" class="hot_item" to="/action/comingsoon">即将上映</router-link>
				</div>
				<router-link class="search_entry" tag="div" to="/action/search">
					<i class="iconfont icon-sousuo"></i>
				</router-link>
		</div>
        <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.textbody{
	height: 100%;
}
#content .movie_menu{width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; margin-bottom: -10px;justify-content:space-between; align-items:center; background:white; z-index:10;}
.movie_menu .city_name{ margin-left: 20px; height:100%; line-height: 45px;}
.movie_menu .city_name.myactive{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .hot_swtich{ display: flex; height:100%; line-height: 45px;}
.movie_menu .hot_item{ font-size: 15px; color:#666; width:80px; text-align:center; margin:0 12px; font-weight:700;}
.movie_menu .hot_item.myactive{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .search_entry{ margin-right:20px; height:100%; line-height: 45px;}
.movie_menu .search_entry.myactive{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .search_entry i{  font-size:24px; color:red;}
</style>