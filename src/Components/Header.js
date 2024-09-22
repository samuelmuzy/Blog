import React from 'react';
import { H1 } from './Styled-Components/Styledheader';
import { Img } from './Styled-Components/StyledImgHeader';
import { Div } from './Styled-Components/StyledForms';

export class Header extends React.Component{
    render() {
    return  (
    <Div>
        <H1>Miniblog</H1>
        <Img src='https://www.getfoundquick.com/wp-content/uploads/2015/08/shutterstock_451991974.jpg'alt='gif do header'/> 
    </Div>
    )}
}

