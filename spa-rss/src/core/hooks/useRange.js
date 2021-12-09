/**
 * Hook for generate range (like as in python/kotlin)
 *
 * @param length {number} Range length
 * @returns {number[]} Range (array, which elements - numbers of range)
 */
export default function useRange(length) {
  return [...Array(length).keys()];
}
