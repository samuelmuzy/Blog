import React from 'react';
import { Img } from './Styled-Components/Img';
import { Forms } from './Forms';

export class Postagem extends React.Component {
    state = {
        postagem: []
    }

    adicionarImagem = (novaImg) => {
        this.setState((prevState) => ({
            postagem: [...prevState.postagem, novaImg]
        }));
    }

    render() {
        const listar = this.state.postagem.map((imagem) => {
            return (
                <div key={imagem.id}>
                    <h1>{imagem.tituloInput}</h1>
                    <p>{imagem.textoInput}</p>
                    <Img src={imagem.urlImagem} alt='imagem da div de post'/>
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
