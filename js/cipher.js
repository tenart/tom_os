$(function() {
    
    console.log("ready");
    
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    
    $("#encrypt").click(function() {
        var input = $("#input").val().toLowerCase();
        var inputRaw = $("#input").val();
        var key = parseInt($("#key").val());
        var output = new Array(input.length);
        if( input.length > 0 && key != "" ) {
            
            $(".label").find("i").remove();
            
            for(i=0; i<input.length; i++) {
                if(input[i] == " ") {
                    output[i] = input[i];
                } else if( alphabet.indexOf(input[i]) < 0 ) {
                    output[i] = input[i];
                } else {
                    var shiftedLetter = alphabet[ (alphabet.indexOf(input[i]) + key)%26 ];
                    if( inputRaw[i] == input[i].toUpperCase() ) {
                        var shiftedLetter = shiftedLetter.toUpperCase();
                    }
                    output[i] = shiftedLetter;
                }
            }
            $("#output").val(output.join(""));
        } else {
            $(".label").find("i").remove();
            $(".label").append(" <i class='fa fa-exclamation-circle'></i>");
        }
    })
    
})