import reactDom from "react-dom"
// import App from "./App"
import store from "./redux/store"
import { Provider } from "react-redux"
import { renderRoutes  } from 'react-router-config';
import { BrowserRouter } from "react-router-dom"
import routes from './routes'
import "antd/dist/antd.css"
import "./assets/css/base.scss"

reactDom.render(
  <BrowserRouter>
  <Provider store={store}>
      {/* <App /> */}
      {renderRoutes(routes)}
  </Provider>
  </BrowserRouter>,
  document.getElementById("root")
)
