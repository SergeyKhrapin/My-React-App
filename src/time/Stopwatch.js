import React, { useState, useRef } from "react"
import withBorder from "../utilities/withBorder"

const Stopwatch = () => {
	const [count, setCount] = useState(0)
	const intervalID = useRef(null)
	
	const handleStopwatch = () => {
		if (!count) {
			intervalID.current = setInterval(() => {
				setCount(c => ++c)
			}, 1000)
		} else {
			clearInterval(intervalID.current)
			setCount(0)
		}
	}

	return (
		<div>
			<h3>{count}</h3>
			<button onClick={handleStopwatch}>
				{count ? 'Stop' : 'Start'}
			</button>
		</div>
	)
}

export default withBorder(Stopwatch)
