/* eslint-disable @typescript-eslint/no-wrapper-object-types */
/* eslint-disable @typescript-eslint/no-unsafe-function-type */
/* eslint-disable @typescript-eslint/no-unnecessary-type-constraint */
/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Client
 **/

import * as runtime from "./runtime/library.js";
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model CarUnit
 *
 */
export type CarUnit = $Result.DefaultSelection<Prisma.$CarUnitPayload>;
/**
 * Model Car
 *
 */
export type Car = $Result.DefaultSelection<Prisma.$CarPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more CarUnits
 * const carUnits = await prisma.carUnit.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = "log" extends keyof ClientOptions
    ? ClientOptions["log"] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions["log"]>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>["other"] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more CarUnits
   * const carUnits = await prisma.carUnit.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends "query" ? Prisma.QueryEvent : Prisma.LogEvent
    ) => void
  ): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel }
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    }
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    "extends",
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.carUnit`: Exposes CRUD operations for the **CarUnit** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more CarUnits
   * const carUnits = await prisma.carUnit.findMany()
   * ```
   */
  get carUnit(): Prisma.CarUnitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.car`: Exposes CRUD operations for the **Car** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Cars
   * const cars = await prisma.car.findMany()
   * ```
   */
  get car(): Prisma.CarDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<
    infer U
  >
    ? U
    : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? "Please either choose `select` or `include`."
    : T extends SelectAndOmit
    ? "Please either choose `select` or `omit`."
    : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, "_avg" | "_sum" | "_count" | "_min" | "_max">
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<"OR", K>, Extends<"AND", K>>,
      Extends<"NOT", K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    CarUnit: "CarUnit";
    Car: "Car";
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb<ClientOptions = {}>
    extends $Utils.Fn<
      { extArgs: $Extensions.InternalArgs },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<
      this["params"]["extArgs"],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps: "carUnit" | "car";
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      CarUnit: {
        payload: Prisma.$CarUnitPayload<ExtArgs>;
        fields: Prisma.CarUnitFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CarUnitFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarUnitPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CarUnitFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarUnitPayload>;
          };
          findFirst: {
            args: Prisma.CarUnitFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarUnitPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.CarUnitFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarUnitPayload>;
          };
          findMany: {
            args: Prisma.CarUnitFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarUnitPayload>[];
          };
          create: {
            args: Prisma.CarUnitCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarUnitPayload>;
          };
          createMany: {
            args: Prisma.CarUnitCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.CarUnitCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarUnitPayload>[];
          };
          delete: {
            args: Prisma.CarUnitDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarUnitPayload>;
          };
          update: {
            args: Prisma.CarUnitUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarUnitPayload>;
          };
          deleteMany: {
            args: Prisma.CarUnitDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.CarUnitUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.CarUnitUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarUnitPayload>[];
          };
          upsert: {
            args: Prisma.CarUnitUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarUnitPayload>;
          };
          aggregate: {
            args: Prisma.CarUnitAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCarUnit>;
          };
          groupBy: {
            args: Prisma.CarUnitGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CarUnitGroupByOutputType>[];
          };
          count: {
            args: Prisma.CarUnitCountArgs<ExtArgs>;
            result: $Utils.Optional<CarUnitCountAggregateOutputType> | number;
          };
        };
      };
      Car: {
        payload: Prisma.$CarPayload<ExtArgs>;
        fields: Prisma.CarFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CarFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CarFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarPayload>;
          };
          findFirst: {
            args: Prisma.CarFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.CarFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarPayload>;
          };
          findMany: {
            args: Prisma.CarFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarPayload>[];
          };
          create: {
            args: Prisma.CarCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarPayload>;
          };
          createMany: {
            args: Prisma.CarCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.CarCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarPayload>[];
          };
          delete: {
            args: Prisma.CarDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarPayload>;
          };
          update: {
            args: Prisma.CarUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarPayload>;
          };
          deleteMany: {
            args: Prisma.CarDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.CarUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.CarUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarPayload>[];
          };
          upsert: {
            args: Prisma.CarUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarPayload>;
          };
          aggregate: {
            args: Prisma.CarAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCar>;
          };
          groupBy: {
            args: Prisma.CarGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CarGroupByOutputType>[];
          };
          count: {
            args: Prisma.CarCountArgs<ExtArgs>;
            result: $Utils.Optional<CarCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    "define",
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = "pretty" | "colorless" | "minimal";
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig;
  }
  export type GlobalOmitConfig = {
    carUnit?: CarUnitOmit;
    car?: CarOmit;
  };

  /* Types for Logging */
  export type LogLevel = "info" | "query" | "warn" | "error";
  export type LogDefinition = {
    level: LogLevel;
    emit: "stdout" | "event";
  };

  export type GetLogType<T extends LogLevel | LogDefinition> =
    T extends LogDefinition
      ? T["emit"] extends "event"
        ? T["level"]
        : never
      : never;
  export type GetEvents<T extends any> = T extends Array<
    LogLevel | LogDefinition
  >
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | "findUnique"
    | "findUniqueOrThrow"
    | "findMany"
    | "findFirst"
    | "findFirstOrThrow"
    | "create"
    | "createMany"
    | "createManyAndReturn"
    | "update"
    | "updateMany"
    | "updateManyAndReturn"
    | "upsert"
    | "delete"
    | "deleteMany"
    | "executeRaw"
    | "queryRaw"
    | "aggregate"
    | "count"
    | "runCommandRaw"
    | "findRaw"
    | "groupBy";

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type CarUnitCountOutputType
   */

  export type CarUnitCountOutputType = {
    cars: number;
  };

  export type CarUnitCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    cars?: boolean | CarUnitCountOutputTypeCountCarsArgs;
  };

  // Custom InputTypes
  /**
   * CarUnitCountOutputType without action
   */
  export type CarUnitCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the CarUnitCountOutputType
     */
    select?: CarUnitCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CarUnitCountOutputType without action
   */
  export type CarUnitCountOutputTypeCountCarsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: CarWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model CarUnit
   */

  export type AggregateCarUnit = {
    _count: CarUnitCountAggregateOutputType | null;
    _avg: CarUnitAvgAggregateOutputType | null;
    _sum: CarUnitSumAggregateOutputType | null;
    _min: CarUnitMinAggregateOutputType | null;
    _max: CarUnitMaxAggregateOutputType | null;
  };

  export type CarUnitAvgAggregateOutputType = {
    year: number | null;
  };

  export type CarUnitSumAggregateOutputType = {
    year: number | null;
  };

  export type CarUnitMinAggregateOutputType = {
    id: string | null;
    make: string | null;
    unitModel: string | null;
    year: number | null;
    engine: string | null;
    category: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type CarUnitMaxAggregateOutputType = {
    id: string | null;
    make: string | null;
    unitModel: string | null;
    year: number | null;
    engine: string | null;
    category: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type CarUnitCountAggregateOutputType = {
    id: number;
    make: number;
    unitModel: number;
    year: number;
    engine: number;
    category: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type CarUnitAvgAggregateInputType = {
    year?: true;
  };

  export type CarUnitSumAggregateInputType = {
    year?: true;
  };

  export type CarUnitMinAggregateInputType = {
    id?: true;
    make?: true;
    unitModel?: true;
    year?: true;
    engine?: true;
    category?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type CarUnitMaxAggregateInputType = {
    id?: true;
    make?: true;
    unitModel?: true;
    year?: true;
    engine?: true;
    category?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type CarUnitCountAggregateInputType = {
    id?: true;
    make?: true;
    unitModel?: true;
    year?: true;
    engine?: true;
    category?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type CarUnitAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which CarUnit to aggregate.
     */
    where?: CarUnitWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CarUnits to fetch.
     */
    orderBy?:
      | CarUnitOrderByWithRelationInput
      | CarUnitOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CarUnitWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CarUnits from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CarUnits.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned CarUnits
     **/
    _count?: true | CarUnitCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: CarUnitAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: CarUnitSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CarUnitMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CarUnitMaxAggregateInputType;
  };

  export type GetCarUnitAggregateType<T extends CarUnitAggregateArgs> = {
    [P in keyof T & keyof AggregateCarUnit]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarUnit[P]>
      : GetScalarType<T[P], AggregateCarUnit[P]>;
  };

  export type CarUnitGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: CarUnitWhereInput;
    orderBy?:
      | CarUnitOrderByWithAggregationInput
      | CarUnitOrderByWithAggregationInput[];
    by: CarUnitScalarFieldEnum[] | CarUnitScalarFieldEnum;
    having?: CarUnitScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CarUnitCountAggregateInputType | true;
    _avg?: CarUnitAvgAggregateInputType;
    _sum?: CarUnitSumAggregateInputType;
    _min?: CarUnitMinAggregateInputType;
    _max?: CarUnitMaxAggregateInputType;
  };

  export type CarUnitGroupByOutputType = {
    id: string;
    make: string;
    unitModel: string;
    year: number;
    engine: string;
    category: string;
    createdAt: Date;
    updatedAt: Date;
    _count: CarUnitCountAggregateOutputType | null;
    _avg: CarUnitAvgAggregateOutputType | null;
    _sum: CarUnitSumAggregateOutputType | null;
    _min: CarUnitMinAggregateOutputType | null;
    _max: CarUnitMaxAggregateOutputType | null;
  };

  type GetCarUnitGroupByPayload<T extends CarUnitGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<CarUnitGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof CarUnitGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarUnitGroupByOutputType[P]>
            : GetScalarType<T[P], CarUnitGroupByOutputType[P]>;
        }
      >
    >;

  export type CarUnitSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      make?: boolean;
      unitModel?: boolean;
      year?: boolean;
      engine?: boolean;
      category?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      cars?: boolean | CarUnit$carsArgs<ExtArgs>;
      _count?: boolean | CarUnitCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["carUnit"]
  >;

  export type CarUnitSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      make?: boolean;
      unitModel?: boolean;
      year?: boolean;
      engine?: boolean;
      category?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs["result"]["carUnit"]
  >;

  export type CarUnitSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      make?: boolean;
      unitModel?: boolean;
      year?: boolean;
      engine?: boolean;
      category?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs["result"]["carUnit"]
  >;

  export type CarUnitSelectScalar = {
    id?: boolean;
    make?: boolean;
    unitModel?: boolean;
    year?: boolean;
    engine?: boolean;
    category?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type CarUnitOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetOmit<
    | "id"
    | "make"
    | "unitModel"
    | "year"
    | "engine"
    | "category"
    | "createdAt"
    | "updatedAt",
    ExtArgs["result"]["carUnit"]
  >;
  export type CarUnitInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    cars?: boolean | CarUnit$carsArgs<ExtArgs>;
    _count?: boolean | CarUnitCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type CarUnitIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {};
  export type CarUnitIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {};

  export type $CarUnitPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: "CarUnit";
    objects: {
      cars: Prisma.$CarPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        make: string;
        unitModel: string;
        year: number;
        engine: string;
        category: string;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["carUnit"]
    >;
    composites: {};
  };

  type CarUnitGetPayload<
    S extends boolean | null | undefined | CarUnitDefaultArgs
  > = $Result.GetResult<Prisma.$CarUnitPayload, S>;

  type CarUnitCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<CarUnitFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: CarUnitCountAggregateInputType | true;
  };

  export interface CarUnitDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["CarUnit"];
      meta: { name: "CarUnit" };
    };
    /**
     * Find zero or one CarUnit that matches the filter.
     * @param {CarUnitFindUniqueArgs} args - Arguments to find a CarUnit
     * @example
     * // Get one CarUnit
     * const carUnit = await prisma.carUnit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarUnitFindUniqueArgs>(
      args: SelectSubset<T, CarUnitFindUniqueArgs<ExtArgs>>
    ): Prisma__CarUnitClient<
      $Result.GetResult<
        Prisma.$CarUnitPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one CarUnit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarUnitFindUniqueOrThrowArgs} args - Arguments to find a CarUnit
     * @example
     * // Get one CarUnit
     * const carUnit = await prisma.carUnit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarUnitFindUniqueOrThrowArgs>(
      args: SelectSubset<T, CarUnitFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CarUnitClient<
      $Result.GetResult<
        Prisma.$CarUnitPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first CarUnit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarUnitFindFirstArgs} args - Arguments to find a CarUnit
     * @example
     * // Get one CarUnit
     * const carUnit = await prisma.carUnit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarUnitFindFirstArgs>(
      args?: SelectSubset<T, CarUnitFindFirstArgs<ExtArgs>>
    ): Prisma__CarUnitClient<
      $Result.GetResult<
        Prisma.$CarUnitPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first CarUnit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarUnitFindFirstOrThrowArgs} args - Arguments to find a CarUnit
     * @example
     * // Get one CarUnit
     * const carUnit = await prisma.carUnit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarUnitFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CarUnitFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CarUnitClient<
      $Result.GetResult<
        Prisma.$CarUnitPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more CarUnits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarUnitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CarUnits
     * const carUnits = await prisma.carUnit.findMany()
     *
     * // Get first 10 CarUnits
     * const carUnits = await prisma.carUnit.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const carUnitWithIdOnly = await prisma.carUnit.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CarUnitFindManyArgs>(
      args?: SelectSubset<T, CarUnitFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CarUnitPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a CarUnit.
     * @param {CarUnitCreateArgs} args - Arguments to create a CarUnit.
     * @example
     * // Create one CarUnit
     * const CarUnit = await prisma.carUnit.create({
     *   data: {
     *     // ... data to create a CarUnit
     *   }
     * })
     *
     */
    create<T extends CarUnitCreateArgs>(
      args: SelectSubset<T, CarUnitCreateArgs<ExtArgs>>
    ): Prisma__CarUnitClient<
      $Result.GetResult<
        Prisma.$CarUnitPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many CarUnits.
     * @param {CarUnitCreateManyArgs} args - Arguments to create many CarUnits.
     * @example
     * // Create many CarUnits
     * const carUnit = await prisma.carUnit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CarUnitCreateManyArgs>(
      args?: SelectSubset<T, CarUnitCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many CarUnits and returns the data saved in the database.
     * @param {CarUnitCreateManyAndReturnArgs} args - Arguments to create many CarUnits.
     * @example
     * // Create many CarUnits
     * const carUnit = await prisma.carUnit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many CarUnits and only return the `id`
     * const carUnitWithIdOnly = await prisma.carUnit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CarUnitCreateManyAndReturnArgs>(
      args?: SelectSubset<T, CarUnitCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CarUnitPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a CarUnit.
     * @param {CarUnitDeleteArgs} args - Arguments to delete one CarUnit.
     * @example
     * // Delete one CarUnit
     * const CarUnit = await prisma.carUnit.delete({
     *   where: {
     *     // ... filter to delete one CarUnit
     *   }
     * })
     *
     */
    delete<T extends CarUnitDeleteArgs>(
      args: SelectSubset<T, CarUnitDeleteArgs<ExtArgs>>
    ): Prisma__CarUnitClient<
      $Result.GetResult<
        Prisma.$CarUnitPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one CarUnit.
     * @param {CarUnitUpdateArgs} args - Arguments to update one CarUnit.
     * @example
     * // Update one CarUnit
     * const carUnit = await prisma.carUnit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CarUnitUpdateArgs>(
      args: SelectSubset<T, CarUnitUpdateArgs<ExtArgs>>
    ): Prisma__CarUnitClient<
      $Result.GetResult<
        Prisma.$CarUnitPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more CarUnits.
     * @param {CarUnitDeleteManyArgs} args - Arguments to filter CarUnits to delete.
     * @example
     * // Delete a few CarUnits
     * const { count } = await prisma.carUnit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CarUnitDeleteManyArgs>(
      args?: SelectSubset<T, CarUnitDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more CarUnits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarUnitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CarUnits
     * const carUnit = await prisma.carUnit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CarUnitUpdateManyArgs>(
      args: SelectSubset<T, CarUnitUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more CarUnits and returns the data updated in the database.
     * @param {CarUnitUpdateManyAndReturnArgs} args - Arguments to update many CarUnits.
     * @example
     * // Update many CarUnits
     * const carUnit = await prisma.carUnit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more CarUnits and only return the `id`
     * const carUnitWithIdOnly = await prisma.carUnit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends CarUnitUpdateManyAndReturnArgs>(
      args: SelectSubset<T, CarUnitUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CarUnitPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one CarUnit.
     * @param {CarUnitUpsertArgs} args - Arguments to update or create a CarUnit.
     * @example
     * // Update or create a CarUnit
     * const carUnit = await prisma.carUnit.upsert({
     *   create: {
     *     // ... data to create a CarUnit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CarUnit we want to update
     *   }
     * })
     */
    upsert<T extends CarUnitUpsertArgs>(
      args: SelectSubset<T, CarUnitUpsertArgs<ExtArgs>>
    ): Prisma__CarUnitClient<
      $Result.GetResult<
        Prisma.$CarUnitPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of CarUnits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarUnitCountArgs} args - Arguments to filter CarUnits to count.
     * @example
     * // Count the number of CarUnits
     * const count = await prisma.carUnit.count({
     *   where: {
     *     // ... the filter for the CarUnits we want to count
     *   }
     * })
     **/
    count<T extends CarUnitCountArgs>(
      args?: Subset<T, CarUnitCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], CarUnitCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a CarUnit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarUnitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CarUnitAggregateArgs>(
      args: Subset<T, CarUnitAggregateArgs>
    ): Prisma.PrismaPromise<GetCarUnitAggregateType<T>>;

    /**
     * Group by CarUnit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarUnitGroupByArgs} args - Group by arguments.
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
      T extends CarUnitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarUnitGroupByArgs["orderBy"] }
        : { orderBy?: CarUnitGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, CarUnitGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetCarUnitGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the CarUnit model
     */
    readonly fields: CarUnitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CarUnit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarUnitClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    cars<T extends CarUnit$carsArgs<ExtArgs> = {}>(
      args?: Subset<T, CarUnit$carsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$CarPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the CarUnit model
   */
  interface CarUnitFieldRefs {
    readonly id: FieldRef<"CarUnit", "String">;
    readonly make: FieldRef<"CarUnit", "String">;
    readonly unitModel: FieldRef<"CarUnit", "String">;
    readonly year: FieldRef<"CarUnit", "Int">;
    readonly engine: FieldRef<"CarUnit", "String">;
    readonly category: FieldRef<"CarUnit", "String">;
    readonly createdAt: FieldRef<"CarUnit", "DateTime">;
    readonly updatedAt: FieldRef<"CarUnit", "DateTime">;
  }

  // Custom InputTypes
  /**
   * CarUnit findUnique
   */
  export type CarUnitFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the CarUnit
     */
    select?: CarUnitSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CarUnit
     */
    omit?: CarUnitOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarUnitInclude<ExtArgs> | null;
    /**
     * Filter, which CarUnit to fetch.
     */
    where: CarUnitWhereUniqueInput;
  };

  /**
   * CarUnit findUniqueOrThrow
   */
  export type CarUnitFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the CarUnit
     */
    select?: CarUnitSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CarUnit
     */
    omit?: CarUnitOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarUnitInclude<ExtArgs> | null;
    /**
     * Filter, which CarUnit to fetch.
     */
    where: CarUnitWhereUniqueInput;
  };

  /**
   * CarUnit findFirst
   */
  export type CarUnitFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the CarUnit
     */
    select?: CarUnitSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CarUnit
     */
    omit?: CarUnitOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarUnitInclude<ExtArgs> | null;
    /**
     * Filter, which CarUnit to fetch.
     */
    where?: CarUnitWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CarUnits to fetch.
     */
    orderBy?:
      | CarUnitOrderByWithRelationInput
      | CarUnitOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CarUnits.
     */
    cursor?: CarUnitWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CarUnits from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CarUnits.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CarUnits.
     */
    distinct?: CarUnitScalarFieldEnum | CarUnitScalarFieldEnum[];
  };

  /**
   * CarUnit findFirstOrThrow
   */
  export type CarUnitFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the CarUnit
     */
    select?: CarUnitSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CarUnit
     */
    omit?: CarUnitOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarUnitInclude<ExtArgs> | null;
    /**
     * Filter, which CarUnit to fetch.
     */
    where?: CarUnitWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CarUnits to fetch.
     */
    orderBy?:
      | CarUnitOrderByWithRelationInput
      | CarUnitOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CarUnits.
     */
    cursor?: CarUnitWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CarUnits from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CarUnits.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CarUnits.
     */
    distinct?: CarUnitScalarFieldEnum | CarUnitScalarFieldEnum[];
  };

  /**
   * CarUnit findMany
   */
  export type CarUnitFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the CarUnit
     */
    select?: CarUnitSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CarUnit
     */
    omit?: CarUnitOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarUnitInclude<ExtArgs> | null;
    /**
     * Filter, which CarUnits to fetch.
     */
    where?: CarUnitWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CarUnits to fetch.
     */
    orderBy?:
      | CarUnitOrderByWithRelationInput
      | CarUnitOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing CarUnits.
     */
    cursor?: CarUnitWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CarUnits from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CarUnits.
     */
    skip?: number;
    distinct?: CarUnitScalarFieldEnum | CarUnitScalarFieldEnum[];
  };

  /**
   * CarUnit create
   */
  export type CarUnitCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the CarUnit
     */
    select?: CarUnitSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CarUnit
     */
    omit?: CarUnitOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarUnitInclude<ExtArgs> | null;
    /**
     * The data needed to create a CarUnit.
     */
    data: XOR<CarUnitCreateInput, CarUnitUncheckedCreateInput>;
  };

  /**
   * CarUnit createMany
   */
  export type CarUnitCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many CarUnits.
     */
    data: CarUnitCreateManyInput | CarUnitCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * CarUnit createManyAndReturn
   */
  export type CarUnitCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the CarUnit
     */
    select?: CarUnitSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CarUnit
     */
    omit?: CarUnitOmit<ExtArgs> | null;
    /**
     * The data used to create many CarUnits.
     */
    data: CarUnitCreateManyInput | CarUnitCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * CarUnit update
   */
  export type CarUnitUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the CarUnit
     */
    select?: CarUnitSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CarUnit
     */
    omit?: CarUnitOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarUnitInclude<ExtArgs> | null;
    /**
     * The data needed to update a CarUnit.
     */
    data: XOR<CarUnitUpdateInput, CarUnitUncheckedUpdateInput>;
    /**
     * Choose, which CarUnit to update.
     */
    where: CarUnitWhereUniqueInput;
  };

  /**
   * CarUnit updateMany
   */
  export type CarUnitUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update CarUnits.
     */
    data: XOR<CarUnitUpdateManyMutationInput, CarUnitUncheckedUpdateManyInput>;
    /**
     * Filter which CarUnits to update
     */
    where?: CarUnitWhereInput;
    /**
     * Limit how many CarUnits to update.
     */
    limit?: number;
  };

  /**
   * CarUnit updateManyAndReturn
   */
  export type CarUnitUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the CarUnit
     */
    select?: CarUnitSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CarUnit
     */
    omit?: CarUnitOmit<ExtArgs> | null;
    /**
     * The data used to update CarUnits.
     */
    data: XOR<CarUnitUpdateManyMutationInput, CarUnitUncheckedUpdateManyInput>;
    /**
     * Filter which CarUnits to update
     */
    where?: CarUnitWhereInput;
    /**
     * Limit how many CarUnits to update.
     */
    limit?: number;
  };

  /**
   * CarUnit upsert
   */
  export type CarUnitUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the CarUnit
     */
    select?: CarUnitSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CarUnit
     */
    omit?: CarUnitOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarUnitInclude<ExtArgs> | null;
    /**
     * The filter to search for the CarUnit to update in case it exists.
     */
    where: CarUnitWhereUniqueInput;
    /**
     * In case the CarUnit found by the `where` argument doesn't exist, create a new CarUnit with this data.
     */
    create: XOR<CarUnitCreateInput, CarUnitUncheckedCreateInput>;
    /**
     * In case the CarUnit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarUnitUpdateInput, CarUnitUncheckedUpdateInput>;
  };

  /**
   * CarUnit delete
   */
  export type CarUnitDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the CarUnit
     */
    select?: CarUnitSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CarUnit
     */
    omit?: CarUnitOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarUnitInclude<ExtArgs> | null;
    /**
     * Filter which CarUnit to delete.
     */
    where: CarUnitWhereUniqueInput;
  };

  /**
   * CarUnit deleteMany
   */
  export type CarUnitDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which CarUnits to delete
     */
    where?: CarUnitWhereInput;
    /**
     * Limit how many CarUnits to delete.
     */
    limit?: number;
  };

  /**
   * CarUnit.cars
   */
  export type CarUnit$carsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null;
    where?: CarWhereInput;
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[];
    cursor?: CarWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[];
  };

  /**
   * CarUnit without action
   */
  export type CarUnitDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the CarUnit
     */
    select?: CarUnitSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CarUnit
     */
    omit?: CarUnitOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarUnitInclude<ExtArgs> | null;
  };

  /**
   * Model Car
   */

  export type AggregateCar = {
    _count: CarCountAggregateOutputType | null;
    _avg: CarAvgAggregateOutputType | null;
    _sum: CarSumAggregateOutputType | null;
    _min: CarMinAggregateOutputType | null;
    _max: CarMaxAggregateOutputType | null;
  };

  export type CarAvgAggregateOutputType = {
    id: number | null;
    price: number | null;
  };

  export type CarSumAggregateOutputType = {
    id: number | null;
    price: number | null;
  };

  export type CarMinAggregateOutputType = {
    id: number | null;
    carUnitId: string | null;
    no_police: string | null;
    color: string | null;
    price: number | null;
    status: string | null;
    vin: string | null;
    dateAdded: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type CarMaxAggregateOutputType = {
    id: number | null;
    carUnitId: string | null;
    no_police: string | null;
    color: string | null;
    price: number | null;
    status: string | null;
    vin: string | null;
    dateAdded: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type CarCountAggregateOutputType = {
    id: number;
    carUnitId: number;
    no_police: number;
    color: number;
    price: number;
    status: number;
    vin: number;
    dateAdded: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type CarAvgAggregateInputType = {
    id?: true;
    price?: true;
  };

  export type CarSumAggregateInputType = {
    id?: true;
    price?: true;
  };

  export type CarMinAggregateInputType = {
    id?: true;
    carUnitId?: true;
    no_police?: true;
    color?: true;
    price?: true;
    status?: true;
    vin?: true;
    dateAdded?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type CarMaxAggregateInputType = {
    id?: true;
    carUnitId?: true;
    no_police?: true;
    color?: true;
    price?: true;
    status?: true;
    vin?: true;
    dateAdded?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type CarCountAggregateInputType = {
    id?: true;
    carUnitId?: true;
    no_police?: true;
    color?: true;
    price?: true;
    status?: true;
    vin?: true;
    dateAdded?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type CarAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Car to aggregate.
     */
    where?: CarWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CarWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Cars.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Cars
     **/
    _count?: true | CarCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: CarAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: CarSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CarMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CarMaxAggregateInputType;
  };

  export type GetCarAggregateType<T extends CarAggregateArgs> = {
    [P in keyof T & keyof AggregateCar]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCar[P]>
      : GetScalarType<T[P], AggregateCar[P]>;
  };

  export type CarGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: CarWhereInput;
    orderBy?: CarOrderByWithAggregationInput | CarOrderByWithAggregationInput[];
    by: CarScalarFieldEnum[] | CarScalarFieldEnum;
    having?: CarScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CarCountAggregateInputType | true;
    _avg?: CarAvgAggregateInputType;
    _sum?: CarSumAggregateInputType;
    _min?: CarMinAggregateInputType;
    _max?: CarMaxAggregateInputType;
  };

  export type CarGroupByOutputType = {
    id: number;
    carUnitId: string;
    no_police: string;
    color: string;
    price: number;
    status: string;
    vin: string | null;
    dateAdded: Date;
    createdAt: Date;
    updatedAt: Date;
    _count: CarCountAggregateOutputType | null;
    _avg: CarAvgAggregateOutputType | null;
    _sum: CarSumAggregateOutputType | null;
    _min: CarMinAggregateOutputType | null;
    _max: CarMaxAggregateOutputType | null;
  };

  type GetCarGroupByPayload<T extends CarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarGroupByOutputType, T["by"]> & {
        [P in keyof T & keyof CarGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CarGroupByOutputType[P]>
          : GetScalarType<T[P], CarGroupByOutputType[P]>;
      }
    >
  >;

  export type CarSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      carUnitId?: boolean;
      no_police?: boolean;
      color?: boolean;
      price?: boolean;
      status?: boolean;
      vin?: boolean;
      dateAdded?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      carUnit?: boolean | CarUnitDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["car"]
  >;

  export type CarSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      carUnitId?: boolean;
      no_police?: boolean;
      color?: boolean;
      price?: boolean;
      status?: boolean;
      vin?: boolean;
      dateAdded?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      carUnit?: boolean | CarUnitDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["car"]
  >;

  export type CarSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      carUnitId?: boolean;
      no_police?: boolean;
      color?: boolean;
      price?: boolean;
      status?: boolean;
      vin?: boolean;
      dateAdded?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      carUnit?: boolean | CarUnitDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["car"]
  >;

  export type CarSelectScalar = {
    id?: boolean;
    carUnitId?: boolean;
    no_police?: boolean;
    color?: boolean;
    price?: boolean;
    status?: boolean;
    vin?: boolean;
    dateAdded?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type CarOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetOmit<
    | "id"
    | "carUnitId"
    | "no_police"
    | "color"
    | "price"
    | "status"
    | "vin"
    | "dateAdded"
    | "createdAt"
    | "updatedAt",
    ExtArgs["result"]["car"]
  >;
  export type CarInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    carUnit?: boolean | CarUnitDefaultArgs<ExtArgs>;
  };
  export type CarIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    carUnit?: boolean | CarUnitDefaultArgs<ExtArgs>;
  };
  export type CarIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    carUnit?: boolean | CarUnitDefaultArgs<ExtArgs>;
  };

  export type $CarPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: "Car";
    objects: {
      carUnit: Prisma.$CarUnitPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        carUnitId: string;
        no_police: string;
        color: string;
        price: number;
        status: string;
        vin: string | null;
        dateAdded: Date;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["car"]
    >;
    composites: {};
  };

  type CarGetPayload<S extends boolean | null | undefined | CarDefaultArgs> =
    $Result.GetResult<Prisma.$CarPayload, S>;

  type CarCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<CarFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: CarCountAggregateInputType | true;
  };

  export interface CarDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Car"];
      meta: { name: "Car" };
    };
    /**
     * Find zero or one Car that matches the filter.
     * @param {CarFindUniqueArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarFindUniqueArgs>(
      args: SelectSubset<T, CarFindUniqueArgs<ExtArgs>>
    ): Prisma__CarClient<
      $Result.GetResult<
        Prisma.$CarPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Car that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarFindUniqueOrThrowArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarFindUniqueOrThrowArgs>(
      args: SelectSubset<T, CarFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CarClient<
      $Result.GetResult<
        Prisma.$CarPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Car that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindFirstArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarFindFirstArgs>(
      args?: SelectSubset<T, CarFindFirstArgs<ExtArgs>>
    ): Prisma__CarClient<
      $Result.GetResult<
        Prisma.$CarPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Car that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindFirstOrThrowArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CarFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CarClient<
      $Result.GetResult<
        Prisma.$CarPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Cars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cars
     * const cars = await prisma.car.findMany()
     *
     * // Get first 10 Cars
     * const cars = await prisma.car.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const carWithIdOnly = await prisma.car.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CarFindManyArgs>(
      args?: SelectSubset<T, CarFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CarPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Car.
     * @param {CarCreateArgs} args - Arguments to create a Car.
     * @example
     * // Create one Car
     * const Car = await prisma.car.create({
     *   data: {
     *     // ... data to create a Car
     *   }
     * })
     *
     */
    create<T extends CarCreateArgs>(
      args: SelectSubset<T, CarCreateArgs<ExtArgs>>
    ): Prisma__CarClient<
      $Result.GetResult<
        Prisma.$CarPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Cars.
     * @param {CarCreateManyArgs} args - Arguments to create many Cars.
     * @example
     * // Create many Cars
     * const car = await prisma.car.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CarCreateManyArgs>(
      args?: SelectSubset<T, CarCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Cars and returns the data saved in the database.
     * @param {CarCreateManyAndReturnArgs} args - Arguments to create many Cars.
     * @example
     * // Create many Cars
     * const car = await prisma.car.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Cars and only return the `id`
     * const carWithIdOnly = await prisma.car.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CarCreateManyAndReturnArgs>(
      args?: SelectSubset<T, CarCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CarPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Car.
     * @param {CarDeleteArgs} args - Arguments to delete one Car.
     * @example
     * // Delete one Car
     * const Car = await prisma.car.delete({
     *   where: {
     *     // ... filter to delete one Car
     *   }
     * })
     *
     */
    delete<T extends CarDeleteArgs>(
      args: SelectSubset<T, CarDeleteArgs<ExtArgs>>
    ): Prisma__CarClient<
      $Result.GetResult<
        Prisma.$CarPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Car.
     * @param {CarUpdateArgs} args - Arguments to update one Car.
     * @example
     * // Update one Car
     * const car = await prisma.car.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CarUpdateArgs>(
      args: SelectSubset<T, CarUpdateArgs<ExtArgs>>
    ): Prisma__CarClient<
      $Result.GetResult<
        Prisma.$CarPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Cars.
     * @param {CarDeleteManyArgs} args - Arguments to filter Cars to delete.
     * @example
     * // Delete a few Cars
     * const { count } = await prisma.car.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CarDeleteManyArgs>(
      args?: SelectSubset<T, CarDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cars
     * const car = await prisma.car.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CarUpdateManyArgs>(
      args: SelectSubset<T, CarUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Cars and returns the data updated in the database.
     * @param {CarUpdateManyAndReturnArgs} args - Arguments to update many Cars.
     * @example
     * // Update many Cars
     * const car = await prisma.car.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Cars and only return the `id`
     * const carWithIdOnly = await prisma.car.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends CarUpdateManyAndReturnArgs>(
      args: SelectSubset<T, CarUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CarPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Car.
     * @param {CarUpsertArgs} args - Arguments to update or create a Car.
     * @example
     * // Update or create a Car
     * const car = await prisma.car.upsert({
     *   create: {
     *     // ... data to create a Car
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Car we want to update
     *   }
     * })
     */
    upsert<T extends CarUpsertArgs>(
      args: SelectSubset<T, CarUpsertArgs<ExtArgs>>
    ): Prisma__CarClient<
      $Result.GetResult<
        Prisma.$CarPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarCountArgs} args - Arguments to filter Cars to count.
     * @example
     * // Count the number of Cars
     * const count = await prisma.car.count({
     *   where: {
     *     // ... the filter for the Cars we want to count
     *   }
     * })
     **/
    count<T extends CarCountArgs>(
      args?: Subset<T, CarCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], CarCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Car.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CarAggregateArgs>(
      args: Subset<T, CarAggregateArgs>
    ): Prisma.PrismaPromise<GetCarAggregateType<T>>;

    /**
     * Group by Car.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarGroupByArgs} args - Group by arguments.
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
      T extends CarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarGroupByArgs["orderBy"] }
        : { orderBy?: CarGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
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
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, CarGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetCarGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Car model
     */
    readonly fields: CarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Car.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    carUnit<T extends CarUnitDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, CarUnitDefaultArgs<ExtArgs>>
    ): Prisma__CarUnitClient<
      | $Result.GetResult<
          Prisma.$CarUnitPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Car model
   */
  interface CarFieldRefs {
    readonly id: FieldRef<"Car", "Int">;
    readonly carUnitId: FieldRef<"Car", "String">;
    readonly no_police: FieldRef<"Car", "String">;
    readonly color: FieldRef<"Car", "String">;
    readonly price: FieldRef<"Car", "Float">;
    readonly status: FieldRef<"Car", "String">;
    readonly vin: FieldRef<"Car", "String">;
    readonly dateAdded: FieldRef<"Car", "DateTime">;
    readonly createdAt: FieldRef<"Car", "DateTime">;
    readonly updatedAt: FieldRef<"Car", "DateTime">;
  }

  // Custom InputTypes
  /**
   * Car findUnique
   */
  export type CarFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null;
    /**
     * Filter, which Car to fetch.
     */
    where: CarWhereUniqueInput;
  };

  /**
   * Car findUniqueOrThrow
   */
  export type CarFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null;
    /**
     * Filter, which Car to fetch.
     */
    where: CarWhereUniqueInput;
  };

  /**
   * Car findFirst
   */
  export type CarFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null;
    /**
     * Filter, which Car to fetch.
     */
    where?: CarWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Cars.
     */
    cursor?: CarWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Cars.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Cars.
     */
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[];
  };

  /**
   * Car findFirstOrThrow
   */
  export type CarFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null;
    /**
     * Filter, which Car to fetch.
     */
    where?: CarWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Cars.
     */
    cursor?: CarWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Cars.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Cars.
     */
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[];
  };

  /**
   * Car findMany
   */
  export type CarFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null;
    /**
     * Filter, which Cars to fetch.
     */
    where?: CarWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Cars to fetch.
     */
    orderBy?: CarOrderByWithRelationInput | CarOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Cars.
     */
    cursor?: CarWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Cars from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Cars.
     */
    skip?: number;
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[];
  };

  /**
   * Car create
   */
  export type CarCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null;
    /**
     * The data needed to create a Car.
     */
    data: XOR<CarCreateInput, CarUncheckedCreateInput>;
  };

  /**
   * Car createMany
   */
  export type CarCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many Cars.
     */
    data: CarCreateManyInput | CarCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Car createManyAndReturn
   */
  export type CarCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null;
    /**
     * The data used to create many Cars.
     */
    data: CarCreateManyInput | CarCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Car update
   */
  export type CarUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null;
    /**
     * The data needed to update a Car.
     */
    data: XOR<CarUpdateInput, CarUncheckedUpdateInput>;
    /**
     * Choose, which Car to update.
     */
    where: CarWhereUniqueInput;
  };

  /**
   * Car updateMany
   */
  export type CarUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update Cars.
     */
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyInput>;
    /**
     * Filter which Cars to update
     */
    where?: CarWhereInput;
    /**
     * Limit how many Cars to update.
     */
    limit?: number;
  };

  /**
   * Car updateManyAndReturn
   */
  export type CarUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null;
    /**
     * The data used to update Cars.
     */
    data: XOR<CarUpdateManyMutationInput, CarUncheckedUpdateManyInput>;
    /**
     * Filter which Cars to update
     */
    where?: CarWhereInput;
    /**
     * Limit how many Cars to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Car upsert
   */
  export type CarUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null;
    /**
     * The filter to search for the Car to update in case it exists.
     */
    where: CarWhereUniqueInput;
    /**
     * In case the Car found by the `where` argument doesn't exist, create a new Car with this data.
     */
    create: XOR<CarCreateInput, CarUncheckedCreateInput>;
    /**
     * In case the Car was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarUpdateInput, CarUncheckedUpdateInput>;
  };

  /**
   * Car delete
   */
  export type CarDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null;
    /**
     * Filter which Car to delete.
     */
    where: CarWhereUniqueInput;
  };

  /**
   * Car deleteMany
   */
  export type CarDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Cars to delete
     */
    where?: CarWhereInput;
    /**
     * Limit how many Cars to delete.
     */
    limit?: number;
  };

  /**
   * Car without action
   */
  export type CarDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Car
     */
    select?: CarSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Car
     */
    omit?: CarOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: "ReadUncommitted";
    ReadCommitted: "ReadCommitted";
    RepeatableRead: "RepeatableRead";
    Serializable: "Serializable";
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const CarUnitScalarFieldEnum: {
    id: "id";
    make: "make";
    unitModel: "unitModel";
    year: "year";
    engine: "engine";
    category: "category";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type CarUnitScalarFieldEnum =
    (typeof CarUnitScalarFieldEnum)[keyof typeof CarUnitScalarFieldEnum];

  export const CarScalarFieldEnum: {
    id: "id";
    carUnitId: "carUnitId";
    no_police: "no_police";
    color: "color";
    price: "price";
    status: "status";
    vin: "vin";
    dateAdded: "dateAdded";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type CarScalarFieldEnum =
    (typeof CarScalarFieldEnum)[keyof typeof CarScalarFieldEnum];

  export const SortOrder: {
    asc: "asc";
    desc: "desc";
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: "default";
    insensitive: "insensitive";
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: "first";
    last: "last";
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String"
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String[]"
  >;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int"
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int[]"
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "DateTime"
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "DateTime[]"
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Float"
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Float[]"
  >;

  /**
   * Deep Input Types
   */

  export type CarUnitWhereInput = {
    AND?: CarUnitWhereInput | CarUnitWhereInput[];
    OR?: CarUnitWhereInput[];
    NOT?: CarUnitWhereInput | CarUnitWhereInput[];
    id?: StringFilter<"CarUnit"> | string;
    make?: StringFilter<"CarUnit"> | string;
    unitModel?: StringFilter<"CarUnit"> | string;
    year?: IntFilter<"CarUnit"> | number;
    engine?: StringFilter<"CarUnit"> | string;
    category?: StringFilter<"CarUnit"> | string;
    createdAt?: DateTimeFilter<"CarUnit"> | Date | string;
    updatedAt?: DateTimeFilter<"CarUnit"> | Date | string;
    cars?: CarListRelationFilter;
  };

  export type CarUnitOrderByWithRelationInput = {
    id?: SortOrder;
    make?: SortOrder;
    unitModel?: SortOrder;
    year?: SortOrder;
    engine?: SortOrder;
    category?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    cars?: CarOrderByRelationAggregateInput;
  };

  export type CarUnitWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: CarUnitWhereInput | CarUnitWhereInput[];
      OR?: CarUnitWhereInput[];
      NOT?: CarUnitWhereInput | CarUnitWhereInput[];
      make?: StringFilter<"CarUnit"> | string;
      unitModel?: StringFilter<"CarUnit"> | string;
      year?: IntFilter<"CarUnit"> | number;
      engine?: StringFilter<"CarUnit"> | string;
      category?: StringFilter<"CarUnit"> | string;
      createdAt?: DateTimeFilter<"CarUnit"> | Date | string;
      updatedAt?: DateTimeFilter<"CarUnit"> | Date | string;
      cars?: CarListRelationFilter;
    },
    "id"
  >;

  export type CarUnitOrderByWithAggregationInput = {
    id?: SortOrder;
    make?: SortOrder;
    unitModel?: SortOrder;
    year?: SortOrder;
    engine?: SortOrder;
    category?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: CarUnitCountOrderByAggregateInput;
    _avg?: CarUnitAvgOrderByAggregateInput;
    _max?: CarUnitMaxOrderByAggregateInput;
    _min?: CarUnitMinOrderByAggregateInput;
    _sum?: CarUnitSumOrderByAggregateInput;
  };

  export type CarUnitScalarWhereWithAggregatesInput = {
    AND?:
      | CarUnitScalarWhereWithAggregatesInput
      | CarUnitScalarWhereWithAggregatesInput[];
    OR?: CarUnitScalarWhereWithAggregatesInput[];
    NOT?:
      | CarUnitScalarWhereWithAggregatesInput
      | CarUnitScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"CarUnit"> | string;
    make?: StringWithAggregatesFilter<"CarUnit"> | string;
    unitModel?: StringWithAggregatesFilter<"CarUnit"> | string;
    year?: IntWithAggregatesFilter<"CarUnit"> | number;
    engine?: StringWithAggregatesFilter<"CarUnit"> | string;
    category?: StringWithAggregatesFilter<"CarUnit"> | string;
    createdAt?: DateTimeWithAggregatesFilter<"CarUnit"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"CarUnit"> | Date | string;
  };

  export type CarWhereInput = {
    AND?: CarWhereInput | CarWhereInput[];
    OR?: CarWhereInput[];
    NOT?: CarWhereInput | CarWhereInput[];
    id?: IntFilter<"Car"> | number;
    carUnitId?: StringFilter<"Car"> | string;
    no_police?: StringFilter<"Car"> | string;
    color?: StringFilter<"Car"> | string;
    price?: FloatFilter<"Car"> | number;
    status?: StringFilter<"Car"> | string;
    vin?: StringNullableFilter<"Car"> | string | null;
    dateAdded?: DateTimeFilter<"Car"> | Date | string;
    createdAt?: DateTimeFilter<"Car"> | Date | string;
    updatedAt?: DateTimeFilter<"Car"> | Date | string;
    carUnit?: XOR<CarUnitScalarRelationFilter, CarUnitWhereInput>;
  };

  export type CarOrderByWithRelationInput = {
    id?: SortOrder;
    carUnitId?: SortOrder;
    no_police?: SortOrder;
    color?: SortOrder;
    price?: SortOrder;
    status?: SortOrder;
    vin?: SortOrderInput | SortOrder;
    dateAdded?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    carUnit?: CarUnitOrderByWithRelationInput;
  };

  export type CarWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      no_police?: string;
      vin?: string;
      AND?: CarWhereInput | CarWhereInput[];
      OR?: CarWhereInput[];
      NOT?: CarWhereInput | CarWhereInput[];
      carUnitId?: StringFilter<"Car"> | string;
      color?: StringFilter<"Car"> | string;
      price?: FloatFilter<"Car"> | number;
      status?: StringFilter<"Car"> | string;
      dateAdded?: DateTimeFilter<"Car"> | Date | string;
      createdAt?: DateTimeFilter<"Car"> | Date | string;
      updatedAt?: DateTimeFilter<"Car"> | Date | string;
      carUnit?: XOR<CarUnitScalarRelationFilter, CarUnitWhereInput>;
    },
    "id" | "no_police" | "vin"
  >;

  export type CarOrderByWithAggregationInput = {
    id?: SortOrder;
    carUnitId?: SortOrder;
    no_police?: SortOrder;
    color?: SortOrder;
    price?: SortOrder;
    status?: SortOrder;
    vin?: SortOrderInput | SortOrder;
    dateAdded?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: CarCountOrderByAggregateInput;
    _avg?: CarAvgOrderByAggregateInput;
    _max?: CarMaxOrderByAggregateInput;
    _min?: CarMinOrderByAggregateInput;
    _sum?: CarSumOrderByAggregateInput;
  };

  export type CarScalarWhereWithAggregatesInput = {
    AND?:
      | CarScalarWhereWithAggregatesInput
      | CarScalarWhereWithAggregatesInput[];
    OR?: CarScalarWhereWithAggregatesInput[];
    NOT?:
      | CarScalarWhereWithAggregatesInput
      | CarScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<"Car"> | number;
    carUnitId?: StringWithAggregatesFilter<"Car"> | string;
    no_police?: StringWithAggregatesFilter<"Car"> | string;
    color?: StringWithAggregatesFilter<"Car"> | string;
    price?: FloatWithAggregatesFilter<"Car"> | number;
    status?: StringWithAggregatesFilter<"Car"> | string;
    vin?: StringNullableWithAggregatesFilter<"Car"> | string | null;
    dateAdded?: DateTimeWithAggregatesFilter<"Car"> | Date | string;
    createdAt?: DateTimeWithAggregatesFilter<"Car"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"Car"> | Date | string;
  };

  export type CarUnitCreateInput = {
    id?: string;
    make: string;
    unitModel: string;
    year: number;
    engine: string;
    category: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cars?: CarCreateNestedManyWithoutCarUnitInput;
  };

  export type CarUnitUncheckedCreateInput = {
    id?: string;
    make: string;
    unitModel: string;
    year: number;
    engine: string;
    category: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cars?: CarUncheckedCreateNestedManyWithoutCarUnitInput;
  };

  export type CarUnitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    make?: StringFieldUpdateOperationsInput | string;
    unitModel?: StringFieldUpdateOperationsInput | string;
    year?: IntFieldUpdateOperationsInput | number;
    engine?: StringFieldUpdateOperationsInput | string;
    category?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    cars?: CarUpdateManyWithoutCarUnitNestedInput;
  };

  export type CarUnitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    make?: StringFieldUpdateOperationsInput | string;
    unitModel?: StringFieldUpdateOperationsInput | string;
    year?: IntFieldUpdateOperationsInput | number;
    engine?: StringFieldUpdateOperationsInput | string;
    category?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    cars?: CarUncheckedUpdateManyWithoutCarUnitNestedInput;
  };

  export type CarUnitCreateManyInput = {
    id?: string;
    make: string;
    unitModel: string;
    year: number;
    engine: string;
    category: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CarUnitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    make?: StringFieldUpdateOperationsInput | string;
    unitModel?: StringFieldUpdateOperationsInput | string;
    year?: IntFieldUpdateOperationsInput | number;
    engine?: StringFieldUpdateOperationsInput | string;
    category?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CarUnitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    make?: StringFieldUpdateOperationsInput | string;
    unitModel?: StringFieldUpdateOperationsInput | string;
    year?: IntFieldUpdateOperationsInput | number;
    engine?: StringFieldUpdateOperationsInput | string;
    category?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CarCreateInput = {
    no_police: string;
    color: string;
    price: number;
    status?: string;
    vin?: string | null;
    dateAdded?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    carUnit: CarUnitCreateNestedOneWithoutCarsInput;
  };

  export type CarUncheckedCreateInput = {
    id?: number;
    carUnitId: string;
    no_police: string;
    color: string;
    price: number;
    status?: string;
    vin?: string | null;
    dateAdded?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CarUpdateInput = {
    no_police?: StringFieldUpdateOperationsInput | string;
    color?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    vin?: NullableStringFieldUpdateOperationsInput | string | null;
    dateAdded?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    carUnit?: CarUnitUpdateOneRequiredWithoutCarsNestedInput;
  };

  export type CarUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    carUnitId?: StringFieldUpdateOperationsInput | string;
    no_police?: StringFieldUpdateOperationsInput | string;
    color?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    vin?: NullableStringFieldUpdateOperationsInput | string | null;
    dateAdded?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CarCreateManyInput = {
    id?: number;
    carUnitId: string;
    no_police: string;
    color: string;
    price: number;
    status?: string;
    vin?: string | null;
    dateAdded?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CarUpdateManyMutationInput = {
    no_police?: StringFieldUpdateOperationsInput | string;
    color?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    vin?: NullableStringFieldUpdateOperationsInput | string | null;
    dateAdded?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CarUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    carUnitId?: StringFieldUpdateOperationsInput | string;
    no_police?: StringFieldUpdateOperationsInput | string;
    color?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    vin?: NullableStringFieldUpdateOperationsInput | string | null;
    dateAdded?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type CarListRelationFilter = {
    every?: CarWhereInput;
    some?: CarWhereInput;
    none?: CarWhereInput;
  };

  export type CarOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type CarUnitCountOrderByAggregateInput = {
    id?: SortOrder;
    make?: SortOrder;
    unitModel?: SortOrder;
    year?: SortOrder;
    engine?: SortOrder;
    category?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type CarUnitAvgOrderByAggregateInput = {
    year?: SortOrder;
  };

  export type CarUnitMaxOrderByAggregateInput = {
    id?: SortOrder;
    make?: SortOrder;
    unitModel?: SortOrder;
    year?: SortOrder;
    engine?: SortOrder;
    category?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type CarUnitMinOrderByAggregateInput = {
    id?: SortOrder;
    make?: SortOrder;
    unitModel?: SortOrder;
    year?: SortOrder;
    engine?: SortOrder;
    category?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type CarUnitSumOrderByAggregateInput = {
    year?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type CarUnitScalarRelationFilter = {
    is?: CarUnitWhereInput;
    isNot?: CarUnitWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type CarCountOrderByAggregateInput = {
    id?: SortOrder;
    carUnitId?: SortOrder;
    no_police?: SortOrder;
    color?: SortOrder;
    price?: SortOrder;
    status?: SortOrder;
    vin?: SortOrder;
    dateAdded?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type CarAvgOrderByAggregateInput = {
    id?: SortOrder;
    price?: SortOrder;
  };

  export type CarMaxOrderByAggregateInput = {
    id?: SortOrder;
    carUnitId?: SortOrder;
    no_police?: SortOrder;
    color?: SortOrder;
    price?: SortOrder;
    status?: SortOrder;
    vin?: SortOrder;
    dateAdded?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type CarMinOrderByAggregateInput = {
    id?: SortOrder;
    carUnitId?: SortOrder;
    no_police?: SortOrder;
    color?: SortOrder;
    price?: SortOrder;
    status?: SortOrder;
    vin?: SortOrder;
    dateAdded?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type CarSumOrderByAggregateInput = {
    id?: SortOrder;
    price?: SortOrder;
  };

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedFloatFilter<$PrismaModel>;
    _min?: NestedFloatFilter<$PrismaModel>;
    _max?: NestedFloatFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type CarCreateNestedManyWithoutCarUnitInput = {
    create?:
      | XOR<CarCreateWithoutCarUnitInput, CarUncheckedCreateWithoutCarUnitInput>
      | CarCreateWithoutCarUnitInput[]
      | CarUncheckedCreateWithoutCarUnitInput[];
    connectOrCreate?:
      | CarCreateOrConnectWithoutCarUnitInput
      | CarCreateOrConnectWithoutCarUnitInput[];
    createMany?: CarCreateManyCarUnitInputEnvelope;
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[];
  };

  export type CarUncheckedCreateNestedManyWithoutCarUnitInput = {
    create?:
      | XOR<CarCreateWithoutCarUnitInput, CarUncheckedCreateWithoutCarUnitInput>
      | CarCreateWithoutCarUnitInput[]
      | CarUncheckedCreateWithoutCarUnitInput[];
    connectOrCreate?:
      | CarCreateOrConnectWithoutCarUnitInput
      | CarCreateOrConnectWithoutCarUnitInput[];
    createMany?: CarCreateManyCarUnitInputEnvelope;
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type CarUpdateManyWithoutCarUnitNestedInput = {
    create?:
      | XOR<CarCreateWithoutCarUnitInput, CarUncheckedCreateWithoutCarUnitInput>
      | CarCreateWithoutCarUnitInput[]
      | CarUncheckedCreateWithoutCarUnitInput[];
    connectOrCreate?:
      | CarCreateOrConnectWithoutCarUnitInput
      | CarCreateOrConnectWithoutCarUnitInput[];
    upsert?:
      | CarUpsertWithWhereUniqueWithoutCarUnitInput
      | CarUpsertWithWhereUniqueWithoutCarUnitInput[];
    createMany?: CarCreateManyCarUnitInputEnvelope;
    set?: CarWhereUniqueInput | CarWhereUniqueInput[];
    disconnect?: CarWhereUniqueInput | CarWhereUniqueInput[];
    delete?: CarWhereUniqueInput | CarWhereUniqueInput[];
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[];
    update?:
      | CarUpdateWithWhereUniqueWithoutCarUnitInput
      | CarUpdateWithWhereUniqueWithoutCarUnitInput[];
    updateMany?:
      | CarUpdateManyWithWhereWithoutCarUnitInput
      | CarUpdateManyWithWhereWithoutCarUnitInput[];
    deleteMany?: CarScalarWhereInput | CarScalarWhereInput[];
  };

  export type CarUncheckedUpdateManyWithoutCarUnitNestedInput = {
    create?:
      | XOR<CarCreateWithoutCarUnitInput, CarUncheckedCreateWithoutCarUnitInput>
      | CarCreateWithoutCarUnitInput[]
      | CarUncheckedCreateWithoutCarUnitInput[];
    connectOrCreate?:
      | CarCreateOrConnectWithoutCarUnitInput
      | CarCreateOrConnectWithoutCarUnitInput[];
    upsert?:
      | CarUpsertWithWhereUniqueWithoutCarUnitInput
      | CarUpsertWithWhereUniqueWithoutCarUnitInput[];
    createMany?: CarCreateManyCarUnitInputEnvelope;
    set?: CarWhereUniqueInput | CarWhereUniqueInput[];
    disconnect?: CarWhereUniqueInput | CarWhereUniqueInput[];
    delete?: CarWhereUniqueInput | CarWhereUniqueInput[];
    connect?: CarWhereUniqueInput | CarWhereUniqueInput[];
    update?:
      | CarUpdateWithWhereUniqueWithoutCarUnitInput
      | CarUpdateWithWhereUniqueWithoutCarUnitInput[];
    updateMany?:
      | CarUpdateManyWithWhereWithoutCarUnitInput
      | CarUpdateManyWithWhereWithoutCarUnitInput[];
    deleteMany?: CarScalarWhereInput | CarScalarWhereInput[];
  };

  export type CarUnitCreateNestedOneWithoutCarsInput = {
    create?: XOR<
      CarUnitCreateWithoutCarsInput,
      CarUnitUncheckedCreateWithoutCarsInput
    >;
    connectOrCreate?: CarUnitCreateOrConnectWithoutCarsInput;
    connect?: CarUnitWhereUniqueInput;
  };

  export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type CarUnitUpdateOneRequiredWithoutCarsNestedInput = {
    create?: XOR<
      CarUnitCreateWithoutCarsInput,
      CarUnitUncheckedCreateWithoutCarsInput
    >;
    connectOrCreate?: CarUnitCreateOrConnectWithoutCarsInput;
    upsert?: CarUnitUpsertWithoutCarsInput;
    connect?: CarUnitWhereUniqueInput;
    update?: XOR<
      XOR<
        CarUnitUpdateToOneWithWhereWithoutCarsInput,
        CarUnitUpdateWithoutCarsInput
      >,
      CarUnitUncheckedUpdateWithoutCarsInput
    >;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedFloatFilter<$PrismaModel>;
    _min?: NestedFloatFilter<$PrismaModel>;
    _max?: NestedFloatFilter<$PrismaModel>;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type CarCreateWithoutCarUnitInput = {
    no_police: string;
    color: string;
    price: number;
    status?: string;
    vin?: string | null;
    dateAdded?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CarUncheckedCreateWithoutCarUnitInput = {
    id?: number;
    no_police: string;
    color: string;
    price: number;
    status?: string;
    vin?: string | null;
    dateAdded?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CarCreateOrConnectWithoutCarUnitInput = {
    where: CarWhereUniqueInput;
    create: XOR<
      CarCreateWithoutCarUnitInput,
      CarUncheckedCreateWithoutCarUnitInput
    >;
  };

  export type CarCreateManyCarUnitInputEnvelope = {
    data: CarCreateManyCarUnitInput | CarCreateManyCarUnitInput[];
    skipDuplicates?: boolean;
  };

  export type CarUpsertWithWhereUniqueWithoutCarUnitInput = {
    where: CarWhereUniqueInput;
    update: XOR<
      CarUpdateWithoutCarUnitInput,
      CarUncheckedUpdateWithoutCarUnitInput
    >;
    create: XOR<
      CarCreateWithoutCarUnitInput,
      CarUncheckedCreateWithoutCarUnitInput
    >;
  };

  export type CarUpdateWithWhereUniqueWithoutCarUnitInput = {
    where: CarWhereUniqueInput;
    data: XOR<
      CarUpdateWithoutCarUnitInput,
      CarUncheckedUpdateWithoutCarUnitInput
    >;
  };

  export type CarUpdateManyWithWhereWithoutCarUnitInput = {
    where: CarScalarWhereInput;
    data: XOR<
      CarUpdateManyMutationInput,
      CarUncheckedUpdateManyWithoutCarUnitInput
    >;
  };

  export type CarScalarWhereInput = {
    AND?: CarScalarWhereInput | CarScalarWhereInput[];
    OR?: CarScalarWhereInput[];
    NOT?: CarScalarWhereInput | CarScalarWhereInput[];
    id?: IntFilter<"Car"> | number;
    carUnitId?: StringFilter<"Car"> | string;
    no_police?: StringFilter<"Car"> | string;
    color?: StringFilter<"Car"> | string;
    price?: FloatFilter<"Car"> | number;
    status?: StringFilter<"Car"> | string;
    vin?: StringNullableFilter<"Car"> | string | null;
    dateAdded?: DateTimeFilter<"Car"> | Date | string;
    createdAt?: DateTimeFilter<"Car"> | Date | string;
    updatedAt?: DateTimeFilter<"Car"> | Date | string;
  };

  export type CarUnitCreateWithoutCarsInput = {
    id?: string;
    make: string;
    unitModel: string;
    year: number;
    engine: string;
    category: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CarUnitUncheckedCreateWithoutCarsInput = {
    id?: string;
    make: string;
    unitModel: string;
    year: number;
    engine: string;
    category: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CarUnitCreateOrConnectWithoutCarsInput = {
    where: CarUnitWhereUniqueInput;
    create: XOR<
      CarUnitCreateWithoutCarsInput,
      CarUnitUncheckedCreateWithoutCarsInput
    >;
  };

  export type CarUnitUpsertWithoutCarsInput = {
    update: XOR<
      CarUnitUpdateWithoutCarsInput,
      CarUnitUncheckedUpdateWithoutCarsInput
    >;
    create: XOR<
      CarUnitCreateWithoutCarsInput,
      CarUnitUncheckedCreateWithoutCarsInput
    >;
    where?: CarUnitWhereInput;
  };

  export type CarUnitUpdateToOneWithWhereWithoutCarsInput = {
    where?: CarUnitWhereInput;
    data: XOR<
      CarUnitUpdateWithoutCarsInput,
      CarUnitUncheckedUpdateWithoutCarsInput
    >;
  };

  export type CarUnitUpdateWithoutCarsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    make?: StringFieldUpdateOperationsInput | string;
    unitModel?: StringFieldUpdateOperationsInput | string;
    year?: IntFieldUpdateOperationsInput | number;
    engine?: StringFieldUpdateOperationsInput | string;
    category?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CarUnitUncheckedUpdateWithoutCarsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    make?: StringFieldUpdateOperationsInput | string;
    unitModel?: StringFieldUpdateOperationsInput | string;
    year?: IntFieldUpdateOperationsInput | number;
    engine?: StringFieldUpdateOperationsInput | string;
    category?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CarCreateManyCarUnitInput = {
    id?: number;
    no_police: string;
    color: string;
    price: number;
    status?: string;
    vin?: string | null;
    dateAdded?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CarUpdateWithoutCarUnitInput = {
    no_police?: StringFieldUpdateOperationsInput | string;
    color?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    vin?: NullableStringFieldUpdateOperationsInput | string | null;
    dateAdded?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CarUncheckedUpdateWithoutCarUnitInput = {
    id?: IntFieldUpdateOperationsInput | number;
    no_police?: StringFieldUpdateOperationsInput | string;
    color?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    vin?: NullableStringFieldUpdateOperationsInput | string | null;
    dateAdded?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CarUncheckedUpdateManyWithoutCarUnitInput = {
    id?: IntFieldUpdateOperationsInput | number;
    no_police?: StringFieldUpdateOperationsInput | string;
    color?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    vin?: NullableStringFieldUpdateOperationsInput | string | null;
    dateAdded?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
