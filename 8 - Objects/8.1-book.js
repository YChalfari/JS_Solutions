let whoReadsBooks = {
  title :'boring',
  author : 'john doe',
  cover : 'paperback',
  year_published : '1984'
};

function bookFilter(obj){
  return console.log(`The book ${obj.title} was written by ${obj.author} inthe year ${obj.year_published}`);
}
bookFilter(whoReadsBooks);