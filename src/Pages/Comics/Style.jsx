import style from 'styled-components';

export const Main = style.main`
     display:flex;
     flex-direction:column;
     
`
export const Title = style.h1`
  color:black;
  padding-top:1.6rem;
  margin:3.4rem;
  text-align:center;

`
export const Img = style.img`
    align-self:center; 
    margin-top:30px;
    width:250px;
    align-content:center;
`
export const DivCard = style.div`
     display:grid;
     text-align:center;
     width:auto;
     grid-template-columns: repeat(3,auto);
     grid-gap:1.0rem;
     padding:1.2rem;
     @media (max-width: 1200px) {
      grid-template-columns:repeat(2,auto);
     }
     @media (max-width: 840px) {
         grid-template-columns:repeat(2,auto);
        }
     @media (max-width: 800px) {
         grid-template-columns:repeat(1,auto);
        }
`

export const SpanTitle = style.h1`
    font-size:2.0rem;
    margin-top:2.3rem;
    color:black;
`
export const DivEmpty = style.div`
  display:flex;
  margin-top:70px;
  flex-direction:column;
`
export const Pag = style.div`
   align-self:center;
`
