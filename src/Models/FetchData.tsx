export class FetchData {
	userId: number
	url: string

	constructor(id: number, url: string) {
		this.userId = id
		this.url = url
	}

	async fetchFromApi(): Promise<void> {
		const promise = await fetch(this.url)
		try {
			if (!promise.ok) {
				throw Error(`Error: ${promise.status} - ${promise.statusText}`)
			}
			const response = await promise.json()
			return response.data
		}
		catch (e) {
			console.error(e)
		}
	}
}