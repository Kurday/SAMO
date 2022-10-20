import './setup';

import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import 'rc-slider/assets/index.css';

import { queryClient } from './service';
import App from './app';

import 'react-circular-progressbar/dist/styles.css';
import 'assets/project-styles/index.css';
import 'assets/project-styles/main.css';
import 'assets/project-styles/modal.scss';

ReactDOM.render(
    <Router>
        <QueryClientProvider client={queryClient}>
            <App />
            <ReactQueryDevtools />
        </QueryClientProvider>
    </Router>,
    document.getElementById('root'),
);
