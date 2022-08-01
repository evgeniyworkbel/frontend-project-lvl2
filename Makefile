install:
	npm ci

publish:
	npm publish --dry-run

link:
	sudo npm link

lint:
	npx eslint .

test:
	NODE_OPTIONS=--experimental-vm-modules npx jest

test-coverage:
	NODE_OPTIONS=--experimental-vm-modules npx jest --coverage

json-diff:
	gendiff __fixtures__/file1.json __fixtures__/file2.json

yml-yaml-diff:
	gendiff __fixtures__/file3.yml __fixtures__/file4.yaml

json-yml-diff-first:
	gendiff __fixtures__/file1.json __fixtures__/file4.yaml

json-yml-diff-second:
	gendiff __fixtures__/file2.json __fixtures__/file3.yml
