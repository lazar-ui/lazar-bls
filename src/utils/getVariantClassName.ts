import camelCase from 'lodash/camelCase';

/**
 * Record of CSS modules styles for all variants.
 * Must contain styles for all variants.
 */
type TStyles<TProperty extends string = string> = Record<TProperty, string> & Record<string, string>;

/**
 * Utility function to get type-safety variant class name selector from CSS module stylesheet.
 * @param prefix prefix for class name (name of variant).
 * @param variant value of variant.
 * @param styles styles of CSS module stylesheet.
 * @example
 * // Check `styles` for existing variant and return value of `styles.sizeMd`.
 * getVariantClassName('size', 'md', styles);
 */
export const getVariantClassName = <P extends string, T extends string>(
  prefix: P,
  variant: T,
  styles: TStyles<`${P}${Capitalize<T>}`>,
): string => {
  const className = camelCase(`${prefix}-${variant}`);

  // Fallback, if cannot find variant in styles.
  return styles[className] || className;
};
