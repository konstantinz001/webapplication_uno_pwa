<template>
  <div>
    <v-container>
            <v-row>

                <v-col cols="12" sm="4" md="12">
    <br /><br /><br />
    <div class="maincontent_Center">
      <h1>WELCOME TO UNO</h1>
      <img src="../assets/pics/UNO_Logo.png" width="40%" />
      <br />
      <br />
      <hr />

      <a href="https://github.com/konstantinz001/UNO_WebApplication" target="_blank">
      <button class="glow-on-hover" type="button">GitHub</button></a> <br><br>
    </div>
    </v-col>
  </v-row>
  </v-container>
  </div>
</template>

<script>
export default {
  name: "HomeComponent",
};
</script>

<style scoped>
.glow-on-hover {
  width: 220px;
  height: 50px;
  border: none;
  outline: none;
  color: #fff;
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  font-size: 25px;
  font-family: Georgia, "Times New Roman", Times, serif;
}

.glow-on-hover:before {
  content: "";
  background: linear-gradient(
    45deg,
    #ff0000,
    #ff7300,
    #fffb00,
    #48ff00,
    #00ffd5,
    #002bff,
    #7a00ff,
    #ff00c8,
    #ff0000
  );
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing 20s linear infinite;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  border-radius: 10px;
}

.glow-on-hover:active {
  color: #000;
}

.glow-on-hover:active:after {
  background: transparent;
}

.glow-on-hover:hover:before {
  opacity: 1;
}

.glow-on-hover:after {
  z-index: -1;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: #111;
  left: 0;
  top: 0;
  border-radius: 10px;
}

@keyframes glowing {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}

.maincontent_Center {
  justify-content: center;
  color: whitesmoke;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 17pt;
  text-align: center;
  margin: 20pt;
}

.maincontent_Left {
  justify-content: left;
  color: whitesmoke;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 17pt;
  text-align: left;
  margin: 20pt;
}
</style>