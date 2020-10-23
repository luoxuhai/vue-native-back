<template>
  <div id="app">
    <vs-button @click="visibleAlert = true" size="large">Alert</vs-button>
    <vs-button @click="visibleConfirm = true" size="large">Confirm</vs-button>
    <vs-dialog width="550px" not-center v-model="visibleAlert">
      <template #header>
        <h3 class="not-marginvisible">
          Nested dialogs
          <b>Vuesax</b>
        </h3>
      </template>
      <div class="con-content">
        <p>
          Vuesax is a relatively new framework with a refreshing design and in
          the latest trends.
        </p>
      </div>
      <template #footer>
        <div class="con-footer">
          <vs-button @click="onCloseAlert" transparent>Ok</vs-button>
        </div>
      </template>
    </vs-dialog>
    <vs-dialog width="550px" not-center v-model="visibleConfirm">
      <template #header>
        <h3 class="not-margin">
          Nested dialogs
          <b>Vuesax</b>
        </h3>
      </template>
      <div class="con-content">
        <p>
          Vuesax is a relatively new framework with a refreshing design and in
          the latest trends.
        </p>
      </div>
      <template #footer>
        <div class="con-footer">
          <vs-button @click="onCloseConfirm">Ok</vs-button>
          <vs-button @click="onCloseConfirm" dark>Cancel</vs-button>
        </div>
      </template>
    </vs-dialog>
    <native-back
      :state="[visibleAlert, visibleConfirm]"
      :closeMethods="[onCloseAlert, onCloseConfirm]"
    />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      visibleAlert: false,
      visibleConfirm: false
    };
  },
  methods: {
    onCloseAlert() {
      this.visibleAlert = false;
    },
    onCloseConfirm() {
      this.visibleConfirm = false;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
