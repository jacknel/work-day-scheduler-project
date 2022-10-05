var now =  moment().format("dddd, MMMM Do YYYY, h:mm a");
$("#dateEl").text(now);

$(".saveBtn").on("click", function(){
    var task = $(this).parents("div").siblings("textarea").val()
    var time = $(this).parents("div").siblings("textarea").attr("id")
    localStorage.setItem(time, task)
})

// $("#9").val(localStorage.getItem("9"))
// $("#10").val(localStorage.getItem("10"))
// $("#11").val(localStorage.getItem("11"))

function taskRender(){
    for (let i = 9; i <= 17; i++) {
        $(`#${i}`).val(localStorage.getItem(`${i}`))
    }
}

taskRender()

function rowColor(){
    $("textarea").each(function (){
        var hourId = parseInt($(this).attr("id"));
        var currentHour = parseInt(moment().hour());
        console.log(typeof hourId)
        if(hourId < currentHour){
            $(this).addClass("past")
        } else if (hourId === currentHour){
            $(this).removeClass("past")
            $(this).addClass("present")
        } else {
            $(this).removeClass("present")
            $(this).removeClass("past")
            $(this).addClass("future")
        }

    })
}

rowColor();