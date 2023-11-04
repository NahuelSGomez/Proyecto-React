import styled from 'styled-components';

//import {  } from "../img&icons";

export const CategoryContainer = styled.section`
    display: flex;
    flex-direction: column;
    margin: auto;
    gap: 40px;
    padding: 40px;

    & h3{
        font-size: 24px;
        font-family: Monserrat;

    }
`;

export const CategoriesWrapper = styled.div`
    display: flex;
    //width: 1200px;
    justify-content: space-between;
    align-items: center;
`;

export const CategoryCardContainer = styled.div`
    display: flex;
    height: 299px;
    width: 248px;
    padding: 12px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 13px;
    border-radius: 10px;
    background: #BFA893;
`;

export const Category = styled.div`
    background: url("../assets/img&icons/pic_dog.jpg") cover/center no-repeat;
    
`;

export const CategoryButton = styled.button`
`;