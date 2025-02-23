// App.js
import './App.css';
import Child from './Child';
import React from 'react';
import ChildProps from './ChildProps';
import Functional from './Functional';
import Input from './Input';
import ListRendering from './ListRendering';
import ConditionalRendering from './ConditionalRendering';
import LifeCycle from './LifeCycle';
import ComponentA from './ComponentA';
import UseEffectHook from './UseEffectHook';
import GrandChild from './component/child/grand_child/GrandChild';
import {MainComponent } from './component/MainComponent';
import { AgetContext, NameContext } from './NameContext';
import ReducerHook from './ReducerHook';
import Styling from './Styling';

function App() {
    return (
        <>
        <Styling/>
        </>
    )
}

export default App;