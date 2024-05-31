import { Repository } from 'typeorm';
import { WalletAddress } from './wallet-address.entity';
import { CreateWalletAddressDto } from './create-wallet-address.dto';
import { UpdateWalletAddressDto } from './update-wallet-address.dto';
export declare class WalletAddressService {
    private readonly walletAddressRepository;
    constructor(walletAddressRepository: Repository<WalletAddress>);
    findByUserId(user_id: number): Promise<WalletAddress[]>;
    findAll(): Promise<WalletAddress[]>;
    findOne(id: number): Promise<WalletAddress>;
    create(createWalletAddressDto: CreateWalletAddressDto): Promise<WalletAddress>;
    update(id: number, updateWalletAddressDto: UpdateWalletAddressDto): Promise<WalletAddress>;
    remove(id: number): Promise<void>;
}
