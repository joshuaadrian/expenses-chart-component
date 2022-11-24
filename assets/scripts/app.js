class Chart {

  constructor(json) {
    this.chartData = json;
    this.buildBars();
  }

  buildBars() {

  	var data = this.chartData;
  	var highNumber = 0;

  	data.forEach(function (bar, index) {

		if ( bar.amount > highNumber ) {
			highNumber = bar.amount;
		}

  	});
  		
  	data.forEach(function (bar, index) {

  		var day = document.getElementById(bar.day);

  		if ( bar.amount == highNumber ) {
  			day.classList.add("is-highest");
  		}

  		var heightPercent  = bar.amount / highNumber * 100;
  		day.style.height   = heightPercent + '%';
  		day.dataset.amount = bar.amount;

  	});

  }

}

document.addEventListener("DOMContentLoaded", function() {

	var chartData;

	fetch('../../data/data.json')
		.then(response => response.json())
		.then(data => {
			chartData = data;
			var chart = new Chart(data);
		})
		.catch(error => console.log(error));

});