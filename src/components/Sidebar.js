// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css';

export function Sidebar() {
    return (
      <div className="menu">
        <h2 className="logo">HackNetworks</h2>
        <a className="top-space" href="#">Dashboard</a>
        <a href="#">Home</a>
        <a href="#">Profile</a>
        <a href="#">MLH</a>
        <a href="#">Devpost</a>
        <a href="#">Settings</a>
      </div>
    );
  };;
