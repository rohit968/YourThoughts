const API_URL = "http://localhost:3000/api/posts";
const API_BASE_URL = "http://localhost:3000/";

window.onload = () => {
  getPosts();
};

const getPosts = () => {
  fetch(API_URL, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      buildPosts(data);
    });
};

const buildPosts = (blogPosts) => {
  let blogPostsContent = "";
  for (blogPost of blogPosts) {
    const postDate = new Date(parseInt(blogPost.added_date)).toDateString();
    const postImage = `${API_BASE_URL}${blogPost.post_image}`;
    const postLink = `/post.html?id=${blogPost.id}`;
    blogPostsContent += `<a class="post__link" href=${postLink}>
      <div class="post">
        <div class="post__image" style="background-image: url(${postImage})"></div>
        <div class="post__content">
          <div class="post__date">${postDate}</div>
          <div class="post__title"><h4>${blogPost.title}</h4></div>
          <div class="post__text">${blogPost.content}</div>
        </div>
      </div>
    </a>`;
  }
  document.querySelector(".blog__posts").innerHTML = blogPostsContent;
};
