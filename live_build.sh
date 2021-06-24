#!/usr/bin/env bash

function ctrl_c_exit()
{
    echo "CTRL+C pressed. Exiting live build..."
}

function main()
{
    if ! command -v inotifywait &> /dev/null
    then
        echo "inotifywait could not be found. Please install via your package manager in order to be able to perform live builds."
        exit
    else
        echo "Starting live build."
        SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
        FILES_TO_WATCH=(
            "${SCRIPT_DIR}"/robots.txt
            "${SCRIPT_DIR}"/credits.txt
            "${SCRIPT_DIR}"/html/*
            "${SCRIPT_DIR}"/scss/*
            "${SCRIPT_DIR}"/js/*
            "${SCRIPT_DIR}"/media/*
            "${SCRIPT_DIR}"/fonts/*
        )
        inotifywait -q -m -e close_write "${FILES_TO_WATCH[@]}" |
        while read -r FILENAME EVENT; do
            echo "${FILENAME} modified - rebuilding."
            "${SCRIPT_DIR}"/build.sh
            echo "Build done."
        done
    fi
}

main
