class Player {
    constructor(json) {
        this.username = json.username;
        this.biome = json.biome;
        this.terrarium = json.terrarium;
        this.inventory = json.inventory;
        this.trades = json.trades;
        this.friendlist = json.friendlist;
    }

    addToInventory(item, amount) {
        
        for(let i of this.inventory) {
            if(i.item.id = item.id) i.amount++;
            else this.inventory.add({item: item, amount: amount});
        }
    }
}