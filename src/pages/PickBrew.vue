<template>
    <base-header>
    <router-link to="beans">
            <svg class="w-8 h-8 mr-6">
                <use xlink:href="#arrowBack" />
            </svg>
    </router-link>
            <h2>How do you want to brew</h2>
    </base-header>
    <p class="text-gray-400 font-medium text-lg">Latest brews</p>
    <coffee-card @click="selectBrew" class="mb-16"></coffee-card>

    <p class="text-gray-400 font-medium text-lg">Latest brews</p>
    <coffee-card @click="selectBrew"></coffee-card>
    <coffee-card @click="selectBrew"></coffee-card>
    <coffee-card @click="selectBrew"></coffee-card>
    <coffee-card @click="selectBrew"></coffee-card>
    
</template>

<script>
export default {
    methods:{
        selectBrew(){
            this.$router.push("/recipe");
            console.log(this.$store.getters.gettest);
        }
    }
}
</script>