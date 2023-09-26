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
        // let appetiserCopy = appetisers;
        // let selectedItem = appetiserCopy.filter((appetiser) => appetiser.name === name)[0];
        // selectedItem.counter = counter + 1;
        // let index = appetisers.indexOf(selectedItem);
        // appetiserCopy.splice(index,1,selectedItem);
        // console.log("appe ",appetisers);
        // setAppetiser(appetiserCopy);
        // console.log(appetisers);
        
    }
    function decreaseAppetiser({name, price, counter}){
        if (counter === 0) return;
        const appetisersIndex = state.appetisers.findIndex(appetiser => appetiser.name == name);
        let newArray = [...state.appetisers];
        newArray[appetisersIndex]={...newArray[appetisersIndex], counter:counter-1};
        setState({appetisers:newArray});
    }

    function addToCart(appetiser){
        let newArray = [...cart];
        newArray.push(appetiser);
        setCart(newArray);
    }
    return(
        <main className="menu-center fade-in-animation">
            <h1>Our Menu</h1>
            {
                cart.length > 0 &&
                (
                    <div>
                        {cart.map((item) => {
                            return (
                                <>
                                    <span>item: {item.name}</span>
                                    <span>price: {item.price}</span>
                                    <span>count: {item.counter}</span>
                                </>
                            )
                        })}
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
                            state.appetisers.map((appetiser) =>{
                                return (
                                    <>
                                        <li>{appetiser.name}</li>
                                        <li>
                                            ${appetiser.price}
                                            <div>
                                                <button onClick={() => increaseAppetiser(appetiser)}>+</button>
                                                <span>{appetiser.counter}</span>
                                                <button onClick={() => decreaseAppetiser(appetiser)}>-</button>
                                            </div>
                                            <div>
                                                <button onClick={() => addToCart(appetiser)}>Add Item</button>
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