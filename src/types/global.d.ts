declare namespace GithubTypes {
    type TypeRepoTypes = number| string | null


    type SocialAccount = {
      provider: string;
      url: string;
    };
    
    type User = {
      avatar_url: string;
      name: string | null;
      company: string | null;
      location: string | null;
      blog: string | null;
      social_accounts: SocialAcoountsTypes[];
      bio: string | null
    }

    interface Repo {
        id: number
        name: string
        fullname: string
        description: string | null
        html_url: string
        stargazers_count: number
        forks_count: number
        mirror_url: string | null
        archived: boolean
        fork: boolean
        language: string | null
        update_at: string
        owner: {
            login: string
            avatar_url: string
        }
    } 
}