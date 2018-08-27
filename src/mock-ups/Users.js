const users = [{
  id: 0,
  username: 'D3M0_US3R',
  email: 'd3m0.us3r@onthisday.bg',
  name: 'Demo User'
}]

function query(id) {
  let a = users.filter((user) => { return user.id === id});

  console.debug(id);
  console.debug(a);
  
  return a[0];
}

export default query;