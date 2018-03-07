IDRegistry.genBlockID("animalTrap"); 
Block.createBlock("animalTrap", [
	{name: "Animal trap", texture: [["animaltrap", 0]], inCreative: true}
]);
//ICRenderLib.addConnectionBlock("bc-container", BlockID.animalTrap);
Callback.addCallback("PostLoaded", function(){
	Recipes.addShaped({id: BlockID.animalTrap, count: 1, data: 0}, ["aba", "sds","asa"], ["a", 280, 0, "b", 96, 0,"d",54,0,"s",287,0]);
});