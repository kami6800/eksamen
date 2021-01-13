<template>
    <base-header class="text-gray-600">
        <h2>Brewista</h2>
    </base-header>
    <div class="m-0 m-auto w-1/2">
        <label class="mt-16 block">Username</label>
        <input class="block border" v-model="username">
        <label class="mt-4 block">Password</label>
        <input class="block border" v-model="password">
        <button @click="login" class="my-8 bg-yellow-200 p-2 px-4 rounded transition-all duration-150
                   hover:bg-yellow-100 hover:text-gray-400 hover:shadow-md">Login</button>
        <p>No account? <router-link class="text-yellow-600 font-semibold hover:text-yellow-400" to="/latest">Sign up</router-link></p>
     </div>
</template>

<script>
export default {
    data(){
        return{
            username:"",
            password:""
        };
    },
    methods:{
        login(){
            console.log(this.username, this.password);
            this.$router.push("/latest");
        }
    }
}
</script>