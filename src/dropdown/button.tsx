
type Props = {
  children: React.ReactNode;
  onClick: () => void;
}

export const Button = ({ onClick, children }: Props) => {
  return <button onClick={() => onClick()}>
    {children}
  </button>
}