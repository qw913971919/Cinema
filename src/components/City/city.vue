<template>
  <div id="content">
    <div class="city_body">
      <div class="city_list">
        <div class="city_hot">
          <h2>热门城市</h2>
          <ul class="clearfix">
            <li
              v-for="item in hotList"
              :key="item.id"
              @click="handleToCity(item.nm,item.id)"
            >{{item.nm}}</li>
          </ul>
        </div>
        <div class="city_sort" ref="city_sort">
          <div v-for="item in cityList" :key="item.index">
            <h2>{{item.index}}</h2>
            <ul>
              <li
                v-for="city in item.list"
                :key="city.id"
                @click="handleToCity(city.nm,city.id)"
              >{{city.nm}}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="city_index">
        <ul>
          <li
            v-for="(item,i) in cityList"
            :key="item.index"
            @touchstart="handleToIndex(i)"
          >{{item.index}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cityList: [],
      hotList: []
    };
  },
  mounted() {
    var cityList = window.localStorage.getItem("cityList");
    var hotList = window.localStorage.getItem("hotList");
    if (cityList && hotList) {
      this.cityList = JSON.parse(cityList);
      this.hotList = JSON.parse(hotList);
    } else {
      this.$axios.get("/api/cityList").then(res => {
        //因为设置了反向代理，这里忽略了请求头，成功获取到了数据
        if (res.data.status === 0) {
          var cities = res.data.data.cities;
          //[{index:'B',list:[{nm:'北京',id:13},{nm:'北江',id:14}]}]
          var a = this.formatCityList(cities);
          (this.cityList = a.cityList), (this.hotList = a.hotList);
          window.localStorage.setItem(
            "cityList",
            JSON.stringify(this.cityList)
          );
          window.localStorage.setItem("hotList", JSON.stringify(this.hotList));
        }
      });
    }
  },
  methods: {
    handleToCity(nm, id) {
      this.$store.commit("city/CITY_INFO", { nm, id }); //远程调用store中city模块的函数,module中的名字city
      this.$router.push("/action/nowplaying");
    },
    formatCityList(cities) {
      var cityList = []; ////[{index:'B',list:[{nm:'北京',id:13},{nm:'北江',id:14}]}]
      var hotList = []; ///[{nm:北京,id:13,hot:1},{nm:上海,id:14,hot:1}]
      for (var i = 0; i < cities.length; i++) {
        if (cities[i].isHot === 1) {
          hotList.push(cities[i]); //循环检索热门城市，加入数组
        }
      }
      for (var i = 0; i < cities.length; i++) {
        var fistLetter = cities[i].py.substring(0, 1).toUpperCase();
        if (toCom(fistLetter)) {
          //如果返回的是true证明需要添加新的index
          cityList.push({
            index: fistLetter,
            list: [{ nm: cities[i].nm, id: cities[i].id }]
          });
        } else {
          //如果返回的是false证明找到了同样的首字母
          for (var j = 0; j < cityList.length; j++) {
            if (cityList[j].index === fistLetter) {
              cityList[j].list.push({ nm: cities[i].nm, id: cities[i].id });
            }
          }
        }
      }
      cityList.sort((n1, n2) => {
        if (n1.index > n2.index) {
          return 1;
        } else if (n1.index < n2.index) {
          return -1;
        } else {
          return 0;
        }
      });
      function toCom(fistLetter) {
        for (var i = 0; i < cityList.length; i++) {
          if (cityList[i].index === fistLetter) {
            return false; //终止函数
          }
        }
        return true; //如果没有进入if判断则在这里终止函数
      }
      return {
        cityList,
        hotList
      };
    },
    handleToIndex(index) {
      var h2 = this.$refs.city_sort.getElementsByTagName("h2"); //点击在当前页面跳转，获取到所有的h2
      this.$refs.city_sort.parentNode.scrollTop = h2[index].offsetTop; //设置citylist的页面滚动高度为h2的页面高度
    }
  }
};
</script>

<style lang="scss">
#content {
  flex: 1;
  overflow: auto;
  position: relative;
  display: flex;
  flex-direction: column;
}

#content .city_body {
  display: flex;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
}
.city_body .city_list {
  flex: 1;
  overflow: auto;
  background: #fff5f0;
}
.city_body .city_list::-webkit-scrollbar {
  background-color: transparent;
  width: 0;
}
.city_body .city_hot {
  margin-top: 20px;
}
.city_body .city_hot h2 {
  padding-left: 15px;
  line-height: 30px;
  font-size: 14px;
  background: #f0f0f0;
  font-weight: normal;
}
.city_body .city_hot ul {
}
.city_body .city_hot ul li {
  float: left;
  background: #fff;
  width: 29%;
  height: 33px;
  margin-top: 15px;
  margin-left: 3%;
  padding: 0 4px;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  line-height: 33px;
  text-align: center;
  box-sizing: border-box;
}
.city_body .city_sort {
}
.city_body .city_sort div {
  margin-top: 20px;
}
.city_body .city_sort h2 {
  padding-left: 15px;
  line-height: 30px;
  font-size: 14px;
  background: #f0f0f0;
  font-weight: normal;
}
.city_body .city_sort ul {
  padding-left: 10px;
  margin-top: 10px;
}
.city_body .city_sort ul li {
  line-height: 30px;
  line-height: 30px;
}
.city_body .city_index {
  width: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-left: 1px #e6e6e6 solid;
}
</style>