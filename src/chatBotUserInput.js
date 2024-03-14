export function chatBotUserInput(result){
    $('#chat-box').append('<div class="user-message">' + result + '</div>');
}