// @import Package
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    html{
        &::-webkit-scrollbar{
            width:0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color:darkgrey;
        }
        &::-webkit-scrollbar-track{
            background-color:white;
        }
    }
    body{
        font-family:'Montserrat',sans-serif;
        width:100%;
    }
    h2{
        font-size: 3rem;
        font-weight: lighter;
        color: #333;
    }
    h3{
        font-size: 1.3rem;
        color: #333;
        padding: 1.5rem 0rem;
    }
    p{
        font-size:1.2rem;
        line-height:120%;
    }
    a{
        text-decoration:none;
        color:#333
    }
    img{
        display:block;
    }
    input{    
        font-family: "Montserrat", sans-serif;
    }
    button{
        font-family:"Montserrat"
    }
    select{
        font-family:"Montserrat"
    }
    option{
        font-family:"Montserrat"
    }
`;

export default GlobalStyles;
