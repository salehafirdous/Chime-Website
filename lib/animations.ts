export const staggerContainer: any = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export const fadeInUp: any = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", duration: 0.6, bounce: 0.3 },
    },
};

export const fadeInLeft: any = {
    hidden: { opacity: 0, x: -30 },
    show: {
        opacity: 1,
        x: 0,
        transition: { type: "spring", duration: 0.6, bounce: 0.3 },
    },
};

export const fadeInRight: any = {
    hidden: { opacity: 0, x: 30 },
    show: {
        opacity: 1,
        x: 0,
        transition: { type: "spring", duration: 0.6, bounce: 0.3 },
    },
};

export const hoverScale: any = {
    whileHover: { scale: 1.02, transition: { duration: 0.2 } },
    whileTap: { scale: 0.98 },
};

export const hoverGlow: any = {
    whileHover: {
        scale: 1.02,
        boxShadow: "0px 0px 20px rgba(0, 240, 255, 0.4)",
        borderColor: "rgba(0, 240, 255, 0.8)",
        transition: { duration: 0.3 }
    },
    whileTap: { scale: 0.98 },
};
