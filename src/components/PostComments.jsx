import React, { useEffect, useState } from "react";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import MyLoader from "./UI/loader/MyLoader";

const PostComments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [fetchComments, isLoading, error] = useFetching(async (id) => {
    var response = await PostService.getPostComments(id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchComments(postId);
  }, []);

  return (
    <div>
      {error && <div>{error}</div>}
      {isLoading ? (
        <MyLoader />
      ) : (
        <div>
          {comments.map((comment) => (
            <div key={comment.id} style={{marginTop:"15px"}}>
              <h4>{comment.name} - {comment.email}</h4>
              <p>{comment.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostComments;
