
import type { PairCardProps } from "./types/index.ts";


export const colors = [
   "#D1FAE5",
   "#EDE9FE",
   "#FFEDD5",
   "#d8dadc"
]

// render random  colors
export const randomColors =(postId:number):string => {
      const randomIndex = postId % colors.length
      return colors[randomIndex]
}