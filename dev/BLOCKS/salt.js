IDRegistry.genBlockID("salt"); 
Block.createBlock("salt", [
	{name: "Salt", texture: [["saltBLOCK", 0]], inCreative: true}
]);
Block.registerDropFunction("salt", function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.salt, Random.Int(2,5), 0]);	
	return drop;
});