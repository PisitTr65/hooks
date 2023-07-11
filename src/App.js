import { useState } from "react";
import "./App.css";

function App() {
  const [totalPrice, setTotalprice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [product1, setProduct1] = useState(40000);
  const [product2, setProduct2] = useState(20000);
  const [product3, setProduct3] = useState(30000);
  return (
    <div className="App">
      <div>
        <h3>จำนวนสินค้าในตะกร้า {totalItems}</h3>
        <h3>ราคาสินค้าในตะกร้าทั้งงหมด {totalPrice} บาท</h3>
        <img
          src="5-Samsung-Galaxy-Z-Fold3.jpg"
          alt="5-Samsung-Galaxy-Z-Fold3"
          width="15%"
        />
        <br />
        github ราคา {product1} บาท
      </div>
      <button
        onClick={() => {
          setTotalItems(totalItems + 1);
          setTotalprice(totalPrice + product1);
        }}
      >
        เพื่มเข้าตะกล้า
      </button>
      <button
        onClick={() => {
          if (totalItems > 0) {
            setTotalItems(totalItems - 1);
            setTotalprice(totalPrice - product1);
          }
        }}
      >
        นำออกจากตะกล้า
      </button>
      <div>
        <img
          src="packshot-samsung-galaxy-a73-mint.png"
          alt="packshot-samsung-galaxy-a73-mint"
          width="15%"
        />
        <br />
        github ราคา {product2} บาท
      </div>
      <button
        onClick={() => {
          setTotalItems(totalItems + 1);
          setTotalprice(totalPrice + product2);
        }}
      >
        เพื่มเข้าตะกล้า
      </button>
      <button
        onClick={() => {
          if (totalItems > 0) {
            setTotalItems(totalItems - 1);
            setTotalprice(totalPrice - product2);
          }
        }}
      >
        นำออกจากตะกล้า
      </button>
      <div>
        <img
          src="06563f7a21544f7ebd90efaf635d01fc.jpg"
          alt="06563f7a21544f7ebd90efaf635d01fc"
          width="15%"
        />
        <br />
        github ราคา {product3} บาท
      </div>
      <button
        onClick={() => {
          setTotalItems(totalItems + 1);
          setTotalprice(totalPrice + product3);
        }}
      >
        เพื่มเข้าตะกล้า
      </button>
      <button
        onClick={() => {
          if (totalItems > 0) {
            setTotalItems(totalItems - 1);
            setTotalprice(totalPrice - product3);
          }
        }}
      >
        นำออกจากตะกล้า
      </button>
    </div>
  );
}

export default App;
