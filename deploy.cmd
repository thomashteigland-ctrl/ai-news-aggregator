@echo off
set PATH=C:\Users\krfk\node\node-v24.17.0-win-x64;%PATH%
cd /d "%~dp0"
call npm.cmd run build
if errorlevel 1 exit /b 1
call npx.cmd vercel %*
