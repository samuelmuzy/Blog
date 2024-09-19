import React from 'react';
import { Div } from './Styled-Components/StyledForms';
// import { modal } from './Styled-Components/StyledModal';

export class Modal extends React.Component {

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
        return(
            <Div>
                <modal>
                    <p>Deu certo!</p>
                </modal>
            </Div>
        )
    }
}

