import styled from 'styled-components';

export const ContainerFeatured = styled.section`
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 40px;

    & h3{
        font-size: 24px;
        font-family: Monserrat;
    }
`;

export const CardWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 18px;
`;

export const ContainerCardProduct = styled.div`
    display: flex;
    height: 473px;
    min-width: 460px;
    padding: 18.493px;
    flex-direction: column;
    align-items: flex-start;
    gap: 18.493px;
    border-radius: 18.493px;
    border: 1.849px solid #593A2E;
`;

