import {useState,useEffect} from "react";

export function useIsMobile() {
	const [isMobile,setIsMobile]=useState(
		Math.max(document.documentElement.clientWidth||0,window.innerWidth||0)<=1080
	);
	useEffect(() => {
		function handleResize() {
			setIsMobile(Math.max(document.documentElement.clientWidth||0,window.innerWidth||0)<=1080);
		}
		window.addEventListener("resize",handleResize);
		return () => window.removeEventListener("resize",handleResize);
	},[]);

	return isMobile;
}
