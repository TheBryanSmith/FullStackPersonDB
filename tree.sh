#!/bin/bash

# Define the output file name
OUTPUT_FILE="project_structure.txt"

# Use the tree command to output the project structure to the file
# Excluding the specified directories and files
tree -a -I ".idea|.mvn|javadocs|objects|External Libraries" > "$OUTPUT_FILE"

# Check if the output file is created and is not empty
if [ -s "$OUTPUT_FILE" ]; then
    echo -e "\033[38;5;205mProject structure exported to 
${OUTPUT_FILE}!\033[0m"
else
    echo -e "\033[38;5;205mThe project structure output is empty. Please 
check the directory structure.\033[0m"
fi
