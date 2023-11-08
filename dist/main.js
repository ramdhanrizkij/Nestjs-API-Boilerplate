"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const common_2 = require("./common");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Nest JS API')
        .setDescription('Boilerplage API Node JS')
        .setVersion('1.0')
        .addServer('http://localhost:3000/', 'Local environment')
        .addServer('https://staging.yourapi.com/', 'Staging')
        .addServer('https://production.yourapi.com/', 'Production')
        .addTag('Nest JS')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('docs', app, document);
    const port = await common_2.configService.getPort() || 3030;
    await app.listen(port);
    console.log(`Application is running on : ${await app.getUrl()}`);
}
bootstrap();
//# sourceMappingURL=main.js.map