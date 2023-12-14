 import { Octokit } from "octokit";




 export let token = "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"

 

 async function api(username) {
    
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