import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div className="shrink-0">
          <img  className="h-12 w-12" src="./public/next.svg" alt="ChitChat Logo" />    
        </div>
        <div>
        <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-slate-500">You have a new mesage!</p>
        </div>
      </div>
    </main>
  );
}
