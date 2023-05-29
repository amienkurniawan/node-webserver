const { deleteBookByIdHandler, addBookHandler, getAllBooksHandler, getBookByIdHandler, editBookByIdHandler } = require("./handler");

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookByIdHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{bookId}',
    handler: editBookByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{bookId}',
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;