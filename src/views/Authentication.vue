<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" sm="4" md="12">
          <div>
            <Login
              v-if="authStatus === 'login' && loginStatus === false"
              @statusEvent="updateStatus"
              @snackbarEvent="updateSnackbar"
            ></Login>
            <Account
              v-else-if="authStatus === 'account' && loginStatus === true"
              @statusEvent="updateStatus"
              @loginEvent="updateLogin"
            ></Account>
            <ChangePassword
              v-else-if="
                authStatus === 'changePassword' && loginStatus === true
              "
              @statusEvent="updateStatus"
            ></ChangePassword>
            <ChangeEmail
              v-else-if="authStatus === 'changeEmail' && loginStatus === true"
              @statusEvent="updateStatus"
            ></ChangeEmail>
            <ForgotPassword
              v-else-if="
                authStatus === 'forgotPassword' && loginStatus === false
              "
              @statusEvent="updateStatus"
            ></ForgotPassword>
            <Register
              v-else-if="authStatus === 'register' && loginStatus === false"
              @statusEvent="updateStatus"
              @snackbarEvent="updateSnackbar"
            ></Register>
            <v-btn
              v-scroll="onScroll"
              v-show="fab"
              fab
              dark
              fixed
              bottom
              right
              color="#c08d2b"
              @click="toTop"
            >
              <v-icon color="black">mdi-arrow-up</v-icon>
            </v-btn>
            <v-snackbar v-model="snackbar">
              {{ snackbarText }}
              <template v-slot:action="{ attrs }">
                <v-btn
                  color="red"
                  text
                  v-bind="attrs"
                  @click="snackbar = false"
                >
                  Close
                </v-btn>
              </template>
            </v-snackbar>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Register from "../components/Register";
import Login from "../components/Login";
import ForgotPassword from "@/components/ForgotPassword";
import Account from "@/components/Account";
import ChangePassword from "@/components/ChangePassword";
import ChangeEmail from "@/components/ChangeEmail";
import { firebaseAuth } from "@/main";
export default {
  name: "Authentication",
  components: {
    ChangePassword,
    ChangeEmail,
    ForgotPassword,
    Login,
    Register,
    Account,
  },
  data() {
    return {
      authStatus: "login",
      loginStatus: false,
      snackbarStatus: "",
      snackbar: false,
      snackbarText: "",
      fab: false,
    };
  },
  methods: {
    updateStatus(authStatus) {
      this.authStatus = authStatus;
    },
    updateLogin(loginStatus) {
      this.loginStatus = loginStatus;
    },
    updateSnackbar(snackbarStatus) {
      this.snackbarStatus = snackbarStatus;
    },
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  },
  created() {
    firebaseAuth.getAuth().onAuthStateChanged((user) => {
      if (user) {
        this.authStatus = "account";
        if (this.snackbarStatus === "register") {
          this.snackbarText = "Register successful";
          this.snackbar = true;
        } else if (this.snackbarStatus === "login") {
          this.snackbarText = "Login successful";
          this.snackbar = true;
        }
        return (this.loginStatus = true);
      } else {
        return (this.loginStatus = false);
      }
    });
  },
};
</script>