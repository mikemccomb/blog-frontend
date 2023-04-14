export function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form>
        <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Title:
          </span>
          <input
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
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <div class="mb-3">
          <label for="formFile" class="form-label">
            Upload Image:
          </label>
          <input class="form-control" type="file" id="formFile" />
        </div>
        <div>
          <input type="submit"></input>
        </div>
      </form>
    </div>
  );
}
