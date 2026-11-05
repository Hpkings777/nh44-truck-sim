@echo off
setlocal
cd /d "%~dp0"
echo ============================================
echo  GRAND TRUNK NH-44 TRUCK SIMULATOR
echo ============================================
echo server.py will reuse the saved Python environment and only install changed dependencies.
python server.py %*
if errorlevel 1 (
  echo.
  echo Simulator stopped with an error. See the message above.
  pause
)
endlocal
