type Props = {
  children: React.ReactNode;
};

const Card: React.FC<Props> = (props) => {
  return (
    <div className="h-fit p-5 bg-white shadow-lg rounded-xl text-center dark:bg-primarylessDark dark:text-textLighter">
      {props.children}
    </div>
  );
};

export default Card;
