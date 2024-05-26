import Link from "next/link";

interface Props {
  totalPages: number;
  currentPage?: number;
}

const PostPagination = ({ totalPages, currentPage = 1 }: Props) => {
  return (
    <nav className="mx-auto">
      <ul className="inline-flex -space-x-px text-base h-10">
        <li>
          <Link
            href={`/page/${currentPage - 1}`}
            className={`${
              currentPage === 1
                ? "flex items-center justify-center px-4 h-10 leading-tight text-gray-300 bg-white border border-gray-300 pointer-events-none "
                : "flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
            }`}
          >
            Previous
          </Link>
        </li>
        {Array.from({ length: totalPages }).map((_, index) => (
          <li key={index}>
            <Link
              href={`/page/${index + 1}`}
              className={`${
                currentPage === index + 1
                  ? "flex items-center justify-center px-4 h-10 leading-tight text-gray-300 bg-white border border-gray-300 pointer-events-none "
                  : "flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
              }`}
            >
              {index + 1}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href={`/page/${currentPage + 1}`}
            className={`${
              currentPage === totalPages
                ? "flex items-center justify-center px-4 h-10 leading-tight text-gray-300 bg-white border border-gray-300 rounded-e-lg pointer-events-none"
                : "flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
            }`}
          >
            Next
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default PostPagination;
