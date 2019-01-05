//ECharts

//Bar chart of average score given by different age groups
var ageBarChart = echarts.init(document.getElementById('age_chart'), 'shine');
var placeHoledStyle = {
    normal:{
        barBorderColor:'rgba(0,0,0,0)',
        color:'rgba(0,0,0,0)'
    },
    emphasis:{
        barBorderColor:'rgba(0,0,0,0)',
        color:'rgba(0,0,0,0)'
    }
};
var dataStyle = {
    normal: {
        label : {
            show: true,
            position: 'insideLeft',
            formatter: '{c}'
        }
    }
};
$.getJSON('data/average_score_agegroup.json', function (data) {
    // console.log(data.schema.fields.map(function (item) {
    //     return item.name;
    // }).slice(1,5));
    legend_data = data.schema.fields.map(function (item) {
        return item.name;
    }).slice(1,5);
    elem = legend_data.pop();
    legend_data.unshift(elem);
    option = {
        title: {
            text: 'Average Score Given by Different Age Groups of Every Genre',
            x: 'center'
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {
                type : 'shadow'
            },
            formatter : '{b}<br/>{a0}:{c0}<br/>{a2}:{c2}<br/>{a4}:{c4}<br/>{a6}:{c6}'
        },
        legend: {
            x: 120,
            y: 55,
            itemGap : document.getElementById('age_chart').offsetWidth / 7,
            data: legend_data
        },
        toolbox: {
            show : true,
            x: 780,
            y: 'top',
            feature : {
                dataView : {show: true, readOnly: true, title: 'Data View'},
                restore : {show: true, title: 'Restore'},
                saveAsImage : {show: true, title: 'Save as Image', type: 'png'}
            }
        },
        grid: {
            y: 80,
            y2: 30
        },
        xAxis : [
            {
                type : 'value',
                position: 'top',
                splitLine: {show: false},
                axisLabel: {show: false}
            }
        ],
        yAxis : [
            {
                type : 'category',
                splitLine: {show: false},
                data : data.data.map(function (item) {
                    return item.index;
                })
            }
        ],
        series : [
            {
                name:'under18',
                type:'bar',
                stack: '总量',
                itemStyle : dataStyle,
                data: data.data.map(function (item) {
                    return item['under18'];
                })
            },
            {
                name:'under18',
                type:'bar',
                stack: '总量',
                itemStyle: placeHoledStyle,
                data: data.data.map(function (item) {
                    return 10 - item['under18'];
                })
            },
            {
                name:'18-29',
                type:'bar',
                stack: '总量',
                itemStyle : dataStyle,
                data: data.data.map(function (item) {
                    return item['18-29'];
                })
            },
            {
                name:'18-29',
                type:'bar',
                stack: '总量',
                itemStyle: placeHoledStyle,
                data: data.data.map(function (item) {
                        return 10 - item['18-29'];
                })
            },
            {
                name:'30-44',
                type:'bar',
                stack: '总量',
                itemStyle : dataStyle,
                data: data.data.map(function (item) {
                        return item['30-44'];
                })
            },
            {
                name:'30-44',
                type:'bar',
                stack: '总量',
                itemStyle: placeHoledStyle,
                data: data.data.map(function (item) {
                        return 10 - item['30-44'];
                })
            },
            {
                name:'above45',
                type:'bar',
                stack: '总量',
                itemStyle : dataStyle,
                data: data.data.map(function (item) {
                        return item['above45'];
                })
            },
            {
                name:'above45',
                type:'bar',
                stack: '总量',
                itemStyle: placeHoledStyle,
                data: data.data.map(function (item) {
                        return 10 - item['above45'];
                })
            }
        ]
    };
    ageBarChart.setOption(option);
});

