<template>
  <div class="content">
    <messagebox></messagebox>
    <loading v-if="flag" class="loading" />
    <ul v-else>
      <li v-for="item in comingsoon" :key="item.id">
        <div class="imge">
          <img :src="item.img|setWH('128.180')" />
        </div>
        <div class="body">
          <div class="test">
            <h2>{{item.nm}}</h2>
            <!--数据里有这个字段则显示，空串则为false不会显示-->
            <p>{{item.wish}}人想看</p>
            <p>主演:{{item.star}}</p>
            <p>{{item.showInfo}}</p>
          </div>
          <div>
            <input type="button" value="预售" />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import messagebox from "@/components/JS/MessageBox/messagebox.vue"
export default {
  data() {
    return {
      comingsoon: [],
      flag: true
    };
  },
  components:{
    messagebox
  },
  mounted() {
    this.$axios
      .get(
        "/api/movieComingList?cityId=10" +
          JSON.parse(window.localStorage.getItem("id"))
      )
      .then(res => {
        if (res.data.status === 0) {
          this.comingsoon = res.data.data.comingList;
          this.flag = false;
        }
      });
  }
};
</script>

<style lang="scss" scoped>
.loading {
  position: absolute;
  top: 50%;
  transform: translateY(-25%);
}
.content {
  height: 100%;
  position: relative;
}
.test {
  display: flex;
  flex-direction: column;
  color: #666;
  font-size: 13px;
  flex: 5;
  h2 {
    color: black;
    font-size: 20px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 52px;
    img {
      width: 49px;
      height: 17px;
    }
  }
  span {
    color: #faaf00;
    font-weight: bold;
  }
}
ul {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  position: absolute;
  li {
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom: 2px #eeeee0 solid;
    .imge {
      img {
        width: 70px;
        height: 70%;
        margin: 7px;
      }
    }
    .body {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      width: 100%;
      input {
        height: 30px;
        width: 50px;
        color: azure;
        background-color: #3c9fe6;
        border: 0;
        margin-right: 10px;
      }
    }
  }
}
</style>