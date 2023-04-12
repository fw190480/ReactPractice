

class Slot {
    #slot;
    constructor(start,end) {
        this.#slot = [start,end]
    };

    get start(){
        return this.#slot[0]
    }
    get end(){
        return this.#slot[1]
    }
};

class Slots {
    #slots;
    constructor() {
        this.#slots = [];
    };

    get slots() {
        return this.#slots
    };

    add(slot){
        if(this.isAvailable(slot.start,slot.end)){
            this.#slots.push(slot);
        }
    };

    isAvailable(start,end) {
        for(let slot of this.#slots){
            if(start<slot.end && end>slot.start) return false;

        };
        return true;
    };
};

//  Meeting Room;
class MeetingRoom{
    #name;
    #capacity;
    #slots;
    #availableSlots;

    constructor(name,capacity){
        this.#slots=name;
        this.#capacity = capacity;
        this.#slots = new Slots();
    };
    
    get name(){
        return this.#name;
    };
    get capacity(){
        return this.#capacity;
    }
}

// let s1 = new Slot(1,3)
// let s2 = new Slot(4,6)
// let s3 = new Slot(2,5)

// let p = new Slots();
// p.add(s1)
// p.add(s2)
// p.add(s3);

// console.log(p.slots);