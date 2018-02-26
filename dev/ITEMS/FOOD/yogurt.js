Harvest.setFood("plain_yogurt","Plain yogurt",2);
Harvest.recipe({id:ItemID.plain_yogurt,count: 4},[{id: ItemID.fresh_milk, data: 0}, {id: 334, data: 0}]);
Harvest.recipe({id:ItemID.plain_yogurt,count: 4},[{id: ItemID.plain_yogurt, data: 0}, {id: ItemID.fresh_milk, data: 0}]);
Harvest.recipe({id:ItemID.plain_yogurt,count: 4},[{id: 325, data: 1}, {id: 334, data: 0}]);

Harvest.setFood("strawberry_yogurt","Strawberry yogurt",8);
Harvest.recipe({id:ItemID.strawberry_yogurt}, [{id: ItemID.plain_yogurt, data: 0}, {id: ItemID.strawberry, data: 0}]);

Harvest.setFood("raspberry_yogurt","Raspberry yogurt",8);
Harvest.recipe({id:ItemID.raspberry_yogurt},[{id: ItemID.plain_yogurt, data: 0}, {id: ItemID.raspberry, data: 0}]);

Harvest.setFood("grape_yogurt","Grape yogurt",8);
Harvest.recipe({id:ItemID.grape_yogurt}, [{id: ItemID.plain_yogurt, data: 0}, {id: ItemID.grape, data: 0}]);

Harvest.setFood("apple_yogurt","Apple yogurt",8);
Harvest.recipe({id:ItemID.apple_yogurt}, [{id: ItemID.plain_yogurt, data: 0}, {id: 260, data: 0}]);

Harvest.setFood("blackberry_yogurt","Blackberry yogurt",8);
Harvest.recipe({id:ItemID.blackberry_yogurt},[{id: ItemID.plain_yogurt, data: 0}, {id: ItemID.blackberry, data: 0}]);

Harvest.setFood("blueberry_yogurt","Blueberry yogurt",8);
Harvest.recipe({id:ItemID.blueberry_yogurt},[{id: ItemID.plain_yogurt, data: 0}, {id: ItemID.blueberry, data: 0}]);

Harvest.setFood("pumpkin_yogurt","Pumpkin yogurt",8);
Harvest.recipe({id:ItemID.pumpkin_yogurt}, [{id: ItemID.plain_yogurt, data: 0}, {id: 86, data: 0}]);

Harvest.setFood("melon_yogurt","Melon yogurt",8);
Harvest.recipe({id:ItemID.melon_yogurt},[{id: ItemID.plain_yogurt, data: 0}, {id: 360, data: 0}]);

Harvest.setFood("chocolate_yogurt","Chocolate yogurt",8);
Harvest.recipe({id:ItemID.chocolate_yogurt}, [{id: ItemID.plain_yogurt, data: 0}, {id: ItemID.strawberry_yogurt, data: 0}]);