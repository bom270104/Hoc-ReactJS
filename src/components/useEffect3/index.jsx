import { useState, useEffect } from "react";
function UseEffect2() {
  const [data, setData] = useState([]);
  const [quantityPage, setQuantityPage] = useState(0);
  const [pageActive, setPageActive] = useState(0);
  const limit = 10;
  useEffect(() => {
    fetch(
      `https://dummyjson.com/products?skip=${pageActive * limit}&limit=${limit}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.products);
        setQuantityPage(Math.ceil(data.total / limit));
      });
  }, [pageActive]);
  console.log(data);
  const handelClickPagi = (e) => {
    setPageActive(e);
  };

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
      <ul className="pagination">
        {[...Array(quantityPage)].map((_, index) => (
          <li onClick={() => handelClickPagi(index)} key={index}>
            {index + 1}
          </li>
        ))}
      </ul>
    </>
  );
}
export default UseEffect2;
