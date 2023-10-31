# IPTV Playlist Provider

Simple NodeJS Server providing a M3U playlist file to an IPTV renderer like M3U IPTV for LG TVs

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
