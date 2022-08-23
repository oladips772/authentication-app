/** @format */
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";

function Contact() {
  return (
    <div>
      <Navbar />
      <motion.div
        className="mt-[120px] max-w-[1070px] mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
      >
        <div>
          <h1 className="font-[700] text-[35px] p-2">
            capicoin Customer Support
          </h1>
          <p className="text-lg p-2">
            capicoin provides 24/7 customer support both online and offline Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Iste asperiores
            sunt aliquid vitae doloremque illum, esse modi consectetur optio
            ipsam ullam soluta inventore dolore temporibus maxime reprehenderit
            consequatur. Modi, odio!
          </p>
          <p className="text-lg p-2">
            capicoin provides 24/7 customer support both online and offline Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Iste asperiores
            sunt aliquid vitae doloremque illum, esse modi consectetur optio
            ipsam ullam soluta inventore dolore temporibus maxime reprehenderit
            consequatur. Modi, odio!
          </p>
        </div>
        <div>
          <h1 className="font-[700] text-[35px] p-2">
            capicoin Withdrawals issues
          </h1>
          <p className="text-lg p-2">
            capicoin provides 24/7 customer support both online and offline Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Iste asperiores
            sunt aliquid vitae doloremque illum, esse modi consectetur optio
            ipsam ullam soluta inventore dolore temporibus maxime reprehenderit
            consequatur. Modi, odio!
          </p>
          <p className="text-lg p-2">
            capicoin provides 24/7 customer support both online and offline Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Iste asperiores
            sunt aliquid vitae doloremque illum, esse modi consectetur optio
            ipsam ullam soluta inventore dolore temporibus maxime reprehenderit
            consequatur. Modi, odio!
          </p>
        </div>
        <div>
          <h1 className="font-[700] text-[35px] p-2">
            capicoin Withdrawals issues
          </h1>
          <p className="text-lg p-2">
            capicoin provides 24/7 customer support both online and offline Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Iste asperiores
            sunt aliquid vitae doloremque illum, esse modi consectetur optio
            ipsam ullam soluta inventore dolore temporibus maxime reprehenderit
            consequatur. Modi, odio!
          </p>
          <p className="text-lg p-2">
            capicoin provides 24/7 customer support both online and offline Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Iste asperiores
            sunt aliquid vitae doloremque illum, esse modi consectetur optio
            ipsam ullam soluta inventore dolore temporibus maxime reprehenderit
            consequatur. Modi, odio!
          </p>
        </div>
        <div className="mt-10">
          <h1 className="font-[700] text-[18px] p-2">
            Reach out or get in touch with capicoin 24/7 customer support.
          </h1>
          <div>
            <div className="flex items-center p-2">
              <LocalPhoneIcon className="text-blue-700" />
              <a
                href={`tel:+12 5840 02 432`}
                className="text-lg ml-2 font-bold"
              >
                +12 5840 02 432
              </a>
            </div>
            <div className="flex items-center p-2">
              <LocalPhoneIcon className="text-blue-700" />
              <a
                href={`tel:+221 0016 033 118`}
                className="text-lg ml-2 font-bold"
              >
                +221 0016 033 118{" "}
              </a>
            </div>
            <div className="flex items-center p-2">
              <MailIcon className="text-blue-700" />
              <a
                href={`mailto:help@capicoin.com`}
                className="text-lg ml-2 font-bold"
              >
                help@capicoin.com
              </a>
            </div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
}

export default Contact;
