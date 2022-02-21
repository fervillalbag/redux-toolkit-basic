import React from "react"
import {useSelector, useDispatch} from "react-redux"
import {logout} from "../features/user"

export default function Profile() {
	const user = useSelector((state) => state.user.value)
	const theme = useSelector((state) => state.theme)
	const dispatch = useDispatch()
	
	return (
		<div>
			<h2 style={{color: theme.value}}>Hello Profile</h2>

			<p>Name: {user.name}</p>
			<p>Age: {user.age}</p>
			<p>Email: {user.email}</p>

			<button
				onClick={() => dispatch(logout())}
			>Logout</button>
		</div>
	)
}