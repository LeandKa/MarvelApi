import style from 'styled-components';



export const Container = style.div`
display:flex;
width:auto;
flex-direction:column;
margin-top:65px;
margin-bottom:20px;
`


export const ContainerDetails = style.div`
    display:grid;
    background:white;
    max-width:1200px;
    padding-top:2.2rem;
    align-self:center;
    grid-template-areas:
     "image Details"
     "image customer"
     "characters characters"; 

     @media (max-width: 640px) {
      grid-template-areas:
     "image"
     "Details"
     "customer"
     "characters"
  }
    
`
export const ImageDiv = style.div`
   width:auto;
   min-width:300px;
   max-width:400px;
   padding:1.5rem;
   height:auto;
   align-content:center;
   grid-area:image;
   grid-column:image;
   @media (max-width: 620px) {
}
`

export const Image = style.img`
  height:auto;
  width:100%;
`

export const DetailsDescription = style.div`
   width:auto;
   align-self:center;
   padding:0.2rem;
   grid-area: Details;
   grid-column:Details;
   @media (max-width: 640px) {
    
    max-width:350px;
}
`

export const Title = style.h1`
  font-size:25px;
  font-weight:bold;
  @media (max-width: 640px) {
    
    text-align:center;
}
`
export const Descripton = style.h1`
  font-size:13px;
  margin:1.4rem;
  
`
export const Price = style.div`
  font-weight:bold;
  padding:0.5rem;
  height:2.0rem;
  color: black;
`

export const Customer = style.div`
height:200px;
align-content:center;
text-align:center;
align-self:center;
width:100%;
grid-area: customer;
`

export const Button = style.button`
 padding:0.9rem;
 margin-top:1.2rem;
 border-radius:10%;
 background:white;
 border:none;
 grid-area: customer;
 transition: all 1.5s ease;
 &:hover{
   color:white;
   background:black;
 }

 &:focus{
   outline:none;
 }
`
export const NoDescription = style.p`
   text-align:center;
   margin-top:60px;
`