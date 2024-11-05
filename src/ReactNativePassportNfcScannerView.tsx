import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ReactNativePassportNfcScannerViewProps } from './ReactNativePassportNfcScanner.types';

const NativeView: React.ComponentType<ReactNativePassportNfcScannerViewProps> =
  requireNativeViewManager('ReactNativePassportNfcScanner');

export default function ReactNativePassportNfcScannerView(props: ReactNativePassportNfcScannerViewProps) {
  return <NativeView {...props} />;
}
