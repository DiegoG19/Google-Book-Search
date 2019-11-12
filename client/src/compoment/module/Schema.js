const Schema = mongoose.Schema;
var Schema = mongoose.Schema;
 
const googlebooks = new Schema({
  author: {type: String},
  title: {type: String},
  body: {type: String},
  description: {type: String},
  image: {type: String, trim: true},
  link: {type: String, trim: true},

});
const Book = mongoose.model("Book", bookSchema);

module.exports = Book;