interface TextInputProps {
  children: string;
  type: string;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = ({ children, type, value, onChange }: TextInputProps) => {
  return (
    <form>
      <input
        placeholder={children}
        type={type}
        value={value}
        onChange={onChange}
      />
    </form>
  );
};

export default TextInput;
