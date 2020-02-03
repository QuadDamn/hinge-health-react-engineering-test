import React, {useState, useEffect} from 'react';
import './index.css'
import axios from 'axios'

export default function Tree() {
    return (
        <div className="tree">
            <ol>
                <li>root
                    <ol>
                        <li className="indent-first-child">ant</li>
                        <li className="indent-first-child">bear
                            <ol>
                                <li className="indent-second-child">cat</li>
                                <li className="indent-second-child">dog

                                    <ol>
                                        <li className="indent-third-child">elephant</li>
                                    </ol>

                                </li>
                            </ol>
                        </li>
                        <li className="indent-first-child">frog</li>
                    </ol>
                </li>
            </ol>
        </div>
    );
}
