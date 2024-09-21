import React from "react";
import { ModalS,DivModal } from "./Styled-Components/StyledModal";
import { Button } from "./Styled-Components/StyledForms";

export class Modal extends React.Component {
    render() {
        const { modalEstado, texto, onClickFecharModal } = this.props;
        //Recebe um estado por meio do Componente Postagem assim abrindo o modal quando for verdadeiro 
        return (
            <div>
                {modalEstado ? 
                    <ModalS>
                        <DivModal>
                        <Button onClick={onClickFecharModal}>Fechar</Button>
                        <p>{texto}</p>
                            
                        </DivModal>
                    </ModalS>
                : 
                <></>
                }
            </div>
        );
    }
}


