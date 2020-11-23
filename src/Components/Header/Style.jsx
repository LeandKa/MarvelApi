import style, { css } from 'styled-components';


export const Header = style.header`
   
   display:flex;
   flexDirection:row;
   justify-content:space-between;
   height:4.8rem;
   width:100%;
   padding:0.4rem;
   background-color:#202020;
`;


export const Img = style.img`
    height:2.8rem;
    margin-top:3px;
    padding-top:0rem;
    padding-left:1rem;

    @media (max-width: 768px) {
       margin-top:1.1rem;
       height:1.8rem;
       padding-left:0;
       padding-top:0;
    }
`;

export const Input = style.input`
     height:3.0rem;
     margin:0.2rem;
     background:transparent;
     border:1px solid white;;
     font-family:Montserrat;
     font-size:15px;
     text-align:center;
     color:white;
     width:50%;
     margin-top:1.0rem;
     padding:0.2rem;
`;


export const Tab = style.div`
    display:none;
    width: 100%;
    height: auto;
    position: absolute;
    top: 76px;
    left: -110%;
    opacity: 1;
    ${({ active }) => active && `
       background: #202020;
       display:block;
       position:absolute;
       text-align:right;
       padding:0.4rem;
       text-align:center;
       top:75px;
       left:0;
       width:100%;
       transition: all 0.6s ease;
`}`

export const List = style.ul`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap:1.0rem;
    margin-top:1.4rem;
    list-style:none;
    padding-top:0.2rem;
    padding-left:0.2rem;
    padding-right:0.2rem;
`

export const A = style.a`
   color:white;
   text-decoration:none;
   cursor:pointer;
   ${props => props.shouldHover && css`
       &:hover {
        text-decoration:none;
        color:black;
               }
    `}`

export const Button = style.button`
    position:relative;
    cursor:pointer;
    background:transparent;
    padding:0.2rem;
    border:none;
    bottom:0.3rem;
    transition:1s ease-in;
    ${props => props.shouldHover && css`
       &:hover {
         outline:none;
         color:red;
        }
     &:focus{
     outline:none;
   }
`}`
