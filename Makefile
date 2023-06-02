.PHONY: test-install install test test-docker docs clean prettier

test-install:
	npm install --only=dev

install:
	@node --version || (echo "Node is not installed, please install Node >= 14"; exit 1);
	rm -f package-lock.json
	npm install

test:
	npm test

test-docker:
	docker build -t kandy/kandy-node .
	docker run kandy/kandy-node npm run ci

docs:
	npm run typedoc

clean:
	rm -rf node_modules lib

prettier:
	npm run prettier

API_DEFINITIONS_SHA=$(shell git log --oneline | grep Regenerated | head -n1 | cut -d ' ' -f 5)
CURRENT_TAG=$(shell expr "${GITHUB_TAG}" : ".*-rc.*" >/dev/null && echo "rc" || echo "latest")
docker-build:
	docker build -t kandy/kandy-node .
	docker tag kandy/kandy-node kandy/kandy-node:${GITHUB_TAG}
	docker tag kandy/kandy-node kandy/kandy-node:apidefs-${API_DEFINITIONS_SHA}
	docker tag kandy/kandy-node kandy/kandy-node:${CURRENT_TAG}

docker-push:
	docker push kandy/kandy-node:${GITHUB_TAG}
	docker push kandy/kandy-node:apidefs-${API_DEFINITIONS_SHA}
	docker push kandy/kandy-node:${CURRENT_TAG}
