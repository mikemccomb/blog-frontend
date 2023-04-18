import axios from "axios";

export function PostsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    const params = new FormData(event.target);
    axios.patch("http://localhost:3000/posts/" + props.post.id + ".json", params).then((response) => {
      console.log(response.data);
    });
  };

  return (
    // <div id="posts-show">
    //   <h1>Did you read...</h1>
    //   <h2>{props.post.title}</h2>
    //   <p>{props.post.body}</p>
    //   <img src={props.post.image} alt={props.post.title} />
    // </div>
    // <form onSubmit={handleSubmit}>
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
  );
}
