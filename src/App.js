import React, { useState, useMemo } from "react";
// import Counter from "./components/Counter";
// import Input from "./components/Input";
// import ClassCounter from './components/ClassCounter'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/Myinput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "ббб", body: "description" },
    { id: 2, title: "ааа", body: "description" },
    { id: 3, title: "ввв", body: "description" },
  ]);

  const [selectedSort, setSelectedSort] = useState("");

  const [searchQuery, setSearchQuery] = useState("");

  const sortedPosts = useMemo(() => {
    console.log("ВСЕ ЧЕТКО РАБОТАЕТ");
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    }
    return posts;
  }, [selectedSort, posts]);

  const sortedAndSearchPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase.includes(searchQuery)
    );
  }, [searchQuery, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPost = (sort) => {
    setSelectedSort(sort);
  };

  return (
    <div>
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <MyInput
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Поиск..."
      />
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPost}
          defaultValue="Сортировка по ..."
          options={[
            { value: "title", name: "По названию" },
            { value: "body", name: "По описанию" },
          ]}
        />
      </div>
      {sortedAndSearchPosts.length !== 0 ? (
        <PostList
          remove={removePost}
          posts={sortedAndSearchPosts}
          title="Список постов 1"
        />
      ) : (
        <h1 style={{ textAlign: "center" }}>Постов нету !</h1>
      )}
    </div>
  );
}

export default App;
