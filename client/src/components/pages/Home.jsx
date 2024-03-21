import Random from '../Random';
import Veggie from '../Veggie';
import { motion } from 'framer-motion';

function Home() {
    return (
        <motion.div>
            <Random />
            <Veggie />
        </motion.div>
    );
}

export default Home;
