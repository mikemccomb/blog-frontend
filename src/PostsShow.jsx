export function PostsShow(props) {
  return (
    <div id="posts-show">
      <h1>Did you read...</h1>
      <h2>{props.post.title}</h2>
      <p>{props.post.body}</p>
      <img src={props.post.image} alt={props.post.title} />
    </div>
  );
}
