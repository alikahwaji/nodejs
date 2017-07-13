var getUser = (id, callback) =>{
  var user ={
      id: id,
      name: 'Mahmoud'
  };
  callback(user);
};

getUser(37, (userObject) => {
 console.log(userObject);
});