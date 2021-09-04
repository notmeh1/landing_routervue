<template>
  <v-app>
    <v-container fluid>
        <v-col>
          <Navbar />
        </v-col>
      <v-row>
        <v-col>
          <!--La transicion cuesta notarla ya que dura solo 0.1s
          y se puede confundir con el fade de las v-img-->
          <transition name="fade">
          <router-view />
          </transition>
        </v-col>
      </v-row>
      <v-col>
        <Footer/>
      </v-col>
    </v-container>
  </v-app>
</template>

<script>
import Navbar from "./components/navbar.vue";
import Footer from "./components/footer.vue";

export default {
  name: "App",

  components: {
    Navbar,
    Footer,
  },
  data: () => ({
    //
  }),
};
</script>

<style>
.bg-hero {
  opacity: 0.5;
  height: 70%;
}
</style>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0%;
}
</style>