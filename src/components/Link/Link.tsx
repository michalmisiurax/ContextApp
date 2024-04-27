import "./Link.css";
type Props = {
  link: string;
  children: string;
};

export const Link = ({ link, children }: Props) => {
  return (
    // eslint-disable-next-line react/jsx-no-target-blank
    <a href={link} className="link-button" target="_blank">
      {children}
    </a>
  );
};
