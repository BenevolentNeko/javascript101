import http from './http';

const userCache = {};

export default async function getUser(id){
  if (userCache[id]){
      return userCache[id];
  } else {
      let user = await http.get(`https://jsonplaceholder.typicode.com/users?id=${id}`);
      user = user[0];
      userCache[id] = user;
      return user;
  }
}