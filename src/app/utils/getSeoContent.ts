import { Metadata } from "next";

import { ISeoMeta } from "Models";

import { getRobotsContent } from "./getRobotsContent";

/**
 * Utility function to get SEO meta values
 * @param seoMeta SEO metadata.
 */
export const getSeoContent = (seoMeta: Omit<ISeoMeta, "id">): Metadata => {
  const {
    redirect,
    title,
    description,
    keywords,
    canonical,
    robotsAdvanced,
    robotsFollow,
    robotsIndex,
  } = seoMeta;

  if (redirect) {
    return {
      title: `Redirecting to ${redirect} ...`,
      other: {
        refresh: `0; url=${redirect}`,
      },
    };
  }

  const metadata: Metadata = {};

  if (description) {
    metadata.description = description;
  }

  if (keywords) {
    metadata.keywords = keywords;
  }

  if (title) {
    metadata.title = title;
  }

  metadata.robots = getRobotsContent(robotsIndex, robotsFollow, robotsAdvanced);

  if (canonical) {
    metadata.other = {
      canonical,
    };
  }

  return metadata;
};
