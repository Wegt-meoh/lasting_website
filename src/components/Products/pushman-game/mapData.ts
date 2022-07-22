import deepClone from "../../../utils/deepClone"
import { GraphCellNumberType } from "./constants"
import { XSB2Number } from "./utils"

const graphData: GraphCellNumberType[][][] = [
    [
        [0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 0],
        [0, 1, 4, 1, 1, 0],
        [0, 2, 1, 1, 1, 0],
        [0, 1, 1, 3, 1, 0],
        [0, 0, 0, 0, 0, 0]
    ],
    [
        [1, 1, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 1, 1, 1, 1, 1, 0],
        [1, 0, 0, 4, 0, 0, 0, 1, 0],
        [1, 0, 1, 4, 1, 1, 0, 1, 0],
        [1, 0, 1, 1, 1, 1, 0, 1, 0],
        [1, 0, 0, 0, 4, 1, 0, 1, 0],
        [1, 1, 1, 0, 1, 1, 0, 1, 0],
        [0, 0, 0, 0, 1, 1, 0, 1, 0],
        [0, 1, 1, 0, 1, 1, 0, 1, 0],
        [0, 1, 3, 0, 0, 1, 1, 1, 0],
        [0, 1, 3, 1, 1, 1, 2, 1, 0],
        [0, 1, 3, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
    ],
    XSB2Number('#########@-----##-#-$--##---.#.##-.#$*$##--$-$.##----.-#########', 8),
    [
        [1, 1, 0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 1, 2, 1, 0, 0, 0],
        [0, 1, 4, 4, 4, 4, 4, 1, 0],
        [0, 1, 3, 3, 3, 3, 3, 1, 0],
        [0, 1, 1, 1, 0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    XSB2Number('___#####__##---####@$#-##--*$.-##-#-.-###-$-.-#_###--##___####__', 8),
    XSB2Number('_____#####_________##-@-##_______##--*--##_____##--*$*--##___##--*-*-*--##_##--*-*.*-*--###--*-*-*-*-*--##-#.*$#-#$#.*-##--*-*-*-*-*--###--*-*.#-*--##_##--*-*-*--##___##--*$*--##_____##--*--##_______##---##_________#####_____', 15),
    [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 3, 1, 1, 1, 5, 1, 2, 1, 5, 1, 1, 1, 3, 0,],
        [0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0,],
        [0, 1, 4, 0, 0, 5, 0, 5, 0, 5, 0, 0, 4, 1, 0,],
        [0, 1, 1, 0, 1, 1, 1, 4, 1, 1, 1, 0, 1, 1, 0,],
        [0, 1, 0, 0, 1, 0, 1, 3, 1, 0, 1, 0, 0, 1, 0,],
        [0, 3, 4, 3, 4, 1, 0, 1, 0, 1, 4, 3, 4, 3, 0,],
        [0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0,],
        [0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0,],
        [0, 1, 1, 1, 1, 3, 4, 1, 4, 1, 1, 1, 1, 3, 0,],
        [0, 4, 4, 0, 0, 1, 0, 3, 4, 4, 0, 3, 1, 1, 0,],
        [0, 1, 3, 4, 3, 1, 0, 1, 1, 3, 1, 4, 0, 4, 0,],
        [0, 3, 3, 4, 3, 5, 4, 5, 4, 3, 4, 3, 1, 1, 0,],
        [0, 5, 1, 1, 1, 4, 1, 1, 3, 1, 0, 0, 1, 3, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    ],
    XSB2Number('#############@-$-.---##-.$*$*-#-##-$-.-$-#-##**-#-***-##-*-.-$.*-##-*$#*--*-##-.-*---*-##-*$###*.-##-.------#############', 11),
    XSB2Number('_#####__####____________________#--#####--#######_______#####__#--------$------#########---#__#--######-#####-#--$-$------#_##$-#----#-------#--$-$--#$$$###-$-#-$--#$###$$-##---###-$---##-#-$-#$##-#-$-###--###-$---$-##---#-#----#-$-###.###-$--$---######---##-#-$-#---.-#.#$######____#-$##--.-#-#-$-*-$---####______#--##-$.#--#@##*##$-----#______#-#####.#--.*#...#---#$-#______#-#--##.-##.*..#$#####--#______#-#-*.*...#...#--$-----##_____##-#-.##.*....#-----#-$-###____#--##-##.#.*.##--#--#$#---#____#----$-#.#.*####--###--$$-#____####---#......*.*-#_#$#---#_______########--###--#_#---###______________####_####_#####___', 31)
]



function getGraphData(level: number): GraphCellNumberType[][] {
    try {
        const t = deepClone(graphData[level])
        return t
    } catch (e) {
        alert('get map data error:no such level in map data')
        console.log('get map data error:no such level in map data')
        return []
    }
}

function getGraphLength(): number {
    return graphData.length
}

export { getGraphData, getGraphLength }