/* eslint-disable */

let changeIndex = -1;

const NativeBack = {
  install(app, options = { enable: true }) {
    if (!options.enable) return;

    app.component("native-back", {
      name: "native-back",
      props: {
        state: {
          type: Array,
          default: () => []
        },
        closeMethods: {
          type: Array,
          default: () => []
        }
      },
      watch: {
        state(val, oldVal) {
          if (val.toString() === oldVal.toString()) return oldVal;
          changeIndex = -1;
          for (let i = 0; i <= val.length; i++) {
            if (val[i] !== oldVal[i]) {
              changeIndex = i;
              break;
            }
          }
          if (changeIndex >= 0 && val[changeIndex]) {
            for (const _ of [null, null]) {
              history.pushState("", null, `?_modal=${changeIndex}`);
            }
          } else if (changeIndex >= 0) {
            history.back();
          }
        }
      },
      created() {
        window.addEventListener("popstate", this.popstateListener);
      },
      beforeUnmount() {
        window.removeEventListener("popstate", this.popstateListener);
      },
      beforeDestroy() {
        window.removeEventListener("popstate", this.popstateListener);
      },
      methods: {
        popstateListener() {
          if (changeIndex >= 0) {
            this.closeMethods[changeIndex]();
            changeIndex = -1;
          }
        }
      },
      render: () => null
    });
  }
};

export default NativeBack;
