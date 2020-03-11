import { GenericFunction } from './Common';

export interface TestContextFunction {
  (): any;
}

export interface TestRunnerFunction {
  (desc: string, block: GenericFunction): any;
}

export interface TestSuiteFunction {
  (desc: string, block: TestSuiteCallback): void;
}

export interface TestSuiteCallback {
  (ctx: any, testRunner: TestRunnerFunction): void;
}
