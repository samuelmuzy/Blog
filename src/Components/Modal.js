import React from 'react';
import { fundomodal } from './Styled-Components/StyledModal';

export class modal extends React.Component {

    state = {
        Aberto: false,
    };

    abrirModal = () => {
        this.setState({Aberto: true})
    };

    fecharModal = () => {
        this.setState({Aberto: false})
    };

    render() {
        if(!this.state.Aberto) {
            return <button onClick={this.modalAberto}></button>
        }
    }

    return(
      
    )
}

