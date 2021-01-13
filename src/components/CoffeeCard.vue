<template>
  <base-card @click="clickCoffee" class="flex">
    <svg class="w-24 h-24">
      <use xlink:href="#infusion" />
    </svg>
    <div class="w-full mx-4 flex flex-col justify-between">
      <div>
        <h3 class="text-2xl font-bold">{{name}}</h3>
        <p class="text-gray-600">{{company}}</p>
      </div>
    <recipe-widget
    :beans="beans"
    :water="water"
    :grind="grind"
    :time="time"></recipe-widget>
    </div>
  </base-card>
</template>

<script>
export default {
  emits:["clickCoffee"],
  props:["name", "company", "beans", "water", "grind", "time"],
  data(){
    return{

    };
  },
  methods:{
    clickCoffee(){
      this.$emit("clickCoffee", {
        name:this.name,
        beans:this.beans,
        water:this.water,
        grind:this.grind,
        time:this.time
      })
    }
  }
}
</script>