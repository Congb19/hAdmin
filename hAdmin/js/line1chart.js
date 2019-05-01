$(document).ready(function(){
    var myChart = echarts.init(document.getElementById('flot-line-chart-moving1'));
// 指定图表的配置项和数据
    var option = {
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true,
            areaStyle: {}
        }]
    };

// 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
});
