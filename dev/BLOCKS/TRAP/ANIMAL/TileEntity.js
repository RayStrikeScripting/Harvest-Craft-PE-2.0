if(__config__.access("traps.animal.TileEntity")){
	TileEntity.registerPrototype(BlockID.animalTrap,{
		defaultValues: {
			progress:0,
			drop:[]
		},	
		getGuiScreen: function(){
			return animalTrapGUI;
		},
		getTransportSlots: function(){
			return {
				input: ["slotBait"],
				output: ["slot0","slot1","slot2","slot3","slot4","slot5","slot6","slot7","slot8","slot9","slot10","slot11","slot12","slot13","slot14","slot15","slot16","slot17"]
			};
		},
		checker:function(){
			if(World.getBlockID(this.x+1,this.y,this.z)==2&&
			   World.getBlockID(this.x-1,this.y,this.z)==2&&
			   World.getBlockID(this.x,this.y,this.z+1)==2&&
			   World.getBlockID(this.x,this.y,this.z-1)==2&&
			   World.getBlockID(this.x-1,this.y,this.z-1)==2&&
			   World.getBlockID(this.x+1,this.y,this.z-1)==2&&
			   World.getBlockID(this.x+1,this.y,this.z+1)==2&&
			   World.getBlockID(this.x-1,this.y,this.z+1)==2){
				this.data.progress++;
			}
		},
		tick:function(){
			var nnumber = __config__.access("traps.animal.number");
			var slot = this.container.getSlot("slotBait").id;
			if((this.data.progress<100)&&((slot==ItemID.graitBait)||(slot==ItemID.fruitBait)||(slot==ItemID.veggieBait))&&(Math.random()<nnumber)){
				this.checker();
			}
			if((this.data.progress==100)&&((slot==ItemID.graitBait)||(slot==ItemID.fruitBait)||(slot==ItemID.veggieBait))){
				var slot = this.container.getSlot("slotBait");
				slot.count-=1;
				this.data.progress=0;
				this.swither();
				var tt = Random.Int(1,3);
				for(var u = 0; u < tt; u++){
					var targetItem = this.data.drop[Random.Int(0,this.data.drop.length-1)];
					this.addResult("slot",targetItem, 1, 0);
				}	
				this.container.validateAll();
			}
		},
		addResult: function(area, id, count, data){
			for (var i = 0; i < 18; i++){
				var slot = this.container.getSlot(area + i);
				if (slot.id == 0){
					var add = Math.min(64 - slot.count, count);
					slot.count += add;
					slot.id = id;
					slot.data = data;
					count -= add;
					if (count == 0){
						break;
					}
				}
			}
			if (count > 0){
				World.drop(this.x + .5, this.y + 1, this.z + .5, id, count, data);
			}
		},
		swither:function(){
			switch(this.container.getSlot("slotBait").id){
				case ItemID.graitBait :
					this.data.drop= [352,334,344,ItemID.turkeyRaw,288,365];
						break;
				case ItemID.fruitBait :
					this.data.drop=[352,334,344,288,411,365];
						break;
				case ItemID.veggieBait :
					this.data.drop=[352,334,344,ItemID.venisonRaw,288,365];
						break;
			}
		}
	});
};