console.log("your index.js file is loaded correctly!");

$(document).ready(function () {
  $("nav li").hover(
    function () {
      $(this).css("color", "white");
    },
    function () {
      $(this).css("color", "#303030");
    }
  );

  // softscroll //
  $("#aboutlink").on("click", function () {
    document.querySelector("#About").scrollIntoView({
      behavior: "smooth",
    });
  });

  $("#contactlink").on("click", function () {
    document.querySelector("#contactMe").scrollIntoView({
      behavior: "smooth",
    });
  });
  // background image animation  //
  $(".socialMediaFooter img").hover(
    function () {
      $(this).animate({ width: "45px", height: "45px" }, "fast");
    },
    function () {
      $(this).animate({ width: "40px", height: "40px" }, "fast");
    }
  );
  // footer image animation  //
  $(".socialMediaFooter1 img").hover(
    function () {
      $(this).animate({ width: "55px", height: "55px" }, "fast");
    },
    function () {
      $(this).animate({ width: "50px", height: "50px" }, "fast");
    }
  );
  // Accordion for tools //

  $(".accordion").each(function (index, acc_element) {
    console.log(acc_element);

    $(acc_element).on("click", function () {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this).next(".panel").css("display", "none");

        $(this).find(".minus").css("display", "none");
        $(this).find(".plus").css("display", "inline");
      } else {
        $(this).addClass("active");
        $(this).next(".panel").css("display", "block");
        $(this).find(".minus").css("display", "inline");
        $(this).find(".plus").css("display", "none");
      }
    });
  });
});
