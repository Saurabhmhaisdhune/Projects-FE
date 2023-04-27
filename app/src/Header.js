import React from "react";
import "./header.css";

export default function Header({count}){

    return (
        <div className="header">
            <h1 className="title">My Shopping App</h1>
            <h1 className="title">{count} Cart</h1>
            <h1 className="userinfo">saurabh mhaisdhune</h1>
        </div>
    )
}
