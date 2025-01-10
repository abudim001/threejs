import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import {
  slideAnimation,
  fadeAnimation,
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
} from "../config/motion";

import state from "../store";
import CustomButton from "../components/CustomButton";

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img className="w-8 h-8" alt="logo" src="./threejs.png" />
          </motion.header>

          <motion.div className="home-content" {...slideAnimation("right")}>
            <motion.div className="head-text" {...headTextAnimation}>
              <h1>
                LET'S <br className="xl:block hidden" /> DO IT.
              </h1>
            </motion.div>
            <motion.div
              className="flex flex-col gap-5"
              {...headContentAnimation}
            >
              <p className="max-w-md font-normal text-gray-600 text-base">
                Create your unique and exclusive shirt with our brand-new 3D
                customization tool. <strong>Unleash your imagination</strong>{" "}
                and define your own style.
              </p>
              <CustomButton
                type="filled"
                title="Customize it"
                customStyles="w-fit px-2=4 py-2.5 font-bold text-sm"
                handleClick={() => (state.intro = false)}
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
