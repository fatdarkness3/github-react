import { username } from "./api"
import { Octokit } from "octokit";
import { token } from "./api";
async function repositories() {

    const octokit = new Octokit({
        auth: token
      })

let render =  await octokit.request('GET /users/{username}/repos', {
  username: username , 
  headers: {
     'X-GitHub-Api-Version': '2022-11-28'
   }
 })
 return render.data;
}
export {repositories};