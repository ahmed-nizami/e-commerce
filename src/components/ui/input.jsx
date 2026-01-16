const Input = ({ value, onChange, placeholder, className = "" }) => {
  return (
    <div
      className={`flex items-center gap-3 bg-[#D9D9D9] rounded px-6 py-4 w-full max-w-md ${className}`}
    >
      {/* Search Icon */}
      <svg
        className="h-5 w-5 text-black"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
        />
      </svg>

      {/* Input */}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-transparent outline-none text-base text-gray-700 placeholder-gray-500"
      />
    </div>
  );
};

export default Input;
