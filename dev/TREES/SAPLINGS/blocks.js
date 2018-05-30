//apple
IDRegistry.genBlockID("appleTreeSapling");
Block.createBlock("appleTreeSapling", [
	{name: "Apple Tree Sapling", texture: [["empty", 0], ["empty", 0], ["appleSapling", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
CropRegistry.deriveCropAsClass("Harvestcraft_treeSapling",{
	id:BlockID.appleTreeSapling,
	seed:ItemID.appleSapling
});
Harvest.recipe({id:ItemID.appleSapling},[{id: 260, data: 0}, {id: 6, data: 0}]);

//apricot
IDRegistry.genBlockID("apricotTreeSapling");
Block.createBlock("apricotTreeSapling", [
	{name: "Apricot Tree Sapling", texture: [["empty", 0], ["empty", 0], ["apricotSapling", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
CropRegistry.deriveCropAsClass("Harvestcraft_treeSapling",{
	id:BlockID.apricotTreeSapling,
	seed:ItemID.apricotSapling
});
Harvest.recipe({id:ItemID.apricotSapling},[{id: ItemID.apricot, data: 0}, {id: 6, data: 3}]);

//cherry
IDRegistry.genBlockID("cherryTreeSapling");
Block.createBlock("cherryTreeSapling", [
	{name: "Cherry Tree Sapling", texture: [["empty", 0], ["empty", 0], ["cherrySapling", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
CropRegistry.deriveCropAsClass("Harvestcraft_treeSapling",{
	id:BlockID.cherryTreeSapling,
	seed:ItemID.cherrySapling
});
Harvest.recipe({id:ItemID.cherrySapling},[{id: ItemID.cherry, data: 0}, {id: 6, data: 0}]);

//avocado
IDRegistry.genBlockID("avocadoTreeSapling");
Block.createBlock("avocadoTreeSapling", [
	{name: "Avocado Tree Sapling", texture: [["empty", 0], ["empty", 0], ["avocadoSapling", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
CropRegistry.deriveCropAsClass("Harvestcraft_treeSapling",{
	id:BlockID.avocadoTreeSapling,
	seed:ItemID.avocadoSapling
});
Harvest.recipe({id:ItemID.avocadoSapling},[{id: ItemID.avocado, data: 0}, {id: 6, data: 0}]);

//banana
IDRegistry.genBlockID("bananaTreeSapling");
Block.createBlock("bananaTreeSapling", [
	{name: "Banana Tree Sapling", texture: [["empty", 0], ["empty", 0], ["bananaSapling", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
CropRegistry.deriveCropAsClass("Harvestcraft_treeSapling",{
	id:BlockID.bananaTreeSapling,
	seed:ItemID.bananaSapling
});
Harvest.recipe({id:ItemID.bananaSapling},[{id: ItemID.banana, data: 0}, {id: 6, data: 3}]);

//date
IDRegistry.genBlockID("dateTreeSapling");
Block.createBlock("dateTreeSapling", [
	{name: "Date Tree Sapling", texture: [["empty", 0], ["empty", 0], ["dateSapling", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
CropRegistry.deriveCropAsClass("Harvestcraft_treeSapling",{
	id:BlockID.dateTreeSapling,
	seed:ItemID.dateSapling
});
Harvest.recipe({id:ItemID.dateSapling},[{id: ItemID.date, data: 0}, {id: 6, data: 3}]);

//dragonfruit
IDRegistry.genBlockID("dragonfruitTreeSapling");
Block.createBlock("dragonfruitTreeSapling", [
	{name: "Dragonfruit Tree Sapling", texture: [["empty", 0], ["empty", 0], ["dragonfruitSapling", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
CropRegistry.deriveCropAsClass("Harvestcraft_treeSapling",{
	id:BlockID.dragonfruitTreeSapling,
	seed:ItemID.dragonfruitSapling
});
Harvest.recipe({id:ItemID.dragonfruitSapling},[{id: ItemID.dragonfruit, data: 0}, {id: 6, data: 3}]);

//fig
IDRegistry.genBlockID("figTreeSapling");
Block.createBlock("figTreeSapling", [
	{name: "Fig Tree Sapling", texture: [["empty", 0], ["empty", 0], ["figSapling", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
CropRegistry.deriveCropAsClass("Harvestcraft_treeSapling",{
	id:BlockID.figTreeSapling,
	seed:ItemID.figSapling
});
Harvest.recipe({id:ItemID.figSapling},[{id: ItemID.fig, data: 0}, {id: 6, data: 3}]);

//grapefruit
IDRegistry.genBlockID("grapefruitTreeSapling");
Block.createBlock("grapefruitTreeSapling", [
	{name: "Grapefruit Tree Sapling", texture: [["empty", 0], ["empty", 0], ["grapefruitSapling", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
CropRegistry.deriveCropAsClass("Harvestcraft_treeSapling",{
	id:BlockID.grapefruitTreeSapling,
	seed:ItemID.grapefruitSapling
});
Harvest.recipe({id:ItemID.grapefruitSapling},[{id: ItemID.grapefruit, data: 0}, {id: 6, data: 3}]);

//gooseberry
IDRegistry.genBlockID("gooseberryTreeSapling");
Block.createBlock("gooseberryTreeSapling", [
	{name: "Gooseberry Tree Sapling", texture: [["empty", 0], ["empty", 0], ["gooseberrySapling", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
CropRegistry.deriveCropAsClass("Harvestcraft_treeSapling",{
	id:BlockID.gooseberryTreeSapling,
	seed:ItemID.gooseberrySapling
});
Harvest.recipe({id:ItemID.gooseberrySapling},[{id: ItemID.gooseberry, data: 0}, {id: 6, data: 3}]);

//lemon
IDRegistry.genBlockID("lemonTreeSapling");
Block.createBlock("lemonTreeSapling", [
	{name: "Lemon Tree Sapling", texture: [["empty", 0], ["empty", 0], ["lemonSapling", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
CropRegistry.deriveCropAsClass("Harvestcraft_treeSapling",{
	id:BlockID.lemonTreeSapling,
	seed:ItemID.lemonSapling
});
Harvest.recipe({id:ItemID.lemonSapling},[{id: ItemID.lemon, data: 0}, {id: 6, data: 3}]);

//lime
IDRegistry.genBlockID("limeTreeSapling");
Block.createBlock("limeTreeSapling", [
	{name: "Lime Tree Sapling", texture: [["empty", 0], ["empty", 0], ["limeSapling", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
CropRegistry.deriveCropAsClass("Harvestcraft_treeSapling",{
	id:BlockID.limeTreeSapling,
	seed:ItemID.limeSapling
});
Harvest.recipe({id:ItemID.limeSapling},[{id: ItemID.lime, data: 0}, {id: 6, data: 3}]);

//mango
IDRegistry.genBlockID("mangoTreeSapling");
Block.createBlock("mangoTreeSapling", [
	{name: "Mango Tree Sapling", texture: [["empty", 0], ["empty", 0], ["mangoSapling", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
CropRegistry.deriveCropAsClass("Harvestcraft_treeSapling",{
	id:BlockID.mangoTreeSapling,
	seed:ItemID.mangoSapling
});
Harvest.recipe({id:ItemID.mangoSapling},[{id: ItemID.mango, data: 0}, {id: 6, data: 3}]);

//olive
IDRegistry.genBlockID("oliveTreeSapling");
Block.createBlock("oliveTreeSapling", [
	{name: "Olive Tree Sapling", texture: [["empty", 0], ["empty", 0], ["oliveSapling", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
CropRegistry.deriveCropAsClass("Harvestcraft_treeSapling",{
	id:BlockID.oliveTreeSapling,
	seed:ItemID.oliveSapling
});
Harvest.recipe({id:ItemID.oliveSapling},[{id: ItemID.olive, data: 0}, {id: 6, data: 3}]);

//orange
IDRegistry.genBlockID("orangeTreeSapling");
Block.createBlock("orangeTreeSapling", [
	{name: "Orange Tree Sapling", texture: [["empty", 0], ["empty", 0], ["orangeSapling", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
CropRegistry.deriveCropAsClass("Harvestcraft_treeSapling",{
	id:BlockID.orangeTreeSapling,
	seed:ItemID.orangeSapling
});
Harvest.recipe({id:ItemID.orangeSapling},[{id: ItemID.orange, data: 0}, {id: 6, data: 3}]);

//papaya
IDRegistry.genBlockID("papayaTreeSapling");
Block.createBlock("papayaTreeSapling", [
	{name: "Papaya Tree Sapling", texture: [["empty", 0], ["empty", 0], ["papayaSapling", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
CropRegistry.deriveCropAsClass("Harvestcraft_treeSapling",{
	id:BlockID.papayaTreeSapling,
	seed:ItemID.papayaSapling
});
Harvest.recipe({id:ItemID.orangeSapling},[{id: ItemID.papaya, data: 0}, {id: 6, data: 3}]);

//peach
IDRegistry.genBlockID("peachTreeSapling");
Block.createBlock("peachTreeSapling", [
	{name: "Peach Tree Sapling", texture: [["empty", 0], ["empty", 0], ["peachSapling", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
CropRegistry.deriveCropAsClass("Harvestcraft_treeSapling",{
	id:BlockID.peachTreeSapling,
	seed:ItemID.peachSapling
});
Harvest.recipe({id:ItemID.peachSapling},[{id: ItemID.peach, data: 0}, {id: 6, data: 3}]);

//pear
IDRegistry.genBlockID("pearTreeSapling");
Block.createBlock("pearTreeSapling", [
	{name: "Pear Tree Sapling", texture: [["empty", 0], ["empty", 0], ["pearSapling", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
CropRegistry.deriveCropAsClass("Harvestcraft_treeSapling",{
	id:BlockID.pearTreeSapling,
	seed:ItemID.pearSapling
});
Harvest.recipe({id:ItemID.peachSapling},[{id: ItemID.pear, data: 0}, {id: 6, data: 4}]);

//persimmon
IDRegistry.genBlockID("persimmonTreeSapling");
Block.createBlock("persimmonTreeSapling", [
	{name: "Persimmon Tree Sapling", texture: [["empty", 0], ["empty", 0], ["persimmonSapling", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
CropRegistry.deriveCropAsClass("Harvestcraft_treeSapling",{
	id:BlockID.persimmonTreeSapling,
	seed:ItemID.persimmonSapling
});
Harvest.recipe({id:ItemID.persimmonSapling},[{id: ItemID.persimmon, data: 0}, {id: 6, data: 3}]);

//plum
IDRegistry.genBlockID("plumTreeSapling");
Block.createBlock("plumTreeSapling", [
	{name: "Plum Tree Sapling", texture: [["empty", 0], ["empty", 0], ["plumSapling", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
CropRegistry.deriveCropAsClass("Harvestcraft_treeSapling",{
	id:BlockID.plumTreeSapling,
	seed:ItemID.plumSapling
});
Harvest.recipe({id:ItemID.plumSapling},[{id: ItemID.plum, data: 0}, {id: 6, data: 3}]);

//pomegranate
IDRegistry.genBlockID("pomegranateTreeSapling");
Block.createBlock("pomegranateTreeSapling", [
	{name: "Pomegranate Tree Sapling", texture: [["empty", 0], ["empty", 0], ["pomegranateSapling", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
CropRegistry.deriveCropAsClass("Harvestcraft_treeSapling",{
	id:BlockID.pomegranateTreeSapling,
	seed:ItemID.pomegranateSapling
});
Harvest.recipe({id:ItemID.pomegranateSapling},[{id: ItemID.pomegranate, data: 0}, {id: 6, data: 3}]);

//starfruit
IDRegistry.genBlockID("starfruitTreeSapling");
Block.createBlock("starfruitTreeSapling", [
	{name: "Starfruit Tree Sapling", texture: [["empty", 0], ["empty", 0], ["starfruitSapling", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
CropRegistry.deriveCropAsClass("Harvestcraft_treeSapling",{
	id:BlockID.starfruitTreeSapling,
	seed:ItemID.starfruitSapling
});
Harvest.recipe({id:ItemID.starfruitSapling},[{id: ItemID.starfruit, data: 0}, {id: 6, data: 3}]);

//almond
IDRegistry.genBlockID("almondTreeSapling");
Block.createBlock("almondTreeSapling", [
	{name: "Almond Tree Sapling", texture: [["empty", 0], ["empty", 0], ["almondSapling", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
CropRegistry.deriveCropAsClass("Harvestcraft_treeSapling",{
	id:BlockID.almondTreeSapling,
	seed:ItemID.almondSapling
});
Harvest.recipe({id:ItemID.almondSapling},[{id: ItemID.almond, data: 0}, {id: 6, data: 3}]);

//peppercorn
IDRegistry.genBlockID("peppercornTreeSapling");
Block.createBlock("peppercornTreeSapling", [
	{name: "Peppercorn Tree Sapling", texture: [["empty", 0], ["empty", 0], ["peppercornSapling", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
CropRegistry.deriveCropAsClass("Harvestcraft_treeSapling",{
	id:BlockID.peppercornTreeSapling,
	seed:ItemID.peppercornSapling
});
Harvest.recipe({id:ItemID.peppercornSapling},[{id: ItemID.peppercorn, data: 0}, {id: 6, data: 3}]);

//cashew
IDRegistry.genBlockID("cashewTreeSapling");
Block.createBlock("cashewTreeSapling", [
	{name: "Cashew Tree Sapling", texture: [["empty", 0], ["empty", 0], ["cashewSapling", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
CropRegistry.deriveCropAsClass("Harvestcraft_treeSapling",{
	id:BlockID.cashewTreeSapling,
	seed:ItemID.cashewSapling
});
Harvest.recipe({id:ItemID.cashewSapling},[{id: ItemID.cashew, data: 0}, {id: 6, data: 3}]);

//coconut
IDRegistry.genBlockID("coconutTreeSapling");
Block.createBlock("coconutTreeSapling", [
	{name: "Coconut Tree Sapling", texture: [["empty", 0], ["empty", 0], ["coconutSapling", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
CropRegistry.deriveCropAsClass("Harvestcraft_treeSapling",{
	id:BlockID.coconutTreeSapling,
	seed:ItemID.coconutSapling
});
Harvest.recipe({id:ItemID.coconutSapling},[{id: ItemID.coconut, data: 0}, {id: 6, data: 3}]);