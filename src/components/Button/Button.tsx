type Props = {
  children: string;
};

export const Button = ({ children }: Props) => {
  const handleClick = () => {
    alert("Allllllert!");
  };
  return <button onClick={handleClick}>{children}</button>;
};
