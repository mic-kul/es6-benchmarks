"use strict"
module.exports = function(){
	var data = {name:'ben', company:'bevry'}
	var result = []
	Object.getOwnPropertyNames(data).forEach(function(key){
		var value = data[key]
		result.push(key+': '+value)
	})
	return
}