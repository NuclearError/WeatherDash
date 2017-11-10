
Papa.SCRIPT_PATH = "./papaparse.js";

const url = "./data/JCMB_2015.csv";

const markup = document.getElementById(output);

const results = Papa.parse(url, {
    worker: true,
    download: true,
    dynamicTyping: true,
	complete: function(results) {
        console.log(JSON.stringify(results.data));
        let outputText = JSON.stringify(results.data);
        markup.innerHTML = outputText;
	}
});
