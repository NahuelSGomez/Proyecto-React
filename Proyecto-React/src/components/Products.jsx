import React from 'react';
import { Card, ContainerProducts, ProductWrapper, ShowMoreBtn } from './ProductsElements';



export const Products = () =>{
    return (
            <ContainerProducts>
                <h3>Todos los productos</h3>
                <ProductWrapper>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </ProductWrapper>
                <ShowMoreBtn>Cargar más</ShowMoreBtn>
            </ContainerProducts>
    )
    
}