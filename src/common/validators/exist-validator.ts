import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { mainSource } from '../datasources';
@ValidatorConstraint({ async: true })
@Injectable()
export class ExistValidator implements ValidatorConstraintInterface {
  async validate(value: any, args: ValidationArguments) {
    const find = { [args.constraints[1]]: args.value };
    const cek = await mainSource.getRepository(args.constraints[0]).findOneBy(find);
    if (cek) return true;
    return false;
  }
  defaultMessage(args: ValidationArguments) {
    return args.property + ' ' + args.value + ' not found';
  }
}

export function IsExist(option: any, validationOption?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
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
