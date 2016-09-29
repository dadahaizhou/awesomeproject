@echo off
echo uninstall com.awesomeproject
adb uninstall com.awesomeproject
echo install app-debug.apk
adb install app-debug.apk

pause