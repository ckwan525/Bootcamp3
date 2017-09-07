/* Fill out these functions using Mongoose queries*/

var findLibraryWest = function() {
 	Listing.find({ name: "Library West" })
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
};
var removeCable = function() {
	Listing.remove( code: "CABL")
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
};
var updatePhelpsLab = function() {
	Listing.update( address: "")

  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
};
var retrieveAllListings = function() {
	Listing.find( {} )
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
