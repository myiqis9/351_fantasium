class Player {
    constructor(json) {
        this.username = json.username;
        this.biome = json.biome;
        this.terrarium = json.terrarium;
        this.inventory = json.inventory;
        this.terr_name = json.terr_name;
        this.trades = json.trades;
        this.friendlist = json.friendlist;
        this.movesLeft = localStorage.getItem('movesLeft') ? parseInt(localStorage.getItem('movesLeft')) : 5;
    }

    checkMovePermission() {
        if (this.movesLeft > 0) {
            this.movesLeft--;
            localStorage.setItem('movesLeft', this.movesLeft); //save updated moves to localStorage
            return true; //still have moves left, can move
        } else {
            return false; //used up all moves, can't move
        }
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

    //takes item and element parameters
    //same as add to terrarium, just moves element to the trade
    moveToTrade(it, el) {
        console.log(`adding ${it.name} to trade`);

        //removes 1 of item from inventory
        for(let i of this.inventory) {
            if(i.item == it.id) {
                i.amount--;
                if(i.amount == 0) {
                    this.inventory.splice(this.inventory.indexOf(i), 1);
                    el.remove();
                }
                trade.push(it.id);
                return;
            }

        }
    }
}