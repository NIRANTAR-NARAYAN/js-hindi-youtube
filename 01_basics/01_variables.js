const accountId = 144553
let accountEmail = "hitewsh#@gghh.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

// accountId = 2// not allowed

accountEmail = "hs@hc.com"
accountPassword = "213423123"
accountCity = "benguluru"


console.log(accountId);

/*
prefer not to use var 
because of issue in block scope and functional scope
*/

console.table( [accountId, accountEmail, accountPassword, accountCity, accountState])