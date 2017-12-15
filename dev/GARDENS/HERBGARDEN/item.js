IDRegistry.genItemID("herbGardenITEM");
Item.createItem("herbGardenITEM", "Herb garden", {name: "herbgardenBlock", meta: 0} ,{isTech: false} );
Item.registerUseFunction("herbGardenITEM", function(coords, item, tile){
	var place = coords.relative;
	var tile1 = World.getBlock(place.x, place.y, place.z);
	var tile2 = World.getBlock(place.x, place.y - 1, place.z);	
	if (GenerationUtils.isTransparentBlock(tile1.id) && TREE_SAPLING_GROUND_TILES[tile2.id]){
		World.setBlock(place.x, place.y, place.z, BlockID.herbgarden);
		Player.setCarriedItem(item.id, item.count - 1, item.data);
	}
});