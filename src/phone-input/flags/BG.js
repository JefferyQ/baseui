/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
// BASEUI-GENERATED-FLAG-COMPONENT
// DO NOT EDIT THIS FILE DIRECTLY

import * as React from 'react';

export default function FlagBG(props: {width: string}) {
  return (
    <svg viewBox="0 0 21 15" width={props.width}>
      <defs>
        <linearGradient id="BGa" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="BGb" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#06A77C" />
          <stop offset="100%" stopColor="#00966E" />
        </linearGradient>
        <linearGradient id="BGc" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#E32E19" />
          <stop offset="100%" stopColor="#D62612" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#BGa)" d="M0 0h21v15H0z" />
        <path fill="url(#BGb)" d="M0 5h21v5H0z" />
        <path fill="url(#BGc)" d="M0 10h21v5H0z" />
        <path fill="url(#BGa)" d="M0 0h21v5H0z" />
      </g>
    </svg>
  );
}
