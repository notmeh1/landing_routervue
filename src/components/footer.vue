<template>
    <footer align=center class="pt-5">
        <!-- insertar iconos -->
        <v-row class="mb-4">
        <v-col align=right>
            <v-img class="icon" src="../assets/svg/twitter.svg"/>
        </v-col>
        <v-col align=center>
            <v-img class="icon" src="../assets/svg/facebook.svg"/>
        </v-col>
        <v-col align=left>
            <v-img class="icon" src="../assets/svg/github.svg"/>
        </v-col>
        </v-row>
        <p>Copyright © V8 - 2018</p>
    </footer>
</template>

<script>

export default {
    
}
</script>

<style>
footer {
    border-top: 1px solid #808080;
}
.icon {
    width: 40px;
    height: 40px;
    background-color: #ffffff;
    border-radius: 20px;
}
</style>