exports.config = {
	domains: ["healthhack.david-ma.net", "healthhack.com.au", "www.healthhack.com.au", "test.healthhack.com.au"],
	sockets: {
		emit: [],
		on: [{"name": "healthhack_email",
					"callback": function(d, database){
						console.log("someone sent us some email info...");
						var socket = this;
						
						// We should probably catch some errors... meh
						
		var query = "INSERT INTO `healthhack_mail` (`name`, `email`, `role`, `message`) VALUES (?, ?, ?, ?)";
						
						database.queryVariables(query, [d.name, d.email, d.role, d.message], function(err, results) {
		
				console.log(err);
				console.log(results);
			if(err){
				console.log(err);
			} else {
				console.log(results);
				console.log("success!");
			}
		});

					}
				}]
	}
};





			var query = "select * from tempview where row_names = "+d;
				db.query(query, function(error, results){	
					if(!error) {
						response.writeHead(200, {
							"Content-Type": "application/json",
							"Access-Control-Allow-Origin": "*"
						});
						response.end(JSON.stringify(results[0]));
					} else {
						response.writeHead(200);
						response.end(error);
					}
				});