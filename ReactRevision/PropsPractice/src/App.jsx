import { useState } from 'react'
import Product from './Components/Product';
const products = [
  {
    name: "Wireless Mouse",
    price: 25.99,
    description: "A high-precision wireless mouse with long battery life."
  },
  {
    name: "Mechanical Keyboard",
    price: 79.99,
    description: "A durable mechanical keyboard with customizable RGB lighting."
  },
  {
    name: "HD Monitor",
    price: 149.99,
    description: "A 24-inch HD monitor with vibrant colors and sharp visuals."
  },
  {
    name: "Bluetooth Headphones",
    price: 59.99,
    description: "Comfortable over-ear Bluetooth headphones with noise-canceling feature."
  },
  {
    name: "Smartphone Stand",
    price: 14.99,
    description: "A versatile stand for smartphones and tablets, adjustable angle."
  },
  {
    name: "External Hard Drive",
    price: 89.99,
    description: "A 1TB external hard drive with fast USB 3.0 connectivity."
  },
  {
    name: "USB-C Hub",
    price: 34.99,
    description: "A multi-port USB-C hub with HDMI, USB, and Ethernet ports."
  },
  {
    name: "Portable Charger",
    price: 29.99,
    description: "A compact portable charger with 10,000mAh capacity and fast charging."
  },
  {
    name: "Fitness Tracker",
    price: 49.99,
    description: "A fitness tracker with heart rate monitor and sleep tracking."
  },
  {
    name: "Smart Light Bulb",
    price: 19.99,
    description: "A smart LED light bulb with adjustable brightness and color."
  },
  {
    name: "Laptop Stand",
    price: 39.99,
    description: "An ergonomic laptop stand with adjustable height and angle."
  },
  {
    name: "Gaming Mouse Pad",
    price: 12.99,
    description: "A large gaming mouse pad with smooth surface and non-slip base."
  },
  {
    name: "Noise-Canceling Earbuds",
    price: 49.99,
    description: "Compact noise-canceling earbuds with superior sound quality."
  },
  {
    name: "4K Action Camera",
    price: 199.99,
    description: "A waterproof 4K action camera with multiple accessories."
  },
  {
    name: "Smart Home Hub",
    price: 99.99,
    description: "A smart home hub that connects and controls various smart devices."
  }
];


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-rose-50 w-full'>
        <div className='p-10'>
          <div>
            <h1 className='text-4xl p-3 bg-indigo-500 text-center'>Practicing Props and Default properties</h1>
          </div>
          <div className="m-10 bg-white rounded-xl shadow-2xl grid grid-cols-5 gap-4">
            {products.map((product, index)=>
               (<Product name={product.name} price={product.price} desc={product.description} />)
            )}
            <Product/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
