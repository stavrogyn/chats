SHELL=sh

docker_build:
	docker build -f Dockerfile --tag nest .

docker_run:
	docker run -dp 80:80 -p 443:443 -v /Users/stavrogin/github/chats:/www/ nest

compose:
	docker compose up --build 

pretty:
	yarn prettier --write "./**/*.{ts,tsx,css,scss,mdx}"

vitest:
	yarn vitest
