var posts=["p/clypps28f0000louqa5jugv0x.html","p/clypps28n0003louqcpsphhsq.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };