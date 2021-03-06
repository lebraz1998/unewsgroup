
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model url
 * 
 */
export type url = {
  id: number
  title: string
  imgUrl: string | null
  created: number
  url: string
  tagID: number
}

/**
 * Model tag
 * 
 */
export type tag = {
  id: number
  title: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Urls
 * const urls = await prisma.url.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Urls
   * const urls = await prisma.url.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.url`: Exposes CRUD operations for the **url** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Urls
    * const urls = await prisma.url.findMany()
    * ```
    */
  get url(): Prisma.urlDelegate<GlobalReject>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.tagDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export import Metrics = runtime.Metrics
  export import Metric = runtime.Metric
  export import MetricHistogram = runtime.MetricHistogram
  export import MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
   * Prisma Client JS version: 4.0.0
   * Query Engine version: da41d2bb3406da22087b849f0e911199ba4fbf11
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    url: 'url',
    tag: 'tag'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TagCountOutputType
   */


  export type TagCountOutputType = {
    url: number
  }

  export type TagCountOutputTypeSelect = {
    url?: boolean
  }

  export type TagCountOutputTypeGetPayload<
    S extends boolean | null | undefined | TagCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? TagCountOutputType
    : S extends undefined
    ? never
    : S extends TagCountOutputTypeArgs
    ?'include' extends U
    ? TagCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof TagCountOutputType ? TagCountOutputType[P] : never
  } 
    : TagCountOutputType
  : TagCountOutputType




  // Custom InputTypes

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     * 
    **/
    select?: TagCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model url
   */


  export type AggregateUrl = {
    _count: UrlCountAggregateOutputType | null
    _avg: UrlAvgAggregateOutputType | null
    _sum: UrlSumAggregateOutputType | null
    _min: UrlMinAggregateOutputType | null
    _max: UrlMaxAggregateOutputType | null
  }

  export type UrlAvgAggregateOutputType = {
    id: number | null
    created: number | null
    tagID: number | null
  }

  export type UrlSumAggregateOutputType = {
    id: number | null
    created: number | null
    tagID: number | null
  }

  export type UrlMinAggregateOutputType = {
    id: number | null
    title: string | null
    imgUrl: string | null
    created: number | null
    url: string | null
    tagID: number | null
  }

  export type UrlMaxAggregateOutputType = {
    id: number | null
    title: string | null
    imgUrl: string | null
    created: number | null
    url: string | null
    tagID: number | null
  }

  export type UrlCountAggregateOutputType = {
    id: number
    title: number
    imgUrl: number
    created: number
    url: number
    tagID: number
    _all: number
  }


  export type UrlAvgAggregateInputType = {
    id?: true
    created?: true
    tagID?: true
  }

  export type UrlSumAggregateInputType = {
    id?: true
    created?: true
    tagID?: true
  }

  export type UrlMinAggregateInputType = {
    id?: true
    title?: true
    imgUrl?: true
    created?: true
    url?: true
    tagID?: true
  }

  export type UrlMaxAggregateInputType = {
    id?: true
    title?: true
    imgUrl?: true
    created?: true
    url?: true
    tagID?: true
  }

  export type UrlCountAggregateInputType = {
    id?: true
    title?: true
    imgUrl?: true
    created?: true
    url?: true
    tagID?: true
    _all?: true
  }

  export type UrlAggregateArgs = {
    /**
     * Filter which url to aggregate.
     * 
    **/
    where?: urlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of urls to fetch.
     * 
    **/
    orderBy?: Enumerable<urlOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: urlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` urls from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` urls.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned urls
    **/
    _count?: true | UrlCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UrlAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UrlSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UrlMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UrlMaxAggregateInputType
  }

  export type GetUrlAggregateType<T extends UrlAggregateArgs> = {
        [P in keyof T & keyof AggregateUrl]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUrl[P]>
      : GetScalarType<T[P], AggregateUrl[P]>
  }




  export type UrlGroupByArgs = {
    where?: urlWhereInput
    orderBy?: Enumerable<urlOrderByWithAggregationInput>
    by: Array<UrlScalarFieldEnum>
    having?: urlScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UrlCountAggregateInputType | true
    _avg?: UrlAvgAggregateInputType
    _sum?: UrlSumAggregateInputType
    _min?: UrlMinAggregateInputType
    _max?: UrlMaxAggregateInputType
  }


  export type UrlGroupByOutputType = {
    id: number
    title: string
    imgUrl: string | null
    created: number
    url: string
    tagID: number
    _count: UrlCountAggregateOutputType | null
    _avg: UrlAvgAggregateOutputType | null
    _sum: UrlSumAggregateOutputType | null
    _min: UrlMinAggregateOutputType | null
    _max: UrlMaxAggregateOutputType | null
  }

  type GetUrlGroupByPayload<T extends UrlGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UrlGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UrlGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UrlGroupByOutputType[P]>
            : GetScalarType<T[P], UrlGroupByOutputType[P]>
        }
      >
    >


  export type urlSelect = {
    id?: boolean
    title?: boolean
    imgUrl?: boolean
    created?: boolean
    url?: boolean
    tag?: boolean | tagArgs
    tagID?: boolean
  }

  export type urlInclude = {
    tag?: boolean | tagArgs
  }

  export type urlGetPayload<
    S extends boolean | null | undefined | urlArgs,
    U = keyof S
      > = S extends true
        ? url
    : S extends undefined
    ? never
    : S extends urlArgs | urlFindManyArgs
    ?'include' extends U
    ? url  & {
    [P in TrueKeys<S['include']>]:
        P extends 'tag' ? tagGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'tag' ? tagGetPayload<S['select'][P]> :  P extends keyof url ? url[P] : never
  } 
    : url
  : url


  type urlCountArgs = Merge<
    Omit<urlFindManyArgs, 'select' | 'include'> & {
      select?: UrlCountAggregateInputType | true
    }
  >

  export interface urlDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Url that matches the filter.
     * @param {urlFindUniqueArgs} args - Arguments to find a Url
     * @example
     * // Get one Url
     * const url = await prisma.url.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends urlFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, urlFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'url'> extends True ? CheckSelect<T, Prisma__urlClient<url>, Prisma__urlClient<urlGetPayload<T>>> : CheckSelect<T, Prisma__urlClient<url | null >, Prisma__urlClient<urlGetPayload<T> | null >>

    /**
     * Find the first Url that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {urlFindFirstArgs} args - Arguments to find a Url
     * @example
     * // Get one Url
     * const url = await prisma.url.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends urlFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, urlFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'url'> extends True ? CheckSelect<T, Prisma__urlClient<url>, Prisma__urlClient<urlGetPayload<T>>> : CheckSelect<T, Prisma__urlClient<url | null >, Prisma__urlClient<urlGetPayload<T> | null >>

    /**
     * Find zero or more Urls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {urlFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Urls
     * const urls = await prisma.url.findMany()
     * 
     * // Get first 10 Urls
     * const urls = await prisma.url.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const urlWithIdOnly = await prisma.url.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends urlFindManyArgs>(
      args?: SelectSubset<T, urlFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<url>>, PrismaPromise<Array<urlGetPayload<T>>>>

    /**
     * Create a Url.
     * @param {urlCreateArgs} args - Arguments to create a Url.
     * @example
     * // Create one Url
     * const Url = await prisma.url.create({
     *   data: {
     *     // ... data to create a Url
     *   }
     * })
     * 
    **/
    create<T extends urlCreateArgs>(
      args: SelectSubset<T, urlCreateArgs>
    ): CheckSelect<T, Prisma__urlClient<url>, Prisma__urlClient<urlGetPayload<T>>>

    /**
     * Delete a Url.
     * @param {urlDeleteArgs} args - Arguments to delete one Url.
     * @example
     * // Delete one Url
     * const Url = await prisma.url.delete({
     *   where: {
     *     // ... filter to delete one Url
     *   }
     * })
     * 
    **/
    delete<T extends urlDeleteArgs>(
      args: SelectSubset<T, urlDeleteArgs>
    ): CheckSelect<T, Prisma__urlClient<url>, Prisma__urlClient<urlGetPayload<T>>>

    /**
     * Update one Url.
     * @param {urlUpdateArgs} args - Arguments to update one Url.
     * @example
     * // Update one Url
     * const url = await prisma.url.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends urlUpdateArgs>(
      args: SelectSubset<T, urlUpdateArgs>
    ): CheckSelect<T, Prisma__urlClient<url>, Prisma__urlClient<urlGetPayload<T>>>

    /**
     * Delete zero or more Urls.
     * @param {urlDeleteManyArgs} args - Arguments to filter Urls to delete.
     * @example
     * // Delete a few Urls
     * const { count } = await prisma.url.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends urlDeleteManyArgs>(
      args?: SelectSubset<T, urlDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Urls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {urlUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Urls
     * const url = await prisma.url.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends urlUpdateManyArgs>(
      args: SelectSubset<T, urlUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Url.
     * @param {urlUpsertArgs} args - Arguments to update or create a Url.
     * @example
     * // Update or create a Url
     * const url = await prisma.url.upsert({
     *   create: {
     *     // ... data to create a Url
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Url we want to update
     *   }
     * })
    **/
    upsert<T extends urlUpsertArgs>(
      args: SelectSubset<T, urlUpsertArgs>
    ): CheckSelect<T, Prisma__urlClient<url>, Prisma__urlClient<urlGetPayload<T>>>

    /**
     * Find one Url that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {urlFindUniqueOrThrowArgs} args - Arguments to find a Url
     * @example
     * // Get one Url
     * const url = await prisma.url.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends urlFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, urlFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__urlClient<url>, Prisma__urlClient<urlGetPayload<T>>>

    /**
     * Find the first Url that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {urlFindFirstOrThrowArgs} args - Arguments to find a Url
     * @example
     * // Get one Url
     * const url = await prisma.url.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends urlFindFirstOrThrowArgs>(
      args?: SelectSubset<T, urlFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__urlClient<url>, Prisma__urlClient<urlGetPayload<T>>>

    /**
     * Count the number of Urls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {urlCountArgs} args - Arguments to filter Urls to count.
     * @example
     * // Count the number of Urls
     * const count = await prisma.url.count({
     *   where: {
     *     // ... the filter for the Urls we want to count
     *   }
     * })
    **/
    count<T extends urlCountArgs>(
      args?: Subset<T, urlCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UrlCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Url.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UrlAggregateArgs>(args: Subset<T, UrlAggregateArgs>): PrismaPromise<GetUrlAggregateType<T>>

    /**
     * Group by Url.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UrlGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UrlGroupByArgs['orderBy'] }
        : { orderBy?: UrlGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UrlGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUrlGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for url.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__urlClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    tag<T extends tagArgs = {}>(args?: Subset<T, tagArgs>): CheckSelect<T, Prisma__tagClient<tag | null >, Prisma__tagClient<tagGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * url base type for findUnique actions
   */
  export type urlFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the url
     * 
    **/
    select?: urlSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: urlInclude | null
    /**
     * Filter, which url to fetch.
     * 
    **/
    where: urlWhereUniqueInput
  }

  /**
   * url: findUnique
   */
  export interface urlFindUniqueArgs extends urlFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * url base type for findFirst actions
   */
  export type urlFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the url
     * 
    **/
    select?: urlSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: urlInclude | null
    /**
     * Filter, which url to fetch.
     * 
    **/
    where?: urlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of urls to fetch.
     * 
    **/
    orderBy?: Enumerable<urlOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for urls.
     * 
    **/
    cursor?: urlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` urls from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` urls.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of urls.
     * 
    **/
    distinct?: Enumerable<UrlScalarFieldEnum>
  }

  /**
   * url: findFirst
   */
  export interface urlFindFirstArgs extends urlFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * url findMany
   */
  export type urlFindManyArgs = {
    /**
     * Select specific fields to fetch from the url
     * 
    **/
    select?: urlSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: urlInclude | null
    /**
     * Filter, which urls to fetch.
     * 
    **/
    where?: urlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of urls to fetch.
     * 
    **/
    orderBy?: Enumerable<urlOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing urls.
     * 
    **/
    cursor?: urlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` urls from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` urls.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UrlScalarFieldEnum>
  }


  /**
   * url create
   */
  export type urlCreateArgs = {
    /**
     * Select specific fields to fetch from the url
     * 
    **/
    select?: urlSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: urlInclude | null
    /**
     * The data needed to create a url.
     * 
    **/
    data: XOR<urlCreateInput, urlUncheckedCreateInput>
  }


  /**
   * url update
   */
  export type urlUpdateArgs = {
    /**
     * Select specific fields to fetch from the url
     * 
    **/
    select?: urlSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: urlInclude | null
    /**
     * The data needed to update a url.
     * 
    **/
    data: XOR<urlUpdateInput, urlUncheckedUpdateInput>
    /**
     * Choose, which url to update.
     * 
    **/
    where: urlWhereUniqueInput
  }


  /**
   * url updateMany
   */
  export type urlUpdateManyArgs = {
    /**
     * The data used to update urls.
     * 
    **/
    data: XOR<urlUpdateManyMutationInput, urlUncheckedUpdateManyInput>
    /**
     * Filter which urls to update
     * 
    **/
    where?: urlWhereInput
  }


  /**
   * url upsert
   */
  export type urlUpsertArgs = {
    /**
     * Select specific fields to fetch from the url
     * 
    **/
    select?: urlSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: urlInclude | null
    /**
     * The filter to search for the url to update in case it exists.
     * 
    **/
    where: urlWhereUniqueInput
    /**
     * In case the url found by the `where` argument doesn't exist, create a new url with this data.
     * 
    **/
    create: XOR<urlCreateInput, urlUncheckedCreateInput>
    /**
     * In case the url was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<urlUpdateInput, urlUncheckedUpdateInput>
  }


  /**
   * url delete
   */
  export type urlDeleteArgs = {
    /**
     * Select specific fields to fetch from the url
     * 
    **/
    select?: urlSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: urlInclude | null
    /**
     * Filter which url to delete.
     * 
    **/
    where: urlWhereUniqueInput
  }


  /**
   * url deleteMany
   */
  export type urlDeleteManyArgs = {
    /**
     * Filter which urls to delete
     * 
    **/
    where?: urlWhereInput
  }


  /**
   * url: findUniqueOrThrow
   */
  export type urlFindUniqueOrThrowArgs = urlFindUniqueArgsBase
      

  /**
   * url: findFirstOrThrow
   */
  export type urlFindFirstOrThrowArgs = urlFindFirstArgsBase
      

  /**
   * url without action
   */
  export type urlArgs = {
    /**
     * Select specific fields to fetch from the url
     * 
    **/
    select?: urlSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: urlInclude | null
  }



  /**
   * Model tag
   */


  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagAvgAggregateOutputType = {
    id: number | null
  }

  export type TagSumAggregateOutputType = {
    id: number | null
  }

  export type TagMinAggregateOutputType = {
    id: number | null
    title: string | null
  }

  export type TagMaxAggregateOutputType = {
    id: number | null
    title: string | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    title: number
    _all: number
  }


  export type TagAvgAggregateInputType = {
    id?: true
  }

  export type TagSumAggregateInputType = {
    id?: true
  }

  export type TagMinAggregateInputType = {
    id?: true
    title?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    title?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    title?: true
    _all?: true
  }

  export type TagAggregateArgs = {
    /**
     * Filter which tag to aggregate.
     * 
    **/
    where?: tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     * 
    **/
    orderBy?: Enumerable<tagOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs = {
    where?: tagWhereInput
    orderBy?: Enumerable<tagOrderByWithAggregationInput>
    by: Array<TagScalarFieldEnum>
    having?: tagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _avg?: TagAvgAggregateInputType
    _sum?: TagSumAggregateInputType
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }


  export type TagGroupByOutputType = {
    id: number
    title: string
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = PrismaPromise<
    Array<
      PickArray<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type tagSelect = {
    id?: boolean
    title?: boolean
    url?: boolean | urlFindManyArgs
    _count?: boolean | TagCountOutputTypeArgs
  }

  export type tagInclude = {
    url?: boolean | urlFindManyArgs
    _count?: boolean | TagCountOutputTypeArgs
  }

  export type tagGetPayload<
    S extends boolean | null | undefined | tagArgs,
    U = keyof S
      > = S extends true
        ? tag
    : S extends undefined
    ? never
    : S extends tagArgs | tagFindManyArgs
    ?'include' extends U
    ? tag  & {
    [P in TrueKeys<S['include']>]:
        P extends 'url' ? Array < urlGetPayload<S['include'][P]>>  :
        P extends '_count' ? TagCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'url' ? Array < urlGetPayload<S['select'][P]>>  :
        P extends '_count' ? TagCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof tag ? tag[P] : never
  } 
    : tag
  : tag


  type tagCountArgs = Merge<
    Omit<tagFindManyArgs, 'select' | 'include'> & {
      select?: TagCountAggregateInputType | true
    }
  >

  export interface tagDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Tag that matches the filter.
     * @param {tagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends tagFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, tagFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'tag'> extends True ? CheckSelect<T, Prisma__tagClient<tag>, Prisma__tagClient<tagGetPayload<T>>> : CheckSelect<T, Prisma__tagClient<tag | null >, Prisma__tagClient<tagGetPayload<T> | null >>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends tagFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, tagFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'tag'> extends True ? CheckSelect<T, Prisma__tagClient<tag>, Prisma__tagClient<tagGetPayload<T>>> : CheckSelect<T, Prisma__tagClient<tag | null >, Prisma__tagClient<tagGetPayload<T> | null >>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends tagFindManyArgs>(
      args?: SelectSubset<T, tagFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<tag>>, PrismaPromise<Array<tagGetPayload<T>>>>

    /**
     * Create a Tag.
     * @param {tagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
    **/
    create<T extends tagCreateArgs>(
      args: SelectSubset<T, tagCreateArgs>
    ): CheckSelect<T, Prisma__tagClient<tag>, Prisma__tagClient<tagGetPayload<T>>>

    /**
     * Delete a Tag.
     * @param {tagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
    **/
    delete<T extends tagDeleteArgs>(
      args: SelectSubset<T, tagDeleteArgs>
    ): CheckSelect<T, Prisma__tagClient<tag>, Prisma__tagClient<tagGetPayload<T>>>

    /**
     * Update one Tag.
     * @param {tagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends tagUpdateArgs>(
      args: SelectSubset<T, tagUpdateArgs>
    ): CheckSelect<T, Prisma__tagClient<tag>, Prisma__tagClient<tagGetPayload<T>>>

    /**
     * Delete zero or more Tags.
     * @param {tagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends tagDeleteManyArgs>(
      args?: SelectSubset<T, tagDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends tagUpdateManyArgs>(
      args: SelectSubset<T, tagUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Tag.
     * @param {tagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
    **/
    upsert<T extends tagUpsertArgs>(
      args: SelectSubset<T, tagUpsertArgs>
    ): CheckSelect<T, Prisma__tagClient<tag>, Prisma__tagClient<tagGetPayload<T>>>

    /**
     * Find one Tag that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {tagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends tagFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, tagFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__tagClient<tag>, Prisma__tagClient<tagGetPayload<T>>>

    /**
     * Find the first Tag that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends tagFindFirstOrThrowArgs>(
      args?: SelectSubset<T, tagFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__tagClient<tag>, Prisma__tagClient<tagGetPayload<T>>>

    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends tagCountArgs>(
      args?: Subset<T, tagCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__tagClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    url<T extends urlFindManyArgs = {}>(args?: Subset<T, urlFindManyArgs>): CheckSelect<T, PrismaPromise<Array<url>>, PrismaPromise<Array<urlGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * tag base type for findUnique actions
   */
  export type tagFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the tag
     * 
    **/
    select?: tagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: tagInclude | null
    /**
     * Filter, which tag to fetch.
     * 
    **/
    where: tagWhereUniqueInput
  }

  /**
   * tag: findUnique
   */
  export interface tagFindUniqueArgs extends tagFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * tag base type for findFirst actions
   */
  export type tagFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the tag
     * 
    **/
    select?: tagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: tagInclude | null
    /**
     * Filter, which tag to fetch.
     * 
    **/
    where?: tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     * 
    **/
    orderBy?: Enumerable<tagOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tags.
     * 
    **/
    cursor?: tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tags.
     * 
    **/
    distinct?: Enumerable<TagScalarFieldEnum>
  }

  /**
   * tag: findFirst
   */
  export interface tagFindFirstArgs extends tagFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * tag findMany
   */
  export type tagFindManyArgs = {
    /**
     * Select specific fields to fetch from the tag
     * 
    **/
    select?: tagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: tagInclude | null
    /**
     * Filter, which tags to fetch.
     * 
    **/
    where?: tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     * 
    **/
    orderBy?: Enumerable<tagOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tags.
     * 
    **/
    cursor?: tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     * 
    **/
    skip?: number
    distinct?: Enumerable<TagScalarFieldEnum>
  }


  /**
   * tag create
   */
  export type tagCreateArgs = {
    /**
     * Select specific fields to fetch from the tag
     * 
    **/
    select?: tagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: tagInclude | null
    /**
     * The data needed to create a tag.
     * 
    **/
    data: XOR<tagCreateInput, tagUncheckedCreateInput>
  }


  /**
   * tag update
   */
  export type tagUpdateArgs = {
    /**
     * Select specific fields to fetch from the tag
     * 
    **/
    select?: tagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: tagInclude | null
    /**
     * The data needed to update a tag.
     * 
    **/
    data: XOR<tagUpdateInput, tagUncheckedUpdateInput>
    /**
     * Choose, which tag to update.
     * 
    **/
    where: tagWhereUniqueInput
  }


  /**
   * tag updateMany
   */
  export type tagUpdateManyArgs = {
    /**
     * The data used to update tags.
     * 
    **/
    data: XOR<tagUpdateManyMutationInput, tagUncheckedUpdateManyInput>
    /**
     * Filter which tags to update
     * 
    **/
    where?: tagWhereInput
  }


  /**
   * tag upsert
   */
  export type tagUpsertArgs = {
    /**
     * Select specific fields to fetch from the tag
     * 
    **/
    select?: tagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: tagInclude | null
    /**
     * The filter to search for the tag to update in case it exists.
     * 
    **/
    where: tagWhereUniqueInput
    /**
     * In case the tag found by the `where` argument doesn't exist, create a new tag with this data.
     * 
    **/
    create: XOR<tagCreateInput, tagUncheckedCreateInput>
    /**
     * In case the tag was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<tagUpdateInput, tagUncheckedUpdateInput>
  }


  /**
   * tag delete
   */
  export type tagDeleteArgs = {
    /**
     * Select specific fields to fetch from the tag
     * 
    **/
    select?: tagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: tagInclude | null
    /**
     * Filter which tag to delete.
     * 
    **/
    where: tagWhereUniqueInput
  }


  /**
   * tag deleteMany
   */
  export type tagDeleteManyArgs = {
    /**
     * Filter which tags to delete
     * 
    **/
    where?: tagWhereInput
  }


  /**
   * tag: findUniqueOrThrow
   */
  export type tagFindUniqueOrThrowArgs = tagFindUniqueArgsBase
      

  /**
   * tag: findFirstOrThrow
   */
  export type tagFindFirstOrThrowArgs = tagFindFirstArgsBase
      

  /**
   * tag without action
   */
  export type tagArgs = {
    /**
     * Select specific fields to fetch from the tag
     * 
    **/
    select?: tagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: tagInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const UrlScalarFieldEnum: {
    id: 'id',
    title: 'title',
    imgUrl: 'imgUrl',
    created: 'created',
    url: 'url',
    tagID: 'tagID'
  };

  export type UrlScalarFieldEnum = (typeof UrlScalarFieldEnum)[keyof typeof UrlScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    title: 'title'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Deep Input Types
   */


  export type urlWhereInput = {
    AND?: Enumerable<urlWhereInput>
    OR?: Enumerable<urlWhereInput>
    NOT?: Enumerable<urlWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    imgUrl?: StringNullableFilter | string | null
    created?: FloatFilter | number
    url?: StringFilter | string
    tag?: XOR<TagRelationFilter, tagWhereInput>
    tagID?: IntFilter | number
  }

  export type urlOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    imgUrl?: SortOrder
    created?: SortOrder
    url?: SortOrder
    tag?: tagOrderByWithRelationInput
    tagID?: SortOrder
  }

  export type urlWhereUniqueInput = {
    id?: number
    title?: string
    url?: string
  }

  export type urlOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    imgUrl?: SortOrder
    created?: SortOrder
    url?: SortOrder
    tagID?: SortOrder
    _count?: urlCountOrderByAggregateInput
    _avg?: urlAvgOrderByAggregateInput
    _max?: urlMaxOrderByAggregateInput
    _min?: urlMinOrderByAggregateInput
    _sum?: urlSumOrderByAggregateInput
  }

  export type urlScalarWhereWithAggregatesInput = {
    AND?: Enumerable<urlScalarWhereWithAggregatesInput>
    OR?: Enumerable<urlScalarWhereWithAggregatesInput>
    NOT?: Enumerable<urlScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    title?: StringWithAggregatesFilter | string
    imgUrl?: StringNullableWithAggregatesFilter | string | null
    created?: FloatWithAggregatesFilter | number
    url?: StringWithAggregatesFilter | string
    tagID?: IntWithAggregatesFilter | number
  }

  export type tagWhereInput = {
    AND?: Enumerable<tagWhereInput>
    OR?: Enumerable<tagWhereInput>
    NOT?: Enumerable<tagWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    url?: UrlListRelationFilter
  }

  export type tagOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    url?: urlOrderByRelationAggregateInput
  }

  export type tagWhereUniqueInput = {
    id?: number
    title?: string
  }

  export type tagOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    _count?: tagCountOrderByAggregateInput
    _avg?: tagAvgOrderByAggregateInput
    _max?: tagMaxOrderByAggregateInput
    _min?: tagMinOrderByAggregateInput
    _sum?: tagSumOrderByAggregateInput
  }

  export type tagScalarWhereWithAggregatesInput = {
    AND?: Enumerable<tagScalarWhereWithAggregatesInput>
    OR?: Enumerable<tagScalarWhereWithAggregatesInput>
    NOT?: Enumerable<tagScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    title?: StringWithAggregatesFilter | string
  }

  export type urlCreateInput = {
    title: string
    imgUrl?: string | null
    created: number
    url: string
    tag?: tagCreateNestedOneWithoutUrlInput
  }

  export type urlUncheckedCreateInput = {
    id?: number
    title: string
    imgUrl?: string | null
    created: number
    url: string
    tagID?: number
  }

  export type urlUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: FloatFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    tag?: tagUpdateOneRequiredWithoutUrlNestedInput
  }

  export type urlUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: FloatFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    tagID?: IntFieldUpdateOperationsInput | number
  }

  export type urlUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: FloatFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type urlUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: FloatFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    tagID?: IntFieldUpdateOperationsInput | number
  }

  export type tagCreateInput = {
    title: string
    url?: urlCreateNestedManyWithoutTagInput
  }

  export type tagUncheckedCreateInput = {
    id?: number
    title: string
    url?: urlUncheckedCreateNestedManyWithoutTagInput
  }

  export type tagUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    url?: urlUpdateManyWithoutTagNestedInput
  }

  export type tagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    url?: urlUncheckedUpdateManyWithoutTagNestedInput
  }

  export type tagUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
  }

  export type tagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type FloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type TagRelationFilter = {
    is?: tagWhereInput
    isNot?: tagWhereInput
  }

  export type urlCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    imgUrl?: SortOrder
    created?: SortOrder
    url?: SortOrder
    tagID?: SortOrder
  }

  export type urlAvgOrderByAggregateInput = {
    id?: SortOrder
    created?: SortOrder
    tagID?: SortOrder
  }

  export type urlMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    imgUrl?: SortOrder
    created?: SortOrder
    url?: SortOrder
    tagID?: SortOrder
  }

  export type urlMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    imgUrl?: SortOrder
    created?: SortOrder
    url?: SortOrder
    tagID?: SortOrder
  }

  export type urlSumOrderByAggregateInput = {
    id?: SortOrder
    created?: SortOrder
    tagID?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type FloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type UrlListRelationFilter = {
    every?: urlWhereInput
    some?: urlWhereInput
    none?: urlWhereInput
  }

  export type urlOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tagCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type tagAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tagMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type tagMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type tagSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tagCreateNestedOneWithoutUrlInput = {
    create?: XOR<tagCreateWithoutUrlInput, tagUncheckedCreateWithoutUrlInput>
    connectOrCreate?: tagCreateOrConnectWithoutUrlInput
    connect?: tagWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type tagUpdateOneRequiredWithoutUrlNestedInput = {
    create?: XOR<tagCreateWithoutUrlInput, tagUncheckedCreateWithoutUrlInput>
    connectOrCreate?: tagCreateOrConnectWithoutUrlInput
    upsert?: tagUpsertWithoutUrlInput
    connect?: tagWhereUniqueInput
    update?: XOR<tagUpdateWithoutUrlInput, tagUncheckedUpdateWithoutUrlInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type urlCreateNestedManyWithoutTagInput = {
    create?: XOR<Enumerable<urlCreateWithoutTagInput>, Enumerable<urlUncheckedCreateWithoutTagInput>>
    connectOrCreate?: Enumerable<urlCreateOrConnectWithoutTagInput>
    connect?: Enumerable<urlWhereUniqueInput>
  }

  export type urlUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<Enumerable<urlCreateWithoutTagInput>, Enumerable<urlUncheckedCreateWithoutTagInput>>
    connectOrCreate?: Enumerable<urlCreateOrConnectWithoutTagInput>
    connect?: Enumerable<urlWhereUniqueInput>
  }

  export type urlUpdateManyWithoutTagNestedInput = {
    create?: XOR<Enumerable<urlCreateWithoutTagInput>, Enumerable<urlUncheckedCreateWithoutTagInput>>
    connectOrCreate?: Enumerable<urlCreateOrConnectWithoutTagInput>
    upsert?: Enumerable<urlUpsertWithWhereUniqueWithoutTagInput>
    set?: Enumerable<urlWhereUniqueInput>
    disconnect?: Enumerable<urlWhereUniqueInput>
    delete?: Enumerable<urlWhereUniqueInput>
    connect?: Enumerable<urlWhereUniqueInput>
    update?: Enumerable<urlUpdateWithWhereUniqueWithoutTagInput>
    updateMany?: Enumerable<urlUpdateManyWithWhereWithoutTagInput>
    deleteMany?: Enumerable<urlScalarWhereInput>
  }

  export type urlUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<Enumerable<urlCreateWithoutTagInput>, Enumerable<urlUncheckedCreateWithoutTagInput>>
    connectOrCreate?: Enumerable<urlCreateOrConnectWithoutTagInput>
    upsert?: Enumerable<urlUpsertWithWhereUniqueWithoutTagInput>
    set?: Enumerable<urlWhereUniqueInput>
    disconnect?: Enumerable<urlWhereUniqueInput>
    delete?: Enumerable<urlWhereUniqueInput>
    connect?: Enumerable<urlWhereUniqueInput>
    update?: Enumerable<urlUpdateWithWhereUniqueWithoutTagInput>
    updateMany?: Enumerable<urlUpdateManyWithWhereWithoutTagInput>
    deleteMany?: Enumerable<urlScalarWhereInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedFloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type tagCreateWithoutUrlInput = {
    title: string
  }

  export type tagUncheckedCreateWithoutUrlInput = {
    id?: number
    title: string
  }

  export type tagCreateOrConnectWithoutUrlInput = {
    where: tagWhereUniqueInput
    create: XOR<tagCreateWithoutUrlInput, tagUncheckedCreateWithoutUrlInput>
  }

  export type tagUpsertWithoutUrlInput = {
    update: XOR<tagUpdateWithoutUrlInput, tagUncheckedUpdateWithoutUrlInput>
    create: XOR<tagCreateWithoutUrlInput, tagUncheckedCreateWithoutUrlInput>
  }

  export type tagUpdateWithoutUrlInput = {
    title?: StringFieldUpdateOperationsInput | string
  }

  export type tagUncheckedUpdateWithoutUrlInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
  }

  export type urlCreateWithoutTagInput = {
    title: string
    imgUrl?: string | null
    created: number
    url: string
  }

  export type urlUncheckedCreateWithoutTagInput = {
    id?: number
    title: string
    imgUrl?: string | null
    created: number
    url: string
  }

  export type urlCreateOrConnectWithoutTagInput = {
    where: urlWhereUniqueInput
    create: XOR<urlCreateWithoutTagInput, urlUncheckedCreateWithoutTagInput>
  }

  export type urlUpsertWithWhereUniqueWithoutTagInput = {
    where: urlWhereUniqueInput
    update: XOR<urlUpdateWithoutTagInput, urlUncheckedUpdateWithoutTagInput>
    create: XOR<urlCreateWithoutTagInput, urlUncheckedCreateWithoutTagInput>
  }

  export type urlUpdateWithWhereUniqueWithoutTagInput = {
    where: urlWhereUniqueInput
    data: XOR<urlUpdateWithoutTagInput, urlUncheckedUpdateWithoutTagInput>
  }

  export type urlUpdateManyWithWhereWithoutTagInput = {
    where: urlScalarWhereInput
    data: XOR<urlUpdateManyMutationInput, urlUncheckedUpdateManyWithoutUrlInput>
  }

  export type urlScalarWhereInput = {
    AND?: Enumerable<urlScalarWhereInput>
    OR?: Enumerable<urlScalarWhereInput>
    NOT?: Enumerable<urlScalarWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    imgUrl?: StringNullableFilter | string | null
    created?: FloatFilter | number
    url?: StringFilter | string
    tagID?: IntFilter | number
  }

  export type urlUpdateWithoutTagInput = {
    title?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: FloatFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type urlUncheckedUpdateWithoutTagInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: FloatFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type urlUncheckedUpdateManyWithoutUrlInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    created?: FloatFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}