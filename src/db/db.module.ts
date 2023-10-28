import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'

import { ConfigService } from '@common/services'

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.val<string>('PG_HOST'),
        port: config.val<number>('PG_PORT'),
        username: config.val<string>('PG_USER'),
        password: config.val<string>('PG_PASS'),
        database: config.val<string>('PG_DB'),
        entities: [__dirname + '/../**/*.entity.{js,ts}'],
        synchronize: true,
      }),
    }),
  ],
})
export class DbModule {}
