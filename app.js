/**
 * Created by aaronsawyer on 4/27/15.
 */
var apikey = '63ca07321b9d1e89888017956dfe1c1afd182df7';

// Use this function to do stuff with your results.
// It is called after 'search' is executed.
function searchCallback(results) {
    var i = 0;
    for(i = 0; i < results.length ; i ++ ){
        $("#searchResults").append("<div id='resultObjects" + i + "' class='resultObjects col-md-3'><div><img src='" + results[i].image.thumb_url + "'/></div></div>")
        console.log(results[i].image.thumb_url);
    }
    }


$(document).ready(function() {

    // Start the search here!
    search('batman');
});

// HELPER FUNCTION
// Executes a search using 'query' and runs searchCallback on the results of a success.
function search(query){

    $.ajax ({
        type: 'GET',
        dataType: 'jsonp',
        crossDomain: true,
        jsonp: 'json_callback',
        url: 'http://www.giantbomb.com/api/search/?format=jsonp&resources=game&api_key=' + apikey +'&query=' + encodeURI(query),
        complete: function() {
            console.log('ajax complete');
        },
        success: function(data) {
            searchCallback(data.results);
        }
    });

}