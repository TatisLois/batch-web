import React from 'react';

export default function Header(props) {
  const { children } = props;
  return (
    <header id="header">
      { children }
    </header>
  );
}
