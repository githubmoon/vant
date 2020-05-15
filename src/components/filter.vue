<template>
   <div>
       <button @click="back">Back</button>
       <h4>{{msg}} --> 筛选页面</h4>
   </div>
</template>
<script>
export default {
    name:'filter',
    data(){
        return {
            msg:"内部的"
        }
    },
    methods:{
        back(){
            this.$router.push('/index')
        }
    }
}
</script>  

<style scoped>
h4{
    color:aqua
}
button{
    position:absolute;
    left: 10px;
}
</style>>
