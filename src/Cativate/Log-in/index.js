import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./Todo/TodoItem";
import TodoList from "./Todo/TodoList"
import ReduxExamples from "./ReduxExamples/components";
const Labs = () => {
    return(
        <div>
            <h1>Tuiter</h1>
            <h2>Home Screen</h2>
            <Link to="/tuiter">
                Tuiter Home
            </Link>
            <h2>Explore Screen</h2>
            <Link to="/tuiter/explore">
                Tuiter Explore Screen
            </Link>
        </div>
    )
};
export default Labs;