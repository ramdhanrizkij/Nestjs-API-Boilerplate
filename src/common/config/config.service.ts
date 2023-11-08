import { DataSourceOptions } from "typeorm";

// Configure .env file
const path = `${process.cwd()}/.env.${process.env.NODE_ENV}`;
require('dotenv').config()

class ConfigService {
    constructor(private env: { [k: string]: string | undefined }) { }

    private getValue(key: string, throwOnMissing = true): string {
        const value = this.env[key]
        if (!value && throwOnMissing) {
            throw new Error(`Config error - missing env.${key}`)
        }
        return value
    }

    public ensureValues(keys: string[]) {
        keys.forEach((k) => this.getValue(k, true));
        return this;
    }

    public getPort() {
        return this.getValue('APP_PORT', true);
    }

    public isProduction() {
        const mode = this.getValue('MODE', false);
        return mode != 'DEV';
    }

    public getAppTitle() {
        return this.getValue('APP_NAME', true);
    }

    public getJwtSecret() {
        return this.getValue('JWT_SECRET', true);
    }

    public getTypeOrmConfig(): DataSourceOptions {
        return {
            type: 'mysql',
            host: this.getValue('DB_HOST'),
            port: parseInt(this.getValue('DB_PORT')),
            username: this.getValue('DB_USERNAME'),
            password: this.getValue('DB_PASSWORD', false),
            database: this.getValue('DB_NAME'),
            entities: ['dist/**/*.entity{.ts,.js}'],
            migrationsTableName: 'migration',
            migrations: ['dist/app/migration/*{.ts,.js}'],
            synchronize: true,
        };
    }
}

const configService = new ConfigService(process.env).ensureValues([
    'DB_HOST',
    'DB_PORT',
    'DB_USERNAME',
    'DB_NAME',
    'JWT_SECRET'
])

export { configService }