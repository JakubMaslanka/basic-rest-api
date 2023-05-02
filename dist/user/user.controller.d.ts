import { UserService } from './user.service';
import { User as UserModel } from '@prisma/client';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUsers(): Promise<UserModel[]>;
    signupUser(userData: {
        name?: string;
        email: string;
    }): Promise<UserModel>;
}
