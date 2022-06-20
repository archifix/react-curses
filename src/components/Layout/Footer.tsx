import React from "react";
import "../styles/footer.scss";

const PageFooter: React.FC = () => {
  return (
    <footer className="bg-neutral-700 text-center lg:text-left ">
      <div className="text-gray-300 text-center sticky top-0 z-30 w-full px-2 py-2 sm:px-2 ">
        <p>&copy; Южный округ войск национальной гвардии </p>
      </div>
    </footer>
  );
};

export default PageFooter;
