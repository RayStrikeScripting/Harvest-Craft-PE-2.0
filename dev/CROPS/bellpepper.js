IDRegistry.genBlockID("bellpeppercrop"); 
Block.createBlock("bellpeppercrop", [
	{name: "bellpeppercrop", texture: [["empty", 0]], inCreative: false}
]);
Harvest.plantShape( BlockID.bellpeppercrop );
Harvest.registerDestroy("bellpeppercrop",ItemID.bellpepper_seed);
TileEntity.registerPrototype(BlockID.bellpeppercrop, {
	defaultValues: {
		age: 0
	},
	createAnimations:function(){
		if( __config__.access("advanced_item_models")==true){
			this.ani0 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.5);
		}
		else{
			this.ani0 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.3);
		}
			this.ani1 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.7);
			this.ani2 = new Animation.Item(this.x+0.7,this.y+0.6,this.z+0.5);
			this.ani3 = new Animation.Item(this.x+0.3,this.y+0.6,this.z+0.5);
	},
	destroyAnimations:function(){
		this.ani0.destroy();
		this.ani1.destroy();
		this.ani2.destroy();
		this.ani3.destroy(); 	
	},
	 anim0:function(){
		Harvest.animationPlantDescribe(ItemID.bellpeppercrop_ani0 ,this.ani0,this.ani1,this.ani2,this.ani3);
	},
	anim1:function(){
		Harvest.animationPlantDescribe(ItemID.bellpeppercrop_ani1 ,this.ani0,this.ani1,this.ani2,this.ani3);
	},
	anim2:function(){	
		Harvest.animationPlantDescribe(ItemID.bellpeppercrop_ani2 ,this.ani0,this.ani1,this.ani2,this.ani3);
	},
	switcher:function(){
		switch(this.data.age){
			case 0 : 
				this.anim0();
					break;       
			case 1 : 
				this.anim1();
					break;       
			case 2 :
				this.anim2();
					break;
		}
	},		 	
	tick:function(){
		if(World.getBlockID(this.x,this.y-1,this.z)==0){
			this.destroy();	
		}	
		var number = 0.0002;
		if((Math.random()<number)&&(this.data.age<2)){    
			this.data.age++;
			this.switcher();  
		}	
	},
	init:function(){  	
		this.createAnimations();
		this.switcher();
	},
	destroy:function(){
		World.destroyBlock(this.x, this.y, this.z, false);
		World.setBlock(this.x,this.y-1,this.z,60,0); 
		this.destroyAnimations();
	},
	click: function(id, count, data, coords){
		var pl = Player.getCarriedItem();
		if((pl.id==351)&&(pl.data==15)&&this.data.age<2){
			this.data.age++;
			this.switcher();
		}
		if(this.data.age==2){
			this.data.age=0;
			this.switcher();
			Harvest.dropFruit(ItemID.bellpepper,this.x,this.y,this.z);
		}
	} 	
});
Item.registerUseFunctionForID(ItemID.bellpepperseedItem, function(coords, item, block){
	if(block.id == 60){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.bellpeppercrop ,0);
		World.addTileEntity(coords.x, coords.y+1, coords.z);
		Player.setCarriedItem(ItemID.bellpepper_seed, item.count - 1, 0);
	}
});