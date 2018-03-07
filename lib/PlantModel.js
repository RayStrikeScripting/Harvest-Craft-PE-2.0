LIBRARY({
	name:"Plant_Model",
	version:1,
	shared:false,
	api:"CoreEngine"
});

var PlantModel = {
	
	penetrate:function(id){
		Block.setBlockShape(id, 
			{x: 0, y: 0, z: 0}, 
			{x: 1, y: 0.001, z: 1}
		);
	},
	
	tree:function(id,x){
		
		this.penetrate(id);
		
		BlockRenderer.addRenderCallback(id, function(api, coords,block) {
			if(x!=0){
				for(var i = 0;i < 1/x;i+=x){
				api.renderBoxId(coords.x, coords.y, coords.z, 
											0+i, 0.01, 0+i, 
											x+i, 0.99, x+i, 
											id, block.data);
											
				api.renderBoxId(coords.x, coords.y, coords.z, 
											(1-x)-i, 0.01, 0+i, 
											1-i, 0.99, x+i, 
											id, block.data);
				}
			}
			else{
				api.renderBoxId(coords.x, coords.y, coords.z, 
											0.4999, 0.01, 0, 
											0.5, 0.99, 1, 
											id, block.data);
				api.renderBoxId(coords.x, coords.y, coords.z, 
											0, 0.01, 0.4999, 
											1, 0.99, 0.5, 
											id, block.data);
			}
		})
		BlockRenderer.enableCustomRender(id);
	},
	
	crop:function(id){
		this.penetrate(id);
		BlockRenderer.addRenderCallback(id, function(api, coords,block) {	
			api.renderBoxId(coords.x, coords.y, coords.z, 
										0.2499, 0.01, 0, 
										0.25, 0.99, 1, 
										id, block.data);											
			api.renderBoxId(coords.x, coords.y, coords.z, 
										0, 0.01, 0.2499, 
										1, 0.99, 0.25, 
										id, block.data);											
			api.renderBoxId(coords.x, coords.y, coords.z, 
										0.7499, 0.01, 0, 
										0.75, 0.99, 1, 
										id, block.data);											
			api.renderBoxId(coords.x, coords.y, coords.z, 
										0, 0.01, 0.7499, 
										1, 0.99, 0.75, 
										id, block.data);										
		});
		BlockRenderer.enableCustomRender(id);
	}
};

/*
var crossMesh = new RenderMesh();
//crossMesh.importFromFile(__dir__+"res/models/crossModel.obj", "obj", null);
crossMesh.addVertex(0, 0, 0, 0, 1);
crossMesh.addVertex(1, 1, 1, 0, 1);
crossMesh.addVertex(1, 0, 1, 0, 1);

crossMesh.addVertex(1, 0, 0, 0, 1);
crossMesh.addVertex(0, 1, 1, 0, 1);
crossMesh.addVertex(0, 1, 1, 0, 1);

var PlantModel = {
	tree:function(id){
		crossMesh.setBlockTexture("quartz_block_side", 0); 
		var model = new BlockRenderer.Model(crossMesh);
		var render = new ICRender.Model();
		render.addEntry(model);
		BlockRenderer.setStaticICRender(id, 0, render);
		BlockRenderer.enableCustomRender(id);
	},
	crop:function(id){
		BlockRenderer.addRenderCallback(id, function(api, coords,block) {	
			api.renderBoxId(coords.x, coords.y, coords.z, 
										0.2499, 0.01, 0, 
										0.25, 0.99, 1, 
										id, block.data);											
			api.renderBoxId(coords.x, coords.y, coords.z, 
										0, 0.01, 0.2499, 
										1, 0.99, 0.25, 
										id, block.data);											
			api.renderBoxId(coords.x, coords.y, coords.z, 
										0.7499, 0.01, 0, 
										0.75, 0.99, 1, 
										id, block.data);											
			api.renderBoxId(coords.x, coords.y, coords.z, 
										0, 0.01, 0.7499, 
										1, 0.99, 0.75, 
										id, block.data);										
		});
		BlockRenderer.enableCustomRender(id);
	}
};*/

EXPORT("PlantModel", PlantModel);