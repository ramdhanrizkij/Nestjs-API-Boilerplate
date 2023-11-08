"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseEntityWithUUID = void 0;
const typeorm_1 = require("typeorm");
class BaseEntityWithUUID {
}
exports.BaseEntityWithUUID = BaseEntityWithUUID;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], BaseEntityWithUUID.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Generated)('uuid'),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BaseEntityWithUUID.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at',
        default: () => 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", Date)
], BaseEntityWithUUID.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        name: 'updated_at',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
    }),
    __metadata("design:type", Date)
], BaseEntityWithUUID.prototype, "updatedAt", void 0);
//# sourceMappingURL=base-uuid.entity.js.map