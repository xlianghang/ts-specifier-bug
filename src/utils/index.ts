import { MyType, MyReturnType } from './type-helpers';

export function PartialType<T>(classRef: MyType<T>) {
  abstract class PartialClassType {
    constructor() {}
  }

  return PartialClassType as MyReturnType;
}
