//Page de connexion

function ConnectionBundle(){
  this._username = "";
};

ConnectionBundle.prototype = {
  createUser : function (){
    do{
        var value = prompt("Entrez votre pseudo:");
    }
    while(value == null || value == '');
    this._username = value;
  },
  getUserName: function (){
    return this._username;
  }
};
