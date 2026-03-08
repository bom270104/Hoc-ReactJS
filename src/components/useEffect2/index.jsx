import { useState, useEffect } from "react";
function UseEffect2() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data.products);
      });
  }, []);
  console.log(data);

  return (
    <>
      <div className="product__list">
        {data.map((item) => (
          <div className="product__item" key={item.id}>
            <img src={item.image} alt="" />
            <h3 className="title">{item.title}</h3>
            <p className="price">{item.price}</p>
            <p className="desc">{item.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
export default UseEffect2;
