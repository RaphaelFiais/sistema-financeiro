import styled from "styled-components";

export const ContainerTable = styled.table`
    border-collapse: collapse;    
    width: 95%;
    max-width: 1000px;
    background: #ffffff;
    margin-bottom: 50px;

    td,th{
        
        padding: 10px 0;
        border: 2px solid #dfdfdf;
        
    }
    th,td{
        border-right: none;
        border-left: none;
       
    }
    
    td{
        text-align: center;
        svg{
            width: 16px;
            height: auto;
            cursor: pointer;
            &:hover{
                transform: scale(1.05);
            }
        }
        
    }

`
export const TdValue = styled.td`
    color: ${props => props.whatColor ? '#00da00' : '#ff0000'};
`