function UserManager(){
  this.usersList = new Array();
}

UserManager.prototype = {
  _userExists : function(user){
    return this.usersList.indexOf(user) > -1;
  },

  _addUser : function (user){
    if(this._userExists(user)){
      this.usersList.push(user);
      return new User(user);
    }
    else return null;
  },

  _removeUser : function (user){
    if(_userExists(user)){
      this.usersList.splice(indexOf(user),1);
      return true;
    }
    return false;
  }
}
