
import { chatbotReply } from "./chatbotReply.js";
import { chatBotUserInput } from "./chatBotUserInput.js";
export function speechRecognition(){
    const recognition = new webkitSpeechRecognition();

// Set recognition properties
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.continuous = false;
    recognition.rate = 2.0;

// Handle recognition result
    recognition.onresult = function (event) {
    const result = event.results[0][0].transcript;
    console.log(result)
    if (result.trim() !== '') {
        $('#userInput').val(result);
        chatBotUserInput(result);
    
        // Simulate bot response (you can replace this with actual bot logic)
        setTimeout(function () {

        const message = result.trim().toLowerCase();

        if(message){
                
        chatbotReply(message)
        }
            
        }, 500);

        $('#userInput').val('');
    }
    };
  // Handle recognition start
    recognition.onstart = function () {
        $('#userInput').attr('placeholder', 'Listening...'); // Update placeholder text
    };

// Handle recognition end
    recognition.onend = function () {
        $('#userInput').attr('placeholder', 'Type your message...');
        $('#voice-mute').show();
        $('#voice-icon').hide();
    };

    $('#voice-icon').click(function(){
        $(this).css('color', 'blue')
        recognition.start();
    })

    $('#voice-mute').click(function(){
        $(this).hide();
        $('#voice-icon').show().click();
    })
}