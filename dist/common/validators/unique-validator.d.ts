import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
export declare class UniqueValidator implements ValidatorConstraintInterface {
    validate(value: any, args: ValidationArguments): Promise<boolean>;
    defaultMessage(args: ValidationArguments): string;
}
export declare function IsUnique(option: any, validationOption?: ValidationOptions): (object: any, propertyName: string) => void;
