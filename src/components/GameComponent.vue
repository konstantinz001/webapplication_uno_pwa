<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" sm="4" md="12">
          <div id="uno-GameField">
            <div class="maincontent_Center">
              <div id="gameMessage"></div>
              <div class="maincontent_Left">
                <img
                  src="../assets/pics/UNO_Logo.png"
                  width="20%"
                  class="Pic_Center"
                  id="unoCall"
                  align="Right"
                />
                <img
                  src="../assets/pics/cards/Stack.png"
                  width="10%"
                  class="Pic_Center"
                  id="pullStack"
                />
              </div>
              <div id="stackCard"></div>
              <br />
              <br />
              <div id="handCard"></div>
            </div>
          </div>

          <v-overlay :absolute="absolute" :value="overlay" id="overlayWish">
            <div id="wishGame-GameField">
              <div class="maincontent_Center">
                <img
                  src="../assets/pics/cards/Red_Radio.png"
                  width="25%"
                  class="Pic_Center"
                  id="wishRed"
                />
                <img
                  src="../assets/pics/cards/Green_Radio.png"
                  width="25%"
                  class="Pic_Center"
                  id="wishGreen"
                />
                <img
                  src="../assets/pics/cards/Yellow_Radio.png"
                  width="25%"
                  class="Pic_Center"
                  id="wishYellow"
                />
                <img
                  src="../assets/pics/cards/Blue_Radio.png"
                  width="25%"
                  class="Pic_Center"
                  id="wishBlue"
                />
              </div>
            </div>
          </v-overlay>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HomeComponent",
  created() {
    let options = {
      headers: { "Content-Type": "application/" },
      url: "https://uno-play.herokuapp.com/newGame",
      method: "get",
    };
    let result = axios(options);
  },
  mounted() {
    $("#overlayWish").css("visibility", "collapse");
  },
};
</script>