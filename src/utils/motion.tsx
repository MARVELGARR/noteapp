
type movingH1 = {
    hidden :{
        opacity: number
        x?: number,
        y?: number,
    }
    show:{
        opacity: number,
        x?: number,
        y?: number,
        transition:{
            duration: number

        }
    }
}

export const movingH1: movingH1 = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    show:{
        opacity: 1,
        y:0,
        transition:{
            duration: 0.5,

        }
    }
}

type staggerContainer = {
    hidden: {
        opacity?: number,
        scale?: number,
    },
    show: {
        transition:{
            staggerChildren: number
            delay?: number,
            duration?: number
        }
    }
}
export const staggerContainer: staggerContainer = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2,
        }
    }
}

export const movingNotes  = {
    hidden: {
        y: 100,
        opacity: 0
    },
    show: {
        y:0,
        opacity:1
    },
    transition: {
        type: "spring",
        stiffness:800,
        damping: 10,
    }
}