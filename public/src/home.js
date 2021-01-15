function totalBooksCount(books) {
  let total = 0
  let values = Object.values(books)
  
  values.forEach((value) => total++)
  return total
}

function totalAccountsCount(accounts) {
  let total = 0
  let values = Object.values(accounts)
  
  values.forEach((value) => total++)
  return total
}

function booksBorrowedCount(books) {
  let total = 0
  let values = Object.values(books)
  
  values.forEach((value) => {
      if(!value.borrows[0].returned) {
          total++
      }
  })
  return total
}

function mostCommonGenres(books) {
  const genres = groupByKey(books, 'genre');
  let list = [];
  for (const key in genres) {
  list.push({
    name: key,
    count: Object.size(genres[key]),
  })
}
  list.sort((listA, listB)=> 
  (listA.count > listB.count?-1:1))
return list.slice(0,5)
}



function mostPopularBooks(books) {
  vals = Object.values(books)
  let list = [];

  vals.forEach((val) => {
    list.push(
      {
        name: val.title,
        count: Object.size(val.borrows)
      }
    )
  })

  list.sort((listA, listB)=> 
  (listA.count > listB.count?-1:1))
  return list.slice(0,5)
  }




function mostPopularAuthors(books, authors) {
  let vals = Object.values(books)
  const authorVals = Object.values(authors)
 const authorList = groupByKey(vals, 'authorId')
 const listKeys = Object.keys(authorList)
 const listVals = Object.values(authorList)
  let list = []
  let list0 = {}
  
  for(let ii = 0; ii<listKeys.length; ii++) {
    for(let jj = 0; jj<listVals[ii].length; jj++) {
      list0[listKeys[ii]] = listVals[ii][jj].borrows
    }
  }
  const keys = Object.keys(list0)
  const val = Object.values(list0)

  for(let ii = 0; ii < authorVals.length; ii++) {
    keys.forEach((key, index) => {
      if(authorVals[ii].id == key) {
        list.push( {
          name: `${authorVals[ii].name.first} ${authorVals[ii].name.last}`,
          count: Object.size(val[index])
        })
      }
    })
  }
    list.sort((listA, listB) => (listA.count > listB.count)? -1:1)
  return list.slice(0,5)
}


function groupByKey(array, key) {
  return array
    .reduce((hash, obj) => {
      if(obj[key] === undefined) return hash; 
      return Object.assign(hash, { [obj[key]]:( hash[obj[key]] || [] ).concat(obj)})
    }, {});
}

/**
 * Helper function to get the size of an object
 */
Object.size = function(obj) {
  let size = 0, key;
  for (key in obj) {
      if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  mostCommonGenres,
  mostPopularBooks,
  mostPopularAuthors,
};
