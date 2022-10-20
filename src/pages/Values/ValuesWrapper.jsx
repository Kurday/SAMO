import { ErrorBoundary } from 'react-error-boundary';

import Principles from './Principles';
import Remember from './Remember';
import Schedule from './Schedule';
import Values from './Values';
import './values.scss';
import Algorithms from './Algorithms';
import { MainHeader } from 'app/Layout';

const ValueWrapper = () => {
    return (
        <div className="main">
            <div className="main-content-values">
                <ErrorBoundary
                    fallbackRender={({ error, resetErrorBoundary }) => {
                        return (
                            <div>
                                <div>Error</div>
                                <div>
                                    <pre>{error.message}</pre>
                                </div>
                                <button type="button" onClick={resetErrorBoundary}>
                                    Reset
                                </button>
                            </div>
                        );
                    }}
                >
                    <MainHeader title="Мои ценности" />
                    <Values />
                    <Principles />
                    <Remember />
                    <Schedule />
                    <Algorithms />
                </ErrorBoundary>
            </div>
        </div>
    );
};
export default ValueWrapper;
