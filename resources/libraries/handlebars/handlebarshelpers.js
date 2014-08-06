define(function(require) {
	"use strict";
	Handlebars.registerHelper("SafeString", function(string) {
		return new Handlebars.SafeString(string);
	});

	Handlebars.registerHelper('select', function(string, compareString, options) {
		if(string.toUpperCase() === compareString.toUpperCase()){
			return "selected"; 
		}else{
			return "";
		}
	});

	Handlebars.registerHelper('radio', function(string, compareString, options) {
		if(string.toUpperCase() === compareString.toUpperCase()){
			return "checked='checked'"; 
		}else{
			return "";
		}
	});

	Handlebars.registerHelper("isEqual", function(string, compareString,options) {
		if(string.toUpperCase() === compareString.toUpperCase()){
			return options.fn(this);
		}else{
			return options.inverse(this);
		}
	});
	
	Handlebars.registerHelper('isUndefined', function (value, options) {
		if(value !== undefined){
			return options.fn(this);
		}else{
			return options.inverse(this);
		}
	});
});