import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function C3() {

      const data = useSelector((state) => state);
    
      return (
        <div>
          <h1>Third Component</h1>
          <p>{data}</p>
        </div>




  );
}