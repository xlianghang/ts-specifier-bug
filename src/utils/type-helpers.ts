export type MyReturnType = {
  new (...args: any[]): any;
};

export interface MyType<T = any> extends Function {
  new (...args: any[]): T;
}
