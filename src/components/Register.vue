<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" sm="4" md="12">
          <div>
            <div class="maincontent_Center"><h3>Register</h3></div>
            <div>
              <form action="#" @submit.prevent="register">
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
                </div>
                <div class="form-group row mb-0">
                  <div class="col-md-6 offset-md-4 auth-button">
                    <v-btn
                      type="submit"
                      color="rgba(215, 38, 0)"
                      class="btn btn-primary mr-10"
                      @click="back"
                    >
                      <v-icon>mdi-arrow-left</v-icon>
                      Back
                    </v-btn>
                    <v-btn
                      type="submit"
                      color="rgba(55, 151, 17)"
                      class="btn btn-primary"
                      >Register
                    </v-btn>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { firebaseAuth } from "@/main";
export default {
  name: "Register",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      loginStatus: "login",
    };
  },
  methods: {
    async register() {
      await firebaseAuth
        .createUserWithEmailAndPassword(
          firebaseAuth.getAuth(),
          this.form.email,
          this.form.password
        )
        .then((data) => {
          const actionCodeSettings = {
            url: `${process.env.VUE_APP_HOST_NAME}?email=${data.user.email}`,
          };
          firebaseAuth.sendEmailVerification(data.user, actionCodeSettings);
        })
        .catch((err) => {
          this.error = err.message;
        });
    },
    back() {
      this.$emit("statusEvent", this.loginStatus);
    },
  },
};
</script>
