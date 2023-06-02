import os

print(" -- directory setup --")
os.system("""
    mkdir --parents android/sdk android/build assets include lib/armeabi-v7a lib/arm64-v8a lib/x86 lib/x86_64 src
    cd android/build
    mkdir --parents obj dex res/values src/com/raylib/game assets
    mkdir --parents lib/armeabi-v7a lib/arm64-v8a lib/x86 lib/x86_64
    mkdir --parents res/drawable-ldpi res/drawable-mdpi res/drawable-hdpi res/drawable-xhdpi
    cd ../..
""")

print(" -- commandlinetools --")
os.system('curl --silent "https://dl.google.com/android/repository/commandlinetools-linux-9477386_latest.zip" > clt.zip')
os.system("unzip clt.zip -d android/sdk")

print(" -- clt sdkman --")
os.system("""
    cd android/sdk/cmdline-tools/bin
    ./sdkmanager --update --sdk_root=../..
    ./sdkmanager --install "build-tools;29.0.3" --sdk_root=../..
    ./sdkmanager --install "platform-tools" --sdk_root=../..
    ./sdkmanager --install "platforms;android-29" --sdk_root=../..

    yes | ./sdkmanager --licenses --sdk_root=../..
    cd ../../../..
""")

print(" -- android ndk--")
os.system('curl --silent "https://dl.google.com/android/repository/android-ndk-r25c-linux.zip" > ndk.zip')
os.system("unzip ndk.zip -d android/ && mv android/android-ndk-r25c android/ndk")

os.system('curl --silent "https://dl.google.com/android/repository/build-tools_r29.0.3-linux.zip" > bt.zip')
os.system("unzip bt.zip -d android/sdk/build-tools/ && mv android/sdk/build-tools/android-10 android/sdk/build-tools/29.0.3/")

print(" -- clone raylib --")
os.system("git clone https://github.com/raysan5/raylib --depth 1")

