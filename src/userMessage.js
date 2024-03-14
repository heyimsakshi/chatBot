
import { sendMessage } from "./sendUserMessage.js";
export function userMessage(){
    $('#userInput').keypress(function (e) {
        // Check if Enter key is pressed
        if (e.which === 13) { 
            sendMessage();
        }
    });
 
    $('#send-btn').click(sendMessage)
  
}