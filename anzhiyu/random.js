var posts=["p/clypqx0e30003t0uq1be6f2ph.html","p/clypqx0dv0001t0uq7bug07mv.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };