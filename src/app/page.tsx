"use client"
import Image from "next/image";
import "./page.css";

import React from 'react';
import { useRef, useEffect } from 'react';
import { AnyNode } from "postcss";

export default function Home() {
  const ref = useRef(null);
  const [nElements, setNElements] = React.useState(0);
  const [pixelWidth, setPixelWidth] = React.useState(0);

  let update_nelements = (ref: any) => {
      let pixel_width = 8;
      let ref_width = (ref.current as HTMLUListElement).clientWidth;

      let n_cols = 10;
      let n_elements = Math.floor(ref_width / pixel_width) * n_cols;

      setNElements(n_elements);
  }

  let update_pixelwidth = (ref: any) => {
    let ref_width = (ref.current as HTMLUListElement).clientWidth;
    let pixel_width = Math.floor(ref_width/(nElements/10));
    setPixelWidth(pixel_width);  
  }


  useEffect(() => {
    if (ref.current) {
      update_nelements(ref);
    }
  }, [ref]);



  


  return (
    <main className="">
      <h1 className="text-4xl font-bold">MainFrame</h1>
      <p className="text-lg font-light">
        The portfolio of Pablo cantudo.<br />
      </p>
      <ul data-flip="" ref={ref} >
        {(new Array(nElements)).fill(null).map((_, i) => (
          <li key={i}>
            <div className="flipper" >
                <div className="flipper__dot">
                <span className="flipper__front">
                  {/* Front content */}
                </span>
                <span className="flipper__back">
                  {/* Back content */}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