//Bar chart of average score given by female of different age groups of every genre
var femaleBarChart = echarts.init(document.getElementById('female_chart'), 'shine');
var placeHoledStyle = {
    normal:{
        barBorderColor:'rgba(0,0,0,0)',
        color:'rgba(0,0,0,0)'
    },
    emphasis:{
        barBorderColor:'rgba(0,0,0,0)',
        color:'rgba(0,0,0,0)'
    }
};
var dataStyle = {
    normal: {
        label : {
            show: true,
            position: 'insideLeft',
            formatter: '{c}'
        }
    }
};
$.getJSON('data/average_score_agegroupf.json', function (data) {
    // console.log(data.schema.fields.map(function (item) {
    //     return item.name;
    // }).slice(1,5));
    legend_data = data.schema.fields.map(function (item) {
        return item.name;
    }).slice(1,5);
    elem = legend_data.pop();
    legend_data.unshift(elem);
    option = {
        title: {
            text: 'Average Score Given by Female of Every Genre',
            x: 'center'
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {
                type : 'shadow'
            },
            formatter : '{b}<br/>{a0}:{c0}<br/>{a2}:{c2}<br/>{a4}:{c4}<br/>{a6}:{c6}'
        },
        legend: {
            x: 120,
            y: 55,
            itemGap : document.getElementById('female_chart').offsetWidth / 7,
            data: legend_data
        },
        toolbox: {
            show : true,
            x: 780,
            y: 'top',
            feature : {
                dataView : {show: true, readOnly: true, title: 'Data View'},
                restore : {show: true, title: 'Restore'},
                saveAsImage : {show: true, title: 'Save as Image', type: 'png'}
            }
        },
        grid: {
            y: 80,
            y2: 30
        },
        xAxis : [
            {
                type : 'value',
                position: 'top',
                splitLine: {show: false},
                axisLabel: {show: false}
            }
        ],
        yAxis : [
            {
                type : 'category',
                splitLine: {show: false},
                data : data.data.map(function (item) {
                    return item.index;
                })
            }
        ],
        series : [
            {
                name:'under18',
                type:'bar',
                stack: '总量',
                itemStyle : dataStyle,
                data: data.data.map(function (item) {
                    return item['under18'];
                })
            },
            {
                name:'under18',
                type:'bar',
                stack: '总量',
                itemStyle: placeHoledStyle,
                data: data.data.map(function (item) {
                    return 10 - item['under18'];
                })
            },
            {
                name:'18-29',
                type:'bar',
                stack: '总量',
                itemStyle : dataStyle,
                data: data.data.map(function (item) {
                    return item['18-29'];
                })
            },
            {
                name:'18-29',
                type:'bar',
                stack: '总量',
                itemStyle: placeHoledStyle,
                data: data.data.map(function (item) {
                    return 10 - item['18-29'];
                })
            },
            {
                name:'30-44',
                type:'bar',
                stack: '总量',
                itemStyle : dataStyle,
                data: data.data.map(function (item) {
                    return item['30-44'];
                })
            },
            {
                name:'30-44',
                type:'bar',
                stack: '总量',
                itemStyle: placeHoledStyle,
                data: data.data.map(function (item) {
                    return 10 - item['30-44'];
                })
            },
            {
                name:'above45',
                type:'bar',
                stack: '总量',
                itemStyle : dataStyle,
                data: data.data.map(function (item) {
                    return item['above45'];
                })
            },
            {
                name:'above45',
                type:'bar',
                stack: '总量',
                itemStyle: placeHoledStyle,
                data: data.data.map(function (item) {
                    return 10 - item['above45'];
                })
            }
        ]
    };
    femaleBarChart.setOption(option);
});

