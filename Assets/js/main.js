let num = 20;
const productNumber = 1;
let name = "pid" + num + ".json";
$(document).ready(function () {
  $.getJSON(name, function (jd) {
    // product number
    $(".productImg").append(productNumber);
    for (let i = 0; i < 10; i++) {
      if (jd.reviews[i].friend == true) {
        //~ name
        $("#review").append(
          "<p> Your Name : " + jd.reviews[i].reviewer.name + "</p>"
        );
      }

      $("#review").append("<p> Your title : " + jd.reviews[i].title + "</p>");
      $("#review").append(
        "<p> Your comment : " + jd.reviews[i].comment + "</p>"
      );
      $("#review").append(
        "<p> usefulness : " + jd.reviews[i].usefulness + "</p>"
      );
      $("#review").append(
        "<p class='rating' > ratings Overall : " +
          jd.reviews[i].ratings.Overall +
          "</p>" +
          "<hr>"
      );
    }
  });
});
