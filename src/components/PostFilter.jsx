import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect"

const PostFilter = function ({filter, setFilter}) {
  return (
    <div>
      <MyInput
        placeholder="Поиск..."
        value={filter.query}
        onChange={(event) =>
          setFilter({ ...filter, query: event.target.value })
        }
      />

      <MySelect
        options={[
          {
            title: "По названию",
            value: "title",
          },
          {
            title: "По описанию",
            value: "body",
          },
        ]}
        defaultValue="Сортировка по"
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
      />

    </div>
  );
};

export default PostFilter;