import { IAnyObject } from './common';

/**
 * Pagination model.
 */
export interface IPagination {
  /** Current page. */
  page: number;

  /** Number of items per page. */
  pageSize: number;

  /** Total number of pages. */
  pageCount: number;

  /** Total number of items. */
  total: number;
}

/**
 * Paginated meta information model.
 */
export interface IPaginatedMeta extends IAnyObject {
  /** Pagination meta inforamtion. */
  pagination: IPagination;
}

/**
 * API Error detail model.
 */
export interface IErrorDetail {
  /** Detail code. */
  messageKey: string;

  /** Fallback message. */
  message: string;
}

/**
 * API Error model.
 */
export interface IApiError<TCode = string> {
  /** Error code. */
  code: TCode;

  /** Fallback message. */
  message: string;

  /** List of additional details about error. */
  details?: Array<IErrorDetail>;
}

/**
 * API Response model.
 */
export interface IResponse<TData = IAnyObject, TMeta = IAnyObject> {
  /** Data of request. */
  data?: TData;

  /** Additional meta information. */
  meta?: TMeta;

  /** Error. */
  error?: unknown;
}

/**
 * API Response model for list of entities request.
 */
export interface IItems<TEntity, TMeta = IAnyObject> extends IResponse<TEntity[], IPaginatedMeta & TMeta> {}

/**
 * API Response model for single entity request.
 */
export interface IItem<TEntity, TMeta = IAnyObject> extends IResponse<TEntity, TMeta> {}
