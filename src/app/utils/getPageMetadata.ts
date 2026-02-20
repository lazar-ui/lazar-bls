import { Metadata } from "next";

import { IOpenGraphMeta, ISeoMeta } from "Models";

import { getOpenGraphContent } from "./getOpenGraphContent";
import { getSeoContent } from "./getSeoContent";

/**
 * Utility function to get the NextJS page metadata.
 * @param title Current page title.
 * @param seoMeta SEO metadata.
 * @param openGraph Open Graph metadata.
 */
export const getPageMetadata = (
  title: string,
  seoMeta?: Omit<ISeoMeta, "id">,
  openGraph?: IOpenGraphMeta,
): Metadata => {
  let metadata: Metadata = {
    title,
  };

  if (seoMeta) {
    metadata = {
      ...metadata,
      ...getSeoContent(seoMeta),
    };
  }

  if (openGraph) {
    metadata = {
      ...metadata,
      ...getOpenGraphContent(openGraph),
    };
  }

  return metadata;
};
