export class User {
  #id: string;
  #name: string;
  #email: string;
  #password: string;

  constructor(id: string, name: string, email: string, password: string) {
    this.#id = id;
    this.#name = name;
    this.#email = email;
    this.#password = password;
  }

  get id() {
    return this.id;
  }

  get name() {
    return this.name;
  }

  get email() {
    return this.email;
  }

  get password() {
    return this.password;
  }

  getDetails() {
    return {
      id: this.#id,
      name: this.#name,
      email: this.#email,
      password: this.#password,
    };
  }
}
