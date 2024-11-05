import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ReactNativePassportNfcScanner.web.ts
// and on native platforms to ReactNativePassportNfcScanner.ts
import ReactNativePassportNfcScannerModule from './ReactNativePassportNfcScannerModule';
import ReactNativePassportNfcScannerView from './ReactNativePassportNfcScannerView';
import { ChangeEventPayload, ReactNativePassportNfcScannerViewProps } from './ReactNativePassportNfcScanner.types';

// Get the native constant value.
export const PI = ReactNativePassportNfcScannerModule.PI;

export function hello(): string {
  return ReactNativePassportNfcScannerModule.hello();
}

export async function setValueAsync(value: string) {
  return await ReactNativePassportNfcScannerModule.setValueAsync(value);
}

const emitter = new EventEmitter(ReactNativePassportNfcScannerModule ?? NativeModulesProxy.ReactNativePassportNfcScanner);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ReactNativePassportNfcScannerView, ReactNativePassportNfcScannerViewProps, ChangeEventPayload };
