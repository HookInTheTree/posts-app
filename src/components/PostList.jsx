import React from "react";
import PostItem from "./PostItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const PostList = function ({ title, posts, remove }) {
  return (
    <div>
      <div>
        <h1 style={{ textAlign: "center" }}>{title}</h1>
      </div>
      <div>
        {posts.length ? (
          <TransitionGroup>
            {posts.map((postItem, index) => (
              <CSSTransition key={postItem.id} timeout={500} classNames="post">
                <PostItem
                  removePost={remove}
                  post={postItem}
                  number={index + 1}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        ) : (
          <h1 style={{ textAlign: "center" }}>Нет данных для отображения</h1>
        )}
      </div>
    </div>
  );
};
export default PostList;
