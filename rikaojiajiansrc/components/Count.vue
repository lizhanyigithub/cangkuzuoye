<template>
    <div>
        <button @click="$store.commit('jian')">-</button>
        {{this.n}}
        <button @click="$store.commit('jia')">+</button>
    </div>
</template>
<script>
import {mapState,mapMutations} from "vuex"
export default {
    computed:{
        ...mapState(["n"]),
        ...mapMutations(["jian","jia"])
    }
}
</script>