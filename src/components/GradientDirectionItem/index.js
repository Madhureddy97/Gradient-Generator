// Write your code here
import {SpecificDirection, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {eachDirection, directionChanged, isActive} = props
  const {displayText, value} = eachDirection

  const onClickDirectionButton = () => directionChanged(value)

  return (
    <SpecificDirection>
      <DirectionButton
        type="button"
        isActive={isActive}
        onClick={onClickDirectionButton}
      >
        {displayText}
      </DirectionButton>
    </SpecificDirection>
  )
}

export default GradientDirectionItem
