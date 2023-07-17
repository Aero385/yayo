export default function MyButton({ text, className }) {
  const buttonClassName = `w-fit flex font-bold py-2 px-4 rounded transition duration-500 ${className}`;

  return (
    <button className={buttonClassName}>
      {text}
    </button>
  );
}