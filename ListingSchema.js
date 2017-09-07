/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

/* Create your schema */
var listingSchema = new Schema({
	name: String,
	code: String,
	coordinates: {
    latitude: Number,
    longitude: Number
  },
  	address: String,
  /* your code here */
});

/* create a 'pre' function that adds the updated_at (and created_at if not already there) property */
listingSchema.pre('save', function(next) {
	this.updated_at = currDate;
	if (!this.created_at)
    this.created_at = currDate;
  /* your code here */
});

/* Use your schema to instantiate a Mongoose model */
var Listing = mongoose.model('Listing', listingSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Listing;
