import { Capacitor } from '@capacitor/core';

/** Configure native shell (status bar, etc.) when running inside Capacitor. */
export async function initNativeApp(): Promise<void> {
  if (!Capacitor.isNativePlatform()) return;

  document.documentElement.classList.add('native-app');

  try {
    const { StatusBar, Style } = await import('@capacitor/status-bar');
    await StatusBar.setStyle({ style: Style.Dark });
    await StatusBar.setBackgroundColor({ color: '#1E3D20' });
  } catch {
    /* Status bar plugin optional during web dev */
  }

  try {
    const { SplashScreen } = await import('@capacitor/splash-screen');
    await SplashScreen.hide();
  } catch {
    /* Splash hidden by default on web */
  }
}

export function isNativeApp(): boolean {
  return Capacitor.isNativePlatform();
}
