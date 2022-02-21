import React from "react"
import {useDispatch} from "react-redux"

import {login} from "../features/user"

export default function Login() {
	const dispatch = useDispatch()
	
	return (
		<div>
			<button onClick={() => {
				dispatch(login({
					name: "Fernando",
					age: 21,
					email: "fer@correo.com",
				}))
			}}>
				Login
			</button>
		</div>
	)
}