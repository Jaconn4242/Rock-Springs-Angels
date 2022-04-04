import React from 'react';
import {createRoot} from "react-dom/client"
import {ContextProvider} from "./ContextProvider"
import App from './App';
import { v4 as uuidv4 } from "uuid";
import './index.css';

const container = document.getElementById("root")

const root = createRoot(container)

root.render(<ContextProvider key={uuidv4()}><App /></ContextProvider>)


