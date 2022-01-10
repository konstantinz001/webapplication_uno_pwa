<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" sm="4" md="12">
          <div>
            <div class="form-group row">
              <div class="col-md-8 offset-md-2 auth-button">
                <div
                  v-if="
                    auth.getAuth().currentUser.email.includes('@gmail.com') ||
                    auth.getAuth().currentUser.email.includes('@googlemail.com')
                  "
                ></div>
                <v-btn
                  v-else
                  color="rgba(192,141,43,255)"
                  type="submit"
                  class="btn btn-primary mr-10"
                  @click="changePassword"
                  >Change Password</v-btn
                >
                <div
                  v-if="
                    auth.getAuth().currentUser.email.includes('@gmail.com') ||
                    auth.getAuth().currentUser.email.includes('@googlemail.com')
                  "
                ></div>
                <v-btn
                  v-else
                  color="rgba(55, 151, 17)"
                  type="submit"
                  class="btn btn-primary mr-10"
                  @click="changeEmail"
                  >Change Email</v-btn
                >
                <v-btn
                  v-if="
                    auth.getAuth().currentUser.email.includes('@gmail.com') ||
                    auth.getAuth().currentUser.email.includes('@googlemail.com')
                  "
                  color="rgba(55, 151, 17)"
                  type="submit"
                  class="btn btn-primary"
                  @click="reauthenticateDeleteGoogleAccount"
                  >Delete Google Account</v-btn
                >
                <v-dialog v-else v-model="dialog" persistent max-width="600px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      color="rgba(55, 151, 17)"
                      type="submit"
                      class="btn btn-primary mr-10"
                      v-bind="attrs"
                      v-on="on"
                      >Delete Account</v-btn
                    >
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="text-h5"
                        >Authenticate with Email and Password</span
                      >
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12">
                            <v-text-field
                              label="Email*"
                              required
                              v-model="userEmail"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-text-field
                              label="Password*"
                              type="password"
                              required
                              v-model="userPassword"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                      </v-container>
                      <small>*indicates required field</small>
                    </v-card-text>
                    <v-card-actions>
                      <v-btn color="blue darken-1" text @click="dialog = false">
                        Close
                      </v-btn>
                      <v-btn
                        color="blue darken-1"
                        text
                        @click="reauthenticateDeleteAccount"
                      >
                        Save
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
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
  name: "Account",
  data() {
    return {
      userEmail: "",
      userPassword: "",
      userEmailSignIn: "",
      userPasswordSignIn: "",
      newEmail: "",
      authStatus: "",
      loginStatus: true,
      dialog: false,
      snackbarStatus: "delete",
      auth: firebaseAuth,
    };
  },
  methods: {
    changeEmail() {
      this.authStatus = "changeEmail";
      this.$emit("statusEvent", this.authStatus);
    },
    changePassword() {
      this.authStatus = "changePassword";
      this.$emit("statusEvent", this.authStatus);
    },
    async reauthenticateDeleteAccount() {
      this.dialog = false;
      const user = await firebaseAuth.getAuth().currentUser;
      const credential = await firebaseAuth.EmailAuthProvider.credential(
        this.userEmail,
        this.userPassword
      );
      await firebaseAuth.reauthenticateWithCredential(user, credential);
      this.authStatus = "login";
      this.$emit("statusEvent", this.authStatus);
      this.$emit("snackbarEvent", this.snackbarStatus);
      await firebaseAuth
        .deleteUser(user)
        .then(() => {})
        .catch((error) => {
          console.log(error);
        });
    },
    async reauthenticateDeleteGoogleAccount() {
      const user = firebaseAuth.getAuth().currentUser;
      this.authStatus = "login";
      this.$emit("statusEvent", this.authStatus);
      this.$emit("snackbarEvent", this.snackbarStatus);
      await firebaseAuth
        .deleteUser(user)
        .then(() => {})
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>