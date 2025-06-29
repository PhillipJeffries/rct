import {useState} from "react";
import * as classes from './counter.module.scss'

export const Counter = () => {
    const [count, setCount] = useState(0)
    return (
            <h3 className={classes.tempClass} onClick={()=>setCount(count+1)}>{count}</h3>
    )
}