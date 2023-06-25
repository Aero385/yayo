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
    <About />
    <Prices />
    <Example />
    <Form />
    <Footer />
    <Advantages />
    </>
  );
}

