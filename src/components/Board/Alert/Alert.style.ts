import styled from "styled-components";
import { motion } from "framer-motion";
import { Button } from "../../Scores/Scores.style";

export const AlertWrapper = styled(motion.div)`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(238, 228, 218, 0.73);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h2 {
        color: #776e65;
        font-size: 56px;
        margin-bottom: 27px;
    }

    
`;

export { Button }
