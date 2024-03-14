import {resList} from "../utils/constants.js"

import { userMessage } from "./userMessage.js";
import { darkMode } from "./darkMode.js";
import { botToggle } from "./botToggle.js";
import { assistMe } from "./assistMe.js";
import { speechRecognition } from "./speechRecognition.js";
import {showCards} from "./showCards.js"
import {filterCards} from "./filterCards.js"
$(document).ready(function() {
    // Toggle dark mode
    darkMode();

  //user Input message in chat div
    userMessage();

  // bot and chat div Toggles on click of bot and cross icon respectively
    botToggle();

    //This function helps user to know about the application
    assistMe();


    //This function recognizes the speech and converts to text
    speechRecognition();


  //This function shows the cards 
    showCards();

  //This function filters the cards 
    filterCards();

  });


  








