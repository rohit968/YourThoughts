const API_URL = "http://localhost:3000/api/posts/";
const API_BASE_URL = "http://localhost:3000/";

window.onload = () => {
  getPosts();
  getPostIdParams();
};

const getPostIdParams = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get("id");
};

const getPosts = () => {
  const postId = getPostIdParams();
  const url = `${API_URL}${postId}`;
  fetch(url, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      buildPosts(data);
    });
};

const buildPosts = (data) => {
  const postDate = new Date(parseInt(data.added_date)).toDateString();
  document.getElementById("individual__post__title").innerHTML = data.title;
  document.getElementById("individual__post__content").innerHTML = data.content;
  document.getElementById(
    "individual__post__date"
  ).innerHTML = `Published on ${postDate}`;

  const postImage = `${API_BASE_URL}${data.post_image}`;
  document.querySelector("header").style.backgroundImage = `url(${postImage})`;
};
