import React from "react";
import MyInput from './UI/input/Myinput';
import MySelect from './UI/select/MySelect';


const PostFilter = ({ filter, setFilter }) => {
  return (
    <>
      <MyInput
        value={filter.query}
        onChange={(e) => setFilter({...filter,query: e.target.value})}
        placeholder="Поиск..."
      />
      <div>
        <MySelect
          value={filter.query}
          onChange={selectedSort => setFilter({...filter,query: selectedSort})}
          defaultValue="Сортировка по ..."
          options={[
            { value: "title", name: "По названию" },
            { value: "body", name: "По описанию" },
          ]}
        />
      </div>
    </>
  );
};

export default PostFilter;
