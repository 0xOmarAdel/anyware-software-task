type Props = {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

const Button: React.FC<Props> = (props) => {
  return (
    <button
      disabled={props.disabled}
      type={props.type || "button"}
      className="py-1.5 bg-primary text-gray-100 rounded-md"
      onClick={props.onClick}
    >
      <span className="dark:text-textLighter">{props.text}</span>
    </button>
  );
};

export default Button;
