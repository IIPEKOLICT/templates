/**
 * Base state class
 */
export default class State {
  static defaultStorageKey = 'state';

  /**
   * State class constructor
   *
   * @param storageKey {string} Key for save data in local storage
   */
  constructor(storageKey) {
    this.storageKeyName = storageKey || State.defaultStorageKey;
  }

  /**
   * Prebuilt method for load data from local storage
   * If no data in local storage it will return default value
   *
   * @param defaultValue {any}
   * @returns {any}
   */
  load(defaultValue = {}) {
    return localStorage.getItem(this.storageKeyName)
      ? JSON.parse(localStorage.getItem(this.storageKeyName))
      : defaultValue;
  }

  /**
   * Prebuilt method for save data in local storage
   */
  save() {
    localStorage.setItem(this.storageKeyName, JSON.stringify(this));
  }
}
