import { PartialType } from './utils';

class Common {}

export class Sub extends PartialType(Common) {
  id: string;
}
