import React, { useEffect, useRef, useState } from "react";
import { useFetching } from "../hooks/useFetching";
import { getPagesCount } from "../utils/pages";
import { usePosts } from "../hooks/usePosts";
import "../styles/post.css";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/modal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import PostService from "../API/PostService";
import MyLoader from "../components/UI/loader/MyLoader";
import MyPager from "../components/UI/pagination/MyPager";
import MySelect from "../components/UI/select/MySelect";
import { useObservable } from "../hooks/useObservable";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ query: "", sort: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(20);
  const [page, setPage] = useState(1);
  const scrollElement = useRef();
  

  const [fetchPosts, arePostsFetching, postFetchingError] = useFetching(
    async (_limit, _page) => {
      const response = await PostService.getAll(_limit, _page);
      const totalPosts = response.headers["x-total-count"];
      setTotalPages(getPagesCount(totalPosts, limit));
      setPosts([...posts, ...response.data]);
    }
  );

  const sortedAndFilteredPosts = usePosts(posts, filter.sort, filter.query);

  useObservable(scrollElement, page < totalPages, arePostsFetching, () => setPage(page + 1))

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((x) => x.id !== post.id));
  };

  const changePage = (pg) => {
    setPage(pg);
  };

  return (
    <div className="App">
      <MyButton onClick={() => setModal(true)}>Создать пост</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} cancel={() => setModal(false)}></PostForm>
      </MyModal>
      <PostFilter filter={filter} setFilter={setFilter} />
      
      <MySelect options={[
        {value: 10, title: "10"},
        {value: 25, title: "25"},
        {value: 50, title: "50"},
        {value: -1, title:"Показать всё"}]}
        onChange={(value) => setLimit(value) }
        defaultValue="Кол-во элементов на страницуе"
      />
      
      {postFetchingError && <h1>Произошла ошибка: {postFetchingError}</h1>}

      <PostList
        remove={removePost}
        title="Список постов"
        posts={sortedAndFilteredPosts}
      />
      <div ref={scrollElement} style={{height:"20px"}}/>

      {arePostsFetching && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <MyLoader />
        </div>
      )}

      <MyPager
        totalPages={totalPages}
        currentPage={page}
        changePage={changePage}
      ></MyPager>
    </div>
  );
};

export default Posts;
