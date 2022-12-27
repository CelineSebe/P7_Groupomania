// import React from "react";
// import axios from "axios";
// import cookie from "cookie";
// import Button from "../Button";

// const Logout = () => {
   
// 	const removeCookie = (key) => {
// 		if (window !== "undefined") {
// 			cookie.remove(key);
// 		}
// 	};

// 	const logout = async () => {
// 		await axios({
// 			method: "get",
// 			url: `${process.env.REACT_APP_API_URL}api/user/logout`,
// 			withCredentials: true,
// 		})
// 			.then(() => removeCookie("jwt"))
// 			.catch((err) => console.log(err));
// 		window.location = "/";
// 	};

// 	return (
// 		<Button onClick={logout} className="logout-btn">
// 			<p>Se déconnecter</p>
// 		</Button>
// 	);
// };

// export default Logout;