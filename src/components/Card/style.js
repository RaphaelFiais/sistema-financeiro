import styled from "styled-components";

export const Container = styled.div`
    background: #202020;    
    border-radius: 10px;
    width: 30%;
    div{
        position: relative;
        display: flex;
        justify-content: space-between;
        padding: 10px 20px;
        
        h3{
            font-weight: 400;
            font-size: 14px; 
            color: #fcfcfc;
        }
        span{
            position: absolute;
            width: 22px;
            height: auto;
            color: #7ED957 ;
            top: 10px;
            right: 20px;
            svg{
                width: 20px;
                height: auto;
            }
        }
    }
    p{
        text-align: center;
        font-size: 20px;
        color: #fcfcfc;
        padding-bottom: 5px;
    }

    @media screen and (max-width: 1011px) {
        width: 200px;   

        span{
            width: 15px;
        }
        p{
        text-align: center;        
        font-size: 15px;
    }
    }

    @media screen and (max-width: 560px) {
        width: 200px;   
        div{
            justify-content: center;
        }
        h3{
            text-align: center;            
        }
        svg{
            display: none;
        }
        p{
        text-align: center;        
        font-size: 13px;
    }
    }
`