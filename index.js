$(".column").hover(
  function() {
    
    $(this).find(".block").css("opacity", "0.7");
    $(this).find(".price").css("visibility", "visible");
  },
  function() {
    
    $(this).find(".block").css("opacity", "");
    $(this).find(".price").css("visibility", "");
  }
);