#!/usr/bin/env bash

set -euo pipefail
IFS=$'\n\t'

function main()
{
    # Lovingly stolen from https://stackoverflow.com/a/246128
    SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"

    rm -rf "${SCRIPT_DIR}"/public
    mkdir "${SCRIPT_DIR}"/public
    mkdir "${SCRIPT_DIR}"/public/css
    mkdir "${SCRIPT_DIR}"/public/js
    
    cp "${SCRIPT_DIR}"/robots.txt "${SCRIPT_DIR}"/public

    cp -r "${SCRIPT_DIR}"/html/* "${SCRIPT_DIR}"/public

    yarn run cleancss -O2 "${SCRIPT_DIR}/css/style.css" > "${SCRIPT_DIR}/public/css/style.css"

    yarn run uglifyjs "${SCRIPT_DIR}/js/main.js" --compress --mangle --comments '/^!/' -o "${SCRIPT_DIR}/public/js/main.js"

    cp -r "${SCRIPT_DIR}"/media "${SCRIPT_DIR}"/public
    cp -r "${SCRIPT_DIR}"/fonts "${SCRIPT_DIR}"/public

    cp -r "${SCRIPT_DIR}"/papers "${SCRIPT_DIR}"/public
}

main
