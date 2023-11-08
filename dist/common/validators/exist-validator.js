"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsExist = exports.ExistValidator = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const datasources_1 = require("../datasources");
let ExistValidator = class ExistValidator {
    async validate(value, args) {
        const find = { [args.constraints[1]]: args.value };
        const cek = await datasources_1.mainSource.getRepository(args.constraints[0]).findOneBy(find);
        if (cek)
            return true;
        return false;
    }
    defaultMessage(args) {
        return args.property + ' ' + args.value + ' not found';
    }
};
exports.ExistValidator = ExistValidator;
exports.ExistValidator = ExistValidator = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ async: true }),
    (0, common_1.Injectable)()
], ExistValidator);
function IsExist(option, validationOption) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'IsExist',
            target: object.constructor,
            propertyName: propertyName,
            constraints: option,
            options: validationOption,
            validator: ExistValidator,
            async: true,
        });
    };
}
exports.IsExist = IsExist;
//# sourceMappingURL=exist-validator.js.map