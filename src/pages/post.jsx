import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import { useFetching } from "../hooks/useFetching";
import MyLoader from "../components/UI/loader/MyLoader";
import PostComments from "../components/PostComments";

const PostPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [fetchPost, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(params.id);
    setPost(response.data);
  });

  useEffect(() => {
    fetchPost(params.id);
  }, []);

  return (
    <div>
      {error && <div>{error}</div>}
      {isLoading ? (
        <MyLoader />
      ) : (
        <div>
          <div>
            <label>Id - {post.id}</label>
            <label>Название - {post.title}</label>
            <p>Описание - {post.body}</p>
          </div>
          <div>
            <PostComments postId={params.id}/>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostPage;
