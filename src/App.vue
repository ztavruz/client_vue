<template>
  <div id="app">
    <div id="nav">
      <component :is="layout" >
          <rouwter-view></rouwter-view>
      </component>
    </div>
  </div>
</template>

<script>
    import EmptyLayout from "./layouts/EmptyLayout";
    import MainLayout from "./layouts/MainLayout";
    import AdminLayout from "./layouts/AdminLayout";

    export default {
        computed: {
            layout(){
                // console.log(this.$route.meta)
                return (this.$route.meta.layout || "empty") + "-layout";

            }

        },
        components: {
            EmptyLayout,
            MainLayout,
            AdminLayout
        }
    }

</script>

<style lang="scss">
  @import "~materialize-css/dist/css/materialize.min.css";
  @import "assets/index.css";

</style>
