<template>
  <div>
    <v-header title="退出">
      <router-link slot="left" to="/home">返回</router-link>
    </v-header>
    <div class="btn">
      <button @click="submit">确认退出</button>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import {USER_SIGNOUT} from 'store'

  export default {
      methods: {
        ...mapActions([USER_SIGNOUT]),
        submit() {
            this.USER_SIGNOUT()
            this.$router.replace({path: '/login'})
        }
      }
  }
</script>

<style lang="less" scoped>
  .btn {
    padding: 50px;
    text-align: center;
    button {
      padding: 5px 10px;
    }
  }
</style>
