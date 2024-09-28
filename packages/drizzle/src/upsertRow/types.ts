import type { SQL } from 'drizzle-orm'
import type { Field, JoinQuery, PayloadRequest } from 'payload'

import type { DrizzleAdapter, DrizzleTransaction, GenericColumn } from '../types.js'

type BaseArgs = {
  adapter: DrizzleAdapter
  data: Record<string, unknown>
  db: DrizzleAdapter['drizzle'] | DrizzleTransaction
  fields: Field[]
  /**
   * When true, skips reading the data back from the database and returns the input data
   * @default false
   */
  ignoreResult?: boolean
  joinQuery?: JoinQuery
  path?: string
  req: PayloadRequest
  tableName: string
}

type CreateArgs = {
  id?: never
  joinQuery?: never
  operation: 'create'
  upsertTarget?: never
  where?: never
} & BaseArgs

type UpdateArgs = {
  id?: number | string
  joinQuery?: JoinQuery
  operation: 'update'
  upsertTarget?: GenericColumn
  where?: SQL<unknown>
} & BaseArgs

export type Args = CreateArgs | UpdateArgs