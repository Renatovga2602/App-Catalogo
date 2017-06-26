import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import axios from 'axios';
import Itens from './Itens';

export default class ListaItens extends Component {

    constructor(props) {
        super(props);

        this.state = { listaItens: [] };
    }

    componentWillMount() {
        //requisição HTTP
        axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
            .then(response => { this.setState({ listaItens: response.data }); })//apos a requisição ha uma função de calback
            .catch(() => { console.log('Error ao recuperar os dados'); });//tem função de calback tanto funcionando como não funcionando, cactch é de não funcionar;
    }

    render() {
        return (
            <View>
                {this.state.listaItens.map(item => (<Text key={item.titulo}>{item.titulo}</Text>))}
            </View>
        );
    }
}



