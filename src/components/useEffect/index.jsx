import { useEffect } from "react";

function UseEffect1() {
  useEffect(() => {
    const liItem = document.querySelectorAll("ul li");
    console.log(liItem);
  });
  return (
    <>
      <ul>
        <li>Mục 1</li>
        <li>Mục 2</li>
        <li>Mục 3</li>
      </ul>
    </>
  );
}

export default UseEffect1;
