import Random from '../Random';
import Veggie from '../Veggie';
import { motion } from 'framer-motion';

function Home() {
    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Random />
            <Veggie />
        </motion.div>
    );
}

export default Home;
