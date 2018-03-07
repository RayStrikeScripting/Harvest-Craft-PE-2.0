for(var i = 0;i<16;i++){
	IDRegistry.genItemID("candleItem"+i);
	Item.createItem("candleItem"+i, "Candle", {name: "candle", meta: i},{});
};
Item.registerUseFunction("candleItem1", function(coords, item, block){
	if(coords.side==1&&!GenerationUtils.isTransparentBlock(block.id)){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,1);
		Player.decreaseCarriedItem(1);
	}
});
Item.registerUseFunction("candleItem2", function(coords, item, block){
	if(coords.side==1&&!GenerationUtils.isTransparentBlock(block.id)){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,2);
		Player.decreaseCarriedItem(1);
	}
});
Item.registerUseFunction("candleItem3", function(coords, item, block){
	if(coords.side==1&&!GenerationUtils.isTransparentBlock(block.id)){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,3);
		Player.decreaseCarriedItem(1);
	}
});
Item.registerUseFunction("candleItem4", function(coords, item, block){
	if(coords.side==1&&!GenerationUtils.isTransparentBlock(block.id)){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,4);
		Player.decreaseCarriedItem(1);
	}
});
Item.registerUseFunction("candleItem5", function(coords, item, block){
	if(coords.side==1&&!GenerationUtils.isTransparentBlock(block.id)){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,5);
		Player.decreaseCarriedItem(1);
	}
});
Item.registerUseFunction("candleItem6", function(coords, item, block){
	if(coords.side==1&&!GenerationUtils.isTransparentBlock(block.id)){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,6);
		Player.decreaseCarriedItem(1);
	}
});
Item.registerUseFunction("candleItem7", function(coords, item, block){
	if(coords.side==1&&!GenerationUtils.isTransparentBlock(block.id)){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,7);
		Player.decreaseCarriedItem(1);
	}
});
Item.registerUseFunction("candleItem8", function(coords, item, block){
	if(coords.side==1&&!GenerationUtils.isTransparentBlock(block.id)){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,8);
		Player.decreaseCarriedItem(1);
	}
});
Item.registerUseFunction("candleItem9", function(coords, item, block){
	if(coords.side==1&&!GenerationUtils.isTransparentBlock(block.id)){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,9);
		Player.decreaseCarriedItem(1);
	}
});
Item.registerUseFunction("candleItem10", function(coords, item, block){
	if(coords.side==1&&!GenerationUtils.isTransparentBlock(block.id)){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,10);
		Player.decreaseCarriedItem(1);
	}
});
Item.registerUseFunction("candleItem11", function(coords, item, block){
	if(coords.side==1&&!GenerationUtils.isTransparentBlock(block.id)){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,11);
		Player.decreaseCarriedItem(1);
	}
});
Item.registerUseFunction("candleItem12", function(coords, item, block){
	if(coords.side==1&&!GenerationUtils.isTransparentBlock(block.id)){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,12);
		Player.decreaseCarriedItem(1);
	}
});
Item.registerUseFunction("candleItem13", function(coords, item, block){
	if(coords.side==1&&!GenerationUtils.isTransparentBlock(block.id)){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,13);
		Player.decreaseCarriedItem(1);
	}
});
Item.registerUseFunction("candleItem14", function(coords, item, block){
	if(coords.side==1&&!GenerationUtils.isTransparentBlock(block.id)){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,14);
		Player.decreaseCarriedItem(1);
	}
});
Item.registerUseFunction("candleItem15", function(coords, item, block){
	if(coords.side==1&&!GenerationUtils.isTransparentBlock(block.id)){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,15);
		Player.decreaseCarriedItem(1);
	}
});
Item.registerUseFunction("candleItem0", function(coords, item, block){
	if(coords.side==1&&!GenerationUtils.isTransparentBlock(block.id)){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,0);
		Player.decreaseCarriedItem(1);
	}
});

Callback.addCallback("PostLoaded", function(){	
	Recipes.addShapeless({id: ItemID.candleItem0, count: 4, data: 0}, [{id: 287, data: 0},{id: ItemID.pressedWax, data: 0}]);
	for(var paintIndex = 14;paintIndex>=0;paintIndex-- ){
		var candleData = 15-paintIndex;
		Recipes.addShapeless({id: Item.getNumericId("candleItem"+candleData), count: 4, data: 0}, [{id: 351, data: paintIndex},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0}]);
	}
});