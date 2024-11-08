export type DatabaseFetcher<K extends string | number, V> = () => Promise<Map<K, V>>;

export class DatabaseCache<K extends string | number, V> {
	private readonly fetcher: DatabaseFetcher<K, V>;
	private readonly cache: Map<K, V> = new Map();
	
	constructor(fetcher: DatabaseFetcher<K, V>) {
		this.fetcher = fetcher;
	}
	
	has(key: K): boolean {
		return this.cache.has(key);
	}
	
	get(key: K): V | null {
		return this.cache.get(key) ?? null;
	}
	
	set(key: K, value: V): void {
		this.cache.set(key, value);
	}
	
	delete(key: K): void {
		this.cache.delete(key);
	}
	
	clear(): void {
		this.cache.clear();
	}
	
	fetchDatabase(): void {
		this.fetcher().then((data) => {
			this.cache.clear();
			for (const [key, value] of data) {
				this.cache.set(key, value);
			}
		});
	}
}
