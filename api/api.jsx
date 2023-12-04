 import { Octokit } from "octokit";




 export let token = "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"

 export let username = "m-moradi63"

 async function api() {
    
    const octokit = new Octokit({
        auth: token
      })
      
     let response =  await octokit.request('GET /users/{username}', {
        username: username,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      })
  return response.data;
}
export {api};