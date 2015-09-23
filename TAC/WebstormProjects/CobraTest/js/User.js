function User(username){
  this.name = username ;
}

User.prototype = {
  getName : function (){
    return this.name;
  }
};
