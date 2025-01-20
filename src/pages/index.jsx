import { Provider } from 'react-redux';
import { Planner } from '../features/planner/Planner';
import store from '../app/store';

export default function Home() {
  return (
    <Provider store={store}>
        <Planner />
    </Provider>

  );
}

