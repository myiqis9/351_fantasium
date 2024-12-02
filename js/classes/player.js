class Player {
    constructor(json) {
        this.username = json.username;
        this.biome = json.biome;
        this.terrarium = json.terrarium;
        this.inventory = json.inventory;
        this.trades = json.trades;
        this.friendlist = json.friendlist;
    }

    addToInventory(it, am) {
        //add item to inventory
        for(let i of this.inventory) {
            if(i.item == it) {
                i.amount += am;
                return;
            }
        }
        let obj = {item: it, amount: am}
        this.inventory.push(obj);
        console.log(this.inventory);
    }
}