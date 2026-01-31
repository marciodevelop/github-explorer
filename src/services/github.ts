
const BASE_URL = "https://api.github.com"

async function handleReponse<T>(response: Response): Promise<T> {
    if(!response.ok) throw new Error(`error ${response.status}`)

    return response.json()
}

export async function getUserRepos(username: string): Promise<GithubTypes.IRepo[]> {
    try {
        const response = await fetch(`${BASE_URL}/users/${username}/repos?per_page=100`)

        return handleReponse<GithubTypes.IRepo[]>(response)
    } catch (error) {
        throw error
    }
}