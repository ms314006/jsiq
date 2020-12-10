import { HTMLMotionProps, motion } from 'framer-motion';

export const PageTransition = (props: HTMLMotionProps<'div'>) => (
  <motion.div
    key={props.id}
    initial={{ y: -16, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    {...props}
  />
);
