import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-white"
      style={{
        background: "linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%)",
      }}
    >
      <p className="text-sm uppercase tracking-widest mb-4">
        Erreur 404
      </p>

      <h1 className="text-3xl md:text-4xl font-light mb-4">
        Cette page n’existe pas… ou plus.
      </h1>

      <div className="w-full max-w-md mb-20">
        <h1 className="text-9xl font-normal">404</h1>
      </div>

      <Link
  href="/"
  title="Retour à l'accueil"
  className="flex items-center justify-evenly px-4 md:px-20 py-4 border-2 border-black rounded-[10px] font-medium text-black text-[1.2rem] gap-[10px] transition-transform duration-200 ease-in-out hover:-translate-y-[5px] hover:-translate-x-[5px] hover:text-black hover:shadow-[5px_5px_0_rgb(0,0,0)]"
  style={{ background: "var(--accent-color)" }}
>
        Retour à l’accueil
      </Link>
    </div>
  );
}