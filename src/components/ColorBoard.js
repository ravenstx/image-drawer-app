import React, { useRef, useState, useEffect } from 'react';

const ColorBoard = (props) => {
  const colors = [
    '#ffffff',
    '#8e8e8e',
    '#4f4f4f',
    '#000000',
    '#88001b',
    '#ff0000',
    '#ff7c00',
    '#ffff00',
    '#fdeca6',
    '#c4ff0e',
    '#0ed145',
    '#8cfffb',
    '#00a8f3',
    '#b83dba',
    '#ffaec8',
    '#b97a56',
  ];
  const labelStyle = {
    backgroundColor: props.lineColor,
  };
  return (
    <>
      <div className="color-board">
        <div
          style={{ backgroundColor: `${colors[0]}` }}
          value={colors[0]}
          onClick={(e) => {
            props.setLineColor(colors[0]);
          }}
        ></div>
        <div
          style={{ backgroundColor: `${colors[1]}` }}
          value={colors[1]}
          onClick={(e) => {
            props.setLineColor(colors[1]);
          }}
        ></div>
        <div
          style={{ backgroundColor: `${colors[2]}` }}
          value={colors[2]}
          onClick={(e) => {
            props.setLineColor(colors[2]);
          }}
        ></div>
        <div
          style={{ backgroundColor: `${colors[3]}` }}
          value={colors[3]}
          onClick={(e) => {
            props.setLineColor(colors[3]);
          }}
        ></div>
        <div
          style={{ backgroundColor: `${colors[4]}` }}
          value={colors[4]}
          onClick={(e) => {
            props.setLineColor(colors[4]);
          }}
        ></div>
        <div
          style={{ backgroundColor: `${colors[5]}` }}
          value={colors[5]}
          onClick={(e) => {
            props.setLineColor(colors[5]);
          }}
        ></div>
        <div
          style={{ backgroundColor: `${colors[6]}` }}
          value={colors[6]}
          onClick={(e) => {
            props.setLineColor(colors[6]);
          }}
        ></div>
        <div
          style={{ backgroundColor: `${colors[7]}` }}
          value={colors[7]}
          onClick={(e) => {
            props.setLineColor(colors[7]);
          }}
        ></div>
        <div
          style={{ backgroundColor: `${colors[8]}` }}
          value={colors[8]}
          onClick={(e) => {
            props.setLineColor(colors[8]);
          }}
        ></div>
        <div
          style={{ backgroundColor: `${colors[9]}` }}
          value={colors[9]}
          onClick={(e) => {
            props.setLineColor(colors[9]);
          }}
        ></div>
        <div
          style={{ backgroundColor: `${colors[10]}` }}
          value={colors[10]}
          onClick={(e) => {
            props.setLineColor(colors[10]);
          }}
        ></div>
        <div
          style={{ backgroundColor: `${colors[11]}` }}
          value={colors[11]}
          onClick={(e) => {
            props.setLineColor(colors[11]);
          }}
        ></div>
        <div
          style={{ backgroundColor: `${colors[12]}` }}
          value={colors[12]}
          onClick={(e) => {
            props.setLineColor(colors[12]);
          }}
        ></div>
        <div
          style={{ backgroundColor: `${colors[13]}` }}
          value={colors[13]}
          onClick={(e) => {
            props.setLineColor(colors[13]);
          }}
        ></div>
        <div
          style={{ backgroundColor: `${colors[14]}` }}
          value={colors[14]}
          onClick={(e) => {
            props.setLineColor(colors[14]);
          }}
        ></div>
        <div
          style={{ backgroundColor: `${colors[15]}` }}
          value={colors[15]}
          onClick={(e) => {
            props.setLineColor(colors[15]);
          }}
        ></div>
      </div>
      <label className="color-picker-label" style={labelStyle}>
        <input
          className="color-picker"
          type="color"
          value={props.lineColor}
          onChange={(e) => {
            props.setLineColor(e.target.value);
          }}
        />
      </label>
    </>
  );
};

export default ColorBoard;
