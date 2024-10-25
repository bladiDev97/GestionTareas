#!/bin/bash
cp .env.template apps/api/.env
cp .env.template apps/tasks/.env
cp .env.template apps/users/.env

npm i