<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: 'NotoSansKR-Bold';
  src: url('~@/assets/fonts/NotoSansKR-Bold.otf'),
    url('~@/assets/fonts/NotoSansKR-Bold.woff') format('woff'),
    url('~@/assets/fonts/NotoSansKR-Bold.woff2') format('woff2');
}
@font-face {
  font-family: 'NotoSansKR-Light';
  src: url('~@/assets/fonts/NotoSansKR-Light.otf'),
    url('~@/assets/fonts/NotoSansKR-Light.woff') format('woff'),
    url('~@/assets/fonts/NotoSansKR-Light.woff2') format('woff2');
}
@font-face {
  font-family: 'NotoSansKR-Medium';
  src: url('~@/assets/fonts/NotoSansKR-Medium.otf'),
    url('~@/assets/fonts/NotoSansKR-Medium.woff') format('woff'),
    url('~@/assets/fonts/NotoSansKR-Medium.woff2') format('woff2');
}
@font-face {
  font-family: 'NotoSansKR-Regular';
  src: url('~@/assets/fonts/NotoSansKR-Regular.otf'),
    url('~@/assets/fonts/NotoSansKR-Regular.woff') format('woff'),
    url('~@/assets/fonts/NotoSansKR-Regular.woff2') format('woff2');
}

html {
  height: 100%;

  body {
    height: 100%;
  }

  #app {
    height: 100%;
  }
}
</style>
