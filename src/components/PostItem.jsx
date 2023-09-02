import { useNavigate } from "react-router-dom";
import MyButton from "./UI/button/MyButton";

const PostItem = function (props) {
  const router = useNavigate()

  return (
    <div className="post">
      <div className="post_content">
        <strong>{props.post.id}. {props.post.title}</strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post_btns">
        <MyButton onClick={() => router(`/posts/${props.post.id}`)} type="button">Открыть</MyButton>
        <MyButton onClick={() => props.removePost(props.post)} type="button">Удалить</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
