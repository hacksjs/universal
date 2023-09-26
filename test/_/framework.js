// @ts-check

/*

The purpose of this file is to export abstractions of our test framework, Jest.
Currently, we simply re-export the Jest globals which we subsequently import
to our test files. However, by including this abstraction, we can more easily
change our test framework without refactoring all of our test code.

A second advantage is that we explicitly import the required components of
our test framework into our test scripts. This means we do not need to rely
on libraries like `@types/jest` (https://www.npmjs.com/package/@types/jest)
to provide type definitions for new global values like `test` and `expect`.

*/

export { afterEach, beforeEach, describe, expect, test } from '@jest/globals'
export { expectType } from 'tsd-lite'
