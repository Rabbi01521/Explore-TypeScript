> via npm

TypeScript is available as a package on the npm registry available as "typescript".

You will need a copy of Node.js as an environment to run the package. Then you use a dependency manager like npm, yarn or pnpm to download TypeScript into your project.

-> npm install typescript --save-dev

All of these dependency managers support lockfiles, ensuring that everyone on your team is using the same version of the language. You can then run the TypeScript compiler using one of the following commands:

-> npx tsc

> Globally Installing TypeScript

-- via npm

You can use npm to install TypeScript globally, this means you can use the tsc command anywhere in your terminal.

To do this, run npm install -g typescript. This will install the latest version (currently 4.4).

An alternative is to use npx when you have to run tsc for one-off occasions.
