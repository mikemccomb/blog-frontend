export function PostsIndex(props) {
  console.log(props);
  return (
    <div id="posts-index">
      {props.posts.map((post) => (
        <div key={post.id} className="post">
          <h2>{post.title}</h2>
          <img src={post.image} alt={post.title} />
          <br />
          <button onClick={() => props.onShowPost(post)}>Full post</button>
        </div>
      ))}
    </div>
  );
}
