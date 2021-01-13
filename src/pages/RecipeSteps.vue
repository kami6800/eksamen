<template>
        <base-header>
    <router-link to="brew">
            <svg class="w-8 h-8 mr-6">
                <use xlink:href="#arrowBack" />
            </svg>
    </router-link>
        <div class="flex flex-col w-full">
            <h2>French Press</h2>
            <recipe-widget class="w-3/4"
            :beans="selectedRecipe.beans"
            :water="selectedRecipe.water"
            :grind="selectedRecipe.grind"
            :time="selectedRecipe.time"></recipe-widget>
        </div>
    </base-header>
    <recipe-step v-for="step in steps"
    :key="step.numer"
    v-bind="step"></recipe-step>
    <button @click="finalizeBrew" class="flex float-right">
        <p class="text-xl font-black mr-4">FINISH</p>
        <svg class="w-8 h-8 mr-6">
            <use xlink:href="#arrowForward" />
        </svg>
    </button>
</template>

<script>
import RecipeStep from "../components/RecipeStep";
export default {
    components:{
        RecipeStep
    },
    data(){
        return{
            selectedRecipe:this.$store.getters.getSelectedRecipe,
            steps:[{
                number:"1",
                description:"stir well"
                },
                {
                number:"2",
                description:"add water"
                },
                {
                number:"3",
                description:"let coffee fal to bottom after 4 minutes"
                },
                {
                number:"4",
                description:"lorem ipsum lorem ipsum"
                },
                {
                number:"5",
                description:"wait 19 minutes"
                },
                {
                number:"6",
                description:"ready to drink"
                }
            ]
        };
    },
    methods:{
        finalizeBrew(){
            this.$store.dispatch("brewCoffee");
            this.$router.push("/latest");
        }
    }
}
</script>