import { WalletAddress } from '../wallet-address/wallet-address.entity';
export declare class User {
    id: number;
    username: string;
    email: string;
    password_hash: string;
    walletAddresses: WalletAddress[];
}
