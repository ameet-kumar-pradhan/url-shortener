$(document).ready(() => {

  var div = $("<div>");
  div.attr({
    class: "container jumbotron-fluid ",
    name: "container"
  });
  $("body")
    .addClass("bg-dark")
    .append(div);
  div.append("<h1>URL Shortener</h1>");
  $("h1").addClass("h1");

  $("<input>")
    .attr({
      id: "input1",
      class: "input-group mb-3 pt-2 pb-2 pl-2 pr-3",
      placeholder: "Insert URL here!"
    })
    .appendTo(div);

  $("<button>")
    .attr({
      id: "btn",
      type: "button",
      class: "btn btn-primary"
    })
    .text("Submit")
    .appendTo(div);

  $("<div>")
    .attr({
      class: "url-area"
    })
    .append("<h5>Shorten link will be visible here</h5>")
    .appendTo(div);
  $("h5")
    .addClass("url")
    .attr({
      class: "mt-4 mb-4",
      id: "url"
    });

  $("#btn").click(() => {
    var urlLink = $("#input1").val();

    var settings = {
      async: true,
      crossDomain: true,
      url: "https://url-shortener-service.p.rapidapi.com/shorten",
      method: "POST",
      headers: {
        "x-rapidapi-host": "url-shortener-service.p.rapidapi.com",
        "x-rapidapi-key": "a33cd704f5mshc880b526b5cb4b3p1d40c5jsn99911ff208f2",
        "content-type": "application/x-www-form-urlencoded"
      },
      data: {
        "url": urlLink
      },
      error: function(error) {
        console.log(error.status + " " + error.statusText + ". " + error.responseJSON.error+".")
      }
    };
    $.ajax(settings).done(function(response) {
      console.log(response.result_url);
      $("#input1").val(response.result_url);
      $('#btn').attr({
        disabled:""
      });
      // $("#url").text(urlLink + " : " + response.result_url);
    // $('#input1').val("")

    },
    );
  });
});
