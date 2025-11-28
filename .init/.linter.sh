#!/bin/bash
cd /home/kavia/workspace/code-generation/recipe-explorer-47437-47446/slidev_frontend
npm run lint
ESLINT_EXIT_CODE=$?
if [ $ESLINT_EXIT_CODE -ne 0 ]; then
  exit 1
fi

