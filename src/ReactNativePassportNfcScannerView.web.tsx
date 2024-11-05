import * as React from 'react';

import { ReactNativePassportNfcScannerViewProps } from './ReactNativePassportNfcScanner.types';

export default function ReactNativePassportNfcScannerView(props: ReactNativePassportNfcScannerViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
