import React from 'react';
import {Container,Img,CardDetails,SpanDetails,P,Title} from './Style';

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
