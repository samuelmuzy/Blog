import React from 'react';
import { Img } from './Styled-Components/Img';
import { Forms } from './Forms';

export class Postagem extends React.Component {
    state = {
        postagem: []
    }

    adicionarImagem = (postagem) => {
        this.setState((prevState) => ({
            postagem: [...prevState.postagem, postagem]
        }));
    }

    deletarPost = (id) =>{
        let postagem = this.state.postagem.filter((post) => {
            return post.id !== id
        })
        this.setState({postagem:postagem});
    }
    

    render() {
        const listar = this.state.postagem.map((post) => {
            return (
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
            );
        });

        return (
            <>
                <Forms adicionarInputs={this.adicionarImagem}/>
                <div>{listar}</div>
            </>
        );
    }
}
