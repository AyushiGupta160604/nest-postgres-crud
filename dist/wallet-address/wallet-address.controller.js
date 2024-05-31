"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletAddressController = void 0;
const common_1 = require("@nestjs/common");
const wallet_address_service_1 = require("./wallet-address.service");
const create_wallet_address_dto_1 = require("./create-wallet-address.dto");
const update_wallet_address_dto_1 = require("./update-wallet-address.dto");
let WalletAddressController = class WalletAddressController {
    constructor(walletAddressService) {
        this.walletAddressService = walletAddressService;
    }
    async findByUserId(user_id) {
        return this.walletAddressService.findByUserId(user_id);
    }
    async findAll() {
        return this.walletAddressService.findAll();
    }
    async findOne(id) {
        return this.walletAddressService.findOne(+id);
    }
    async create(createWalletAddressDto) {
        return this.walletAddressService.create(createWalletAddressDto);
    }
    async update(id, updateWalletAddressDto) {
        return this.walletAddressService.update(+id, updateWalletAddressDto);
    }
    async remove(id) {
        return this.walletAddressService.remove(+id);
    }
};
exports.WalletAddressController = WalletAddressController;
__decorate([
    (0, common_1.Get)('user/:user_id'),
    __param(0, (0, common_1.Param)('user_id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], WalletAddressController.prototype, "findByUserId", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WalletAddressController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WalletAddressController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_wallet_address_dto_1.CreateWalletAddressDto]),
    __metadata("design:returntype", Promise)
], WalletAddressController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_wallet_address_dto_1.UpdateWalletAddressDto]),
    __metadata("design:returntype", Promise)
], WalletAddressController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WalletAddressController.prototype, "remove", null);
exports.WalletAddressController = WalletAddressController = __decorate([
    (0, common_1.Controller)('wallet-address'),
    __metadata("design:paramtypes", [wallet_address_service_1.WalletAddressService])
], WalletAddressController);
//# sourceMappingURL=wallet-address.controller.js.map