var exports = module.exports = {};

exports.createEntities = function(collection, entities, client){
	for(var i in entities){
		//console.log(entities[i])
		exports.insertEntity(entities[i], client);
	}
}

exports.insertEntity = function(options, client){
	client.createEntity(options, function (err, entity) {
	    if (err) {
	        //error - dog not created
	        console.log("ERROR - check BaaS client parameters");
	    } else {
	        //finally, call save on the object to save it back to the database
	        entity.save(function(err){
	            if (err){
	            	//console.log(entity);
	                //error - dog not saved
	            } else {
	                //success - new dog is saved
	            }
	        });
	    }
	});
}