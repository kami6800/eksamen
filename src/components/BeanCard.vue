<template>
    <base-card @click="selectBeans">
        <h3 class="font-bold text-3xl uppercase">{{name}}</h3>
        <h4 class="text-gray-600 text-sm">{{company}}</h4>
        <p class="my-8 text-gray-600">{{description}}</p>
        <div class="grid grid-cols-2 gap-y-3.5">
            <div>
                <h5 class="text-gray-400 text-xl mb-1">PROCESS</h5>
                <p>{{process}}</p>
            </div>
            <div>
                <h5 class="text-gray-400 text-xl mb-1">ROAST PROFILE</h5>
                <p>{{roast}}</p>
            </div>
            <div>
                <h5 class="text-gray-400 text-xl mb-1">VARIETIES</h5>
                <p>{{varieties}}</p>
            </div>
            <div>
                <h5 class="text-gray-400 text-xl mb-1">COUNTRY</h5>
                <p>{{country}}</p>
            </div>
        </div>
    </base-card>
</template>

<script>
export default {
    props:["name", "company", "description", "process", "roast", "varieties", "country"],
    methods:{
        selectBeans(){
            this.$router.push("/brew");
        }
    }
}
</script>