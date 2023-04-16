import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';

const renderWithClient = (ui: React.ReactElement) => {
	const testQueryClient = new QueryClient();
	const { rerender, ...result } = render(
		<QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>
	);
	return {
		...result,
		rerender: (rerenderUi: React.ReactElement) =>
			rerender(<QueryClientProvider client={testQueryClient}>{rerenderUi}</QueryClientProvider>),
	};
};

export { renderWithClient };
