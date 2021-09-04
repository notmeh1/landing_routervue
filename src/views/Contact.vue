<template>
  <div>
    <v-row>
      <v-col align="center" class="px-0">
        <v-img class="bg-hero" src="../assets/img/contact-bg.jpg" />
        <h1 class="imgTextTitle centered">Contacto</h1>
      <v-col align="center">
        <p>
          ¿Tienes dudas o sugerencias? Déjame un mensaje y me contactaré
          contigo.
        </p>
      </v-col>
      <v-col align="center">
        <v-text-field
          :counter="10"
          label="Nombre"
          required
        />
        <v-text-field
          label="E-mail"
          required
        />
        <v-text-field
          :counter="7"
          label="Teléfono"
          required
        />
        <v-text-field
          :counter="120"
          label="Mensaje"
          required
        />
        <v-btn class="mr-4" type="submit">
          Enviar mensaje
        </v-btn>
      </v-col>
      </v-col>
    </v-row>
  </div>
</template>
