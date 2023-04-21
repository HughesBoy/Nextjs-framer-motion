import React from "react";
async function GetRepos(){
  //https://jsonplaceholder.typicode.com/users
  const res = await fetch(`https://api.github.com/users/hughesboy/repos`);

  await new Promise((resolve) => setTimeout(resolve, 1500))

  const repos = await res.json();
  return repos;
}


const UsersPage = async () => {

  const repos = await GetRepos()
  //console.log(repos)
  return (
    <div>
      {/* {repos.map((repo) => {
        
        <h1>{repo.name}</h1>
        
      })} */}
      {repos && JSON.stringify(repos)}
    </div>
  )
}

export default UsersPage