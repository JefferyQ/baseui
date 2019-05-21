/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
// BASEUI-GENERATED-FLAG-COMPONENT
// DO NOT EDIT THIS FILE DIRECTLY

import * as React from 'react';

export default function FlagIS(props: {width: string}) {
  return (
    <svg viewBox="0 0 21 15" width={props.width}>
      <defs>
        <linearGradient id="ISa" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="ISb" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#0E4CB5" />
          <stop offset="100%" stopColor="#063B95" />
        </linearGradient>
        <linearGradient id="ISc" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#EB363A" />
          <stop offset="100%" stopColor="#D52B2F" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#ISa)" d="M0 0h21v15H0z" />
        <path fill="url(#ISb)" d="M0 0h21v15H0z" />
        <path fill="url(#ISa)" d="M0 9h6v6h3V9h12V6H9V0H6v6H0z" />
        <path fill="url(#ISc)" d="M0 8h7v7h1V8h13V7H8V0H7v7H0z" />
      </g>
    </svg>
  );
}
