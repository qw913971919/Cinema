<template>
  <div>
    <div class="body">
      <div class="searchtext">
        <i class="iconfont icon-sousuo"></i>
        <input type="text" v-model="searchtext" />
      </div>
    </div>
    <div class="search_result">
      <h3>电影/电视剧/综艺</h3>
      <ul>
        <li v-for="item in datalist" :key="item.id">
          <div class="img">
            <img :src="item.img|setWH('128.180')" />
          </div>
          <div class="info">
            <p>
              <span class="name">{{item.nm}}</span>
              <span class="color">{{item.sc}}</span>
            </p>
            <p>{{item.enm}}</p>
            <p>{{item.cat}}</p>
            <p>{{item.frt}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchtext: "",
      datalist: [],
      flag: 0
    };
  },
  watch: {
    searchtext(newvalue) {
      clearTimeout(this.flag); //函数防抖
      this.flag = setTimeout(() => {
        this.$axios
          .get(
            "/api/searchList?cityId=" +
              JSON.parse(window.localStorage.getItem("id")) +
              "&kw=" +
              newvalue
          )
          .then(res => {
            var msg = res.data.msg;
            var movies = res.data.data.movies;
            if (msg && movies) {
              this.datalist = res.data.data.movies.list;
            }
          });
      }, 1000);
    }
  }
};
</script>
<style lang="scss" scoped>
.body {
  margin-top: 10px;
  background: #f5f5f5;
  padding: 5px 0px;
  .searchtext {
    position: relative;
    width: 100%;
    text-align: center;
    i {
      position: absolute;
      font-size: 20px;
      top: 50%;
      margin-top: -10px;
      margin-left: 5px;
    }
    input {
      height: 30px;
      width: 90%;
      border-radius: 10px;
      border: 1px solid #e5e5e5;
      padding-left: 25px;
    }
  }
}
.search_result {
  h3 {
    display: block;
    height: 39px;
    color: #999;
    font-size: 15px;
    line-height: 39px;
    text-indent: 1em;
    border-bottom: 1px solid #e6e6e6;
  }
  ul {
    li {
      margin: 0px;
      padding: 0px;
      display: flex;
      border-bottom: 1px dashed black;
      .img {
        width: 60px;
        height: auto;
        margin: 5px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .info {
        width: 100%;
        p {
          display: flex;
          justify-content: space-between;
          .color {
            color: #fc7103;
            font-size: 16px;
            margin-right: 5%;
          }
          .name {
            font-size: 18px;
          }
          line-height: 22px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>