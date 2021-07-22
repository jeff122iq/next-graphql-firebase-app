import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Auth from "../store/authStore"
import {observer} from "mobx-react-lite";

export default observer( function Private({children}) {
  const router = useRouter()
  useEffect(async () => {
    Auth.checkToken()
    if (Auth.isAuth === false) {
      await router.push("/sign-in")
    }
  }, [])
  return (
    <div>
      {children}
    </div>
  );
})