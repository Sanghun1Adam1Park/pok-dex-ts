export type CacheEntry<T> = {
  createdAt: number, 
  val: T, 
};

export class Cache {
  #cache: Map<String, CacheEntry<any>>;
  #reapIntervalId: NodeJS.Timeout | undefined;
  #interval: number;

  constructor(interval: number) {
    this.#cache = new Map<string, CacheEntry<any>>();
    this.#reapIntervalId = undefined; 
    this.#interval = interval;
    this.#startReapLoop();
  }

  add<T>(key: string, val: T) {
    this.#cache.set(key, {
      createdAt: Date.now(),
      val: val
    }); 
  }

  get<T>(key: string): CacheEntry<T> | undefined {
    const entry = this.#cache.get(key)?.val;
    return entry;
  }

  #reap() {
    for (const [key, entry] of this.#cache) {
      if (Date.now() - entry.createdAt > this.#interval) {
        this.#cache.delete(key);
      }
    }
  }

  #startReapLoop() {
    this.#reapIntervalId = setInterval(() => {
      this.#reap()
    }, this.#interval);
  }

  stopReapLoop() {
    clearInterval(this.#reapIntervalId);
    this.#reapIntervalId = undefined; 
  }
}