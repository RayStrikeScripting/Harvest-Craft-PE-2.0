IDRegistry.genBlockID("sink_0"); 
IDRegistry.genBlockID("sink_1"); 
IDRegistry.genBlockID("sink_2"); 
IDRegistry.genBlockID("sink_3"); 
Block.createBlock("sink_0", [
{name: "Sink", texture: [["sinkbottom", 0], ["sinktop", 0], ["sinkside", 0], ["sinkside", 0], ["sinkside", 0], ["sinkside", 0]], inCreative: true}
]);
Block.createBlock("sink_1", [
{name: "Sink 1", texture: [["sinkbottom", 1], ["sinktop", 1], ["sinkside", 1], ["sinkside", 1], ["sinkside", 1], ["sinkside", 1]], inCreative: true}
]);
Block.createBlock("sink_2", [
{name: "Sink 2", texture: [["sinkbottom", 2], ["sinktop", 2], ["sinkside", 2], ["sinkside", 2], ["sinkside", 2], ["sinkside", 2]], inCreative: true}
]);
Block.createBlock("sink_3", [
{name: "Sink 3", texture: [["sinkbottom", 3], ["sinktop", 3], ["sinkside", 3], ["sinkside", 3], ["sinkside", 3], ["sinkside", 3]], inCreative: true}
]);   
 Callback.addCallback("ItemUse", function(coords,item,block){
 var pl = Player.getCarriedItem();   if((pl.id==325)){
 switch(block.id){
 case BlockID.sink_0:
 case BlockID.sink_1:
 case BlockID.sink_2:
 case BlockID.sink_3:
    Player.setCarriedItem(item.id, item.count - 1, item.data);
  Player.addItemToInventory(325, 1, 8);
break;
}}
 } );       
Callback.addCallback("PostLoaded", function(){
	Recipes.addShaped({id: BlockID.sink_0, count: 1, data: 0}, [
		"ara",
		"ara",
		"ara"
	], ["a", 265, 0, 'r', 17, -1]);
	 Recipes.addShaped({id: BlockID.sink_1, count: 1, data: 1}, [
		"ara",
		"ara",
		"ara"
	], ["a", 265, 0, 'r', 1, -1]);
	 Recipes.addShaped({id: BlockID.sink_2, count: 1, data: 2}, [
		"ara",
		"ara",
		"ara"
	], ["a", 265, 0, 'r', 82, 0]);
	 Recipes.addShaped({id: BlockID.sink_3, count: 1, data: 3}, [
		"ara",
		"ara",
		"ara"
	], ["a", 265, 0, 'r', 1, -1]);
});
