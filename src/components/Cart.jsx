import React from 'react';
import { useCart } from 'react-use-cart';

const Cart = () => {
  const [ medicine, setMedicine ] = useState([]);
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
     } = useCart();

     if(isEmpty) return <h1 className='text-center'>Your Cart is Empty</h1>

    return(
        <section className='py-4 container'>
        <div className='row justify-content-center'>
            <div className='col-12'>
                <h5>Cart ({totalUniqueItems }) total Items: ({totalItems}) </h5>
                <table className='table table-light table-hover m-0'>
                    <tbody>
                    {medicine.map((m) =>{
                        return(
                        
                        <tr key={m.medicineId}>
                            <td>
                                <img src={m.img} style ={{height: '6rem'}}/>
                            </td>
                            <td>
                                {m.medicineName}
                            </td>
                            <td>
                                {m.medicineCost}
                            </td>
                            <td>Quantity: ({m.quantity})</td>
                            <td>
                                <button 
                                    className='btn btn-info ms-2'
                                    onClick={() => updateItemQuantity(m.medicineId,m.quantity - 1)}
                                >
                                    -
                                </button>
                                <button 
                                    className='btn btn-info ms-2'
                                    onClick={() => updateItemQuantity(m.medicineId,m.quantity + 1)}
                                >
                                    +
                                </button>         
                                <button 
                                    className='btn btn-danger ms-2'
                                    onClick={() => removeItem(m.medicineId)}
                                >
                                    Remove Item
                                </button>                   
                            </td>
                            
                        </tr>)

                    })}
                    </tbody>
                </table>
            </div>
            <div className='col-auto ms-auto'>
                <h2>Total Price : {cartTotal}</h2>
            </div>
            <div className='col-auto'>
                <button 
                    className='btn btn-danger m-2'
                    onClick={()=> {
                        emptyCart()
                    }}
                >
                 Clear Cart
                </button>
                <button 
                    className='btn btn-primary m-2'>
                    Buy Now
                </button>
                
            </div>
        </div>
        </section>
    );
};

export default Cart;