import React from "react";
import { Modal,DivModal } from "./Styled-Components/StyledModal";
import { Button } from "./Styled-Components/StyledForms";

export class ModalTeste extends React.Component {
    render() {
        const { modalEstado, texto, onClickFecharModal } = this.props;
        //Recebe um estado por meio do Componente Postagem assim abrindo o modal quando for verdadeiro 
        return (
            <div>
                {modalEstado ? 
                    <Modal>
                        <DivModal>
                            <p>{texto}</p>
                            <Button onClick={onClickFecharModal}>Fechar</Button>
                        </DivModal>
                    </Modal>
                : 
                <></>
                }
            </div>
        );
    }
}
