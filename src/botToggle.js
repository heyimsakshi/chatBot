export function botToggle(){
    $("#bot").click(function(){
        $(this).hide()
        
        $('#chatModal').slideToggle();
        
    })
    
    $("#chat-cross").click(function(){
       
        
        $('#chatModal').hide();
    
        $('#bot').show()
    })
    
}