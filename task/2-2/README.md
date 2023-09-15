## 操作方法
Dockerを入れている前提且つ、Sudo環境を前提にしています。
./nginx/conf の中に mysite_nginx.conf を作って以下を記入してください
```conf
server {
    listen 80;
    server_name 127.0.0.1;
    charset utf-8;
    root /var/www/html;

    client_max_body_size 75M;
}
```
srcの中をルートパスとして授業データを入れてください。
Make コマンドからDocker-composeを実行、停止が可能です
make nignxStart #<- 開始
make nginxStop  #<- 停止