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
    //Metodo que verifica se a url e valida 
    verificarUrl = (string) => {
        try {
            let url = new URL(string)
            return true
        } catch(err) {
            return false
        }
    }

    onClickAddImg = (event) => {
        const { urlInput, textoInput, tituloInput} = this.state;
        const id = Math.random();
        let postagem = {};

        let ValidacaoUrl = this.verificarUrl(urlInput);
        
        if(!ValidacaoUrl & urlInput !== "" ){
            alert("URL inválido, imagem padrão adicionada.")
        }

        // Se todos os campos estiverem preenchidos e a url for valida 
        if (urlInput !== "" && textoInput !== "" && tituloInput !== "" && ValidacaoUrl) {
            postagem = { urlImagem: urlInput, textoInput, tituloInput, id };
        } 
        // Caso onde apenas o texto eo título estão preenchidos (imagem padrão)
        else if (textoInput !== "" && tituloInput !== "" ) {
            postagem = {
                urlImagem: 'https://lh3.googleusercontent.com/proxy/dyNnAEljngpu7DhsLuu7bvHW4VdDcrnqAI9WPlw83fL_viJHlcnIVCtKG2CvzlNgE-YKkn_4FFerhqIJjZlNnH5UaukdSjldIncwZVSePrZfrZ0_2DNtdqOykHA',
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

