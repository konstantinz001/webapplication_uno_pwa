<template>
  <div>
    <v-container>
            <v-row>

                <v-col cols="12" sm="4" md="12">
    <br />
    <br />
    <br />
    <div class="maincontent_Center">

      <h1>UNO - Web Application</h1>
      <br />
      <img src="../assets/pics/UNO_Logo.png" width="40%"/>
      <br />
      <br />
      The classic UNO-Game, created in Scala. This is the coursework for Web Applications class at <a href="https://www.htwg-konstanz.de/">University of Applied Sciences Constance (HTWG Konstanz)</a> for fall 2021.
      <br />
      By <a href="https://github.com/konstantinz001/" target="_blank">Konstantin Zabaznov</a> and <a href="https://github.com/JeSuisUneLicorne/" target="_blank">Julian Zimmermann</a>.
      <br />
      <br />
      <hr />

      <h3>Setup</h3>
      The game is for two players. The draw pile contains 108 cards. Each player
      takes seven cards form the draw pile.<br />
      The top card from the draw pile will be placed in the discard pile, and
      the game begins!<br />

      <hr />

      <h3>Game Play</h3>
      You have to match either by the number, color, or the symbol/action with
      the discard pile. For example,
      <br />
      if the discard pile has a red card with the number 8 you have to place
      either a red card or a card with an 8 on it.
      <br />
      You can also play a wild card (which can alter current color in play).<br />
      <br />
      If the player has no matches or they choose not to play any of their cards
      even though they might have a match,
      <br />
      they must draw a card from the draw pile.<br />
      <br />
      If a player put a card on the discard pile or take a card from the draw
      pile, the game moves on to the other player. <br />
      You can also play a wild card, or a wild draw four card on your turn.<br />
      The game continues until a player has two card left. The moment a player
      has just two card they must call “UNO!” (the button at the top right corner) <br />
      to put another card on the discard pile. If he is not calling “UNO!”, he must draw two new cards as a penalty. <br />
      If a player call too early "UNO!", that player must also draw two new cards as a penalty.<br />
      To win the game the player with only one card must call "UNO!" again and place his last card on the discard pile.
      <br />

      <hr />

      <h3>Action Cards</h3>
    </div>

    <div class="maincontent_Left">
      <ul>
        <li><b>Reverse:</b></li>
        <ul>
          If going clockwise, switch to counterclockwise. It can only be played
          on a card that matches by color, or on another reverse card.
        </ul>
        <br />
        <li><b>Skip:</b></li>
        <ul>
          When a player places this card, the next player has to skip their turn. It can only be played on a card that matches by color, or on another skip card.
        </ul>
        <br />
        <li><b>Draw Two:</b></li>
        <ul>
          When a player places this card, the other player will have to pick up
          two cards and forfeit his/her turn. It can only be played on<br />
          a card that matches by color, or on another draw two.
        </ul>
        <br />
        <li><b>Wild:</b></li>
        <ul>
          This card represents all four colors, and can be placed on any card.
          The player, who used this card, can wish for a color, which the other player has to play.
        </ul>
        <br />
        <li><b>Wild - Draw Four:</b></li>
        <ul>
          This acts just like the wild card except that the next player also has
          to draw four cards.
        </ul>
      </ul>
    </div>

    <div class="maincontent_Center">
      <hr />

  <!--    <h3>The Game</h3>
      <img src="../assets/pics/GameField3.png" width="500" />
      <br />
      <h3>Graphical UI</h3>
      To Enter the Game click on "Enter". If you want to close the window click
      on "Exit".
      <br />
      <br />
      <img src="../assets/pics/GameField1.png" width="500" />
      <br /><br />
      If you are on turn, your cards are invisible. Click on the "show cards"
      Button on the right site, to make your cards visible. <br />
      If you want to draw a card from the Draw Pile, you have to click the Draw
      Pile Button on the left site.
      <br />
      <br />
      <img src="../assets/pics/GameField2.png" width="500" />
      <img src="../assets/pics/GameField3.png" width="500" />
      <br /><br />
      If you want to set a "Wild" Card, you have choose a wishcolor. click one
      of Color Buttons to set your wishcolor.
      <br />
      <br />
      <img src="../assets/pics/GameField5.png" width="500" />
      <br /><br />
      If you have only one or two cards and you want to put a card on the
      Discard Pile, you have to click on the UNO-Button to call "UNO!".
      <br />
      <br />
      <img src="../assets/pics/GameField4.png" width="500" />
      <br /><br />
      If the game is over, you can play another game with the "yes" Button or
      close the window with the "no" Button.
      <br />
      <br />
      <img src="../assets/pics/GameField6.png" width="500" />
      <br /><br />

      <hr />  -->

  <!-- TODO: Check whats usable and write it
      <h3>Technical UI</h3>
      You can write various instructions to play with the TUI.
      <br />
      <br />
    </div>
    <div class="maincontent_Left">
      <ul>
        <li><b>Remove a card from your hand:</b></li>
        <ul>
          r [index] [Optional: WishColor]
        </ul>
        <br />
        <li><b>Get a card from the Draw Pile:</b></li>
        <ul>
          s
        </ul>
        <br />
        <li><b>Remove a card from your hand and call UNO:</b></li>
        <ul>
          u [index]
        </ul>
        <br />
        <li><b>Exit Game:</b></li>
        <ul>
          q
        </ul>
        <br />
        <li><b>Make Undo:</b></li>
        <ul>
          undo
        </ul>
        <br />
        <li><b>Make Redo:</b></li>
        <ul>
          redo
        </ul>
        <br />
        <li><b>Save Game:</b></li>
        <ul>
          save
        </ul>
        <br />
        <li><b>Load Game:</b></li>
        <ul>
          load
        </ul>
        <br />
      </ul>
      <br /> -->
      <div class="maincontent_Center">
        <a
          href="https://github.com/konstantinz001/UNO_WebApplication"
          target="_blank"
          ><button class="glow-on-hover" type="button">GitHub</button></a>
          <br><br>
      </div>
    </div>
    </v-col>
  </v-row>
  </v-container>
  </div>
</template>

<script>
export default {
  name: "AboutComponent"
}
</script>

<style scoped>
  a:link {
    color: white;
    background-color: transparent;
    text-decoration: none;
  }
  a:visited {
    color: white;
    background-color: transparent;
    text-decoration: none;
  }
  a:hover {
    color: burlywood;
    background-color: transparent;
    text-decoration: underline;
  }
  a:active {
    color: white;
    background-color: transparent;
    text-decoration: underline;
  }
</style>