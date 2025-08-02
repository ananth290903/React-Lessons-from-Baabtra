import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function C2() {

  const data = useSelector((state) => state);

  return (
    <div>
      <h1>Second Component</h1>
      <p>{data}</p>
    </div>
  );
}