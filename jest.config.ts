import type { Config } from "jest";

const config: Config = {
  clearMocks: true,

  coverageProvider: "v8",

  setupFilesAfterEnv: ["<rootDir>/test/setup.ts"],

  testEnvironment: "jest-environment-jsdom",

  transform: {
    "^.+\\.(t|j)sx?$": [
      "@swc/jest",
      {
        jsc: {
          parser: {
            syntax: "typescript",
            tsx: true,
            decorators: true,
          },
          keepClassNames: true,
          transform: {
            legacyDecorator: true,
            decoratorMetadata: true,
            react: {
              runtime: "automatic",
            },
          },
        },
        module: {
          type: "es6",
          noInterop: false,
        },
      },
    ],
  },
};

export default config;
