<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" sm="4" md="12">
          <div class="maincontent_Center"><h3>Change Password</h3></div>
          <div>
            <div class="form-group row">
              <label
                for="newPassword"
                class="col-md-4 col-form-label text-md-right align-self-center authText"
                >New password</label
              >
              <div class="col-md-6">
                <input
                  id="newPassword"
                  type="password"
                  class="form-control input-field"
                  name="email"
                  value
                  required
                  autofocus
                  v-model="newPassword"
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
                    @click="changePassword()"
                    >Save
                  </v-btn>
              </div>
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
  name: "ChangePassword",
  data() {
    return {
      email: "",
      password: "",
      newPassword: "",
      authStatus: "account",
      dialog: false,
    };
  },
  methods: {
    back() {
      this.$emit("statusEvent", this.authStatus);
    },
    async changePassword() {
      let user = await firebaseAuth.getAuth().currentUser;
      await firebaseAuth
        .updatePassword(user, this.newPassword)
        .then(() => {firebaseAuth.getAuth().signOut(),
                    this.$router.replace({name: "Home"});
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>