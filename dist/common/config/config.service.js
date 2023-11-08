"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configService = void 0;
const path = `${process.cwd()}/.env.${process.env.NODE_ENV}`;
require('dotenv').config();
class ConfigService {
    constructor(env) {
        this.env = env;
    }
    getValue(key, throwOnMissing = true) {
        const value = this.env[key];
        if (!value && throwOnMissing) {
            throw new Error(`Config error - missing env.${key}`);
        }
        return value;
    }
    ensureValues(keys) {
        keys.forEach((k) => this.getValue(k, true));
        return this;
    }
    getPort() {
        return this.getValue('APP_PORT', true);
    }
    isProduction() {
        const mode = this.getValue('MODE', false);
        return mode != 'DEV';
    }
    getAppTitle() {
        return this.getValue('APP_NAME', true);
    }
    getJwtSecret() {
        return this.getValue('JWT_SECRET', true);
    }
    getTypeOrmConfig() {
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
]);
exports.configService = configService;
//# sourceMappingURL=config.service.js.map