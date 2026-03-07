@echo off
echo Starting Next.js initialization...
move README.md README.md.bak
npx -y create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm --no-git --yes
move README.md.bak README.md
echo Finished.
