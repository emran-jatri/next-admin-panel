const Dropdown = (props) => {
  const { title, children } = props;
  return (
    <details className="text-xl hover:bg-white hover:text-black rounded-xl mx-4 cursor-pointer overflow-hidden transition-all duration-300 ease-linear">
      <summary className="p-4 flex items-center">
        {title}
        <button className="ml-auto">
          <svg
            className="fill-current opacity-75 w-4 h-4 -mr-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
          </svg>
        </button>
      </summary>
      <div className="p-4">{children}</div>
    </details>
  );
};

export default Dropdown;
