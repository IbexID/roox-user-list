const sortUsers = (lists, method) =>{
    if (!method) return lists
    if (method==='city'){
      return lists.sort( (a,b) =>{
        return a['address']['city'] < b['address']['city'] ? -1 : 1;
})
    }
    if(method==='company'){
      return lists.sort( (a,b) =>{
        return a['company']['name'] < b['company']['name'] ? -1 : 1;
})
    }
  }

  export default sortUsers;