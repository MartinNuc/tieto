import { useState } from "react";
import { Button } from "./Button"
import { Content } from "./Content"

export const Dropdown = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  return <>
    <Button onClick={() => setIsDropdownVisible(!isDropdownVisible)}>
      Toggle
    </Button>

    {isDropdownVisible && <Content />}
  </>
}