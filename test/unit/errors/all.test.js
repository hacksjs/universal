// @ts-check

import { afterEach, beforeEach, describe, expect, test } from '../../_/framework'

import { AbstractCustomError,
  ArithmeticError,
  AssertionError,
  BadFunctionCallError,
  CompileTimeError,
  DatabaseError,
  DomainError,
  FilesystemError,
  InvalidParameterError,
  LogicError,
  MissingParameterError,
  OffByOneError,
  ParameterError,
  ResourceError,
  RoundingError,
  RuntimeError,
  UnexpectedParameterError,
  UnexpectedResultError,
  ValidationError,
  ZeroDivisionError } from '../../../dist/lib/errors'

// Define a custom error type for the purpose of testing
// the constructor logic of `AbstractCustomError`.
class MyCustomError extends AbstractCustomError {}

// Full list of custom error types to test.
const test_error_types = [
  ArithmeticError,
  AssertionError,
  BadFunctionCallError,
  CompileTimeError,
  DatabaseError,
  DomainError,
  FilesystemError,
  InvalidParameterError,
  LogicError,
  MissingParameterError,
  OffByOneError,
  ParameterError,
  ResourceError,
  RoundingError,
  RuntimeError,
  UnexpectedParameterError,
  UnexpectedResultError,
  ValidationError,
  ZeroDivisionError,

  MyCustomError,
]

// Describe the same tests for each custom error class.
test_error_types.forEach((TestErrorType) => {

  describe(`${TestErrorType.name} unit tests`, () => {

    /*

    We'll run all the tests twice. On the first run, we'll make the assumption
    that V8's proprietary Error.captureStackTrace API is available. On the
    second run, we'll temporarily delete the Error.captureStackTrace method,
    so we can test our own polyfill.

    */

    // Keep a reference to Error.captureStackTrace so we can restore it.
    const v8captureStackTrace = Error.captureStackTrace

    const booleans = [
      true,
      false,
    ]

    booleans.forEach((isCaptureStackTraceAvailable) => {
      const availability = isCaptureStackTraceAvailable ? 'available' : 'unavailable'

      describe(`given the captureStackTrace API is ${availability} in the browser`, () => {

        beforeEach(() => {
          if (!isCaptureStackTraceAvailable) {
            // @ts-ignore For the purpose of testing, we can safely ignore the TypeScript error
            // "the operand of a 'delete' operator must be optional".
            delete Error.captureStackTrace
          }
        })

        afterEach(() => {
          if (!isCaptureStackTraceAvailable) {
            Error.captureStackTrace = v8captureStackTrace
          }
        })

        describe('when an error is thrown with no message or captured error instance', () => {

          test('then the error should have valid name, message and stack properties', () => {
            const error = new TestErrorType()

            // toString() returns the first line of the stack trace.
            expect(error.toString()).toEqual(`${TestErrorType.name}`)

            expect(error.name).toEqual(TestErrorType.name)
            expect(error.message).toEqual('')

            expect(error).toBeInstanceOf(Error)
            expect(error).toBeInstanceOf(AbstractCustomError)
            expect(error).toBeInstanceOf(TestErrorType)
          })

        })

        describe('when only an error message is provided', () => {

          test('then the error should have valid name, message and stack properties', () => {
            const message = 'Error message'
            const error = new TestErrorType(message)

            // toString() returns the first line of the stack trace.
            expect(error.toString()).toEqual(`${TestErrorType.name}: ${message}`)

            expect(error.name).toEqual(TestErrorType.name)
            expect(error.message).toEqual(message)

            expect(error).toBeInstanceOf(Error)
            expect(error).toBeInstanceOf(AbstractCustomError)
            expect(error).toBeInstanceOf(TestErrorType)
          })

        })

        describe('when only the original captured error instance is provided', () => {

          test('then the error should have valid name and message properties, and a consolidated stack trace', () => {
            const original_message = 'Original error message'
            const original_error = new Error(original_message)

            const error = new TestErrorType(original_error)

            // toString() returns the first line of the stack trace.
            expect(error.toString()).toEqual(`${TestErrorType.name}: ${original_message}`)

            expect(error.name).toEqual(TestErrorType.name)
            expect(error.message).toEqual(original_message)
            // @ts-ignore Error.prototype.stack is non-standard and may not existing in non-V8 engines.
            expect(error.stack).toEqual(expect.stringContaining(original_error.stack))

            expect(error).toBeInstanceOf(Error)
            expect(error).toBeInstanceOf(AbstractCustomError)
            expect(error).toBeInstanceOf(TestErrorType)
          })

        })

        describe('when both an error message and the original captured error instance are provided', () => {

          test('then the error should have valid name and message properties, and a consolidated stack trace', () => {
            const original_message = 'Original error message'
            const original_error = new Error(original_message)

            const message = 'Replacement error message'
            const error = new TestErrorType(message, original_error)

            // toString() returns the first line of the stack trace.
            expect(error.toString()).toEqual(`${TestErrorType.name}: ${message}`)

            expect(error.name).toEqual(TestErrorType.name)
            expect(error.message).toEqual(message)
            // @ts-ignore Error.prototype.stack is non-standard and may not existing in non-V8 engines.
            expect(error.stack).toEqual(expect.stringContaining(original_error.stack))

            expect(error).toBeInstanceOf(Error)
            expect(error).toBeInstanceOf(AbstractCustomError)
            expect(error).toBeInstanceOf(TestErrorType)
          })

        })

      })

    })

  })

})
