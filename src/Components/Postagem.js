import React from 'react';
import { Img, ImgPost } from './Styled-Components/Img';
import { Forms } from './Forms';
import { Div, H1, Div2, Button } from './Styled-Components/StyledPost'

export class Postagem extends React.Component {
    state = {
        postagem: []
    }

    adicionarImagem = (postagem) => {
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

    render() {
        const listar = this.state.postagem.map((post) => {
            return (
                <Div key={post.id}>
                    <ImgPost src={post.urlImagem} alt='imagem da div de post'/>
                    <Div2>
                        <H1>{post.tituloInput}</H1>
                            {/* Operador ternario para verificar o texto for maior que 50  */}
                            {post.textoInput && post.textoInput.length >= 50 ? ( 
                            <div>
                                <p>{post.textoInput}</p>
                                <p>leia mais</p> 
                            </div>) : ( <a onClick={this.deletarPost}>{post.textoInput}</a> )}
                        <Button onClick={() => {this.deletarPost(post.id)}}>Deletar</Button>            
                    </Div2>
                </Div> 
            );
        });

        return (
            <>
                <Forms adicionarInputs={this.adicionarImagem}/>
                <div>{listar}</div>
            </ >
        );
    }
}
