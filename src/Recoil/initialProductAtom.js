import {atom} from "recoil"
const initialProductAtom = atom({
    key: 'initialProductAtom', 
    default: null, // default value (aka initial value)
  });
export default initialProductAtom