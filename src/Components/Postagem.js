import React from 'react';
import { Img, ImgPost } from './Styled-Components/Img';
import { Forms } from './Forms';
import { Div, H1, Div2 } from './Styled-Components/StyledPost'

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
                <Div key={imagem.id}>
                    <ImgPost src={imagem.urlImagem} alt='imagem da div de post'/>
                    <Div2>
                        <H1>{imagem.tituloInput}</H1>
                        <p>{imagem.textoInput}</p>
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
