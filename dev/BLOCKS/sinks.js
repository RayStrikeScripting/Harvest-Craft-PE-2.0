IDRegistry.genBlockID("well"); 
Block.createBlock("well", [
	{name: "Sink", texture: [["sinkbottom", 0], ["sinktop", 0], ["sinkside", 0], ["sinkside", 0], ["sinkside", 0], ["sinkside", 0]], inCreative: true},
	{name: "Sink", texture: [["sinkbottom", 1], ["sinktop", 1], ["sinkside", 1], ["sinkside", 1], ["sinkside", 1], ["sinkside", 1]], inCreative: true},
	{name: "Sink", texture: [["sinkbottom", 2], ["sinktop", 2], ["sinkside", 2], ["sinkside", 2], ["sinkside", 2], ["sinkside", 2]], inCreative: true},
	{name: "Sink", texture: [["sinkbottom", 3], ["sinktop", 3], ["sinkside", 3], ["sinkside", 3], ["sinkside", 3], ["sinkside", 3]], inCreative: true}
]);
Callback.addCallback("ItemUse", function(coords,item,block){
	if(block.id==BlockID.well){
		if((item.id==325&&item.data==0)){
			Player.addItemToInventory(325, 1, 8);
			Player.decreaseCarriedItem(1);	
		}
		if(item.id==374){	
			Player.addItemToInventory(373, 1, 0);
			Player.decreaseCarriedItem(1);
		}
	}
});       
Callback.addCallback("PostLoaded", function(){
	Recipes.addShaped({id: BlockID.well, count: 1, data: 0}, [
		"ara",
		"ara",
		"ara"
	], ["a", 265, 0, 'r', 17, -1]);
	 Recipes.addShaped({id: BlockID.well, count: 1, data: 1}, [
		"ara",
		"ara",
		"ara"
	], ["a", 265, 0, 'r', 1, -1]);
	 Recipes.addShaped({id: BlockID.well, count: 1, data: 2}, [
		"ara",
		"ara",
		"ara"
	], ["a", 265, 0, 'r', 82, 0]);
	 Recipes.addShaped({id: BlockID.well, count: 1, data: 3}, [
		"ara",
		"ara",
		"ara"
	], ["a", 265, 0, 'r', 1, -1]);
});
