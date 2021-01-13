<template>
<base-header>
    <router-link to="latest">
            <svg class="w-8 h-8 mr-6">
                <use xlink:href="#arrowBack" />
            </svg>
    </router-link>
            <h2>Pick your coffee</h2>
    </base-header>

        <bean-card v-for="coffee in coffeeBeans"
        :key="coffee.name"
        v-bind="coffee"></bean-card>
</template>

<script>
import BeanCard from "../components/BeanCard";
export default {
    components:{
        BeanCard
    },
    data(){
        return{
            coffeeBeans:[{
                name:"Calahute alto",
                company:"Nordhavn coffee",
                description:"lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
                process:"Washed",
                roast: "Medium",
                varieties: "Castilo, Caturra",
                country: "Guatemala"
            },
            {
                name:"Beza",
                company:"Impact Roasters",
                description:"lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
                process:"Washed",
                roast: "Medium",
                varieties: "Castilo, Caturra",
                country: "Guatemala"
            },
            {
                name:"Vista Hermosa",
                company:"Coffee Collective",
                description:"lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
                process:"Washed",
                roast: "Medium",
                varieties: "Castilo, Caturra",
                country: "Guatemala"
            },
            {
                name:"Takesi Geisha",
                company:"Coffee COllective",
                description:"lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
                process:"Washed",
                roast: "Medium",
                varieties: "Castilo, Caturra",
                country: "Guatemala"
            }]
        };
    }
}
</script>