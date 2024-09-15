import React from 'react';
import { H1 } from './Styled-Components/Styledheader';
import { Img } from './Img';

export class Header extends React.Component{
    render() {
    return  (
    <div>
       <H1>Miniblog</H1>
       <Img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6e64b8f7-82f5-47e5-9319-e2e69ca6f56d/d9f6x59-83bc7697-99b5-4ab1-b56c-48286f982b2b.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZlNjRiOGY3LTgyZjUtNDdlNS05MzE5LWUyZTY5Y2E2ZjU2ZFwvZDlmNng1OS04M2JjNzY5Ny05OWI1LTRhYjEtYjU2Yy00ODI4NmY5ODJiMmIuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Ecp8az9AAdUgHhqzZodMeTYiyjhki3Mbn-rK2JjN4MM'lt='gif do header'/> 
       </div>
       )
    }

}
