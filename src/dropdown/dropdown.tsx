import { useState } from "react";
import { Button } from "./Button"
import { Content } from "./Content"

export const Dropdown = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  return <>
    <Button onClick={() => {
      debugger
      setIsDropdownVisible(!isDropdownVisible)
    }
    }>
      fjsldifjs
    </Button>
  </>
}