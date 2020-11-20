import React from 'react';
import style from 'styled-components';

const Container = style.a`
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

const Img = style.img`
   width:auto;
   height:auto;
`;
const Title = style.h1`
   font-size:22px;
   font-weight:bold;
   margin-top:4px;
`;
const CardDetails = style.div`
   display:flex;
   flex-direction:row;
   margin-top:12px;
   flex-wrap:wrap;
`;
const SpanDetails = style.span`
  font-size:12px;
  margin-top:1px;
  font-weight:bold;
  margin-left:0.2rem;
`;
const P = style.p`
  display:flex;
  margin-top:2px;
  flex-direction:row;
  font-size:12px;
`;

export default function Card({ ...props}) {

   return(

    <Container href={`/Details/comics/${ props.id}`}>
      <Img src={`${props.Image.path}/portrait_uncanny.${props.Image.extension}`}></Img>
      <div>
        <Title>{props.Name}</Title>
        <CardDetails>
        <SpanDetails>Characters:</SpanDetails>{props.Comics.characters.items.length === 0 ? ('---') : (props.Comics.characters.items[0].name)}
        </CardDetails>

        <CardDetails>
          <SpanDetails>Creators:</SpanDetails>
          {props.Comics.creators.items.map((creator,index )=>(
              <P key={index}>  {creator.name}-({creator.role})</P>
          ))}
        </CardDetails>
      </div>
  
    </Container>
  )
}
