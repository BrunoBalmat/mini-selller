export const LoadingState = () => (
	<div className="min-h-[70vh] bg-white rounded-lg shadow flex items-center flex-col justify-center gap-8">
		<div className="text-center">
			<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto" />
			<p className="mt-4 text-gray-600">Loading leads...</p>
		</div>
	</div>
);
