import { useState } from "react";

export function PostsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");

  console.log(props);
  return (
    <div id="posts-index">
      <div id="search-filter">
        Search filter:{"  "}
        <input type="search" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} />
      </div>
      {props.posts
        .filter((post) => post.body.toLowerCase().includes(searchFilter.toLowerCase()))
        .map((post) => (
          <div key={post.id} className="post">
            <h2>{post.title}</h2>
            <a href={`/posts/${post.id}`}>
              <img src={post.image} alt={post.title} />
            </a>
            <br />
            <div className="d-grid gap-2 col-6 mx-auto">
              <button onClick={() => props.onShowPost(post)}>Edit post</button>
            </div>
          </div>
        ))}
    </div>
  );
}
