import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from "./create-user.dto";
import { UpdateUserDto } from "./update-user.dto";
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    create(createUserDto: CreateUserDto): Promise<User>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<User>;
    remove(id: number): Promise<void>;
    validateUser(email: string, password: string): Promise<User | null>;
}
