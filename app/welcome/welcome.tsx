import { Link } from "react-router";

export function Welcome() {
  return (
    <main className="pageContent flex items-center justify-center h-screen w-full pb-4">
      <div className="flex flex-col items-center text-center">
        <h1 className="welcomeMainTitle">Faceit</h1>
        <h2 className="welcomeSecondTitle">Statistics</h2>
        <Link to="/search" className="startButton bg-black text-white mt-5 px-6 py-2 rounded hover:bg-gray-800 transition-colors">
          START!
        </Link>
      </div>
    </main>
  );
}
