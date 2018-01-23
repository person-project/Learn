import Home from '../component/home/home.jsx';
import Search from '../component/search/search.jsx';
import App from '../component/app/app.jsx';
import Graph from '../component/graph/graph.jsx';
import File from '../component/file/file.jsx';
import Cooperation from '../component/cooperation/cooperation.jsx';

const routes = [{
  path: '/',
  exact: true,
  component: Home
}, {
  path: '/search',
  component: Search
}, {
  path: '/app',
  component: App
}, {
  path: '/graph',
  component: Graph
}, {
  path: '/file',
  component: File
}, {
  path: '/cooperation',
  component: Cooperation
}];

export default routes;
