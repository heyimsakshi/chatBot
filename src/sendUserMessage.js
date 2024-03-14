import { chatbotReply } from "./chatbotReply.js";
import { chatBotUserInput } from "./chatBotUserInput.js";
export function sendMessage(){
    var userInput = $('#userInput').val();
    if (userInput.trim() !== '') {
        
        chatBotUserInput(userInput);
     
        // Simulate bot response (you can replace this with actual bot logic)
        setTimeout(function () {
        const message = userInput.trim().toLowerCase();
           if(message){
                chatbotReply(message);   
            }
            
        }, 500);
        
        $('#userInput').val('');
    }
}