//Bar chart of average score given by female of different age groups of every genre
var maleBarChart = echarts.init(document.getElementById('male_chart'), 'shine');
var placeHoledStyle = {
    normal:{
        barBorderColor:'rgba(0,0,0,0)',
        color:'rgba(0,0,0,0)'
    },
    emphasis:{
        barBorderColor:'rgba(0,0,0,0)',
        color:'rgba(0,0,0,0)'
    }
};
var dataStyle = {
    normal: {
        label : {
            show: true,
            position: 'insideLeft',
            formatter: '{c}'
        }
    }
};
$.getJSON('data/average_score_agegroupm.json', function (data) {
    // console.log(data.schema.fields.map(function (item) {
    //     return item.name;
    // }).slice(1,5));
    legend_data = data.schema.fields.map(function (item) {
        return item.name;
    }).slice(1,5);
    elem = legend_data.pop();
    legend_data.unshift(elem);
    option = {
        title: {
            text: 'Average Score Given by Male of Every Genre',
            x: 'center'
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {
                type : 'shadow'
            },
            formatter : '{b}<br/>{a0}:{c0}<br/>{a2}:{c2}<br/>{a4}:{c4}<br/>{a6}:{c6}'
        },
        legend: {
            x: 120,
            y: 55,
            itemGap : document.getElementById('female_chart').offsetWidth / 7,
            data: legend_data
        },
        toolbox: {
            show : true,
            x: 780,
            y: 'top',
            feature : {
                dataView : {show: true, readOnly: true, title: 'Data View'},
                restore : {show: true, title: 'Restore'},
                saveAsImage : {show: true, title: 'Save as Image', type: 'png'}
            }
        },
        grid: {
            y: 80,
            y2: 30
        },
        xAxis : [
            {
                type : 'value',
                position: 'top',
                splitLine: {show: false},
                axisLabel: {show: false}
            }
        ],
        yAxis : [
            {
                type : 'category',
                splitLine: {show: false},
                data : data.data.map(function (item) {
                    return item.index;
                })
            }
        ],
        series : [
            {
                name:'under18',
                type:'bar',
                stack: '总量',
                itemStyle : dataStyle,
                data: data.data.map(function (item) {
                    return item['under18'];
                })
            },
            {
                name:'under18',
                type:'bar',
                stack: '总量',
                itemStyle: placeHoledStyle,
                data: data.data.map(function (item) {
                    return 10 - item['under18'];
                })
            },
            {
                name:'18-29',
                type:'bar',
                stack: '总量',
                itemStyle : dataStyle,
                data: data.data.map(function (item) {
                    return item['18-29'];
                })
            },
            {
                name:'18-29',
                type:'bar',
                stack: '总量',
                itemStyle: placeHoledStyle,
                data: data.data.map(function (item) {
                    return 10 - item['18-29'];
                })
            },
            {
                name:'30-44',
                type:'bar',
                stack: '总量',
                itemStyle : dataStyle,
                data: data.data.map(function (item) {
                    return item['30-44'];
                })
            },
            {
                name:'30-44',
                type:'bar',
                stack: '总量',
                itemStyle: placeHoledStyle,
                data: data.data.map(function (item) {
                    return 10 - item['30-44'];
                })
            },
            {
                name:'above45',
                type:'bar',
                stack: '总量',
                itemStyle : dataStyle,
                data: data.data.map(function (item) {
                    return item['above45'];
                })
            },
            {
                name:'above45',
                type:'bar',
                stack: '总量',
                itemStyle: placeHoledStyle,
                data: data.data.map(function (item) {
                    return 10 - item['above45'];
                })
            }
        ]
    };
    maleBarChart.setOption(option);
});


//WordCloud of Genres
var genre_cloud = echarts.init(document.getElementById('word_cloud'), 'shine');
$.getJSON('data/num_genres.json', function (data) {
    option = {
        title: {
            text: 'Number of Genres',
            x: 'center'
        },
        tooltip: {
            show: true
        },
        toolbox: {
            x: 780,
            y: 'top',
            feature: {
                dataView: {show: true, title: 'Data View'},
                restore: {show: true, title: 'Switch color'},
                saveAsImage: {
                    show: true,
                    title: 'Save as image',
                    type: 'png',
                }
            }
        },
        series: [{
            name: 'Number of Genres',
            type: 'wordCloud',
            size: ['100%', '100%'],
            textRotation : [0, 45, 90, -45],
            textPadding: 20,
            autoSize: {
                enable: true,
                minSize: 30
            },
            textStyle: {
                normal: {
                    color: function () {
                        return 'rgb(' + [
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160)
                        ].join(',') + ')'
                    },
                },
                emphasis: {
                    shadowBlur: 6,
                    shadowColor: '#e6b600'
                }
            },
            data: data.data.map(function (item) {
                item = {
                    name: item.index,
                    value: item.values,
                    textStyle: {
                        normal: {},
                        emphasis: {}
                    }
                };
                return item;
            })
        }]
    };
    genre_cloud.setOption(option);
});


