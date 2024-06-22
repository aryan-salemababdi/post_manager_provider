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

export const PostContext = createContext<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  postState: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dispatch: Dispatch<any>;
  query: ReturnType<typeof useQuery>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
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

export default PostProvider;