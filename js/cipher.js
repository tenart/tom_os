$(function() {
    
    console.log("ready");
    
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    
    $("#encrypt").click(function() {
        var input = $("#input").val().toLowerCase();
        var key = parseInt($("#key").val());
        var output = new Array(input.length);
        if( input.length > 0 && key != "" ) {
            
            $(".label").find("i").remove();
            
            for(i=0; i<input.length; i++) {
                if(input[i] == " ") {
                    output[i] = input[i];
                } else if( !isNaN(input[i]) ) {
                    output[i] = input[i];
                } else {
// encrypted.append(alphabet[(alphabet.find(original[i].lower())+n)%26]);
                    output[i] = alphabet[ (alphabet.indexOf(input[i]) + key)%26 ];
                }
            }
            $("#output").val(output.join(""));
        } else {
            $(".label").find("i").remove();
            $(".label").append(" <i class='fa fa-exclamation-circle'></i>");
        }
    })
    
})