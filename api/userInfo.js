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