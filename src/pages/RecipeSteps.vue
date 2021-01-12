<template>
        <base-header>
    <router-link to="brew">
            <svg class="w-8 h-8 mr-6">
                <use xlink:href="#arrowBack" />
            </svg>
    </router-link>
        <div class="flex flex-col w-full">
            <h2>French Press</h2>
            <recipe-widget class="w-3/4"></recipe-widget>
        </div>
    </base-header>
    <recipe-step></recipe-step>
     <recipe-step></recipe-step>
</template>

<script>
import RecipeStep from "../components/RecipeStep";
export default {
    components:{
        RecipeStep
    }
}
</script>