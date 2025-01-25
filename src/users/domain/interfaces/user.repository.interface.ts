import { User } from "../models/user.model";

export interface IUsersRepository{
    save(userDetails: User): Promise<void>;
    update(userDetails: User): Promise<void>;
    find(): Promise<void>;
    findById(id: string): Promise<void>;
    delete(id: string): Promise<void>;
}