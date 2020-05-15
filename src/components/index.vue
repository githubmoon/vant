<template>
  <div id="app">
      <van-search
        shape="round"
        placeholder="搜索应用"
        />

     <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
    </van-swipe>
   <van-notice-bar text="XXX用户新关注了XXXXXXX应用" left-icon="volume-o"  color="#5F5F5F" background="#fff"/>


      <router-view></router-view>


    <van-tabbar v-model="active">
    <van-tabbar-item icon="gift-card-o" @click="recommend">推荐</van-tabbar-item>
    <van-tabbar-item icon="bag-o" @click="appRanking">应用排行</van-tabbar-item>
    <van-tabbar-item icon="send-gift-o" @click="expertAppointment">专家预约</van-tabbar-item>
    <van-tabbar-item icon="manager-o">我的</van-tabbar-item>
    </van-tabbar>

  </div>
</template>   

<script>
export default {
    data(){
        return {
            msg:"cccc",
             active: 0,
      icon: {
        active: 'https://img.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
      },
        }
    },
    methods:{
        onClickRight(){
            this.$router.push('/filter')
        },
        recommend(){
            this.$router.push('/recommend')
        },
        appRanking(){
            this.$router.push('/appRanking')
        },
        expertAppointment(){
            this.$router.push('/expertAppointment')
        }
    },
    created(){
        this.$router.push('/recommend')
    }
}
</script> 
<style scoped>
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
h1{
  color:blueviolet;  
}
li{
   list-style: none; 
   font-size: 18px;
   display: inline-block;
   background:#666;
   margin: 6px;
   padding: 6px;
  
   border-radius: 3px;
   cursor: pointer
}
li:hover{
    color:aqua
}
li>a{
 color:#fff;
}
button{
    position: absolute;
    right:10px;
}
</style>