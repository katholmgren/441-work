var prize = {"prizes":[{
  "year":"2019",
  "category":"chemistry",
  "laureates":[
    {
    "id":"976",
    "firstname":"John",
    "surname":"Goodenough",
    "motivation":"\"for the development of lithium-ion batteries\"",
    "share":"3"},
    {
    "id":"977",
    "firstname":"M. Stanley",
    "surname":"Whittingham",
    "motivation":"\"for the development of lithium-ion batteries\"",
    "share":"3"},
    {
    "id":"978",
    "firstname":"Akira",
    "surname":"Yoshino",
    "motivation":"\"for the development of lithium-ion batteries\"",
    "share":"3"}
  ]}
}];

//ar i = 2;
$(document).ready(function () {

  $(function (){
    $("#btnSubmit").click(function (){
      showPrizeInfo();
    });
  });

  function showPrizeInfo()
      {
          $("#prizeInfo").html("Year: " + prize.prizes.year);
      }
});

// // "The Same Origin Policy" ERROR
//   function showPrizeInfo(){
//     $("#prizeInfo").load("data/prize.json", function(responseText){
//         var bike = JSON.parse(responseText);
//           $("#prizeInfo").html("Winner: " + prize.prizes.year);
//         //  bike.sizes[0] + "<br>" + bike.sizes[1] + "<br>" + bike.sizes[2] + "<br>" + bike.sizes[3]);
//     });
//   }
// });
