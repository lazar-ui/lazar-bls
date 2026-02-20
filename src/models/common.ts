/**
 * Entity model.
 */
export interface IEntity {
  /** Unique identifier. */
  id: number;
}

/**
 * Strapi document model.
 */
export interface IStrapiDocument extends IEntity {
  /** Document ID. */
  documentId: string;
}

/**
 * Meta information model.
 */
export interface IAnyObject {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
