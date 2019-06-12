export = Cerebro
declare class Cerebro {
  static rehydrate(dehydratedObject: string): Cerebro.ICerebroConfig
  constructor(config: Cerebro.ICerebroConfigEntry[], options?: Cerebro.ICerebroOptions)
  resolveConfig(
    context: Cerebro.ICerebroContext,
    options?: Cerebro.ICerebroConfigOptions
  ): Cerebro.ICerebroConfig
}
declare namespace Cerebro {
  interface ICerebroConfigEntry {
    setting: string
    value: any
    except?: ICerebroConfigEntryException[]
  }
  type ICerebroConfigEntryException = {
    value: any
    [key: string]: any
  }
  interface ICerebroOptions {
    customEvaluators?: { [key: string]: Function }
  }
  interface ICerebroContext {
    percentageSeed?: string | number
    [key: string]: any
  }
  interface ICerebroConfigOptions {
    overrides?: { [key: string]: any }
  }
  interface ICerebroConfig {
    isEnabled(name: string): boolean
    getValue(name: string): any
    dehydrate(): string
    getRawConfig(): { [key: string]: any }
  }
}
