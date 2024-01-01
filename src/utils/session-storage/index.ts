/** @see https://slash.page/ko/libraries/common/storage/README.i18n */

import { generateTestKey } from "..";

export interface Storage {
  get(key: string): string | null;

  set(key: string, value: string): void;

  remove(key: string): void;

  clear(): void;
}

class MapStorage implements Storage {
  private storage = new Map<string, string>();

  public get(key: string) {
    return this.storage.get(key) || null;
  }

  public set(key: string, value: string) {
    this.storage.set(key, value);
  }

  public remove(key: string) {
    this.storage.delete(key);
  }

  public clear() {
    this.storage.clear();
  }
}

class SessionStorage implements Storage {
  // 인스턴스 생성 전에, 접근할 수 있어야한다.
  public static canUse() {
    const TEST_KEY = generateTestKey();

    try {
      sessionStorage.setItem(TEST_KEY, "test");

      // 원래 상태로
      sessionStorage.removeItem(TEST_KEY);

      return true;
    } catch (err) {
      return false;
    }
  }

  public get(key: string) {
    return sessionStorage.getItem(key);
  }

  public set(key: string, value: string) {
    sessionStorage.setItem(key, value);
  }

  public remove(key: string) {
    sessionStorage.removeItem(key);
  }

  public clear() {
    sessionStorage.clear();
  }
}

/**
 * Web Storage 를 사용할 수 없는 환경이 있다.
 *
 * 사용가능한 환경인지를 검증하고,
 * 사용하지 못한다면, Map 자료형으로 스토리지를 관리할 수 있다.
 */
export function generateSessionStorage(): Storage {
  if (SessionStorage.canUse()) {
    return new SessionStorage();
  }

  return new MapStorage();
}

// 안전하게 스토리지를 사용할 수 있다.
export const safeSessionStorage = generateSessionStorage();
