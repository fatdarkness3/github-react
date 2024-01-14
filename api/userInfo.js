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