import css from "./ SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
const SearchBar = ({handleQuery}) => {
  const createQuery = (evt) => {
    evt.preventDefault();
    const newQuery = evt.target.elements.query.value.trim().toLowerCase();
    if (newQuery === "") return toast.error("Search cannot be empty");
    
    evt.target.reset();
    return handleQuery(newQuery);
  };
  return (
    <header className={css.container}>
      <form  className={css.form} onSubmit={createQuery}>
      
     
        <input
         className={css.text}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="query"
        />
          <button className={css.button} type="submit">Search</button>
          <Toaster />
     
      </form>
    </header>
  );
};

export default SearchBar;
