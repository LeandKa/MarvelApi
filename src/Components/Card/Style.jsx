import style from 'styled-components';

export const Container = style.a`
    display:flex;
    flex-direction:column;
    border:2px solid black;
    width:auto;
    background:white;
    margin-right:3px;
    height:auto;
    max-height:900px;
    text-decoration:none;
    cursor:pointer;
    color:black;
    &:hover {
      outline:none;
      text-decoration:none;
      color:black;
    }
`;

export const Title = style.h1`
  color:black;
  padding-top:1.6rem;
  margin:3.4rem;
  text-align:center;

`


export const Img = style.img`
   width:auto;
   height:auto;
`;

export const CardDetails = style.div`
    display:flex;
    flex-direction:row;
    margin-top:12px;
    flex-wrap:wrap;
`;

export const SpanDetails = style.span`
   font-size:12px;
   margin-top:1px;
   font-weight:bold;
   margin-left:0.2rem;
`;

export const P = style.p`
  display:flex;
  margin-top:2px;
  flex-direction:row;
  font-size:12px;
`;