import React, {useState, useEffect} from 'react';
import './index.css'
import axios from 'axios'

export default function Tree() {
    return (
        <div className="tree">
            <div>root</div>
            <div className="indent-first-child">ant</div>
            <div className="indent-first-child">bear</div>
            <div className="indent-second-child">cat</div>
            <div className="indent-second-child">dog</div>
            <div className="indent-third-child">elephant</div>
            <div className="indent-first-child">frog</div>
        </div>
    );
}
