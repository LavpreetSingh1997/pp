import React, {useEffect, useState} from "react";
import logo from "../../assets/project-management.png";

const Home = () => {
    const [currentPage, setCurrentPage] = useState();

    useEffect(()=>{

    },[])

    return <div style={{display: 'block', width: "100%"}}>
        <header className={"sticky-top align-items-center"} style={{
            display: "flex",
            position: "absolute",
            minHeight: "70px",
            backgroundColor: "#000241",
            width: "100%"
        }}>
            <nav>
                <div className="d-flex align-items-center px-5">
                    <div className="d-flex align-items-center">
                        <img src={logo} style={{height: "35px", objectFit: "cover"}}/>
                        <h4 className="ps-2 m-0 text-white">StockBox</h4>
                    </div>
                    <div className="d-flex" style={{paddingLeft: "70px"}}>
                        <p className={"m-0 pe-4 "} style={{color: "#e3e3e3", cursor: "pointer"}}>Home</p>
                        <p className={"m-0 pe-4"} style={{color: "#e3e3e3", cursor: "pointer"}}>Gainers</p>
                        <p className={"m-0 pe-4"} style={{color: "#e3e3e3", cursor: "pointer"}}>Loosers</p>
                        <p className={"m-0 pe-4"} style={{color: "#e3e3e3", cursor: "pointer"}}>Top Pick's</p>
                    </div>
                </div>
            </nav>
        </header>
    </div>
}

export default Home;
