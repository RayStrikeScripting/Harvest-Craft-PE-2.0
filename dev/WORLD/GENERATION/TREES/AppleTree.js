/*Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	var nnumber = __config__.access("genNumbers.trees.apple");
	if(Math.random()<nnumber){
		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
		coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
		if((World.getBlockID(coords.x, coords.y, coords.z) == 2)){			
			Harvest.addTree(0,BlockID.appleBlock,4,this.x,this.y,this.z);
		}
	}
});*/