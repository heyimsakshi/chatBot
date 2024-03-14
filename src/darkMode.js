export function darkMode(){
    $('#dark-mode-toggle').change(function () {
        if ($(this).is(':checked')) {
            $('body').addClass('bg-dark text-white');
            $('.navbar').removeClass('navbar-light bg-light').addClass('navbar-dark text-white bg-dark');
            $('#chat-cross').css('background-color', 'blue');
            $(".card").addClass("dark-mode");
        } else {
            $('body').removeClass('bg-dark text-white');
            $('.navbar').removeClass('navbar-dark text-white bg-dark').addClass('navbar-light custom-navbar-bg');
            $('#chat-cross').css('background-color', 'white');
            $(".card").removeClass("dark-mode");
        }
    });
}