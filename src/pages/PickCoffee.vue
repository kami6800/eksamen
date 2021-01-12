<template>
<base-header>
    <router-link to="latest">
            <svg class="w-8 h-8 mr-6">
                <use xlink:href="#arrowBack" />
            </svg>
    </router-link>
            <h2>Pick your coffee</h2>
        </base-header>

        <recipe-card></recipe-card>
        <recipe-card></recipe-card>
        <recipe-card></recipe-card>
        <recipe-card></recipe-card>
</template>

<script>
import RecipeCard from "../components/RecipeCard";
export default {
    components:{
        RecipeCard
    }
}
</script>