//ECharts
//词云
var male_chart = echarts.init(document.getElementById("male_chart"));

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
            formatter: '{c}%'
        }
    }
};
option = {
    title: {
        text: '多维条形图',
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter : '{b}<br/>{a0}:{c0}%<br/>{a2}:{c2}%<br/>{a4}:{c4}%<br/>{a6}:{c6}%'
    },
    legend: {
        y: 55,
        itemGap : document.getElementById('male_chart').offsetWidth / 8,
        data:[]
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
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
            data : []
        }
    ],
    series : []
};
male_chart.showLoading();
var legend = [];
var ylabel = [];
var value1 = [];
var value2 = [];
var value3 = [];
var value4 = [];

$.ajax({
    type:'get',
    url: '../../movie_data/average_score_agegruopm.json',
    dataType: 'json',
    success: function (result) {
        $.each(result.data, function (index,item) {
            ylabel.push(item.index);
            value1.push(item['under18']);
            value2.push(item['18-29']);
            value3.push(item['30-44']);
            value4.push(item['above45']);
        });
        $.each(result.schema.fields, function(index,item){
            legend.push(item.name)
        });

        male_chart.hideLoading();
        male_chart.setOption({
            legend: {data:legend.slice(1,4)},
            yAxis: {data:ylabel},
            series: [
                {
                    name:'under18',
                    type:'bar',
                    itemStyle : dataStyle,
                    data:value1
                },
                // {
                //     name:'GML',
                //     type:'bar',
                //     stack: '总量',
                //     itemStyle: placeHoledStyle,
                //     data:[62, 50, 67, 28]
                // },
                {
                    name:'18-29',
                    type:'bar',
                    itemStyle : dataStyle,
                    data:value2
                },
                // {
                //     name:'PYP',
                //     type:'bar',
                //     stack: '总量',
                //     itemStyle: placeHoledStyle,
                //     data:[39, 59, 58, 70]
                // },
                {
                    name:'30-44',
                    type:'bar',
                    itemStyle : dataStyle,
                    data:value3
                },
                // {
                //     name:'WTC',
                //     type:'bar',
                //     stack: '总量',
                //     itemStyle: placeHoledStyle,
                //     data:[63, 65, 56, 40]
                // },
                {
                    name:'above45',
                    type:'bar',
                    itemStyle : dataStyle,
                    data:value4
                },
                // {
                //     name:'ZTW',
                //     type:'bar',
                //     stack: '总量',
                //     itemStyle: placeHoledStyle,
                //     data:[29, 50, 69, 61]
                // }
            ]
        })
        }
});
