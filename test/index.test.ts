import { Compiler } from 'webpack';
import path from 'path';
import { generateFs } from 'ts-i18n';
import TsI18nWebpackPlugin from '../src/index';

jest.mock('ts-i18n');

test('calls generateFs with options', () => {
  const options = {
    inputDirectory: 'input/dir',
    outputDirectory: 'output/dir',
    defaultLanguage: 'default_lang',
  };
  const plugin = new TsI18nWebpackPlugin(options);

  const mockCompiler = { hooks: {
    compile: { tap: jest.fn() },
    afterCompile: { tap: jest.fn() },
  } };

  // Calls generateFs under the hood
  plugin.apply(mockCompiler as unknown as Compiler);
  expect(mockCompiler.hooks.compile.tap).toBeCalledTimes(1);
  expect(typeof mockCompiler.hooks.compile.tap.mock.calls[0][1]).toBe('function');
  expect(generateFs).not.toBeCalled();
  mockCompiler.hooks.compile.tap.mock.calls[0][1]();
  expect(generateFs).toBeCalledTimes(1);
  expect(generateFs).toBeCalledWith(options);

  // Adds output directory as a context dependency
  expect(mockCompiler.hooks.afterCompile.tap).toBeCalledTimes(1);
  expect(typeof mockCompiler.hooks.afterCompile.tap.mock.calls[0][1]).toBe('function');
  const contextDependencies = new Set(['existing/path']);
  mockCompiler.hooks.afterCompile.tap.mock.calls[0][1]({ contextDependencies });
  expect(contextDependencies.size).toBe(2);
  expect(contextDependencies).toContain('existing/path');
  expect(contextDependencies).toContain(path.resolve(options.inputDirectory));
});
