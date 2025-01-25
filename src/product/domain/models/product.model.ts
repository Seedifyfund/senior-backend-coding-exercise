
export class Product {
    #id: string;
    #name: string;
    #description: string;
  
    constructor(id: string, name: string, description: string) {
      this.#id = id;
      this.#name = name;
      this.#description = description;
    }
  
    get id() {
      return this.id;
    }
  
    get name() {
      return this.name;
    }

    get description() {
      return this.description;
    }
  
    getDetails() {
      return {
        id: this.#id,
        name: this.#name,
        description: this.#description,
      };
    }
  }
  