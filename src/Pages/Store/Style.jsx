import style from 'styled-components';

export const Container = style.div`
display:flex;
width:100%;
height:auto;
flex-direction:column;
align-items: center;
align-self:center;
margin-bottom:1.4rem;
`;

export const ContainerBody = style.div`
margin-bottom:2.3rem;
align-items:center;
text-align:center;
width:70%;
min-width:300px;
background:white;
margin-top:6.4rem;
`;

export const Title = style.h1`
  color:black;
  padding-top:0.7rem;
  margin:2.4rem;
  text-align:center;

`

export const CheckOut = style.div`
display:flex;
flex-direction:row;
border:1px solid black;
margin:0.8rem;
padding:0.7rem;
justify-content:space-around;
@media (max-width: 490px) {
  flex-direction:column;
}
`;

export const ImageTitle = style.div`
display:flex;
margin-top:30px;
min-weight:100px;
max-width:250px;
width:300px;
height:auto;
flex-direction:row;
@media (max-width: 490px) {
  align-self:center;
}

`;
export const PTitle = style.p`
font-size:12px;
align-self:center;
width:auto;
max-width:150px;
min-width:30px;
margin:0.9rem;
@media (max-width: 740px) {
 max-width:100px;
}
`;

export const PEmpty = style.p`
   align-self:center;
   font-size:20px;
`;

export const P = style.p`
  font-size:13px;
  margin:0.5rem;
`;

export const Image = style.img`
  weight:100px;
  align-self:center;
  height:90px;
`;

export const Price = style.div`
display:flex;
flex-direction:row;
align-self:center;
max-width:150px;
margin-top:30px;
@media (max-width: 740px) {
  text-align:center;
}
`;

export const Button = style.button`
align-self:center;
  width:2.3rem;
  height:2.1rem;
`;

export const Total = style.div`
    text-align:center;
`