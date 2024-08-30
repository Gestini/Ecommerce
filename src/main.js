import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '@/App';
import { NextUIProvider } from '@nextui-org/react';
import store from '@/store/';
import './styles/main.scss';
import './styles/theme.scss';
import './styles/webkit.scss';
import { Provider } from 'react-redux';
createRoot(document.getElementById('root')).render(_jsx(StrictMode, { children: _jsx(NextUIProvider, { children: _jsx(Provider, { store: store, children: _jsx(BrowserRouter, { children: _jsx(App, {}) }) }) }) }));
