/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  collections: {
    posts: Post;
    categories: Category;
    uploads: Upload;
    'localized-posts': LocalizedPost;
    'localized-categories': LocalizedCategory;
    users: User;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  db: {
    defaultIDType: number;
  };
  globals: {};
  locale: 'en' | 'es';
  user: User & {
    collection: 'users';
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "posts".
 */
export interface Post {
  id: number;
  title?: string | null;
  upload?: (number | null) | Upload;
  category?: (number | null) | Category;
  categories?: (number | Category)[] | null;
  categoriesLocalized?: (number | Category)[] | null;
  group?: {
    category?: (number | null) | Category;
    camelCaseCategory?: (number | null) | Category;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "uploads".
 */
export interface Upload {
  id: number;
  relatedPosts?: {
    docs?: (number | Post)[] | null;
    hasNextPage?: boolean | null;
  } | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "categories".
 */
export interface Category {
  id: number;
  name?: string | null;
  relatedPosts?: {
    docs?: (number | Post)[] | null;
    hasNextPage?: boolean | null;
  } | null;
  hasManyPosts?: {
    docs?: (number | Post)[] | null;
    hasNextPage?: boolean | null;
  } | null;
  hasManyPostsLocalized?: {
    docs?: (number | Post)[] | null;
    hasNextPage?: boolean | null;
  } | null;
  group?: {
    relatedPosts?: {
      docs?: (number | Post)[] | null;
      hasNextPage?: boolean | null;
    } | null;
    camelCasePosts?: {
      docs?: (number | Post)[] | null;
      hasNextPage?: boolean | null;
    } | null;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "localized-posts".
 */
export interface LocalizedPost {
  id: number;
  title?: string | null;
  category?: (number | null) | LocalizedCategory;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "localized-categories".
 */
export interface LocalizedCategory {
  id: number;
  name?: string | null;
  relatedPosts?: {
    docs?: (number | LocalizedPost)[] | null;
    hasNextPage?: boolean | null;
  } | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: number;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: number;
  document?:
    | ({
        relationTo: 'posts';
        value: number | Post;
      } | null)
    | ({
        relationTo: 'categories';
        value: number | Category;
      } | null)
    | ({
        relationTo: 'uploads';
        value: number | Upload;
      } | null)
    | ({
        relationTo: 'localized-posts';
        value: number | LocalizedPost;
      } | null)
    | ({
        relationTo: 'localized-categories';
        value: number | LocalizedCategory;
      } | null)
    | ({
        relationTo: 'users';
        value: number | User;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: number;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: number;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  // @ts-ignore 
  export interface GeneratedTypes extends Config {}
}