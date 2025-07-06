/// <reference types="@rsbuild/core/types" />

import type { MountType, UnmountType } from '.';

declare global {
  interface Window {
    __MICRO_APP_ENVIRONMENT__: boolean;
    mount: MountType;
    unmount: UnmountType;
  }
}
