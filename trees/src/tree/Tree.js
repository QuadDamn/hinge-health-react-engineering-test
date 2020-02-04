import React, {useState, useEffect} from 'react';
import './Tree.css';
import data from './data.json';
import TreeBranch from "./TreeBranch";

export default function Tree() {
    const [treeData, setTreeData] = useState(data);

    return (
        <div className="tree">
            <TreeBranch treeData={treeData} level={0}/>
        </div>
    );
}
