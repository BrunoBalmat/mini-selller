import { createBrowserRouter } from "react-router-dom";

import { ROUTES } from "@/shared/constants";
import { HomeLeads } from "@/pages";

export const router = createBrowserRouter([
	{
		path: ROUTES.HOME,
		element: <HomeLeads />,
	},
]);
