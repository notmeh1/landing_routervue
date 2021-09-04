<template>
    <div>
        <v-app-bar fixed dark class="nav">
            <v-divider class="mx-8" vertical/>
        <a href="/"><v-app-bar-title class="logo">V8</v-app-bar-title></a>
          <v-divider class="mx-4" vertical/>
        <v-btn depressed><router-link :to="{name: 'simple'}">Simple</router-link></v-btn>
          <v-divider class="mx-4" vertical/>
        <v-btn depressed><router-link :to="{name: 'avanzado'}">Avanzado</router-link></v-btn>
            <v-divider class="mx-4" vertical/>
        <v-col class="links" align=right>
          <v-btn depressed><router-link to=/ >Portada</router-link></v-btn>
            <v-divider class="mx-4" vertical/>
          <v-btn depressed><router-link :to="{name: 'sobremi' }" >Sobre mi</router-link></v-btn>
            <v-divider class="mx-4" vertical/>
          <v-btn depressed><router-link :to="{name: 'contacto' }" >Contacto</router-link></v-btn>
            <v-divider class="mx-4" vertical/>
          <v-btn depressed><router-link  :to="{name: 'article' }" >Ultimo post</router-link></v-btn>
            <v-divider class="mx-8" vertical/>
        </v-col>
        </v-app-bar>
    </div>
</template>

<style scoped>
.links a {
    color: #ffffff;
    text-decoration: none;
}
.logo {
  background-color: white;
  color: #000000;
  padding: 0 10px;
  border-radius: 15px;
}
</style>