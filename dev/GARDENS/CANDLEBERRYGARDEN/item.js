IDRegistry.genItemID("candleberrygardenITEM");
Item.createItem("candleberrygardenITEM", "Candleberry garden", {name: "candleberrycrop", meta: 2} ,{isTech: false} );
Item.registerUseFunction("candleberrygardenITEM", function(coords, item, tile){
	var place = coords.relative;
	var tile1 = World.getBlock(place.x, place.y, place.z);
	var tile2 = World.getBlock(place.x, place.y - 1, place.z);	
	if (GenerationUtils.isTransparentBlock(tile1.id) && TREE_SAPLING_GROUND_TILES[tile2.id]){
		World.setBlock(place.x, place.y, place.z, BlockID.candleberrygarden);
		Player.setCarriedItem(item.id, item.count - 1, item.data);
	}
});