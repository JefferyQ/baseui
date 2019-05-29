/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
// BASEUI-GENERATED-FLAG-COMPONENT
// DO NOT EDIT THIS FILE DIRECTLY

import * as React from 'react';

export default function FlagSZ(props: {width: string}) {
  return (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 21 15"
      width={props.width}
    >
      <defs>
        <linearGradient id="SZa" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="SZb" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#486BCA" />
          <stop offset="100%" stopColor="#3E5FBA" />
        </linearGradient>
        <linearGradient id="SZc" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFDF20" />
          <stop offset="100%" stopColor="#FFDA00" />
        </linearGradient>
        <linearGradient id="SZd" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#CF1615" />
          <stop offset="100%" stopColor="#B20D0C" />
        </linearGradient>
        <ellipse id="SZe" cx="4.5" cy="2.5" rx="4.5" ry="2.5" />
        <linearGradient id="SZf" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#262626" />
          <stop offset="100%" stopColor="#0D0D0D" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#SZa)" d="M0 0h21v15H0z" />
        <path fill="url(#SZb)" d="M0 0h21v3H0zM0 12h21v3H0z" />
        <path fill="url(#SZc)" d="M0 3h21v9H0z" />
        <path fill="url(#SZd)" d="M0 4h21v7H0z" />
        <g transform="translate(6 5)">
          <mask id="SZg" fill="#fff">
            <use xlinkHref="#SZe" />
          </mask>
          <use fill="url(#SZa)" xlinkHref="#SZe" />
          <path
            fill="url(#SZf)"
            d="M0 0h5v5H1z"
            mask="url(#SZg)"
            transform="matrix(-1 0 0 1 5 0)"
          />
          <circle cx="5.5" cy="2.5" r="1" fill="#1A1A1A" mask="url(#SZg)" />
          <circle cx="3.5" cy="2.5" r="1" fill="#F6F6F6" mask="url(#SZg)" />
        </g>
      </g>
    </svg>
  );
}
