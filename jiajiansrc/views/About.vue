<template>
  <div>
    <button @click="$store.commit('bian')">变</button>
    {{this.falg}}
  </div>
</template>
<script>
import {mapState,mapMutations} from "vuex"
export default {
  computed:{
    ...mapState(["falg"]),
  ...mapMutations(["bian"])
  }
}
</script>