import {List} from "./List";
import { nanoid } from "nanoid";

export const Makesec = ({sec1, sec2}) => { 
    const heading1 = sec1.shift();
    const heading2 = sec2.shift();
    return <>
            <div>
                <h2>{heading1}</h2>
                <ul>
                    {sec1.map(el => {
                        let id1 = nanoid(7);
                      return <List key={id1} element={el}/>
                    })} 
                </ul>
            </div>
            <div>
                <h2>{heading2}</h2>
                <ul>
                    {sec2.map(el => {
                        let id2 = nanoid(7);
                       return <List key={id2} element={el}/>
                    })} 
                </ul>
            </div>
        </>
}