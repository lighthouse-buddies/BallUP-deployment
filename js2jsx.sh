#!/bin/bash

# Function to recursively rename files with .js extension to .jsx
rename_js_to_jsx() {
    for file in "$1"/*; do
        if [ -d "$file" ]; then
            rename_js_to_jsx "$file"   # Recursively call the function for subdirectories
        elif [[ "$file" == *.js ]]; then
            mv "$file" "${file%.js}.jsx"   # Rename the file by replacing the extension
            echo "Renamed: $file to ${file%.js}.jsx"
        fi
    done
}

# Check if the folder path is provided as an argument
if [ -z "$1" ]; then
    echo "Please provide the folder path as an argument."
    exit 1
fi

# Call the function with the provided folder path
rename_js_to_jsx "$1"

