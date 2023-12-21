import { useEffect, useState } from "react";

const useViewport = () => {
	const [width, setWidth] = useState(window.innerWidth);
	const breackpoint = 640;

	useEffect(() => {
		const handleWindowResize = () => setWidth(window.innerWidth);
		window.addEventListener("resize", handleWindowResize);
		return () => window.removeEventListener("resize", handleWindowResize);
	}, []);

	// Return the width so we can use it in our components
	return { width, breackpoint };
};

export default useViewport;
