import React, { Component } from 'react';
import {
    View
} from 'react-native';
import axios from 'axios';
import Itens from './Itens';

export default class ListaItens extends Component {

    ComponentWillMount() {
        //requisição HTTP
        axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
            .then(response => { console.log(response); })//apos a requisição ha uma função de calback
            .catch(() => { console.log('Error ao recuperar os dados') });//tem função de calback tanto funcionando como não funcionando, cactch é de não funcionar;
    }

    render() {
        return (
            <View>
                <Itens />
                <Itens />
                <Itens />
            </View>
        );
    }
}



