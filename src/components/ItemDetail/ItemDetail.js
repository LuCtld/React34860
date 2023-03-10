import {useState, useContext} from "react"
import ItemCount from '../ItemCount/ItemCount'
import {Link} from 'react-router-dom'
import './ItemDetail.css'
import { CartContext } from "../Context/CartContext"




const ItemDetail =({ name, id, img, category, description, stock, price}) => {



    const [quantity, setQuantity] = useState (0)

    const {addItem} = useContext (CartContext)

    const handleOnAdd = (quantity) => {
        console.log (`Se agregaron ${quantity}, ${name} `, quantity, price)

        setQuantity(parseInt(quantity))

        addItem ({id, name, quantity, price})


    }



    return (
        <div className="container-fluid-item-detalle">
            <h4>{name}</h4>
            <p>{category}</p>
            <img src={img} alt={name}/>
            <p>$ {price}</p>
            <p>Descripción: {description}</p>
            {
                quantity > 0 ? (
                    <Link to={"/cart"}>Finalizar Compra</Link>
                ) : (
                    <ItemCount stock={stock} onAdd={handleOnAdd}/>
                )
            }

        </div>
    )
}

export default ItemDetail