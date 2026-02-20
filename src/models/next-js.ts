/**
 * Model of props for async NextJS server pages.
 */
export interface IServerPageProps<TParams = unknown, TSearchParams = unknown> {
  /**
   * Parameters passed to the page.
   * Dynamic parts of url, like `[lang]`, `[slug]`).
   */
  params: Promise<TParams>;

  /**
   * URL search parameters.
   * Parameters after `?` in path.
   */
  searchParams: Promise<TSearchParams>;
}
