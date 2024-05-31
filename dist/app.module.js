"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_controller_1 = require("./users/user.controller");
const user_service_1 = require("./users/user.service");
const user_entity_1 = require("./users/user.entity");
const wallet_address_controller_1 = require("./wallet-address/wallet-address.controller");
const wallet_address_service_1 = require("./wallet-address/wallet-address.service");
const wallet_address_entity_1 = require("./wallet-address/wallet-address.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'ayushi_sql',
                database: 'nest-post-crud',
                entities: [user_entity_1.User, wallet_address_entity_1.WalletAddress],
                synchronize: true,
            }),
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User, wallet_address_entity_1.WalletAddress]),
        ],
        controllers: [user_controller_1.UserController, wallet_address_controller_1.WalletAddressController],
        providers: [user_service_1.UserService, wallet_address_service_1.WalletAddressService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map