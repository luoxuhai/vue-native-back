/**
 * Author: luoxuhai<2639415619@qq.com>(https://github.com/luoxuhai)
 */
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
      data() {
        return {
          changeKeys: []
        };
      },
      watch: {
        state(val, oldVal) {
          if (val.toString() === oldVal.toString()) return oldVal;
          this.changeKeys = [];
          for (let i = 0; i <= val.length; i++) {
            if (val[i] !== oldVal[i]) {
              if (val[i]) {
                this.pushState(i);
              } else {
                this.popState();
              }
            }
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
        pushState(key) {
          this.changeKeys.push(key);
          window.history.pushState(null, null);
          window.history.forward();
        },
        popState() {
          this.changeKeys.pop();
          window.history.back();
        },
        popstateListener() {
          const key = this.changeKeys.pop();
          if (typeof key === "number") {
            window.history.pushState(null, null);
            this.closeMethods[key]();
          }
        }
      },
      render: () => null
    });
  }
};

export default NativeBack;
