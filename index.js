$(document).ready(function() {
    // Toggle dark mode
    $('#dark-mode-toggle').change(function () {
        if ($(this).is(':checked')) {
            $('body').addClass('bg-dark text-white');
            $('.navbar').removeClass('navbar-light bg-light').addClass('navbar-dark text-white bg-dark');
            $('#chat-cross').css('background-color', 'blue');
        } else {
            $('body').removeClass('bg-dark text-white');
            $('.navbar').removeClass('navbar-dark text-white bg-dark').addClass('navbar-light custom-navbar-bg');
            $('#chat-cross').css('background-color', 'white');
        }
    });
  });


  

  $(document).ready(function () {
    $('#userInput').keypress(function (e) {
        // Check if Enter key is pressed
        if (e.which === 13) { 
            sendMessage();
        }
    });
    
     function sendMessage(){
        var userInput = $('#userInput').val();
        if (userInput.trim() !== '') {
            $('#chat-box').append('<div class="user-message">' + userInput + '</div>');
            $('#userInput').val('');
            // Simulate bot response (you can replace this with actual bot logic)
            setTimeout(function () {
                $('#chat-box').append('<div class="bot-message">This is a bot response</div>');
                $('#chat-box').scrollTop($('#chat-box')[0].scrollHeight );
                var initialMarginBottom = parseInt($('#chat-box').css('margin-bottom'));
                while (initialMarginBottom>=0) {
                   // var currentMarginBottom = parseInt($('#chat-box').css('margin-bottom'));
                    var initialMarginBottom = initialMarginBottom - 5; // Decrease by 5 pixels
                    $('#chat-box').css('margin-bottom', initialMarginBottom + 'px');
                }
                
            }, 500);
        }
    }
    
    $('#send-btn').click(sendMessage)
});
  


function toggleDarkMode() {
    $("body").toggleClass("dark-mode");
}


$(document).ready(function(){
    $("#bot").click(function(){
        $(this).hide()
        
        $('#chatModal').slideToggle();
        
    })

$("#chat-cross").click(function(){
       
        
        $('#chatModal').hide();

        $('#bot').show()
    })
})
// Assisted access for first time users
$(document).ready(function() {
    alert("Welcome to Chat UI! You can type your messages in the input box and click 'Send'. You can also toggle dark mode using the 'Dark Mode' button.");
});

$(document).ready(function() {
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
                $('#chat-box').append('<div class="user-message">' + result + '</div>');
                $('#userInput').val('');
                // Simulate bot response (you can replace this with actual bot logic)
                setTimeout(function () {
                    $('#chat-box').append('<div class="bot-message">This is a bot response</div>');
                    $('#chat-box').scrollTop($('#chat-box')[0].scrollHeight );
                    var initialMarginBottom = parseInt($('#chat-box').css('margin-bottom'));
                    while (initialMarginBottom>=0) {
                       // var currentMarginBottom = parseInt($('#chat-box').css('margin-bottom'));
                        var initialMarginBottom = initialMarginBottom - 5; // Decrease by 5 pixels
                        $('#chat-box').css('margin-bottom', initialMarginBottom + 'px');
                    }
                    
                }, 500);
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
});

