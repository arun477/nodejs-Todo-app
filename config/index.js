
var configValues = require("./config");

module.exports = {
    getDbConnectionString : function(){
        return "mongodb://"+ configValues.uname+":"+ configValues.pwd+"@ds145303.mlab.com:45303/nodetodo";
    }
}