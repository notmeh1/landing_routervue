<template>
  <div>
    <v-row>
      <v-col align="center" class="px-0" absolute>
        <!-- encontrar forma de suavizar entrada de img??-->
        <v-img class="bg-hero p-0" src="../assets/img/home-bg.jpg"></v-img>
        <h1 class="imgTextTitle centered">V8</h1>
        <h3 class="imgTextP centered2">Noticias y reseñas de automóviles</h3>
        <v-col class="mx-10 my-5">
        <a href="/post/1" class="link mx-10 my-5" align=left>
          <h1>Chevrolet presenta la totalmente nueva Blazer</h1>
          <h3 class="underLink">Llega como la primera SUV deportiva de la marca.</h3>
        </a>
        </v-col>
      </v-col>
    </v-row>
  </div>
</template>

<style>
.link {
  text-decoration: none;
}
.underLink {
  color: #ffffff;
}
.imgTextTitle {
  color: #ffffff;
  font-size: 80px;
  font-weight: 800;
}
.imgTextP {
  color: #ffffff;
  font-size: 24px;
  font-weight: 300;
}
.centered {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.centered2 {
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
