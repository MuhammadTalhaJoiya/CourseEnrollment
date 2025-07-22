/**
 * Utility functions for working with the theme system
 */

/**
 * Applies a theme class to an element based on the current theme
 * @param {string} theme - The current theme ('light' or 'dark')
 * @param {string} lightClass - The class to apply in light mode
 * @param {string} darkClass - The class to apply in dark mode
 * @returns {string} The appropriate class based on the theme
 */
export const themeClass = (theme, lightClass, darkClass) => {
  return theme === 'dark' ? darkClass : lightClass;
};

/**
 * Creates a CSS variable value string from a theme token
 * @param {string} variable - The CSS variable name without the -- prefix
 * @returns {string} The CSS variable value string
 * @example
 * // Returns 'var(--color-primary-500)'
 * cssVar('color-primary-500')
 */
export const cssVar = (variable) => {
  return `var(--${variable})`;
};

/**
 * Creates a CSS variable reference string
 * @param {string} name - The CSS variable name without the -- prefix
 * @returns {string} CSS variable reference
 */
export const cssVar = (name) => `var(--${name})`;

/**
 * Gets a CSS variable value from the document root
 * @param {string} name - The CSS variable name without the -- prefix
 * @returns {string} The CSS variable value
 */
export const getCssVar = (name) => {
  return getComputedStyle(document.documentElement).getPropertyValue(`--${name}`).trim();
};

/**
 * Sets a CSS variable on the document root
 * @param {string} name - The CSS variable name without the -- prefix
 * @param {string} value - The value to set
 */
export const setCssVar = (name, value) => {
  document.documentElement.style.setProperty(`--${name}`, value);
};

/**
 * Checks if the system prefers dark mode
 * @returns {boolean} True if the system prefers dark mode
 */
export const systemPrefersDarkMode = () => {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
};

/**
 * Creates a color with opacity
 * @param {string} colorVar - The CSS variable name for the RGB components
 * @param {number} opacity - Opacity value (0-1)
 * @returns {string} rgba color string
 */
export const colorWithOpacity = (colorVar, opacity) => {
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Adds a listener for system color scheme changes
 * @param {Function} callback - Function to call when the color scheme changes
 * @returns {Function} Function to remove the listener
 */
export const addColorSchemeListener = (callback) => {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const listener = (e) => callback(e.matches);
  
  // Add listener
  if (mediaQuery.addEventListener) {
    mediaQuery.addEventListener('change', listener);
  } else {
    // Fallback for older browsers
    mediaQuery.addListener(listener);
  }
  
  // Return function to remove listener
  return () => {
    if (mediaQuery.removeEventListener) {
      mediaQuery.removeEventListener('change', listener);
    } else {
      // Fallback for older browsers
      mediaQuery.removeListener(listener);
    }
  };
};

/**
 * Creates a theme-aware style object for use with inline styles
 * @param {string} theme - The current theme ('light' or 'dark')
 * @param {Object} lightStyles - Styles to use in light mode
 * @param {Object} darkStyles - Styles to use in dark mode
 * @returns {Object} The appropriate style object based on the theme
 */
export const themeStyles = (theme, lightStyles, darkStyles) => {
  return theme === 'dark' ? darkStyles : lightStyles;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar, opacity) => {
  // This assumes you have RGB variables defined in your CSS
  // e.g., --color-primary-500-rgb: 59, 130, 246;
  return `rgba(var(--${colorVar}-rgb), ${opacity})`;
};

/**
 * Generates a color with specified opacity from a theme color
 * @param {string} colorVar - The CSS variable name without the -- prefix
 * @param {number} opacity - Opacity value between 0 and 1
 * @returns {string} CSS color value with opacity
 * @example
 * // Returns 'rgba(var(--color-primary-500-rgb), 0.5)'
 * // Note: This requires RGB variables to be defined in the CSS
 * colorWithOpacity('color-primary-500', 0.5)
 */
export const colorWithOpacity = (colorVar