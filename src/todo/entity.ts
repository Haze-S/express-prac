export class Item {
    id: number;
    text: string;
    done: boolean;
    createdAt: Date;

    constructor(id: number, text: string) {
        this.id = id;
        this.text = text;
        this.done = false;
        this.createdAt = new Date();
    }
}