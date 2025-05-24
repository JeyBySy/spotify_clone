import PropTypes from "prop-types";
import { motion } from "framer-motion";

const PopOver = ({ children, isOpen, onClose }) => {
    return (
        isOpen && (
            <div
                className="fixed inset-0 z-40 flex items-center justify-center"
                onClick={(e) => {
                    if (e.target === e.currentTarget) onClose();
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-neutral-800 text-white max-w-3xl h-[70%] max-h-[70rem] w-full rounded-md shadow-lg"
                >
                    {children}
                </motion.div>
            </div>
        )
    );
};

PopOver.propTypes = {
    children: PropTypes.node,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default PopOver;
