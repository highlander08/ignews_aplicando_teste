module.exports = {
  testPathIgnorePatterns: ["/node_module/", "/.next/"],
  setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.ts"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(scss|css|sass)$": "identity-obj-proxy",
  },
  collectCoverage: true,
  collectCoverageFrom: ["src/*.{tsx}", "!src/**/*.spec.tsx"],

  coverageReporters: ["clover", "json", "lcov", ["text", { skipFull: true }]],
};
