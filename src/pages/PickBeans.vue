<template>
<base-header>
    <router-link to="latest">
            <svg class="w-8 h-8 mr-6">
                <use xlink:href="#arrowBack" />
            </svg>
    </router-link>
            <h2>Pick your coffee</h2>
    </base-header>

        <bean-card></bean-card>
        <bean-card></bean-card>
        <bean-card></bean-card>
        <bean-card></bean-card>
</template>

<script>
import BeanCard from "../components/BeanCard";
export default {
    components:{
        BeanCard
    }
}
</script>