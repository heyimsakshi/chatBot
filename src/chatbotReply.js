import { commands } from "../utils/commands.js";
export function chatbotReply(message){
    const reply=commands[message] || "Hello, I am here to help you. I am a AI trained bot"
    $('#chat-box').append('<div class="bot-message">'+ reply +'</div>');
    $('#chat-box').scrollTop($('#chat-box')[0].scrollHeight );
    var initialMarginBottom = parseInt($('#chat-box').css('margin-bottom'));
    
    while (initialMarginBottom>=0) {
       // var currentMarginBottom = parseInt($('#chat-box').css('margin-bottom'));
        var initialMarginBottom = initialMarginBottom - 5; // Decrease by 5 pixels
        $('#chat-box').css('margin-bottom', initialMarginBottom + 'px');
    }
}