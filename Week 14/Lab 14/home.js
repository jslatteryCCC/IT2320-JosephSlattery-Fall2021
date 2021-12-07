$(function(){

    $("#button1").on("click", function(){
       //URL: "https://api.openbrewerydb.org/breweries";//no query string
       
       var url = "https://api.openbrewerydb.org/breweries";
      $.ajax(
        {
          url: url,
          type: "Get",
          success: function(data)
          {
            $("#results").text("");
            console.log(data);
            $.each(data,function(i,item){//parse items inside data array
              var para = $("<p></p>");
              para.text(item.name +" "+ item.id  +" "+ item.city);
              $("#results").append(para);
           });            
          }
        });
    }); 


    $("#button2").on("click", function(){          
        //URL: "https://api.openbrewerydb.org/breweries?by_city=cleveland"
        var searchTerm = $("#searchByCity").val();//query string #1
        var baseUrl = "https://api.openbrewerydb.org/breweries?by_city=";
        var sortBy = $("#sortBy").val();//query string #2
        var url = baseUrl + searchTerm + "&sort=-"+sortBy;
        
        $.ajax(
          {
            url: url,
            type: "Get",
            success: function(data)
            {
              $("#results").text("");
              console.log(data); //if only one item, do data.name, data.id and data.city
              $.each(data,function(i,item){//parse items inside data array
                var para = $("<p></p>");
                para.text(item.name +" "+ item.id  +" "+ item.city);
                $("#results").append(para);
             });                        
            }
          });
    });

     $("#button3").on("click", function(){
       var searchTerm = $("#searchTerm").val();
       var baseUrl = "https://api.openbrewerydb.org/breweries/search?query=";
       var url = baseUrl + searchTerm;
       
       $.ajax(
        {
          url: url,
          type: "Get",
          success: (data) => {
            $("#results").text("");
            $.each(data, (i,item) => {
              var para = $("<p></p>");
              para.text(item.name + " - "+ item.city + ", " + item.state);
              $("#results").append(para).css('overflow-y','auto');
           });                        
          }
        });     
    }); 
  
//This works, but the brewery 'id' is not just a single number, as far as I can tell. When I log the 
//whole object, the 'id' key is a string, like "10-barrel-brewing-co-bend-1". If I send a number, like the 2 from the 
//example, I get a '404'

    $("#button4").on("click", function(){
      var searchTerm = $("#breweryId").val();
      var baseUrl = "https://api.openbrewerydb.org/breweries/"
      var url = baseUrl + searchTerm;

      $.ajax({
        url : url,
        type : 'Get',
        success : (data) => {
          $('#results').text("");
            var para = $("<p></p>");
            para.text("ID: " + data.id + " Brewery Type: " + data.brewery_type + " Name: " + data.name);
            $("#results").append(para);
        }
      })
        /* In this, we will use the search functionality of the breweries api
        Example: URL should look like this where we pass the Id of the brewery to find it
        https://api.openbrewerydb.org/breweries/2

        Base url is "https://api.openbrewerydb.org/breweries/"
        
        Get the ID of the brewery from the input with id = "breweryId"
         Append it to the Base URL to get the url
        Then call the ajax method with the url
        The result will be just one brewery
        Get the brewery's id, brewery_type and name and show in the #results div
        */
    });
    
});
