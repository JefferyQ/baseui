/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
// BASEUI-GENERATED-FLAG-COMPONENT
// DO NOT EDIT THIS FILE DIRECTLY

import * as React from 'react';

export default function FlagMV(props: {width: string}) {
  return (
    <svg viewBox="0 0 21 15" width={props.width}>
      <defs>
        <linearGradient id="MVa" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="MVb" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#F32249" />
          <stop offset="100%" stopColor="#D01739" />
        </linearGradient>
        <linearGradient id="MVc" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#15A04F" />
          <stop offset="100%" stopColor="#0F7E3D" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#MVa)" d="M0 0h21v15H0z" />
        <path fill="url(#MVb)" d="M0 0h21v15H0z" />
        <rect width="15" height="9" x="3" y="3" fill="url(#MVc)" rx=".5" />
        <path
          fill="url(#MVa)"
          d="M12.25 4.08a3.5 3.5 0 1 0 0 6.839 3.501 3.501 0 0 1 0-6.838z"
        />
      </g>
    </svg>
  );
}
