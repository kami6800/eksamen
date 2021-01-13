  <template>
  <div class="bg-white p-6 h-full overflow-auto border">
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

<style>
  .aaa{
    height:80vh;
  }
</style>
