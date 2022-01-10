<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" sm="4" md="12">
          <div class="maincontent_Center"><h3>Change Email</h3></div>
          <div>
            <div class="form-group row">
              <label for="email" class="col-md-4 col-form-label text-md-right align-self-center authText">Email</label>
              <div class="col-md-6">
                <input
                    id="email"
                    type="email"
                    class="form-control input-field"
                    name="email"
                    value
                    required
                    autofocus
                    v-model="this.newEmail"
                />
              </div>
            </div>
            <div class="form-group row mb-0">
              <div class="col-md-6 offset-md-4 auth-button">
                <v-btn
                    type="submit"
                    color="rgba(215, 38, 0)"
                    class="btn btn-primary mr-10"
                    @click="back">
                  <v-icon>mdi-arrow-left</v-icon>
                  Back
                </v-btn>
                                    <v-btn
                    type="submit"
                    color="rgba(55, 151, 17)"
                    class="btn btn-primary"
                    @click="changingEmail()"
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
import {firebaseAuth} from "@/main";
export default {
  name: "ChangeEmail",
  data() {
    return {
      newEmail: '',
      userEmail: '',
      userPassword: '',    
      authStatus: 'account'
    }
  },
  methods: {
    async changingEmail() {
      this.authStatus = "login";
      await firebaseAuth.updateEmail(firebaseAuth.getAuth().currentUser, this.newEmail)
      this.$emit("statusEvent", this.authStatus);
    },
    back() {
      this.$emit('statusEvent', this.authStatus)
    },
  }
}
</script>