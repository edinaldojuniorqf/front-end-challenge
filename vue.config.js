module.exports = {
  css: {
    modules: true,
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/scss/index.scss";
        `
      }
    }
  }
}
