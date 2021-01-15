
// returns the account that matches the given id
function findAccountById(accounts, id) {
  const accountVals = Object.values(accounts)

  let found = accountVals.find((val) => val.id === id)
  return found
}

// sorts accounts by alphabetical order
function sortAccountsByLastName(accounts) {
  accounts.sort((nameA, nameB) => nameA.name.last < nameB.name.last ? -1 : 1)
  return accounts
}

// returns that number of borrows on a given account
function numberOfBorrows(account, books) {
  const bookVals = Object.values(books)
  let total = 0

  // sorts through each book
  bookVals.forEach((val) => {
    // iterates through each borrow for each books
    val.borrows.forEach((borrow) => {
      // if the account id on the borrow matches the id on the inputted account
      // the total is incremented by 1
      if (borrow.id === account.id) {
        total++
      }
    })
  })
  return total
}


//  returns all books checked out by the given account
// and embedds the author object inside of it
function booksInPossession(account, books, authors) {

  // helper function that fins which books are currently checked out
  const checkedOutBooks = findCurrentlyCheckedOut(books)

  const bookVals = Object.values(checkedOutBooks)
  let result = []

  // looks at each book
  bookVals.forEach((book) => {
    // looks at each author
    authors.forEach((author) => {
      // compares if the most recent borrow id on a book matches the account id
      // also compares if the authorId matches the one on the book
      if (book.borrows[0].id == account.id && author.id == book.authorId) {
        // embeds the author object in the books
        book["author"] = author
        result.push(book)
      }
    }
    )

  })
  return result
}


// this helper function determines if a book is currently checked out
function findCurrentlyCheckedOut(books) {
  const values = Object.values(books)

  let currentCheckedOut = values.filter((val) => {
    if (!val.borrows[0].returned) {
      return val
    }
  })
  return currentCheckedOut
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  booksInPossession,
};
