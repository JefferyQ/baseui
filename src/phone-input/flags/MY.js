/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
// BASEUI-GENERATED-FLAG-COMPONENT
// DO NOT EDIT THIS FILE DIRECTLY

import * as React from 'react';

export default function FlagMY(props: {width: string}) {
  return (
    <svg viewBox="0 0 21 15" width={props.width}>
      <defs>
        <linearGradient id="MYa" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="MYb" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#E1244A" />
          <stop offset="100%" stopColor="#BE1134" />
        </linearGradient>
        <linearGradient id="MYc" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#0C3F8E" />
          <stop offset="100%" stopColor="#032A67" />
        </linearGradient>
        <linearGradient id="MYd" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFD34F" />
          <stop offset="100%" stopColor="#FFCB2F" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#MYa)" d="M0 0h21v15H0z" />
        <path
          fill="url(#MYb)"
          d="M10 0h11v1H10V0zm0 2h11v1H10V2zm0 2h11v1H10V4zm0 2h11v1H10V6zM0 8h21v1H0V8zm0 2h21v1H0v-1zm0 2h21v1H0v-1zm0 2h21v1H0v-1z"
        />
        <path fill="url(#MYc)" d="M0 0h12v8H0z" />
        <path
          fill="url(#MYd)"
          d="M6.874 1.657a2.5 2.5 0 1 0 0 4.686 3 3 0 1 1 0-4.686zM8 4.82l-.868.982.227-1.29-1.309-.067 1.15-.627-.764-1.065 1.208.508L8 2l.356 1.261 1.208-.508-.765 1.065 1.15.627-1.308.066.227 1.29L8 4.82z"
        />
      </g>
    </svg>
  );
}
