//=======================
// MOONHUNTER.NET
//=======================

//Estimated USD difference for Profit Trailer 2.0
//Created by ProfitTanker#0156

//Bug fixed by MoonHunter: 'NaN' in parsing 4 digits number 
function parseNumber(val) {
	return val === undefined ? 0 : parseFloat(val.replace("$", "").replace(",", ""));
}

function estimate() {
	//Pairs
	if ($('#dtPairsLogs thead').length > 0) {
		$('#dtPairsLogs tbody tr').each(function() {
			$(this).find('b').remove();
			var difference = (parseNumber($(this).find('td.bought-cost:last .current-value').text()) - parseNumber($(this).find('td.bought-cost:last .bought-cost').text())).toFixed(2);
			var difference2 = (parseNumber($(this).find('td.current-value.blue-color:first .current-value').text()) - parseNumber($(this).find('td.current-value.blue-color:first .bought-cost').text())).toFixed(8);
			if (difference2 > 0) {
				$(this).find('td.bought-cost:last .bought-cost').append('<b style="color:#05b16f;border-top: 1px solid;"><br>$' + difference + '</b>');
				$(this).find('td.current-value.blue-color:first .bought-cost').append('<b style="color:#05b16f;border-top: 1px solid;"><br>' + difference2 + '</b>');
			} else {
				$(this).find('td.bought-cost:last .bought-cost').append('<b style="color:#d85353;border-top: 1px solid;"><br>$' + difference + '</b>');
				$(this).find('td.current-value.blue-color:first .bought-cost').append('<b style="color:#d85353;border-top: 1px solid;"><br>' + difference2 + '</b>');
			}
		});
	}
	//DCA
	if ($('#dtDcaLogs thead').length > 0) {
		$('#dtDcaLogs tbody tr').each(function() {
			$(this).find('b').remove();
			var difference = (parseNumber($(this).find('td.current-value:last .current-value').text()) - parseNumber($(this).find('td.current-value:last .bought-cost').text())).toFixed(2);
			var difference2 = (parseNumber($(this).find('td.current-value.blue-color:first .current-value').text()) - parseNumber($(this).find('td.current-value.blue-color:first .bought-cost').text())).toFixed(8);
			if (difference2 > 0) {
				$(this).find('td.current-value:last').append('<b style="color:#05b16f;border-top: 1px solid;"><br>$' + difference + '</b>');
				$(this).find('td.current-value.blue-color:first').append('<b style="color:#05b16f;border-top: 1px solid;"><br>' + difference2 + '</b>');
			} else {
				$(this).find('td.current-value:last').append('<b style="color:#d85353;border-top: 1px solid;"><br>$' + difference + '</b>');
				$(this).find('td.current-value.blue-color:first').append('<b style="color:#d85353;border-top: 1px solid;"><br>' + difference2 + '</b>');
			}
		});
	}
	//Dust
	if ($('#dtDustLogs thead').length > 0) {
		$('#dtDustLogs tbody tr').each(function() {
			$(this).find('b').remove();
			var difference = (parseNumber($(this).find('td.bought-cost .current-value').text()) - parseNumber($(this).find('td.bought-cost .bought-cost').text())).toFixed(2);
			var difference2 = (parseNumber($(this).find('td.blue-color.current-value:first .current-value').text()) - parseNumber($(this).find('td.blue-color.current-value:first .bought-cost').text())).toFixed(8);
			if (difference2 > 0) {
				$(this).find('td.bought-cost .bought-cost').append('<b style="color:#05b16f;border-top: 1px solid;"><br>$' + difference + '</b>');
				$(this).find('td.blue-color.current-value:first').append('<b style="color:#05b16f;border-top: 1px solid;"><br>' + difference2 + '</b>');
			} else {
				$(this).find('td.bought-cost .bought-cost').append('<b style="color:#d85353;border-top: 1px solid;"><br>$' + difference + '</b>');
				$(this).find('td.blue-color.current-value:first').append('<b style="color:#d85353;border-top: 1px solid;"><br>' + difference2 + '</b>');
			}
		});
	}
}
$("body").on('DOMSubtreeModified', "#dvLastUpdatedOn", function() {
	estimate();
});
$('#topNav a').on("click", function() {
	setTimeout(function() {
		estimate();
	}, 100);
});