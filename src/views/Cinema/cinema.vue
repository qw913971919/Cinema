<template>
  <div class="cinema_body">
    <div id="content">
      <div class="cinema_menu">
        <div class="city_switch">
          全城
          <i class="iconfont icon-lower-triangle"></i>
        </div>
        <div class="brand_swtich">
          品牌
          <i class="iconfont icon-lower-triangle"></i>
        </div>
        <div class="feature_switch">
          特色
          <i class="iconfont icon-lower-triangle"></i>
        </div>
      </div>
      <loading v-if="flag" class="loading" />
      <ul v-else>
        <li v-for="item in cinemaList" :key="item.id">
          <div>
            <span>{{item.nm}}</span>
            <span class="q">
              <span class="price">{{item.sellPrice}}</span> 元起
            </span>
          </div>
          <div class="address">
            <span>{{item.addr}}</span>
            <span>{{item.distance}}</span>
          </div>
          <div class="card">
            <div
              v-for="(itemcard,key) in item.tag"
              :key="key"
              :class="key|classCard"
              v-if="itemcard===1"
            >{{key|formatCard}}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import scroll from "better-scroll"; //引入滑动模块
export default {
  data() {
    return {
      cinemaList: [],
      flag: true
    };
  },
  mounted() {
    this.$axios
      .get(
        "/api/cinemaList?cityId=" +
          JSON.parse(window.localStorage.getItem("id"))
      )
      .then(res => {
        var msg = res.data.msg;
        if (msg === "ok") {
          this.cinemaList = res.data.data.cinemas;
          this.flag = false;
        }
      });
  },
  filters: {
    formatCard(key) {
      var card = [
        { key: "allowRefund", value: "改签" },
        { key: "endorse", value: "退票" },
        { key: "sell", value: "折扣卡" },
        { key: "snack", value: "小吃" }
      ];
      for (var i = 0; i < card.length; i++) {
        if (card[i].key === key) {
          return card[i].value;
        }
      }
      return "";
    },
    classCard(key) {
      var card = [
        { key: "allowRefund", value: "bl" },
        { key: "endorse", value: "bl" },
        { key: "sell", value: "or" },
        { key: "snack", value: "or" }
      ];
      for (var i = 0; i < card.length; i++) {
        if (card[i].key === key) {
          return card[i].value;
        }
      }
      return "";
    }
  }
};
</script>

<style scoped>
.loading {
  position: relative;
  top: 50%;
}
#content {
  height: 100%;
}
#content .cinema_menu {
  width: 100%;
  height: 46px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: white;
}
#content .cinema_body {
  flex: 1;
  overflow: auto;
  height: 100%;
}
.cinema_body ul {
  padding: 20px;
}
.cinema_body li {
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 20px;
}
.cinema_body div {
  margin-bottom: 10px;
}
.cinema_body .q {
  font-size: 11px;
  color: #f03d37;
}
.cinema_body .price {
  font-size: 18px;
}
.cinema_body .address {
  font-size: 13px;
  color: #666;
}
.cinema_body .address span:nth-of-type(2) {
  float: right;
}
.cinema_body .card {
  display: flex;
}
.cinema_body .card div {
  padding: 0 3px;
  height: 15px;
  line-height: 15px;
  border-radius: 2px;
  color: #f90;
  border: 1px solid #f90;
  font-size: 13px;
  margin-right: 5px;
}
.cinema_body .card div.or {
  color: #f90;
  border: 1px solid #f90;
}
.cinema_body .card div.bl {
  color: #589daf;
  border: 1px solid #589daf;
}
</style>