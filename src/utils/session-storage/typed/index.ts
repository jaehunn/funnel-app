/** @tossdocs-ignore */
import { Storage, safeSessionStorage } from "..";

export interface TypedStorageOptions<T> {
  storage?: Storage;
  initialValue?: T;
}

export class TypedStorage<T> {
  private storage: Storage;

  constructor(private key: string, options: TypedStorageOptions<T> = {}) {
    this.storage = options.storage ?? safeSessionStorage;

    /**
     * undefined == null 는 true 로 검증된다.
     *
     * 동등연산자(==) 로 검증하면 undefined 거나 null 인지 모두를 검증할 수 있다.
     */
    if (options.initialValue != null && this.get() == null) {
      this.set(options.initialValue);
    }
  }

  public get(): T | null {
    const value = this.storage.get(this.key);

    return value ? this.deserialize(value) : null;
  }

  public set(next: T): void {
    this.storage.set(this.key, this.serialize(next));
  }

  public clear(): void {
    this.storage.remove(this.key);
  }

  private serialize(value: T): string {
    return JSON.stringify(value);
  }

  private deserialize(value: string): T | null {
    try {
      return JSON.parse(value);
    } catch (err) {
      return null;
    }
  }
}

export class NumberTypedStorage extends TypedStorage<number> {
  public increase(offset = 1): void {
    const value = this.get() ?? 0;

    this.set(value + offset);
  }

  public decrease(offset = 1): void {
    const value = this.get() ?? 0;

    this.set(value - offset);
  }
}

function createTypedStorage<T>(
  key: string,
  options: TypedStorageOptions<T> = {}
): NumberTypedStorage | TypedStorage<T> {
  const { initialValue, ...others } = options;

  if (typeof initialValue === "number") {
    return new NumberTypedStorage(key, { ...others, initialValue });
  }

  return new TypedStorage(key, options);
}

export function createTypedSessionStorage<T>(
  key: string,
  options: Omit<TypedStorageOptions<T>, "storage"> = {}
) {
  return createTypedStorage<T>(key, {
    ...options,
    storage: safeSessionStorage,
  });
}
