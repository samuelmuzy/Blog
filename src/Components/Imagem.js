import React from 'react';
import { Img } from './Styled-Components/Img';
export class Imagem extends React.Component{
    state = {
        urlInput: "",
        postagem: []
    }
    
    urlValida = (urlTexto) =>{
        try{
            new URL(urlTexto);
            return true;
        }catch (e){
            return false
        }
    }

    onChangeInputImg = (event) =>{
        this.setState({urlInput: event.target.value});
    }
    
    onClickAddImg = () =>{
        const { urlInput } = this.state
        const id = Math.random();
        let novaImg = []
        
        if(urlInput !== "" && this.urlValida(urlInput)){
            novaImg = {urlImagem:urlInput,id};
        }else{
            novaImg = {urlImagem:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3pDchOXo_3j8k56938fy8_Pjy0pd7_fiz7Q&usqp=CAU',id}
        }

        const postagem = [...this.state.postagem,novaImg]
        
        this.setState({postagem,urlInput:""})
    }

    render(){
        const listar = this.state.postagem.map((imagem)=>{
            return(
                <div key={imagem.id}>
                    <Img src={imagem.urlImagem} alt='imagem da div de post'/>
                </div>
            )
        })
        return(
            <>
                <input placeholder='Digite uma URL' name='inputImg' onChange={this.onChangeInputImg} value={this.state.urlInput}/>
                <button onClick={this.onClickAddImg}>Adicionar</button>

                <div>{listar}</div>
            </>

        )
    }
}