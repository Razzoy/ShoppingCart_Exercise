import { useContext, useEffect, useState } from "react"
import { CartContext } from "../context/CartContext";


export function Products() {

    const [products, setProducts] = useState();

    const {cartData} = useContext(CartContext)
    console.log("CardData is", cartData);
    

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then((data) => setProducts(data));
    }, []);
    
    return (
        <section>
            <h1>Products</h1>
            {products &&
            products.products.map((item) => {
                return (
                    <figure key={item.title}>
                        <h3>{item.title}</h3>
                        <img src={item.images[0]} alt="" />
                        <h4>€ {item.price}</h4>
                        <p>{item.description}</p>
                        <button>Add to cart</button>
                    </figure>
                )
            })}
        </section>
    )
}
