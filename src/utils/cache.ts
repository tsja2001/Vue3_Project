class LocalCache {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setCache(key: string, value: any): void {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  getCache(key: string): any {
    const value = window.localStorage.getItem(key)
    if (value != null) {
      return JSON.parse(value)
    }

    return null
  }

  deleteCache(key: string): void {
    window.localStorage.removeItem(key)
  }

  clearCache(): void {
    window.localStorage.clear()
  }
}

export default new LocalCache()
