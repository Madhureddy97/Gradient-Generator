// Style your elements here
import styled from 'styled-components'

export const SpecificDirection = styled.li`
    font-family:"Roboto";
    font-size:20px;
    border-radius:10px;
    padding:20px;
    margin:10px;
`

export const DirectionButton = styled.button`
    border-width:0px;
    background-color:#ffffff;
    color:${props => (props.isActive ? '#334155' : '#1e293b')};
    padding:10px;
    opacity:${props => (props.isActive ? 1 : 0.5)};
    outline: none;
    cursor: pointer;
`
