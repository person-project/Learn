import {Home, DataModel, AnalyzeModel, OfflineModel, ScoreModel, AccountManagement} from '../components/main';

export default [{
  path: '/',
  exact: true,
  component: Home
},{
  path: '/datamodel',
  component: DataModel
}, {
  path: '/analyzemodel',
  component: AnalyzeModel
}, {
  path: '/offlinemodel',
  component: OfflineModel
}, {
  path: '/scoremodel',
  component: ScoreModel
}, {
  path: '/accountmanagment',
  component: AccountManagement
}]
