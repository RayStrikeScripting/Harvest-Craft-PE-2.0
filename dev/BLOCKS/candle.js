var candleVariations = [];
for(var e = 0;e<16;e++){
	candleVariations.push({name: "Candle", texture: [["empty", 0],["empty", 0],["candle", e]], inCreative: false})
};
IDRegistry.genBlockID("candle"); 
Block.createBlock("candle", candleVariations,BLOCK_TYPE_CANDLE);
PlantModel.tree(BlockID.candle,0);
Block.setAnimateTickCallback(BlockID.candle, function(x, y, z, id, data) { 
	if(particles){
		Particles.addParticle(Native.ParticleType.flame,x+0.5, y+0.5, z+0.5, Random.Float(-0.01,0.01), Random.Float(-0.01,0.01), Random.Float(-0.01,0.01),0);
	}
});
Block.registerDropFunction("candle", function(coords, blockID, blockData, level){
	return[[ ItemID["candleItem"+blockData],1,0 ]];
});