for(var i = 0;i<16;i++){
	IDRegistry.genItemID("candleItem"+i);
	Item.createItem("candleItem"+i, "Candle", {name: "candle", meta: i},{});
};
Item.registerUseFunction("candleItem1", function(coords, item, block){
	if(World.getBlockID(coords.x,coords.y+1,coords.z)==0){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,1);
		World.addTileEntity(coords.x, coords.y+1, coords.z);
		Player.setCarriedItem(ItemID.candleItem1, item.count - 1, 0)
	}
});
Item.registerUseFunction("candleItem2", function(coords, item, block){
	if(World.getBlockID(coords.x,coords.y+1,coords.z)==0){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,2);
		World.addTileEntity(coords.x, coords.y+1, coords.z);
		Player.setCarriedItem(ItemID.candleItem2, item.count - 1, 0)
	}
});
Item.registerUseFunction("candleItem3", function(coords, item, block){
	if(World.getBlockID(coords.x,coords.y+1,coords.z)==0){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,3);
		World.addTileEntity(coords.x, coords.y+1, coords.z);
		Player.setCarriedItem(ItemID.candleItem3, item.count - 1, 0)
	}
});
Item.registerUseFunction("candleItem4", function(coords, item, block){
	if(World.getBlockID(coords.x,coords.y+1,coords.z)==0){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,4);
		World.addTileEntity(coords.x, coords.y+1, coords.z);
		Player.setCarriedItem(ItemID.candleItem4, item.count - 1, 0)
	}
});
Item.registerUseFunction("candleItem5", function(coords, item, block){
	if(World.getBlockID(coords.x,coords.y+1,coords.z)==0){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,5);
		World.addTileEntity(coords.x, coords.y+1, coords.z);
		Player.setCarriedItem(ItemID.candleItem5, item.count - 1, 0)
	}
});
Item.registerUseFunction("candleItem6", function(coords, item, block){
	if(World.getBlockID(coords.x,coords.y+1,coords.z)==0){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,6);
		World.addTileEntity(coords.x, coords.y+1, coords.z);
		Player.setCarriedItem(ItemID.candleItem6, item.count - 1, 0)
	}
});
Item.registerUseFunction("candleItem7", function(coords, item, block){
	if(World.getBlockID(coords.x,coords.y+1,coords.z)==0){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,7);
		World.addTileEntity(coords.x, coords.y+1, coords.z);
		Player.setCarriedItem(ItemID.candleItem7, item.count - 1, 0)
	}
});
Item.registerUseFunction("candleItem8", function(coords, item, block){
	if(World.getBlockID(coords.x,coords.y+1,coords.z)==0){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,8);
		World.addTileEntity(coords.x, coords.y+1, coords.z);
		Player.setCarriedItem(ItemID.candleItem8, item.count - 1, 0)
	}
});
Item.registerUseFunction("candleItem9", function(coords, item, block){
	if(World.getBlockID(coords.x,coords.y+1,coords.z)==0){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,9);
		World.addTileEntity(coords.x, coords.y+1, coords.z);
		Player.setCarriedItem(ItemID.candleItem9, item.count - 1, 0)
	}
});
Item.registerUseFunction("candleItem10", function(coords, item, block){
	if(World.getBlockID(coords.x,coords.y+1,coords.z)==0){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,10);
		World.addTileEntity(coords.x, coords.y+1, coords.z);
		Player.setCarriedItem(ItemID.candleItem10, item.count - 1, 0)
	}
});
Item.registerUseFunction("candleItem11", function(coords, item, block){
	if(World.getBlockID(coords.x,coords.y+1,coords.z)==0){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,11);
		World.addTileEntity(coords.x, coords.y+1, coords.z);
		Player.setCarriedItem(ItemID.candleItem11, item.count - 1, 0)
	}
});
Item.registerUseFunction("candleItem12", function(coords, item, block){
	if(World.getBlockID(coords.x,coords.y+1,coords.z)==0){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,12);
		World.addTileEntity(coords.x, coords.y+1, coords.z);
		Player.setCarriedItem(ItemID.candleItem12, item.count - 1, 0)
	}
});
Item.registerUseFunction("candleItem13", function(coords, item, block){
	if(World.getBlockID(coords.x,coords.y+1,coords.z)==0){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,13);
		World.addTileEntity(coords.x, coords.y+1, coords.z);
		Player.setCarriedItem(ItemID.candleItem13, item.count - 1, 0)
	}
});
Item.registerUseFunction("candleItem14", function(coords, item, block){
	if(World.getBlockID(coords.x,coords.y+1,coords.z)==0){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,14);
		World.addTileEntity(coords.x, coords.y+1, coords.z);
		Player.setCarriedItem(ItemID.candleItem14, item.count - 1, 0)
	}
});
Item.registerUseFunction("candleItem15", function(coords, item, block){
	if(World.getBlockID(coords.x,coords.y+1,coords.z)==0){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,15);
		World.addTileEntity(coords.x, coords.y+1, coords.z);
		Player.setCarriedItem(ItemID.candleItem15, item.count - 1, 0)
	}
});
Item.registerUseFunction("candleItem0", function(coords, item, block){
	if(World.getBlockID(coords.x,coords.y+1,coords.z)==0){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,0);
		World.addTileEntity(coords.x, coords.y+1, coords.z);
		Player.setCarriedItem(ItemID.candleItem0, item.count - 1, 0)
	}
});

Recipes.addShapeless({id: ItemID.candleItem0, count: 4, data: 0}, [{id: 287, data: 0},{id: ItemID.pressedWax, data: 0}]);
Recipes.addShapeless({id: ItemID.candleItem1, count: 4, data: 0}, [{id: 351, data: 14},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0}]);
Recipes.addShapeless({id: ItemID.candleItem2, count: 4, data: 0}, [{id: 351, data: 13},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0}]);
Recipes.addShapeless({id: ItemID.candleItem3, count: 4, data: 0}, [{id: 351, data: 12},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0}]);
Recipes.addShapeless({id: ItemID.candleItem4, count: 4, data: 0}, [{id: 351, data: 11},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0}]);
Recipes.addShapeless({id: ItemID.candleItem5, count: 4, data: 0}, [{id: 351, data: 10},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0}]);
Recipes.addShapeless({id: ItemID.candleItem6, count: 4, data: 0}, [{id: 351, data: 9},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0}]);
Recipes.addShapeless({id: ItemID.candleItem7, count: 4, data: 0}, [{id: 351, data: 8},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0}]);
Recipes.addShapeless({id: ItemID.candleItem8, count: 4, data: 0}, [{id: 351, data: 7},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0}]);
Recipes.addShapeless({id: ItemID.candleItem9, count: 4, data: 0}, [{id: 351, data: 6},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0}]);
Recipes.addShapeless({id: ItemID.candleItem10, count: 4, data: 0}, [{id: 351, data: 5},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0}]);
Recipes.addShapeless({id: ItemID.candleItem11, count: 4, data: 0}, [{id: 351, data: 4},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0}]);
Recipes.addShapeless({id: ItemID.candleItem12, count: 4, data: 0}, [{id: 351, data: 3},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0}]);
Recipes.addShapeless({id: ItemID.candleItem13, count: 4, data: 0}, [{id: 351, data: 2},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0}]);
Recipes.addShapeless({id: ItemID.candleItem14, count: 4, data: 0}, [{id: 351, data: 1},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0}]);
Recipes.addShapeless({id: ItemID.candleItem15, count: 4, data: 0}, [{id: 351, data: 0},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0}]);