# Simple balanced password generator

Balanced passwords are passwords that switch between left and right hand
characters, allowing for maximum typing speed.

This tool generates balanced passwords for you based on criteria you provide.

Features:
- Alternates between left and right hand characters
- Optional special characters that maintain left-right hand balance
- Optional capital letters
- Customizable password length

## Running with Docker

Pull from Docker Hub:
```
docker run -p 8080:80 xanderstrike/balanced-password
```

Or build locally:
```
docker build -t balanced-password-generator .
docker run -p 8080:80 balanced-password-generator
```

Open your browser and go to http://localhost:8080 to use the tool.
