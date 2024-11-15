import toast, { Toaster } from "react-hot-toast";
const SearchBar = (onSearch) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const topic = form.elements.search.value;

    if (topic.trim() === "") {
      toast.error("This didn't work.");
      return;
    }
    onSearch(topic);
    form.reset();
  };
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
          <Toaster />
        </div>
      </form>
    </header>
  );
};

export default SearchBar;
