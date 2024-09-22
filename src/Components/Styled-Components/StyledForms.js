import styled from 'styled-components';

export const Div = styled.div `
    display: flex;
    padding: 15px;
    flex-direction: column;
`
export const Form = styled.form `
    display: flex;
    padding: 15px;
    flex-direction: column;
`

export const Input = styled.input `
    font-size: 10px;
    padding: 8px;
    margin: 10px;
    border: 1px solid lightgray;
    border-radius: 5px;
    height: 23px;
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
