<template>
    <div class="fixed flex justify-around left-0 rigth-0 bottom-0 bg-black h-20 w-full text-white text-sm">
        <div class="m-5 ml-10 flex flex-col h-12">
            <svg class="h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <p>Feed</p>
        </div>
        <div class="m-5 ml-10 flex flex-col h-12">
            <svg class="h-16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <p>Favorites</p>
        </div>
    </div>
    <div class="fixed w-full left-0 rigth-0 bottom-3 text-center">
        <router-link class="bg-yellow-200 p-4 rounded-full m-0 m-auto block h-24 w-24 border-8 border-white" to="/beans">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
        </router-link>
        <p class="text-white text-sm">New Brew</p>
    </div>
</template>