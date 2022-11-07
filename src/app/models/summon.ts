export class Summon {
    id: string;
    name: string;
    img: string;
    cooldown: number;
    state: boolean;

    constructor() {
        this.id = '';
        this.name = '';
        this.img = 'assets/images/default.png';
        this.cooldown = 0;
        this.state = false;
    }
}