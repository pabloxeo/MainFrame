import Image from "next/image";

export default function Home() {
  return (
    <main className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent">
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div className="shrink-0">
          <img src="./public/next.svg" alt="ChitChat Logo" />    
        </div>
        <div>
        <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-slate-500">You have a new mesage!</p>
        </div>
      </div>
    </main>
  );
}
