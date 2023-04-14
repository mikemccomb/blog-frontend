export function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form>
        <div>
          Title: <input type="text"></input>
        </div>
        <div>
          Body: <input type="text"></input>
        </div>
        <div>
          Image: <input type="file" id="myFile" name="filename"></input>
        </div>
        <div>
          <input type="submit"></input>
        </div>
      </form>
    </div>
  );
}
