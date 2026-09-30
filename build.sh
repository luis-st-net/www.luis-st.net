read -p "Version (x.x.x): " version

docker build -t "main-web:v$version" .
