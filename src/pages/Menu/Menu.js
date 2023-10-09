import React, { useEffect, useState } from 'react';
import Counter from '../../components/counter/Counter';
import './Menu.css';
const Menu = () =>{
    const [state, setState] = useState({
        appetisers:[
            {
                "name":"lorem","price":20, "counter":0
            },
            {
                "name":"officia","price":10, "counter":0
            },
            {
                "name":"ipsum","price":5, "counter":0
            },
            {
                "name":"ullam","price":24, "counter":0
            }
        ]
    });
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    // const [appetiser, setAppetiser] = useState({0:0,1:0,2:0,3:0});
    // function increaseAppetiser(food, position){
    //     setAppetiser({...food,[position]:food[position] + 1})
    // }
    // function decreaseAppetiser(food, position){
    //     setAppetiser({...food,[position]:food[position] - 1})
    // }
    function increaseAppetiser({name, price, counter}){
        const appetisersIndex = state.appetisers.findIndex(appetiser => appetiser.name == name);
        let newArray = [...state.appetisers];
        newArray[appetisersIndex]={...newArray[appetisersIndex], counter:counter+1};
        setState({appetisers:newArray});        
    }
    function decreaseAppetiser({name, price, counter}){
        if (counter === 0) return;
        const appetisersIndex = state.appetisers.findIndex(appetiser => appetiser.name == name);
        let newArray = [...state.appetisers];
        newArray[appetisersIndex]={...newArray[appetisersIndex], counter:counter-1};
        setState({appetisers:newArray});
    }
    
    function addToCart(appetiser){
        if (appetiser.counter === 0) return;

        //Used structuredClone because object inside cart reference to same object
        let newArray = structuredClone(cart);

        //Since appetiser already exists just increase the counter
        let index = cart.findIndex(cartItem => cartItem.name == appetiser.name)
        if (index >= 0 ){
            newArray[index].counter = newArray[index].counter + appetiser.counter
        } else{
            newArray.push(appetiser);
        }
        setCart(newArray);
        // setTotalPrice(totalPrice + appetiser.counter * appetiser.price);
    }
    //remove from cart
    function removeFromCart({name, counter, price}){
        let newArray = structuredClone(cart);
        let index = newArray.findIndex(appetiser => appetiser.name == name);
        if(index < 0) {
            return //If item does not exist in cart do nothing
        }else if(index>=0 && counter > 1){ 
            if (newArray[index].counter === 0) return;//don't decrease if counter is at 0
            newArray[index].counter = newArray[index].counter-1;
        }else{ //item exists but only 1 then remove
            newArray.splice(index,1);
        }
        setCart(newArray);
        // setTotalPrice(totalPrice - counter * price)
    }

    useEffect(()=>{ // Cart Total in useEffect because removing or decreasing number of item not decreasing the price properly
        let totalArr = cart.map((value)=>value.price * value.counter);
        let priceTotal = totalArr.reduce((prev,curr) => prev + curr,0);
        setTotalPrice(priceTotal);
    },[cart])
    return(
        <main className="menu-center fade-in-animation">
            <h1>Our Menu</h1>
            {
                cart.length > 0 &&
                (
                    <div>
                        {cart.map((item) => {
                            return (
                                <li>
                                    <span>item: {item.name}</span> &nbsp;
                                    <span>price: {item.price}</span> &nbsp;
                                    <span>count: {item.counter}</span>
                                </li>
                            )
                        })}
                        <span>Total Price: {totalPrice}</span>
                    </div>
                )
            }
            
            <div className="menu move-up-animation">
                <div className="menu-card">
                    <div className="image">
                        <img src="./images/wallpaperflare.com_wallpaper.jpg" alt=""/>
                    </div>
                    <h2>Appetisers</h2>
                    <ul>
                        {
                            state.appetisers.map((appe) =>{
                                return (
                                    <>
                                        <li>{appe.name}</li>
                                        <li>
                                            ${appe.price}
                                            <div>
                                                <button onClick={() => increaseAppetiser(appe)}>+</button>
                                                <span>{appe.counter}</span>
                                                <button onClick={() => decreaseAppetiser(appe)}>-</button>
                                            </div>
                                            <div>
                                                <button onClick={() => addToCart(appe)}>Add Item</button>
                                                <button onClick={() => removeFromCart(appe)}>Remove Item</button>
                                            </div>
                                        </li>
                                    </>
                                )
                            })
                        }
                        {/* <li>lorem lorem lorem lorem</li>
                        <li>
                            $20
                            <div>
                                <button onClick={() => increaseAppetiser(appetiser, 0)}>+</button>
                                <span>{appetiser[0]}</span>
                                <button onClick={() => decreaseAppetiser(appetiser,0)}>-</button>
                            </div>
                            <Counter increase={() => increaseAppetiser(appetiser, 0)} count={appetiser[0]} decrease={() => decreaseAppetiser(appetiser,0)}/>
                        </li>
                        <li>officia</li>
                        <li>
                            $10
                            <Counter increase={() => increaseAppetiser(appetiser, 1)} count={appetiser[1]} decrease={() => decreaseAppetiser(appetiser,1)}/>
                        </li>
                        <li>ipsum</li>
                        <li>
                            $5
                            <Counter increase={() => increaseAppetiser(appetiser, 2)} count={appetiser[2]} decrease={() => decreaseAppetiser(appetiser, 2)}/>
                        </li>
                        <li>ullam</li>
                        <li>
                            $24
                            <Counter increase={() => increaseAppetiser(appetiser, 3)} count={appetiser[3]} decrease={() => decreaseAppetiser(appetiser, 3)}/>
                        </li> */}
                    </ul>
                </div>
                <div className="menu-card">
                    <div className="image">
                        <img src="./images/wallpaperflare.com_wallpaper.jpg" alt=""/>
                    </div>
                    <h2>Mains</h2>
                    <ul>
                        <li>lorem</li>
                        <li>$24.5</li>
                        <li>officia</li>
                        <li>$2.23</li>
                        <li>ipsum</li>
                        <li>$1.24</li>
                        <li>ullam</li>
                        <li>$5.6</li>
                    </ul>
                </div> 
            
                <div className="menu-card">
                    <div className="image">
                        <img src="./images/wallpaperflare.com_wallpaper.jpg" alt=""/>
                    </div>
                    <h2>Desserts</h2>
                    <ul>
                        <li>ullam</li>
                        <li>$4.5</li>
                        <li>ipsum</li>
                        <li>$4.5</li>
                        <li>lorem</li>
                        <li>$4.5</li>
                        <li>officia</li>
                        <li>$4.5</li>
                    </ul>
                </div>
                <div className="menu-card">
                    <div className="image">
                        <img src="./images/wallpaperflare.com_wallpaper.jpg" alt=""/>
                    </div>
                    <h2>Drinks</h2>
                    <ul>
                        <li>ipsum</li>
                        <li>$4.5</li>
                        <li>lorem</li>
                        <li>$4.5</li>
                        <li>ullam</li>
                        <li>$4.5</li>
                        <li>officia</li>
                        <li>$4.5</li>
                    </ul>
                </div>
            </div>  
    </main>
    )
}


export default Menu;