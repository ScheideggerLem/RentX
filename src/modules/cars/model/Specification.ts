import { v4 as uuidv4 } from 'uuid';

class Specification {

    id?: string; // será gerado através do uuid
    name: string;
    description: string;
    created_at: Date;
    
    constructor() {
        if(!this.id) {
            this.id = uuidv4();
        }
    }

}

export { Specification };