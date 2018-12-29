d3.csv('./movie_data/movie_cleandata.csv',
    function (error, data) {
        if (error) {
            console.log("ERROR:");
            console.log(error);
            return;
        }

        // var processData = [];
        //
        // data.forEach(function(d){
        //     if (d['genre1'] == 'Action' | d['genre2'] == 'Action' | d['genre3']== 'Actiion') {
        //
        //         var movie_title = d['movie_title'];
        //         var genere1 = d['genre1'];
        //         var avgr_u18 = d['avgr_u18'];
        //         var avgr_1829 = d['avgr_18-29'];
        //         var avgr_3044 = d['avgr_3044'];
        //         var avgr_a45 = d['avgr_a45'];
        //         var gross = d['gross'];
        //         var budget = d['budget'];
        //         var imdb_score = d['imdb_score'];
        //     }
        // })


        var margin = { top:100, right:100, bottom:100, left:100};
        var width = 800;
        var height = 300;

        var svg = d3.select('body')
            .append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', 'translate(' + margin.left + ',' + margin.top + ")");


    }

)