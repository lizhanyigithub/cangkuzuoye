<template>
    <div>
{{forEach(arr)}}
    </div>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            arr:[1,2,3,4]
        }
    },
    computed:{

    },
    methods:{
        forEach(item){
            console.log(item[0]);
            console.log(item[1]);
            console.log(item[2]);
            console.log(item[3]);
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>