//Map
var myMap = echarts.init(document.getElementById('map'), 'shine');
$.getJSON('data/num_country_above_average.json',function (data) {
    var country_num = data.data.map(function (item) {
        return {
            name: item.country,
            value: item.num,
        }
    });
    // console.log(country_num);
    option = {
        title: {
            text:'Distribution of high score movies',
            left: 'center',
            top: 'top'
        },
        tooltip : {
            trigger: 'item',
            formatter : function (params) {
                if (params != undefined) {
                    var value = params.data.value;
                    return params.seriesName + '<br/>' + params.data.name + ' : ' + value;
                }
            }
        },
        toolbox: {
            show : true,
            x: 780,
            y: 'top',
            feature : {
                dataView : {show: true, readOnly: true, title: 'Data View'},
                restore : {show: true, title: 'Restore'},
                saveAsImage : {show: true, title: 'Save as Image'}
            }
        },
        visualMap: {
            min: 0,
            max: 2000,
            range: [1,2000],
            text:['High','Low'],
            realtime: false,
            calculable: true,
            color: ['orangered','yellow','lightskyblue']
        },
        series: [
            {
                name: 'Distribution of high score movies',
                type: 'map',
                mapType: 'world',
                roam: true,
                itemStyle:{
                    emphasis:{label:{show:true}}
                },
                data:country_num,
            }
        ]
    };
    myMap.setOption(option);
});


