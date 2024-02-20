type Props = {
  id: string;
  type: string;
  value: string;
  name?: string;
  placeholder?: string;
  onChange: (text: string) => void;
};

const Input: React.FC<Props> = ({
  id,
  type,
  value,
  placeholder,
  name,
  onChange,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    onChange(event.target.value);

  return (
    <input
      className="w-60 py-1 px-3 border border-gray-300 rounded-md text-gray-600 focus-visible:outline-none placeholder:text-gray-500"
      id={id}
      type={type}
      value={value}
      name={name}
      onChange={handleInputChange}
      autoComplete="off"
      placeholder={placeholder}
    />
  );
};

export default Input;
