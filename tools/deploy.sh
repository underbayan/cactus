
#!/bin/bash
cd /usr/local/services/cactus-1.0/
mkdir -p /data/release/node_modules/cactus
rsync -ac --delete . /data/release/node_modules/cactus
curl 127.0.0.1:12701/reload
