export function PostsIndex(props) {
  console.log(props);
  return (
    <div className="posts-index">
      {props.posts.map((post) => (
        <div key={post.id} className="post">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <img src={post.image} alt="Alt Text" />
        </div>
      ))}
    </div>
  );
}
