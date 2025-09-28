const jsonArray = [ 
  {
    "title": "sampleTitle1",
    "author": "sampleAuthor1",
    "libraryID": 345
  },
  {
    "title": "sampleTitle2",
    "author": "sampleAuthor2",
    "libraryID": 123
  },
  {
    "title": "sampleTitle3",
    "author": "sampleAuthor3",
    "libraryID": 567
  }
]

let sortedJSON = jsonArray.sort((a, b) => {
    return a.libraryID - b.libraryID;
});

console.log(sortedJSON);