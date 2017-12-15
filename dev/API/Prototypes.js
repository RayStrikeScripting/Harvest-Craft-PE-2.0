var rrr = Random.Int(1,3);
var rrd = Random.Int(1,2);

var BLOCK_TYPE_CANDLE = Block.createSpecialType({
	base: 50,
	opaque: false,
	lightopacity: 0,
	lightlevel: 10 
});

function addGeneration(block,biomes,count,chance){
	Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
		if(Math.random() <chance){
			for(var ccount = 1;ccount<=count;ccount++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
				coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
				if(biomes==null){
					World.setBlock(coords.x, coords.y + 1, coords.z, block.id, block.data);
					World.addTileEntity(coords.x, coords.y + 1, coords.z);	
				}else{
					for(var idd in biomes ){
						var id = biomes[idd];
						if((World.getBiome((chunkX + 0.5) * 16, (chunkZ + 0.5) * 16)==id)&&(World.getBlockID(coords.x, coords.y, coords.z) == 2)){
							World.setBlock(coords.x, coords.y + 1, coords.z, block.id, block.data);
							World.addTileEntity(coords.x, coords.y + 1, coords.z);	
						}
					}
				}			
			}
		}
	});
}

//addGeneration({id:0,data:0},[1,2,4,5,6,5],3,0.1);