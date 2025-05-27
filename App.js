// import logo from './logo.svg';
// import './App.css';
// import Header from './Header';
// import Footer from './Footer'
// import {blog} from '../src/Data/blog.jsx'
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faWhatsapp} from '@fortawesome/free-brands-svg-icons'
// import {faPhone} from '@fortawesome/free-solid-svg-icons'
import './index.css'
// import {UsersList} from './UserList.jsx'
// import CitySearch from './CitySearch.jsx';
// import {CityTask}  from './CityTask.jsx';
// import {ProblemSolving} from './ProblemSolving.jsx'
// import DynamicForm from './DynamicForm.jsx'
// import {SearchFilter} from './SearchFilter.jsx'
// import TernaryPractice from './TernaryPractice.jsx';
// import ResponsiveMenu from './ResponsiveMenu.jsx'
// import LoginModal from './LoginModal.jsx';
// import Faq from './Faq.jsx';
import FaqWithProps from './FaqWithProps.jsx'

function App() {
  return (
    <div className="App">
       {/* <Header/> */}
      {/* <h1 className="text-3xl font-bold text-blue-600">Hello Tailwind!</h1>
      <div><FontAwesomeIcon icon={faWhatsapp} > </FontAwesomeIcon>
      </div>
      <FontAwesomeIcon icon={faPhone}> </FontAwesomeIcon>

      {blog.map((v,i)=>{
        return (
          <ProductItems pitems={v} key={i}/>
        )
      })} */}
      {/* <Footer/>  */}
      {/* <UsersList/> */}
       {/* <CitySearch/> */}
      {/* <CityTask/> */} 
      {/* <ProblemSolving/> */}
      {/* <DynamicForm/> */}
      {/* <SearchFilter/> */}
      {/* <TernaryPractice/> */}
      {/* <ResponsiveMenu/> */}
      {/* <LoginModal/> */}
      {/* <Faq/> */}
      <FaqWithProps/>
    </div>
  );
}
export default App;


function ProductItems({pitems}) {
  return (
    <div className="p-6 space-y-6">
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold">{pitems.title}</h1>
      </div>

      <div className="bg-yellow-100 p-6 rounded-lg shadow-sm">
        <h1 className="text-lg font-medium text-gray-800">
          {pitems.body}
        </h1>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition">
          Go Somewhere
        </button>
      </div>
      <div>_____________________________________________________________________________________________________________________________________________________</div>
    </div>
    
  );
}

