import { Metadata } from "next";

import { IOpenGraphMeta } from "Models";

/**
 * Utility function to get open graph values
 * @param openGraph Open Graph metadata.
 */
export const getOpenGraphContent = (openGraph: IOpenGraphMeta): Metadata => {
  const metadata: Metadata = {};

  const { image, ...rest } = openGraph;

  metadata.openGraph = { ...rest };

  if (image) {
    metadata.openGraph.images = [
      {
        url: image.url,
        width: image.width,
        height: image.height,
      },
    ];
  }

  return metadata;
};
