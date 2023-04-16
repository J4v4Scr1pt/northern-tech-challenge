import { describe, expect } from 'vitest';
import { screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import WeatherStations from '../WeatherStations';
import { renderWithClient } from '../../../utils/test-utils/render-with-tanstack';

describe('WeatherStations', () => {
	afterAll(cleanup);
	const user = userEvent.setup();
	renderWithClient(<WeatherStations />);

	test('Should render buttons', () => {
		expect(screen.getByText('+ Add a station')).toBeInTheDocument();
	});

	test('Open input fields', async () => {
		await user.click(screen.getByText('+ Add a station'));
		expect(screen.getByText('Save')).toBeVisible();
	});
});
