var posts=["p/clypqbsgw000298uq67vwfit6.html","p/clypqbsgz000398uq500t60dh.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };