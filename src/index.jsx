import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './redux/reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './redux/saga';
import {ConnectedRouter, routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import routes from './configuration/routes';
import {composeWithDevTools} from 'redux-devtools-extension';

const ELEMENT_TO_BOOTSTRAP = 'root';
const BootstrapedElement = document.getElementById(ELEMENT_TO_BOOTSTRAP);
const sagaMiddleware = createSagaMiddleware();
const history = createHistory();

const middlewares = [sagaMiddleware, routerMiddleware(history)];

export const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(...middlewares)
    )
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            {routes}
        </ConnectedRouter>
    </Provider>,
    BootstrapedElement
);
