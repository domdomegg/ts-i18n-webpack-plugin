// eslint-disable-next-line import/no-extraneous-dependencies
import { Compiler } from 'webpack';
import path from 'path';
import { generateFs, GenerateFsOptions } from 'ts-i18n';

class TsI18nWebpackPlugin {
  private options: GenerateFsOptions;

  constructor(options: GenerateFsOptions) {
    this.options = options;
  }

  apply(compiler: Compiler): void {
    compiler.hooks.compile.tap(
      'TsI18nWebpackPlugin',
      () => generateFs(this.options),
    );

    compiler.hooks.afterCompile.tap(
      'TsI18nWebpackPlugin',
      (compilation) => {
        compilation.contextDependencies.add(path.resolve(this.options.inputDirectory));
      },
    );
  }
}

export = TsI18nWebpackPlugin
