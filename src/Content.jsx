import axios from "axios";
import { useState, useEffect } from "react";
import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { Modal } from "./Modal";

export function Content() {
  const [posts, setPosts] = useState([]);

  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((Response) => {
      console.log(Response.data);
      setPosts(Response.data);
    });
  };
  useEffect(handleIndexPosts, []);

  return (
    <div>
      <PostsNew />
      <Modal show={false}>
        <p>TEST</p>
      </Modal>
      <PostsIndex posts={posts} />
    </div>
  );
}
