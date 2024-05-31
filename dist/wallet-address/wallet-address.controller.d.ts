import { WalletAddressService } from './wallet-address.service';
import { CreateWalletAddressDto } from './create-wallet-address.dto';
import { UpdateWalletAddressDto } from './update-wallet-address.dto';
import { WalletAddress } from './wallet-address.entity';
export declare class WalletAddressController {
    private readonly walletAddressService;
    constructor(walletAddressService: WalletAddressService);
    findByUserId(user_id: number): Promise<WalletAddress[]>;
    findAll(): Promise<WalletAddress[]>;
    findOne(id: string): Promise<WalletAddress>;
    create(createWalletAddressDto: CreateWalletAddressDto): Promise<WalletAddress>;
    update(id: string, updateWalletAddressDto: UpdateWalletAddressDto): Promise<WalletAddress>;
    remove(id: string): Promise<void>;
}
