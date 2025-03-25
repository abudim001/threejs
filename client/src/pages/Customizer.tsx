import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { snapshot, useSnapshot } from "valtio";

import config from "../config/config";
import state from "../store";
import { download } from "../assets";
import { downloadCanvasToImage, reader } from "../config/helpers";
import { EditorTabs, DecalTypes, FilterTabs } from "../config/constants";
import { fadeAnimation, slideAnimation } from "../config/motion";
import { CustomButton, Tap } from "../components";

const Customizer = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          {" "}
          <motion.div
            key="custom"
            className="absolute top-0 left-0 z-10"
            {...slideAnimation("left")}
          >
            <div className="flex items-center min-h-screen min-w-screen">
              <div className="editortabs-container tabs">
                {EditorTabs.map((tap) => (
                  <Tap
                    key={tap.name}
                    tab={tap}
                    handleClick={() => {}}
                    isFilterTab
                    isActiveTab={tap.name}
                  />
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            className="absolute z-10 top-5 right-5"
            {...fadeAnimation}
          >
            <CustomButton
              type="filled"
              title="Go Back"
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              handleClick={() => (state.intro = true)}
            />
          </motion.div>
          <motion.div
            className="filtertabs-container"
            {...slideAnimation("up")}
          >
            {" "}
            {FilterTabs.map((tap) => (
              <Tap
                key={tap.name}
                tab={tap}
                handleClick={() => {}}
                isFilterTab
                isActiveTab={tap.name}
              />
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Customizer;
