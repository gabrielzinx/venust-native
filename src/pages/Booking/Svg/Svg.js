import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgTesoura(props) {
  return (
    <Svg
      width={34}
      height={34}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 .367l10 17.321.721-.416a9.167 9.167 0 0112.522 3.356l.178.31a8.81 8.81 0 01-3.225 12.034 4.523 4.523 0 01-6.178-1.655L17 20.893l-6.017 10.424a4.523 4.523 0 01-6.18 1.655 8.81 8.81 0 01-3.225-12.034l.178-.31a9.167 9.167 0 0112.522-3.355l.72.417.077-.133L7.78 4.92A3.333 3.333 0 019 .367zM4.643 22.295l-.178.31a5.477 5.477 0 002.005 7.48 1.19 1.19 0 001.625-.435l5.238-9.073-.722-.417a5.833 5.833 0 00-7.968 2.135zm16.745-2.135l-.722.417 5.239 9.073a1.19 1.19 0 001.625.435 5.476 5.476 0 002.005-7.48l-.179-.31a5.833 5.833 0 00-7.968-2.135zM25 .367A3.333 3.333 0 0126.34 4.69l-.121.23-5.379 9.317-1.925-3.334L25 .367z"
        fill="#fff"
      />
    </Svg>
  )
}

export default SvgTesoura