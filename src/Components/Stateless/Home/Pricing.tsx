import PricingCard from "@/Components/Statefull/PricingCard";
import React from "react";
import { motion } from "framer-motion";
import Button from "@/Components/Statefull/Button";
import Link from "next/link";

export default function Pricing() {
  return (
    <div className="container mx-auto flex flex-col gap-5 p-10">
      <div className="text-center font-comico text-5xl">
        &quot;This must be expensive 🤔&quot;
      </div>
      <div className="text-center text-3xl">NOT AT ALL!</div>
      <div className="grid grid-cols-1 items-center gap-5 p-5 md:grid-cols-3">
        {[
          {
            title: "Starter",
            price: "100₹",
            description:
              "Best for small projects which need to be done in a short time",
            features: [
              "Complete Code",
              "Fully documented",
              "Delivered withing 24 hours!",
            ],
            action: (
              <Link href="/new-project" className="btn">
                Get Started
              </Link>
            ),
          },
          {
            title: "Pro",
            price: "200₹",
            description: "For all kinds of projects",
            features: [
              "Complete Code",
              "Fully documented",
              "Delivered within 8 hours!",
              "Highly Customizable",
              "We provide full documentation according to your college!",
              "Added support for PPTs, PDFs, etc.",
            ],
            action: (
              <Link href="/new-project" className="btn">
                Get Started
              </Link>
            ),
          },
          {
            title: "Dedicated",
            price: "150₹",
            description: "Best for larger projects",
            features: [
              "Complete Code",
              "Fully documented",
              "Delivered withing 24 hours!",
              "Highly Customizable",
              "We provide full documentation according to your college!",
            ],
            action: (
              <Link href="/new-project" className="btn">
                Get Started
              </Link>
            ),
          },
        ].map((card, index) => (
          <motion.div
            key={index}
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            transition={{
              delay: index * 0.2,
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            <PricingCard
              title={card.title}
              price={card.price}
              description={card.description}
              features={card.features}
              action={card.action}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
