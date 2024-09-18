import React from 'react';
import { ImgPost } from './Styled-Components/Img';
import { Forms } from './Forms';
import { Div, H1, Div2, Button, P } from './Styled-Components/StyledPost';
import { Modal } from './Modal';

export class Postagem extends React.Component {
    state = {
        postagem: []
    }

    adicionarImagem = (postagem) => {
        this.setState((prevState) => ({
            postagem: [...prevState.postagem, postagem]
        }));
    }

<<<<<<< HEAD
=======
    // Deletar post
>>>>>>> main
    deletarPost = (id) =>{
        let postagem = this.state.postagem.filter((post) => {
            return post.id !== id
        })
        this.setState({postagem:postagem});
    }
<<<<<<< HEAD
    
=======
>>>>>>> main

    render() {
        const listar = this.state.postagem.map((post) => {
            return (
<<<<<<< HEAD
                 <div key={post.id}>
                    <h1>{post.tituloInput}</h1>

                    {post.textoInput && post.textoInput.length >= 50 ? ( //operador ternario para verificar o texto for maior que 50 
                        <div>
                            <p>{post.textoInput}</p>
                            <p>leia mais</p> 
                        </div>
                    ) : (
                        <p>{post.textoInput}</p>
                        
                    )}
                  {post.urlImagem  ? (
                        <Img src={post.urlImagem} alt='imagem da div de post'/>
                    ):(
                        <></>
                    )}
                    <button onClick={() => {this.deletarPost(post.id)}}>Deletar Post</button>
                    
                </div>
=======
                <Div key={post.id}>
                    <ImgPost src={post.urlImagem} alt='imagem da div de post'/>
                    <Div2>
                        <H1>{post.tituloInput}</H1>
                            {/* Operador ternario para verificar o texto for maior que 50  */}
                            {post.textoInput && post.textoInput.length >= 50 ? ( 
                                <P>{post.textoInput}<P onClick={() => console.log('Clicou')}>...leia mais</P></P> ) : 
                            ( <a>{post.textoInput}</a> )}
                            <Button onClick={() => {this.deletarPost(post.id)}}>Deletar</Button>            
                    </Div2>
                </Div> 
>>>>>>> main
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

