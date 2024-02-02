// Style your elements here
import styled from 'styled-components'

export const GradientGeneratorContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background-image:linear-gradient(${props => props.gradientValue});
    height:100vh;
`
export const Heading = styled.h1`
    font-family:"Roboto";
    font-size:40px;
    color:#ffffff;
`
export const ChooseDirection = styled.p`
    font-family:"Roboto";
    font-size:25px;
    color:#ffffff;
`
export const UnorderedListContainer = styled.ul`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align=items:center;
    list-style-type:none;
`
export const PickColors = styled.p`
    font-family:"Roboto";
    font-size:25px;
    color:#ffffff;
`
export const ColorsContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align=items:center;
`
export const ColorContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align=items:center;
    margin:20px;
`
export const ColorTextContent = styled.p`
    font-family:"Roboto";
    font-size:25px;
    color:#ffffff;
`
export const InputElement = styled.input`
    border-width:0px;
    color:#8ae323;
`
export const GenerateButton = styled.button`
    background-color:#00c9b7;
    color:#000000;
    font-family:"Roboto";
    font-size:25px;
    border-radius:10px;
    padding:20px;
`
