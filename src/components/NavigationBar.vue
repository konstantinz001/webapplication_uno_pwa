<template>
<div>
    <v-container>
            <v-row>

                <v-col cols="12" sm="4" md="12">
                  
    <v-app-bar
      color="bg-dark navbar-dark accent-4"
      dense
      dark
    >

    <v-app-bar-nav-icon href="https://uno-vue.herokuapp.com/">
        <v-img src="../assets/pics/UNO_Logo.png" width="50" />
    </v-app-bar-nav-icon> 

    <v-tabs background-color="#343a40" color="#000000"> 
    <!-- <v-tabs color="#343a40 black-4"> -->
      <v-tab v-for="item in items" :id="item.title" :key="item.title" :to="item.to">
        {{ item.title }}
      </v-tab>
    </v-tabs>
      

      <v-spacer></v-spacer>

      <template v-if="user.loggedIn">
        <v-btn icon @click.prevent="signOut" class="text-right">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
      </template>
      <template v-else>
        <v-btn @click.prevent="login" class="text-right">
          <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
      </template>

      <v-btn icon href="https://github.com/konstantinz001/UNO_WebApplication" target="_blank">
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <!-- <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn> -->

      <v-menu
        left
        bottom
      >

      </v-menu>
    </v-app-bar>
  </v-col>
  </v-row>
  </v-container>
  </div>
</template>


<script>
import { firebaseAuth } from "@/main";
export default {
  name: "Navigation",
  data() {
    return {
      items: [
        { title: "Home", icon: "mdi-home", to: "/" },
        {
          title: "New Game",
          icon: "mdi-microsoft-xbox-controller",
          to: "/game",
        },
        { title: "About", icon: "mdi-information", to: "/about" },
        { title: "Authentication", icon: "mdi-account", to: "/authentication" },
      ],
      auth: firebaseAuth,
      name: "",
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
  methods: {
    signOut() {
      firebaseAuth
        .getAuth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "Home",
          });
        });
    },
    login() {
      this.$router.push({
        name: "Authentication",
      });
    },
  },
};
</script>
