import { expectType } from '../../_/framework'

import {
  AbstractCustomError,
  ArithmeticError,
  ZeroDivisionError,
} from '../../../dist/lib/errors'

class MyCustomError extends AbstractCustomError {}

let error: Error

error = new ArithmeticError()
expectType<Error>(error)
expectType<AbstractCustomError>(error)

expectType<string>(error.toString())
expectType<string>(error.name)
expectType<string>(error.message)

error = new ZeroDivisionError()
expectType<Error>(error)
expectType<AbstractCustomError>(error)
expectType<string>(error.toString())
expectType<string>(error.name)
expectType<string>(error.message)

error = new MyCustomError()
expectType<Error>(error)
expectType<AbstractCustomError>(error)
expectType<string>(error.toString())
expectType<string>(error.name)
expectType<string>(error.message)
