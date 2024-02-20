type Props = {
  children: React.ReactNode;
  className?: string;
};

const Card: React.FC<Props> = (props) => {
  return (
    <div
      className={`h-fit p-5 bg-white shadow-lg rounded-xl text-center ${
        props.className || ""
      }`}
    >
      {props.children}
    </div>
  );
};

export default Card;
