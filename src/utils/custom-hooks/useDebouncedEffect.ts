import {useEffect} from "react";

export const useDebouncedEffect=(effect: () => void,deps: any,delay: number) => {
	useEffect(() => {
		if(deps?.length<=0||deps[0]==='') return;
		const handler=setTimeout(() => effect(),delay);

		return () => clearTimeout(handler);
	},[...(deps||[]),delay]);
};
