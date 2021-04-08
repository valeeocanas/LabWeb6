$(".agregar").on("click", function(ev){
    ev.preventDefault();
    if ($("#newText").val() == ""){ //no hay ninguna entrada
        alert("Item vacío");
    } else {
      $("ul").append(`<div> 
        <li class = "lis"> 
            <p 
              class = "itemShop" style="color:black"> ${$("#newText").val()}
            </p>
            <button id = "bCheck" > 
              check 
            </button>
            <button id = "bDelete" > 
              delete 
            </button>
        </li> 
        </div>`);
    }
});

$(document).on("click", "#bCheck", function(ev){
    ev.preventDefault();
    $(this).parent().toggleClass("listCheck");
})

$(document).on("click", "#bDelete", function(ev){
    ev.preventDefault();
    $(this).parent().remove();
});