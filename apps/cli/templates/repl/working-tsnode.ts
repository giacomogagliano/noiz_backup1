import * as tsnode from "ts-node";
const tsNodeConfig = {
  compilerOptions: {
    target: "ES2017",
    module: "commonjs",
  },
};
tsnode.register(tsNodeConfig);
const replService: tsnode.ReplService = tsnode.createRepl({
  stdin: process.stdin,
  stdout: process.stdout,
  stderr: process.stderr,
});
const service = tsnode.create({ ...replService.evalAwarePartialHost });
replService.setService(service);
replService.start();
