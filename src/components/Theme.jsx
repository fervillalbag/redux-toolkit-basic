import React, {useState} from "react"
import {changeColor} from "../features/theme"
import {useDispatch} from "react-redux"

export default function Theme() {
	const [color, setColor] = useState()
	const dispatch = useDispatch()
	
	return (
		<div>
			<input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
			<button onClick={() => dispatch(changeColor(color))}>Change theme</button>
		</div>
	)
}