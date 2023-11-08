"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainSource = void 0;
const typeorm_1 = require("typeorm");
const config_service_1 = require("../config/config.service");
exports.mainSource = new typeorm_1.DataSource(config_service_1.configService.getTypeOrmConfig());
exports.mainSource
    .initialize()
    .then(() => {
    console.info('Data Source has been initialized!');
})
    .catch((err) => {
    console.error('Error during Data Source initialization', err);
});
//# sourceMappingURL=main.source.js.map