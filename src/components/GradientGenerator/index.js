import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  GradientGeneratorContainer,
  Heading,
  ChooseDirection,
  UnorderedListContainer,
  PickColors,
  ColorsContainer,
  ColorContainer,
  ColorTextContent,
  InputElement,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    activeButton: gradientDirectionsList[0].value,
    fromColor: '#8ae323',
    toColor: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onChangeFromColor = event => {
    this.setState({fromColor: event.target.value})
  }

  onChangeToColor = event => {
    this.setState({toColor: event.target.value})
  }

  directionChanged = direction => {
    this.setState({activeButton: direction})
  }

  onGenerate = () => {
    const {fromColor, toColor, activeButton} = this.state
    this.setState({
      gradientValue: `to ${activeButton}, ${fromColor}, ${toColor}`,
    })
  }

  render() {
    const {fromColor, toColor, gradientValue, activeButton} = this.state
    return (
      <GradientGeneratorContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <Heading>Generate a CSS color Gradient</Heading>
        <ChooseDirection>Choose Direction</ChooseDirection>
        <UnorderedListContainer>
          {gradientDirectionsList.map(eachDirection => (
            <GradientDirectionItem
              eachDirection={eachDirection}
              key={eachDirection.directionId}
              directionChanged={this.directionChanged}
              isActive={activeButton === eachDirection.value}
            />
          ))}
        </UnorderedListContainer>
        <PickColors>Pick the Colors</PickColors>
        <ColorsContainer>
          <ColorContainer>
            <ColorTextContent>{fromColor}</ColorTextContent>
            <InputElement
              type="color"
              value={fromColor}
              onChange={this.onChangeFromColor}
            />
          </ColorContainer>
          <ColorContainer>
            <ColorTextContent>{toColor}</ColorTextContent>
            <InputElement
              type="color"
              value={toColor}
              onChange={this.onChangeToColor}
            />
          </ColorContainer>
        </ColorsContainer>
        <GenerateButton type="button" onClick={this.onGenerate}>
          Generate
        </GenerateButton>
      </GradientGeneratorContainer>
    )
  }
}

export default GradientGenerator
