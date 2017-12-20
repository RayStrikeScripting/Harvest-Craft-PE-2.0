 var seedsArray = [
	 ItemID.curryleaf_seed,
	 ItemID.candleberryseed,
	 ItemID.strawberry_seed,
	 ItemID.raspberry_seed,
	 ItemID.cranberry_seed,
	 ItemID.blueberry_seed,
	 ItemID.blackberry_seed,
	 ItemID.grape_seed,
	 ItemID.cucumber_seed,
	 ItemID.onion_seed,
	 ItemID.cabbage_seed,
	 ItemID.tomato_seed,
	 ItemID.bellpepper_seed,
	 ItemID.garlic_seed,
	 ItemID.lettuce_seed,
	 ItemID.coffee_seed,
	 ItemID.peas_seed,
	 ItemID.chili_pepper_seed,
	 ItemID.spice_leaf_seed,
	 ItemID.corn_seed,
	 ItemID.peppercorn_seed,
	 ItemID.cotton_seed,
	 ItemID.bean_seed,
	 ItemID.rice_seed,
	 ItemID.waterchestnut_seed,
	 ItemID.rutabaga_seed,
	 ItemID.mustard_seed,
	 ItemID.ginger_seed,
	 ItemID.spinach_seed
 ];
Callback.addCallback("DestroyBlock", function(coords, block, player){
	var trueIDs = {
		31:true,
		175:true
	};
	var trueMetaS = {
		1:true,
		2:true,
		10:true
	};
	if(trueIDs[block.id]&&trueMetaS[block.data]){
		var nnn =__config__.access("other.grassDrop");
		var nn = Random.Int(0,nnn);
		//Debug.m(nn);
		if(nn<seedsArray.length){  
			Harvest.dropPlant(seedsArray[nn],coords.x,coords.y,coords.z);
		}
	}
});
Callback.addCallback("ItemUse", function(coords, item, block){
 
	var trueTool = {
		290:true,
		291:true,
		292:true,
		293:true,
		294:true
	};
	
	if(block.id==2&&trueTool[item.id]){
		var nnn =__config__.access("other.grassDrop");
		var nn = Random.Int(0,nnn);
		//Debug.m(nn);
		if(nn<seedsArray.length){  
			Harvest.dropPlant(seedsArray[nn],coords.x,coords.y+1,coords.z);
		}
	}
});