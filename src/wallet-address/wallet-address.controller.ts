/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { WalletAddressService } from './wallet-address.service';
import { WalletAddress } from './wallet-address.entity';
@Controller('wallet-address')
export class WalletAddressController {
  constructor(private readonly walletAddressService: WalletAddressService) {}

  @Get()
  // eslint-disable-next-line prettier/prettier
  findAll(){
    return this.walletAddressService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.walletAddressService.findOne(id);
  }

  @Post()
  create(@Body() walletAddress: WalletAddress) {
    return this.walletAddressService.create(walletAddress);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() walletAddress: Partial<WalletAddress>) {
    return this.walletAddressService.update(id, walletAddress);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.walletAddressService.remove(id);
  }
}