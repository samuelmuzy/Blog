import React from 'react';
import { ImgPost } from './Styled-Components/StyledImgForms';
import { Forms } from './Forms';
import { Div, H1, Div2, Button, P, Span } from './Styled-Components/StyledPost';
import { Modal } from './Modal';

export class Postagem extends React.Component {
    state = {
        postagem: [],
        textoModal :'',
        abrirModal: false

    }

    adicionarInputs = (postagem) => {
        this.setState((prevState) => ({
            postagem: [...prevState.postagem, postagem]
        }));
    }

    // Deletar post
    deletarPost = (id) =>{
        let postagem = this.state.postagem.filter((post) => {
            return post.id !== id
        })
        this.setState({postagem:postagem});
    }
    //metodo para adicionar o texto e abrir a modal do componente 
    onClickAbrirModal = (texto) =>{
        this.setState({textoModal:texto,abrirModal:true});
    }
    //metodo para fechar a modal 
    FecharModal = () => {
        this.setState({ textoModal: "", abrirModal: false });
    }
    render() {
        const listar = this.state.postagem.map((post) => {
            return (
                <Div key={post.id}>
                    <ImgPost src={post.urlImagem} alt='imagem da div de post'/>
                    <Div2>
                        <H1>{post.tituloInput}</H1> 
                            {/* Operador ternario para verificar o texto for maior que 50  */}
                            {post.textoInput && post.textoInput.length >= 50 ? 
                                ( 
                                    <P>{post.textoInput.slice(0,400) /* limita a quantida de caracteres para quando o texto passar de 50*/}
                                         {/*Adiciona o texto a o Componente da modal e muda o status dele para true*/}
                                        <Span onClick={() =>{this.onClickAbrirModal(post.textoInput)}}>...leia mais</Span>
        
                                    </P> 
                                ) : 
                                ( <P>{post.textoInput}</P> )
                            }
                            <Button onClick={() => {this.deletarPost(post.id)}}>Deletar</Button>            
                    </Div2>
                </Div> 
            );
        });

        return (
            <>
                <Forms adicionarInputs={this.adicionarInputs}/>
                <div>{listar}</div>
                {/*Envia o conteudo do texto e o estado da modal para True  */}
                <Modal onClickFecharModal={this.FecharModal} modalEstado={this.state.abrirModal} texto={this.state.textoModal} /> 
            </ >
        );
    }
}

