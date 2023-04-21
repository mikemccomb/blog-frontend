import { useState } from "react";

export function PostsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");

  console.log(props);
  return (
    <div id="posts-index">
      <div id="search-filter">
        Search filter:{"  "}
        <input
          type="search"
          value={searchFilter}
          onChange={(event) => setSearchFilter(event.target.value)}
          list="titles"
        />
      </div>

      <datalist id="titles">
        {props.posts.map((post) => (
          <option key={post.id} value={post.title} />
        ))}
      </datalist>

      {props.posts
        .filter((post) => post.title.toLowerCase().includes(searchFilter.toLowerCase()))
        .map((post) => (
          <div key={post.id} className="post">
            <h2>{post.title}</h2>
            <a href={`/posts/${post.id}`}>
              <img src={post.image} alt={post.title} />
            </a>
            {localStorage.jwt === undefined ? null : (
              <>
                <br />
                <div className="d-grid gap-2 col-6 mx-auto">
                  <button onClick={() => props.onShowPost(post)}>Edit post</button>
                </div>
              </>
            )}
          </div>
        ))}
    </div>
  );
}
