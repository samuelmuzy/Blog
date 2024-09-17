import React from "react";

export class Forms extends React.Component {
    state = {
        urlInput: "",
        textoInput: "",
        tituloInput:"",
        inputVazioTexto: false,
        inputVazioTitulo: false,
        
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
        const { urlInput, textoInput, tituloInput } = this.state;
        const id = Math.random();
        let postagem = {};
    
        // Verifica se o campo de texto está vazio
        if (textoInput === "") {
            this.setState({ inputVazioTexto: true });
            return
        } else {
            this.setState({ inputVazioTexto: false });
        }
    
        // Verifica se o campo de título está vazio
        if (tituloInput === "") {
            this.setState({ inputVazioTitulo: true });
            return
        } else {
            this.setState({ inputVazioTitulo: false });
        }
    
        // Se todos os campos estiverem preenchidos
        if (urlInput !== "" && textoInput !== "" && tituloInput !== "") {
            postagem = { urlImagem: urlInput, textoInput, tituloInput, id };
            this.props.adicionarInputs(postagem);
            
            this.setState({ urlInput: "", textoInput: "", tituloInput: "" });
        } 
        // Caso onde apenas o texto eo título estão preenchidos (imagem padrão)
        else if (textoInput !== "" && tituloInput !== "") {
            postagem = {
                urlImagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3pDchOXo_3j8k56938fy8_Pjy0pd7_fiz7Q&usqp=CAU',
                textoInput,
                tituloInput,
                id
            };
            this.props.adicionarInputs(postagem);
           
            this.setState({ urlInput: "", textoInput: "", tituloInput: "" });
        }
    };
    

    render() {
        return (
            <>
               
                <input placeholder="Adicione um Link" name="inputImg" onChange={this.onChangeInputImg} value={this.state.urlInput}/> 
            
                <input style={{ borderColor: this.state.inputVazioTitulo ? "red" : "" }} placeholder="Digite o titulo" name="inputTitulo" onChange={this.onChangeInputTitulo} value={this.state.tituloInput}/>
            
                <input style={{ borderColor: this.state.inputVazioTexto ? "red" : "" }} placeholder="digite um texto" name="inputTexto" onChange={this.onChangeInputTexto} value={this.state.textoInput}/>
                
                <button onClick={this.onClickAddImg}>Enviar Post</button>
            </>
        );
    }
}
