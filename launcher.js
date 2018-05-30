var modsAPI = {};
ModAPI.addAPICallback("ForestryAPI", function(api){
	modsAPI.ForestryAPI = api
});
Launch({
	modsAPI: modsAPI
});