declare namespace GithubTypes {
    type TypeRepoTypes = number| string | null

    interface IRepo {
        id: number,
        name: string,
        fullname: string,
        description: string | null,
        html_url: string,
        stargazers_count: number,
        forks_count: number,
        language: string | null,
        update_at: string,
        owner: {
            login: string
            avatar_url: string
        }
    } 
}