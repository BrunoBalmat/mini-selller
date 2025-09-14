import { RouterProvider } from "react-router-dom";
import { NuqsAdapter } from "nuqs/adapters/react";
import { QueryClientProvider } from "@tanstack/react-query";

import { router, queryClient } from "@/config";

export function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<NuqsAdapter>
				<RouterProvider router={router} />
			</NuqsAdapter>
		</QueryClientProvider>
	);
}
