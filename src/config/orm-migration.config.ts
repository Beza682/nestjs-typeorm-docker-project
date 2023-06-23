import { DataSource, DataSourceOptions } from 'typeorm'

const DEFAULT_PSQL_HOST = 'localhost'
const DEFAULT_PSQL_PORT = 5432

const port = parseInt(process.env.PSQL_PORT || `${DEFAULT_PSQL_PORT}`, 10)

const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    entities: [`${__dirname}/../**/*.entity{.ts,.js}`],
    database: process.env.PSQL_DATABASE,
    host: process.env.PSQL_HOST || DEFAULT_PSQL_HOST,
    port,
    username: process.env.PSQL_USERNAME,
    password: process.env.PSQL_PASSWORD,
    migrations: [`${__dirname}/../migrations/*{.ts,.js}`],
    // cli: {
    //     migrationsDir: `${__dirname}/../migrations`,
    // },
}

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
