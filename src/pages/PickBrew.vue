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
    <coffee-card @clickCoffee="selectBrew" class="mb-16"
    :name="favoriteRecipe.name"
    :type="favoriteRecipe.type"
    :beans="favoriteRecipe.beans"
    :water="favoriteRecipe.water"
    :grind="favoriteRecipe.grind"
    :time="favoriteRecipe.time"></coffee-card>

    <p class="text-gray-400 font-medium text-lg">Latest brews</p>
    <coffee-card @clickCoffee="selectBrew"
    v-for="recipe in allRecipes"
    :key="recipe.name"
    :name="recipe.name"
    :type="recipe.type"
    :beans="recipe.beans"
    :water="recipe.water"
    :grind="recipe.grind"
    :time="recipe.time"></coffee-card>
    
</template>

<script>
export default {
    data(){
        return{
            favoriteRecipe:{
                name:"AeroPress",
                type:"aeropress",
                beans:"16g",
                water:"230ml",
                grind:"Medium",
                time:"1min"
            },
            allRecipes:[{
                name:"French Press",
                type:"french",
                beans:"33g",
                water:"500ml",
                grind:"Coarse",
                time:"4min"
            },
            {
                name:"AeroPress",
                type:"aeropress",
                beans:"16g",
                water:"230ml",
                grind:"Medium",
                time:"1min"
            }]
        };
    },
    methods:{
        selectBrew(coffee){
            this.$store.dispatch("selectRecipe", coffee);
            this.$router.push("/recipe");
        }
    }
}
</script>