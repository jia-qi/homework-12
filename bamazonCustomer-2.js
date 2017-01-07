var mysql = ("mysql");
var inquirer = ("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "Bamazon-2"
});

connection.connect(function(err) {
  if (err) {
    console.error("error" + err.stack);
  }

});

connection.query("SELECT * FROM products", function(err,res) {
    if(err) throw err;
}

  for (var i = 0; i < res.length; i++) {
      console.log(res[i].item_id + tab + res[i].product_name + tab +
        res[i].department_name + tab + res[i].price + tab + res[i].stock_quantity);
    }              