 var seedsArray = [
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
 ItemID.peppercorn_seed
 ];
 var iid = 290;
 Callback.addCallback("DestroyBlock", function(coords, block, player){
	if(((block.id==31)&&(block.data==1)||(block.id==175)&&(block.data==10)||(block.data==2))){
		var nn = Harvest.number(0, 400);
		if(nn<seedsArray.length ){  
		Harvest.dropPlant(seedsArray[nn],coords.x,coords.y,coords.z);
		}
	}
 });
 Callback.addCallback("ItemUse", function(coords, item, block){
 if((block.id==2)&&(Player.getCarriedItem()==(290||291||292||293||294))){
	var nn = Harvest.number(0, 400);
	if(nn<seedsArray.length ){  
			World.drop(coords.x, coords.y+1, coords.z, seedsArray[nn], 1, 0) 
		}
	}
 });