import React from "react";
import Navbar from "../../components/navbar";
import Card from "../../components/card";
import { useState, useEffect } from "react";

import './homepage.css'
function Homepage(){
    const [arr,setArr] = useState([]);
    const pageArr = [];
    const [newArr, setNewArr] = useState([]);
    const [page,setPage] = useState(1);
    const getData = () => {
        fetch(`http://localhost:8082/watch-data`,{
            method: "GET",
        })
        .then((res) => res.json())
        .then((data) => {
            setArr(data);
            const start = (page-1)*5;
            const end = page*5;
            const newData = data.slice(start,end);
            setNewArr(newData);
        });
        
    }

    useEffect(() => {
        getData();
    },[page]);      //never take out the [], the page will reload infinitely

    useEffect(() => {
        getNewData();
    },[page]);

    const pageNumbers = Math.ceil(arr.length / 5);


    for(let i= 1; i<=pageNumbers;i++){
        pageArr.push(i);
    }


    const handleClick = () => {
        
    };

    const getNewData = () => {
        const start = (page-1)*5;
        const end = page*5;
        const newData = arr.slice(start,end);
        setNewArr(newData);
    }

    const handlePage = (page) => {
        setPage(page);
    }
    
    return(
        <div>
            <Navbar />
            <button onClick={handleClick}>Click</button>
            <div className="parent">
            {newArr.map((el) => {
                    return (
                        <div>
                        <Card
                            imgSrc={el.imgSrc}
                            title={el.title}
                            price={el.price}
                            rating={el.rating}
                        />
                        </div>
                    )
                })
            }
            </div>
            {pageArr.map((el) => {
                    return (
                        <button onClick={()=>handlePage(el)}>{el}</button>
                    )
                })
            } 
        </div>
    );
}

export default Homepage;