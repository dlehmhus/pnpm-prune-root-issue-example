import React from 'react';

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
