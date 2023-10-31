# IPTV Playlist Provider

Simple Server providing a M3U playlist file to an IPTV renderer

## Prepare and run docker
Build

```
docker build -t iptv-server .
```

Run
```
docker run -dp 8111:8111 -v "$(pwd)/data":/data --name iptv iptv-server
```

Cleanup docker
```
docker stop iptv && docker rm iptv
```