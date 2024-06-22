import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useEffect,
  useReducer,
  useState,
} from "react";
import { PostReducer } from '../../reducers/post/index';
import { InitialPostState } from "../../helper/constant";
import useQuery from "../../hooks/useQuery";


type ProviderProps = {
  children: ReactNode;
};

const PostContext = createContext<{
  postState: PostState;
  dispatch: Dispatch<PostAction>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  query: ReturnType<typeof useQuery>;
} | null>(null);

const PostProvider: FC<ProviderProps> = ({ children }) => {
  const [postState, dispatch] = useReducer(PostReducer, InitialPostState);
  const [search, setSearch] = useState<string>("");
  const [queryUrl, setQueryUrl] = useState<string>("post");
  const query = useQuery<Post[]>(queryUrl);

  useEffect(() => {
    if (search.length) setQueryUrl(`post?search=${search}`);
    else setQueryUrl("post");
  }, [search]);

  useEffect(() => {
    query.refetch();

  }, [queryUrl]);

  const value = { postState, dispatch, query, search, setSearch };

  return (
    <div>
      <PostContext.Provider value={value}>
        {children}
      </PostContext.Provider>
    </div>
  );
};

export { PostContext, PostProvider };