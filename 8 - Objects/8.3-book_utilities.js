const book1 ={
  title :'boring',
  author : 'john doe',
  cover : 'paperback',
  year_published : 1984,
  latestEdition : 2019
}
const book2 ={
  title :'more boring',
  author : 'mary cho',
  cover : 'hardback',
  year_published : 2002
}
const bookUtils = {
  getFirstPublished : function(book1, book2){
    book1.year_published < book2.year_published ? console.log(book1) : console.log(book2);
  },
  setNewEdition : function(book, editionYear){
    book.latestEdition = editionYear;
  },
  setLanguage : function(book,lang){
    book.language = lang;
  },
  setTranslation : function(book, lang, translator){
    book.translation = {translator , lang};
  },
  setPublisher : function(book,name,location){
    book.publisher = {name, location};
  },
  isSamePublisher(book1,book2){
    return JSON.stringify(book1.publisher) === JSON.stringify(book2.publisher);
  }
};
console.log(bookUtils.getFirstPublished(book1,book2));
console.log(bookUtils.setNewEdition(book1,2020),book1);
console.log(bookUtils.setTranslation(book2,'Chinese','Xia Xia'),console.log('Translation',book2));
console.log(bookUtils.setTranslation(book1,'Chinese','Xia Xia'),console.log('Translation',book1));
console.log(bookUtils.setPublisher(book1,'lion','israel'),book1);
console.log(bookUtils.setPublisher(book2,'lion','israel'),book2);
console.log(bookUtils.isSamePublisher(book1,book2),'is same pub?');

