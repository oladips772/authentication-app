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
            <p className="font-[500] text-lg p-2">
              We are a dynamic group whose main focus is to provide our clients
              with the best possible service.
              <br />
              <br />
              Coinbox is a profitable and Trusted investment program,
              established by a strong team of highly skilled traders,and
              investment consultants in the offline and online investment
              market.
              <br />
              <br />
              We put your investments in new highly remunerative innovative
              projects,which offers great returns along.Today our organiaztion
              has a proffesional team to develop a business.
            </p>
          </div>
        </div>
        {/* grid div */}
        <div className="flex flex-col items-center md:items-start lg:items-start md:flex-row lg:flex-row mt-[60px] pb-6 mb-6 mr-8">
          <div className="max-w-[550px] mb-6">
            <h1 className="text-3xl font-[700] p-2 mb-2">
              Coinbox powers the cryptoeconomy investment globe.
            </h1>
            <p className="text-lg font-[500] p-2">
              We know how much , where and when to put your investmens. And we
              Know how to achieve maximum income.
              <br />
              <br />
              We are constantly diversifying our investment portfolio and
              building stronger connections worldwide. When one opportunity
              fails, you can be rest assured that our strategy of
              diversification continues to keep our business profitable and
              growing.
              <br />
              <br />n You have the opportunity right now to join a revolutionary
              investing opportunity that is sure to continue growing and mature
              into the most, successful high yeild opportunity today.
              <br />
              <br />
            </p>
            <h1 className="text-3xl font-[700] p-2 mb-2">
              Our Support Department
            </h1>
            <p className="text-lg font-[500] p-2">
              Our support department is at your disposal 24 hours a day, 7 days
              a week.
              <br />
              All you need to do is to , mmake a deposit using your most
              conveneint payment processor anfd get in from time to time to
              withdraw profit.
              <br />
              It is easy and effective...
              <br />
              <br />
              We are active in the foreign exchange trading market and endavour
              to remain at the forefront of the bitcoin industry and such we can
              provide all our clients with strong investment choices.
              <br />
              <br />
              Our regular use of progressive infrastructure and automated
              payment processing has allowed us to look for ways to offer our
              customers more value.
              <br />
              <br />
              It's time to begin drawing your assests! Coinbox offers the most
              stable returns for you with the lowest investment risks.
              <br />
              <br />
              So many investores hav beeen making nice profits from us everyday.
              Coinbox has only one motive , to offer an investment platform that
              is user-freindly which help our investors make smart profits.
              <br />
              <br />
              Client satisfaction with our services is the only motive of
              Coinbox.
              <br />
              <br />
              We are using 5 Gbps DDos Protection with 99% up-time gaurantee.
              Complex Layer 7 Protection. Global CDN Web Application Firewall +
              Certified Domain SSL certificate for secure connection to our
              website.
              <br />
              <br />
              We are using up-to-date anti-hacker technologies, to safely
              receive your deposit and pay out your profit.
              <br />
              <br />
              Join Coinbox today and let your money work for yoy , if you have
              any problems or futher questions! You are most welcome to contact
              us using our contact section.
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
        {/* our team */}
        <div>
          <div>
            <h1>Our Team</h1>
          </div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
}

export default About;
