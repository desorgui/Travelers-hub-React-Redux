import React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../redux/configureStore';
import Missions from '../components/Missions';

function renderWithProviders(
    ui,
    {
      preloadedState = {},
      // Automatically create a store instance if no store was passed in
      storetest = store,
      ...renderOptions
    } = {}
  ) {
    function Wrapper({ children }) {
      return <Provider store={storetest}>{children}</Provider>
    }
    return { storetest, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
  }

test('Data should be displayed in document on render', async () => {
  renderWithProviders(<Missions />)

    expect(screen.getByText('Status')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
});