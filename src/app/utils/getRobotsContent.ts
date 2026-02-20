/**
 * Utility function for generating content for robots meta tag.
 * @param index Allows the robot to index the page (default: `true`).
 * @param follow Allows the robot to follow the links on the page (default: `true`).
 * @param advanced Additional directives.
 * @returns
 */
export const getRobotsContent = (index: boolean = true, follow: boolean = true, advanced?: string) => {
  const result = [];

  if (index) {
    result.push('index');
  } else {
    result.push('noindex');
  }

  if (follow) {
    result.push('follow');
  } else {
    result.push('nofollow');
  }

  if (advanced) {
    result.push(advanced);
  }

  return result.join(', ');
};
