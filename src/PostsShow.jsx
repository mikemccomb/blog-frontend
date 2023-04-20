export function PostsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePost(props.post.id, params);
    event.target.reset();
  };

  const handleClick = () => {
    props.onDestroyPost(props.post);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Title:
          </span>
          <input
            defaultValue={props.post.title}
            name="title"
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Body:
          </span>
          <input
            defaultValue={props.post.body}
            name="body"
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Image URL:
          </span>
          <input
            defaultValue={props.post.image}
            name="image"
            type="url"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <div className="d-grid gap-2 col-6 mx-auto">
          <button type="submit">Confirm Edits</button>
        </div>
      </form>
      <div className="d-grid gap-2 col-6 mx-auto">
        <button type="submit" onClick={handleClick}>
          Delete Post
        </button>
      </div>
    </div>
  );
}
