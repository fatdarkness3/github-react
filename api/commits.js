import { token } from "./userInfo"

async function commits(a) {
    const octokit = new Octokit({
        auth: token
      })
      
     let a =  await octokit.request('GET /repos/{owner}/{repo}/commits/{ref}', {
        owner: "",
        repo: "",
        ref: 'REF',
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      })
      return a
}
export {commits};