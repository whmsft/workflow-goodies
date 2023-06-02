import os
print("build raylib")
os.system("""
    cd raylib/src
    cp raylib.h ../../include
    make clean
    make PLATFORM=PLATFORM_ANDROID ANDROID_NDK=../../android/ndk ANDROID_ARCH=arm ANDROID_API_VERSION=29
    mv libraylib.a ../../lib/armeabi-v7a
    make clean
    make PLATFORM=PLATFORM_ANDROID ANDROID_NDK=../../android/ndk ANDROID_ARCH=arm64 ANDROID_API_VERSION=29
    mv libraylib.a ../../lib/arm64-v8a
    make clean
    make PLATFORM=PLATFORM_ANDROID ANDROID_NDK=../../android/ndk ANDROID_ARCH=x86 ANDROID_API_VERSION=29
    mv libraylib.a ../../lib/x86
    make clean
    make PLATFORM=PLATFORM_ANDROID ANDROID_NDK=../../android/ndk ANDROID_ARCH=x86_64 ANDROID_API_VERSION=29
    mv libraylib.a ../../lib/x86_64
    make clean
    cd ../..
""")

print("setup project")
os.system("""
    cp raylib/logo/raylib_36x36.png assets/icon_ldpi.png
    cp raylib/logo/raylib_48x48.png assets/icon_mdpi.png
    cp raylib/logo/raylib_72x72.png assets/icon_hdpi.png
    cp raylib/logo/raylib_96x96.png assets/icon_xhdpi.png
""")

print("make keystore")
os.system("""
    cd android
    keytool -genkeypair -validity 1000 -dname "CN=raylib,O=Android,C=ES" -keystore raylib.keystore -storepass 'raylib' -keypass 'raylib' -alias projectKey -keyalg RSA
    cd ..
""")

os.system("mkdir android/build/src/com/raylib/game/")
open("android/build/src/com/raylib/game/NativeLoader.java", "w+").write("""
package com.raylib.game;
public class NativeLoader extends android.app.NativeActivity {
    static {
        System.loadLibrary("main");
    }
}
""")

open("android/build/AndroidManifest.xml", "w+").write("""
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
        package="com.raylib.game"
        android:versionCode="1" android:versionName="1.0" >
    <uses-sdk android:minSdkVersion="23" android:targetSdkVersion="29"/>
    <uses-feature android:glEsVersion="0x00020000" android:required="true"/>
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
    <application android:allowBackup="false" android:label="Game" android:icon="@drawable/icon">
        <activity android:name="com.raylib.game.NativeLoader"
            android:theme="@android:style/Theme.NoTitleBar.Fullscreen"
            android:configChanges="orientation|keyboardHidden|screenSize"
            android:screenOrientation="landscape" android:launchMode="singleTask"
            android:clearTaskOnLaunch="true">
            <meta-data android:name="android.app.lib_name" android:value="main"/>
            <intent-filter>
                <action android:name="android.intent.action.MAIN"/>
                <category android:name="android.intent.category.LAUNCHER"/>
            </intent-filter>
        </activity>
    </application> 
</manifest>
""")


