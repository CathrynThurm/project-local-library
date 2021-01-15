
// finds an author by a given id
function findAuthorById(authors, id) {
  const authorVals = Object.values(authors)

  let found = authorVals.find((val) => val.id === id)
  return found
}

// finds a book by a given id
function findBookById(books, id) {
  const bookVals = Object.values(books)

  let found = bookVals.find((val) => val.id === id)
  return found
}

// creates a list of two lists. These lists are the books that are currently borrowed
// and not currently borrowed
function partitionBooksByBorrowedStatus(books) {
  let total = []
  const bookVals = Object.values(books)

  let inLibrary = bookVals.filter((val) => val.borrows[0].returned)
  let borrowed = bookVals.filter((val) => !val.borrows[0].returned)

  total.push(borrowed)
  total.push(inLibrary)
  return total
}

//
function getBorrowersForBook(book, accounts) {
  let accountVals = Object.values(accounts)
  //let result = []
  const {
      id, titale, genre, authorID, borrows
  } = book
  
  let result = accountVals.map((val) => {
      borrows.forEach((borrow) => {
          if (borrow.id === val.id) {
              val['returned'] = borrow.returned
              return val
          }
      })
      return val
  })

  let filtered = result.filter((element) => element.returned)
  return filtered.slice(0,10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
