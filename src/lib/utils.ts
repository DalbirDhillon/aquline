/**
 * Utility functions used across the project.
 */

/**
 * Conditionally join classnames together.
 * Simplifies dynamic Tailwind classes.
 *
 * Usage:
 *   cn('base-class', isActive && 'active-class', isLarge ? 'text-lg' : 'text-sm')
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}