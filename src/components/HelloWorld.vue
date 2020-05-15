<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
    <h3>{{"getTest"+ doneInfo}}</h3>

    <h3>3{{info}}</h3>

    <van-button plain type="warning" @click="ttds('kkk')">警告按钮</van-button>
  
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'  //引入
export default {
  name: 'HelloWorld',
  data:function(){
    return {
      test:"nihao "
    }
  },
  computed:{
    ...mapState({
       info: state => state.info,
  }),
  ...mapGetters([
      'doneInfo',
      // ...
  ]),
  getTest(){
    return this.$store.getters.doneInfo
  }
  },
  props: {
    msg: String,
  },
  methods:{
     ...mapMutations(["UPDATE_INFO"]),
     ...mapMutations({
      add: 'UPDATE_INFO' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    }),
    ...mapActions({
      ttds: 'updateInfo' // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
    }),
    count(){
       this.$store.commit("UPDATE_INFO","app Stroe");
    },
    Action(){
       this.$store.dispatch('updateInfo',"testActions")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
