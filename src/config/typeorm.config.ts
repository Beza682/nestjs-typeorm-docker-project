import { ConfigModule, ConfigService } from '@nestjs/config'
import {
    TypeOrmModuleAsyncOptions,
    TypeOrmModuleOptions,
} from '@nestjs/typeorm'

const DEFAULT_PSQL_HOST = 'localhost'
const DEFAULT_PSQL_PORT = 5432

export const typeOrmConfig: TypeOrmModuleAsyncOptions = {
    imports: [ConfigModule],
    useFactory: (configService: ConfigService): TypeOrmModuleOptions => {
        const database = configService.get('PSQL_DATABASE')

        if (database === undefined) {
            throw new Error(
                "Environment variable 'PSQL_DATABASE' cannot be undefined",
            )
        }

        return {
            type: 'postgres',
            host: configService.get('PSQL_HOST', DEFAULT_PSQL_HOST),
            port: configService.get('PSQL_PORT', DEFAULT_PSQL_PORT),
            username: configService.get('PSQL_USERNAME'),
            password: configService.get('PSQL_PASSWORD'),
            entities: [`${__dirname}/../**/*.entity.{js,ts}`],
            database,
            synchronize: configService.get('NODE_ENV') !== 'develoment-no-migration',
            dropSchema: configService.get('NODE_ENV') !== 'develoment-no-migration' && 
                        configService.get<boolean>('PSQL_DROP_DATABASE') === true 
        }
    },
    inject: [ConfigService],
}