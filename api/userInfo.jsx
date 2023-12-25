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