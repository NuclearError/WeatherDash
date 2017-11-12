
const url = "./data/JCMB_2015.csv";

$("#output").css('border', '1px solid red');

d3.csv(url, function(data) {
    const sample = JSON.stringify(data[0]);
    $("#output").text(sample);
});
