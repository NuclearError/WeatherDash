
// const url = "./data/JCMB_2015.csv";          // original data
// const url = "./data/tiny.csv";               // tiny data set for dev/testing
const url = "./data/october.csv";               // 2nd October 2015

$("#output").css('border', '1px solid red');

const bars = dc.barChart("#output");

d3.csv(url, function(data) {
    const ndx = crossfilter(data);

    const minDate = new Date( data[0]['date-time'] );
    const maxDate = new Date( data[(data.length-1)]['date-time'] );

    const dateDimension = ndx.dimension( (d) => {
        return new Date(d['date-time']);
    });
    const temp = dateDimension.group().reduceSum( (d) => { return +d['surface temperature (C)']; });

    bars
        .width(800)
        .height(400)
        .x(d3.time.scale().domain([minDate,maxDate]))
        .yAxisLabel( "Surface Temp (C)" )
        .xAxisLabel( "Time" )
        .dimension(dateDimension)
        .group(temp);

    bars.render();

});
