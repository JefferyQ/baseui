/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
// BASEUI-GENERATED-FLAG-COMPONENT
// DO NOT EDIT THIS FILE DIRECTLY

import * as React from 'react';

export default function FlagLS(props: {width: string}) {
  return (
    <svg viewBox="0 0 21 15" width={props.width}>
      <defs>
        <linearGradient id="LSa" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="LSb" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#0C33B8" />
          <stop offset="100%" stopColor="#05279D" />
        </linearGradient>
        <linearGradient id="LSc" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#1DB158" />
          <stop offset="100%" stopColor="#149447" />
        </linearGradient>
        <linearGradient id="LSd" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#262626" />
          <stop offset="100%" stopColor="#0D0D0D" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#LSa)" d="M0 0h21v15H0z" />
        <path fill="url(#LSb)" d="M0 0h21v5H0z" />
        <path fill="url(#LSc)" d="M0 10h21v5H0z" />
        <path fill="url(#LSa)" d="M0 5h21v5H0z" />
        <path
          fill="url(#LSd)"
          d="M10 7.5l.342-1.025c.087-.263.228-.266.316 0L11 7.5l.861 1.291c.077.116.057.279-.055.356 0 0-.306.353-1.306.353s-1.306-.353-1.306-.353a.27.27 0 0 1-.055-.356L10 7.5z"
        />
        <path
          fill="#242424"
          fillRule="nonzero"
          d="M10.5 7.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 0c.276 0 .5-.724.5-1a.5.5 0 1 0-1 0c0 .276.224 1 .5 1z"
        />
      </g>
    </svg>
  );
}
