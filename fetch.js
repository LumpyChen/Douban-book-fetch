(function(){

  var bookName = document.getElementById('name')
  var btn = document.getElementById('submit')
  btn.onclick = function(){

    fetch("https://api.douban.com/v2/book/search?count=5&q=" + bookName.value).then(function(res){
      if(res.ok){
        var arr = []
        res.json.then(function(data){
          data.books.forEach(function(ele){
            document.getElementById('searchResult').innerHTML += ele.title;
          })
        })
      }else {
        console.log("search fails.")
      }
    })
  }

})()
