<template>
    <div class="flex justify-between text-gray-400 text-sm">
        <div class="flex">
          <svg class="w-3 h-3 m-1">
            <use xlink:href="#bean" />
          </svg>
          <p>{{beans}}</p>
        </div>
        <div class="flex">
          <svg class="w-3 h-3 m-1">
            <use xlink:href="#water" />
          </svg>
          <p>{{water}}</p>
        </div>
        <div class="flex">
          <svg class="w-3 h-3 m-1">
            <use xlink:href="#grind" />
          </svg>
          <p>{{grind}}</p>
        </div>
        <div class="flex">
          <svg class="w-3 h-3 m-1">
            <use xlink:href="#time" />
          </svg>
          <p>{{time}}</p>
        </div>
      </div>
</template>

<script>
export default {
  props:["beans", "water", "grind", "time"]
}
</script>