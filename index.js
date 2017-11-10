
const url = "./data/JCMB_2015.csv";

fetch(url)
.then(response => response.json())
.then( (data) => {
    console.log("Data was fetched.");
    console.log(data);
})
.catch(function() {
    console.log("Error fetching data.");
});
