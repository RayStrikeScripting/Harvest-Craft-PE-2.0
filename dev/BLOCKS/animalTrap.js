IDRegistry.genBlockID("animalTrap"); 
Block.createBlock("animalTrap", [
	{name: "Animal trap", texture: [["animaltrap", 0]], inCreative: true}
]);
var fruitBaitDrop = [52,334,344,288,411,365];
var grainBaitDrop = [52,334,344,288,365];
var veggieBaitDrop = [52,334,344,288,365];
/*
var animalTrapGUI = new UI.StandartWindow({
	standart: {
        header: {
            text: {
                text:"AnimalTrap"
            }
        },
        inventory: {
            standart: true
        },
        background: {
            standart: true
        }
    },
    drawing: [
		{type: "bitmap", bitmap: "groundtrap", x: 350, y: 100, scale: 4}
    ],
    elements: {
		
    }
});
UI.testUI(animalTrapGUI); */
TileEntity.registerPrototype(BlockID.animalTrap,{
	defaultValues: {
		scanedBlocks:0,
		progress:0
	},	
	getGuiScreen: function(){
		return animalTrapGUI;
	},
	putResult:function(type){
		
	},
	tick:function(){
		if(this.data.scanedBlocks==120){
			
		}
	},
	checkGround:function(){
		for(var x = this.x-5; x<this.x+5; x++){
			for(var z = this.z-5; z<this.z+5; z++){
				if(World.getBlockID(x,this.y,z)==(2||3)){
					this.data.scanedBlocks++;
				}
			}
		}
	}
});