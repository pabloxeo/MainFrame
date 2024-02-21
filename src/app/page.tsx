import Image from "next/image";
import "./page.css";

import React from 'react';

/*export default function Home() {
  return (
    <main className="">
      <h1 className="text-4xl font-bold">MainFrame</h1>
      <p className="text-lg font-light">
        The portfolio of Pablo cantudo.<br />
      </p>
    </main>
  );
*/
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">MainFrame</h1>
      <p className="text-lg font-light">
        The portfolio of Pablo cantudo.<br />
      </p>
      <ul className="grid grid-cols-36 gap-1">
        {(new Array(810)).fill(null).map((_, i) => (
          <li key={i} className="w-6 h-6">
            <div className="group relative w-full h-full">
              <div className="absolute inset-0 bg-black rounded-md opacity-0 group-hover:opacity-100 transform transition-transform">
                {/* Front content */}
              </div>
              <div className="absolute inset-0 bg-white rounded-md opacity-100 group-hover:opacity-0 transform transition-transform rotate-y-180">
                {/* Back content */}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
