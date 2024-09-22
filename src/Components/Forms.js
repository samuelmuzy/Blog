import React from "react";
import { Input, Button, Form } from './Styled-Components/StyledForms';

export class Forms extends React.Component {
    state = {
        urlInput: "",
        textoInput: "",
        tituloInput:"",
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

    onClickAddImg = (event) => {
        const { urlInput, textoInput, tituloInput} = this.state;
        const id = Math.random();
        let postagem = {};
    
        // Se todos os campos estiverem preenchidos
        if (urlInput !== "" && textoInput !== "" && tituloInput !== "") {
            postagem = { urlImagem: urlInput, textoInput, tituloInput, id };
           
        } 
        // Caso onde apenas o texto eo título estão preenchidos (imagem padrão)
        else if (textoInput !== "" && tituloInput !== "") {
            postagem = {
                urlImagem: 'https://lh3.googleusercontent.com/proxy/BH4Wb59NitlHwCLTwwiqTwu08OMRPbm9ZFMW-V01J1Jyrp8uRiQAzScCJxSLMk5dwOULx3HCHk49cfprQHuzk6UDrKtOlL5xCyMoMupQYMq7RVuxJxK5bJ8fiEIp3XW_vRL5',
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
        this.props.adicionarInputs(postagem);
        
        //metodo para empedir que o metodo seja executado depois que o input e limpado gerando um bug no required
        event.preventDefault();

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

