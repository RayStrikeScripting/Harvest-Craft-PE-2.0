IDRegistry.genBlockID("appleBlock"); 
Block.createBlock("appleBlock", [
	{name: "appleBlock", texture: [["empty", 0]], inCreative: false}
]);
Block.setBlockShape(BlockID.appleBlock, {x: 0.001, y: 0.001, z: 0.001}, {x: 0.999, y: 0.999, z: 0.999});
Block.registerDropFunction("appleBlock", function(coords, blockID, blockData, level){
	return [[0,0,0]]
});
TileEntity.registerPrototype(BlockID.appleBlock, {
	defaultValues: {
		age: 0
	},
	 createAnimations:function(){
		this.ani0 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.5);
		this.ani1 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.5);
	},
	destroyAnimations:function(){
		this.ani0.destroy();
		this.ani1.destroy();
	},
	 anim0:function(){	
		Harvest.animationSaplingSet(ItemID.apple_ani0 ,this.ani0,this.ani1);
	},
	anim1:function(){	
		Harvest.animationSaplingSet(ItemID.apple_ani1 ,this.ani0,this.ani1);
	},
	anim2:function(){	   
		Harvest.animationSaplingSet(ItemID.apple_ani2 ,this.ani0,this.ani1);
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
		if(World.getBlockID(this.x,this.y+1,this.z)==0){
		this.destroy();
		}	
		var number = 0.0002;
		if((Math.random()<number)&&(this.data.age<2)){
			this.data.age++;
			this.switcher();  
			if(World.getBlockID(this.x,this.y+1,this.z)==0){
				this.destroy();
			}	
		}
	},
	init:function(){
		this.createAnimations();
		this.switcher();
	},
	destroy:function(){
		World.destroyBlock(this.x, this.y, this.z, false);	 
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
			World.drop(	this.x,		this.y,		this.z ,	260, 1 , 0	)
		}
	} 	
});