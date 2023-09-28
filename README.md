# typescript-learn

`src/index.ts` contains snippets of TypeScript code.  This file is meant to practice TypeScript syntax and also to see what kind of errors are generated by the TypeScript compiler when wrong types are used.

### To run the compiler to transpile from TypeScript to JavaScript:
```bash
cd <project directory>
npx tsc
```

> `tsc` is the TypeScript compiler.
>
> `npx tsc` runs the TypeScript compiler without :w
having to install it globally.

The transpiled JavaScript code will be under `build/`.

### To run the project in a web browser:

```bash
cd <project directory>
live-server
```

First, open `src/index.html`,<br>
then open your browser's dev tools to see console logs.

### To run the project in a CLI:

```bash
cd <project directory>/build
node <index.js>
```

Similarly, if you had other TypeScript files under src/, that have been transpiled to JavaScript files under build/, then you can run them with
`node <filename.js>`

### Configuration file for TypeScript Projects

The `tsconfig.json` is where the input file directory `src` and the output file directory `build` were set.  See the `include` and `outDir` properties in the `tsconfig.json`.
