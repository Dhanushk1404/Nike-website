import {Hero,Popularproducts,Footer,Superquality,Subscribe,Services,Specialoffer,Customerservices} from "./sections";
import Nav from "./componenets/Nav";
const App=()=>(
  <main className="relative">
   < Nav/>
    <section className="xl:padding-1 wide:padding-r padding-b">
     < Hero/>
    </section>
    <section className="padding">
     < Popularproducts/>
    </section>
    <section className="padding">
      <Superquality/>
    </section>
    <section className="padding-x py-10 ">
    <  Services />
    </section>
    <section className="padding">
      <Specialoffer/>
    </section>
    <section className="bg-pale-blue padding">
     < Customerservices/>
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe/>
    </section>
    <section className=" bg-black padding-x padding-y pb-8">
     < Footer/>
    </section>
  </main>
);

export default App;