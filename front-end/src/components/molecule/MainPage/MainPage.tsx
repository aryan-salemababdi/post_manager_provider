import Main from "../../Atom/Main/Main";
import PostProvider from '../../../context/post';

const MainPage = () => {
  return (
    <PostProvider>
      <Main />
    </PostProvider>
  )
}

export default MainPage;