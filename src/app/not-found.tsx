import Link from "next/link";

const NotFound = () => {
  return (
    <div className="grid gap-4 place-content-center h-screen">
      <h2 className="text-center text-2xl">404</h2>
      <Link
        href="/"
        className="bg-black text-white px-4 py-2 rounded hover:bg-slate-700"
      >
        Volver al inicio
      </Link>
    </div>
  );
};
export default NotFound;
