TileEntity.registerPrototype( BlockID.berrygarden , {
	initAnimation:function(){
		this.animation1 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.5);
		this.animation2 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.5);
	},
	describeAnimation:function(){
		Harvest.animationSaplingSet( ItemID.berryGarden_ani ,this.animation1,this.animation2);
	},
	animationLoad:function(){
		this.initAnimation();
		this.describeAnimation();
		this.animation1.load();
		this.animation2.load();
	},
	animationDelete:function(){
	this.animation1.destroy();
	this.animation2.destroy();
	},
	init:function(){
		this.animationLoad();
	},
	Selfdestroy:function(){
		this.animationDelete();
		World.setBlock(this.x,this.y,this.z,0,0);
		World.removeTileEntity(this.x,this.y,this.z);
		},
	destroy:function(){
		this.animationDelete();
	},
	click:function( id, count, data ){
		Harvest.dropPlant(ItemID.berryGarden_ani,this.x,this.y,this.z);
		this.Selfdestroy();
	}
});