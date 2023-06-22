import About from "@/container/About";
import Advantages from "@/container/Advantages";
import Example from "@/container/Example";
import Footer from "@/container/Footer";
import Header from "@/container/Header";
import Prices from "@/container/Prices";
import Form from "@/components/Form";


export default function Home() {
  return (
    <>
    <Header />
    <div className="max-w-[1440] mx-auto flex justify-center flex-col items-center md:px-4 px-8">
      <About />
      <Prices />
      <Example />
      <Advantages />
      <Form />
      <Footer />
    </div>
      <Example />
      <Footer />
      <Advantages />
    </>
  );
}

