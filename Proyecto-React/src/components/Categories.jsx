import React from 'react';
import { CategoryContainer, CategoryCardContainer, CategoriesWrapper } from './CategoriesElements';

export const Categories = () =>{
    return (
        <CategoryContainer>
            <h3>Categorias</h3>
            
            <CategoriesWrapper>
            
            <CategoryCardContainer>
                <img src="../assets/img&icons/pic_dog.jpg" alt="" />
            </CategoryCardContainer>
            
            <CategoryCardContainer></CategoryCardContainer>
            
            <CategoryCardContainer></CategoryCardContainer>
            
            <CategoryCardContainer></CategoryCardContainer>

            </CategoriesWrapper>
            

        </CategoryContainer>
    )
}