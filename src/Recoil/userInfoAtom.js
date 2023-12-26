import {atom} from "recoil"
const userInfoAtom = atom({
    key: 'userInfoAtom', 
    default: false, // default value (aka initial value)
  });
export default userInfoAtom