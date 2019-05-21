/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
// BASEUI-GENERATED-FLAG-COMPONENT
// DO NOT EDIT THIS FILE DIRECTLY

import * as React from 'react';

export default function FlagGL(props: {width: string}) {
  return (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 21 15"
      width={props.width}
    >
      <defs>
        <linearGradient id="GLa" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <path id="GLc" d="M0 0h21v8H0z" />
        <filter
          id="GLb"
          width="107.1%"
          height="118.8%"
          x="-3.6%"
          y="-9.4%"
          filterUnits="objectBoundingBox"
        >
          <feMorphology
            in="SourceAlpha"
            operator="dilate"
            radius=".25"
            result="shadowSpreadOuter1"
          />
          <feOffset in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
          <feColorMatrix
            in="shadowOffsetOuter1"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
          />
        </filter>
        <linearGradient id="GLd" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#E82245" />
          <stop offset="100%" stopColor="#CC1838" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#GLa)" d="M0 0h21v15H0z" />
        <use fill="#000" filter="url(#GLb)" xlinkHref="#GLc" />
        <use fill="url(#GLa)" xlinkHref="#GLc" />
        <path fill="url(#GLd)" d="M3 8H0v7h21V8H11a4 4 0 1 0-8 0z" />
        <path fill="url(#GLa)" d="M3 8a4 4 0 1 0 8 0H3z" />
      </g>
    </svg>
  );
}