//Scatter plot budget vs. imdb_score
var bud_sc = echarts.init(document.getElementById('budget_score'), 'shine');
$.getJSON('data/budget_vs_score.json', function (data) {
    var data = data.data;
    var genre_list = ['Crime', 'Family', 'Horror', 'Comedy', 'Romance', 'Action', 'Animation', 'History',
        'Drama', 'Thriller', 'Western', 'Biography', 'Sci-Fi', 'War', 'Adventure', 'Music',
        'Fantasy', 'Mystery', 'Sport'
    ];
    var dataset = [];
    for (var i=0; i<genre_list.length; i++) {
        var subset = {};
        var points_set = [];
        subset['name'] = genre_list[i];
        for (var j=0; j<data.length; j++) {
            if (data[j]['genre'] == genre_list[i]) {
                var data_point = [];
                data_point.push(data[j].budget);
                data_point.push(data[j].imdb_score);
                points_set.push(data_point);
            }
        }
        subset['type'] = 'scatter';
        subset['data'] = points_set;
        subset['markPoint'] = {
            data : [
                {type : 'max', name: 'Highest Score'},
                {type : 'min', name: 'Lowest Score'}
            ]
        };
        subset['markLine'] = {
            data : [
                {type : 'average', name: 'Average Score'}
            ]
        };
        dataset.push(subset);
    }
    // console.log(dataset);
    option = {
        title : {
            text: 'Budget vs. IMDB_score',
            x: 'center'
        },
        tooltip : {
            trigger: 'axis',
            showDelay : 0,
            axisPointer:{
                show: true,
                type : 'cross',
                lineStyle: {
                    type : 'dashed',
                    width : 1
                }
            }
        },
        legend: {
            data: genre_list,
            orient: 'vertical',
            x: 'left',
            y: 60
        },
        toolbox: {
            show : true,
            x: 790,
            y: 'top',
            feature : {
                dataZoom : {show: true, title: 'Data Zoom'},
                dataView : {show: true, readOnly: true, title: 'Data View'},
                restore : {show: true, title: 'Restore'},
                saveAsImage : {show: true, title: 'Save as Image', type: 'png'}
            }
        },
        xAxis : [
            {
                type : 'value',
                scale:true,
                axisLabel : {
                    formatter: '${value}'
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                scale:true,
                axisLabel : {
                    formatter: '{value}'
                }
            }
        ],
        series : dataset
    };
    bud_sc.setOption(option);
});

//director actor1 relationship
// option = {
//     title : {
//         text: '人物关系：Movies',
//         x:'right',
//         y:'bottom'
//     },
//     tooltip : {
//         trigger: 'item',
//         formatter: '{a} : {b}'
//     },
//     toolbox: {
//         show : true,
//         feature : {
//             restore : {show: true},
//             magicType: {show: true, type: ['force', 'chord']},
//             saveAsImage : {show: true}
//         }
//     },
//     legend: {
//         x: 'left',
//         data:['Director','Actor_1']
//     },
//     series : [
//         {
//             type:'force',
//             name : "人物关系",
//             ribbonType: false,
//             categories : [
//                 {
//                     name: 'Director'
//                 },
//                 {
//                     name: 'Actor_1'
//                 },
//             ],
//             itemStyle: {
//                 normal: {
//                     label: {
//                         show: true,
//                         textStyle: {
//                             color: '#333'
//                         }
//                     },
//                     nodeStyle : {
//                         brushType : 'both',
//                         borderColor : 'rgba(255,215,0,0.4)',
//                         borderWidth : 1
//                     },
//                     linkStyle: {
//                         type: 'curve'
//                     }
//                 },
//                 emphasis: {
//                     label: {
//                         show: false
//                         // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
//                     },
//                     nodeStyle : {
//                         //r: 30
//                     },
//                     linkStyle : {}
//                 }
//             },
//             useWorker: false,
//             minRadius : 15,
//             maxRadius : 25,
//             gravity: 1.1,
//             scaling: 1.1,
//             roam: 'move',
//             nodes: [{"category":0,"name":"Adam McKay","value":1},{"category":0,"name":"Alejandro G. I\u00f1\u00e1rritu","value":2},{"category":0,"name":"Alex Garland","value":1},{"category":0,"name":"Alexander Payne","value":1},{"category":0,"name":"Alfonso Cuar\u00f3n","value":1},{"category":0,"name":"Anthony Russo","value":2},{"category":0,"name":"Ben Affleck","value":2},{"category":0,"name":"Bennett Miller","value":1},{"category":0,"name":"Brian Percival","value":1},{"category":0,"name":"Bryan Singer","value":1},{"category":0,"name":"Christopher Nolan","value":3},{"category":0,"name":"Damien Chazelle","value":1},{"category":0,"name":"Dan Gilroy","value":1},{"category":0,"name":"Danny Boyle","value":1},{"category":0,"name":"Darren Aronofsky","value":1},{"category":0,"name":"David Ayer","value":2},{"category":0,"name":"David Fincher","value":3},{"category":0,"name":"David O. Russell","value":2},{"category":0,"name":"Dean DeBlois","value":2},{"category":0,"name":"Denis Villeneuve","value":2},{"category":0,"name":"Don Hall","value":1},{"category":0,"name":"Doug Liman","value":1},{"category":0,"name":"Edgar Wright","value":1},{"category":0,"name":"Eli Craig","value":1},{"category":0,"name":"Ethan Coen","value":1},{"category":0,"name":"F. Gary Gray","value":1},{"category":0,"name":"Francis Lawrence","value":1},{"category":0,"name":"Gavin O'Connor","value":1},{"category":0,"name":"George Miller","value":1},{"category":0,"name":"J.J. Abrams","value":1},{"category":0,"name":"James Gunn","value":1},{"category":0,"name":"James Marsh","value":1},{"category":0,"name":"Jean-Marc Vall\u00e9e","value":1},{"category":0,"name":"Jonathan Levine","value":1},{"category":0,"name":"Josh Boone","value":1},{"category":0,"name":"Joss Whedon","value":2},{"category":0,"name":"Lee Unkrich","value":1},{"category":0,"name":"Mark Osborne","value":1},{"category":0,"name":"Martin Scorsese","value":3},{"category":0,"name":"Matt Reeves","value":1},{"category":0,"name":"Matthew Vaughn","value":2},{"category":0,"name":"Michael Haneke","value":1},{"category":0,"name":"Michel Hazanavicius","value":1},{"category":0,"name":"Morten Tyldum","value":1},{"category":0,"name":"Nathan Greno","value":1},{"category":0,"name":"Nicolas Winding Refn","value":1},{"category":0,"name":"Paul Greengrass","value":1},{"category":0,"name":"Pete Docter","value":1},{"category":0,"name":"Peter Berg","value":1},{"category":0,"name":"Peter Jackson","value":2},{"category":0,"name":"Phil Lord","value":1},{"category":0,"name":"Pierre Coffin","value":1},{"category":0,"name":"Quentin Tarantino","value":1},{"category":0,"name":"Rich Moore","value":1},{"category":0,"name":"Richard Curtis","value":1},{"category":0,"name":"Richard Linklater","value":2},{"category":0,"name":"Ridley Scott","value":1},{"category":0,"name":"Rob Reiner","value":1},{"category":0,"name":"Ron Howard","value":1},{"category":0,"name":"Rupert Wyatt","value":1},{"category":0,"name":"Ryan Coogler","value":1},{"category":0,"name":"Sam Mendes","value":2},{"category":0,"name":"Spike Jonze","value":1},{"category":0,"name":"Stephen Chbosky","value":1},{"category":0,"name":"Stephen Frears","value":1},{"category":0,"name":"Steve McQueen","value":1},{"category":0,"name":"Steven Spielberg","value":1},{"category":0,"name":"Tate Taylor","value":1},{"category":0,"name":"Tim Miller","value":1},{"category":0,"name":"Tom Hooper","value":1},{"category":0,"name":"Tom McCarthy","value":1},{"category":0,"name":"Wes Anderson","value":2},{"category":0,"name":"Woody Allen","value":1},{"category":1,"name":"Aidan Turner","value":2},{"category":1,"name":"Albert Finney","value":2},{"category":1,"name":"Aldis Hodge","value":1},{"category":1,"name":"Amy Poehler","value":1},{"category":1,"name":"Andrew Garfield","value":1},{"category":1,"name":"Anna Kendrick","value":1},{"category":1,"name":"Benedict Cumberbatch","value":2},{"category":1,"name":"Bill Murray","value":1},{"category":1,"name":"Billy Crudup","value":1},{"category":1,"name":"Brad Garrett","value":1},{"category":1,"name":"Brad Pitt","value":1},{"category":1,"name":"Bradley Cooper","value":1},{"category":1,"name":"Bruce Willis","value":1},{"category":1,"name":"B\u00e9r\u00e9nice Bejo","value":1},{"category":1,"name":"Chlo\u00eb Grace Moretz","value":1},{"category":1,"name":"Chris Hemsworth","value":3},{"category":1,"name":"Christian Bale","value":1},{"category":1,"name":"Clea DuVall","value":1},{"category":1,"name":"Colin Firth","value":1},{"category":1,"name":"Damon Wayans Jr.","value":1},{"category":1,"name":"Devin Ratray","value":1},{"category":1,"name":"Eddie Redmayne","value":1},{"category":1,"name":"Edgar Arreola","value":1},{"category":1,"name":"Elina Alminas","value":1},{"category":1,"name":"Elizabeth McGovern","value":1},{"category":1,"name":"Ellar Coltrane","value":1},{"category":1,"name":"Emily Watson","value":1},{"category":1,"name":"Emma Stone","value":2},{"category":1,"name":"Gary Oldman","value":1},{"category":1,"name":"Gerard Butler","value":2},{"category":1,"name":"Hugh Jackman","value":1},{"category":1,"name":"Isabelle Huppert","value":1},{"category":1,"name":"J.K. Simmons","value":1},{"category":1,"name":"Jack McBrayer","value":1},{"category":1,"name":"Jake Gyllenhaal","value":2},{"category":1,"name":"James Franco","value":2},{"category":1,"name":"Jeff Bridges","value":1},{"category":1,"name":"Jennifer Lawrence","value":4},{"category":1,"name":"Jeremy Renner","value":1},{"category":1,"name":"Jerry Ferrara","value":1},{"category":1,"name":"Joseph Gordon-Levitt","value":1},{"category":1,"name":"Katrina Bowden","value":1},{"category":1,"name":"Kurt Fuller","value":1},{"category":1,"name":"Leonardo DiCaprio","value":5},{"category":1,"name":"Logan Lerman","value":1},{"category":1,"name":"Madeline Carroll","value":1},{"category":1,"name":"Matt Damon","value":2},{"category":1,"name":"Matthew McConaughey","value":2},{"category":1,"name":"Morgan Freeman","value":1},{"category":1,"name":"Natalie Portman","value":1},{"category":1,"name":"Patrick Fugit","value":1},{"category":1,"name":"Phaldut Sharma","value":1},{"category":1,"name":"Philip Seymour Hoffman","value":1},{"category":1,"name":"Quvenzhan\u00e9 Wallis","value":1},{"category":1,"name":"Robert Downey Jr.","value":1},{"category":1,"name":"Robin Wright","value":1},{"category":1,"name":"Ryan Gosling","value":2},{"category":1,"name":"Ryan Reynolds","value":1},{"category":1,"name":"Scarlett Johansson","value":2},{"category":1,"name":"Seamus Davey-Fitzpatrick","value":1},{"category":1,"name":"Shailene Woodley","value":1},{"category":1,"name":"Steve Carell","value":1},{"category":1,"name":"Steve Coogan","value":1},{"category":1,"name":"Sylvester Stallone","value":1},{"category":1,"name":"Tom Cruise","value":1},{"category":1,"name":"Tom Hanks","value":3},{"category":1,"name":"Tom Hardy","value":3},{"category":1,"name":"Tom Hughes","value":1}],
//             links: [{"source":"Steve McQueen","target":"Quvenzhan\u00e9 Wallis"},{"source":"Danny Boyle","target":"James Franco"},{"source":"Jonathan Levine","target":"Joseph Gordon-Levitt"},{"source":"Richard Curtis","target":"Tom Hughes"},{"source":"Michael Haneke","target":"Isabelle Huppert"},{"source":"Ben Affleck","target":"Clea DuVall"},{"source":"Richard Linklater","target":"Seamus Davey-Fitzpatrick"},{"source":"Don Hall","target":"Damon Wayans Jr."},{"source":"Alejandro G. I\u00f1\u00e1rritu","target":"Emma Stone"},{"source":"Darren Aronofsky","target":"Natalie Portman"},{"source":"Richard Linklater","target":"Ellar Coltrane"},{"source":"Steven Spielberg","target":"Tom Hanks"},{"source":"Anthony Russo","target":"Robert Downey Jr."},{"source":"Anthony Russo","target":"Scarlett Johansson"},{"source":"Paul Greengrass","target":"Tom Hanks"},{"source":"Ryan Coogler","target":"Sylvester Stallone"},{"source":"Jean-Marc Vall\u00e9e","target":"Matthew McConaughey"},{"source":"Matt Reeves","target":"Gary Oldman"},{"source":"Tim Miller","target":"Ryan Reynolds"},{"source":"Pierre Coffin","target":"Steve Carell"},{"source":"Quentin Tarantino","target":"Leonardo DiCaprio"},{"source":"Nicolas Winding Refn","target":"Ryan Gosling"},{"source":"Doug Liman","target":"Tom Cruise"},{"source":"David Ayer","target":"Jake Gyllenhaal"},{"source":"Alex Garland","target":"Elina Alminas"},{"source":"Rob Reiner","target":"Madeline Carroll"},{"source":"David Ayer","target":"Brad Pitt"},{"source":"David Fincher","target":"Patrick Fugit"},{"source":"Alfonso Cuar\u00f3n","target":"Phaldut Sharma"},{"source":"James Gunn","target":"Bradley Cooper"},{"source":"Spike Jonze","target":"Scarlett Johansson"},{"source":"Dean DeBlois","target":"Gerard Butler"},{"source":"Dean DeBlois","target":"Gerard Butler"},{"source":"Martin Scorsese","target":"Chlo\u00eb Grace Moretz"},{"source":"Christopher Nolan","target":"Leonardo DiCaprio"},{"source":"Pete Docter","target":"Amy Poehler"},{"source":"Christopher Nolan","target":"Matthew McConaughey"},{"source":"Matthew Vaughn","target":"Elizabeth McGovern"},{"source":"Peter Berg","target":"Jerry Ferrara"},{"source":"George Miller","target":"Tom Hardy"},{"source":"Woody Allen","target":"Kurt Fuller"},{"source":"Bennett Miller","target":"Philip Seymour Hoffman"},{"source":"Wes Anderson","target":"Bruce Willis"},{"source":"Alexander Payne","target":"Devin Ratray"},{"source":"Dan Gilroy","target":"Jake Gyllenhaal"},{"source":"Stephen Frears","target":"Steve Coogan"},{"source":"Denis Villeneuve","target":"Hugh Jackman"},{"source":"Rupert Wyatt","target":"James Franco"},{"source":"Ron Howard","target":"Chris Hemsworth"},{"source":"Edgar Wright","target":"Anna Kendrick"},{"source":"Martin Scorsese","target":"Leonardo DiCaprio"},{"source":"Denis Villeneuve","target":"Edgar Arreola"},{"source":"David O. Russell","target":"Jennifer Lawrence"},{"source":"Sam Mendes","target":"Albert Finney"},{"source":"Sam Mendes","target":"Albert Finney"},{"source":"Tom McCarthy","target":"Billy Crudup"},{"source":"J.J. Abrams","target":"Benedict Cumberbatch"},{"source":"F. Gary Gray","target":"Aldis Hodge"},{"source":"Nathan Greno","target":"Brad Garrett"},{"source":"Michel Hazanavicius","target":"B\u00e9r\u00e9nice Bejo"},{"source":"Joss Whedon","target":"Chris Hemsworth"},{"source":"Joss Whedon","target":"Chris Hemsworth"},{"source":"Adam McKay","target":"Ryan Gosling"},{"source":"Brian Percival","target":"Emily Watson"},{"source":"Christopher Nolan","target":"Tom Hardy"},{"source":"Josh Boone","target":"Shailene Woodley"},{"source":"David O. Russell","target":"Christian Bale"},{"source":"David Fincher","target":"Robin Wright"},{"source":"Wes Anderson","target":"Bill Murray"},{"source":"Tate Taylor","target":"Emma Stone"},{"source":"Peter Jackson","target":"Aidan Turner"},{"source":"Peter Jackson","target":"Aidan Turner"},{"source":"Francis Lawrence","target":"Jennifer Lawrence"},{"source":"Morten Tyldum","target":"Benedict Cumberbatch"},{"source":"Tom Hooper","target":"Colin Firth"},{"source":"Phil Lord","target":"Morgan Freeman"},{"source":"Mark Osborne","target":"Jeff Bridges"},{"source":"Ridley Scott","target":"Matt Damon"},{"source":"Stephen Chbosky","target":"Logan Lerman"},{"source":"Alejandro G. I\u00f1\u00e1rritu","target":"Leonardo DiCaprio"},{"source":"David Fincher","target":"Andrew Garfield"},{"source":"James Marsh","target":"Eddie Redmayne"},{"source":"Ben Affleck","target":"Jeremy Renner"},{"source":"Martin Scorsese","target":"Leonardo DiCaprio"},{"source":"Lee Unkrich","target":"Tom Hanks"},{"source":"Ethan Coen","target":"Matt Damon"},{"source":"Eli Craig","target":"Katrina Bowden"},{"source":"Gavin O'Connor","target":"Tom Hardy"},{"source":"Damien Chazelle","target":"J.K. Simmons"},{"source":"Rich Moore","target":"Jack McBrayer"},{"source":"Bryan Singer","target":"Jennifer Lawrence"},{"source":"Matthew Vaughn","target":"Jennifer Lawrence"}],
//
//
//         }
//     ]
// };
// var ecConfig = require('echarts/config');
// function focus(param) {
//     var data = param.data;
//     var links = option.series[0].links;
//     var nodes = option.series[0].nodes;
//     if (
//         data.source !== undefined
//         && data.target !== undefined
//     ) { //点击的是边
//         var sourceNode = nodes.filter(function (n) {return n.name == data.source})[0];
//         var targetNode = nodes.filter(function (n) {return n.name == data.target})[0];
//         console.log("选中了边 " + sourceNode.name + ' -> ' + targetNode.name + ' (' + data.weight + ')');
//     } else { // 点击的是点
//         console.log("选中了" + data.name + '(' + data.value + ')');
//     }
// }
// myChart.on(ecConfig.EVENT.CLICK, focus);
//
// myChart.on(ecConfig.EVENT.FORCE_LAYOUT_END, function () {
//     console.log(myChart.chart.force.getPosition());
// });




