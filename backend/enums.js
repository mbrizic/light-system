module.exports = {
	create: function (input) {
		var output = {};

		for(var key in input){
			var value = input[key];
			output[output[key] = value] = key;
		}

		return output;
	}
};