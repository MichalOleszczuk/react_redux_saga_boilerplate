import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './design/css/style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './redux/reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './redux/saga/index';
import {ConnectedRouter, routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import routes from './configuration/routes';
import {composeWithDevTools} from 'redux-devtools-extension';
import translate from 'counterpart';
import en from './configuration/lang/en.json';
import registerServiceWorker from './registerServiceWorker';

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

translate.registerTranslations('en', en);
translate.setLocale('en');

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            {routes}
        </ConnectedRouter>
    </Provider>,
    BootstrapedElement
);
registerServiceWorker();
