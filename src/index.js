import App from './app.js'

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

const renderApp = component => {
    const element = component()
    document.body.appendChild(element);
}

renderApp(App)

if (module.hot) {
    module.hot.accept('./app.js', () => renderApp(App))
}