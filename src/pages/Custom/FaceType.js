import * as React from "react"
import Svg, { Path, G, ClipPath, Defs, Mask, Ellipse, Rect, Circle } from "react-native-svg"

function SvgHeart(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={46}
            height={47}
            viewBox="0 0 46 47"
            fill="none"
            {...props}
        >
            <Path
                d="M23.192 36.054l-.192.192-.21-.192c-9.105-8.26-15.123-13.723-15.123-19.262 0-3.834 2.875-6.709 6.708-6.709 2.952 0 5.827 1.917 6.843 4.524h3.565c1.015-2.607 3.89-4.524 6.842-4.524 3.834 0 6.709 2.875 6.709 6.709 0 5.539-6.019 11.001-15.142 19.262zM31.625 6.25c-3.335 0-6.536 1.553-8.625 3.987-2.089-2.434-5.29-3.987-8.625-3.987-5.903 0-10.541 4.62-10.541 10.542 0 7.225 6.516 13.148 16.387 22.099l2.78 2.53 2.778-2.53c9.871-8.951 16.388-14.873 16.388-22.1 0-5.922-4.639-10.541-10.542-10.541z"
                fill={props.fillPath || '#fff'}
            />
        </Svg>
    )
}

function SvgOblongo(props) {
    return (
        <Svg
            width={28}
            height={39}
            viewBox="0 0 28 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Rect
                x={1.68625}
                y={1.43625}
                width={24.8775}
                height={36.1275}
                rx={12.4388}
                stroke={props.fillRect || "#fff"}
                strokeWidth={2.8725}
            />
        </Svg>
    )
}

function SvgDiamond(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={46}
            height={47}
            viewBox="0 0 46 47"
            fill="none"
            {...props}
        >
            <Path
                d="M20.76 39.625L10.457 26.38c-1.165-1.501-1.165-4.261 0-5.75L20.76 7.385a2.792 2.792 0 014.48 0l10.303 13.244c1.165 1.5 1.165 4.26 0 5.75L25.24 39.625a2.793 2.793 0 01-4.481 0z"
                stroke={props.fillPath || "#fff"}
                strokeWidth={3.83333}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

function SvgCircle(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={41}
            height={41}
            viewBox="0 0 41 41"
            fill="none"
            {...props}
        >
            <Circle cx={20.5} cy={20.5} r={18.585} stroke={props.fillCircle || "#fff"} strokeWidth={3.83} />
        </Svg>
    )
}

function SvgEgg(props) {
    return (
        <Svg
            width={28}
            height={39}
            viewBox="0 0 28 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Rect
                x={1.68625}
                y={1.43625}
                width={24.8775}
                height={36.1275}
                rx={12.4388}
                stroke={props.fillRect || "#fff"}
                strokeWidth={2.8725}
            />
        </Svg>
    )
}

function SvgSquare(props) {
    return (
        <Svg
            width={40}
            height={41}
            viewBox="0 0 40 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                stroke={props.fillPath || "#fff"}
                strokeWidth={3.83}
                d="M1.915 2.415H38.085V38.585H1.915z"
            />
        </Svg>
    )
}

export {
    SvgHeart,
    SvgOblongo,
    SvgDiamond,
    SvgCircle,
    SvgSquare,
    SvgEgg
}
