import { User } from '../users/user.entity';
export declare class WalletAddress {
    id: number;
    address: string;
    coin_type: string;
    user: User;
    user_id: number;
}
