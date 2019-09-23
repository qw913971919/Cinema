<template>
  <div class="content">
    <loading v-if="flag" class="loading" />
    <ul v-else>
      <router-link tag="li" v-for="item in nowplaylist" :key="item.id" :to="'/moviedetails/'+item.id">
        <div class="imge">
          <img :src="item.img|setWH('128.180')" />
        </div>
        <div class="body">
          <div class="test">
            <h2>
              {{item.nm}}
              <img v-if="item.version" src="@/assets/maxs.png" />
            </h2>
            <!--数据里有这个字段则显示，空串则为false不会显示-->
            <p>
              观众评
              <span>&nbsp;{{item.sc}}</span>
            </p>
            <p>主演:{{item.star}}</p>
            <p>{{item.showInfo}}</p>
          </div>
          <div>
            <input type="button" value="购票" />
          </div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nowplaylist: [],
      flag: true
    };
  },
  mounted() {
    this.$axios
      .get(
        "/api/movieOnInfoList?cityId=" +
          JSON.parse(window.localStorage.getItem("id"))
      )
      .then(res => {
        if (res.data.status === 0) {
          this.nowplaylist = res.data.data.movieList;
          console.log(this.nowplaylist);
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
  width: 100%;
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
        background-color: pink;
        border: 0;
        margin-right: 10px;
      }
    }
  }
}
</style>