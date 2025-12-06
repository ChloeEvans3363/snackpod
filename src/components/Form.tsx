interface TextInputProps {
  children: string;
  type: string;
}

const TextInput = ({ children, type }: TextInputProps) => {
  return (
    <form>
      <input placeholder={children} type={type} />
    </form>
  );
};

export default TextInput;
