var posts=["2025/03/20/hello-world/","2025/03/20/408/数据结构/","2025/03/20/高数/高数/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };