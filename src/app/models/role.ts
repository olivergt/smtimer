import { CooldownReduction } from "./cooldown-reduction";
import { Summon } from "./summon";

export class Role {
    id: string;
    name: string;
    summon_1: Summon;
    summon_2: Summon;
    cdr_1: boolean;
    cdr_2: boolean;

    constructor() {
        this.id = '';
        this.name = ''
        this.summon_1 = new Summon;
        this.summon_2 = new Summon;
        this.cdr_1 = false;
        this.cdr_2 = false;
    }
}