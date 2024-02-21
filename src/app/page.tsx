import Image from "next/image";
import "./page.css";

import React from 'react';

const FlipDotList: React.FC = () => {
  return (
    <ul data-flip="">
      {Array.from({ length: 810 }, (_, i) => (
        <li key={i}>
          <div className="flipper">
            <div className="flipper__dot">
              <span className="flipper__front"> {/* front content */}</span>
              <span className="flipper__back"> {/* back content */}</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export { FlipDotList };

export default function Home() {
  return (
    <main className="">
      <h1 className="text-4xl font-bold">MainFrame</h1>
      <p className="text-lg font-light">
        The portfolio of Pablo cantudo.<br />
      </p>
    </main>
  );
}
