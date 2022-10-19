import React from "react";

type Props = {
  children: React.ReactNode;
  onClick: () => void;
}

export const Button = React.memo(({ onClick, children }: Props) => {
  return <button onClick={() => onClick()}>
    {children}
  </button>
});