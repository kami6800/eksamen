  <template>
  <div class="bg-white p-6 h-full md:w-2/3 lg:w-1/2 overflow-auto border m-0 m-auto">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  },
  mounted(){
    this.$store.dispatch("load");
  }
}
</script>