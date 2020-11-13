import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStoreService {
  constructor() {}

  /**
   * @description Adds Key and value to local storage
   * @param key - Key of the stored data
   * @param value - Data to be store.
   */
  put(key: string, value: any): void {
    localStorage.setItem(key, value);
  }

  /**
   * @description Get stored data
   * @param key - To access the data
   * @returns Stored data with respect to key.
   */
  value(key: string): any {
    return localStorage.getItem(key);
  }

  /**
   * @description Remove Key and value to local storage
   * @param key - Key of the stored data
   */
  remove(key: string): void {
    localStorage.removeItem(key);
  }
}
