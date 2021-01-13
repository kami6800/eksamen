<template>
    <h3 class="text-gray-400 font-medium text-lg">{{number}}</h3>
    <p class="text-gray-600 text-2xl mb-8">{{description}}</p>
</template>

<script>
export default {
    props:["number", "description"]
}
</script>