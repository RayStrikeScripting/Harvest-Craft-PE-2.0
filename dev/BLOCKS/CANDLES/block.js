var candleVariations = [];
for(var e = 0;e<16;e++){
	candleVariations.push({name: "Candle", texture: [["empty", 0],["empty", 0],["candle", e]], inCreative: false})
};
IDRegistry.genBlockID("candle"); 
Block.createBlock("candle", candleVariations,BLOCK_TYPE_CANDLE);

PlantModel.tree(BlockID.candle,0);

Block.registerDropFunction("candle", function(coords, blockID, blockData, level){
	switch(blockData){
		case 0 : 
			return[[ ItemID.candleItem0,1,0 ]];
				break;
		case 1 : 
			return[[ ItemID.candleItem1,1,0 ]];
				break;
		case 2 : 
			return[[ ItemID.candleItem2,1,0 ]];
				break;
		case 3 : 
			return[[ ItemID.candleItem3,1,0 ]];
				break;
		case 4 : 
			return[[ ItemID.candleItem4,1,0 ]];
				break;
		case 5 : 
			return[[ ItemID.candleItem5,1,0 ]];
				break;
		case 6 : 
			return[[ ItemID.candleItem6,1,0 ]];
				break;
		case 7 : 
			return[[ ItemID.candleItem7,1,0 ]];
				break;
		case 8 : 
			return[[ ItemID.candleItem8,1,0 ]];
				break;
		case 9 : 
			return[[ ItemID.candleItem9,1,0 ]];
				break;
		case 10 : 
			return[[ ItemID.candleItem10,1,0 ]];
				break;
		case 11 : 
			return[[ ItemID.candleItem11,1,0 ]];
				break;
		case 12 : 
			return[[ ItemID.candleItem12,1,0 ]];
				break;
		case 13 : 
			return[[ ItemID.candleItem13,1,0 ]];
				break;
		case 14 : 
			return[[ ItemID.candleItem14,1,0 ]];
				break;
		case 15 : 
			return[[ ItemID.candleItem15,1,0 ]];
				break;		
	}
	//return[[ ItemID.candleItem+blockData,1,0 ]];
});