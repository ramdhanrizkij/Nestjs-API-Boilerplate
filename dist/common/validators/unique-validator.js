"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsUnique = exports.UniqueValidator = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const datasources_1 = require("../datasources");
let UniqueValidator = class UniqueValidator {
    async validate(value, args) {
        const find = {
            where: {
                [args.constraints[1]]: args.value,
            },
        };
        if (args.object['id']) {
            find.where['id'] = (0, typeorm_1.Not)(args.object['id']);
        }
        const cek = await datasources_1.mainSource
            .getRepository(args.constraints[0])
            .findOne(find);
        if (cek)
            return false;
        return true;
    }
    defaultMessage(args) {
        return args.property + ' ' + args.value + ' already taken';
    }
};
exports.UniqueValidator = UniqueValidator;
exports.UniqueValidator = UniqueValidator = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ async: true }),
    (0, common_1.Injectable)()
], UniqueValidator);
function IsUnique(option, validationOption) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'IsUnique',
            target: object.constructor,
            propertyName: propertyName,
            constraints: option,
            options: validationOption,
            validator: UniqueValidator,
            async: true,
        });
    };
}
exports.IsUnique = IsUnique;
//# sourceMappingURL=unique-validator.js.map