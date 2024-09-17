import React from "react";
import { Input, Button, Form } from './Styled-Components/StyledForms';

export class Forms extends React.Component {
    state = {
        urlInput: "",
        textoInput: "",
        tituloInput:""
    }

    onChangeInputImg = (event) => {
        this.setState({ urlInput: event.target.value });
    }
    onChangeInputTexto = (event) =>{
        this.setState({textoInput:event.target.value});
    }
    onChangeInputTitulo = (event) =>{
        this.setState({tituloInput:event.target.value});
    }

    onClickAddImg = () => {
        const { urlInput, textoInput, tituloInput} = this.state;
        const id = Math.random();
        let novaImg = {};

        if (urlInput !== "" && textoInput !== "" && tituloInput !== "") 
        {
            novaImg = { urlImagem: urlInput,textoInput,tituloInput,id };
        }
        else if(textoInput !== "" && tituloInput !== "")
        {
            novaImg = {
                urlImagem:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3pDchOXo_3j8k56938fy8_Pjy0pd7_fiz7Q&usqp=CAU',
                textoInput,
                tituloInput,
                id
            };
        }
        else
        {
            return <></>
        }

        //passa o arry para o componete imagem
        this.props.adicionarInputs(novaImg);

        //limpa os inputs
        this.setState({tituloInput:"", urlInput: "",textoInput: ""});
    }

    render() {
        return (
            <Form>
                <Input placeholder="Titulo da postagem (máximo de 50 caracteres)" required maxLength={50} name="inputTitulo" onChange={this.onChangeInputTitulo} value={this.state.tituloInput}/>
                <Input placeholder="Escreva o conteudo aqui..." name="inputTexto" required onChange={this.onChangeInputTexto} value={this.state.textoInput}/>
                <Input placeholder="Link da imagem (opcional)" name="inputImg" onChange={this.onChangeInputImg} value={this.state.urlInput}/>
                
                <Button onClick={this.onClickAddImg} type="submit">Enviar Post</Button>
            </Form>
        );
    }
}

