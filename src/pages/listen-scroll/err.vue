<template>
 <div>子组件</div>
</template>

<script>
export default {
 components: {},
 props: {},
 data () {
  return {
  };
 },
 mounted(){
   this.throwError()
 },
 methods: {
   throwError(){
    //  throw new Error("子组件报错")
   }
 }
}

</script>
<style>
</style>