import { motion } from "framer-motion";
import { useState } from "react";

const Webdev = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex items-center justify-center">
      <motion.div
        className="relative overflow-visible rounded-lg h-[250px] w-[300px] mt-3"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="relative z-10 p-8 mt-8">
          {/* Design - starts left, moves right */}
          <motion.p
            className="w-[120.28px] py-1 border border-borColor rounded-3xl text-lg font-normal text-center mb-7 absolute left-8 top-0"
            initial={{ x: 0 }}
            animate={
              hovered
                ? { 
                    x: 100, // moves right
                    
                    transition: {
                      type: "spring",
                      stiffness: 100,
                      damping:  10
                    }
                  }
                : { 
                    x: 0,
                    rotate: 0,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                      damping: 15
                    }
                  }
            }
          >
            Design
          </motion.p>

          {/* Develop - starts center, moves left */}
          <motion.p
            className="w-[120.28px] py-1 border border-borColor rounded-3xl text-lg font-normal text-center mb-7 absolute right-8  top-16"
            initial={{ x: "-100%" }}
            animate={
              hovered
                ? { 
                    x: "-100%", // moves left from center
                   
                    transition: {
                      type: "spring",
                      stiffness: 100,
                      damping: 10,
                      
                    }
                  }
                : { 
                    x: "0",
                    rotate: 0,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                      damping: 15
                    }
                  }
            }
          >
            Develop
          </motion.p>

          {/* Testing - starts right, moves further right */}
          <motion.p
            className="w-[120.28px] py-1 border border-borColor rounded-3xl text-lg font-normal text-center absolute left-8 top-32"
            initial={{ x: 0 }}
            animate={
              hovered
                ? { 
                    x: 100, // moves left (from right position)
                   
                    transition: {
                      type: "spring",
                      stiffness: 100,
                      damping: 10,
                      
                    }
                  }
                : { 
                    x: 0,
                    rotate: 0,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                      damping: 15
                    }
                  }
            }
          >
            Testing
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default Webdev;