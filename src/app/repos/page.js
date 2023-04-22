import React from "react";
async function GetRepos(){
  //https://jsonplaceholder.typicode.com/users
  const res = await fetch(`https://api.github.com/users/hughesboy/repos`);
  await new Promise((resolve) => setTimeout(resolve, 1500))

  const repos = await res.json();
  return repos;
}


const ReposPage = async () => {

  const repos = await GetRepos()
  //console.log(repos)
  return (
    <div>
      
      {repos && JSON.stringify(repos)}
    </div>
  )
}

export default ReposPage