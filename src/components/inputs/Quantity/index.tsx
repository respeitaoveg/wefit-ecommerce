import RoundedMinusIcon from "../../icons/RoundedMinusIcon";
import RoundedPlusIcon from "../../icons/RoundedPlusIcon";
import { QuantityInputContainer, QuantityInputButton, QuantityRealInput } from "./styles";


interface QuantityInputProps {
  add: () => void
  quantity: number
  remove: () => void
}

export default function QuantityInput({add, quantity, remove}: QuantityInputProps) {
  return <QuantityInputContainer>
    <QuantityInputButton onClick={() => remove()}>
      <RoundedMinusIcon />
    </QuantityInputButton>
    <QuantityRealInput value={quantity} onChange={() => quantity} />
    <QuantityInputButton onClick={() => add()}>
      <RoundedPlusIcon />
    </QuantityInputButton>
  </QuantityInputContainer>
}