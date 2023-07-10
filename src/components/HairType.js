import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={32}
            height={32}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M7 10l-4 4 4 4"
                stroke="#fff"
                strokeWidth={2.625}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M4 14h18.375C26.047 14 29 17.083 29 20.75V22"
                stroke="#fff"
                strokeWidth={2.625}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default SvgComponent
