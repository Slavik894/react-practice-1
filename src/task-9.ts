interface Container<T>{
    items: T[];
    addItem: (item: T) => void;
    getItem: (index: number) => T;
}

const numberContainer: Container<number> = {
    items: [5, 10, 15, 20],
    addItem(item) {
        this.items.push(item);
    },
    getItem(index) {
        return this.items[index];
    },
    
} ;

const stringContainer: Container<string> = {
    items: ["Vita", "Nazar", "Slavik"],
    addItem(item) {
        this.items.push(item);
    },
    getItem(index) {
        return this.items[index]
    },
}

function getLastElement<T>(array: T[]){
    return array[array.length - 1];
}