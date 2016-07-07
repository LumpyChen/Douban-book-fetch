const http = require('http');
const name = process.argv[2];

console.log(`你搜索的书籍名称为${name}`);

const options = `http://api.douban.com/v2/book/search?count=1&q=${name}`

var req = http.get(options,function(res){
  switch(res.statusCode){
    case 200:
      console.log(`正在进行搜索……`)
      res.on('data',function(chunk){
      if(JSON.parse(chunk.toString()).books.length>0){
        console.log(`搜索到的书籍为：${JSON.parse(chunk.toString()).books[0].title}`)
      }else{
        console.log("并没有搜索到书籍。")
      }
    })
      break;
    default:
      console.log("错误类型：" + res.statusCode)
  }
})
