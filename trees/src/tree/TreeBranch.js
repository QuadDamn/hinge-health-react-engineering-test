import React from 'react';
import './TreeBranch.css';

export default function TreeBranch({treeData, level}) {
    function hasChildren(branch) {
        return branch.children && branch.children.length;
    }

    function addPeriods(animalName) {
        const periodString = '.';
        const levelPeriods = periodString.repeat(level);
        return [animalName.slice(0, 1), levelPeriods, animalName.slice(1)].join('');
    }

    return (
        <ol>
            {treeData.map((branch, i) => {
                return <div key={`level-${level}-${i}`}>
                    <li className={(level !== 0) ? `indent-level-${level}-child` : ''}>
                        {(level !== 0) ? addPeriods(branch.name) : branch.name}
                        {hasChildren(branch) && <TreeBranch treeData={branch.children} level={level + 1}/>}
                    </li>
                </div>
            })}
        </ol>
    );
}