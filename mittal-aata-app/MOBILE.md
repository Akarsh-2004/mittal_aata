# Mittal Store — Mobile App (Android & iOS)

This project uses **[Capacitor](https://capacitorjs.com/)** to wrap the same React/Vite web app as a native Android and iOS app. One codebase powers the website, Netlify deploy, and app stores.

## What you get

- Same UI as the website (cart, chakki, checkout, Hindi/English)
- Bottom navigation on phones
- Safe-area support for notched devices
- Native status bar styling (green brand color)

## Prerequisites

### Android
- [Android Studio](https://developer.android.com/studio) (latest)
- JDK 17+
- Android SDK

### iOS (Mac only)
- [Xcode](https://developer.apple.com/xcode/) 15+
- Apple Developer account (for TestFlight / App Store)

### All platforms
- Node.js 20+
- npm

## Build the web app & sync to native

From the `mittal-aata-app` folder:

```bash
npm install
npm run cap:sync
```

This runs `npm run build`, copies `dist/` into the native projects, and updates plugins.

## Android

```bash
npm run cap:android
```

This opens Android Studio. Then:

1. Wait for Gradle sync to finish
2. Choose a device/emulator
3. Click **Run** (green play button)

Or from terminal:

```bash
cd android
./gradlew assembleDebug
```

APK output: `android/app/build/outputs/apk/debug/`

### Play Store release
1. Build signed release APK/AAB in Android Studio (**Build → Generate Signed Bundle**)
2. Upload to [Google Play Console](https://play.google.com/console)

## iOS (Mac required)

```bash
npm run cap:ios
```

This opens Xcode. Then:

1. Select your Team under **Signing & Capabilities**
2. Choose a simulator or connected iPhone
3. Click **Run**

### App Store release
1. Archive in Xcode (**Product → Archive**)
2. Upload via **Organizer → Distribute App**

## Day-to-day workflow

After any web code change:

```bash
npm run cap:sync
```

Then re-run from Android Studio or Xcode.

## App identity

| Setting | Value |
|---------|--------|
| App ID | `com.mittal.provisionstore` |
| App name | Mittal Store |
| Config | `capacitor.config.ts` |

Change `appId` / `appName` in `capacitor.config.ts` before store submission.

## Icons & splash screen

Replace default Capacitor assets:

- **Android:** `android/app/src/main/res/` (mipmap icons)
- **iOS:** `ios/App/App/Assets.xcassets`
- Use your `public/images/logo.png` as the source (1024×1024 for store icon)

Optional: add [@capacitor/assets](https://github.com/ionic-team/capacitor-assets) to generate all sizes from one image.

## Website vs native

| | Website (Netlify) | Native app |
|--|-------------------|------------|
| URL | `darling-cranachan-6fdb8c.netlify.app` | Installed app |
| Updates | Instant on deploy | Rebuild + store update |
| Payments | Web checkout (placeholder) | Same — plug Razorpay when ready |

## Troubleshooting

**White screen on app launch**  
Run `npm run cap:sync` again after `npm run build`.

**Routing broken in native**  
Ensure `vite.config.ts` has `base: './'`.

**Android Gradle errors**  
Open Android Studio → **File → Sync Project with Gradle Files**.

**iOS signing errors**  
Set a valid Team in Xcode Signing settings.

## Alternative: fully native rebuild

If you later need platform-specific features (push notifications, UPI deep links, offline mode), Capacitor plugins can be added without rewriting the UI. A full React Native rewrite is only needed for heavy native custom UI — not required for this store app.
