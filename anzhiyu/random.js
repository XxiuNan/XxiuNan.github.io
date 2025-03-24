var posts=["2025/03/20/高数/","2025/03/20/数据结构/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };