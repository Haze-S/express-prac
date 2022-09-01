import { Item } from './entity';

export class TodoService {
    private items: Item[]

    constructor() {
        this.items = [];
    }

    async add(text: string): Promise<void> {
        const id = new Date().getTime() % 100000;
        const item = new Item(id, text);
        this.items.push(item);
    }

    async remove(id: number): Promise<void> {
        this.items = this.items.filter((item) => item.id !== id);
    }

    async getAll(): Promise<Item[]> {
        return this.items;
    }
}