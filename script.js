/* Exercise 2: Color picker */

var color_list=[];

$(document).ready(function() {

  window.addEventListener("keydown", keydownHandler, false);

  function keydownHandler(event) {
    if(event.keyCode === 13) {
      var color = $("input#color").val();
      setPreview(color);
    }
  }

  $(document).on('click', '#add-to-favorite', function() {
    var color = $("input#color").val();
    addBox(color);
  });
});

function setPreview(color) {
  $(".preview").css('background-color', color);
}

function addBox(color) {
  var isEqual = false;

  if (color_list.length === 0) {
    var content = "<div class='item' style='background-color:" + color + ";'></div>";
    $("#colors").prepend(content);
    $("#color").val("");
    setPreview("white");
    color_list.push(color);
  }
  else if($(".item").length<16) {
    for(var i = 0; i < color_list.length; i++) {
      if(color_list[i] === color) {
        isEqual = true;
      }
    }
    if(!isEqual) {
      var content = "<div class='item' style='background-color:" + color + ";'></div>";
      $("#colors").prepend(content);
      $("#color").val("");
      setPreview("white");
      color_list.push(color);
    }
    else {
      console.log("The color has already been added to your favourite list");
    }
  }
  else {
    console.log("The maximum number of favourite colors is 16");
  }
}
