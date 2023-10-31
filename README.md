
Build

```
docker build -t iptv-server
```

Run
```
docker run -dp 8111:8111 -v "$(pwd)/data":/data --name iptv iptv-server
```