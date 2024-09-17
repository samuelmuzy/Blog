import styled from 'styled-components';

export const Div = styled.div `
    margin: 20px;
    display: flex;
    padding: 5px;
    border: 1px solid lightgray;
    border-radius: 10px;
`
export const Div2 = styled.div `
    width: 100%;
    display: block;
    padding-left: 20px;
`

export const H1 = styled.h1 `
    width: 100%;
`

export const Button = styled.button `   
    margin-left: 10px;
    font-size: 10px;
    font-weight: bold;
    width: 81px;
    height: 40px;
    border: none;
    border-radius: 5px;
    background-color: lightseagreen;
    &:hover {
        background-color: lightseagreen;
        border: 1px solid lightblue;
    }
`