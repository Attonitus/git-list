
import Layout from './Components/layout';
import Profile from './Components/profile';
import Filters from './Components/filters';
import RepoList from './Components/repoList';
import Search from './Components/search';


function App() {
  return (
    //Layout para poder hacer el grid a los elementos dentro de este
    <Layout>
      <Profile/>
      <Filters/>
      <RepoList/>
      <Search/>
    </Layout>
  )
}

export default App;
