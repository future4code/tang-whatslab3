import React from "react";

class CampoInput extends React.Component {
    //criando o estado de mensagens
    state = {
        mensagens: [
     
        ],
        valorInputUsuario: " ",
        valorInputMensagem: " "
    };

    adicionaMensagem = () => {
        const novaMensagem = {
            //pegando valores digitados no input
            usuario: this.state.valorInputUsuario,
            mensagem: this.state.valorInputMensagem
        };
        //criando uma nova mensagem e alterando o estado, adicionando no array
        const novasMensagens = [novaMensagem, ...this.state.mensagens];
        this.setState({
            mensagens: novasMensagens,
            valorInputUsuario: "",
            valorInputMensagem: ""
        });
       
    }
    //mandar a mensagem usando a tecla "ENTER"  
    clicarNoEnter = (event) =>{     
        if (event.key === "Enter") {
            this.adicionaMensagem()
        }
    }
    //na mudança do input, pegar o valor digitado
    onChangeInputUsuario = (event) => {
        this.setState({ valorInputUsuario: event.target.value });
    };
    
    onChangeInputMensagem = (event) => {          
        this.setState({ valorInputMensagem: event.target.value });
    };

    render() {
        const listaDeMensagens = this.state.mensagens.map((msg) => {
            return (
                <div className="mensagem">
                    <div className="usuario">
                        { msg.usuario }:
                    </div>
                    <div>
                        { msg.mensagem }
                    </div>
                </div>
            )
        })

        return (
            <div className="App">
                <div className="container-msg">
                { listaDeMensagens }
                </div>
                <div className="campo-inputs">
                    <input className="usuario"
                        value={ this.state.valorInputUsuario }
                        onChange={ this.onChangeInputUsuario }
                        placeholder="Usuario" />
                    <input
                        value={ this.state.valorInputMensagem }
                        onChange={ this.onChangeInputMensagem }
                        onKeyDown={this.clicarNoEnter} //mandar a mensagem usando a tecla "ENTER"  
                        placeholder="Mensagem" />
                    <button onClick={ this.adicionaMensagem } id="btn-enviar">Enviar</button> 
                </div>
            </div>
        );
    }
}

export default CampoInput;