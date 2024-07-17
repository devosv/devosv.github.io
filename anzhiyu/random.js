var posts=["p/b521d8e5e4fe.html","p/a7d9601fe65e.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };