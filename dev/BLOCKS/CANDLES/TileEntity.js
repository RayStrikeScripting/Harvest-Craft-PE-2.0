if(__config__.access("debug.TileEntity.other.candle")){
	TileEntity.registerPrototype(BlockID.candle,{
		tick:function(){
			if(Math.random()<__config__.access("other.candleBurning")){
				Particles.addParticle(this.x+0.5, this.y+0.5, this.z+0.5, 14, Random.Float(0.1,0.4), Random.Float(0.1,0.4), Random.Float(0.1,0.4),0)
			}
		}
	});
};