/**
 * Model for Open Graph image.
 */
export interface IOpenGraphImage {
  /** Height of the image. */
  height?: number;

  /** URL of the image. */
  url: string;

  /** Width of the image. */
  width?: number;
}

/**
 * Model for Open Graph meta tags of the page.
 */
export interface IOpenGraphMeta<TImage = IOpenGraphImage> {
  /** Image. */
  image?: TImage;

  /** Description of the page used in the Open Graph meta tags. */
  description?: string;

  /** Title of the page used in the Open Graph meta tags. */
  title?: string;

  /** Type of the page. */
  type?: string;
}

/**
 * Model for SEO component.
 */
export interface ISeoMeta {
  /** Meta description. */
  description?: string;

  /** Meta keywords. */
  keywords?: string;

  /** Canonical link. */
  canonical?: string;

  /** Redirect URL. */
  redirect?: string;

  /**
   * Meta robots advanced options.
   * @link https://developers.google.com/search/docs/advanced/robots/robots_meta_tag#advanced-options
   */
  robotsAdvanced?: string;

  /**
   * Meta robots follow/nofollow.
   * If `true` the `follow` will be added to the `<meta name="robots">` tag.
   * If `false` the `nofollow` will be added.
   */
  robotsFollow?: boolean;

  /**
   * Meta robots index/noindex.
   * If `true` the `index` will be added to the `<meta name="robots">` tag.
   * If `false` the `noindex` will be added.
   */
  robotsIndex?: boolean;

  /** Page title. If passed should be replaced value at the `<title>` tag. */
  title?: string;
}
