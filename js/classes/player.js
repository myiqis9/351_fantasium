class Player {
    constructor(json) {
        this.username = json.username;
        this.biome = json.biome;
        this.terrarium = json.terrarium;
        this.inventory = json.inventory;
        this.trades = json.trades;
        this.friendlist = json.friendlist;
    }

    //takes item and amount parameters
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

    //takes item and element parameters
    addToTerrarium(it, el) {
        console.log(`adding ${it.name} to terrarium`);

        //removes 1 of item from inventory
        for(let i of this.inventory) {
            if(i.item == it.id) {
                i.amount--;
                if(i.amount == 0) {
                    this.inventory.splice(this.inventory.indexOf(i), 1);
                    el.remove();
                }
                let obj = {item: it.name, x: 375, y: 375};
                this.terrarium.push(obj);
                return;
            }

        }
    }
}