import { DataSourceOptions } from "typeorm";
declare class ConfigService {
    private env;
    constructor(env: {
        [k: string]: string | undefined;
    });
    private getValue;
    ensureValues(keys: string[]): this;
    getPort(): string;
    isProduction(): boolean;
    getAppTitle(): string;
    getJwtSecret(): string;
    getTypeOrmConfig(): DataSourceOptions;
}
declare const configService: ConfigService;
export { configService };
