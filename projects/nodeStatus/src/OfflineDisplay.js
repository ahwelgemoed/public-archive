import React from 'react';
import { FaPlug } from 'react-icons/fa';
import './App.css';

export default function OfflineDisplay() {
  return (
    <div className="offline">
      {' '}
      <div className="Aligner">
        <div className="Aligner-item">
          <span className="pulse">
            <h2 className="redy">
              <FaPlug />
              Client Offline
            </h2>
          </span>
        </div>
      </div>
    </div>
  );
}
