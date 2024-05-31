/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { WalletAddressModule } from './wallet-address/wallet-address.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'ayushi_sql',
      database: 'nest_post_crud',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    WalletAddressModule,
  ],
})
export class AppModule {}
