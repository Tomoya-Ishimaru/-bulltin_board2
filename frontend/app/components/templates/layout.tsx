import { ReactElement, useEffect, useState } from 'react'
import Header from '../organisms/layout/Header'
import { useDispatch } from "react-redux";
import { setUser } from "../../hooks/stores/modules/useLoginUserProvider"

type LayoutProps = Required<{
  readonly children: ReactElement
}>
export default function Layout({ children }: LayoutProps) {
  console.log("layout");
  const dispatch = useDispatch();
  // const userName = useSelector<any>(state => state.user);
  const [userInfo, setUserInfo] = useState([] as any);
  useEffect(() => {
    const getUserInfo = async () => {
      if (localStorage.getItem("userName")) {
        let localUserName = localStorage.getItem("userName");
        let localhobby = localStorage.getItem("hobby");
        let localWords = localStorage.getItem("words");
        const user = {
          name: localUserName,
          hobby: localhobby,
          words: localWords
        }
        dispatch(setUser(user));
        console.log("useEffect-layout");
      }
    }
    getUserInfo();
  }, [])
  return (
    <>
      <Header />
      {children}
    </>
  )
} 
