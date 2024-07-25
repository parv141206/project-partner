import React from "react";
import Window from "../../Statefull/Window";
import Xarrow from "react-xarrows";
import Card from "@/Components/Statefull/Card";
import { motion } from "framer-motion";
import HomePageAnimation from "./HomePageAnimation";
export default function Features() {
  return (
    <div className="container mx-auto flex flex-col gap-5 px-10">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <Window id="window-1">
            <div className="text-3xl">We take you from</div>
            <div className="grid grid-cols-1 gap-3 p-3 md:grid-cols-2">
              <div className="border p-5 dark:border-gray-600">
                How to make a website in PHP for CRUD operations?
              </div>
              <div className="border p-5 dark:border-gray-600">
                How to make an Angular app with page routing?
              </div>
              <div className="border p-5 dark:border-gray-600">
                RDBMS Project ideas...
              </div>
              <div className="border p-5 dark:border-gray-600">
                DJango / Python projects
              </div>
              <div className="border p-5 dark:border-gray-600">
                Java BattleShip console game
              </div>
              <div className="border p-5 dark:border-gray-600">
                How to make a Weather API in JS?
              </div>
            </div>
            <div className="text-xl text-gray-500">And many more...</div>
          </Window>
        </motion.div>
        <div className="flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <Card id="window-2" className="bg-white-300/50">
              <div className="text-center text-3xl">To</div>
              <div className="p-3 text-center text-3xl">
                ✨ A complete project!
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
      <div className="container mx-auto p-10">
        <div className="font-comico my-10 text-center text-5xl">
          &quot;Why do i trust you?&quot;
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="relative hidden min-h-[60vh] md:block">
            <HomePageAnimation />
          </div>
          <motion.div
            className="flex h-full flex-col items-center justify-center"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <Card>
              <div className="flex h-full items-center justify-center text-center text-3xl">
                Don&apos;t worry! We will only take payment if you are 100%
                satisfied 😊
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
