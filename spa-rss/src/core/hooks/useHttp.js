/**
 * Hook for get jsons from api
 *
 * @param url {string}
 * @param options {object} Connection params
 * @returns {Promise<null|any>}
 */
export default async function useHttp(url, options = {}) {
  try {
    const res = await fetch(url, options);
    return await res.json();
  } catch (e) {
    return null;
  }
}
