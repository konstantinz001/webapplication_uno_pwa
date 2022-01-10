<template>
  <v-form>
    <v-container fluid>
      <v-row justify="center">
        <v-col
            style="text-align: center"
            cols="12"
            sm="6"
            md="4"
        >
          <h2>
            <pre>{{ "Welcome to UNO\nYou are not logged in\nPlease login" }}</pre>
          </h2>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col
            style="text-align: center"
            cols="12"
            sm="6"
            md="4"
        >
          <v-btn
              x-large
              color="rgba(192,141,43,255)"
              @click.prevent="login"
          >Login</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "NoLogin",
  methods: {
    login() {
      this.$router.push({name: "Authentication"});
    }
  }
}
</script>