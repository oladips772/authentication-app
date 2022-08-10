/** @format */
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Footer from "../components/Footer"; 

function About() {
  return (
    <div>
      <Navbar />
      <motion.div
        className="max-w-[1200px] mx-auto mt-[120px] overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
      >
        <div className="flex items-center flex-col md:flex-row lg:flex-row">
          <img
            src="https://images.ctfassets.net/c5bd0wqjc7v0/3zKOX9Ce6joHJiXNa70wtd/f4a6709acd4495817081821638e641ae/corporate-about-page-hero-image.jpeg?fm=webp&q=60"
            alt=""
            className="p-4 h-[300px] md:h-[600px] lg:h-[600px] w-[400px] md:w-[600px] lg:w-[500px]"
          />
          <div className="flex flex-col md:p-6 lg:p-6">
            <h1 className="font-[700] text-[80px] p-2">About Coinbox</h1>
            <p className="font-[500] text-2xl p-2">
              We are building the cryptoeconomy a more fair, accessible,
              efficient, and transparent financial system enabled by crypto. We
              started in 2012 with the radical idea that anyone, anywhere,
              should be able to easily and securely send and receive Bitcoin.
              Today, we offer a trusted and easy-to-use platform for accessing
              the broader cryptoeconomy.
            </p>
          </div>
        </div>
        {/* grid div */}
        <div className="flex flex-col items-center md:items-stretch lg:items-stretch md:flex-row lg:flex-row mt-[60px] pb-6 mb-6 mr-8">
          <div className="max-w-[550px] mb-6">
            <h1 className="text-3xl font-[700] p-2 mb-2">
              Coinbox powers the cryptoeconomy investment globe
            </h1>
            <p className="text-lg font-[600] p-2">
              Customers around the world discover and begin their journeys with
              crypto through Coinbase.
            </p>
            <p className="text-lg font-[600] p-2">
              Approximately 98 million verified users, 13,000 institutions, and
              230,000 ecosystem partners in over 100 countries trust Coinbase to
              easily and securely invest, spend, save, earn, and use crypto.
            </p>
          </div>
          {/* mini grid main */}
          <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 pb-10 ml-6">
            <div className="border-2 border-gray-400 rounded-md flex flex-col items-center justify-center p-2 w-[200px] h-[200px] shadow-md">
              <h4 className="text-[35px] font-[700] p-2">100M+</h4>
              <p className="text-2xl font-[600] p-2">Verfied users</p>
            </div>
            <div className="border-2 border-gray-400 rounded-md flex flex-col items-center justify-center p-2 w-[200px] h-[200px] shadow-md">
              <h4 className="text-[35px] font-[700] p-2">100M+</h4>
              <p className="text-2xl font-[600] p-2">Verfied users</p>
            </div>
            <div className="border-2 border-gray-400 rounded-md flex flex-col items-center justify-center p-2 w-[200px] h-[200px] shadow-md">
              <h4 className="text-[35px] font-[700] p-2">100M+</h4>
              <p className="text-2xl font-[600] p-2">Verfied users</p>
            </div>{" "}
            <div className="border-2 border-gray-400 rounded-md flex flex-col items-center justify-center p-2 w-[200px] h-[200px] shadow-md">
              <h4 className="text-[35px] font-[700] p-2">100M+</h4>
              <p className="text-2xl font-[600] p-2">Verfied users</p>
            </div>
          </section>
        </div>

      </motion.div>
      <Footer />
    </div>
  );
}

export default About;
