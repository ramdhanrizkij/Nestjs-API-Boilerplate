import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Not } from 'typeorm';
import { mainSource } from '../datasources';

@ValidatorConstraint({ async: true })
@Injectable()
export class UniqueValidator implements ValidatorConstraintInterface {
  async validate(value: any, args: ValidationArguments) {
    const find = {
      where: {
        [args.constraints[1]]: args.value,
      },
    };
    if (args.object['id']) {
      find.where['id'] = Not(args.object['id']);
    }
    const cek = await mainSource
      .getRepository(args.constraints[0])
      .findOne(find);
    if (cek) return false;
    return true;
  }
  defaultMessage(args: ValidationArguments) {
    return args.property + ' ' + args.value + ' already taken';
  }
}
export function IsUnique(option: any, validationOption?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
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
