<template>
  <div class="messagebox">
      <h2>定位信息</h2>
      <p>北京</p>
      <div class="body">
        <div>取消</div>
        <div>切换定位</div>
      </div>
  </div>
</template>

<script>
export default {
    name:'messagebox'
}
</script>

<style lang="scss" scoped>
.messagebox{
    position: absolute;
    top:50%;
    left:50%;
    margin-top:-100px;
    margin-left:-100px;
    border: 1px #ccc solid;
    border-radius: 4px;
    background: white;
    z-index: 999;
    box-shadow: 3px 3px 3px #ccc;
    height:120px;
    width:200px;
    h2{
        text-align:center;
    }
    p{
        text-align:center;
        line-height: 40px;
    }
    .body{
        position: absolute;
        bottom:0px;
        left:0px;
        width:100%;
        display: flex;
        border-top:1px #ccc solid;
        div{
            text-align: center;
            flex:1;
            line-height: 40px;
            font-size:16px;
            border-right: 1px #ccc solid;
        }
        div:last-child{//最后一个div无边框
            border:none
        }
    }
}
</style>