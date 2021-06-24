#!/usr/bin/env bash

function main()
{
    # Lovingly stolen from https://stackoverflow.com/a/246128
    SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"

    rm -rf "${SCRIPT_DIR}"/public
    mkdir "${SCRIPT_DIR}"/public

    cp "${SCRIPT_DIR}"/robots.txt "${SCRIPT_DIR}"/public
    cp "${SCRIPT_DIR}"/credits.txt "${SCRIPT_DIR}"/public
    cp -r "${SCRIPT_DIR}"/html/* "${SCRIPT_DIR}"/public

    sass --no-source-map "${SCRIPT_DIR}/scss/style.scss" "${SCRIPT_DIR}/public/css/style.css"

    cp -r "${SCRIPT_DIR}"/js "${SCRIPT_DIR}"/public

    cp -r "${SCRIPT_DIR}"/media/ "${SCRIPT_DIR}"/public
    cp -r "${SCRIPT_DIR}"/fonts/ "${SCRIPT_DIR}"/public
}

main
