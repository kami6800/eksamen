<template>
<div class="h-full aaa">
    <base-header class="justify-between text-center text-gray-600">
        <h2>Brewista</h2>
        <svg class="h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    </base-header>
    <p class="text-gray-400 font-medium text-lg">Latest brews</p>
    <coffee-card v-for="brew in latestBrews"
    :key="brew.id"
    v-bind="brew"></coffee-card>

</div>
    <div class="absolute w-full left-0 rigth-0 bottom-5">
        <router-link class="bg-yellow-200 py-4 text-xl rounded-full m-0 m-auto block w-48 text-center" to="/beans">BREW A CUP</router-link>
    </div>
</template>

<script>
export default {
    data(){
        return{
            latestBrews: this.$store.getters.getLatestBrews
        };
    }
}
</script>