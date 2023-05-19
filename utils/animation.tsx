import { MouseEvent } from "react";
import animation from "../styles/animation.module.scss";

export const rubberband = (e: MouseEvent) => {
  const el = e.target;
  // Type guard
  if (el instanceof Element) {
    el.classList.add(animation.rubberband);
    // console.log(el.classList);
    el.addEventListener("animationend", () => {
      el.classList.remove(animation.rubberband);
    });
  }
};

export const awaitTimeout = (delay: number) =>
  new Promise((resolve) => setTimeout(resolve, delay));

// NOT in use
export const rubberbandIn = async (chars: NodeListOf<Element>) => {
  // console.log("running!");
  
  for (let char of chars) {
    // console.log(char);
    char.classList.add(animation.rubberband);
    await awaitTimeout(100);
    
  }
  await awaitTimeout(2000);
  for (let char of chars) {
    char.classList.remove(animation.rubberband);
  }
};

// NOT in use
export const runRubberbandIn = () => {
  if (process.browser) {
    rubberbandIn(document.querySelectorAll(".rubberband-group span"));
  }
};
