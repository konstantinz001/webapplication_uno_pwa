<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" sm="4" md="12">
          <div class="maincontent_Center"><h3>Login</h3></div>
          <div>
            <form action="#" @submit.prevent="login">
              <div class="form-group row">
                
                <label
                  for="email"
                  class="
                    col-md-4 col-form-label
                    text-md-right
                    align-self-center
                    authText
                  "
                  >Email</label
                >

                <div class="col-md-6">
                  <input
                    id="email"
                    type="email"
                    class="form-control input-field"
                    name="email"
                    value
                    required
                    autofocus
                    v-model="form.email"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label
                  for="password"
                  class="
                    col-md-4 col-form-label
                    text-md-right
                    align-self-center
                    authText
                  "
                  >Password</label
                >

                <div class="col-md-6">
                  <input
                    id="password"
                    type="password"
                    class="form-control input-field"
                    name="password"
                    required
                    v-model="form.password"
                  />
                </div>
                <div class="col-md-12 col-form-label text-center">
                    <a @click="forgotPassword">Forgot Password</a>
                </div>
              </div>

              <div class="form-group row mb-9">
                <div class="col-md-12 offset-md-3">
                  <v-btn
                    color="rgb(55, 151, 17)"
                    type="submit"
                    class="btn btn-primary mr-10"
                    @click="login"
                    >Login</v-btn
                  >

                  <v-btn
                    color="rgb(236, 212, 7)"
                    type="submit"
                    class="btn btn-primary mr-10"
                    @click="registerWithGoogle"
                    >Google Login</v-btn
                  >

                  <v-btn
                    color="rgb(9, 86, 191)"
                    type="submit"
                    class="btn btn-primary mr-10"
                    @click="register"
                    >Register</v-btn
                  >

                </div>
              </div>
            </form>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { firebaseAuth } from "@/main";
export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      loginStatus: "",
      snackbarStatus: "login",
    };
  },
  methods: {
    register() {
      this.loginStatus = "register";
      this.$emit("statusEvent", this.loginStatus);
    },
    forgotPassword() {
      this.loginStatus = "forgotPassword";
      this.$emit("statusEvent", this.loginStatus);
    },
    async login() {
      this.$emit('snackbarEvent', this.snackbarStatus)
      firebaseAuth
        .signInWithEmailAndPassword(
          firebaseAuth.getAuth(),
          this.form.email,
          this.form.password
        )
        .catch((err) => {
          this.error = err.message;
        });
    },
    registerWithGoogle() {
      this.$emit('snackbarEvent', this.snackbarStatus)
      let provider = new firebaseAuth.GoogleAuthProvider();
      firebaseAuth
        .signInWithPopup(firebaseAuth.getAuth(), provider)
        .then(() => {
          console.log("GooleAuth -> Success");
        });
    },
  },
};
</script>