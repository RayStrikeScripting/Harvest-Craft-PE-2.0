IDRegistry.genBlockID("salt"); 
Block.createBlock("salt", [
	{name: "Salt", texture: [["saltBLOCK", 0]], inCreative: true}
]);
Block.registerDropFunction("salt", function(coords, blockID, blockData, level){
	var drop = [];
	if(Math.random() < 1){
		drop.push([ItemID.salt, 2 + parseInt(Math.random() * 5), 0]);
	}	
	return drop;
});