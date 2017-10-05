ModAPI.registerAPI("HAPI", {
	harvest:Harvest,	
	requireGlobal: function(command){
		return eval(command);
	}
});
Logger.Log("HarvestAPI shared with name HAPI", "API");