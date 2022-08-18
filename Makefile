install:
	npm ci

lint:
	npx eslint .

test:
	NODE_OPTIONS=--experimental-vm-modules npx jest

test-coverage:
	NODE_OPTIONS=--experimental-vm-modules npx jest --coverage

publish:
	npm publish --dry-run

link:
	sudo npm link

# Rules for checking capacity for work
## STYLISH output
json-diff:
	gendiff __fixtures__/file1.json __fixtures__/file2.json

yml-yaml-diff:
	gendiff __fixtures__/file3.yml __fixtures__/file4.yaml

json-yml-diff-first:
	gendiff __fixtures__/file1.json __fixtures__/file4.yaml

json-yml-diff-second:
	gendiff __fixtures__/file3.yml __fixtures__/file2.json

## PLAIN output
json-diff-plain:
	gendiff --format plain __fixtures__/file1.json __fixtures__/file2.json

yml-yaml-diff-plain:
	gendiff --format plain __fixtures__/file3.yml __fixtures__/file4.yaml

json-yml-diff-first-plain:
	gendiff --format plain __fixtures__/file1.json __fixtures__/file4.yaml

json-yml-diff-second-plain:
	gendiff --format plain __fixtures__/file3.yml __fixtures__/file2.json

## JSON output
json-diff-jsonF:
	gendiff --format json __fixtures__/file1.json __fixtures__/file2.json

yml-yaml-diff-jsonF:
	gendiff --format json __fixtures__/file3.yml __fixtures__/file4.yaml

json-yml-diff-first-jsonF:
	gendiff --format json __fixtures__/file1.json __fixtures__/file4.yaml

json-yml-diff-second-jsonF:
	gendiff --format json __fixtures__/file3.yml __fixtures__/file2.json
