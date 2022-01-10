<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" sm="4" md="12">
          <div class="maincontent_Center"><h3>Forgot Password</h3></div>
          <div>
            <form action="#" @submit.prevent="resetPassword">
              <div class="form-group row">
                <label
                  for="email"
                  class="
                    authText
                    col-md-4 col-form-label
                    text-md-right
                    align-self-center
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
                    v-model="email"
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
                    @click="resetPassword"
                  >
                    Continue
                  </v-btn>
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
  name: "ForgotPassword",
  data() {
    return {
      email: "",
      error: "",
      emailSending: false,
      authStatus: "login",
    };
  },
  methods: {
    back() {
      this.$emit("statusEvent", this.authStatus);
    },
    resetPassword() {
      if (!this.email) {
        this.error = "Please type in a valid email address.";
        return;
      }
      this.error = null;
      this.emailSending = true;
      firebaseAuth
        .sendPasswordResetEmail(firebaseAuth.getAuth(), this.email)
        .then(() => {
          this.emailSending = false;
        })
        .catch((error) => {
          this.emailSending = false;
          this.error = error.message;
        });
    },
  },
};
</script>