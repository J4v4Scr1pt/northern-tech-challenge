import { describe, expect } from 'vitest';
import { screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import WeatherForecast from '../WeatherForecast';
import { renderWithClient } from '../../../utils/test-utils/render-with-tanstack';

describe('WeatherStations', () => {
	afterAll(cleanup);
	const user = userEvent.setup();
	renderWithClient(<WeatherForecast />);

	test('Should render slider button', () => {
		expect(screen.getByRole('checkbox')).toBeInTheDocument();
	});

	test('Clicking slider should higlight 5 days forecast', async () => {
		await user.click(screen.getByRole('checkbox'));
		expect(screen.getByRole('checkbox')).toBeChecked();
	});
});
