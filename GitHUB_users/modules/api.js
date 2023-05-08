async function userSearch(username) {
  const urlUser = await fetch(`https://api.github.com/users/${username}/repos`);
  const user = await urlUser.json();
  return user;
}

export default userSearch;
