import toast, { Toaster } from "react-hot-toast";
const SearchBar = (handleQuery) => {
  const createQuery = (evt) => {
    evt.preventDefault();
    const newQuery = evt.target.elements.query.value.trim().toLowerCase();
    if (newQuery === "") return toast.error("Search cannot be empty");
    
    evt.target.reset();
    return handleQuery(newQuery);
  };
  return (
    <header>
      <form onSubmit={createQuery}>
      
     
        <input
         
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="query"
        />
          <button type="submit">Search</button>
          <Toaster />
     
      </form>
    </header>
  );
};

export default SearchBar;
