<template>
  <div class="about">
    <button @click="$store.commit('jian')">-</button>
    <h1>{{this.n}}</h1>
    <button @click="$store.commit('add')">+</button>
  </div>
</template>
<script>
import {mapState,mapMutations} from "vuex"
export default {
  computed:{
    ...mapState(["n","falg"]),
    ...mapMutations(["jian","add"])
  }
}
</script>