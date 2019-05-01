$(document).ready(function(){
    var myChart = echarts.init(document.getElementById('flot-line-chart-moving1'));
// 指定图表的配置项和数据
    var option = {
        title: {
            // text: '投诉总量趋势图',
            subtext: '数据来自fly'
        },
        tooltip: {},
        legend: {
            data:['数量']
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: true},
                magicType : {show: true, type: ['line', 'bar']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        xAxis: {
            // data: data1.times,
            data: ["2019.4.10","2019.4.11","2019.4.12","2019.4.13","2019.4.14","2019.4.15","2019.4.16"]
        },
        yAxis: {},
        series: [{
            name: '数量',
            type: 'line',
            // data: data1.amount,
            data: [98, 80, 56, 1, 0, 87, 35],
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        }]
    };
// 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
});
