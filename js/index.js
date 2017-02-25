$(function() {
    
    $(".window").draggable({ 
        containment: "body" , 
        handle: ".title_bar",
        start: function() {
            $(".window").removeClass("front");
            $(this).addClass("front");
        },
    })
    
    $(".icon").draggable({ 
        containment: "body" ,
        start: function() {
            $(".icon").removeClass("front_icon");
            $(this).addClass("front_icon");
        },
    })
    
    $(".window").click(function() {
        $(".window").removeClass("front");
        $(this).addClass("front");
    })
    
    $(".min").click(function() {
        $(this).closest(".window").addClass("collapsed");
    })
    
    $(".max").click(function() {
        $(this).closest(".window").removeClass("collapsed");
    })
    
    $(".close").click(function() {
        $(this).closest(".window").fadeOut(50);
    })
    
    $(".icon").click(function() {
        var target = "#" + $(this).attr("app");
        $(target).fadeIn(50);
        $(".window").removeClass("front");
        $(target).addClass("front");
        $(target).removeClass("collapsed");
    })
    
    updateTime();
    
    setInterval(updateTime, 10000);
    
    function updateTime() {
        var time = new Date();
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var mons = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        
        $("#day").text( days[time.getDay()] );
        
        var formattedDate = mons[time.getMonth()] + " " + time.getDate() + ", " + time.getFullYear();
        
        $("#date").text(formattedDate);
        
        var hour = time.getHours();
        var period = "AM";
        
        if ( hour >= 12 ) {
            period = "PM";
            if (hour > 12) {
                hour = hour - 12;
            }    
        } else if ( hour == 0 ) {
            hour = 12;
            period = "AM";
        }
        
        var minutes = time.getMinutes();
                
        if(minutes.toString().length < 2) {
            minutes = "0" + minutes;
        }
        
        $("#time").text(hour + ":" + minutes + " " + period);
        
    }
    
})