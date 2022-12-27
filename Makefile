SHELL=sh

docker_build:
	docker build -f Dockerfile --tag nest .

docker_run:
	docker run nest
	
pretty:
	yarn prettier --write "./**/*.{ts,tsx,css,scss,mdx}"

vitest:
	yarn vitest
