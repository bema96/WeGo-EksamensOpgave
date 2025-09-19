export const Time = ({ className = "", ...props }) => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M8.5 15.625C12.435 15.625 15.625 12.435 15.625 8.5C15.625 4.56497 12.435 1.375 8.5 1.375C4.56497 1.375 1.375 4.56497 1.375 8.5C1.375 12.435 4.56497 15.625 8.5 15.625Z"
        stroke="#999999"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.70837 5.33337V9.29171H11.6667"
        stroke="#999999"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
