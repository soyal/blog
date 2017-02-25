<template>
  <div>
    <h2>hello soyal</h2>
    <router-view class="view"></router-view>
    <p><router-link to="/test1">to test1</router-link></p>
    <p><router-link to="/test2">to test2</router-link></p>
  </div>
</template>

<script>
  export default {
    mounted: function() {
      var me = this;

      setTimeout(function() {
        me.$router.push('/test2');
      },2000);
    }
  }
</script>