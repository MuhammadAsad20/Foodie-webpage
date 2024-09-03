import React, { useState, useEffect } from 'react';
import { motion, useCycle } from 'framer-motion';

function ToggleBtn() {
    const [current, cycle] = useCycle("off", "on");

    // Apply styles based on the toggle state
    useEffect(() => {
        document.body.style.backgroundColor = current === 'on' ? 'black' : 'white';
        document.body.style.color = current === 'on' ? 'white' : 'black';
    }, [current]);

    return (
        
        
            <div
                style={{
                    width: 200,
                    height: 200,
                    borderRadius: 100,
                    backgroundColor: "#f0f0f0",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <motion.div
                    style={{
                        width: 51,
                        height: 31,
                        borderRadius: 16,
                        backgroundColor: "rgba(120,120,128,.16)",
                        position: "relative",
                        cursor: "pointer"
                    }}
                    animate={current}
                    initial={false}
                    onTapStart={cycle}
                >
                    <motion.div
                        style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: 16,
                            backgroundColor: "#ff007f" // Custom pink
                        }}
                        variants={{ off: { scale: 0 }, on: { scale: 1 } }}
                        transition={{ ease: "easeInOut" }}
                    />
                    <motion.div
                        style={{
                            width: 27,
                            height: 27,
                            borderRadius: 16,
                            backgroundColor: "#ffffff",
                            boxShadow:
                                "0 0 0 0.5px rgba(0,0,0,.04), 0 3px 8px 0 rgba(0,0,0,.15), 0 3px 1px 0 rgba(0,0,0,.06)",
                            position: "absolute",
                            top: 2,
                            left: 2
                        }}
                        variants={{ off: { x: 0 }, on: { x: 20 } }}
                        transition={{ ease: "easeInOut" }}
                    />
                </motion.div>
            </div>
        
    );
}

export default ToggleBtn;
