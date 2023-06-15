export default function MyButton({text}){
  return (
    <button className="bg-primary hover:text-primary hover:bg-black text-black font-bold py-2 px-4 rounded transition duration-500">
      {text}
    </button>
  )
}